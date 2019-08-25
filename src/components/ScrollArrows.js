import React from 'react'

const ScrollArrows = ({ scrollUp, scrollDown }) => {
    return (
        <div className="scrollArrows__container">
            <div className="scrollArrows scrollArrows--top" onClick={scrollUp}>
                <div className="scrollArrows__leftSide scrollArrows__leftSide--top"></div>
                <div className="scrollArrows__rightSide scrollArrows__rightSide--top"></div>
            </div>

            <div className="scrollArrows scrollArrows--bottom" onClick={scrollDown}>
                <div className="scrollArrows__leftSide scrollArrows__leftSide--bottom"></div>
                <div className="scrollArrows__rightSide scrollArrows__rightSide--bottom"></div>
            </div>
        </div>
    )
}

export default ScrollArrows