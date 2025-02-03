import React from 'react';
import FilterBTN from '../FilterBTN';


const Gender = ({ setPageNumber, setGender }) => {
    let gender = ["Female", "Male", "Genderless", "Unknown"]
    return (
      <div>
        <div>
        <p><b>Gender:</b></p>
        </div>
        {gender.map((items, index) => (
          <FilterBTN
          task={setGender}
          setPageNumber={setPageNumber}
          name="gender" 
          index={index} 
          items={items} />
        ))}
      </div>
    )
}

export default Gender;