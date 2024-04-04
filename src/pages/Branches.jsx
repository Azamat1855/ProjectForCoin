import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";

const Branches = () => {
  const [branches, setBranches] = useState([]);
  const [selectedBranchId, setSelectedBranchId] = useState(null);
  const [isBranchClicked, setIsBranchClicked] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/branches')
      .then(res => res.json())
      .then(data => {
        setBranches(data);
        console.log(data);
      })
      .catch(error => console.error('Error fetching branches:', error));
  }, []);

  const clickedButton = (id, name) => {
    setIsBranchClicked(true);
    setSelectedBranchId(id);
    setClickedBranchName(name);
  };

  const resetButton = () => {
    setIsBranchClicked(false);
    setSelectedBranchId(null);
    setClickedBranchName(null);
  };

  const backButton = <button className="px-[20px] py-[10px] bg-[#007EF2] active:scale-90 transition duration-300 hover:bg-[#3099fc] text-white rounded-md mb-[20px] flex items-center gap-2 justify-end" onClick={resetButton}><FaArrowLeft />Back to All Branches</button>        

  return (
    <div>
      <div className="p-10 overflow-ellipsis">
        <p className={`${isBranchClicked ? "" : 'mb-[20px] text-[35px] font-bold'}`}>{isBranchClicked ? backButton : 'All Branches'}</p>
        {branches.map(branch => (
          <div key={branch.id} className={`branch w-[600px] h-[200px] rounded-xl cursor-pointer shadow-md hover:shadow-lg hover:shadow-slate-300 shadow-slate-300 glass px-5 mb-5 active:scale-90 transition duration-300 ${isBranchClicked ? 'hidden' : ''}`} onClick={() => clickedButton(branch.id, branch.name)}>
            <div className="flex justify-between border-b py-5">
              <div className="flex flex-col">
                <h4 className="text-[21px] font-bold">{branch.name}</h4>
                <p>{branch.address}</p>
              </div>
              <div>
                <p className="text-emerald-600">{branch.whenOpened}</p>
              </div>
            </div>
            <div className="py-3 flex justify-between">
              <div className="flex flex-col items-start">
                <p className="text-gray-500">Working time:</p>
                <p className="text-[17px]">Mon-Sun: <span>{branch.workTime}</span></p>
              </div>
              <div className="flex flex-col items-end">
                <p className="text-gray-500">Telephone:</p>
                <p className="text-[17px]">{branch.phone}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isBranchClicked && (
        <div className="mx-10">
          <p className="text-[27px] font-bold pb-[20px]"> {branches.find(branch => branch.id === selectedBranchId).name}</p>
        
          <div className="p-10 shadow-lg rounded-xl shadow-slate-300 w-[800px] h-[400px] flex justify-between">
          <div className="border w-[300px] h-[300px] rounded-md my-auto">

          </div>
          <div className="text-center mx-auto leading-7">
            <p className="text-[18px] font-medium"> {branches.find(branch => branch.id === selectedBranchId).address}</p>
            <p>When Opened: {branches.find(branch => branch.id === selectedBranchId).whenOpened}</p>
            <p>Working Time: {branches.find(branch => branch.id === selectedBranchId).workTime}</p>
            <p>Telephone: {branches.find(branch => branch.id === selectedBranchId).phone}</p>
            <p>Branch manager: {branches.find(branch => branch.id === selectedBranchId).branchManager} </p>
            <p>Main Chief: {branches.find(branch => branch.id === selectedBranchId).mainChief} </p>
            
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Branches;