import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ListProduct from './copmonents/ListProduct';
import Searches from './copmonents/Searches';

function App() {
  const[Filter,setFilter]=useState("")
  const [inputs,setinputs]=useState([{
    id:1,
    title:" Jbl T510 - Rose",
    description:"trés bien utiliser",
    posteURL:"https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/81/0664/1.jpg?2078",
    prix:"500dt" ,
  },
    {
      id:2,
      title:" Hummel Baskets - LEGEND BREATHER - 211831-2001- Noir",
      description:"Marque: Hummel | Produits similaires par Hummel",
      posteURL:"https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/20/1455/1.jpg?2908",
      prix:"200dt" ,
    
    },
    {
      id:4,
      title:"Asus Pc portable - Asus vivobook e210ma - dual core - 4 go - Pink",
      description:"Marque: Hummel | Produits similaires par Hummel",
      posteURL:"https://tn.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/03/0675/1.jpg?1919",
      prix:"1000dt" ,
    
    }])  
    const HandleFilter=(val)=>{
      setFilter(val)
      
  }
  

  
 
    <div className="App">
     
      <header className="App-header">
   
        <ListProduct list={inputs.filter(elm=>elm.title.toUpperCase().includes(Filter.toUpperCase()))} ></ListProduct>
      </header>
   

    </div>
  ;
}

export default App;
