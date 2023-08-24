import './App.css'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'

export default function App() {
  const human = { name: 'Ben' };
  console.log(human['name']);
  const shapes = ["circle", "square", "triangle", "new"];
  console.log(shapes); 
  
  const shapes2 = shapes;
  const shapes22 = shapes2.push("222222");

  const shapes3 = [...shapes];
  const shapes4 = shapes3.push("here"); 
  
  console.log("2")
  console.log(shapes2);
    console.log(shapes); 

  console.log("3")
  console.log(shapes3);
      console.log(shapes); 

    

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>
      <input value="Hello!" />

    </>
  )
}
