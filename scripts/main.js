'use strict';

const KEYS = {
  BAND: 'BAND',
  BOOK: 'BOOK',
  CODE: 'CODE',
  PAINT: 'PAINT',
};

const PROYECTS = [
  {
    name: 'whalecoma',
    text: 'an emo band i made with berny and adrián',
    bandcamp: '',
    spotify: '',
    main_image: './assets/profile_whalecoma.jpg',
    type: KEYS.BAND,
  },
  {
    name: 'perdidos en el mar',
    text: 'my personal project, hope this could be a full band tho',
    bandcamp: '',
    main_image: './assets/profile_perdidos.jpg',
    type: KEYS.BAND,
  },
  {
    name: 'basura que se cree poesía',
    text: 'a bummer poetry zine',
    download: '',
    link: '',
    main_image: './assets/profile_basura.jpg',
    type: KEYS.BOOK
  },
  {
    name: 'redux/thunk app',
    text: 'an example app using redux/thunk',
    main_image: './assets/profile_reactstuff.jpg',
    deploy: 'https://rehlaender.github.io/react-portfolio/',
    link: 'https://github.com/Rehlaender/react-portfolio',
    type: KEYS.CODE
  },
  {
    name: 'sassy-pokedex',
    text: 'just showing css animations and promises by consuming the pokemon api',
    main_image: './assets/profile_sassypokedex.jpg',
    deploy: 'https://rehlaender.github.io/sassy-pokedex/',
    link: 'https://github.com/Rehlaender/sassy-pokedex',
    type: KEYS.CODE
  }
];

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
      hasBeenClicked: 'noup',
      isMouseHovering: false,
    };
  }

  componentWillMount() {
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
      const clickedTop = (superThis.props.index * 60) + 300;
      superThis.state.hasBeenClicked === 'hasBeenClicked' ? 
      superThis.setState({ left: 0, top: clickedTop })
      : superThis.setState({ left: superrandomLeft, top: superrandomTop });
    }, 2000);
  }

  onMouseEnterHandler() {
    this.setState({ isMouseHovering: true });

  }

  onMouseLeaveHandler() {
    this.setState({ isMouseHovering: false });
  }

  clickToggler() {
    if(this.state.hasBeenClicked !== 'hasBeenClicked') {
      console.log('jelp me');
      this.props.onClickFunction(this.props.name);
      this.setState({hasBeenClicked: 'hasBeenClicked'});
    } else {
      this.setState({hasBeenClicked: 'noup'});
    }
  }

  render() {
    const { name, onClickFunction, index } = this.props;
    const { left, top, hasBeenClicked } = this.state;
    return (
      <div className={
          `absoluteitem animated ${hasBeenClicked}`}
        onMouseEnter={() => this.onMouseEnterHandler()}
        onMouseLeave={() => this.onMouseLeaveHandler()}
        onClick={() => { this.clickToggler() }}
        style={{ top: `${top}px`, left: `${left}px` }}>
        {name}
        <div className="absolute-loader">
          <span className="loading-word">loading</span>
        </div>
      </div>
    )
  }
}

const Bands = (props) => {
  const { infoArray, openBand } = props;
  return (
    <div>
      {
        infoArray.map((band, index) => {
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
    index,
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

  const innerHeight = window.innerHeight - 200;
  const innerWidth = window.innerWidth - 400;
  const randomTop = Math.floor(Math.random() * innerHeight) + 1;
  const randomLeft = Math.floor(Math.random() * innerWidth) + 1;

  return (
    <div>
      {
        name !== 'undefined' &&
        <div
          className={`band popup ${whatIs}`}
          style={{
            backgroundImage: `url(${main_image})`,
            left: randomLeft,
            top: randomTop,
            zIndex: `${index + 20} `
          }}>
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
        text: 'an example app using redux/thunk',
        deploy: 'https://rehlaender.github.io/react-portfolio/',
        github: 'https://github.com/Rehlaender/react-portfolio',
      },
      {
        name: 'sassy-pokedex',
        text: 'just showing css animations and promises by consuming the pokemon api',
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
      className={['info ' + 'right-shadow']}>
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
      activePopups: [],
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

  openBand(name) {
    this.openPopUp(name);
  }

  openBook(index) {
    this.openPopUp(index, 'books');
  }

  openPopUp(name) {
    const isNameAlreadyThere = this.state.activePopups.some(proyect => proyect.name === name)
    const addProyect = PROYECTS.find(proyect => proyect.name === name);
    const withoutProyect = this.state.activePopups.filter(proyect => proyect.name !== name);
    const addPopups = isNameAlreadyThere ?
    withoutProyect : [
      ...this.state.activePopups,
      addProyect
    ];
    this.setState({ activePopups: addPopups });
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

  closePopUpByName(popUpName) {
    const filteredPopups = this.state.activePopups.filter(popup => popup.name !== popUpName); 
    this.setState({ activePopups: filteredPopups });
  }

  toggleContainer(container) {
    const newContainers = {
      ...this.state.containers,
      [container]: !this.state.containers[container]
    };
    this.setState({ containers: newContainers });
  }

  render() {
    const rendereableInfo = {
      bands: [
        ...PROYECTS.filter(item => item['type'] === KEYS.BAND)
      ],
      books: [
        ...PROYECTS.filter(item => item['type'] === KEYS.BOOK)
      ],
      codes: [
        ...PROYECTS.filter(item => item['type'] === KEYS.CODE)
      ],
      paintings: [
        ...PROYECTS.filter(item => item['type'] === KEYS.PAINT)
      ],
    };

    const { activePopups, position, willSayPart, willSay, bandId, containers, popups } = this.state;
    return (
      <div id="main">
        <div id="home">
          {
            activePopups && activePopups.map((popup, index) => {
              return (
                <BandPopUp
                  band={popup}
                  index={index}
                  whatIs={popup.type}
                  closeFunction={() => { this.closePopUpByName(popup.name) }} />
              )
            })
          }
          <Info infojson={InfoJSON['story'][willSayPart]} />
          <div>
            {
              containers['bands'] && <Bands
                infoArray={rendereableInfo.bands} 
                openBand={(index) => this.openBand(index)} />
            }
          </div>
          <div>
            {
              containers['books'] && <Bands
                infoArray={rendereableInfo.books} 
                openBand={(index) => this.openBand(index)} />
            }
          </div>
          <div>
            {
              containers['codes'] && <Bands
                infoArray={rendereableInfo.codes} 
                openBand={(index) => this.openBand(index)} />
            }
          </div>
          {/* <div>
            {
              containers['books'] && <Books openBook={(index) => this.openBook(index)} />
            }
          </div> */}
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

