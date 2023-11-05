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
import chess from '../../images/chess.jpg'
import party from '../../images/party.jpg'
import concert from '../../images/concert.jpg'
import fgc from '../../images/fgc.jpg'
import football from '../../images/football.jpg'
import benchpress from '../../images/benchpress.jpg'

const App = () => {
  const [user, setUser] = useState(ls.get("user") || {})
  const [isAuthenticated, setAuthenticated] = 
  useState(ls.get("isAuthenticated"))
  const [events, setEvents] = useState(ls.get("events")||[{
    id: 1,
    title: 'CheeseHacks Hackathon',
    image: cheesehacks,
    description: '<a href="https://cheesehacks.webdevuw.org">This is a hackathon!</a>',
    time: '01:00 PM',
    date: '11-04-2023',
    cost: 'one day of your life',
    location: 'Educational Sciences'
  },
  {
    id: 2,
    title: 'MadHacks Hackathon',
    image: madhacks,
    description: '<a href="https://www.madhacks.io">This is also a hackathon.</a>',
    time: '01:00 PM',
    date: '11-11-2023',
    cost: 'your sanity',
    location: 'Educational Sciences'
  },
  {
    id: 3,
    title: 'Chess Get Together',
    image: chess,
    description: 'All ratings welcome, just a fun get together. Bring your board and clock!',
    time: '04:00 PM',
    date: '11-13-2023',
    cost: 'free',
    location: 'Park'
  },
  {
    id: 4,
    title: 'Party @ Waters',
    image: party,
    description: 'Just an innocent gathering of college students',
    time: '11:00 PM',
    date: '11-10-2023',
    cost: '$100',
    location: '1111 Bunge @ Waters Residence Hall'
  },
  {
    id: 5,
    title: 'Football Watch Group',
    image: football,
    description: 'Group of people going to watch the game!',
    time: '04:30 PM',
    date: '11-19-2023',
    cost: 'free',
    location: 'Watching in Dejope lobby'
  },
  {
    id: 6,
    title: 'Bench Press Competition',
    image: benchpress,
    description: 'Who has the biggest bench in Lakeshore???',
    time: '08:00 PM',
    date: '11-15-2023',
    cost: 'your chest muscles',
    location: "Bakke"
  },
  {
    id: 7,
    title: 'Fighting Game Club',
    image: fgc,
    description: 'Get together to play fighting games!',
    time: '07:30 PM',
    date: '11-27-2023',
    cost: '$5.00',
    location: 'Union South'
  },
  {
    id: 8,
    title: 'Concert Goers to see Sheku',
    image: concert,
    description: 'Going to watch the famous Sheku Kanneh-Mason',
    time: '07:30 PM',
    date: '11-03-2023',
    cost: '$10.00',
    location: 'Memorial Union'
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