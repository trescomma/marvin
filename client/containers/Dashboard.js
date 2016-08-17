import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MusicPlayer from '../components/music/MusicPlayer';
import Lights from '../components/lights/Lights';
import Todos from '../components/todo/Todo';

import ResizableAndMovable from 'react-resizable-and-movable';

const style = {
  textAlign: 'center',
  padding: '20px',
  border: 'solid 3px #fff',
  borderRadius: '5px',
  color: '#fff',
};

var components = [
  { title: 'Music Player',      component: <MusicPlayer />, x: 20, y: 20, w: 200, h: 200 },
  { title: 'Saved Events',      component: null ,           x: 20, y: 220, w: 200, h: 200 },
  { title: 'Reminders',         component: null ,           x: 20, y: 420, w: 200, h: 200 },
  { title: 'Todays Weather',    component: null ,           x: 220, y: 20, w: 200, h: 200 },
  { title: 'Interests',         component: null ,           x: 420, y: 20, w: 200, h: 200 },
  { title: 'To-do List',        component: <Todos />,       x: 620, y: 20, w: 200, h: 200 },
  { title: 'Calendar',          component: null ,           x: 220, y: 220, w: 200, h: 200 },
  { title: 'Wellness Tracker',  component: null ,           x: 420, y: 220, w: 200, h: 200 },
  { title: 'Arduino',           component: null ,           x: 620, y: 220, w: 200, h: 200 },
  { title: 'Lights',            component: <Lights />,      x: 220, y: 420, w: 200, h: 200 },
  { title: 'Payment Reminders', component: null ,           x: 420, y: 420, w: 200, h: 200 }
];

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      components: components
    }
  }

  printChange(i, dir, styleSize) {
    components[i].w = styleSize.width;
    components[i].h = styleSize.height;

    this.setState({
      components: components
    })

    console.log(this.state.components[i]);
  }

  printDrag(i, e, ui) {
    components[i].x = ui.position.left;
    components[i].y = ui.position.top;

    this.setState({
      components: components
    })

    console.log(this.state.components[i]);
  }

  render() {
    return (
      <div>
        {
          this.state.components.map((comp, i) => {
          return (
            <ResizableAndMovable
              x={comp.x}
              y={comp.y}
              width={200}
              height={200}
              style={style}
              minWidth={200}
              minHeight={200}
              maxWidth={800}
              maxHeight={300}
              moveGrid={[20, 20]}
              resizeGrid={[20, 20]}
              onResize={this.printChange.bind(this, i)}
              onDrag= { this.printDrag.bind(this, i)}
              >
            <div> { comp.title }
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

