var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change',
    (function () {
        // Se guarda el color de la rueda en colorActual
        colorActual = colorPersonalizado.value;
        // Completar para que cambie el indicador-de-color al colorActual
        indicadorColor.style.backgroundColor = colorActual;

    })
);

var paleta = document.getElementById("paleta");

var grilla_pixeles = document.getElementById("grilla-pixeles");

function paletaDeColores() {
    for (var colores of nombreColores) {
        var nuevoElemento = document.createElement("div");
        nuevoElemento.className = "color-paleta";
        nuevoElemento.style.backgroundColor = colores;
        paleta.appendChild(nuevoElemento);
    }
}
paletaDeColores();

function grillaDePixeles() {
    for (i = 0; i < 1750; i++) {
        var nuevoPixel = document.createElement("div");
        nuevoPixel.className = "pixel-grilla";
        grilla_pixeles.appendChild(nuevoPixel);
    }
}
grillaDePixeles();


// Actualiza color en el indicador

var indicadorColor = document.getElementById("indicador-de-color");

$("#paleta .color-paleta").click("click", function () {
    colorActual = $(this).css("background-color");
    indicadorColor.style.backgroundColor = colorActual;
})



//Pinta un pixel


$("#grilla-pixeles .pixel-grilla").mousedown(pintarPixel);

function pintarPixel(e) {
    e.target.style.backgroundColor = colorActual;
}

grilla_pixeles.addEventListener("mousedown", botonApretado);

function botonApretado(e) {
    boton = true;
}

grilla_pixeles.addEventListener("mouseup", botonSuelto);

function botonSuelto(e) {
    boton = false;
}

grilla_pixeles.addEventListener("mouseover", pintarEnMovimiento);

function pintarEnMovimiento(e) {
    if (boton) {
        pintarPixel(e);
    }
}

$("#borrar").click("click", borrarTodo);

function borrarTodo() {
    $("#grilla-pixeles").find("div").animate({
        "background-color": "white"
    }, 250);
}


$("#batman").click("click", function () {
    cargarSuperheroe(batman);
});

$("#wonder").click("click", function () {
    cargarSuperheroe(wonder);
});

$("#flash").click("click", function () {
    cargarSuperheroe(flash);
});

$("#invisible").click("click", function () {
    cargarSuperheroe(invisible);
});

$("#guardar").click("click", guardarPixelArt);
