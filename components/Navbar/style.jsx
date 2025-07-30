import styled from 'styled-components';


const NavStyle = styled.div`
&.nav-style {
	padding: 0;
	&.sticky {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
	}
	
	.nav-block  {
		padding: 0 30px;
	}
	
.navbar {
	> .navbar-start {
			width: 30%;
		}

	> .navbar-end  {
			width: 70%;
		}
	.serach-container {
		display: flex;
		gap: 8px;
	}
	.search-input {
		&:focus,&:focus-within {
		    outline-offset: 0;
			outline: none !important;
		}
	}
}
	
}
  
`;

export default NavStyle;