import React from "react";
import PropTypes from "prop-types";
import GlobalStyle from "./styles";


const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-5WT3C9R"
          style={{
            display: "none",
            height: 0,
            width: 0,
            visibility: "hidden"
          }}
        />
      </noscript>

    
      {/* <script
        type="text/javascript"
        id="hs-script-loader"
        async
        defer
        src="//js.hs-scripts.com/6956063.js"
      /> */}
    </>
  );
};



export default Layout;
