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
import madhacks from '../../images/madhacks.avif'
import cheesehacks from '../../images/CheeseHacks.jpg'

const App = () => {
  const [user, setUser] = useState(ls.get("user") || {})
  const [isAuthenticated, setAuthenticated] = 
  useState(ls.get("isAuthenticated"))
  const [events, setEvents] = useState(ls.get("events")||[{
    id: 1,
    title: 'CheeseHacks Hackathon',
    image: cheesehacks,
    description: '<a href="https://cheesehacks.webdevuw.org">This is a hackathon!</a>',
  },
  {
    id: 2,
    title: 'MadHacks Hackathon',
    image: madhacks,
    description: '<a href="https://www.madhacks.io">This is also a hackathon.</a>',
  },]);
  console.log(events);
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
            element: <Events isAuthenticated={isAuthenticated} user={user} events={events}/>,
          },
          {
            path: "/explore",
            element: <Explore isAuthenticated={isAuthenticated} user={user} events={events}/>,
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
            element: <CreateEvent isAuthenticated={isAuthenticated} user={user}  setEvents={setEvents} events={events}/>,
          },
        ])
      }/>
   </div>
  );
}
export default App;