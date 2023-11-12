import './App.css';
import { BrowserRouter as Router, Route,RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Layout from './Components/Layout';
import Contacts from './Pages/Contacts/Contacts';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Booking from './Pages/Booking/Booking';
import OurTeam from './Pages/OurTeam/OurTeam';
import Error from './Pages/Error/Error';
import Login from './Pages/Log/Log';
import Blog from './Pages/Blog/Blog';
import Faqs from './Pages/FAQs/Faqs';


function App() {
const routes=createBrowserRouter(createRoutesFromElements(
 <Route path='/' element={<Layout/>}>
  <Route index  element={<Home/>}/>
  <Route path='/contact' element={<Contacts/>}/>
  <Route path='/about-us' element={<About/>}/>
  <Route path='/services' element={<Services/>}/>
  <Route path='/booking' element={<Booking/>}/>
  <Route path='/Our-Team' element={<OurTeam/>}/>
  <Route path='/error' element={<Error/>}/>
  <Route path='/log' element={<Login/>}/>
  <Route path='/blog' element={<Blog/>}/>
  <Route path='/faqs' element={<Faqs/>}/>






 </Route>
))
 

  return (

      <div className="App">
<RouterProvider router={routes}>

</RouterProvider>
      </div>
  );
}

export default App;

