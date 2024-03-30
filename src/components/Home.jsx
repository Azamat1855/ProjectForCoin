import React, { useState, useEffect } from "react";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((json) => {
        setUsers(json.users)
        console.log(users)
      });
  }, []);

  // Move the console.log(users) here or anywhere else outside the useEffect hook if you still need to log the users state

  return (
    <div className="w-[80%] mx-auto pt-[20px]">
      <div className="flex flex-col">
        <input
          type="text"
          className="w-[500px] h-[50px] px-[10px] mb-[20px]"
          placeholder="Want to find something?"
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
{users.map((item, id) => (
                  <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
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
                        <div className="font-bold">{item.firstName} {item.lastName}</div>
                        <div className="text-sm opacity-50">{item.address.city}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {item.address.address}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {item.company.department}
                    </span>
                  </td>
                  <td>{item.age}</td>
                  <td>{item.gender}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td><MdEdit /></td>
                  <td><MdDelete /></td>
                  <th>
                    <button className="btn btn-ghost btn-xs"></button>
                  </th>
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
