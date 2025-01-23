import { useState, useEffect } from "react";
import React from 'react'

export const CharacterList = () => {

  let [pageNumber, setPageNumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  console.log(results);
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
    
      useEffect(() => {
        (async function () {
          let data = await fetch(api).then((res) => res.json());
          updateFetchedData(data);
        })();
      }, [api]);


  return (
    <header>
      <h1>CharacterList Component</h1>
    </header>
  )
}

export default CharacterList;