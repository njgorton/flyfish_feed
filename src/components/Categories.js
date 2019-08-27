import React, { useState } from 'react'

const Categories = ({ onTermSubmit }) => {
    const [showNavBtn, setShowNavBtn] = useState('')
    const [showNav, setShowNav] = useState('')

    const handleNav = () => {
        let navBtn = showNavBtn === 'active' ? '' : 'active'
        let nav = showNav === 'categories--opened' ? '' : 'categories--opened'
        setShowNavBtn(navBtn)
        setShowNav(nav)
    }

    return (
        <nav>
            <ul className={`categories ${showNav}`}>
                <li onClick={() => onTermSubmit('Top Videos')}>Top Videos</li>
                <li onClick={() => onTermSubmit('Techniques')}>Techniques</li>
                <li onClick={() => onTermSubmit('Trout')}>Trout</li>
                <li onClick={() => onTermSubmit('Bass')}>Bass</li>
                <li onClick={() => onTermSubmit('Saltwater')}>Saltwater</li>
            </ul>

            <div className='categories__mobile-nav'>
                <a id="nav-toggle" href="#!" onClick={handleNav} className={showNavBtn}><span></span></a>
            </div>
        </nav>
    )
}

export default Categories