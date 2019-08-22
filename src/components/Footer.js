import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__text">
                To see the repository for this React App and all my other projects, visit my Github, @
                <a
                    href="https://github.com/njgorton"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link">
                    <i className="devicon-github-plain"></i>/njgorton
                </a>.
                <br></br>
                Image by
                <a
                    className="footer__credit"
                    href="https://pixabay.com/users/praimann-180159/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=280718">
                    Peter Raimann
                </a> from
                <a
                    className="footer__credit"
                    href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=280718">
                    Pixabay
                </a>
                <br></br>
                <br></br>
                Copyright <span>&copy;</span> 2019 Useful UI | Nathaniel Gorton.
            </p>
        </footer>
    )
}

export default Footer