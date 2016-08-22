import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setTracks } from '../../actions/index.js'


export default class MusicPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      tracks: [],
      track: null,
      curTrack: null,
      playing: false
    }
  }

  handleChange() {
    let val = document.getElementById('track-input')

    this.setState({
      input: val.value
    });
  }

  searchMusic(track) {
    //clear all previous tracks
    this.props.setTracks([]);
    var context = this;

    axios.post('/api/spotify', { q:track }).then(function(data) {
      context.props.setTracks(data.data.tracks.items);
      context.setState({
        tracks: data.data.tracks.items.reduce((memo, track) => {
          if (memo.length < 8) {
            memo.push(track);
          }
          return memo;
        }, [])
      });
    })
  }

  setTrack(i) {
    if (this.state.playing) {
      this.state.track.pause();
    }

    this.setState({
      playing: false,
      track: new Audio(this.state.tracks[i].preview_url),
      curTrack: this.state.tracks[i].album.images[0].url
    });
  }

  playPauseTrack() {
    this.state.playing ? this.state.track.pause() : this.state.track.play();
    this.setState({
      playing: !this.state.playing
    })
  }

  render() {
    return (
      <div className="marvin-teal">
        <input type="text" className="form-control" id="track-input" onChange={this.handleChange.bind(this)}></input>
        <button className="btn btn-default btn-padding" onClick={this.searchMusic.bind(this, this.state.input)}>Search Tracks</button>
        <div>
          <div>Current Track Selected:&nbsp;
            <img src={ this.state.curTrack } height="80px"></img>
          </div>
          <button className="btn btn-default btn-padding" onClick={ this.playPauseTrack.bind(this) } >Play/Pause</button>
          { this.state.tracks.map((track, i) => {
              return (
                <div className="track-name pre-scrollable" style={ { textAlign: "left", overflow: "auto" } } onClick={this.setTrack.bind(this, i)}>
                  <img src={ track.album.images[0].url } height={ 40 }></img>
                  { track.name }
                </div>
              )
            })
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    tracks: state.tracks
  };
};

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
    setTracks: setTracks
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(MusicPlayer);