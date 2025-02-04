import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';

const { Search } = Input;

const SearchComponent = ({ setSearch, setPageNumber }) => {
    return (
        <header>
            <div>
                <h3>Rick & Morty</h3>
            </div>
        
            <div >
                <Search 
                onChange={e=>{
                    setPageNumber(1);
                    setSearch(e.target.value)
                }}
                onClick={(e) => {
                    e.preventDefault();
                }}
                placeholder="input search text" 
                enterButton="Search" 
                size="normal"
                type="search" />
            </div>
        
            {/* <div>
                <Button type="primary" href="http://localhost:3000/">Log Out</Button>
            </div> */}
                
        </header>
    )
};

export default SearchComponent;