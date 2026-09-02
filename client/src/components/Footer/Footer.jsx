import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import Button from '../Button/Button'

const Footer = () => {

    const footerLinks = [
        {
            name: "FAQ",
            path: "/faq"
        },
        {
            name: "Investor Relations",
            path: "/investor-relations"
        },
        {
            name: "Privacy",
            path: "/privacy"
        },
        {
            name: "Speed Test",
            path: "/speed-test"
        },
        {
            name: "Help Centre",
            path: "/help-centre"
        },
        {
            name: "Jobs",
            path: "/jobs"
        },
        {
            name: "Cookie Preferences",
            path: "/cookie-preferences"
        },
        {
            name: "Legal Notices",
            path: "/legal-notices"
        },
        {
            name: "Account",
            path: "/account"
        },
        {
            name: "Ways to Watch",
            path: "/ways-to-watch"
        },
        {
            name: "Corporate Information",
            path: "/corporate-information"
        },
        {
            name: "Only on Netflix",
            path: "/only-on-netflix"
        },
        {
            name: "Media Centre",
            path: "/media-centre"
        },
        {
            name: "Terms of Use",
            path: "/terms-of-use"
        },
        {
            name: "Contact Us",
            path: "/contact-us"
        }
    ];
    return (
        <footer className='default-footer'>
            <span>Questions? Call <Link to={"tel:000-800-919-1743"}>000-800-919-1743</Link></span>
            <ul>
                {footerLinks.map((link) => {
                    return (
                        <li key={link.name}>
                            <Link to={link.path}>{link.name}</Link>
                        </li>
                    );
                })}
            </ul>
            <Button text="English" spClass={'lang-button'} />
            <span className='f-ni'>Netflix India</span>
            <span className='fg'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>
        </footer>
    )
}

export default Footer