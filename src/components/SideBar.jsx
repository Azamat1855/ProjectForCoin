import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Accordion from './Accordion';

const SideBar = () => {
  const [links, setLinks] = useState([
    { id: 1, linkname: "Dashboard", href: "/dashboard", img: './Vector.png' },
    { id: 2, linkname: "Branches", href: "/branches", img: './Vector.png' },
    { id: 3, linkname: "Employes", href: "/employes", img: './Vector.png' },
    {
      id: 4,
      linkname: "Messages",
      dropdown: [
        { id: 1, linkname: "Inbox", href: "/inbox" },
        { id: 2, linkname: "Sent", href: "/sent" },
        {
          id: 3, linkname: "Daisy", href: "/daisy", dropdown: [
            { id: 4, linkname: "Submenu 1", href: "/" },
            { id: 5, linkname: "Submenu 2", href: "/" },
          ]
        },
      ]
    },
    { id: 5, linkname: "Warehouse", href: "/warehouse", img: './Vector.png' },
    { id: 6, linkname: "Orders", href: "/orders", img: './Vector.png' },
    { id: 7, linkname: "Products", href: "/products", img: './Vector.png' },
    { id: 8, linkname: "Discount", href: "/discount", img: './Vector.png' },
    { id: 9, linkname: "Category", href: "/category", img: './Vector.png' },
    { id: 10, linkname: "Reports", href: "/reports", img: './Vector.png' },
    { id: 11, linkname: "Vacancy", href: "/vacancy", img: './Vector.png' },
    { id: 12, linkname: "Settings", href: "/settings", img: './Vector.png' },
  ]);

  return (
    <aside className='py-12 px-7 shadow-md drop-shadow-lg max-w-[256px] w-3/12'>
      <div className='flex flex-col gap-3 w-full'>

        {links.map((item) => (
          <div key={item.id}>
            {item.dropdown ? (
              <div className="flex gap-7 py-2 items-center text-sm">
                <Accordion title={
                  <div className="flex gap-7 py-2 items-center text-sm">
                    <img src={item.img} />
                    <p>{item.linkname}</p>
                  </div>
                }> 
                  {item.dropdown.map((dropdownItem) => (
                    <Link to={dropdownItem.href} key={dropdownItem.id} className="block py-1">
                      {dropdownItem.linkname}
                    </Link>
                  ))}
                </Accordion>
              </div>
            ) : (
              <Link to={item.href} className="flex gap-7 py-2 items-center text-sm">
                <img src={item.img} alt={item.linkname} />
                <p>{item.linkname}</p>
              </Link>
            )}
          </div>
        ))}
      </div>
    </aside >
  );
};

export default SideBar;
