import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function UjBejegyzes() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: e.target.elements.name.value,
      birth_date: e.target.elements.birth_date.value,
      world_ch_won: e.target.elements.world_ch_won.value,
      profile_url: e.target.elements.profile_url.value,
      image_url: e.target.elements.image_url.value
    };

    try {
      await axios.post("http://localhost:3001/chess", formData);
      toast.success("Bejegyzés létrehozva");
      navigate('/');
    } catch (error) {
      console.error('Error creating entry:', error);
      toast.error("Hiba történt a bejegyzés létrehozása közben");
    }
  };

  return (
    <div className='p-3 m-auto text-center bg-ivory'>
      <h2>Új bejegyzés</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group card p-3 col d-inline-block m-2 p-1'>
          <input name='name' className='form-control center m-2' type='text' placeholder='Name' />
          <input name='birth_date' className='form-control center m-2' type='text' placeholder='Birth Date' />
          <input name='world_ch_won' className='form-control center m-2' type='number' placeholder='Championships Won' />
          <input name='profile_url' className='form-control center m-2' type='text' placeholder='Profile URL' />
          <input name='image_url' className='form-control center m-2' type='text' placeholder='Image URL' />
          <button type='submit' className='btn btn-success'>Küldés</button>
        </div>
      </form>
    </div>
  );
}

export default UjBejegyzes;
