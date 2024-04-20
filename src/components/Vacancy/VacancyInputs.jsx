import React from "react";

const VacancyInputs = () => {
  return (
    <div className="border shadow-md shadow-blue-200 rounded-3xl h-full p-[20px] bg-blue-100 flex flex-col justify-between">
      <p className="text-[18px] font-medium text-slate-600">Create a new vacancy</p>
      <input type="text" className="input" placeholder="Vacancy name" />
      <button className="bg-blue-500 rounded-lg py-[7px] text-white hover:bg-[#6b97ff] active:scale-90 transition duration-300">
        Create
      </button>
    </div>
  );
};

export default VacancyInputs;
