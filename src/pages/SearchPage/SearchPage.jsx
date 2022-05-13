
import React, { useState } from 'react';



const SearchPage = (props) => {
    const [filter, setFilter] = useState("")
    function handleSubmit(event){
event.preventDefault();
let newFilter = {
    filter: filter
};
setFilter(newFilter)
    }
     
 
    return (
        <form onSubmit={handleSubmit}>
            <label>Filter Songs</label>
            <input type={""} value={filter} onChange={(event) => setFilter(event.target.value)}/>
            <button type='submit'>Search</button>
        </form>
    );
}
 
export default SearchPage;