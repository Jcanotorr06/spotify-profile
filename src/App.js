import React, {useEffect, useState} from 'react';
import './App.css';
import { Login, Landing } from "./components"; 
import { getToken } from "./api/spotify";
import SpotifyWebAPI from 'spotify-web-api-js'

const spotify = new SpotifyWebAPI();

function App() {

  const [token, setToken] = useState('');



  useEffect(() => {
    const hash = getToken();
    window.location.hash = '';
    const auth = hash.access_token;
    
    if(auth){
      setToken(auth)
      spotify.setAccessToken(auth);
    }

  }, [])

  return (
    <div className="container">
      {
        token ? (
          <Landing spotify={spotify} />
        ):(
          <Login />
        )
      }
    </div>
  );
}

export default App;
