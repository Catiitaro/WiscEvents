import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import ls from 'local-storage'
import {Navigate} from 'react-router-dom'

function Signin(props) {
//console.log(props);
  function handleCallbackResponse(response) {
    //console.log('Encoded JWT ID token: ' + response.credential);
    var decoded = jwtDecode(response.credential);
    props.setUser(decoded); ls.set("user", decoded);
    props.setAuthenticated(true); ls.set("isAuthenticated", true);
    document.getElementById('signInDiv').hidden = true;
  }

  

  useEffect(() => {  
    /* global google */
    const google = window.google
    google.accounts.id.initialize({
      client_id: '890082271248-ork4qes8cfc8a9beak1eks9luru2mvc9.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    });
        google.accounts.id.prompt();
    }
  , []);
  return ( !props.isAuthenticated ?
    (<div className="Signin">
      <div id="signInDiv"></div>
    </div> )
    :
    <Navigate to="/profile" replace={true}/>
  );
}

export default Signin;