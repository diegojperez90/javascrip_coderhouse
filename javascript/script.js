class Producto {
    constructor(id, nombre, precioLista, stock) {
        this.id = id,
        this.nombre = nombre,
        this.precioLista = precioLista,
        this.stock = stock
    }
    precioIva() {
        let precioAumento = this.precioLista * 1.21;
        return precioAumento;
    }
}

let producto1 = new Producto(1, 'Maletin de poker', 6000, 10);
let producto2 = new Producto(2, 'Backgamon', 3000, 5);
let producto3 = new Producto(3, 'Ruleta', 4500, 20);
let producto4 = new Producto(4, 'Uno', 500, 50);
let producto5 = new Producto(5, 'Monopoly', 4200, 4);
let producto6 = new Producto(6, 'Teg', 5500, 5);
let producto7 = new Producto(7, 'Playstation 4', 14000, 1);


const juegos = [producto1, producto2, producto3, producto4];
juegos.push(producto5, producto6, producto7);

//lista los productos
console.log('Lista de productos con iva: ' + juegos.length);

for (const producto of juegos) {
    console.log(producto.nombre);
    console.log('Precio: ' + producto.precioIva());
}



juegos.forEach( e => {
    console.log(e.nombre + ': $' + e.precioLista);
} )


console.log(juegos.sort((a, b) => a.precioLista - b.precioLista));


const juegoELectrico = juegos.find( el => el.nombre === 'Playstation 4' );
console.log(juegoELectrico);
const juegoNaipes = juegos.find ( el => el.precioLista < 1000 );
console.log(juegoNaipes);


const juegoCasino = juegos.filter( el => el.nombre.includes('poker') );
console.log(juegoCasino);

