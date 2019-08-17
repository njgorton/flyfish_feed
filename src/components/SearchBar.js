import React, { useState } from 'react'

const SearchBar = (props) => {
    const [term, setTerm] = useState('')

    const onInputChange = event => {
        setTerm(event.target.value)
    }

    const onFormSubmit = event => {
        event.preventDefault()
        props.onTermSubmit(term)
    }

    return (
        <div className="searchBar">
            <form onSubmit={onFormSubmit} className="searchBar__form">
                <fieldset className="searchBar__fieldset">
                    <input
                        className="searchBar__input"
                        aria-label="Search Videos"
                        placeholder="Search Videos..."
                        type="text"
                        value={term}
                        onChange={onInputChange}
                    />
                </fieldset>
            </form>
        </div>
    )
}

export default SearchBar