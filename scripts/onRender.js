var ART_SECTION = 'artSection';
var BIO_SECTION = 'bioSection';
var CODE_SECTION = 'codeSection';
var HACKS_SECTION = 'hacksSection';

var OPEN = 'open';
var CLOSED = 'closed';

function setSection(section, setState) {
    document.getElementById(section).setAttribute('data-state', setState);
}

function toggleSection(section) {
    var localSection = document.getElementById(section);
    localSection.setAttribute('data-state', localSection.getAttribute('data-state') === 'open' ? 'closed' : 'open');
}

function openCodeSection() {
    setSection(CODE_SECTION, OPEN);
    setSection(ART_SECTION, CLOSED);
}

function openArtSection() {
    setSection(CODE_SECTION, CLOSED);
    setSection(ART_SECTION, OPEN);
}

function closeArtSection() {
    setSection(ART_SECTION, CLOSED);
}

function closeCodeSection() {
    console.log('help')
    setSection(CODE_SECTION, CLOSED);
}

// min-max
// -1000 ~ 5000
var positionX = '0';
// -1000 ~ 5000
var positionY = '0';
// 300 ~ 3000
var speed = '300';

function generateRandomNumber(max, min) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
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
    console.log('set time', speed);
}

function setRandomText2() {
    speed = generateRandomSpeed();
    positionX = generateRandomXPosition();
    positionY = generateRandomYPosition();
    var stupidText = document.getElementById('stupidText2');
    stupidText.style.top = positionY + 'px';
    stupidText.style.left = positionX + 'px';
    stupidText.style.transitionDuration = speed + 'ms';
    console.log('set time', speed);
}
 
function tickClockForRandomGeneriation() {
    window.setInterval(setRandomText, 1200);
}

// load app
function loadApp() {
    tickClockForRandomGeneriation();
    setSection(ART_SECTION, CLOSED);
    setSection(CODE_SECTION, OPEN);
}
