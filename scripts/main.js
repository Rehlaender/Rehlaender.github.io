'use strict';

const Globe = (props) => {
  let { text } = props;
  return (
    <div
      className="globe">{text}</div>
  )
}
const BandPopUp = (props) => {
  const {
    band: {
      name,
      backgroundColor,
      textColor,
      text,
      bandcamp,
      main_image,
      images,
    }
  } = props;

  const closeBandPopUp = () => {
    props.closeFunction();
  }

  return (
    <div>
      {
        name !== 'undefined' &&
        <div
          className="band popup">
          <div
            className="closeButton"
            onClick={() => { closeBandPopUp() }}>
            x
        </div>
          <div className="band-info">
            <img className="mainImage" src={main_image} />
            <div className="info-container">
              <h2>{name}</h2>
              <p>{text}</p>
              <div>
                #todo images
            </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

const Cartoon = (props) => {
  const { applyRef, className, text } = props;
  return (
    <div
      id="cartoon"
      ref={applyRef}
      className={['cartoon ' + className]}>
      <Globe text={text} />
    </div>
  )
}

const InfoJSON = {
  socialMedia: {
    facebook: 'as',
    twitter: '',
    instagram: '',
    github: ''
  },
  story: {
    1: {
      title: 'animation tutorial.',
      subtitle: 'front-end developer',
      text: [
        '16 februrary 1995',
        'bored guy always having fun'
      ]
    }
  },
  art: {
    bands: [
      {
        name: 'undefined'
      },
      {
        name: 'whalecoma',
        backgroundColor: '#ADD8E6',
        textColor: '#000',
        text: 'yeehaw  carnal asdfasdfhaskdj asdf asdf asdf asdf asdf asdf carnal asdfasdfhaskdj asdf asdf asdf asdf asdf asdf carnal asdfasdfhaskdj asdf asdf asdf asdf asdf asdf carnal asdfasdfhaskdj asdf asdf asdf asdf asdf asdf carnal asdfasdfhaskdj asdf asdf asdf asdf asdf asdf asdf asdff ',
        bandcamp: '',
        main_image: 'https://via.placeholder.com/300',
        images: []
      },
      {
        name: 'perdidos en el mar',
        backgroundColor: '',
        textColor: '#000',
        text: '',
        bandcamp: '',
        main_image: '',
        images: []
      }
    ],
    books: [

    ]
  },
  code: {
    tools: [
      '☆ react', 'angular', '☆ vue',
      'css/scss/style/etc', '☆ redux',
      'vuex', 'es6/ts/etc', '☆ react-native',
      'git', 'c-3', 'node', 'boostrap/orwhateverstylelibrary'
    ],
    deployedProjects: [
      {
        name: 'redux/thunk app',
        description: 'an example app using redux/thunk',
        deploy: 'https://rehlaender.github.io/react-portfolio/',
        github: 'https://github.com/Rehlaender/react-portfolio',
      },
      {
        name: 'sassy-pokedex',
        description: 'just showing css animations and promises by consuming the pokemon api',
        deploy: 'https://rehlaender.github.io/sassy-pokedex/',
        github: 'https://github.com/Rehlaender/sassy-pokedex'
      }
    ]
  }
};


const Info = (props) => {
  const {
    infojson: { title, subtitle, text }
  } = props;
  return (
    <div
      id="info"
      className={['info ' + 'right-shadow animated']}>
      <div className="container">
        <h1>{title}</h1>
        <h4>{subtitle}</h4>
        {
          text && text.length > 0 && text.map(element => {
            return <p>{element}</p>
          })
        }
      </div>
    </div>
  )
}

const Actions = (props) => {
  return (
    <div
      id="actions"
      className={['action-container animated']}>
      <span className="block">codes</span>
      <span className="block">bands</span>
      <span className="block">books</span>
      <span className="block">paintings</span>
    </div>
  )
}

const Footer = (props) => {
  const {
    socialMedia: {
      facebook,
      twitter,
      instagram,
      github
    }
  } = props;
  return (
    <div className="footer">
      <p className="link"><a href={facebook}>facebook</a></p>
      <p className="link"><a href={twitter}>twitter</a></p>
      <p className="link"><a href={instagram}>instagram</a></p>
      <p className="link"><a href={github}>github</a></p>
    </div>
  )
}

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.cartoonRef = React.createRef();

    this.state = {
      position: 'isRight',
      willSay: 'jenlo im maar and everything is asom',
      willSayPart: 1,
      bandId: 0,
    };
  }

  render() {
    const { position, willSayPart, willSay, bandId } = this.state;
    return (
      <div id="main">
        <div id="home">
          <BandPopUp
            band={InfoJSON['art']['bands'][bandId]}
            closeFunction={() => { console.log('closed') }} />
          <Info infojson={InfoJSON['story'][willSayPart]} />
          <Actions />
          <Cartoon
            applyRef={this.cartoonRef}
            className={position}
            text={willSay} />
          <Footer socialMedia={InfoJSON['socialMedia']} />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);

