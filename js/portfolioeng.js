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
    desc.append('<p id="txt">Web site design of \"bassnoise.net\": a electronic music project using lenguages as HTML, CSS y JS. <a href=\"https://jgu7man.github.io/bassnoisemusic/ \">bassnoise.net</a>"</p>');
});

$("#accesible ").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/disenoweb/accesiblewebsite.png");
    desc.append('<p id="txt">e-commerce design of \"accesible.com.mx\": startup developed with wordpress with a new sales kind and barter <a href=\"https://accesible.com.mx/ \">"accesible.com.mx</a>"</p>');
});

$("#marxa ").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/disenoweb/marxamk.png");
    desc.append('<p id="txt">Design of the site for the agency \"marxadigital.com\": Digital marketing agency. Agency in which I carried out work activities. for this projecto I use wordpress templates and advenced CSS, and anothe version with HTML, CSS y JS <a href=\"https://jgu7man.github.io/marxadigital/\">marxadigital.com</a></p>');
});

$("#casas ").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/disenoweb/casaszmgmk.png");
    desc.append('<p id="txt">Design of the site for the agency \"CASAS ZMG\": Real state angency in the Guadalajara Metropolitan Zone<a href=\"https://casaszmg.com/\">casaszmg.com</a></p>');
});

$("#pulso ").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/disenoweb/pulsomk.png");
    desc.append('<p id="txt">Web site design for \"pulsodigitalcolima.com\" which did not take place <a href=\"#\">pulsodigitalcolima.com</a></p>');
});

$("#aprende ").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/disenoweb/aprendemk.png");
    desc.append('<p id="txt">Design of the site \"aprendeaserpadre.com\" using the WordPress framework CSS advandced knowledge. <a href=\"https://www.aprendeaserpadre.com\">aprendeaserpadre.com</a></p>');
});

$("#jgu7man ").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/disenoweb/jgu7manmk.png");
    desc.append('<p id="txt">Design of the portfolio web site \"jgu7man.com\" using pure lenguages HTML, CSS y JS. <a href=\"https://www.jgu7man.com\">jgu7man.com</a></p>');
});

// APLICACIONES

$("#need ").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/apps/needappmk.png");
    desc.append('<p id="txt">Development of application in different phases: market study, research and user experience analysis, prototype design, development based on NodeJS, AngularJS, Firebase and Express technologies. <br>Project in development state.<a href="https://www.github.jgu7man.com/need-dev">GitHub: Need</a></p>');
});

$("#moviv ").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/apps/movivAppMockup.png");
    desc.append('<p id="txt">Development of application in different phases: market study, research and user experience analysis, prototype design, development based on NodeJS, AngularJS, Firebase and Express technologies. <br>Project in development state.</p>');
});

$("#ofermaps ").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/apps/ofermapsMockup.png");
    desc.append('<p id="txt">Development of application in different phases: market study, research and user experience analysis, prototype design, development based on NodeJS, AngularJS, Firebase and Express technologies. <br>Project in development state.<a href="https://www.github.jgu7man.com/ofermaps">GitHub: Ofermaps</a></p>');
});



// SITIOS WORDPRESS

$("#adondevamos").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/wordpress/adondevamoswebmk.png");
    desc.append('<p id="txt">Design with advanced CSS skills, and wordpress plugins, corrections and debugging PHP and JavaScript. <a href="https://www.adondevamos.cl/">adondevamos.cl</a></p>');
});

$("#teloregalo").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/wordpress/teloregaloweb.png");
    desc.append('<p id="txt">Design with advanced CSS skills, and wordpress plugins, corrections and debugging PHP and JavaScript. <a href="https://www.teloregalo.com.co/">teloregalo.com.co</a></p>');
});

$("#sinapsis").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/wordpress/sinapsisweb.png");
    desc.append('<p id="txt">Design with advanced CSS skills, and wordpress plugins, corrections and debugging PHP and JavaScript. <a href="https://www.sinapsis-nd.org/">www.sinapsis-nd.org</a></p>');
});

// PERSONAL BRANDING

$("#abby").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/personal branding/abbymk.png");
    desc.append('<p id="txt">Creation of personal brand design for Abigaíl Álvarez, who carries out professional activities for the human development being such as yoga, dance, therapeutic exercise, theater, teambuildings, conferences, etc.</p>');
});

$("#abby2").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/personal branding/abby2.jpg");
    desc.append('<p id="txt">Creation of personal brand design for Abigaíl Álvarez, who carries out professional activities for the human development being such as yoga, dance, therapeutic exercise, theater, teambuildings, conferences, etc.</p>');
});

$("#martha").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/personal branding/marthamk.png");
    desc.append('<p id="txt">Creation of personal brand design for Martha Laura Yañez Jasso, doctor in clinical psychology and gestalt.</p>');
});

$("#seer").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/personal branding/LogoSEER.png");
    desc.append('<p id="txt">Renewal of the logo of the Instituo SEER. Center of psychological and human development. Projecting sensitivity in the image.</p>');
});

$("#jguzman").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/personal branding/jguzmanmk.png");
    desc.append('<p id="txt">Creation of own personal brand design, for portfolio management and personal presentation.</p>');
});


// SOCIAL NETWORKS

$("#stormriders").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/redes/stormridersmk.png");
    desc.append('<p id="txt">Identity image design for cyclists team to manage social networks and promotion in competitions.</p>');
});

$("#guty").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/redes/gutymk.png");
    desc.append('<p id="txt">Creation of personal brand design for Guty Mendoza, composer; besides the management of social networks, promotional designs, banners and more.</p>');
});

$("#mirancho").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/redes/miranchomk.png");
    desc.append('<p id="txt">Creation of brand design for the Antro Bar "Mi rancho", in addition to the management of social networks and continuous advertising for 1 year with flyres and specialized content aimed at a specific merit.</p>');
});

$("#bass").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/redes/highmk.png");
    desc.append('<p id="txt">Project of image in networks and covers in spotify for the BassNoise project</p>');
});

$("#high").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/redes/higheventomk.png");
    desc.append('<p id="txt">Creation of cover design for the multiple reproduction platforms in normal and remix versions of the "BassNoise" electronic music project.</p>');
});

$("#bote").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/redes/boteabote.jpg");
    desc.append('<p id="txt">Project of cover image in spotify for the project of the single "Bote a bote"</p>');
});

$("#blindaje").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/redes/blindajemk.png");
    desc.append('<p id="txt">Creation of cover design, profile images and banners in accordance with the one scheduled for the northern music group "Blindaje Norteño".</p>');
});

$("#inglorius").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/redes/ingloriusbastards.jpg");
    desc.append('<p id="txt">Project of image in networks and covers in spotify for the project Inglorius Bastards</p>');
});

// BRANDING

$("#rennove").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/branding/rennove.jpg");
    desc.append('<p id="txt">Renovation of the rennove spa logo.</p>');
});

$("#hyip").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/branding/hyipnewmonitor.jpg");
    desc.append('<p id="txt">Logo design, image for advertising sale page.</p>');
});

$("#arpegio").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/branding/arpegiomk.png");
    desc.append('<p id="txt">Brand design, from logo, presentation cards, flyers, advertising and interiors of the school "Arpeggio".</p>');
});

$("#getup").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/branding/getup.jpg");
    desc.append('<p id="txt">Logo design for Argentine youth bar</p>');
});

$("#aldo").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/branding/aldomk.png");
    desc.append('<p id="txt">Brand design for the restaurant "Aldo Rivera - Sushi Boutique".</p>');
});

$("#meson").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/branding/mesonmk.png");
    desc.append('<p id="txt">Brand design for the restaurant "Mesón de Cervantes - Spanish food" and menu design.</p>');
});

$("#resh").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/branding/reshmk.png");
    desc.append('<p id="txt">Design of the identity of colors and style of the company "Resh".</p>');
});

$("#historia").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/branding/historianortenamk.png");
    desc.append('<p id="txt">Logo design for northern group and its stationery as business cards.</p>');
});

$("#andalus").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/branding/AlAndalusmk.png");
    desc.append('<p id="txt">Renewal of logo therapeutic center and its stationery as business cards.</p>');
});

$("#valencia").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/branding/casavalencia.png");
    desc.append('<p id="txt">Logo design of restaurant bar called Casa Valencia of regional Mexican music.</p>');
});

$("#abril").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/branding/abrilmk.png");
    desc.append('<p id="txt">Design of the identity, style and logo of the company "Abril Soluciones".</p>');
});

$("#zin").click(() => {
    popup.css('display', 'flex');
    mockup.attr("src", "img/portfolio/branding/zinmk.png");
    desc.append('<p id="txt">Identity design, stationery, style, advertising, interactive presentations, web page and didactic material for "ZIN - Aprende a ser padre". Non-profit project oriented to parental education.</p>');
});

// WEB DESING