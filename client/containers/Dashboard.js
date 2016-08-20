import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MusicPlayer from '../components/music/MusicPlayer';
import Lights from '../components/lights/Lights';
import Todos from '../components/todo/Todo';
import Weather from '../components/weather/Weather';
import News from '../components/news/News';
import ResizableAndMovable from 'react-resizable-and-movable';

const style = {
  textAlign: 'center',
  padding: '20px',
  border: 'solid 3px #fff',
  borderRadius: '5px',
  color: '#fff',
};

var components = [
  { title: 'Music Player',      component: <MusicPlayer />, x: 200, y: 20, w: 300, h: 350 },
  { title: 'Saved Events',      component: null ,           x: 200, y: 400, w: 300, h: 350 },
  { title: 'Reminders',         component: null ,           x: 540, y: 400, w: 300, h: 350 },
  { title: 'Todays Weather',    component: <Weather />,     x: 540, y: 20, w: 300, h: 350 },
  { title: 'Interests',         component: null ,           x: 880, y: 20, w: 300, h: 350 },
  { title: 'To-do List',        component: <Todos />,       x: 1220, y: 20, w: 300, h: 350 },
  { title: 'News',              component: <News />,        x: 1220, y: 400, w: 300, h: 350 },
  { title: 'Home Automation',   component: <Lights />,      x: 880, y: 400, w: 300, h: 350 }
];

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      components: components
    }
  }

  sizeChange(i, dir, styleSize) {
    components[i].w = styleSize.width;
    components[i].h = styleSize.height;

    this.setState({
      components: components
    })
  }

  positionChange(i, e, ui) {
    components[i].x = ui.position.left;
    components[i].y = ui.position.top;

    console.log("X is ", components[i].x);
    console.log("Y is ", components[i].y);

    this.setState({
      components: components
    })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {
        this.state.components.map((comp, i) => {
          return (
            <ResizableAndMovable
              x={comp.x}
              y={comp.y}
              width={ comp.w }
              height={ comp.h }
              style={style}
              minWidth={300}
              minHeight={500}
              moveGrid={[20, 20]}
              resizeGrid={[20, 20]}
              onResize={this.sizeChange.bind(this, i)}
              onDrag= { this.positionChange.bind(this, i)}
              className="widget"
              >
              <div className="marvin-teal"><h3>{ comp.title }</h3>
                <div> { comp.component } </div>
              </div>
            </ResizableAndMovable>
            )
          })
        }
      </div>
    )
  }

}

function mapStateToProps (state) {
  return {
  };
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
