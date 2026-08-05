"use client";

import { getDateInputLimits } from "@/hooks/getDateInputLimits";
import useForm from "@/hooks/useForm";
import { CalendarIcon, CallIcon, MailIcon, UserIcon } from "@/utils/formIcons";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowDown } from "react-icons/io";
import { countries } from "../../utils/constent";
import { Section, SectionWithContainer } from "../sectionComponants";

interface Form2Props {
  benefits?: string;
  gridView?: boolean;
}

const Form2: React.FC<Form2Props> = ({
  benefits = "Free cancellation on most dates* - Instant confirmation",
  gridView,
}) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const { min, max } = getDateInputLimits({
    showPast: false,
    showFuture: true,
  });

  const minDate = min ? new Date(min) : undefined;
  const maxDate = max ? new Date(max) : undefined;

  const {
    isSubmitting,
    errors,
    handleSubmit,
    formData,
    handleChange,
    setFieldValue,
    submitSuccess,
  } = useForm({
    includeCheckIn: true,
    includeCheckOut: true,
    includeMessage: false,
    includeCity: false,
    onSubmitSuccess: () => {
      setStartDate(null);
      setEndDate(null);
      window.open("/thank-you/", "_blank");
    },
  });

  const handleDateChange = (dates: [Date | null, Date | null]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);

    if (start) {
      setFieldValue("checkIn", start.toISOString().split("T")[0]);
    }
    if (end) {
      setFieldValue("checkOut", end.toISOString().split("T")[0]);
    }
  };

  return (
    <Section
    defaultPadding={false}
    >
      <div className="relative z-20 w-full bg-p1 py-6 px-8 border-t border-white/10">
        <div className="max_width">
          <form
            onSubmit={handleSubmit}
            className={`flex flex-wrap lg:flex-nowrap items-center justify-between gap-3 ${
              gridView ? "flex-col" : ""
            }`}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 flex-1 w-full">
              <div className="flex flex-col">
                <div className="relative flex items-center bg-white rounded-md px-3 py-2">
                  <span className="text-gray-500 mr-2 shrink-0">
                    <UserIcon />
                  </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name || ""}
                    onChange={handleChange}
                    className="w-full text-sm text-gray-800 bg-transparent focus:outline-none placeholder:text-gray-400"
                  />
                </div>
                {errors.name && (
                  <span className="text-red-400 text-xs mt-1 px-1">
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <div className="relative flex items-center bg-white rounded-md px-3 py-2">
                  <span className="text-gray-500 mr-2 shrink-0">
                    <CallIcon />
                  </span>
                  <div className="relative flex items-center mr-1.5 shrink-0">
                    <select
                      className="cursor-pointer appearance-none bg-transparent pr-4 text-xs text-gray-700 font-medium focus:outline-none"
                      name="countryCode"
                      value={formData.countryCode || "+91"}
                      onChange={(e) =>
                        setFieldValue("countryCode", e.target.value)
                      }
                      style={{
                        width: `${(formData.countryCode || "+91").length + 2}ch`,
                      }}
                      aria-label="Country Code"
                    >
                      {countries.map((country, index) => (
                        <option key={index} value={country.code}>
                          {country.code}
                        </option>
                      ))}
                    </select>
                    <IoIosArrowDown className="absolute right-0 text-gray-400 pointer-events-none text-xs" />
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Ph Number"
                    value={formData.phone || ""}
                    onChange={handleChange}
                    className="w-full text-sm text-gray-800 bg-transparent focus:outline-none placeholder:text-gray-400"
                  />
                </div>
                {errors.phone && (
                  <span className="text-red-400 text-xs mt-1 px-1">
                    {errors.phone}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <div className="relative flex items-center bg-white rounded-md px-3 py-2">
                  <span className="text-gray-500 mr-2 shrink-0">
                    <MailIcon />
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email ID"
                    value={formData.email || ""}
                    onChange={handleChange}
                    className="w-full text-sm text-gray-800 bg-transparent focus:outline-none placeholder:text-gray-400"
                  />
                </div>
                {errors.email && (
                  <span className="text-red-400 text-xs mt-1 px-1">
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="flex flex-col">
                <div className="relative flex items-center bg-white rounded-md px-3 py-2">
                  <span className="text-gray-500 mr-2 shrink-0">
                    <CalendarIcon />
                  </span>
                  <DatePicker
                    selected={startDate}
                    onChange={handleDateChange}
                    startDate={startDate}
                    endDate={endDate}
                    selectsRange
                    minDate={minDate}
                    maxDate={maxDate}
                    placeholderText="Check-In & Out"
                    calendarClassName="!z-[99999]"
                    popperClassName="!z-[99999]"
                    className="w-full text-sm text-gray-800 bg-transparent focus:outline-none placeholder:text-gray-400 cursor-pointer"
                    wrapperClassName="w-full flex items-center"
                  />
                </div>
                {(errors.checkIn || errors.checkOut) && (
                  <span className="text-red-400 text-xs mt-1 px-1">
                    {errors.checkIn || errors.checkOut}
                  </span>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full lg:w-auto bg-gold hover:bg-gold/90 text-white font-semibold px-6 py-2.5 rounded-md text-sm transition-colors whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              <CalendarIcon />
              {isSubmitting
                ? "Submitting..."
                : submitSuccess
                  ? "Thank You!"
                  : "Book Now"}
            </button>
          </form>

          {benefits && (
            <p
              className="text-xs text-gray-300 text-center mt-3 tracking-wide"
              dangerouslySetInnerHTML={{ __html: benefits }}
            />
          )}
        </div>
      </div>
    </Section>
  );
};

export default Form2;
