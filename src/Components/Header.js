import React from 'react'
import styled from 'styled-components'

function Header() {
  return (
    <ContainerHeader>
      <h2> PullUpKutz </h2>
    </ContainerHeader>
  )
}

export default Header;

const ContainerHeader = styled.div`
	background-color: blue;
	color: white;
`;
