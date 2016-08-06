import React from 'react';
import { searchEvents } from '../actions/index.js'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

var categories = [
  { value: 103, cat: 'Music' },
  { value: 110, cat: 'Food & Drink' },
  { value: 101, cat: 'Business & Professional' },
  { value: 113, cat: 'Community & Culture' },
  { value: 105, cat: 'Performing & Visual Arts' },
  { value: 104, cat: 'Film, Media & Entertainment' },
  { value: 108, cat: 'Sports & Fitness' },
  { value: 107, cat: 'Health & Wellness' },
  { value: 102, cat: 'Science & Technology' },
  { value: 109, cat: 'Travel & Outdoor' },
  { value: 111, cat: 'Charity & Causes' },
  { value: 114, cat: 'Religion & Spirituality' },
  { value: 115, cat: 'Family & Education' },
  { value: 116, cat: 'Seasonal & Holiday' },
  { value: 112, cat: 'Government & Politics' },
  { value: 106, cat: 'Fashion & Beauty' },
  { value: 117, cat: 'Home & Lifestyle' },
  { value: 118, cat: 'Auto, Boat & Air' },
  { value: 119, cat: 'Hobbies & Special Interests' },
  { value: 199, cat: 'Other' }
]

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
  }

  handleChange(event) {
    let val = document.getElementById('category-select');

    this.setState({
      value: event.target.value,
      category: val.options[val.selectedIndex].value
    })
  }

  render() {
    return (
      <div>
        <select id='category-select'>
          { categories.map(obj => {
              return <option value={ obj.value }>{ obj.cat }</option>
            })
          }
        </select>
        <input
          type='text'
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        ></input>
        <button onClick={
          this.props.searchEvents.bind(this, this.state)
        }
        >Search Events</button>
      </div>
      )
  }
}

function mapStateToProps (state) {
  return {
    search: state
  };
};

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    searchEvents: searchEvents
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

