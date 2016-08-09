import React from 'react';



export default class ResultsPageEntry extends React.Component{
  constructor(props){
    super(props);
  }
  convertDate(time){
    var date = new Date(Date.parse(time));
    return date.toString();
  }

  render(){
    console.log(this.props.event);
    var description = this.props.event.description.html;
    var time =  this.convertDate(this.props.event.start.local);

    return (
    <div className='eventContainer'>
      <a className='btn' href={this.props.event.url}>{this.props.event.name.text}</a>
      <div>{time}
      </div>
      <div dangerouslySetInnerHTML={(()=> ({__html: description}))()}>
      </div>
    </div>
    )
  }

}
