import React, {useState, useEffect} from 'react'
import { FaMagnifyingGlass } from "react-icons/fa6";


const Table = ({ tableName }) => {
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

    const handleDelete = (index) => {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);
    };

    const filteredUsers = users.filter((user) =>
        Object.values(user).some(
            (value) =>
                typeof value === "string" &&
                value.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );

    return (
        <div className="w-[80%] mx-auto pt-[20px]">
            <div className="flex flex-col">
                <div className="flex mb-[20px]">
                    <input
                        type="text"
                        className="w-[500px] h-[50px] px-[10px]  outline-none border rounded-l-lg border-gray-300"
                        placeholder="Want to find something?"
                        value={searchQuery}
                        onChange={handleInputChange}
                    />
                    <div className="h-[50px] w-[70px] flex items-center justify-center bg-[#007EF2] rounded-r-lg text-white"><FaMagnifyingGlass /></div>
                </div>
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className="bg-[#EAEAEA] rounded-sm">
                                <tr>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox" />
                                        </label>
                                    </th>
                                    <th>{tableName}</th>
                                    <th>Address</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Action</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
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
                                                <button onClick={handleSave} className="border border-gray-300 rounded-lg bg-gray-200 px-[9px] pu-[3px]">Save</button>
                                            ) : (
                                                <div >
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
}

export default Table