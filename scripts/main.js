'use strict';

const Globe = (props) => {
  let { text } = props;
  return (
    <div
      className="globe">{text}</div>
  )
}

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      left: 0,
      top: 0,
      isMouseHovering: false,
    };
  }

  componentWillMount() {
    console.log(window.innerHeight, window.innerWidth, 'jej')
    const innerHeight = window.innerHeight - 50;
    const innerWidth = window.innerWidth - 300;
    const randomTop = Math.floor(Math.random() * innerHeight) + 1;
    const randomLeft = Math.floor(Math.random() * innerWidth) + 1;
    this.setState({ left: randomLeft, top: randomTop });

    const superThis = this;
    setInterval(() => {
      const superinnerHeight = window.innerHeight - 50;
      const superinnerWidth = window.innerWidth - 300;
      const superrandomTop = Math.floor(Math.random() * superinnerHeight) + 1;
      const superrandomLeft = Math.floor(Math.random() * superinnerWidth) + 1;
      superThis.setState({ left: superrandomLeft, top: superrandomTop });
    }, 2000);
  }

  onMouseEnterHandler() {
    this.setState({ isMouseHovering: true });

  }

  onMouseLeaveHandler() {
    this.setState({ isMouseHovering: false });
  }

  render() {
    const { name, onClickFunction, index } = this.props;
    const { left, top } = this.state;
    return (
      <div className={"absoluteitem animated"}
        onMouseEnter={() => this.onMouseEnterHandler()}
        onMouseLeave={() => this.onMouseLeaveHandler()}
        onClick={() => { onClickFunction(index) }}
        style={{ top: `${top}px`, left: `${left}px` }}>
        {name}
      </div>
    )
  }
}

const Bands = (props) => {
  const { openBand } = props;
  return (
    <div>
      {
        InfoJSON['art']['bands'].map((band, index) => {
          return band.name !== 'undefined' && (
            <Item
              index={index}
              name={band.name}
              onClickFunction={openBand} />
          )
        })
      }
    </div>
  )
}

const Books = (props) => {
  const { openBook } = props;
  return (
    <div>
      {
        InfoJSON['art']['books'].map((book, index) => {
          return book.name !== 'undefined' && (
            <Item
              index={index}
              name={book.name}
              onClickFunction={openBook} />
          )
        })
      }
    </div>
  )
}

const BandPopUp = (props) => {
  const {
    whatIs,
    willShow,
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
          className={`band popup ${whatIs}`}
          style={{backgroundImage: `url(${main_image})`}}>
          <div
            className="closeButton"
            onClick={() => { closeBandPopUp() }}>
            x
          </div>
          <div className="band-info">
            <div className="info-container">
              <h2>{name}</h2>
              <p>{text}</p>
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
        'bored guy, always having fun'
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
        left: 100,
        top: 80,
        textColor: '#000',
        text: 'an emo band i made with berny and adrián',
        bandcamp: '',
        main_image: './assets/profile_whalecoma.jpg',
        images: []
      },
      {
        name: 'perdidos en el mar',
        backgroundColor: '',
        left: 150,
        top: 300,
        textColor: '#000',
        text: 'my personal project, hope this could be a full band tho',
        bandcamp: '',
        main_image: './assets/profile_perdidos.jpg',
        images: []
      }
    ],
    books: [
      {
        name: 'undefined'
      },
      {
        name: 'basura que se cree poesía',
        backgroundColor: '',
        textColor: '#000',
        text: 'a bummer poetry zine',
        bandcamp: '',
        main_image: './assets/profile_basura.jpg',
        images: []
      }
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
  const { toggleContainer } = props;
  return (
    <div
      id="actions"
      className={['action-container animated']}>
      <span onClick={() => toggleContainer('codes')} className="block">codes</span>
      <span onClick={() => toggleContainer('bands')} className="block">bands</span>
      <span onClick={() => toggleContainer('books')} className="block">books</span>
      <span onClick={() => toggleContainer('paintings')} className="block">paintings</span>
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
      popups: {
        codes: {
          state: false,
          activeIndex: 0
        },
        bands: {
          state: false,
          activeIndex: 0
        },
        books: {
          state: false,
          activeIndex: 0
        },
        paintings: {
          state: false,
          activeIndex: 0
        },
      },
      containers: {
        codes: false,
        bands: false,
        books: false,
        paintings: false,
      }
    };
  }

  openBand(index) {
    this.openPopUp(index, 'bands');
  }

  openBook(index) {
    this.openPopUp(index, 'books');
  }

  openPopUp(index, popup) {
    const newPopups = {
      ...this.state.popups,
      [popup]: {
        state: true,
        activeIndex: index
      }
    };
    this.setState({ popups: newPopups });
  }

  closePopUp(popup) {
    const newPopups = {
      ...this.state.popups,
      [popup]: {
        state: false,
        activeIndex: 0
      }
    };
    this.setState({ popups: newPopups });
  }

  toggleContainer(container) {
    const newContainers = {
      ...this.state.containers,
      [container]: !this.state.containers[container]
    };
    this.setState({ containers: newContainers });
  }

  render() {
    const { position, willSayPart, willSay, bandId, containers, popups } = this.state;
    return (
      <div id="main">
        <div id="home">
          <BandPopUp
            band={InfoJSON['art']['bands'][popups['bands']['activeIndex']]}
            whatIs="band"
            closeFunction={() => { this.closePopUp('bands') }} />
          <BandPopUp
            band={InfoJSON['art']['books'][popups['books']['activeIndex']]}
            whatIs="book"
            closeFunction={() => { this.closePopUp('books') }} />
          <Info infojson={InfoJSON['story'][willSayPart]} />
          <div>
            {
              containers['bands'] && <Bands openBand={(index) => this.openBand(index)} />
            }
          </div>
          <div>
            {
              containers['books'] && <Books openBook={(index) => this.openBook(index)} />
            }
          </div>
          <Actions toggleContainer={(container) => this.toggleContainer(container)} />
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

