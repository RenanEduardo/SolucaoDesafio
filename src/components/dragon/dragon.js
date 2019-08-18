import React from 'react';


const Dragon = props => {
  // //  "id": "44",
  //   "createdAt": "2019-08-07T04:37:06.628Z",
  //   "name": "Queens",
  //   "type": "lavender",
  //   "histories": [
      
  //   ]
    let histories = props.histories.map(history => 
         <p>history</p>
)
    return (
        <div>
            <span>props.id</span>
            <span>props.creationDate</span>
            <h2>props.name</h2>
            <h3>props.type</h3>
            {histories}
        </div>
    )
}


export default Dragon;