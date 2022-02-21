import './App.css';
// import { Navigation } from './component/Navigation';
import {useState,useEffect} from "react";




function App() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    //mounting
    fetch("https://fast-reef-22226.herokuapp.com/data")
    .then((d) => d.json())
    .then((res)=>{
      console.log("response",res);
      setData(res)
    });
   
    

  },[]);
  
  return (
    <div className="App">
     
     
     <div>
        <h1 style={{marginTop:"150px", fontSize:"100px",color:"lightcoral"}}>Google</h1>
        <input style={{width:"400px",height:"40px"}} placeholder="Search"/>
        <button style={{height:"40px"}} >Google Search</button>
     </div>
    </div>
  );
}

export default App;