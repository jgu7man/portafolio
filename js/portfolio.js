const popup = $('.popup');
const mockup = $('.mockup');
const close = $('.close');
const desc = $('.desc');

close.click(() => {
    popup.css('display', 'none');
    $('#txt').remove();
});

// WEB DESIGN 

$("#bassnoise ").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/disenoweb/bassnoisemk.png");
    desc.append('<p id="txt">Diseño del sitio web de \"bassnoise.net\": proyecto de música electrónica usando lenguajes HTML, CSS y JS. <a href=\"https://jgu7man.github.io/bassnoisemusic/ \">bassnoise.net</a>"</p>');
});

$("#accesible ").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/disenoweb/accesiblewebsite.png");
    desc.append('<p id="txt">Diseño de e-commerce \"accesible.com.mx\": startup desarrollada con wordpress con nueva forma de venta e intercambio de producctos" <a href=\"https://accesible.com.mx/ \">accesible.com.mx</a>"</p>');
});

$("#marxa ").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/disenoweb/marxamk.png");
    desc.append('<p id="txt">Diseño del sitio web para la agencia \"marxadigital.com\": Agencia de marketing digital en la cuál desempeñaba labores y dirijía. Para este diseño se utiliza WordPress y manejo de CSS, también se ha creado el sitio en versión HTML, CSS y JS <a href=\"https://jgu7man.github.io/marxadigital/\">marxadigital.com</a></p>');
});

$("#casas ").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/disenoweb/casaszmgmk.png");
    desc.append('<p id="txt">Diseño del sitio web para la agencia \"CASAS ZMG\": Agencia de bienes raices de la Zona Metropolitana de Guadalajara <a href=\"https://casaszmg.com/\">casaszmg.com</a></p>');
});

$("#pulso ").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/disenoweb/pulsomk.png");
    desc.append('<p id="txt">Diseño del sitio web para \"pulsodigitalcolima.com\" el cuál no se llevó acabo. <a href=\"#\">pulsodigitalcolima.com</a></p>');
});

$("#aprende ").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/disenoweb/aprendemk.png");
    desc.append('<p id="txt">Diseño del sitio \"aprendeaserpadre.com\" usando el framework de WordPress y conocimiento avanzado de CSS . <a href=\"https://www.aprendeaserpadre.com\">aprendeaserpadre.com</a></p>');
});

$("#jgu7man ").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/disenoweb/jgu7manmk.png");
    desc.append('<p id="txt">Diseño del sitio \"jgu7man.com\" usando lenguaje HTML, CSS y JS .  <a href=\"https://www.jgu7man.com\">jgu7man.com</a></p>');
});

// APLICACIONES

$("#need ").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/apps/needappmk.png");
    desc.append('<p id="txt">Desarrollo de aplicación en diferentes fases: estudio de mercado, investigación y análisis de experiencia de usuario, diseño de prototipo, desarrollo basado en tecnologías NodeJS, AngularJS, Firebase y Express. <br> Proyecto en deserrollo <a href="https://www.github.jgu7man.com/need-dev">GitHub: Need</a></p>');
});

$("#moviv ").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/apps/movivAppMockup.png");
    desc.append('<p id="txt">Desarrollo de aplicación en diferentes fases: estudio de mercado, investigación y análisis de experiencia de usuario, diseño de prototipo, desarrollo basado en tecnologías NodeJS, AngularJS, Firebase y Express. <br> Proyecto en deserrollo.</p>');
});

$("#ofermaps ").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/apps/ofermapsMockup.png");
    desc.append('<p id="txt">Desarrollo de aplicación en diferentes fases: estudio de mercado, investigación y análisis de experiencia de usuario, diseño de prototipo, desarrollo basado en tecnologías NodeJS, AngularJS, Firebase y Express. <br> Proyecto en deserrollo <a href="https://www.github.jgu7man.com/ofermaps">GitHub: Ofermaps</a></p>');
});



// SITIOS WORDPRESS

$("#adondevamos").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/wordpress/adondevamoswebmk.png");
    desc.append('<p id="txt">Diseño con habilidades avanzadas de CSS, y plugins de wordpress, correciones y debugueo PHP y JavaScript. <a href="https://www.adondevamos.cl/">adondevamos.cl</a></p>');
});

$("#teloregalo").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/wordpress/teloregaloweb.png");
    desc.append('<p id="txt">Diseño con habilidades avanzadas de CSS, y plugins de wordpress, correciones y debugueo PHP y JavaScript. <a href="https://www.teloregalo.com.co/">teloregalo.com.co</a></p>');
});

$("#sinapsis").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/wordpress/sinapsisweb.png");
    desc.append('<p id="txt">Diseño con habilidades avanzadas de CSS, y plugins de wordpress, correciones y debugueo PHP y JavaScript. <a href="https://www.sinapsis-nd.org/">www.sinapsis-nd.org</a></p>');
});

// PERSONAL BRANDING

$("#abby").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/personal branding/abbymk.png");
    desc.append('<p id="txt">Creación de diseño de marca personal de Abigaíl Álvarez, quien realiza actividades profesionales para el desarrollo huamano como yoga, danza, baile, teatro, teambuildings, conferencias, etc.</p>');
});

$("#abby2").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/personal branding/abby2.jpg");
    desc.append('<p id="txt">Creación de diseño de marca personal de Abigaíl Álvarez, quien realiza actividades profesionales para el desarrollo huamano como yoga, danza, baile, teatro, teambuildings, conferencias, etc.</p>');
});

$("#martha").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/personal branding/marthamk.png");
    desc.append('<p id="txt">Creación de diseño de marca personal de Martha Laura Yañez Jasso, doctora en psicología clínica y gestalt.</p>');
});

$("#seer").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/personal branding/LogoSEER.png");
    desc.append('<p id="txt">Renovación de logotipo del Instituo SEER. Centro de desarrollo psicológico y humano. Proyectando sensibilidad en la imagen.</p>');
});

$("#jguzman").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/personal branding/jguzmanmk.png");
    desc.append('<p id="txt">Creación de diseño de marca personal propia, para manejo de portafolio y presentación personal.</p>');
});


// SOCIAL NETWORKS

$("#stormriders").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/redes/stormridersmk.png");
    desc.append('<p id="txt">Diseño de imagen de identidad para equipo de ciclistas para manejo de redes sociales y promoción en concursos.</p>');
});

$("#guty").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/redes/gutymk.png");
    desc.append('<p id="txt">Creación de diseño de marca personal de Guty Mendoza, compositor; además del manejo de las redes sociales, diseños promocionales, banners y más.</p>');
});

$("#mirancho").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/redes/miranchomk.png");
    desc.append('<p id="txt">Creación de diseño de marca para el Antro Bar "Mi rancho", además de el manejo de las redes sociales y publicidad continua durante 1 año con flyres y contenido especializado y orientado a un merecado específico.</p>');
});

$("#bass").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/redes/highmk.png");
    desc.append('<p id="txt">Proyecto de imagen en redes y portadas en spotify para el proyecto BassNoise</p>');
});

$("#high").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/redes/higheventomk.png");
    desc.append('<p id="txt">Creación de diseño de portada para las múltiples plataformas de reproducción en versiones normal y remix del proyecto \"BassNoise\" de música electrónica.</p>');
});

$("#bote").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/redes/boteabote.jpg");
    desc.append('<p id="txt">Proyecto de imagen de portada en spotify para el pryecto del single "Bote a bote</p>');
});

$("#blindaje").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/redes/blindajemk.png");
    desc.append('<p id="txt">Creación de diseño de portadas, imágenes de perfil y banners de acuerdo con la tempordada para la agrupación de música norteña \u0022Blindaje Norteño\u0022.</p>');
});

$("#inglorius").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/redes/ingloriusbastards.jpg");
    desc.append('<p id="txt">Proyecto de imagen en redes y portadas en spotify para el proyecto Inglorius Bastards</p>');
});

// BRANDING

$("#rennove").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/branding/rennove.jpg");
    desc.append('<p id="txt">Renovación de logotipo del spa rennove.</p>');
});

$("#hyip").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/branding/hyipnewmonitor.jpg");
    desc.append('<p id="txt">Diseño de logotipo, de imagen para página de venta publicitaria.</p>');
});

$("#arpegio").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/branding/arpegiomk.png");
    desc.append('<p id="txt">Diseño de marca, desde logo, papelería, publicidad e interiores de la escuela "Arpegio".</p>');
});

$("#getup").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/branding/getup.jpg");
    desc.append('<p id="txt">Diseño de logotipo para bar argentino juvenil</p>');
});

$("#aldo").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/branding/aldomk.png");
    desc.append('<p id="txt">Diseño de marca para el restaurante "Aldo Rivera - Sushi Boutique".</p>');
});

$("#meson").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/branding/mesonmk.png");
    desc.append('<p id="txt">Diseño de marca para el restaurante "Mesón de Cervantes - Comida española" y diseño del menú.</p>');
});

$("#resh").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/branding/reshmk.png");
    desc.append('<p id="txt">Diseño de la identidad de colores y estilo de la empresa "Resh".</p>');
});

$("#historia").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/branding/historianortenamk.png");
    desc.append('<p id="txt">Diseño de logotipo para grupo norteño y su papelería como tarjetas de presentación.</p>');
});

$("#andalus").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/branding/AlAndalusmk.png");
    desc.append('<p id="txt">Renovación de logotipo centro terapéutico y su papelería como tarjetas de presentación.</p>');
});

$("#valencia").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/branding/casavalencia.png");
    desc.append('<p id="txt">Diseño de logotipo de restaurante bar llamado Casa Valencia de música regional mexicana.</p>');
});

$("#abril").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/branding/abrilmk.png");
    desc.append('<p id="txt">Diseño de la identidad, estilo y logotipo de la empresa "Abril Soluciones".</p>');
});

$("#zin").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/branding/zinmk.png");
    desc.append('<p id="txt">Diseño de la identidad, papelería, estilo, publicidad, presentaciones interactivas, página web y material didáctico para "ZIN - Aprende a ser padre". Proyecto sin fines de lucro orientado a la educación parental.</p>');
});

// WEB DESING