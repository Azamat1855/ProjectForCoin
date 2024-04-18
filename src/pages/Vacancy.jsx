  import React, { useEffect, useState } from "react";
  import { FaStar, FaRegStar, FaLock } from "react-icons/fa";
  import { ImCheckboxChecked } from "react-icons/im";
  import { BsBriefcaseFill } from "react-icons/bs";
  import VacancyInputs from "../components/Vacancy/VacancyInputs";

  const Vacancy = () => {
    const [vacancies, setVacancies] = useState([]);

    const favoriteClicked = async (index) => {
      const updatedVacancies = vacancies.map((vacancy, i) => {
        if (i === index) {
          const updatedVacancy = { ...vacancy };
          updatedVacancy.favorite = !updatedVacancy.favorite;
          return updatedVacancy;
        }
        return vacancy;
      });
    
      console.log("Updated Vacancies:", updatedVacancies);
    
      setVacancies(updatedVacancies);
    };
    
    const favoriteCount = vacancies.filter(vacancy => vacancy.favorite).length;
    const openedCount = vacancies.filter(vacancy => vacancy.status).length;
    const closedCount = vacancies.filter(vacancy => !vacancy.status).length;
    
    useEffect(() => {
      fetch("http://localhost:3001/vacancies")
        .then((res) => res.json())
        .then((data) => {
          setVacancies(data);
          console.log(data);
        })
        .catch((error) => console.error('Error fetching vacancies:', error));
    }, []);

    const reject = (
      <p className="px-[5px] py-[2px] text-[14px] bg-red-200 rounded-md border border-red-300 text-red-500 font-medium">
        closed
      </p>
    );
    const open = (
      <p className="px-[5px] py-[2px] text-[14px] bg-green-200 rounded-md border border-green-300 text-green-500 font-medium">
        opened
      </p>
    );

    return (
      <>
        <div className="w-[100%]">
          <div className="w-[80%] flex flex-col pt-10 mx-auto">
            <form action="" className="flex relative w-full h-[60px] mx-auto">
              <input
                type="text"
                className="flex border input w-full h-full rounded-2xl shadow shadow-slate-400"
                placeholder="Search for vacancies . . ."
              />
              <button className="bg-blue-500 px-[40px] h-full absolute right-0 rounded-r-2xl text-white">
                Search
              </button>
            </form>
            <div className="flex pt-10 justify-between">
              <div className="find&create w-[280px] flex flex-col h-[500px] gap-[20px]">
                <div className="border border-blue-200 rounded-3xl shadow-md shadow-violet-100">
                  <div className="text-gray-600 all-vacancies border-b border-blue-200 flex items-center justify-between p-[20px] hover:bg-blue-100 transition duration-300 active:scale-100 hover:scale-105 rounded-t-3xl">
                    <div className="flex items-center gap-3">
                      <div>
                        <BsBriefcaseFill />
                      </div>
                      <div className="flex flex-col leading-[15px]">
                        <p className="font-medium text-[15px]">All vacancies</p>
                        <p className="text-[13px]">Explore all vacancies</p>
                      </div>
                    </div>
                    <div className="text-[0.7em] bg-blue-500 text-white rounded-full flex items-center justify-center size-5 font-mono">
                      {vacancies.length}
                    </div>
                  </div>
                  <div className="text-gray-600 favorites border-b border-blue-200 flex items-center justify-between p-[20px] hover:bg-blue-100 transition duration-300 active:scale-100 hover:scale-105">
                    <div className="flex items-center gap-2 ">
                      <div>
                        <FaStar className="text-[20px]" />
                      </div>
                      <div className="flex flex-col leading-[15px]">
                        <p className="font-medium text-[15px]">Favorites</p>
                        <p className="text-[13px]">Explore favorites</p>
                      </div>
                    </div>
                    <div className="text-[0.7em] bg-blue-500 text-white rounded-full flex items-center justify-center size-5 font-mono">
                      {favoriteCount}
                    </div>
                  </div>
                  <div className="text-gray-600 opened border-b border-blue-200 flex items-center justify-between p-[20px] hover:bg-blue-100 transition duration-300 active:scale-100 hover:scale-105">
                    <div className="flex items-center gap-3">
                      <div>
                        <ImCheckboxChecked />
                      </div>
                      <div className="flex flex-col leading-[15px]">
                        <p className="font-medium text-[15px]">Opened vacancies</p>
                        <p className="text-[13px]">Explore opened vacancies</p>
                      </div>
                    </div>
                    <div className="text-[0.7em] bg-blue-500 text-white rounded-full flex items-center justify-center size-5 font-mono">
                      <p>{openedCount}</p>
                    </div>
                  </div>
                  <div className="text-gray-600 closed flex border-blue-200 items-center justify-between p-[20px] hover:bg-blue-100 transition duration-300 active:scale-100 hover:scale-105 rounded-b-3xl">
                    <div className="flex items-center gap-3">
                      <div>
                        <FaLock />
                      </div>
                      <div className="flex flex-col leading-[15px]">
                        <p className="font-medium text-[15px]">Closed vacancies</p>
                        <p className="text-[13px]">Explore closed vacancies</p>
                      </div>
                    </div>
                    <div className="text-[0.7em] bg-blue-500 text-white rounded-full flex items-center justify-center size-5 font-mono">
                      <p>{closedCount}</p>
                    </div>
                  </div>
                </div>
                <VacancyInputs />
              </div>

              <div className="overflow-y-auto flex flex-col gap-[10px]">
                {vacancies.map((vacancy, id) => (
                  <div
                    key={id}
                    className="text-gray-600 w-[700px] vacancy-card shadow border shadow-blue-200 flex items-center justify-between p-[20px] transition duration-300 active:scale-100 rounded-2xl"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-[40px] h-[40px] rounded-xl bg-blue-500 flex items-center justify-center">
                        <img src="" alt="" />
                        {vacancy.img}
                      </div>
                      <div className="flex flex-col leading-[15px]">
                        <div className="flex gap-2 items-center">
                          <p className="font-medium text-[15px]">
                            {vacancy.name}
                          </p>
                          <div>{vacancy.status === "opened" ? open : reject}</div>
                        </div>
                        <p className="text-[13px]">
                          <span className="text-green-500">
                            {vacancy.applied} applied
                          </span>{" "}
                          •{" "}
                          <span className="text-red-400">
                            {vacancy.rejected} rejected
                          </span>
                        </p>
                      </div>
                    </div>
                    <button onClick={() => favoriteClicked(id)}>
                      {vacancy.favorite ? (
                        <FaStar className="text-[20px] text-yellow-500" />
                      ) : (
                        <FaRegStar className="text-[20px] text-yellow-500" />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default Vacancy;
