from app.ports.repository_port import IProductoRepository

class ProductoService:
    def __init__(self, repository: IProductoRepository):
        self.repository = repository

    def agregar_producto(self, producto):
        # Lógica de negocio para agregar un producto
        self.repository.save(producto)

    def obtener_producto(self, id_producto):
        # Lógica de negocio para obtener un producto
        return self.repository.find_by_id(id_producto)