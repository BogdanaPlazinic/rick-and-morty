import { useState, useEffect } from "react";
import React from 'react'
import CardComponent from "../CardComponent/CardComponent";
import Filter from "../Filters/Filter";
import Paginaton from "../Pagination/Pagination";
import SearchComponent from "../SearchComponent/SearchComponent";
import Navbar from "../Navbar/Navbar";

export const CharacterList = () => {

  let [pageNumber, setPageNumber] = useState(1);
  let [status, setStatus] = useState("");
  let [search, setSearch] = useState("");
  let [gender, setGender] = useState("");
  let [species, setSpecies] = useState("");


  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

 
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`
    
      useEffect(() => {
        (async function () {
          let data = await fetch(api).then((res) => res.json());
          updateFetchedData(data);
        })();
      }, [api]);


  return (
    <section>
      <div>
        <Navbar />
      </div>
      <div>
        <SearchComponent setSearch={setSearch} setPageNumber={setPageNumber}/>
      </div>
      <div>
        <Filter 
           setStatus={setStatus}
           setPageNumber={setPageNumber}
           setSpecies={setSpecies}
           setGender={setGender}
           
          />
        <CardComponent results={results} /* removeFromFavorites={() => {}} */ />
     </div>
     <div>
      <Paginaton info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
     </div>
    </section>
  )
}

export default CharacterList;