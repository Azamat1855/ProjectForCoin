import React from 'react';
import { createRoot } from 'react-dom/client';
import { Link } from 'react-router-dom';





const TableReports = ({ items }) => {
    return (
        <div className="overflow-x-auto w-full border rounded-lg h-full">
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>
                            Name
                        </th>
                        <th></th>
                        <th>TimeSubmit</th>
                        <th>ForWho</th>
                        <th>Userid</th>
                    </tr>
                </thead>
                <tbody>
                    {/* <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div className="flex items-center gap-3">
                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">Hart Hagerty</div>
                                    <div className="text-sm opacity-50">United States</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            Zemlak, Daniel and Leannon
                            <br />
                            <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                        </td>
                        <td>Purple</td>
                        <th>
                            <button className="btn btn-ghost btn-xs">details</button>
                        </th>
                    </tr> */}
                    {items.map((item, id) => (
                        <tr key={id}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>

                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <td>{item.checked}</td>
                                        <div className="font-bold">{item.username}</div>
                                        <div className="text-sm opacity-50"><td>{item.reportTitle}</td></div>
                                    </div>
                                </div>
                            </td>

                            <td>

                                <br />
                                <span className="badge badge-ghost badge-sm"><td>{item.dataSubmit}</td></span>
                            </td>
                            <td>{item.timeSubmit}</td>
                            <td>{item.forWho}</td>
                            <td>{item.userid}</td>
                            <th>
                                <Link to={'/reports/' + item.id} className="btn btn-ghost btn-xs">details</Link>
                            </th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default TableReports