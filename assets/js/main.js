import { Proveedor, ProveedorEspecifico } from './Proveedor.js';
import { Articulo } from './Articulo.js';

const proveedores = [];

const mostrarProveedores = () => {
    const proveedoresLista = document.getElementById('proveedoresLista');
    proveedoresLista.innerHTML = '';

    if (proveedores.length === 0) {
        proveedoresLista.innerHTML = '<p>No hay proveedores registrados.</p>';
        return;
    }

    const lista = document.createElement('ul');
    proveedores.forEach(proveedor => {
        const item = document.createElement('li');
        item.textContent = `Proveedor: ${proveedor.nombre}, Artículo: ${proveedor.articulo}, Precio: $${proveedor.precio.toFixed(2)}`;
        lista.appendChild(item);
    });

    proveedoresLista.appendChild(lista);
};

document.getElementById('registroForm').addEventListener('submit', e => {
    e.preventDefault();

    const nombreProveedor = document.getElementById('nombreProveedor').value;
    const nombreArticulo = document.getElementById('nombreArticulo').value;
    const precioArticulo = parseFloat(document.getElementById('precioArticulo').value);
    const emailArticulo = document.getElementById('emailArticulo').value;
    const telefonoArticulo = document.getElementById('telefonoArticulo').value;

    // Crear instancia de Artículo
    const articulo = new Articulo(nombreArticulo, emailArticulo, telefonoArticulo);

    // Crear instancia de Proveedor
    const proveedor = new Proveedor(nombreProveedor, articulo.nombre, precioArticulo);

    // Agregar proveedor a la lista
    proveedores.push(proveedor);

    // Mostrar proveedores
    mostrarProveedores();

    // Limpiar formulario
    e.target.reset();
});