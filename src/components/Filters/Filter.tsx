import React from "react";
import Gender from "../Filters/Category/Gender";
import Species from "../Filters/Category/Species";
import Status from "../Filters/Category/Status";

const Filter = ({
  pageNumber,
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
  let clear = () => {
    updateStatus("");
    updateGender("");
    updateSpecies("");
    updatePageNumber(1);
    window.location.reload(); //add argument
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
      <div  id="accordionExample">
        <Status
          updatePageNumber={updatePageNumber}
          updateStatus={updateStatus}
        />
        <Species
          updatePageNumber={updatePageNumber}
          updateSpecies={updateSpecies}
        />
        <Gender
          updatePageNumber={updatePageNumber}
          updateGender={updateGender}
        />
      </div>
    </div>
  );
};

export default Filter;



/* import React from "react";
import Status from "./Category/Status";
import Species from "./Category/Species";
import Gender from "./Category/Gender";


export const Filter = ({
    pageNumber,
  updatePageNumber,
  updateStatus,
  updateGender,
  updateSpecies,
}) => {
    return (
        <section>
            <div>
                Filter
            </div>
            <div style={{cursor: "pointer"}}>
                Clear filters
            </div>

            <div>
                <Status 
                updatePageNumber={updatePageNumber}
                updateStatus={updateStatus}
                />
                <Species />
                <Gender />
            </div>
        </section>
    )
}

export default Filter;
 */