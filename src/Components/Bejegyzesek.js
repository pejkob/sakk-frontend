import React,{useState,useEffect} from 'react'
import axios from "axios"
import { NavLink } from 'react-router-dom';

function Bejegyzesek() {
    const [bejegyzesList, setBejegyzesList] = useState([]);
    const[isFetchPending,setFetchPending]=useState(false);
    
      const url="http://localhost:3001/chess";
      useEffect(() => {
        setFetchPending(true);
        axios.get(url)
          .then(response => setBejegyzesList(response.data))
          .finally(()=>{
            setFetchPending(false);
          })
          .catch(error => console.error('Hiba a lekérdezés során:', error));
      }, []);

      const array = bejegyzesList.map(item => (
        <div key={item.id} className='card col d-inline-block m-2 p-1'>
            <h2 className='text-muted'>{item.name}</h2>
            <div className='font-weight-bold'>Birth Date: {item.birth_date}</div>
            <h3 className='font-weight-bold'>World Championships won: {item.world_ch_won}</h3>
            <div className='card-body'>
                <img className='img-fluid' src={item.image_url} style={{maxHeight:200}} alt='Not found!' />
                <br></br>
                <a href={item.profile_url}>Profile</a>
            </div>
            <NavLink to={"/ModositBejegyzes/"+item.id}>
                <button className='btn btn-warning'>Módosítás</button>
            </NavLink>
    
            <NavLink to={"/TorolBejegyzes/"+item.id}>
                <button className='btn btn-danger'>Törlés</button>
            </NavLink>
        </div>
    ));

  return (
    <div className='p-5 m-auto text-center bg-ivory'>
        {isFetchPending? <div className='spinner-border'> </div> : <div> <h2>Bejegyzések</h2> {array} </div>        }
    </div>
  )
}

export default Bejegyzesek