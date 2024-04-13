import { data } from 'autoprefixer';
import React, { useState, useEffect } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Reports from '../components/Table/Reports';


 


const AddReports = ({ reports }) => {

  return (
    <div className="w-[80%] mx-auto pt-[20px]">
      <div className="flex flex-col">
        <div className="flex mb-[20px]">
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              <thead className="bg-[#EAEAEA] rounded-sm">
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                </tr>
              </thead>
              <tbody className=" overflow-x-auto">
                {/* row 1 */}
                {reports.map((report, index) => (
                  <tr key={index} className="">
                    <th className=" mb-[10px] rounded-xl">
                      <label>
                        <input type="checkbox" className="checkbox" />
                      </label>
                    </th>
                    <td>{report.reportTitle}</td>
                    <td>{report.description}</td>
                    <td>{report.username}</td>
                    <td>{report.dateSubmit}</td>
                    <td>{report.timeSubmit}</td>
                    <td>{report.forWho}</td>
                    <td>{report.checked ? 'Checked' : 'Unchecked'}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
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

export default AddReports;
