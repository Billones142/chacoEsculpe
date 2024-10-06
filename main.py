from app.domain.model import Producto
from app.domain.service import ProductoService
from app.adapters.repository import InMemoryProductoRepository

if __name__ == "__main__":
    # Creamos el adaptador (repositorio)
    repository = InMemoryProductoRepository()

    # Creamos el servicio, inyectando el repositorio
    service = ProductoService(repository)

    # Creamos un nuevo producto
    producto = Producto(1, "Laptop", 1500)

    # Agregamos el producto usando el servicio
    service.agregar_producto(producto)

    # Obtenemos el producto por ID
    producto_obtenido = service.obtener_producto(1)
    if producto_obtenido:
        print(f"Producto obtenido: {producto_obtenido.nombre}, Precio: {producto_obtenido.precio}")