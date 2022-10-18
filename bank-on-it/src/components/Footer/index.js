import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinksWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink, 
    SocialMedia, 
    SocialMediaWrap, 
    SocialLogo, 
    WebsiteRights, 
    SocialIcons, 
    SocialIconLink
} from './FooterElements';

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    };

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to='/signin'>How It Works</FooterLink>
                        <FooterLink to='/signin'>Testimonials</FooterLink>
                        <FooterLink to='/signin'>Careers</FooterLink>
                        <FooterLink to='/signin'>Investors</FooterLink>
                        <FooterLink to='/signin'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                        <FooterLink to='/signin'>Online Support</FooterLink>
                        <FooterLink to='/signin'>Contact Info</FooterLink>
                        <FooterLink to='/signin'>Sponsors</FooterLink>
                        <FooterLink to='/signin'>Eco-Outlook</FooterLink>
                        <FooterLink to='/signin'>Destinations</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Video</FooterLinkTitle>
                        <FooterLink to='/signin'>Ambassadors</FooterLink>
                        <FooterLink to='/signin'>Influencer</FooterLink>
                        <FooterLink to='/signin'>Agency</FooterLink>
                        <FooterLink to='/signin'>Submit Video</FooterLink>
                        <FooterLink to='/signin'>Submit Comments</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to='/signin'>Youtube</FooterLink>
                        <FooterLink to='/signin'>Twitter</FooterLink>
                        <FooterLink to='/signin'>TikTok</FooterLink>
                        <FooterLink to='/signin'>Facebook</FooterLink>
                        <FooterLink to='/signin'>LinkedIn</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        BankOnIt
                    </SocialLogo>
                    <WebsiteRights>
                        BankOnIt &copy; {new Date().getFullYear()} All Rights Reserved
                    </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='YouTube'>
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
                            <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;