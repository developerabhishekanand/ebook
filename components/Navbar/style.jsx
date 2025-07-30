import styled from 'styled-components';


const NavStyle = styled.div`
&.nav-style {
padding: 0 30px;
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
		&:focus {
			outline: none;
		}
	}
}
	
}
  
`;

export default NavStyle;