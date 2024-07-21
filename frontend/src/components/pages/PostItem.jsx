import React from 'react'
import { useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'


function PostItem() {

  let navigate = useNavigate();
  let itemNameRef = useRef();
  let itemImageRef = useRef();
  let itemTypeRef = useRef();
  let itemDescRef = useRef();


  const addItem = async (e) => {

    e.preventDefault();
    const name = itemNameRef.current.value;
    const image = itemImageRef.current.value;
    const desc = itemDescRef.current.value;
    const type = itemTypeRef.current.value;


    try {
      let res = await axios.post('http://localhost:8080/additems', { name, image, type, desc });
      console.log(res);
      navigate('/');
    }
    catch (e) {
      console.log('cannot add a new item at this moment ');
    }
    console.log(itemNameRef.current.value);
    console.log(itemImageRef.current.value);
    console.log(itemTypeRef.current.value);
    console.log(itemDescRef.current.value);
  }

  return (
    <div>
      <h1 className='text-center text-5xl font-bold pt-8'>Add Item</h1>

      <form className="max-w-md mx-auto bg-formBlue rounded-2xl p-10 m-10" onSubmit={addItem}>

        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="item-name" id='item-name' className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " ref={itemNameRef} />
          <label htmlFor="item-name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Item Name</label>
        </div>


        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="image">Upload Item Image</label>
        <input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-white dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="image" id="image" type="file" ref={itemImageRef} />

        <div className='flex flex-row p-5 gap-4'>
          <div className="flex items-center">
            <input id="found" type="radio" value="found" ref={itemTypeRef} name="itemType" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="found" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Found</label>
          </div>
          <div className="flex items-center">
            <input id="lost" type="radio" value="lost" ref={itemTypeRef} name="itemType" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label htmlFor="lost" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Lost</label>
          </div>
        </div>

        <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Item Description</label>
        <textarea id="description" rows="4" ref={itemDescRef} className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Description"></textarea>


        <button type="submit" className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

      </form>

    </div>
  )
}

export default PostItem