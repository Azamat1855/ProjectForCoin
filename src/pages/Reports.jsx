import React, { useState } from 'react';
import TableReports from '../components/Table/TableReports';



const Reports = () => {
  const [reports, setReports] = useState([
    {
      id: 0,
      image: "https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg",
      reportTitle: "financial results report ",
      description: "Abubakir chichqoq kotiboq tentay axmoq",
      username: "Bekzod",
      userid: 2,
      dateSubmit: "01-04-2024",
      timeSubmit: "14:46",
      forWho: "admin",
      checked: false,
      

    },
    {
      id: 1,
      image:"https://img.freepik.com/free-photo/expressive-bearded-man-wearing-shirt_273609-5894.jpg",
      reportTitle: "financial results report  ",
      description: "Abubakir chichqoq kotiboq tentay axmoq",
      username: "Abdulla",
      userid: 14,
      dateSubmit: "05-04-2024",
      timeSubmit: "13:40",
      forWho: "secretary",
      checked: false,
      

    },
    {
      id: 2,
      image:"https://img.freepik.com/premium-photo/portrait-smiling-young-man-dressed-shirt_171337-30374.jpg",
      reportTitle: "financial results repor  ",
      description: "Abubakir chichqoq kotiboq tentay axmoq",
      username: "Yahyo",
      userid: 16,
      dateSubmit: "06-04-2024",
      timeSubmit: "15:25",
      forWho: "admin",
      checked: false,

    },
    {
      id: 3,
      image:"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
      reportTitle: "financial results report",
      description: "Abubakir chichqoq kotiboq tentay axmoq",
      username: "Mirlaziz",
      userid: 18,
      dateSubmit: "03-04-2024",
      timeSubmit: "12:43",
      forWho: "secretary",
      checked: false,
      

    },
    {
      id: 4,
      image:"https://t4.ftcdn.net/jpg/02/86/91/07/360_F_286910791_6pyZoqyscNVq8s7oK998hjLT4L2fqDEn.jpg",
      reportTitle: "financial results report  ",
      description: "Abubakir chichqoq kotiboq tentay axmoq",
      username: "Bekhruz",
      userid: 22,
      dateSubmit: "06-04-2024",
      timeSubmit: "11:50",
      forWho: "admin",
      checked: false,
      

    },
    {
      id: 5,
      image:"https://t3.ftcdn.net/jpg/03/64/27/78/360_F_364277864_YK6QT9kXUEI6wqpkFRhbH17LQyANrTvF.jpg",
      reportTitle: "financial results report",
      description: "Abubakir chichqoq kotiboq tentay axmoq",
      username: "Bekzod",
      userid: 24,
      dateSubmit: "07-04-2024",
      timeSubmit: "15:46",
      forWho: "secratary",
      checked: false,
      

    },
    {
      id: 6,
      image:"https://impersonateme.com/cdn/shop/files/linkedin-ai-headshot_1200x.png?v=1699773650",
      reportTitle: "financial results report ",
      description: "Abubakir chichqoq kotiboq tentay axmoq",
      username: "Aziz",
      userid: 12,
      dateSubmit: "08-04-2024",
      timeSubmit: "16:13",
      forWho: "admin",
      checked: false,
      

    },
    {
      id: 7,
      image:"https://i.pinimg.com/736x/9b/61/30/9b613063452cb6b853a53c567f69a1d5.jpg",
      reportTitle: "financial results report",
      description: "Abubakir chichqoq kotiboq tentay axmoq",
      username: "Diyor",
      userid: 26,
      dateSubmit: "09-04-2024",
      timeSubmit: "17:17",
      forWho: "secratary",
      checked: false,
      
      
    },
  ]);

  return (
    <div className='w-full px-10 py-5'>
      <div className='flex justify-between items-center mb-5'>
        <p className='py-4 text-3xl justify-center items-center  '>Reports</p>
        <div>
          <button className='btn btn-info justify-center w-50 '>Delete all</button>
        </div>
      </div>
      <TableReports items={reports} />
    </div>
    
  
  );
}

export default Reports;
