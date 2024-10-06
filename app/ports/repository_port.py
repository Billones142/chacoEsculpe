from abc import ABC, abstractmethod

class IProductoRepository(ABC):
    @abstractmethod
    def save(self, producto):
        pass

    @abstractmethod
    def find_by_id(self, id_producto):
        pass