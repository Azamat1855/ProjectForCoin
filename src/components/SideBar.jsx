import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [links, setlinks] = useState([
    { id: 1, linkname: "Dashboard", href: "/", img: './Vector.png' },
    { id: 1, linkname: "Task", href: "/", img: './Vector.png' },
    { id: 1, linkname: "User", href: "/", img: './Vector.png' },
    { id: 1, linkname: "Messages", href: "/", img: './Vector.png' },
    { id: 1, linkname: "Activities", href: "/", img: './Vector.png' },
    { id: 1, linkname: "Calender", href: "/", img: './Vector.png' },
    { id: 1, linkname: "Dashboard", href: "/", img: './Vector.png' },
    { id: 1, linkname: "Dashboard", href: "/", img: './Vector.png' },
    { id: 1, linkname: "Dashboard", href: "/", img: './Vector.png' },
    { id: 1, linkname: "Dashboard", href: "/", img: './Vector.png' },
    { id: 1, linkname: "Dashboard", href: "/", img: './Vector.png' },
    { id: 1, linkname: "Dashboard", href: "/", img: './Vector.png' },
    { id: 1, linkname: "Dashboard", href: "/", img: './Vector.png' },
    { id: 1, linkname: "Dashboard", href: "/", img: './Vector.png' },
  ])

  return (
    <aside className='py-12 px-7 shadow-md drop-shadow-lg max-w-[256px] w-3/12'>
      <div className='flex flex-col gap-3 w-full'>

        {
          links.map((item, id) => (
            <a href={'/'} key={id} className="flex gap-7 py-2 items-center text-sm">
              <img src={item.img} alt={item.linkname} />
              <p>{item.linkname}</p>
            </a>
          ))
        }
      </div>
    </aside>
  )
}

export default SideBar
