import React from 'react';
import LinkedinIcon from '../images/linkedin.svg';
import TwitterIcon from '../images/twitter.svg';
import FacebookIcon from '../images/facebook.svg';
import YoutubeIcon from '../images/youtube.svg';

const span = (<span className='divider'> | </span>)
const Footer = (props) => {
    return (
        <div className="container-fluid">
            <div className='d-flex'>
                <div className='copyright'>
                  Copyright © 2021 Kaloyan Krastev. Licensed under the Apache License, Version 2.0 (the "License");
                </div>
                <div className='d-flex ml-auto'>
                    <div className="social">
                    <a href="https://github-pydqjj.stackblitz.io"><img src={YoutubeIcon} alt="youtube"/></a>
                    <a href="https://twitter.com/ApchSoftware"><img src={TwitterIcon} alt="twitter" /></a>
                    <a href="https://www.linkedin.com/in/kaloyan-k-krastev"><img src={LinkedinIcon} alt="linkedin" /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
