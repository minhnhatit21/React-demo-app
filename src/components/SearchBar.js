import './SearchBar.css'
import { useState } from "react";


function SearchBar({onSubmit}) {
    
    const [term, setTerm] = useState('');

    const handleOnSubmit = (event) => {
        event.preventDefault();
        onSubmit(term);
    }

    const handleChange = (event) => {
        setTerm(event.target.value);
    }
    return (
        <>  
            <form className='search-bar' onSubmit={handleOnSubmit}>
                <input value={term} onChange={handleChange}/>
            </form>
        </>
    )
}

export default SearchBar;