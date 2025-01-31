import { useState, useEffect } from "react";
import React from 'react'
import CardComponent from "../CardComponent/CardComponent";
import Filter from "../Filters/Filter";
import Paginaton from "../Pagination/Pagination";
import SearchComponent from "../SearchComponent/SearchComponent";

export const CharacterList = () => {

  let [pageNumber, setPageNumber] = useState(1);
  let [status, updateStatus] = useState("");
  let [search, setSearch] = useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

 
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}`
    
      useEffect(() => {
        (async function () {
          let data = await fetch(api).then((res) => res.json());
          updateFetchedData(data);
        })();
      }, [api]);


  return (
    <section>
      <div>
        <SearchComponent setSearch={setSearch} setPageNumber={setPageNumber}/>
      </div>
      <div>
        <Filter 
          pageNumber={pageNumber}
          updatePageNumber={setPageNumber} 
          updateStatus={updateStatus}
          updateGender={() => {}}
          updateSpecies={() => {}}
            />
        <CardComponent results={results}/>
     </div>
     <div>
      <Paginaton info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
     </div>
    </section>
  )
}

export default CharacterList;