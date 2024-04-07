import React, { useState, useEffect } from "react";
import { MdEdit, MdDeleteForever, MdSaveAlt, MdOutlineCancel, MdAddBox, MdOutlineDone } from "react-icons/md";

const Branches = () => {
  const [branches, setBranches] = useState([]);
  const [formData, setFormData] = useState({ name: "", address: "", workTime: "", phone: "", branchManager: "", mainChief: "",});
  const [editingBranchId, setEditingBranchId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3001/branches")
      .then((res) => res.json())
      .then((data) => {
        setBranches(data);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/branches", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        setBranches([...branches, data]);
        setFormData({name: "", address: "", workTime: "", phone: "", branchManager: "", mainChief: "",
        });
        setShowForm(false); // Hide form after submission
      } else {
        console.error("Failed to create branch");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEdit = (id) => {
    setEditingBranchId(id);
  };

  const handleSave = async (id) => {

    const isFormFilled = formData.name && formData.address && formData.workTime && formData.phone && formData.branchManager && formData.mainChief;

    if (!isFormFilled) {
      alert("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3001/branches/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const updatedBranches = branches.map((branch) =>
          branch.id === id ? { ...branch, ...formData } : branch
        );
        setBranches(updatedBranches);
        setEditingBranchId(null);
      } else {
        console.error("Failed to save changes");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3001/branches/${id}`, {
        method: "DELETE",
      });
      if (response.ok) {
        setBranches(branches.filter((branch) => branch.id !== id));
      } else {
        console.error("Failed to delete branch");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };;

  const handleCreateBranchClick = () => {
    setShowForm((prevShowForm) => !prevShowForm);
  };

  const handleCancel = () => {

    setFormData({
      name: "",
      address: "",
      workTime: "",
      phone: "",
      branchManager: "",
      mainChief: "",
    });
    setShowForm(false); 
  };

  return (
    <>
      <div className="w-[100%] py-[20px] glas">
        <div className="flex flex-col w-[75%] mx-auto ">
          <div className="flex justify-between py-[30px]">
            <p className="font-bold text-[30px]">All Branches</p>
            <button className="px-[100px] h-[60px] items-center justify-center font-medium text-[18px] bg-blue-500 rounded-lg text-white hover:bg-[#5990fe] shadow-md shadow-slate-400 transition active:scale-90 flex gap-1" onClick={handleCreateBranchClick}>
            <MdAddBox />Create branch
            </button>
          </div>
          {showForm && ( // Render form only if showForm is true
            <form onSubmit={handleSubmit} className="mb-8 flex flex-col items-center border rounded-xl bg-slate-600 glass p-[30px] gap-[20px] shadow-lg shadow-slate-600">
            <div className="flex flex-wrap justify-center gap-[10px]">
            <input type="text" name="name"value={formData.name}onChange={handleChange} placeholder="Branch Name" className="input shadow-md shadow-slate-600" required/>
            <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Branch Address" className="input shadow-md shadow-slate-600" required/>
            <input type="text" name="workTime" value={formData.workTime} onChange={handleChange} placeholder="Working Hours" className="input" required/>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="input shadow-md shadow-slate-600" required/>
            <input type="text" name="branchManager" value={formData.branchManager} onChange={handleChange} placeholder="Branch Manager" className="input shadow-md shadow-slate-600" required/>
            <input type="text" name="mainChief" value={formData.mainChief} onChange={handleChange} placeholder="Main Chief" className="input shadow-md shadow-slate-600" required/>
            </div>
            <button type="submit" className="w-[150px] h-[40px] bg-blue-500 rounded-lg text-white hover:bg-[#5990fe] transition active:scale-90 shadow-md shadow-slate-600 flex items-center justify-center gap-1">
            <MdOutlineDone className="text-[20px] font-semibold"/>Submit
            </button>
          </form>
          )}
          <section className="cards flex flex-col gap-[30px]">
            {branches.map((branch) => (
              <div key={branch.id} className="card bg-[url('src/assets/smashburger_double_classic_hero_195c5015ee.png')] flex flex-col gap-[50px] items-start bg-contain bg-no-repeat bg-right rounded-2xl bg-yellow-100 w-full mx-auto h-[320px] p-[30px]">
                {editingBranchId === branch.id ? (
                  <form className="flex flex-wrap gap-[20px]">
                    <div className="flex flex-col gap-2">
                      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Branch Name" className="input" />
                      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Branch Address" className="input" />
                      <input type="text" name="workTime" value={formData.workTime} onChange={handleChange} placeholder="Working Hours" className="input" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" className="input" />
                      <input type="text" name="branchManager" value={formData.branchManager} onChange={handleChange} placeholder="Branch Manager" className="input" />
                      <input type="text" name="mainChief" value={formData.mainChief} onChange={handleChange} placeholder="Main Chief" className="input" />
                    </div>
                    <div className="flex flex-col gap-[8px]">
                    <button className="btn bg-emerald-500 rounded-lg w-[450px] text-white hover:bg-emerald-400 transition active:scale-90 mt-auto flex gap-1 items-center" onClick={() => handleSave(branch.id)}>
                    <MdSaveAlt className="text-[18px]"/>Save
                    </button>
                    <button className="btn bg-red-500 rounded-lg w-[450px] text-white hover:bg-red-400 transition active:scale-90 mt-auto flex gap-1 items-center" onClick={handleCancel}>
                    <MdOutlineCancel className="text-[18px]"/>Cancel
                    </button>
                    </div>
                  </form>
                ) : (
                  <>
                    <div className="flex flex-col">
                      <p className="title font-bold text-[29px] border-b-gray-400 border-b">
                        {branch.name}
                      </p>
                      <p>{branch.address}</p>
                    </div>
                    <div className="flex gap-[35px] ">
                      <p className="flex flex-col">Working Hours:{" "}<span className="text-[20px] font-medium">{branch.workTime}</span></p>
                      <p className="flex flex-col">Telephone:{" "}<span className="text-[20px] font-medium">{branch.phone}</span>
                      </p>
                    </div>

                    <div className="buttons flex gap-[20px]">
                      <button className="w-[150px] h-[40px] bg-blue-500 rounded-lg text-white hover:bg-[#5990fe] transition active:scale-90 flex items-center justify-center gap-1" onClick={() => handleEdit(branch.id)}>
                      <MdEdit className="text-[18px]"/> Edit
                      </button>

                      <button className="w-[150px] h-[40px] bg-red-500 rounded-lg text-white hover:bg-[#ff6464] transition active:scale-90 flex gap-1 justify-center items-center" onClick={() => handleDelete(branch.id)}>
                      <MdDeleteForever className="text-[18px]"/>Delete
                      </button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Branches;