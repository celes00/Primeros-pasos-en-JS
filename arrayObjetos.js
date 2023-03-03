//array con objetos 
var articulos = [ 
    { nombre: "Bici", costo: 3000},
    { nombre: "Tv", costo: 2500},
    { nombre: "Libro", costo: 320},
    { nombre: "Celular", costo: 10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700},
]
//metodo filtro del array, creamos el array para que ponga los valores ahi
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

//metodo map del array, creamos el array para que ponga los valores ahi
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

//metodo find
var encuentraArticulo = articulos.find( function(articulo){
    return articulo.nombre === "Laptop"
});

//metodo foreach
articulos.forEach(function(articulo){
    console.log(articulo.nombre);
});

//metodo some
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});