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
        txt.appendChild(document.createTextNode("Creación de diseño de marca personal de Abigaíl Álvarez, quien realiza actividades profesionales para el desarrollo huamano como yoga, danza, baile, teatro, teambuildings, conferencias, etc."));
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);

    });

martha.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/marthamk.png");
        var txt = document.createElement("P");
        txt.appendChild(document.createTextNode("Creación de diseño de marca personal de Martha Laura Yañez Jasso, doctora en psicología clínica y gestalt."));
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });

jguzman.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/jguzmanmk.png");
        var txt = document.createElement("P");
        txt.appendChild(document.createTextNode("Creación de diseño de marca personal propia, para manejo de portafolio y presentación personal."));
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });

alida.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/alidamk.png");
        var txt = document.createElement("P");
        txt.appendChild(document.createTextNode("Creación de diseño de marca personal de Alida Virgen, contadora privada."));
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });



// SOCIAL NETWORKS



guty.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/gutymk.png");
        var txt = document.createElement("P");
        txt.appendChild(document.createTextNode("Creación de diseño de marca personal de Guty Mendoza, compositor; además del manejo de las redes sociales, diseños promocionales, banners y más."));
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });

mirancho.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/miranchomk.png");
        var txt = document.createElement("P");
        txt.appendChild(document.createTextNode("Creación de diseño de marca para el Antro Bar \"Mi rancho\", además de el manejo de las redes sociales y publicidad continua durante 1 año con flyres y contenido especializado y orientado a un merecado específico."));
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });

high.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/highmk.png");
        var txt = document.createElement("P");
        txt.appendChild(document.createTextNode("Creación de diseño de portada para las múltiples plataformas de reproducción en versiones normal y remix del proyecto \"BassNoise\" de música electrónica."));
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });

blindaje.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/blindajemk.png");
        var txt = document.createElement("P");
        txt.appendChild(document.createTextNode("Creación de diseño de portadas, imágenes de perfil y banners de acuerdo con la tempordada para la agrupación de música norteña \u0022Blindaje Norteño\u0022."));
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });


// BRANDING



arpegio.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/arpegiomk.png");
        var txt = document.createElement("P");
        txt.appendChild(document.createTextNode("Diseño de marca, desde logo, papelería, publicidad e interiores de la escuela \"Arpegio\""));
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });

aldo.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/aldomk.png");
        var txt = document.createElement("P");
        txt.appendChild(document.createTextNode("Diseño de marca para el restaurante \"Aldo Rivera - Sushi Boutique\"." ));
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });

resh.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/reshmk.png");
        var txt = document.createElement("P");
        txt.appendChild(document.createTextNode("Diseño de la identidad de colores y estilo de la empresa \"Resh\"."));
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });

abril.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/abrilmk.png");
        var txt = document.createElement("P");
        txt.appendChild(document.createTextNode("Diseño de la identidad, estilo y logotipo de la empresa \"Abril Soluciones\"."));
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });

zin.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/zinmk.png");
        var txt = document.createElement("P");
        txt.appendChild(document.createTextNode("Diseño de la identidad, papelería, estilo, publicidad, presentaciones interactivas, página web y material didáctico para \"ZIN - Aprende a ser padre\". Proyecto sin fines de lucro orientado a la educación parental "));
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
        txt.innerHTML = "Diseño del sitio web de \"bassnoise.net\": proyecto de música electrónica usando lenguajes HTML, CSS y JS." +" <a href=\"https://jgu7man.github.io/bassnoisemusic/ \">bassnoise.net</a>";
        popup.appendChild(txt);
    });

marxa.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/marxamk.png");
        var txt = document.createElement("P");
        txt.innerHTML = "Diseño del sitio web para la agencia \"marxadigital.com\": Agencia de marketing digital en la cuál desempeñaba labores y dirijía. Para este diseño se utiliza WordPress y manejo de CSS, también se ha creado el sitio en versión HTML, CSS y JS " + " <a href=\"https://jgu7man.github.io/marxadigital/\">marxadigital.com</a>";
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });

pulso.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/pulsomk.png");
        var txt = document.createElement("P");
        txt.innerHTML = "Diseño del sitio web para \"pulsodigitalcolima.com\" el cuál no se llevó acabo." + " <a href=\"#\">pulsodigitalcolima.com</a>";
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });

aprende.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/aprendemk.png");
        var txt = document.createElement("P");
        txt.innerHTML = "Diseño del sitio \"aprendeaserpadre.com\" usando el framework de WordPress y conocimiento avanzado de CSS . " + " <a href=\"https://www.aprendeaserpadre.com\">aprendeaserpadre.com</a>";
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });

need.addEventListener('click',
    function () {
        popup.style.display = 'flex';
        mockup.setAttribute("src", "img/portfolio/needappmk.png");
        var txt = document.createElement("P");
        txt.innerHTML = "Trabajo en producción de un webapp llamada \"Need\" el cual se desarrolla con el framework ANGULAR. " + " <a href=\"#\">needapp.com</a>";
        txt.setAttribute("id", "txt");
        popup.appendChild(txt);
    });

