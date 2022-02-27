import React from 'react'


function DisplayData({firstName, lastName}) {
    // console.log("hello")
  return (
    <div>
        <h1>{firstName}</h1>
        <h1>{lastName}</h1>
        
    </div>
  );
}

export default DisplayData