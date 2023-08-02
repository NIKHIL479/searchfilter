import './App.css';
import React,{useState,useEffect} from 'react';

function App() {
  const [data,setData]=useState([])
  const [search,setsearch]=useState("")

    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(json => {setData(json)
    } )
  
  return (
    <div >
      <center>
        <h1>welcome</h1><br/>
      <input type="text" onChange={(e)=>{setsearch(e.target.value)
      }}/><br/>
      {data.filter(g=>g.title.toLowerCase().includes(search.toLowerCase())).map((g)=>
       
        <li key={g.id}>{g.title}</li>
        )}
      </center>
    </div>
  );
}

export default App;