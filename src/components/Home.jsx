import React, { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredUsers = users.filter((user) =>
    Object.values(user).some(
      (value) =>
        typeof value === "string" && value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="w-[80%] mx-auto pt-[20px]">
      <div className="flex flex-col">
        <input
          type="text"
          className="w-[500px] h-[50px] px-[10px] mb-[20px]"
          placeholder="Want to find something?"
          value={searchQuery}
          onChange={handleInputChange}
        />
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {filteredUsers.map((item, index) => (
                  <tr key={index}>
                    <th>
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
                          <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                              <img
                                src={item.image}
                                alt="Avatar Tailwind CSS Component"
                              />
                            </div>
                          </div>
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
                        <button onClick={handleSave}>Save</button>
                      ) : (
                        <button onClick={() => handleEdit(index)}>
                          <MdEdit className="text-[22px]" />
                        </button>
                      )}
                    </td>
                    <td>
                      <button className="delete">
                        <MdDelete className="text-[22px] text-red-500" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              {/* foot */}
              <tfoot>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Gender</th>
                  <th>Address</th>
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

export default Home;
