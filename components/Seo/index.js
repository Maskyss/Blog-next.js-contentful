import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const favicon = '../../static/logoMini.png';

function Seo({ description, lang, meta, keywords, title, image, url = '' }) {


  const metaDescription = description ;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s `}
      meta={[
        {
          property: 'og:locale',
          content: 'en_US',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:site_name',
          content: title,
        },
        {
          property: 'og:image',
          content: image,
        },
        // {
        //   property: 'og:url',
        //   content: url,
        // },
        {
          name: 'description',
          content: metaDescription,
        },

        {
          name: 'twitter:card',
          content: 'summary',
        },

        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:image',
          content: image,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: 'keywords',
                content: keywords.join(', '),
              }
            : [],
        )
        .concat(meta)}
    >
      {/* <script>
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
            j.async=true;
            j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
            f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5WT3C9R')`}
      </script> */}
      <link rel="icon" href={favicon} />
    </Helmet>
  );
}

Seo.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [],
};

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      property: PropTypes.string,
      content: PropTypes.string,
    }),
  ),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string,
};

export default Seo;
