import React from 'react'

const Footer = () => {
    return (
        <footer className="footer">
            <p className="footer__text">
                To see the repository for this React App and all my other projects, visit my Github, @&nbsp;
                <a
                    href="https://github.com/njgorton"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__link"
                >
                    <i className="devicon-github-plain"></i>/njgorton
                </a>.
                <br></br>
                Image by
                <a
                    className="footer__credit"
                    href="https://pixabay.com/users/praimann-180159/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=280718">
                    &nbsp;Peter Raimann
                </a> from
                <a
                    className="footer__credit"
                    href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=280718">
                    &nbsp;Pixabay
                </a>
                <br></br>
                <br></br>
                Copyright <span>&copy;</span> <a className="footer__author" href="https://nathanielgorton.netlify.com/">2019 Useful UI | Nathaniel Gorton</a>.
            </p>
        </footer>
    )
}

export default Footer