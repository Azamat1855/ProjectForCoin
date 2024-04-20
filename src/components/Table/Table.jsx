import React, { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

const Table = ({ columnsTable }) => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAddForm, setShowAddForm] = useState(false);
  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.users);
      });
  }, []);

  const [editingIndex, setEditingIndex] = useState(null);
  const [editedUser, setEditedUser] = useState({});

  const handleEdit = (index) => {
    setEditingIndex(index);
    setEditedUser(users[index]);
  };

  const handleChange = (e, key) => {
    const { value } = e.target;
    setEditedUser((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    const updatedUsers = [...users];
    updatedUsers[editingIndex] = editedUser;
    setUsers(updatedUsers);
    setEditingIndex(null);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleDelete = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const handleAddEmployee = () => {
    setShowAddForm(!showAddForm);
  };

  const handleAddFormSubmit = (newEmployee) => {
    setUsers([...users, newEmployee]);
    setShowAddForm(false);
  };

  const filteredUsers = users.filter((user) =>
    Object.values(user).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="w-full mx-auto pt-[20px] text-center">
      <h1 className="text-5xl font-semibold text-center mb-10">EMPLOYES</h1>
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center">
          <input
            type="text"
            className="w-[985px] h-[50px] px-[10px] outline-none border rounded-l-lg border-gray-300 text-center"
            placeholder="Want to find something?"
            value={searchQuery}
            onChange={handleInputChange}
          />
          <div className="h-[50px] w-[70px] flex items-center justify-center bg-[#007EF2] rounded-r-lg text-white mr-5">
            <FaMagnifyingGlass />
          </div>
          <div className="">
            <button
              onClick={handleAddEmployee}
              className="mb-6 h-[50px] btn px-6 bg-blue-500 rounded-lg text-white"
            >
              Add Employee
            </button>
          </div>
        </div>
        <div>
          {showAddForm && <AddEmployeeForm onSubmit={handleAddFormSubmit} />}
          <div className="overflow-x-auto rounded">
            <table className="table bg-gray-100 text-center">
              <thead className="bg-gray-300 text-black text-[15px] rounded-sm text-center">
                <tr>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Phone</th>
                  <th>Post</th>
                  <th>Work</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className=" overflow-x-auto">
                {filteredUsers.map((item, index) => (
                  <tr key={index} className=" border-b-2 border-b-black w-full">
                    <td>
                      {editingIndex === index ? (
                        <input
                          type="text"
                          value={editedUser.firstName}
                          onChange={(e) => handleChange(e, "firstName")}
                        />
                      ) : (
                        <div className="flex items-center">
                          <div className="avatar"></div>
                          <div>
                            <div className="font-bold">
                              {item.firstName} {item.lastName}
                            </div>
                            <div className="text-sm opacity-50">
                              {item.address.city}
                            </div>
                          </div>
                        </div>
                      )}
                    </td>
                    <td>
                      {editingIndex === index ? (
                        <input
                          type="text"
                          value={editedUser.address.address}
                          onChange={(e) => handleChange(e, "address")}
                        />
                      ) : (
                        <>
                          {item.address.address}
                          <br />
                        </>
                      )}
                    </td>
                    <td>
                      {editingIndex === index ? (
                        <input
                          type="text"
                          value={editedUser.age}
                          onChange={(e) => handleChange(e, "age")}
                        />
                      ) : (
                        <>{item.age}</>
                      )}
                    </td>
                    <td>
                      {editingIndex === index ? (
                        <input
                          type="text"
                          value={editedUser.gender}
                          onChange={(e) => handleChange(e, "gender")}
                        />
                      ) : (
                        <>{item.gender}</>
                      )}
                    </td>

                    <td>{item.phone}</td>
                    <td>{item.company.department}</td>
                    <td>{item.company.title}</td>
                    <td>
                      {editingIndex === index ? (
                        <button
                          onClick={handleSave}
                          className="border border-gray-300 rounded-lg bg-gray-200 px-[9px] pu-[3px]"
                        >
                          Save
                        </button>
                      ) : (
                        <div className="flex gap-2">
                          <button onClick={() => handleEdit(index)}>
                            <img
                              src="public/clarity_note-edit-solid.png"
                              alt=""
                              className="w-[30px] h-[30px]"
                            />
                          </button>
                          <button
                            className="delete"
                            onClick={() => handleDelete(index)}
                          >
                            <img
                              src="public/ic_baseline-delete-forever.png"
                              alt=""
                              className="w-[30px] h-[30px]"
                            />
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot className="bg-gray-300 rounded-sm">
                <tr className="text-black text-center text-[15px]">
                  <th>Name</th>
                  <th>Age</th>
                  <th>Address</th>
                  <th>Gender</th>
                  <th>Phone</th>
                  <th>Post</th>
                  <th>Work</th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const AddEmployeeForm = ({ onSubmit }) => {
  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    phone: "",
    address: "",
    post: "",
    work: "",
    company: "",
  });

  const handleChange = (e, key) => {
    const { value } = e.target;
    setNewEmployee((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(newEmployee);
  };

  return (
    <form onSubmit={handleSubmit} className="py-5 glass bg-slate-700 flex flex-col items-center justify-center">
     <div className="h-[230px] flex items-center flex-wrap justify-center gap-2">
     <input
        type="text"
        placeholder="First Name"
        value={newEmployee.firstName}
        onChange={(e) => handleChange(e, "firstName")}
        className="outline-none input shadow-gray-400 shadow-lg"
      />
      <input
        type="text"
        placeholder="Last Name"
        value={newEmployee.lastName}
        onChange={(e) => handleChange(e, "lastName")}
        className="outline-none input shadow-gray-500 shadow-lg"
      />
      <input
        type="text"
        placeholder="Age"
        value={newEmployee.age}
        onChange={(e) => handleChange(e, "age")}
        className="outline-none input shadow-gray-500 shadow-lg"
      />
      <input
        type="text"
        placeholder="Gender"
        value={newEmployee.gender}
        onChange={(e) => handleChange(e, "gender")}
        className="outline-none input shadow-gray-500 shadow-lg"
      />
      <input
        type="text"
        placeholder="Phone"
        value={newEmployee.phone}
        onChange={(e) => handleChange(e, "phone")}
        className="outline-none input shadow-gray-500 shadow-lg"
      />
      <input
        type="text"
        placeholder="Address"
        value={newEmployee.address}
        onChange={(e) => handleChange(e, "address")}
        className="outline-none input shadow-gray-400 shadow-lg"
      />
      <input
        type="text"
        placeholder="Post"
        value={newEmployee.post}
        onChange={(e) => handleChange(e, "post")}
        className="outline-none input shadow-gray-500 shadow-lg"
      />
      <input
        type="text"
        placeholder="Work"
        value={newEmployee.work}
        onChange={(e) => handleChange(e, "work")}
        className="outline-none input shadow-gray-500 shadow-lg"
      />
      <input
        type="text"
        placeholder="Company"
        value={newEmployee.company}
        onChange={(e) => handleChange(e, "company")}
        className="outline-none input shadow-gray-500 shadow-lg"
      />
     </div>
      <button
        type="submit"
        className="px-[100px] py-3 bg-blue-500 text-white rounded-md"
      >
        Add
      </button>
    </form>
  );
};

export default Table;
