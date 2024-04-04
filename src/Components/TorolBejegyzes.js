import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function TorolBejegyzes() {
    const param = useParams();
    const navigate = useNavigate();
    const [bejegyzesData, setBejegyzesData] = useState({});

    const handleDeleteDeclined=()=>{
      navigate('/');
    }

    const handleDeleteConfirmed = async () => {
        try {
            await axios.delete("http://localhost:3001/chess/" + param.id);
            console.log('Entry deleted successfully');
            toast.error("Bejegyzés törölve!")
            navigate('/');
        } catch (error) {
            console.error('Error deleting entry:', error);
            toast.error(error)
        }
    };


    const url = "http://localhost:3001/chess/" + param.id;
    useEffect(() => {
        axios.get(url)
            .then(response => setBejegyzesData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div className='m-auto text-center'>
          <h2>Törlés</h2>
            <div key={bejegyzesData.id} className='form-group card p-3  col d-inline-block m-2 p-1'>
                <h2 className='text-muted'>{bejegyzesData.name}</h2>
                <div className='font-weight-bold'>Birth Date: {bejegyzesData.birth_date}</div>
                <h3 className='font-weight-bold'>World Championships won: {bejegyzesData.world_ch_won}</h3>
                <div className='card-body'>
                    <img className='img-fluid' src={bejegyzesData.image_url} style={{ maxHeight: 200 }} alt='Not found!' />
                    <br></br>
                    <a href={bejegyzesData.profile_url}>Profile</a>
                    <div className='border'>
                        <h3 className='small'>Végleg törlöd ezt a bejegyzést?</h3>
                        <button onClick={handleDeleteConfirmed} className='btn btn-danger m-1'>Igen</button>
                        <button onClick={handleDeleteDeclined} className='btn btn-primary m-1'>Nem</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TorolBejegyzes;
