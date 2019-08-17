import React from 'react'

const Categories = ({ onTermSubmit }) => {
    return (
        <ul className="categories">
            <li onClick={() => onTermSubmit('Top Videos')}>Top Videos</li>
            <li onClick={() => onTermSubmit('Recent')}>Recent</li>
            <li onClick={() => onTermSubmit('Trout')}>Trout</li>
            <li onClick={() => onTermSubmit('Bass')}>Bass</li>
            <li onClick={() => onTermSubmit('Saltwater')}>Saltwater</li>
        </ul>
    )
}

export default Categories