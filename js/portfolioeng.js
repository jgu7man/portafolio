const popup = document.querySelector('.popup');
const mockup = document.querySelector('.mockup');
const close = document.querySelector('.close');
 
close.addEventListener('click', function () {
    popup.style.display = 'none';
    var txt = document.getElementById('txt');
    popup.removeChild(txt);
    });

var abby = document.getElementById('abby');
var martha = document.getElementById('martha');
var jguzman = document.getElementById('jguzman');
var alida = document.getElementById('alida');
var guty = document.getElementById('guty');
var mirancho = document.getElementById('mirancho');
var high = document.getElementById('high');
var blindaje = document.getElementById('blindaje');
var arpegio = document.getElementById('arpegio');
var aldo = document.getElementById('aldo');
var resh = document.getElementById('resh');
var abril = document.getElementById('abril');
var zin = document.getElementById('zin');
var bassnoise = document.getElementById('bassnoise');
var marxa = document.getElementById('marxa');
var pulso = document.getElementById('pulso');
var aprende = document.getElementById('aprende');
var need = document.getElementById('need');


// PERSONAL BRANDING


abby.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/abbymk.png");
        var txt = document.createElement("P");
        txt.appendChild(document.createTextNode("Creation of personal brand design by Abigaíl Álvarez, who carries out professional activities for the human development being such as yoga, dance, dance, theater, teambuildings, conferences, etc."));
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);

    });

martha.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/marthamk.png");
        var txt = document.createElement("P");
        txt.appendChild(document.createTextNode("Creation of personal brand design by Martha Laura Yañez Jasso, doctor in clinical psychology and gestalt."));
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });

jguzman.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/jguzmanmk.png");
        var txt = document.createElement("P");
        txt.appendChild(document.createTextNode("Creation of own personal brand design, for portfolio management and personal presentation."));
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });

alida.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/alidamk.png");
        var txt = document.createElement("P");
        txt.appendChild(document.createTextNode("Creation of personal brand design of Alida Virgen, private accountant."));
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });



// SOCIAL NETWORKS



guty.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/gutymk.png");
        var txt = document.createElement("P");
        txt.appendChild(document.createTextNode("Creation of personal brand design by Guty Mendoza, composer; besides the management of social networks, promotional designs, banners and more."));
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });

mirancho.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/miranchomk.png");
        var txt = document.createElement("P");
        txt.appendChild(document.createTextNode("Creation of brand design for the Antro Bar \"Mi rancho\", in addition to the management of social networks and continuous advertising for 1 year with flyres and specialized content aimed at a specific merit."));
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });

high.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/highmk.png");
        var txt = document.createElement("P");
        txt.appendChild(document.createTextNode("Creation of cover design for the multiple platforms of reproduction in normal and remix versions of the project \"BassNoise\" of electronic music."));
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });

blindaje.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/blindajemk.png");
        var txt = document.createElement("P");
        txt.appendChild(document.createTextNode("Creation of cover design, profile images and banners in accordance with the one set for the northern music group \"Blindaje Norteño \"."));
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });


// BRANDING



arpegio.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/arpegiomk.png");
        var txt = document.createElement("P");
        txt.appendChild(document.createTextNode("Brand design, from logo, stationery, advertising and interiors of the school \"Arpegio\""));
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });

aldo.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/aldomk.png");
        var txt = document.createElement("P");
        txt.appendChild(document.createTextNode("Brand design for the restaurant \"Aldo Rivera - Sushi Boutique\"." ));
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });

resh.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/reshmk.png");
        var txt = document.createElement("P");
        txt.appendChild(document.createTextNode("Design of the identity of colors and style of the company \"Resh\"."));
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });

abril.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/abrilmk.png");
        var txt = document.createElement("P");
        txt.appendChild(document.createTextNode("Design of the identity, style and logo of the company \"Abril Soluciones\"."));
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });

zin.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/zinmk.png");
        var txt = document.createElement("P");
        txt.appendChild(document.createTextNode("Identity design, stationery, style, advertising, interactive presentations, web page and didactic material for \"ZIN - Aprende a ser padre\". Non-profit project aimed at parental education."));
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });



// WEB DESING



bassnoise.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/bassnoisemk.png");

        var txt = document.createElement("P");
        txt.setAttribute("id", "txt");
        txt.innerHTML = "Design of the website of \"bassnoise.net\": electronic music project using HTML, CSS and JS languages." +" <a href=\"https://jgu7man.github.io/bassnoisemusic/ \">bassnoise.net</a>";
        popup.appendChild(txt);
    });

marxa.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/marxamk.png");
        var txt = document.createElement("P");
        txt.innerHTML = "Design of the website for the agency \"marxadigital.com\": Digital marketing agency in which he worked and directed. For this design WordPress and CSS are used, the site has also been created in HTML, CSS and JS version" + " <a href=\"https://jgu7man.github.io/marxadigital/\">marxadigital.com</a>";
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });

pulso.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/pulsomk.png");
        var txt = document.createElement("P");
        txt.innerHTML = "Design of the website for \"pulsodigitalcolima.com\" which did not take place." + " <a href=\"#\">pulsodigitalcolima.com</a>";
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });

aprende.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/aprendemk.png");
        var txt = document.createElement("P");
        txt.innerHTML = "Site design \"aprendeaserpadre.com\" using the WordPress framework and advanced CSS knowledge." + " <a href=\"https://www.aprendeaserpadre.com\">aprendeaserpadre.com</a>";
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });

need.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/needappmk.png");
        var txt = document.createElement("P");
        txt.innerHTML = "Work in production of a webapp called \"Need\" which is developed with the ANGULAR framework." + " <a href=\"#\">needapp.com</a>";
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });

