"use client";
import { getDateInputLimits } from "@/hooks/getDateInputLimits";
import useBookingForm from "@/hooks/useBookingForm";
import {
  BookingCalenderIcon,
  CalendarIcon,
  CallIcon,
  MailIcon,
  UserIcon,
} from "@/utils/formIcons";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IoIosArrowDown } from "react-icons/io";
import { countries } from "../../utils/constent";

interface Props {
  gridView?: boolean;
}
const Form2 = ({ gridView }: Props) => {
  const {
    isSubmitting,
    errors,
    handleSubmit,
    formData,
    handleChange,
    setFieldValue,
  } = useBookingForm({
    includeCheckIn: true,
    includeCheckOut: true,

    onSubmitSuccess: () => {
      setStartDate(null);
      setEndDate(null);
    },
  });
  const { min, max } = getDateInputLimits({
    showPast: false,
    showFuture: true,
  });

  const minDate = min ? new Date(min) : undefined;
  const maxDate = max ? new Date(max) : undefined;

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [guestOpen, setGuestOpen] = useState(false);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

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
  const guestLabel = `${adults} Adult${adults !== 1 ? "s" : ""}${
    children > 0 ? `, ${children} Child${children !== 1 ? "ren" : ""}` : ""
  }`;
  const formFields = [
    {
      name: "name",
      label: "Name",
      type: "text",
      value: formData.name,
      onChange: handleChange,
      icon: <UserIcon />,
    },
    {
      name: "phone",
      label: "Ph Number",
      type: "tel",
      value: formData.phone,
      onChange: handleChange,
      icon: <CallIcon />,
    },
    {
      name: "email",
      label: "Email ID",
      type: "email",
      value: formData.email,
      onChange: handleChange,
      icon: <MailIcon />,
    },
  ];
  // useEffect(() => {
  //   if (submitSuccess) {
  //     setStartDate(null);
  //     setEndDate(null);
  //   }
  // }, [submitSuccess]);

  return (
    <form
      onSubmit={handleSubmit}
      className={`${gridView ? "flex flex-col gap-2" : "grid md:grid-cols-6 items-center gap-3.5 "} font-body xl:px-4 bg-transparent  max-md:divide-y divide-p1`}
    >
      {formFields.map((field, index) => (
        <React.Fragment key={index}>
          {field.type === "date" ? (
            <div
              className={`bg-white flex items-center gap-2.5 lg:border-[0.5px] lg:shadow border-light/30 lg:rounded-lg ${
                gridView ? "p-4" : "px-3 py-3 lg:px-2"
              }`}
            >
              <label className="text-secondary">{field.icon}</label>

              <DatePicker
                selected={startDate}
                onChange={handleDateChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                minDate={minDate}
                maxDate={maxDate}
                placeholderText={`${field.label} *`}
                calendarClassName="!z-[99999]"
                popperClassName="!z-[99999]"
                className="pointer-events-auto placeholder:text-secondarya outline-none w-full h-full bg-transparent text-base text-secondarya"
                wrapperClassName="w-full h-full !flex items-center"
              />
            </div>
          ) : field.type === "tel" ? (
            <div
              className={`bg-white flex items-center gap-2.5 lg:border-[0.5px] lg:shadow border-light/30 lg:rounded-lg ${
                gridView ? "p-4" : "px-3 py-3 lg:px-2"
              }`}
            >
              <label className="text-secondary">{field.icon}</label>

              <div className="relative">
                <select
                  className="ps-2 cursor-pointer border-p1 appearance-none w-full placeholder:text-secondarya focus:outline-none text-secondarya"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={(e) => setFieldValue("countryCode", e.target.value)}
                  style={{
                    width: `${formData.countryCode.length * 2}ch`,
                  }}
                  aria-label="Country Code"
                >
                  {countries.map((country, index) => (
                    <option key={index} value={country.code}>
                      {country.code}
                    </option>
                  ))}
                </select>

                <span className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                  <IoIosArrowDown />
                </span>
              </div>

              <input
                type="tel"
                name={field.name}
                placeholder={`${field.label} *`}
                className="w-full placeholder:text-secondarya focus:outline-none text-secondarya"
                value={field.value}
                onChange={field.onChange}
              />
            </div>
          ) : (
            <div
              className={`flex bg-white items-center gap-2.5 lg:border-[0.5px] lg:shadow border-light/30 lg:rounded-lg ${
                gridView ? "p-4" : "px-3 py-3 lg:px-2"
              }`}
            >
              <label className="text-secondary">{field.icon}</label>

              <input
                type={field.type}
                name={field.name}
                placeholder={`${field.label} *`}
                className="w-full placeholder:text-secondarya focus:outline-none text-secondarya"
                value={field.value}
                onChange={field.onChange}
              />
            </div>
          )}

          {errors[field.name] && (
            <p className="text-red-500">{errors[field.name]}</p>
          )}
        </React.Fragment>
      ))}

      <div
        className={`relative z-[100] bg-white flex items-center gap-2.5 lg:border-[0.5px] lg:shadow border-light/30 lg:rounded-lg ${
          gridView ? "p-4" : "px-3 py-3 lg:px-2"
        }`}
        onClick={() => setGuestOpen((o) => !o)}
      >
        <span className="text-secondarya/60">
          <UserIcon />
        </span>

        <span className="flex-1 cursor-pointer text-base text-black/50">
          {guestLabel}
        </span>

        <IoIosArrowDown
          className={`pointer-events-none text-secondarya/60 transition-transform duration-200 ${
            guestOpen ? "rotate-180" : ""
          }`}
        />

        {guestOpen && (
          <div
            className="absolute left-0 top-full z-[99999] mt-1 w-full min-w-[250px] rounded-lg bg-white p-4 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <GuestRow
              label="Adults"
              value={adults}
              min={1}
              onChange={setAdults}
            />

            <GuestRow
              label="Children"
              value={children}
              min={0}
              onChange={setChildren}
            />
          </div>
        )}
      </div>

      <div
        className={`bg-white flex items-center gap-2.5 lg:border-[0.5px] lg:shadow border-light/30 lg:rounded-lg ${
          gridView ? "p-4" : "px-3 py-3 lg:px-2"
        }`}
      >
        <label className="text-secondary">
          <CalendarIcon />
        </label>

        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          minDate={minDate}
          maxDate={maxDate}
          placeholderText="Check-in & out *"
          calendarClassName="!z-[99999]"
          popperClassName="!z-[99999]"
          className="pointer-events-auto placeholder:text-secondarya outline-none w-full h-full bg-transparent text-base text-secondarya"
          wrapperClassName="w-full h-full !flex items-center"
        />
      </div>
      <button
        type="submit"
        className=" bg-gold w-full rounded-lg text-white text-lg py-3"
      >
        {isSubmitting ? (
          "Submitting..."
        ) : (
          <span className="flex items-center justify-center gap-2.5">
            <span className="">
              <BookingCalenderIcon />
            </span>{" "}
            Book Now{" "}
          </span>
        )}
      </button>
    </form>
  );
};

function GuestRow({
  label,
  value,
  min,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  onChange: (v: number) => void;
}) {
  return (
    <div className="mb-3 flex items-center justify-between last:mb-0">
      <span className="text-sm text-secondarya">{label}</span>

      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => value > min && onChange(value - 1)}
          className="flex h-7 w-7 items-center justify-center rounded-full border text-base leading-none transition hover:bg-gray-100"
        >
          −
        </button>

        <span className="w-4 text-center text-sm text-secondarya">{value}</span>

        <button
          type="button"
          onClick={() => onChange(value + 1)}
          className="flex h-7 w-7 items-center justify-center rounded-full border text-base leading-none transition hover:bg-gray-100"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Form2;
