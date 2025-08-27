import React, { useState, useEffect, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import btn from "../assets/Vector.png";
import axios from "axios";

const Form = () => {
  const [currentStep, setCurrentStep] = useState("form"); // 'form', 'estimate', 'success'
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    pickup: "",
    drop: "",
    pickup_date: "",
    pickup_time: "",
    return_date: "",
    trip_type: "one_way",
    selectedCarType: "",
    selectedCarRate: 0,
  });
  const [errors, setErrors] = useState({});
  const [estimationData, setEstimationData] = useState({
    distance: 0,
    duration: "",
    cost: 0,
  });

  const carTypes = [
    {
      type: "Sedan",
      price: 14,
      model: "(₹14/km)",
      image:
        "https://images.ctfassets.net/509kpi6dw56l/6QdZLGkGnMv0F8fDwFMGlE/1b85e10c7d90fdac89a4794938a43780/prime-play-1.png?h=250",
    },
    {
      type: "Etios",
      price: 15,
      model: "(₹15/km)",
      image:
        "https://images.ctfassets.net/509kpi6dw56l/7s8MKkYx4bSfPYlrqUEAW5/c23e3f9a5f9ebbbca681d63f0e8b8130/lux-1.png?h=250",
    },
    {
      type: "MUV",
      price: 19,
      model: "(₹19/km)",
      image:
        "https://images.ctfassets.net/509kpi6dw56l/72yoz2W0gPFPq50SfgPPqU/2c521cd2260cff9246ea2955bc37b707/prime-suv-1.png?h=250",
    },
    {
      type: "Innova",
      price: 20,
      model: "(₹20/km)",
      image:
        "https://images.ctfassets.net/509kpi6dw56l/72yoz2W0gPFPq50SfgPPqU/2c521cd2260cff9246ea2955bc37b707/prime-suv-1.png?h=250",
    },
  ];

  // Refs for pickup and drop inputs
  const pickupRef = useRef(null);
  const dropRef = useRef(null);

  // Set initial dates/times on mount
  useEffect(() => {
    const now = new Date();
    const today = now.toISOString().split("T")[0];
    const currentTime = now.toTimeString().slice(0, 5);

    setFormData((prev) => ({
      ...prev,
      pickup_date: today,
      pickup_time: currentTime,
      return_date: today,
    }));
  }, []);

  // Only run Autocomplete initialization once, after mount
  // useEffect(() => {
  //   if (window.google && window.google.maps && window.google.maps.places) {
  //     // Pickup Autocomplete
  //     if (pickupRef.current) {
  //       const pickupAutocomplete = new window.google.maps.places.Autocomplete(
  //         pickupRef.current,
  //         { types: ["geocode"], componentRestrictions: { country: "in" } }
  //       );
  //       pickupAutocomplete.addListener("place_changed", () => {
  //         const place = pickupAutocomplete.getPlace();
  //         if (place && place.formatted_address) {
  //           setFormData((prev) => ({
  //             ...prev,
  //             pickup: place.formatted_address,
  //           }));
  //           setErrors((prev) => ({
  //             ...prev,
  //             pickup: "",
  //           }));
  //         }
  //       });
  //     }
  //     // Drop Autocomplete
  //     if (dropRef.current) {
  //       const dropAutocomplete = new window.google.maps.places.Autocomplete(
  //         dropRef.current,
  //         { types: ["geocode"], componentRestrictions: { country: "in" } }
  //       );
  //       dropAutocomplete.addListener("place_changed", () => {
  //         const place = dropAutocomplete.getPlace();
  //         if (place && place.formatted_address) {
  //           setFormData((prev) => ({
  //             ...prev,
  //             drop: place.formatted_address,
  //           }));
  //           setErrors((prev) => ({
  //             ...prev,
  //             drop: "",
  //           }));
  //         }
  //       });
  //     }
  //   }
  // }, []);

  useEffect(() => {
    if (currentStep !== "form") return;
  
    if (window.google && window.google.maps && window.google.maps.places) {
      if (pickupRef.current) {
        const pickupAutocomplete = new window.google.maps.places.Autocomplete(
          pickupRef.current,
          { types: ["geocode"], componentRestrictions: { country: "in" } }
        );
        pickupAutocomplete.addListener("place_changed", () => {
          const place = pickupAutocomplete.getPlace();
          if (place?.formatted_address) {
            setFormData((prev) => ({ ...prev, pickup: place.formatted_address }));
            setErrors((prev) => ({ ...prev, pickup: "" }));
          }
        });
      }
  
      if (dropRef.current) {
        const dropAutocomplete = new window.google.maps.places.Autocomplete(
          dropRef.current,
          { types: ["geocode"], componentRestrictions: { country: "in" } }
        );
        dropAutocomplete.addListener("place_changed", () => {
          const place = dropAutocomplete.getPlace();
          if (place?.formatted_address) {
            setFormData((prev) => ({ ...prev, drop: place.formatted_address }));
            setErrors((prev) => ({ ...prev, drop: "" }));
          }
        });
      }
    }
  }, [currentStep]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleTripTypeChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      trip_type: value,
    }));
  };

  const selectCarType = (carType) => {
    setFormData((prev) => ({
      ...prev,
      selectedCarType: carType.type,
      selectedCarRate: carType.price,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      "name",
      "mobile",
      "pickup",
      "drop",
      "pickup_date",
      "pickup_time",
    ];
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = `${field.replace("_", " ")} is required`;
      }
    });
    if (formData.trip_type === "round_trip" && !formData.return_date) {
      newErrors.return_date = "Return Date is required";
    }
    if (!formData.selectedCarType) {
      newErrors.car_type = "Please select a car type";
    }
    if (formData.mobile && !/^[0-9]{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const calculateEstimate = () => {
    if (!validateForm()) return;
    if (!formData.pickup || !formData.drop) {
      alert("Please enter valid pickup and drop locations");
      return;
    }
    const service = new window.google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [formData.pickup],
        destinations: [formData.drop],
        travelMode: window.google.maps.TravelMode.DRIVING,
        unitSystem: window.google.maps.UnitSystem.METRIC,
      },
      (response, status) => {
        if (status !== "OK") {
          console.error("Distance Matrix Service failed:", status);
          alert("Unable to calculate distance. Please check locations.");
          return;
        }
        const element = response.rows[0].elements[0];
        if (element.status !== "OK") {
          console.error("Distance Matrix element not found:", element.status);
          alert(
            "Unable to calculate distance. Please enter valid pickup and drop locations."
          );
          return;
        }

        let distanceInKm = element.distance.value / 1000;
        // Apply round-trip multiplier
       
        const distanceForCost = distanceInKm < 130 ? 130 : distanceInKm;
        let durationMinutes = element.duration.value / 60; // seconds → minutes

        // Format duration AFTER applying round-trip multiplier
        const hrs = Math.floor(durationMinutes / 60);
        const mins = Math.round(durationMinutes % 60);
        const durationText = `${hrs} hrs ${mins} mins`;
        const cost = distanceForCost * formData.selectedCarRate;
        if (formData.trip_type === "round_trip") {
          distanceInKm *= 2;
          durationMinutes *= 2; // NOW duration is also doubled
        }
        setEstimationData({
          distance: distanceInKm.toFixed(2), // true distance shown
          duration: durationText,
          cost: cost.toFixed(2), // fare
        });

        setCurrentStep("estimate");
      }
    );
  };

  const confirmBooking = () => {
    const bookingId = Math.random().toString(36).substring(2, 10).toUpperCase();
    setTimeout(() => {
      setCurrentStep("success");
      // Send booking mail
      const sendBookingMail = async () => {
        try {
          const response = await axios.post(
            "https://back-end-zhya.onrender.com/send-booking-mail",
            {
              bookingId,
              formData,
              estimationData,
            }
          );
          console.log(response.data.message);
        } catch (error) {
          console.error("Error sending booking mail:", error);
        }
      };
      sendBookingMail();
      // WhatsApp message
      const whatsappMsg = `Thanks for Choosing Leo Droptaxi. Your Booking Details:
Booking ID: ${bookingId}
Name: ${formData.name}
Mobile Number: ${formData.mobile}
Pickup Location: ${formData.pickup}
Drop Location: ${formData.drop}
Pickup Date/Time: ${formData.pickup_date} ${formData.pickup_time}
Trip Type: ${formData.trip_type === "round_trip" ? "Round Trip" : "One Way"}
${
  formData.trip_type === "round_trip"
    ? `Return Date: ${formData.return_date}`
    : ""
}
Total KM: ${estimationData.distance} KM
Total Trip Fare: ₹${estimationData.cost}
Car Type: ${formData.selectedCarType}
Rate Per KM: ₹${formData.selectedCarRate}
Driver Batta: ₹400 - ₹500 
Toll, parking, permit extra
For any questions please contact +91 7200343435
https://www.leodroptaxi.com`;

      const encodedMsg = encodeURIComponent(whatsappMsg);
      const whatsappURL = `https://wa.me/917200343435?text=${encodedMsg}`;
      setTimeout(() => {
        window.open(whatsappURL, "_blank");
      }, 1000);
    }, 1000);
  };

  const resetForm = () => {
    setCurrentStep("form");
    const now = new Date();
    const today = now.toISOString().split("T")[0];
    const currentTime = now.toTimeString().slice(0, 5);

    setFormData({
      name: "",
      mobile: "",
      pickup: "",
      drop: "",
      pickup_date: today,
      pickup_time: currentTime,
      return_date: today,
      trip_type: "one_way",
      selectedCarType: "",
      selectedCarRate: 0,
    });
    setErrors({});
    setEstimationData({ distance: 0, duration: "", cost: 0 });
  };

  return (
    <div className="py-8 px-4">
      <div className="max-w-md mx-auto">
        {/* Main Booking Form */}
        {currentStep === "form" && (
          <div className="bg-[#665c5c] text-white p-4 rounded-3xl shadow-2xl">
            <div className="mb-6">
              <h2 className="text-white text-md font-medium">
                Anywhere You Go, We're There
              </h2>
            </div>
            {/* Trip Type */}
            <div className="mb-6">
              <label className="block text-white text-xs font-medium mb-3">
                Trip Type
              </label>
              <div className="flex justify-center gap-16">
                <label className="flex items-start cursor-pointer">
                  <div className="relative  pt-1">
                    <input
                      type="radio"
                      name="trip_type"
                      value="one_way"
                      checked={formData.trip_type === "one_way"}
                      onChange={() => handleTripTypeChange("one_way")}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        formData.trip_type === "one_way"
                          ? "bg-yellow-500 border-yellow-500"
                          : "bg-transparent border-white"
                      }`}
                    >
                      {formData.trip_type === "one_way" && (
                        <div className="">
                          <div className="flex justify-center items-center w-4 h-4 bg-[#665c5c]  rounded-full">
                            <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <span
                    className={`ml-3  text-md font-medium  ${
                      formData.trip_type === "one_way"
                        ? "text-yellow-500 "
                        : "text-white"
                    }`}
                  >
                    ONE WAY
                    <br />
                    {formData.trip_type === "one_way" && (
                      <span className="text-yellow-400 text-[8px]">
                        (MINIMUM 130KM)
                      </span>
                    )}
                  </span>
                </label>
                <label className="flex items-start  cursor-pointer">
                  <div className="relative pt-1">
                    <input
                      type="radio"
                      name="trip_type"
                      value="round_trip"
                      checked={formData.trip_type === "round_trip"}
                      onChange={() => handleTripTypeChange("round_trip")}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                        formData.trip_type === "round_trip"
                          ? "bg-yellow-500 border-yellow-500"
                          : "bg-transparent border-white"
                      }`}
                    >
                      {formData.trip_type === "round_trip" && (
                        <div className="">
                          <div className="flex justify-center items-center w-4 h-4  bg-[#665c5c]  rounded-full">
                            <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <span
                    className={`ml-3  text-md font-medium  ${
                      formData.trip_type === "round_trip"
                        ? "text-yellow-500 "
                        : "text-white"
                    }`}
                  >
                    ROUND TRIP
                    <br />
                    {formData.trip_type === "round_trip" && (
                      <span className="text-yellow-400 text-[8px]">
                        (MINIMUM 130KM)
                      </span>
                    )}
                  </span>
                </label>
              </div>
            </div>
            {/* Pickup Location */}
            <div className="mb-4">
              <label
                htmlFor="pickup"
                className="block text-white text-xs font-medium mb-2"
              >
                Pickup Location <span className="text-red-400">*</span>
              </label>
              <input
                id="pickup"
                ref={pickupRef}
                type="text"
                name="pickup"
                value={formData.pickup}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#c7c408] text-black rounded-xl  placeholder-gray-700 font-medium text-xs focus:outline-none focus:ring-2 focus:ring-yellow-300"
                placeholder="Enter Pickup Location"
                autoComplete="off"
              />
              {errors.pickup && (
                <span className="text-red-300 text-xs ml-4">
                  {errors.pickup}
                </span>
              )}
            </div>
            {/* Drop Location */}
            <div className="mb-4">
              <label
                htmlFor="drop"
                className="block text-white text-xs font-medium mb-2"
              >
                Drop Location <span className="text-red-400">*</span>
              </label>
              <input
                id="drop"
                ref={dropRef}
                type="text"
                name="drop"
                value={formData.drop}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-[#c7c408] text-black rounded-xl  placeholder-gray-700 font-medium text-xs focus:outline-none focus:ring-2 focus:ring-yellow-300"
                placeholder="Enter Drop Location"
                autoComplete="off"
              />
              {errors.drop && (
                <span className="text-red-300 text-xs ml-4">{errors.drop}</span>
              )}
            </div>
            {/* Name and Mobile */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-white text-xs font-medium mb-2"
                >
                  Name <span className="text-red-400">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#c7c408] text-black rounded-xl placeholder-gray-700 font-medium text-xs focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  placeholder="Enter Your Name"
                />
                {errors.name && (
                  <span className="text-red-300 text-xs ml-2">
                    {errors.name}
                  </span>
                )}
              </div>
              <div>
                <label
                  htmlFor="mobile"
                  className="block text-white text-xs font-medium mb-2"
                >
                  Mobile <span className="text-red-400">*</span>
                </label>
                <input
                  id="mobile"
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#c7c408] text-black rounded-xl placeholder-gray-700 font-medium text-xs focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  placeholder="Enter Mobile Number"
                  maxLength="10"
                />
                {errors.mobile && (
                  <span className="text-red-300 text-xs ml-2">
                    {errors.mobile}
                  </span>
                )}
              </div>
            </div>
            {/* Date and Time */}
            <div className="grid grid-cols-2">
              <div className="grid grid-cols-1 gap-3 mb-6">
                <div className="relative">
                  <label
                    htmlFor="pickup_date"
                    className="block text-white text-xs font-medium mb-2"
                  >
                    Pickup Date <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="date"
                    name="pickup_date"
                    value={formData.pickup_date}
                    min={new Date().toISOString().split("T")[0]}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3  bg-[#c7c408] text-black rounded-xl font-medium text-xs focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  />
                  {errors.pickup_date && (
                    <span className="text-red-300 text-xs ml-2">
                      {errors.pickup_date}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <label
                    htmlFor="pickup_time"
                    className="block text-white text-xs font-medium mb-2"
                  >
                    Pickup Time <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="time"
                    name="pickup_time"
                    value={formData.pickup_time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3  bg-[#c7c408] text-black rounded-xl font-medium text-xs focus:outline-none focus:ring-2 focus:ring-yellow-300"
                  />
                  {errors.pickup_time && (
                    <span className="text-red-300 text-xs ml-2">
                      {errors.pickup_time}
                    </span>
                  )}
                </div>
                {formData.trip_type === "round_trip" && (
                  <div>
                    <div className="relative">
                      <label
                        htmlFor="return_date"
                        className="block text-white text-xs font-medium mb-2"
                      >
                        Return Date <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="date"
                        name="return_date"
                        value={formData.return_date}
                        min={
                          formData.pickup_date ||
                          new Date().toISOString().split("T")[0]
                        }
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-[#c7c408] text-black rounded-xl font-medium text-xs focus:outline-none focus:ring-2 focus:ring-yellow-300"
                      />
                      {errors.return_date && (
                        <span className="text-red-300 text-xs ml-4">
                          {errors.return_date}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Car Selection */}
            <div className="mb-6 ">
              <label className="block text-white text-xs font-medium mb-3">
                Select Car Type <span className="text-red-400">*</span>
              </label>
              <div className="grid grid-cols-2 pl-0 pr-14   gap-4">
                {carTypes.map((car) => (
                  <div
                    key={car.type}
                    onClick={() => selectCarType(car)}
                    className={`p-4 cursor-pointer transition-all text-center  ${
                      formData.selectedCarType === car.type
                        ? "bg-white rounded-xl border-yellow-400 text-black"
                        : " text-white hover:bg-gray-500 hover:rounded-xl"
                    }`}
                  >
                    <img
                      src={car.image}
                      alt={car.type}
                      className="w-full h-8 object-contain mb-2"
                    />
                    <div className="text-xs font-bold">
                      {car.type.toUpperCase()}
                    </div>
                    <div className="text-xs opacity-75">{car.model}</div>
                  </div>
                ))}
              </div>
              {errors.car_type && (
                <span className="text-red-300 text-xs ml-4">
                  {errors.car_type}
                </span>
              )}
            </div>
            <button
              onClick={calculateEstimate}
              className="w-full gap-5 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-colors flex items-center justify-center text-sm"
            >
              Book Your Cab{" "}
              <span>
                <img src={btn} alt="icon" className="w-6  ml-2" />
              </span>
            </button>
          </div>
        )}
        {/* Estimation Summary */}
        {currentStep === "estimate" && (
          <div className="bg-gray-700 text-white p-6 rounded-3xl shadow-2xl">
            <h4 className="text-xl font-bold text-center mb-6">
              Trip Estimation Summary
            </h4>
            <div className="bg-gray-600 rounded-2xl overflow-hidden mb-6">
              <table className="w-full">
                <tbody className="divide-y divide-gray-500">
                  <tr>
                    <th className="text-left py-3 px-4 font-medium text-xs">
                      Trip Estimation
                    </th>
                    <td className="py-3 px-4 text-right font-bold text-yellow-400">
                      ₹
                      {estimationData.distance < 130
                        ? 130 * formData.selectedCarRate
                        : estimationData.cost}
                    </td>
                  </tr>
                  <tr>
                    <th className="text-left py-3 px-4 font-medium text-xs">
                      Total Distance
                    </th>
                    <td className="py-3 px-4 text-right text-xs">
                      {estimationData.distance} km
                    </td>
                  </tr>
                  <tr>
                    <th className="text-left py-3 px-4 font-medium text-xs">
                      Total Duration
                    </th>
                    <td className="py-3 px-4 text-right text-xs">
                      {estimationData.duration}
                    </td>
                  </tr>
                  <tr>
                    <th className="text-left py-3 px-4 font-medium text-xs">
                      Rate Per Km
                    </th>
                    <td className="py-3 px-4 text-right text-xs">
                      ₹{formData.selectedCarRate}
                    </td>
                  </tr>
                  <tr>
                    <th className="text-left py-3 px-4 font-medium text-xs">
                      Selected Car Type
                    </th>
                    <td className="py-3 px-4 text-right text-xs">
                      {formData.selectedCarType}
                    </td>
                  </tr>
                  <tr>
                    <th className="text-left py-3 px-4 font-medium text-xs">
                      Driver Allowance
                    </th>
                    <td className="py-3 px-4 text-right text-xs text-green-400">
                      INCLUDED
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {estimationData.distance < 130 && (
              <div className="bg-red-200 text-red-800 p-3 rounded-lg mb-3 text-xs font-bold">
                Minimum chargeable distance is 130 km. Price has been adjusted
                accordingly.
              </div>
            )}
            <div className="bg-yellow-100 text-black p-3 rounded-lg mb-6 text-xs">
              <p>
                <strong>Note:</strong> Toll charges, parking fees, and permits
                are extra and will be collected separately as per actual.
              </p>
            </div>
            <div className="text-center space-y-3">
              <button
                onClick={confirmBooking}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-colors"
              >
                Confirm Booking
              </button>
              <button
                onClick={() => setCurrentStep("form")}
                className="w-full bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-medium py-3 px-6 rounded-xl transition-colors"
              >
                Back to Form
              </button>
            </div>
          </div>
        )}
        {/* Success Page */}
        {currentStep === "success" && (
          <div className="bg-gray-700 text-white p-6 rounded-3xl shadow-2xl text-center">
            <FaCheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h4 className="text-xl font-bold mb-4">
              🎉 Ride Booked Successfully!
            </h4>
            <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
              <p className="text-xs font-medium">
                Your booking has been confirmed! You will receive booking
                details on WhatsApp shortly.
              </p>
            </div>
            <div className="bg-gray-600 rounded-lg p-4 mb-6 text-left text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <strong>Name:</strong> {formData.name}
                </div>
                <div>
                  <strong>Mobile:</strong> {formData.mobile}
                </div>
                <div className="col-span-2">
                  <strong>Pickup:</strong> {formData.pickup}
                </div>
                <div className="col-span-2">
                  <strong>Drop:</strong> {formData.drop}
                </div>
                <div>
                  <strong>Date:</strong> {formData.pickup_date}
                </div>
                <div>
                  <strong>Time:</strong> {formData.pickup_time}
                </div>
                <div>
                  <strong>Car:</strong> {formData.selectedCarType}
                </div>
                <div>
                  <strong>Fare:</strong> ₹{estimationData.cost}
                </div>
              </div>
            </div>
            <p className="text-xs mb-6 opacity-90">
              Thanks for choosing <strong>Leo Drop Taxi</strong>! For any
              queries, contact: <strong>+91 9486891950</strong>
            </p>
            <div className="space-y-3">
              <button
                onClick={resetForm}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl transition-colors"
              >
                Book Another Ride
              </button>
              <button
                onClick={() => window.location.reload()}
                className="w-full bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-medium py-3 px-6 rounded-xl transition-colors"
              >
                Go to Homepage
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
