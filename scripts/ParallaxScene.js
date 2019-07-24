'use strict';

const capas = [
  {
    id: 0,
    depth: 0.1,
    name: 'maar',
    image: '',
    height: '840',
    width: '',
    background: 'red',
    color: {
      r: 100,
      g: 50,
      b: 10,
      a: 0.5
    }
  },
  {
    id: 1,
    depth: 10,
    name: 'yea',
    image: '',
    height: '40',
    width: 'asdf',
    background: 'blue',
    color: {
      r: 0,
      g: 100,
      b: 40,
      a: 1
    }
  }
];

const Capa = (props) => {
  const {
    id,
    depth,
    background,
    image,
    name,
    height,
    width,
    color: { r, g, b, a }
  } = props;
  const willHeight = !!height ? `${height}px` : '1200px';
  const willWidth = !!width ? `${width}px` : '900px';
  const backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
  return (
    <div
      id={id}
      style={{ height: willHeight, width: willWidth, background: backgroundColor, opacity: 1 }}
      class="capa" data-depth={depth}
    >
      <div class="capa-content">
        {name}
      </div>
    </div>
  )
}

const Capas = () => {
  return (
    capas.map(element => {
      return <Capa {...element} />
    })
  )
}

class ParallaxScene extends React.Component {
  render() {
    return (
      <div class="parallax-container">
        <div id="scene">
          <Capas />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <ParallaxScene />,
  document.getElementById('parallax')
);

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene, {
  relativeInput: true
});

// parallaxInstance.friction(0.15, 0.75);
