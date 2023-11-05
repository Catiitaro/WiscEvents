import { jwtDecode } from 'jwt-decode';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState({});
  const [authenticated, setAuthenticated] = useState(false);

  function handleCallbackResponse(response) {
    console.log('Encoded JWT ID token: ' + response.credential);
    var decoded = jwtDecode(response.credential);
    console.log(decoded);
    setUser(decoded);
    setAuthenticated(true);
    document.getElementById('signInDiv').hidden = true;
  }

  function handleSignOut() {
    setUser({});
    setAuthenticated(false);
    document.getElementById('signInDiv').hidden = false;
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: '890082271248-ork4qes8cfc8a9beak1eks9luru2mvc9.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });
    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    });

    google.accounts.id.prompt();
  }, []);

  return (
    <div className="App">
      <div id="signInDiv"></div>
      {authenticated ? (
        <div>
          <button onClick={handleSignOut}>Sign Out</button>
          <div className="user-profile">
            <img src={user.picture} alt="User Profile" />
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
          </div>
        </div>
      ) : (
        <p>Please sign in to view your profile.</p>
      )}
    </div>
  );
}

export default App;
