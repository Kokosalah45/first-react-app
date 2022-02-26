import React, { Component } from 'react'
import s from  './form.module.scss'
export default class Form extends Component {
  state = {
    name : '' ,
    phoneNo : '',
    emailAddress : '',
    message : ''
  }
  handleChange = e => {
    this.setState({[e.target.name] : e.target.value})
  }
  render() {
    const {name , phoneNo , emailAddress , message } = this.state;
    const {onFormSubmit} = this.props;
    return (
    <div>
      <form className={`${s.form}`} onSubmit = { e =>  onFormSubmit( e , this.state)}>
        <input type="text" name="name" value={name} onChange={this.handleChange} placeholder="Name"/>
        <input type="number" name="phoneNo" value={phoneNo} onChange={this.handleChange} placeholder="Phone Number" />
        <input type="email" name="emailAddress" value={emailAddress} onChange={this.handleChange} placeholder="Email Address" />
        <textarea type="text" name="message" value={message} onChange={this.handleChange} placeholder="Message" />
        <button className={`${s.formButton}`} type='submit'>Send</button>
      </form>
    </div>
      
    )
  }
}
