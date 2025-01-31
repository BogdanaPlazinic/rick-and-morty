import React from 'react';
import FilterBTN from '../FilterBTN';


const Status = ({ updateStatus, updatePageNumber }) => {
    let status = ["Alive", "Dead", "Unknown"]
    return (
        <div >
      <h2 id="headingOne">
        <button 
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          Status
        </button>
      </h2>
      <div
        id="collapseOne"
        aria-labelledby="headingOne"
      >
        <div >
          {status.map((item, index) => (
            <FilterBTN
              key={index}
              index={index}
              name="status"
              task={updateStatus}
              updatePageNumber={updatePageNumber}
              input={item}
            />
          ))}
        </div>
      </div>
    </div>
    )
}

export default Status;