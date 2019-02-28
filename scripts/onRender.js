var ART_SECTION = 'artSection';
var BIO_SECTION = 'bioSection';
var CODE_SECTION = 'codeSection';
var HACKS_SECTION = 'hacksSection';

var OPEN = 'open';
var CLOSED = 'closed';

function loadApp() {
    // setSection(ART_SECTION, CLOSED);
    // setSection(CODE_SECTION, CLOSED);
}

function setSection(section, setState) {
    console.log(section, setState, 'wghyt', document.getElementById(section).getAttribute('data-state'));
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
