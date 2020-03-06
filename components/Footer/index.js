import React, { useEffect, useState } from 'react';

import {
  LinkFooter,
  LinksFooter,
  LinkImage,
  FooterCustom,
  MainInfo,
  GenQuestion,
  WithAddress,
  Address,
  ReviewPlatform,
  LinkReview,
  HrCustom,
  WithLogo,
  Button,BorderDIV,MiniText,DIVAddress

} from './styles';

import Media from './indexMedia';
const Logo = '../../static/Logo.svg';
const img00 = '../../static/reviewPlatform/00.svg';

const img11 = '../../static/reviewPlatform/1.svg';
const img22 = '../../static/reviewPlatform/22.svg';

const Footer = ({ origin }) => {
  const links = [
    {
      link: 'https://www.upwork.com/agencies/~01588c66cf90173ead',
      img: img11,
    },
    {
      link: 'https://www.goodfirms.co/company/fulcrum-rocks',
      img: img22,
    },
    { link: 'https://clutch.co/profile/fulcrum', img: img00 },
  ];

  return (
    <>
      <FooterCustom>
        <WithLogo>
          <LinkImage to="/">
            <img src={Logo} alt="logo" />
          </LinkImage>
          <MainInfo>
            <LinksFooter>
              <LinkFooter href={`http://fulcrum.rocks/#services`}>Services</LinkFooter>
              <LinkFooter href={`http://fulcrum.rocks/#projects`}>Projects</LinkFooter>
              <LinkFooter href={`http://fulcrum.rocks/about/`}>About</LinkFooter>
              <LinkFooter href={`${origin}/blog/`}>Blog</LinkFooter>
            </LinksFooter>
            <WithAddress>
              
            <BorderDIV> 
                <DIVAddress >
                  <GenQuestion>General questions:</GenQuestion>
                  <Address>
                    {"Kyiv, Peremogi Avenue 26, office 116" +
                      "\n\n" +
                      "+38 (097) 461-58-57" +
                      "\n\n" +
                      "hello@fulcrum.rocks"}
                  </Address>
                </DIVAddress>
                <div>
                  <GenQuestion>Lean Canvas:</GenQuestion>
                  <MiniText>
                    Lean Canvas is an adapted version of Business Canvas model
                    by Alex Osterwalder.
                  </MiniText>
                  <Button href={origin}>Create</Button>
                </div>
              </BorderDIV>
              <ReviewPlatform>
                {links.map((key, i) => (
                  <LinkReview
                    href={key.link}
                    key={i}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      style={{ objectFit: 'contain', height: 'auto' }}
                      src={links[i].img}
                      alt="reviewPlatform"
                    />
                  </LinkReview>
                ))}
                {/* {firefox? */}
              </ReviewPlatform>
            </WithAddress>
          </MainInfo>
        </WithLogo>

        <HrCustom />
        <Media />
      </FooterCustom>
    </>
  );
};

export default Footer;
