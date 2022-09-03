import React from "react";
import './search-box.styles.css'

export const Searchbox = ({placeholder, handleChange}) => {
    return (
        <input 
        className="search"
        type='shearch'
        placeholder={placeholder}
        onChange={handleChange} 
        />
    )
}