import React, { useState, useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";

const AddBranch = () => {

  
  return (
    <div className="bg-slate-700 shadow-lg glass shadow-slate-600 rounded w-[500px] flex flex-col h-[500px] gap-[20px] items-center justify-center">
      <input
        type="text"
        placeholder="Branch Name"
        id="name"
        className="w-[320px] h-[50px] rounded px-[10px] shadow-md shadow-slate-700 outline-none"
      />
      <input
        type="text"
        placeholder="Branch Address"
        id="address"
        className="w-[320px] h-[50px] rounded px-[10px] shadow-md shadow-slate-700 outline-none"
      />
      <input
        type="text"
        placeholder="Opening time"
        id="openTime"
        className="w-[320px] h-[50px] rounded px-[10px] shadow-md shadow-slate-700 outline-none"
      />
      <input
        type="text"
        placeholder="Working hours"
        id="workHours"
        className="w-[320px] h-[50px] rounded px-[10px] shadow-md shadow-slate-700 outline-none"
      />
      <input
        type="text"
        placeholder="Branch manager"
        id="Manager"
        className="w-[320px] h-[50px] rounded px-[10px] shadow-md shadow-slate-700 outline-none"
      />
      <input
        type="text"
        placeholder="Main Chief"
        id="Chief"
        className="w-[320px] h-[50px] rounded px-[10px] shadow-md shadow-slate-700 outline-none"
      />
      <input
        type="text"
        placeholder="PhoneNUmber"
        id="phone"
        className="w-[320px] h-[50px] rounded px-[10px] shadow-md shadow-slate-700 outline-none"
      />
    </div>
  );
};

const Branches = () => {
  const [branches, setBranches] = useState([]);
  const [selectedBranchId, setSelectedBranchId] = useState(null);
  const [isBranchClicked, setIsBranchClicked] = useState(false);
  const [isAddBranchClicked, setIsAddBranchClicked] = useState(false);
  const [editingBranchId, setEditingBranchId] = useState(null);
  const [isEditing, setIsEditing] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3001/branches")
      .then((res) => res.json())
      .then((data) => {
        setBranches(data);
        console.log(data);
      })
      .catch((error) => console.error("Error fetching branches:", error));
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

  const toggleAddBranch = () => {
    setIsAddBranchClicked(!isAddBranchClicked);

    setIsBranchClicked(false);
  };

  const backButton = (
    <button
      className="px-[20px] py-[10px] bg-[#007EF2] active:scale-90 transition duration-300 hover:bg-[#3099fc] text-white rounded-md mb-[20px] flex items-center gap-2 justify-end"
      onClick={resetButton}
    >
      <FaArrowLeft />
      Back to All Branches
    </button>
  );

  const [isCommitting, setIsCommitting] = useState(false);

  const commitBranch = () => {
    console.log("Committing branch...");

    if (isCommitting) {
      console.log("Commit already in progress, returning...");
      return;
    }

    const name = document.getElementById("name").value;
    const address = document.getElementById("address").value;
    const openTime = document.getElementById("openTime").value;
    const workHours = document.getElementById("workHours").value;
    const manager = document.getElementById("Manager").value;
    const chief = document.getElementById("Chief").value;
    const phone = document.getElementById("phone").value;

    if (
      !name ||
      !address ||
      !openTime ||
      !workHours ||
      !manager ||
      !chief ||
      !phone
    ) {
      alert("Please fill in all inputs");
      return;
    }

    setIsCommitting(true);

    const newBranch = {
      id: branches.length + 1,
      name,
      address,
      whenOpened: openTime,
      workTime: workHours,
      branchManager: manager,
      mainChief: chief,
      phone,
    };

    setBranches((prevBranches) => [...prevBranches, newBranch]);

    setIsAddBranchClicked(false);

    setIsCommitting(false);
  };

  const handleEdit = (e, id) => {
    e.stopPropagation();
    setIsBranchClicked(false);
    setEditingBranchId(id);
    setIsEditing(id);
  };

  const saveEditedBranch = (id) => {
    const editedBranchIndex = branches.findIndex((branch) => branch.id === id);
    const editedBranch = {
      ...branches[editedBranchIndex],
      name: document.getElementById(`name-${id}`).value,
      address: document.getElementById(`address-${id}`).value,
      whenOpened: document.getElementById(`openTime-${id}`).value,
      workTime: document.getElementById(`workHours-${id}`).value,
      branchManager: document.getElementById(`Manager-${id}`).value,
      mainChief: document.getElementById(`Chief-${id}`).value,
      phone: document.getElementById(`phone-${id}`).value,
    };

    const updatedBranches = [...branches];
    updatedBranches[editedBranchIndex] = editedBranch;
    setBranches(updatedBranches);

    setEditingBranchId(null);
    setIsEditing(null);
  };

  const handleSave = (id) => {
    const name = document.getElementById(`name-${id}`).value;
    const address = document.getElementById(`address-${id}`).value;
    const openTime = document.getElementById(`openTime-${id}`).value;
    const workHours = document.getElementById(`workHours-${id}`).value;
    const manager = document.getElementById(`Manager-${id}`).value;
    const chief = document.getElementById(`Chief-${id}`).value;
    const phone = document.getElementById(`phone-${id}`).value;

    const branchIndex = branches.findIndex((branch) => branch.id === id);

    const updatedBranches = [...branches];
    updatedBranches[branchIndex] = {
      ...updatedBranches[branchIndex],
      name,
      address,
      whenOpened: openTime,
      workTime: workHours,
      branchManager: manager,
      mainChief: chief,
      phone,
    };

    setBranches(updatedBranches);

    // Reset editing state
    setEditingBranchId(null);
    setIsEditing(null);
  };

  const handleDelete = (e, id) => {
    e.stopPropagation();

    const updatedBranches = branches.filter((branch) => branch.id !== id);
    setBranches(updatedBranches);

    const branchDiv = document.getElementById(`branch-${id}`);
    if (branchDiv) {
      branchDiv.remove();
    }

    const newBranchDiv = document.getElementById(`branch-${id}`);
    if (newBranchDiv) {
      newBranchDiv.remove();
    }
  };

  return (
    <div>
      <div className="p-10 overflow-ellipsis relative z-0">
        {" "}
        <div className="flex justify-between">
          <p
            className={`${
              isBranchClicked ? "" : "mb-[20px] text-[35px] font-bold"
            }`}
          >
            {isBranchClicked ? backButton : "All Branches"}
          </p>
          <button
            className={`px-[20px] py-[10px] bg-[#007EF2] active:scale-90 transition duration-300 hover:bg-[#3099fc] text-white rounded-md mb-[20px] flex items-center gap-2 justify-end ${
              isBranchClicked ? "hidden" : ""
            }`}
            onClick={toggleAddBranch}
          >
            Create branch
          </button>
        </div>
        {isAddBranchClicked && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
            {" "}
            <div className="bg-white p-8 rounded-lg">
              <AddBranch />
              <div className="flex justify-between">
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4 hover:bg-[#5197ff] transition duration-300 active:scale-90"
                  onClick={toggleAddBranch}
                >
                  Close
                </button>
                <button
                  className="px-4 py-2 bg-blue-500 text-white rounded-md mt-4 hover:bg-[#5197ff] transition duration-300 active:scale-90"
                  onClick={commitBranch}
                >
                  Commit
                </button>
              </div>
            </div>
          </div>
        )}
        {branches.map((branch) => (
          <div
            key={branch.id}
            className={`branch ${
              editingBranchId === branch.id ? "editing" : ""
            }`}
          >
            {editingBranchId === branch.id ? (
              <div>
                <div
                  key={branch.id}
                  className={`branch w-[600px] h-[230px] rounded-xl cursor-pointer shadow-md hover:shadow-lg text-black hover:shadow-slate-300 shadow-gray-300 glass px-5 mb-5 active:scale-90 transition duration-300 ${
                    isBranchClicked ? "hidden" : ""
                  }`}
                  onClick={() => clickedButton(branch.id, branch.name)}
                >
                  <div className="flex justify-between border-b py-5">
                    <div className="flex flex-col">
                      <h4 className="text-[21px] font-bold">
                        <input
                          type="text"
                          className="border border-gray-300 px-1 rounded outline-none"
                          id={`name-${branch.id}`}
                          defaultValue={branch.name}
                          onClick={(e) => {
                            if (editingBranchId) {
                              e.stopPropagation();
                            }
                          }}
                        />
                      </h4>
                      <p>
                        <input
                          type="text"
                          className="border border-gray-300 px-1 rounded outline-none"
                          id={`address-${branch.id}`}
                          defaultValue={branch.address}
                          onClick={(e) => {
                            if (editingBranchId) {
                              e.stopPropagation();
                            }
                          }}
                        />
                      </p>
                    </div>
                    <div>
                      <p className="text-emerald-600">
                        <input
                          type="text"
                          className="border border-gray-300 px-1 rounded outline-none text-end"
                          id={`openTime-${branch.id}`}
                          defaultValue={branch.whenOpened}
                          onClick={(e) => {
                            if (editingBranchId) {
                              e.stopPropagation();
                            }
                          }}
                        />
                      </p>
                    </div>
                  </div>
                  <div className="py-3 flex justify-between">
                    <div className="flex flex-col items-start">
                      <p className="text-gray-500">Working time:</p>
                      <p className="text-[17px]">
                        Mon-Sun:{" "}
                        <span>
                          <input
                            type="text"
                            className="border border-gray-300 px-1 rounded outline-none"
                            id={`workHours-${branch.id}`}
                            defaultValue={branch.workTime}
                            onClick={(e) => {
                              if (editingBranchId) {
                                e.stopPropagation();
                              }
                            }}
                          />
                        </span>
                      </p>
                    </div>
                    <div className="flex flex-col items-end">
                      <p className="text-gray-500">Telephone:</p>
                      <p className="text-[17px]">
                        <input
                          type="text"
                          className="border border-gray-300 px-1 rounded outline-none text-end"
                          id={`phone-${branch.id}`}
                          defaultValue={branch.phone}
                          onClick={(e) => {
                            if (editingBranchId) {
                              e.stopPropagation();
                            }
                          }}
                        />
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end pt-2 gap-[8px]">
                    {isEditing === branch.id ? (
                      <button
                        className="px-3 py-1 bg-green-500 text-white rounded-md"
                        onClick={(e, id) => {
                          handleEdit(e, id);
                          handleSave(branch.id);
                          saveEditedBranch(branch.id);
                          if (editingBranchId) {
                            e.stopPropagation();
                          }
                        }}
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        className="px-3 py-1 bg-blue-500 text-white rounded-md"
                        onClick={() => handleEdit(branch.id)}
                      >
                        Edit
                      </button>
                    )}
                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded-md z-auto hover:bg-[#fe6767] active:scale-90 transition "
                      onClick={(e) => handleDelete(e, branch.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div
                key={branch.id}
                className={`branch w-[600px] h-[230px] rounded-xl cursor-pointer shadow-md hover:shadow-lg text-black hover:shadow-slate-300 shadow-gray-300 glass px-5 mb-5 active:scale-90 transition duration-300 ${
                  isBranchClicked ? "hidden" : ""
                }`}
                onClick={() => clickedButton(branch.id, branch.name)}
              >
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
                    <p className="text-[17px]">
                      Mon-Sun: <span>{branch.workTime}</span>
                    </p>
                  </div>
                  <div className="flex flex-col items-end">
                    <p className="text-gray-500">Telephone:</p>
                    <p className="text-[17px]">{branch.phone}</p>
                  </div>
                </div>
                <div className="flex justify-end pt-2">
                  <button
                    className="px-3 py-1 bg-blue-500 text-white rounded-md mr-2"
                    onClick={(e) => handleEdit(e, branch.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded-md z-auto hover:bg-[#fe6767] active:scale-90 transition "
                    onClick={(e) => handleDelete(e, branch.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      {isBranchClicked && (
        <div className="mx-10">
          <p className="text-[27px] font-bold pb-[20px]">
            {branches.find((branch) => branch.id === selectedBranchId).name}
          </p>

          <div className="p-10 shadow-lg rounded-xl shadow-slate-300 w-[800px] h-[400px] flex justify-between">
            <div className="border w-[300px] h-[300px] rounded-md my-auto"></div>
            <div className="text-center mx-auto leading-7">
              <p className="text-[18px] font-medium">
                {
                  branches.find((branch) => branch.id === selectedBranchId)
                    .address
                }
              </p>
              <p>
                When Opened:{" "}
                {
                  branches.find((branch) => branch.id === selectedBranchId)
                    .whenOpened
                }
              </p>
              <p>
                Working Time:{" "}
                {
                  branches.find((branch) => branch.id === selectedBranchId)
                    .workTime
                }
              </p>
              <p>
                Telephone:{" "}
                {
                  branches.find((branch) => branch.id === selectedBranchId)
                    .phone
                }
              </p>
              <p>
                Branch manager:{" "}
                {
                  branches.find((branch) => branch.id === selectedBranchId)
                    .branchManager
                }{" "}
              </p>
              <p>
                Main Chief:{" "}
                {
                  branches.find((branch) => branch.id === selectedBranchId)
                    .mainChief
                }{" "}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Branches;
