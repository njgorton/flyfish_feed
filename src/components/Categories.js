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

    const closeNav = () => {
        if (showNav === 'categories--opened' && showNavBtn === 'active') {
            setShowNav('categories--closed')
            setShowNavBtn('')
        }
    }

    return (
        <nav>
            <ul className={`categories ${showNav}`} onClick={closeNav}>
                <li><button onClick={() => onTermSubmit('Top Videos')} tabIndex='0'>Top Videos</button></li>
                <li><button onClick={() => onTermSubmit('Techniques')} tabIndex='0'>Techniques</button></li>
                <li><button onClick={() => onTermSubmit('Trout')} tabIndex='0'>Trout</button></li>
                <li><button onClick={() => onTermSubmit('Bass')} tabIndex='0'>Bass</button></li>
                <li><button onClick={() => onTermSubmit('Saltwater')} tabIndex='0'>Saltwater</button></li>
            </ul>

            <div className='categories__mobile-nav'>
                <a
                    id="nav-toggle"
                    href="#!"
                    onClick={handleNav}
                    className={showNavBtn}
                >
                    <span></span>
                </a>
            </div>
        </nav>
    )
}

export default Categories