import React from 'react'
import './FlipBox.css'

function FlipBox({logo,headingTag,headingText,pTag,pText}) {
    const HTag = headingTag
    const PTag = pTag
    return (
        <div class="flip-box">
            <div class="flip-box-inner">
                <div class="flip-box-front">
                    <img src={logo} alt="Logo" title={headingText}/>
                </div>
                <div class="flip-box-back">
                    <HTag className='flip-box-back-heading'>{headingText}</HTag>
                    <PTag className='flip-box-back-para'>{pText}</PTag>
                </div>
            </div>
        </div>

    )
}

export default FlipBox
