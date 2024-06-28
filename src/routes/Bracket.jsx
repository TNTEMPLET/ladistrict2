import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import RenderBracket from '../Components/BracketTemplates/RenderBracket'
import Header from '../Components/Header/Header'

const Bracket = () => {
  return (
  <>
    <Navbar />
    <Header />
    <RenderBracket />
  </>
  );
}

export default Bracket