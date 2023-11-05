import './App.css'
import Navbar from '../Navbar/Navbar'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from '../Home/Home'
import CreateEvent from '../CreateEvent/CreateEvent'
import Events from '../Events/Events'
import Explore from '../Explore/Explore'
import Profile from '../Profile/Profile'
import Signin from '../Signin/Signin';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/events/:eventId",
    element: <Events />,
  },
  {
    path: "/explore",
    element: <Explore />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/create-event",
    element: <CreateEvent />,
  },
]);
function App() {
  return (
    <div class="App">
      <Navbar/>
      <RouterProvider router={router}/>
   </div>
  );
}
export default App;