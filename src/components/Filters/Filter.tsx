import React from "react";
import Gender from "../Filters/Category/Gender";
import Species from "../Filters/Category/Species";
import Status from "../Filters/Category/Status";
import { DeleteOutlined } from "@ant-design/icons";
import styles from "./Filters.module.scss"

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
    <div className={styles.filterMainContainer}>
      <h2 >Filters</h2>
      <div
        style={{ cursor: "pointer" }}
         onClick={clear}
      >
        Clear All
        <DeleteOutlined />
      </div>
      <div className={styles.tsst} >
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