import React, { Component } from 'react'
import s from './main.module.scss';
import PageSection from '../pagesection/PageSection';
import ImageViewer from '../imageviewer/ImageViewer';
import Form from '../form/Form'
import Paragraph from '../paragraph/Paragraph';


export default class Main extends Component {

    getChildren = (pageSection)=>{
      if(pageSection === 'portfolio'){
        return <ImageViewer/>
      }
      
      
      if(pageSection === 'contact me'){
        return <Form onFormSubmit = {this.handleFormData}/>
      }
        
      if(pageSection === 'about')
      return <Paragraph/>
      //kan el a7san hena HASHMAP bas m4 delwa2ti
      return null;
    }
  
    handleFormData = (e,formData) => {
      e.preventDefault();
      console.log(formData)
    }
    render() {
    const {pageSections} = this.props;


    return (
    <main>  
        {
        pageSections.map((pageSection , index) => (
          (index % 2 === 0) ? 
            <PageSection sectionName={pageSection} backGroundColor={'white'} sectionTitleColor={'#2c3e50'}>
              {this.getChildren(pageSection)}
            </PageSection>
          : <PageSection sectionName={pageSection} backGroundColor={'#1abc9c'} sectionTitleColor={'white'} >
            {this.getChildren(pageSection)}
          </PageSection>
        ) )
        }
    </main>
    
    )
  }
}
