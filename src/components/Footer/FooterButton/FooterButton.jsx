import React from 'react'
import "./FooterButton.css";

const FooterButton = ({title}) => {
  return (
    <div>
        <button className='footer-Button'>
            {title}
        </button>
    </div>
  )
}

export default FooterButton