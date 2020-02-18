import { createGlobalStyle } from 'styled-components';

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
      
`;
export default GlobalStyle;
