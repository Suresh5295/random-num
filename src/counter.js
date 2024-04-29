import { useState } from 'react';

function Counter(){

  
    var [count,setCount]= useState(0)
    
    function In(){
      var num=Math.floor(Math.random() * 10)+1;
      setCount(num)
    }
  
   
    return(
      <div><h1>{count}</h1><br/>
      <button onClick={In}>RandomNumber</button>
     
  
      </div>
  
    )
  }
export default Counter