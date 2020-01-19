import React from 'react';
import './style.css'

function DevIten({dev}){
    return( <li className= "dev-iten">
    <header>
      <img src={dev.avatar_url} alt={dev.name} />

    <div className = "user-info">
      <strong>{dev.name}</strong>
      <span>{dev.techs.join(', ')} </span>
    </div>

    </header>
    <p>{dev.bio}</p>
    <a href={`https://github.com/users/${dev.github_username} `}>Acessar perfil no git hub</a>
  </li>);
}

export default DevIten;