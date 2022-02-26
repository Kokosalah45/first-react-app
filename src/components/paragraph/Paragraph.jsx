import React, { Component } from 'react'
import s from './paragraph.module.scss'
export default class Paragraph extends Component {
  render() {
    return (
    <section  style={{
        display : 'grid',
        gridTemplateColumns : 'repeat(2,1fr)',
        gap : '1.5em',
        fontSize : '1.5rem',
        color : 'white',
        
    }}>
     <p className={`${s.spanAll}`}>
          Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
      </p>
      <p className={`${s.spanAll}`}>
          You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
      </p>
    </section>
      
    )
  }
}
