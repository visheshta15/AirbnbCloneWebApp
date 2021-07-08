import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <p>© 2021 Airbnb  clone! No rights reserved - this is a demo</p>
            <p className="desc">Made By Visheshta Kushwaha</p>
            <div className="sites">
                <a href="https://www.linkedin.com/in/kushwaha-visheshta/" rel="noreferrer noopener" target="_blank" class="fa fa-linkedin" >
                    <i aria-hidden="true"/>
                </a>
                <a href="https://www.facebook.com/Kushwaha.visheshta/" target="_blank" rel="noreferrer noopener" class="fa fa-facebook">
                    <i aria-hidden="true"/>
                </a>
                <a href="mailto: visheshtakushwaha15@gmail.com" rel="noreferrer noopener" class="fa fa-google">
                    <i aria-hidden="true"/>
                </a>

            </div>
        </div>
    )
}

export default Footer
