import React from 'react';
import FilterBTN from '../FilterBTN';


const Species = ({ setSpecies, setPageNumber }) => {
    let species = ["Human", "Alien", "Humanod", "Poopybutthole", "Mythological", "Unknown", "Animal", "Disease", "Robot", "Cronenberg", "Planet"]
    return (
      <div>
        <div>
        <p><b>Species:</b></p>
        </div>
        {species.map((items, index) => (
          <FilterBTN 
          task={setSpecies}
          setPageNumber={setPageNumber}
          name="species" 
          index={index} 
          items={items} />
        ))}
      </div>
    )
}

export default Species;