$('#normal').on("click", function () {
    $(".list").css("flexDirection", "column");
    $(".normal").css("background", '#ccc');
    $(".reverse").css("background", '#ffaa00');
    });

$('#reverse').on('click', function () {
    $(".list").css("flexDirection", 'column-reverse');
    $(".normal").css("background", '#ffaa00');
    $(".reverse").css("background", '#cccccc');
    });

$(".popup").hide();

$(".time-content").on("click", function () {
    $(".popup").hide();
    $("#popup" + $(this).attr("id")).show();
});

$(".close").on("click", function () {
    $(".popup").hide();
});


// MI RANCHO
var mrIndex = 1;
mrsDivs(mrIndex);

function mrDivs(n) {
    mrsDivs(mrIndex += n);
}

function mrsDivs(n) {
    let i;
    let x = document.getElementsByClassName("mr");
    if (n > x.length) { mrIndex = 1 }
    if (n < 1) { mrIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[mrIndex - 1].style.display = "block";
}


// BLINDAJE NORTEÑO
var bnIndex = 1;
bnsDivs(bnIndex);

function bnDivs(n) {
    bnsDivs(bnIndex += n);
}

function bnsDivs(n) {
    let i;
    let x = document.getElementsByClassName("bn");
    if (n > x.length) { bnIndex = 1 }
    if (n < 1) { bnIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[bnIndex - 1].style.display = "block";
}




// HIGH ALBUM
var hgIndex = 1;
hgsDivs(hgIndex);

function hgDivs(n) {
    hgsDivs(hgIndex += n);
}

function hgsDivs(n) {
    let i;
    let x = document.getElementsByClassName("hg");
    if (n > x.length) { hgIndex = 1 }
    if (n < 1) { hgIndex = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[hgIndex - 1].style.display = "block";
}