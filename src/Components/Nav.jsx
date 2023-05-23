import React from 'react'

const Nav = () => {
  return (
    <div className='container '>
        
<nav className="bg-white border-gray-200 flex  shadow justify-between w-full mx-8 p-5 dark:bg-gray-900">
<div className='flex justify-between w-96'>
<p>
    name - <span className='text-red-700'>
    saw htut naing
    </span>
</p>
<p className=''>
    gmail - <span className='text-blue-600'>
    sawhtut@gmail.com
    </span>
</p>
</div>
<div>
    <button className='btn bg-red-400 px-3 rounded py-2'>logout</button>
</div>

</nav>

    </div>
  )
}

export default Nav