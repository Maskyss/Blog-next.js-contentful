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
              <LinkFooter href={`${origin}#services`}>Services</LinkFooter>
              <LinkFooter href={`${origin}#projects`}>Projects</LinkFooter>
              <LinkFooter href={`${origin}/about/`}>About</LinkFooter>
              <LinkFooter href={`${origin}/blog/`}>Blog</LinkFooter>
            </LinksFooter>
            <WithAddress>
              <GenQuestion>General questions:</GenQuestion>
              <Address>
                {'Kyiv, Peremogi Avenue 26, office 116' +
                  '\n\n' +
                  '+38 (097) 461-58-57' +
                  '\n\n' +
                  'team@fulcrum.rocks'}
              </Address>
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
