from app.ports.repository_port import IProductoRepository

class InMemoryProductoRepository(IProductoRepository):
    def __init__(self):
        self.productos = {}

    def save(self, producto):
        self.productos[producto.id_producto] = producto
        print(f"Producto {producto.nombre} guardado en memoria.")

    def find_by_id(self, id_producto):
        return self.productos.get(id_producto, None)