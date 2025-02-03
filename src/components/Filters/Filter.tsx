import React from "react";
import Gender from "../Filters/Category/Gender";
import Species from "../Filters/Category/Species";
import Status from "../Filters/Category/Status";

const Filter = ({
  setStatus,
  setPageNumber,
  setSpecies,
  setGender,
}) => {
   let clear = () => {
    setStatus("");
    setPageNumber(1);
    setSpecies("");
    setGender("");
    window.location.reload();
  };
  return (
    <div >
      <div >Filters</div>
      <div
        style={{ cursor: "pointer" }}
         onClick={clear}
      >
        Clear Filters
      </div>
      <div >
        <Status
          setPageNumber={setPageNumber}
          setSatus={setStatus}
        />
        <Species
          setSpecies={setSpecies}
          setPageNumber={setPageNumber}
        />
        <Gender
          setGender={setGender}
          setPageNumber={setPageNumber}
        />
      </div>
    </div>
  );
};

export default Filter;