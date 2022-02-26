import React, { Component } from 'react'
import s from './footer.module.scss'
import FooterBox from '../footerbox/FooterBox'
import SocialLinks from '../sociallinks/SocialLinks'


export default class Footer extends Component {
  render() {
    return (
      <>
        <footer className={`footer-section ${s.footer}`}>
            <div className={`container ${s.grid}`}>
              <FooterBox title={'Location'} text={`
              2215 John Daniel Drive Clark, MO 65243
              `}/>
              <FooterBox title={'Around the Web'}>
                <SocialLinks socialLinks = {
                  [
                  { image : 'faFacebook' , source : '#'},
                  { image : 'faTwitter' , source : '#'},
                  { image : 'faLinkedin' , source : '#'},
                  { image : 'faDribbble' , source : '#'},
                  ]
              }/>
              </FooterBox>
              <FooterBox title={'About Freelancer'} text={`
              Freelance is a free to use, MIT licensed Bootstrap theme created by Route
              `}/>
              {/*bona2an 3la el notes eli ana ktbtha footerBox kan a7san a3mel middle ware component adelo data we ye automate el creation bta3thom zai social links kda*/}
            </div>
            </footer>
            <p className = {`${s.copyRight}`}>Copyright © Your Website 2021</p>
      </>
          
   
    )
  }
}
