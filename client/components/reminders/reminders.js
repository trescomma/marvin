import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setReminder } from '../../actions/index.js';
import axios from 'axios';
import moment from 'moment';
import DatePicker from'react-datepicker';


export default class Reminders extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      reminder: '',
      date: moment(),
      hours: 12,
      min: 15,
      when: 'am',
      errMsg: ''
    }
    this.handleDate = this.handleDate.bind(this);
    this.handleReminder = this.handleReminder.bind(this);
    this.changeWhen = this.changeWhen.bind(this);
    this.handleHours = this.handleHours.bind(this);
    this.handleMin = this.handleMin.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    let hour = this.state.hours;
    const min = this.state.min;
    const date = this.state.date;
    const when = this.state.when;

    const now = moment();
    //convert hour depending on ampm

    if(when ==='pm') hour += 12;

    //same date, later time
    if(date.get('year') === now.get('year') &&
      date.get('month') === now.get('month') &&
      date.get('date') === now.get('date') &&
      hour>=now.hour() &&
      min > now.minute()){

      console.log('this would pass the test');
    //future date
    }else if(date.get('year') >= now.get('year') &&
      date.get('month') >= now.get('month') &&
      date.get('date') > now.get('date')){

      console.log('this would pass the test');
    }else{
      this.setState({
        errMsg: 'You need to pick a future time!'
      });
    }
  }

  handleReminder(e){
    this.setState({
      reminder: e.target.value
    });
  }
  handleHours(e){
    this.setState({
      hours: e.target.value
    });
  }
  handleMin(e){
    this.setState({
      min: e.target.value
    });
  }

  handleDate(date) {
    this.setState({
      date
    });
  }
  changeWhen(e){
    this.setState({
      when: e.target.value
    });
  }

  render(){
    return (
      <div className ='container-fluid'>
      <div className = 'row'>
        <div className ='col-sm-12'>
          <input type = "text" placeholder='Add a reminder' value={this.state.reminder}onChange={this.handleReminder}/>
          <DatePicker
          selected={this.state.date}
          onChange={this.handleDate}
          />
        </div>
        <div className='col-sm-12'>
          <div className ='col-sm-8'>
            <input type = 'number' max='12' min ='1' value={this.state.hours}onChange={this.handleHours}/>:
            <input type = 'number' max= '59' min ='0' value = {this.state.min}onChange={this.handleMin}/>
          </div>
          <div className ='col-sm-4'>
            <select value = {this.state.am} onChange={this.changeWhen}>
                <option>am</option>
                <option>pm</option>
            </select>
          </div>
        </div>

          <button onClick={this.handleSubmit}>Create</button>
          <p> {this.state.errMsg} </p>
        </div>
      </div>
      )
  }
}