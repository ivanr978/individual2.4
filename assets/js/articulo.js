// Clase Artículo
export class Articulo {
    constructor(nombre, email, telefono) {
        this._nombre = nombre;
        this._email = email;
        this._telefono = telefono;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    get email() {
        return this._email;
    }

    set email(nuevoEmail) {
        this._email = nuevoEmail;
    }

    get telefono() {
        return this._telefono;
    }

    set telefono(nuevoTelefono) {
        this._telefono = nuevoTelefono;
    }

    getInfoProveedor() {
        return `Nombre: ${this._nombre}, Teléfono: ${this._telefono}`;
    }
}