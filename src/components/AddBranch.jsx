import React from 'react'

const AddBranch = () => {
  return (
    <div>
      <div className='flex flex-col h-screen gap-[30px] bg-slate-900 items-end'>
        <input type="text" placeholder="Name of the branch" className=''/>
        <input type="text" placeholder="Location"/>
        <input type="text" placeholder="Opening hours"/>
        <input type="text" placeholder="Working time"/>
        <input type="text" placeholder="Manager name"/>
        <input type="text" placeholder="Main Chief"/>
      </div>
    </div>
  )
}

export default AddBranch
