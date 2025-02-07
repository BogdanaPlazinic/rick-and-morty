import React from 'react';
import { Input } from 'antd';
import { Button } from 'antd';
import styles from "./SearchComponent.module.scss"
import "../../styles/_variables.scss";

const { Search } = Input;

const SearchComponent = ({ setSearch, setPageNumber }) => {
    return (
        <header className={styles.searchHeder}>
            <div className={styles.searchConainer}>
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