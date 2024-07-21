import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

const AllItems = () => {
  const [items, setItems] = useState([]);
  const [lostItems, setLostItems] = useState([]);
  const [foundItems, setFoundItems] = useState([]);
  let [searchItem, setSearchItem] = useState("");
  const [foundSearchItems, setFoundSearchItems] = useState([]);


  async function getItems() {
    try {
      let res = await axios.get('http://localhost:8080/allitems');
      // console.log(res);
      setItems(res.data);
      // console.log("Showing items");
      console.log("Whole Data : ", res.data); // Corrected to log res.data
      let array = res.data;
      console.log("Array : ", array);
      filterItems(array);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }
  function filterItems(items) {
    let lostItemsArr = items.filter((item) => item.type === "lost")
    console.log("LostItems : ", lostItemsArr);
    setLostItems(lostItemsArr)
    let foundItemsArr = items.filter((item) => item.type === "found")
    console.log("FoundItems : ", foundItemsArr);
    setFoundItems(foundItemsArr)

  }

  function search() {
    let filteredItems = items.filter((item) => item.name === searchItem)
    console.log("filteredItems:", filteredItems);
    setFoundSearchItems(filteredItems)
  }

  useEffect(() => {
    getItems();
  }, []);


  return (
    <div className='m-6'>

      <div className="input-box mt-5 flex justify-center items-center p-5 w-80">
        <input type="search" name="search-form" id="search-form" className="search-input w-48 p-2 mr-2" onChange={(e) => setSearchItem(e.target.value)} placeholder="Search Items" value={searchItem} />
        <button onClick={search}>Search</button>
      </div>

      <div>
        <ul className='flex flex-row gap-4 flex-wrap'>
          {foundSearchItems.map((item) => (
            <div key={item._id}>
              <li className='mt-4 w-80 h-80 m-auto p-4 bg-customTeal flex border-solid border-2 border-darkBlue'>
                <span>
                  <h3 className='text-lg'>{item.name}</h3>
                  <img className='w-48 h-48' src={item.image} alt={item.name} />
                  <p className='font-mono font-bold text-lg uppercase'>{item.desc}</p>
                  <Link to={`/items/${item._id}`}>
                    <button className='bg-green-800 p-2 text-white'>Show</button>
                  </Link>
                </span>
              </li>
            </div>
          ))}
        </ul>
      </div>
      <div className='border-b border-darkBlue pb-5 shadow-darkbottomblue'>
        <h1 className='text-5xl font-bold text-center pb-4 pt-4'>Lost Items</h1>
        <ul className='flex flex-row gap-4 flex-wrap justify-center'>
          {lostItems.map((item) => (
            <div key={item._id}>
              <li className='mt-4 w-80 h-96 m-auto p-4 bg-customTeal flex border-solid border-2 border-darkBlue rounded-2xl shadow-darkblue'>
                <span>
                  <img className='w-48 h-48' src={item.image} alt={item.name} />
                  <h3 className='text-lg'>{item.name}</h3>
                  <p className='font-mono font-bold text-lg uppercase'>{item.desc}</p>
                  <Link to={`/items/${item._id}`}>
                    <button className='bg-green-800 p-2 text-white'>Show</button>
                  </Link>
                </span>
              </li>
            </div>
          ))}
        </ul>
      </div>

      <div className='border-b border-darkBlue pb-5 shadow-darkbottomblue'>
        <h1 className='text-5xl font-bold text-center pb-4 pt-4'>Found Items</h1>
        <ul className='flex flex-row gap-4 flex-wrap justify-center'>
          {foundItems.map((item) => (
            <div key={item._id}>
              <li className='mt-4 w-80 h-80 m-auto p-4 bg-customTeal flex border-solid border-2 border-darkBlue rounded-2xl shadow-darkblue'>
                <span>
                  <img className='w-48 h-48' src={item.image} alt={item.name} />
                  <h3 className='text-lg'>{item.name}</h3>
                  <p className='font-mono font-bold text-lg uppercase'>{item.desc}</p>
                  <Link to={`/items/${item._id}`}>
                    <button className='bg-green-800 p-2 text-white'>Show</button>
                  </Link>
                </span>
              </li>
            </div>
          ))}
        </ul>
      </div>

    </div>
  );
}

export default AllItems;