import React, { useState, useEffect} from 'react';


function DevForm({onSubmit}){

  const[latitude,setlatitude]=useState('');
  const[longitude,setlongitude]=useState('');
  const[github_username,setGithub_username]=useState('');
  const[techs,setTechs]=useState('');

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(
      (position)=>{
        const{latitude, longitude}=position.coords;

        setlatitude(latitude);
        setlongitude(longitude);
      },
      (err)=>{
        console.log(err);
      },
      {
        timeout:30000
      }
    )

  },[]);

async function handleSubmit(e){
 e.preventDefault();

await onSubmit({
        github_username,
        techs,
        latitude,
        longitude,
      });

      setGithub_username('');
      setTechs('');
}

return(
    <form onSubmit={handleSubmit}>
    <div className="input-block">
     <label htmlFor="github_username">Usuário do Github</label>
     <input name="github_username"
      id="username_github" 
      required 
      value={github_username}
      onChange={e=>setGithub_username(e.target.value)}/>
    </div>
    
    <div className="input-block">

     <label htmlFor="techs">Tecnologias</label>
     <input name="techs" 
     id="techs" 
     required
     value={techs}
      onChange={e=>setTechs(e.target.value)}/>

    </div>

    <div className="input-group">
     <div className="input-block">

      <label htmlFor="lat">Latitude</label>
      <input type="number" 
      name="lat" 
      id="lat" 
      required 
      value={latitude}
      onChange={e =>setlatitude(e.target.value)}/>

     </div>

     <div className="input-block">

      <label htmlFor="long">Longitude</label>   
      <input type="number"
      name="long" 
      id="long" 
      required 
      value ={longitude}
      onChange={e =>setlongitude(e.target.value)}
      />

     </div> 
    </div>

    <button type= "submit">Salvar</button>

</form>
)};
   
export default DevForm;