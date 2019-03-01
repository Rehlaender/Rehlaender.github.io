var ART_SECTION = 'artSection';
var BIO_SECTION = 'bioSection';
var CODE_SECTION = 'codeSection';
var HACKS_SECTION = 'hackSection';

var OPEN = 'open';
var CLOSED = 'closed';

var EMOJI_ARRAY = ["✌", "😂", "😝", "😁", "😱", "👉", "🙌", "🍻", 
                "🔥", "🌈", "☀", "🎈", "🌹", "💄", "🎀", "⚽", "🎾", "🏁", 
                "😡", "👿", "🐻", "🐶", "🐬", "🐟", "🍀", "👀", "🚗", "🍎", 
                "💝", "💙", "👌", "❤", "😍", "😉", "😓", "😳", "💪", "💩", 
                "🍸", "🔑", "💖", "🌟", "🎉", "🌺", "🎶", "👠", "🏈", "⚾", 
                "🏆", "👽", "💀", "🐵", "🐮", "🐩", "🐎", "💣", "👃", "👂", 
                "🍓", "💘", "💜", "👊", "💋", "😘", "😜", "😵", "🙏", "👋", 
                "🚽", "💃", "💎", "🚀", "🌙", "🎁", "⛄", "🌊", "⛵", "🏀", 
                "🎱", "💰", "👶", "👸", "🐰", "🐷", "🐍", "🐫", "🔫", "👄", 
                "🚲", "🍉", "💛", "💚"];

function setSection(section, setState) {
    document.getElementById(section).setAttribute('data-state', setState);
}

function toggleSection(section) {
    var localSection = document.getElementById(section);
    localSection.setAttribute('data-state', localSection.getAttribute('data-state') === 'open' ? 'closed' : 'open');
}

function openCodeSection() {
    setSection(CODE_SECTION, OPEN);
    // setSection(ART_SECTION, CLOSED);
}

function openHackSection() {
    setSection(HACKS_SECTION, OPEN);
    // setSection(ART_SECTION, CLOSED);
}

function openArtSection() {
    // setSection(CODE_SECTION, CLOSED);
    setSection(ART_SECTION, OPEN);
}

function closeArtSection() {
    setSection(ART_SECTION, CLOSED);
}

function closeCodeSection() {
    setSection(CODE_SECTION, CLOSED);
}

function closeHackSection() {
    setSection(HACKS_SECTION, CLOSED);
}

// min-max
// -1000 ~ 5000
var positionX = '0';
// -1000 ~ 5000
var positionY = '0';
// 300 ~ 3000
var speed = '300';

function generateRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomSquares() {
    return generateRandomNumber(200, 100);
}

function generateRandomWidth() {
    return generateRandomNumber(200, 50);
}

function generateRandomHeight() {
    return generateRandomNumber(200, 50);
}

function generateRandomXPosition() {
    return generateRandomNumber(2000, -500);
}

function generateRandomYPosition() {
    return generateRandomNumber(500, -500);
}

function generateRandomSpeed() {
    return generateRandomNumber(5000, 1000);
}

function setRandomText() {
    setRandomText1();
    setRandomText2();
}

function setRandomText1() {
    speed = generateRandomSpeed();
    positionX = generateRandomXPosition();
    positionY = generateRandomYPosition();
    var stupidText = document.getElementById('stupidText');
    stupidText.style.top = positionY + 'px';
    stupidText.style.left = positionX + 'px';
    stupidText.style.transitionDuration = speed + 'ms';
}

function setRandomText2() {
    speed = generateRandomSpeed();
    positionX = generateRandomXPosition();
    positionY = generateRandomYPosition();
    var stupidText = document.getElementById('stupidText2');
    stupidText.style.top = positionY + 'px';
    stupidText.style.left = positionX + 'px';
    stupidText.style.transitionDuration = speed + 'ms';
}

function tickClockForRandomGeneriation() {
    window.setInterval(setRandomText, 1200);
}

function createRandomArtsySquares() {
    var squares = generateRandomSquares();
    for (var i = 0; i < squares; i++) {
        
        var squareHeight = generateRandomHeight();
        var squareWidth = generateRandomWidth();
        var squareLeft = generateRandomXPosition();
        var squareTop = generateRandomYPosition();
        
        var randomSquare = document.createElement("DIV");
        randomSquare.className = "random-square-container";
        randomSquare.style.height = squareHeight + 'px';
        randomSquare.style.width = squareWidth + 'px';
        randomSquare.style.left = squareLeft + 'px';
        randomSquare.style.top = squareTop + 'px';
        document.getElementById("mainContainer").appendChild(randomSquare); 
    }   
}

// load app
function loadApp() {
    createRandomArtsySquares();
    tickClockForRandomGeneriation();
    setSection(ART_SECTION, CLOSED);
    setSection(CODE_SECTION, CLOSED);
    setSection(HACKS_SECTION, CLOSED);
}

function )=