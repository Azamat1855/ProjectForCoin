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
    <div className="w-[80%] mx-auto pt-[20px] ">
      <h1 className="text-5xl font-semibold text-center mb-10">EMPLOYES</h1>
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center">
          <input
            type="text"
            className="w-[500px] h-[50px] px-[10px]  outline-none border rounded-l-lg border-gray-300"
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
          className="mb-6 p-3 bg-blue-500 rounded-lg text-white">Add Employee
          </button>
          </div>
        </div>
        <div>
          {showAddForm && <AddEmployeeForm onSubmit={handleAddFormSubmit} />}
          <div className="overflow-x-auto">
            <table className="table">
              <thead className="bg-[#EAEAEA] rounded-sm">
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th></th>
                </tr>
              </thead>
              <tbody className=" overflow-x-auto">
                {filteredUsers.map((item, index) => (
                  <tr key={index} className="">
                    <th className=" mb-[10px] rounded-xl">
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>
                      {editingIndex === index ? (
                        <input
                          type="text"
                          value={editedUser.firstName}
                          onChange={(e) => handleChange(e, "firstName")}
                        />
                      ) : (
                        <div className="flex items-center gap-3">
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
                          <span className="badge badge-ghost badge-sm">
                            {item.company.department}
                          </span>
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
                    <td>
                      {editingIndex === index ? (
                        <input
                          type="text"
                          value={editedUser.email}
                          onChange={(e) => handleChange(e, "email")}
                        />
                      ) : (
                        <>{item.email}</>
                      )}
                    </td>
                    <td>{item.phone}</td>
                    <td>
                      {editingIndex === index ? (
                        <button
                          onClick={handleSave}
                          className="border border-gray-300 rounded-lg bg-gray-200 px-[9px] pu-[3px]"
                        >
                          Save
                        </button>
                      ) : (
                        <div className="flex gap-4">
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
              <tfoot>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Address</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Phone</th>
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
    email: "",
    phone: "",
    address: "",
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
    <form onSubmit={handleSubmit} className="mb-5">
      <input
        type="text"
        placeholder="First Name"
        value={newEmployee.firstName}
        onChange={(e) => handleChange(e, "firstName")}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={newEmployee.lastName}
        onChange={(e) => handleChange(e, "lastName")}
      />
      <input
        type="text"
        placeholder="Age"
        value={newEmployee.age}
        onChange={(e) => handleChange(e, "age")}
      />
      <input
        type="text"
        placeholder="Gender"
        value={newEmployee.gender}
        onChange={(e) => handleChange(e, "gender")}
      />
      <input
        type="email"
        placeholder="Email"
        value={newEmployee.email}
        onChange={(e) => handleChange(e, "email")}
      />
      <input
        type="text"
        placeholder="Phone"
        value={newEmployee.phone}
        onChange={(e) => handleChange(e, "phone")}
      />
      <input
        type="text"
        placeholder="Address"
        value={newEmployee.address}
        onChange={(e) => handleChange(e, "address")}
      />
      <input
        type="text"
        placeholder="Company"
        value={newEmployee.company}
        onChange={(e) => handleChange(e, "company")}
      />
      <button
        type="submit"
        className="px-4 py-3 bg-blue-500 text-white rounded-md"
      >
        Add
      </button>
    </form>
  );
};

export default Table;
