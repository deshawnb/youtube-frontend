import { Navigate } from 'react-router-dom';
import React, { useState } from 'react';



const SearchPage = (props) => {
    const [filter, setFilter] = useState("")
    function handleSubmit(event){
        event.preventDefault();
        console.log(filter)
        props.setSearchTerm(filter)
        
    }
     
    return (
        <div className='center'>
        <form onSubmit={handleSubmit}>
            
            <label>Search Videos</label>
            <input type={""} value={filter} onChange={(event) => setFilter(event.target.value)}/>
            <button type='submit'>Search</button>
        </form>
        </div>
    );
}
 
export default SearchPage;