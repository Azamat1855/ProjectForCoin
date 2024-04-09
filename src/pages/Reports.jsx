import React, { useState } from 'react';
import Table from '../components/Table/Table';
import { data } from 'autoprefixer';

const Reports = () => {
  const [reports, setReports] = useState([
    {
      id: 0,
      reportTitle: "financial results report ",
      description: "Abubakir chichqoq kotiboq tentay axmoq",
      username: "Bekzod",
      userid: 12,
      dateSubmit: "01-04-2024",
      timeSubmit: "14:46",
      forWho: "admin",
      checked: false,
      industry:"job",
      
    
    },
    {
      id: 1,
      reportTitle: "financial results report  ",
      description: "Abubakir chichqoq kotiboq tentay axmoq",
      username: "Abdulla",
      userid: 12,
      dateSubmit: "05-04-2024",
      timeSubmit: "13:40",
      forWho: "secretary",
      checked: false,
      industry:"job",
      
    },
    {
      id: 2,
      reportTitle: "financial results repor  ",
      description: "Abubakir chichqoq kotiboq tentay axmoq",
      username: "Yahyo",
      userid: 12,
      dateSubmit: "06-04-2024",
      timeSubmit: "15:25",
      forWho: "admin",
      checked: false,
      industry:"job",
      
    },
    {
      id: 3,
      reportTitle: "financial results report",
      description: "Abubakir chichqoq kotiboq tentay axmoq",
      username: "Mirlaziz",
      userid: 12,
      dateSubmit: "03-04-2024",
      timeSubmit: "12:43",
      forWho: "secretary",
      checked: false,
      industry:"job",
      
    },
    {
      id: 4,
      reportTitle: "financial results report  ",
      description: "Abubakir chichqoq kotiboq tentay axmoq",
      username: "Bekhruz",
      userid: 12,
      dateSubmit: "06-04-2024",
      timeSubmit: "11:50",
      forWho: "admin",
      checked: false,
      industry:"job",
      
    },
    {
      id: 5,
      reportTitle: "financial results report",
      description: "Abubakir chichqoq kotiboq tentay axmoq",
      username: "Bekzod",
      userid: 12,
      dateSubmit: "07-04-2024",
      timeSubmit: "15:46",
      forWho: "secratary",
      checked: false,
      industry:"job",
      
    },
    {
      id: 6,
      reportTitle: "financial results report ",
      description: "Abubakir chichqoq kotiboq tentay axmoq",
      username: "Aziz",
      userid: 12,
      dateSubmit: "08-04-2024",
      timeSubmit: "16:13",
      forWho: "admin",
      checked: false,
      industry:"job",
      
    },
    {
      id: 7,
      reportTitle: "financial results report",
      description: "Abubakir chichqoq kotiboq tentay axmoq",
      username: "Diyor",
      userid: 12,
      dateSubmit: "09-04-2024",
      timeSubmit: "17:17",
      forWho: "secratary",
      checked: false,
      industry:"job",
      
    },
  ]);

  return (
    <div>
      <div className=''>
        <p className='py-4 text-3xl'>Reports</p>
        <div>
          <button className='btn btn-warning'>Delete all</button>
        </div>
        <Table reports={reports} /> 
      </div>
    </div>
  );
}

export default Reports;
