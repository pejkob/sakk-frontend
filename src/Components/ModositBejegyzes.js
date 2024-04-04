import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function ModositBejegyzes() {
    const param = useParams();
    const navigate=useNavigate();
    console.log(param);
    const [bejegyzesData, setBejegyzesData] = useState({});

    const url = "http://localhost:3001/chess/" + param.id;
    useEffect(() => {
        axios.get(url)
            .then(response => setBejegyzesData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

   
    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const updatedData = {
          name: formData.get('name'),
          birth_date: formData.get('birth_date'),
          world_ch_won: formData.get('world_ch_won'),
          profile_url: formData.get('profile_url'),
          image_url: formData.get('image_url')
      };

      try {
          await axios.put(`http://localhost:3001/chess/${param.id}`, updatedData)
          .then(
            toast.warning("Bejegyzés módosítva")
          )
          .finally(
            navigate('/')
          );
      } catch (error) {
          console.error('Error updating data:', error);
          toast.error(error)
      }
  };
    return (
      <div className='form-group p-3 m-auto text-center'>
        <h2>Módosítás</h2>
        <form onSubmit={handleSubmit}>
            <div className='form-group card p-3  col d-inline-block m-2 p-1'>
                <input name='name' className='form-control center m-2' type='text' defaultValue={bejegyzesData.name} placeholder='Name' />
                <input name='birth_date' className='form-control center m-2' type='text' defaultValue={bejegyzesData.birth_date} placeholder='Birth Date' />
                <input name='world_ch_won' className='form-control center m-2' type='number' defaultValue={bejegyzesData.world_ch_won} placeholder='Championships Won' />
                <input name='profile_url' className='form-control center m-2' type='text' defaultValue={bejegyzesData.profile_url} placeholder='Profile URL' />
                <input name='image_url' className='form-control center m-2' type='text' defaultValue={bejegyzesData.image_url} placeholder='Image URL' />
                <button type='submit' className='btn btn-warning'>Módosítás</button>
            </div>
        </form>
      </div>
    );
}

export default ModositBejegyzes;
