import React, { useContext } from 'react'
import styled from 'styled-components';
import { ThemeContext } from '../contexts/ThemeContext'

function Setting() {
  const {theme,handleTheme} = useContext(ThemeContext);
  return (
    <div>
        <Para>Theme Mode : {theme} <span><button onClick={()=> handleTheme()}>Mode</button></span></Para>
    </div>
  )
}

const Para = styled.p`
  font-size: 24px;
  text-align: center;
`

export default Setting