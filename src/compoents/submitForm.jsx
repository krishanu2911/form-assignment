import React from "react";

export const SubmitForm = () => {
  return (
    <div className="pt-12 md:px-11 px-6 flex flex-col justify-center items-center gap-6">
      <form className=" md:w-1/2 w-full">
        <div class="mb-6 w-full">
          <label for="fullName" className="block mb-5  md:text-xl text-lg">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            className=" w-full bg-[#FAFAFA] px-4 py-3 rounded-lg text-xl"
            placeholder="Full Name"
            required
          />
        </div>
        <div class="mb-6 w-full">
          <label for="fullName" className="block mb-5  md:text-xl text-lg">
            Email
          </label>
          <div className="flex justify-between bg-[#FAFAFA] px-4">
            <input
              type="text"
              id="fullName"
              className=" w-full bg-[#FAFAFA] py-3 rounded-lg text-xl"
              placeholder="Email"
              required
            />
            <img src="/email.svg" />
          </div>
        </div>
      </form>
    </div>
  );
};
