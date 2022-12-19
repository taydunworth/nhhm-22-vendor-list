import * as React from "react";

const Search = ({searchTerm, onChange}) => {

    return (
        <div>
            <input type="text" value={searchTerm} onChange={e => onChange(e.target.value)}/>
        </div>
    )
    
}

export default Search