import { createGlobalStyle } from 'styled-components';
import { themes } from "../../theme/theme"

const GlobalStyle = createGlobalStyle`
* {
	margin: 0;
	padding: 0;

	max-width: 2560px;
	font-family: 'Prompt', sans-serif;
	font-weight: 300;

	box-sizing: border-box;
	outline: none;
	user-select: text;
	-webkit-tap-highlight-color: transparent;
	
}


html {
	font-size: 62.5%;
	scroll-behavior:smooth;
}

body {

	width: 100%;
	background: #0E0E0E;

		overflow-x: hidden;
	
	  
}
main{
	overflow: hidden;
}
a {
	text-decoration: none;
	cursor: pointer;
	color: inherit;
}
img {
    width: 100%;
    margin: 3rem 0;
  }

  p,
  i,
  b,
 
  u {
    font-weight: 300;
    font-size: 1.7rem;
    line-height: 171.7%;
    white-space: pre-line;
    margin: 1.5rem 0;
    color: #4e4e4e;
    @media ${ themes.device.mobileM} {
      font-size: 1.4rem;
    }
  }
 u {
    text-decoration: underline;
  }
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 4.8rem;
    margin-bottom: 2rem;

    line-height: 132.5%;
    color: #343434;

    @media ${ themes.device.laptopL} {
      font-size: 3.2rem;
    }
  }
  h2,
  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 2.8rem;
    line-height: 132.5%;
    color: #343434;

    @media ${ themes.device.tabletS} {
      font-size: 2.4rem;
    }
  }
  h3 {
    font-size: 2.4rem;

    @media ${ themes.device.tabletS} {
      font-size: 2rem;
    }
  }

  blockquote {
    background: #f8f8f8;
    padding: 2rem;
    border-left: 2px solid #1b85e5;
  }
//   i {
//     font-style: italic;
//     color: #4e4e4e;
//     background: #f8f8f8;
//     padding: 2rem;
//     border-left: 2px solid #1b85e5;
//   }
//   .boldCursive {
//     font-weight: bold;
//     font-style: italic;
//   }
  b{
    font-weight: bold;
  }     
`;
export default GlobalStyle;
