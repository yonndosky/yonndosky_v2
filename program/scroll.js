document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


var sections = [];



function init() {
    let tags = [
        "top",
        'about',
        'biography',
        'skill',
        'timeline',
        'footer'
    ];
    for (let index = 0; index < tags.length; index++) {
        let tag = document.getElementById(tags[index]);
        sections.push({ 'name': tags[index], 'location': tag.offsetTop });
    }
    console.log(sections);

}
var detact = window.setInterval((() => getLocate()), 1000);
function getLocate() {
    let answer;
    sections.forEach(map => {
        if (window.scrollY >= map['location']) {
            answer = map;
        }
    });
    window.history.pushState(null, null, '#' + answer['name']);
    cleanTag();
    switch (window.location.hash) {
        case '#top':
            document.querySelector("body > ul > li:nth-child(1)").className = 'Tchecked';
            break;
        case '#about':
            document.querySelector("body > ul > li:nth-child(2)").className = 'Tchecked';
            break;
        case '#biography':
            document.querySelector("body > ul > li:nth-child(3)").className = 'Tchecked';
            break;
        case '#skill':
            document.querySelector("body > ul > li:nth-child(4)").className = 'Tchecked';
            break;
        case '#timeline':
            document.querySelector("body > ul > li:nth-child(5)").className = 'Tchecked';
            break;
        default:
            break;
    }
}

function cleanTag() {
    for (let index = 1; index < 6; index++) {
        var li = document.querySelector("body > ul > li:nth-child(" + index + ")");
        li.classList.remove("Tchecked");

    }

}