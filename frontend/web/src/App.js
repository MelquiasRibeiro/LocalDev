import React, {useState,useEffect} from 'react';
import './Global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';
import api from './services/api';

import DevIten from './components/devIten'
import DevForm from './components/form'

function App() {
  const[devs,setDevs]=useState([]);


  useEffect(()=>{
    async function loadDevs(){
      const response = await api.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  },[]);


  async function handleAddDev(data){
    const response = await api.post('/devs',data)
 
    setDevs([...devs,Response.data]);
  
}
  
   

  return (
    <div id= "app">
      <aside>
        <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev}/>
    

      </aside>
      <main>
        <ul>
          {devs.map(dev=> ( 
            <DevIten key= {dev._id} dev={dev}/>
          ))} 
        </ul>

      </main>
    </div>
  );
}

export default App;
