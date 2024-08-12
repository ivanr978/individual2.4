// Clase Proveedor
export class Proveedor {
    constructor(nombre, articulo, precio) {
        this._nombre = nombre;
        this._articulo = articulo;
        this._precio = precio;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get articulo() {
        return this._articulo;
    }

    set articulo(nuevoArticulo) {
        this._articulo = nuevoArticulo;
    }

    get precio() {
        return this._precio;
    }

    set precio(nuevoPrecio) {
        if (nuevoPrecio >= 0) {
            this._precio = nuevoPrecio;
        } else {
            console.error('El precio no puede ser negativo');
        }
    }

    calcularImpuesto(tasa) {
        return this._precio * (tasa / 100);
    }
}

// Subclase ProveedorEspecifico
export class ProveedorEspecifico extends Proveedor {
    constructor(nombre, articulo, precio, categoria) {
        super(nombre, articulo, precio);
        this._categoria = categoria;
    }

    get categoria() {
        return this._categoria;
    }

    set categoria(nuevaCategoria) {
        this._categoria = nuevaCategoria;
    }
}