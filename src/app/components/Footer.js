import React from 'react';
import Link from "next/link";
import footerStyles from '@/app/styles/footer.module.css'
import { FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import FooterDynamicList from './FooterDyanmicList';

export const metadata = {
    url: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css',
}

const Footer = () => {
    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.content}>
                <div className={footerStyles.top}>
                    <div className={footerStyles['logo-details']}>
                        {/*<i className={footerStyles.fab fa-slack]></i>*/}
                        <span className={footerStyles.logo_name}>Ashish Agrawal</span>
                    </div>
                    <div className={footerStyles[`media-icons`]}>
                        <Link href="https://www.linkedin.com/in/iashish-agrawal" target="_blank"><i> <FaLinkedinIn /> </i></Link>
                        <Link href="https://medium.com/@agrawalashish" target="_blank"><i> <FaMedium /> </i></Link>
                        <Link href="https://www.youtube.com/@SpecialDays" target="_blank"><i> <FaYoutube /> </i></Link>
                    </div>
                </div>
                <div className={footerStyles['link-boxes']}>
                    <ul className={footerStyles.box}>
                        <li className={footerStyles.link_name}>Pages</li>
                        <li><a href="#">Home</a></li>
                        <li><a href="/movies">Movies</a></li>
                        <li><a href="/about">About us</a></li>
                        <li><a href="/contact">Contact us</a></li>
                    </ul>

                    <FooterDynamicList heading="Movies" type="movie" limit="4" />
                    <FooterDynamicList heading="Shows" type="show" limit="4" />

                    <ul className={`${footerStyles.box} ${footerStyles['input-box']}`}>
                        <li className={footerStyles.link_name}>Subscribe</li>
                        <li><input type="text" placeholder="example@domain.com" /></li>
                        <li><input type="button" value="Subscribe" /></li>
                    </ul>
                </div>
            </div>
            <div className={footerStyles['bottom-details']}>
                <div className={footerStyles.bottom_text}>
                    <span className={footerStyles.copyright_text}> Copyright © {new Date().getFullYear()} &nbsp;
                        <Link href="/">Ashish Agrawal.</Link> All rights reserved
                    </span>
                    <span className={footerStyles.policy_terms}>
                        <Link href="/">Privacy policy</Link>
                        <Link href="/">Terms & condition</Link>
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
