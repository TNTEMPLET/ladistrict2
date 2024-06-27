import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import RenderBracket from '../Components/BracketTemplates/RenderBracket'
import Header from '../Components/Header/Header'

const Bracket = () => {
  return (
  <>
    <Header />
    <Navbar />
    <RenderBracket />
  </>
  );
}

export default Bracket