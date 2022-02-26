import React, { Component } from 'react'
import SectionTitle from '../sectiontitle/SectionTitle';

export default class PageSection extends Component {
  render() {
    const {sectionName , backGroundColor , sectionTitleColor , children} =  this.props;
    
    return (
    
      <section 
      id={sectionName} 
      style={{
        backgroundColor : backGroundColor
      }} 
      className="pg-section section-grid">
      <SectionTitle textContent = {sectionName} componentsColor={sectionTitleColor} headerFont="fsMedium" />
      {children}
      </section>
    )
  }
}
