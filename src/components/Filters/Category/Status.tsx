import React from 'react';
import FilterBTN from '../FilterBTN';


const Status = ({ setSatus, setPageNumber }) => {
    let status = ["Alive", "Dead", "Unknown"]
    return (
      <div>
        <div>
          <p><b>Status:</b></p>
        </div>
        {status.map((items, index) => (
          <FilterBTN 
          task={setSatus}
          setPageNumber={setPageNumber}
          name="status" 
          index={index} 
          items={items} />
        ))}
      </div>
    )
}

export default Status;