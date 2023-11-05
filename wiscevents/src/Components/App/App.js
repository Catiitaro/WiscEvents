import React, {useState} from "react"
import './App.css'
import Navbar from '../Navbar/Navbar'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Home from '../Home/Home'
import CreateEvent from '../CreateEvent/CreateEvent'
import Events from '../Events/Events'
import Explore from '../Explore/Explore'
import Profile from '../Profile/Profile'
import Signin from '../Signin/Signin';
import ls from 'local-storage'

const App = () => {
  const [user, setUser] = useState(ls.get("user") || {})
  const [isAuthenticated, setAuthenticated] = 
  useState(ls.get("isAuthenticated"))

  return (
    <div className="App">
      <Navbar isAuthenticated={isAuthenticated} user={user}/>
      <RouterProvider router={
        createBrowserRouter([
          {
            path: "/",
            element: <Home isAuthenticated={isAuthenticated} user={user}/>,
          },
          {
            path: "/events/:eventId",
            element: <Events isAuthenticated={isAuthenticated} user={user}/>,
          },
          {
            path: "/explore",
            element: <Explore isAuthenticated={isAuthenticated} user={user}/>,
          },
          {
            path: "/profile",
            element: <Profile isAuthenticated={isAuthenticated} user={user}
            setUser={setUser} setAuthenticated={setAuthenticated}/>,
          },
          {
            path: "/signin",
            element: <Signin user={user} setUser={setUser} 
            isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated}/>,
          },
          {
            path: "/create-event",
            element: <CreateEvent isAuthenticated={isAuthenticated} user={user}/>,
          },
        ])
      }/>
   </div>
  );
}
export default App;