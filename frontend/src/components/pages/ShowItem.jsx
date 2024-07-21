import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ShowItem = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/items/${id}`);
        setItem(response.data);
      } catch (error) {
        console.error('Error fetching item:', error);
      }
    };
    fetchItem();
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:8080/items/${id}`);
      navigate('/'); // Redirect to home or any other page after deletion
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  if (!item) return <div>Loading...</div>;

  return (
    <div className='m-4 p-4 border border-gray-300 rounded-lg'>
      <h1 className='text-3xl font-bold'>{item.name}</h1>
      <img className='w-48 h-48' src={item.image} alt={item.name} />
      <p className='text-lg'>{item.desc}</p>
      <button className='bg-blue-500 p-2 m-3'>Edit</button>
      <button onClick={handleDelete} className='bg-red-600 p-2 m-3'>Delete</button>
    </div>
  );
};

export default ShowItem;
