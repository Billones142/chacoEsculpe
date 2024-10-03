# Trabajo práctico Nro 2 - Paradigmas y lenguajes de programación 3 - ISI - UCP

## Escenario

"La organización de la Bienal Internacional de Escultura del Chaco, se ha contactado con su empresa para planificar, analizar, desarrollar e implementar un sistema de gestión que soporte el registro de los eventos, escultores como así también aplicaciones satélites para que los ciudadanos/público en general puedan realizar comentarios y votaciones durante el evento."

## Requerimientos funcionales

- Gestión de Eventos: Se desea poder generar eventos futuros (y también poder cargar los eventos pasados para tener el historial)
    - Posibilidad de agregar, ver, modificar y eliminar información sobre cada evento.
    - Detalle del Evento: Información sobre la fecha, lugar, descripción y temática del evento.
- Gestión de Escultores: Se desea poder mantener la información de los escultores
    - Posibilidad de agregar, ver, modificar y eliminar información de los escultores.
    - Perfil del escultor: Información detallada del escultor incluyendo nombre, biografía, contacto y obras previas.
- Gestión de Esculturas
    - Posibilidad de agregar, ver, modificar y eliminar información sobre cada escultura.
    - Temática de la Escultura: Descripción de la temática de cada escultura. Fecha de creación
- Gestión de Imágenes
    - Subir y Visualizar Imágenes: Posibilidad de subir y ver fotos de las esculturas en diferentes etapas (antes, durante y después del evento).
- Aplicación web pública para visualizar el próximo evento, y los eventos anteriores
    - Sitio web público para ver los escultores y sus esculturas.
- Sistema de Votación
- Votación por Visitantes: Funcionalidad para que los visitantes puedan votar por sus esculturas favoritas. Deberá estar en el sitio web público. El sistema de votación es con valores del 1 al 5 (el 5 el de mayor puntaje)
- Autenticación de Votantes: Sistema para asegurar que cada visitante puede votar solo una vez (por ejemplo, a través de una cuenta de usuario o validación por email).
- Sistema de votacion por sitio web publico
    - Haciendo uso de un botón de votar en cada escultor
- Sistema de votación por QR
    - En cada escultor estará disponible una tablet/pantalla que visualizará un QR “único” que deben cambiar cada 1min (para prevenir el uso del QR por fuera del predio, cada minuto cambiará el QR y los anteriores ya no deberán funcionar)
- Que la aplicación web (Sitio Publico) sea una PWA (Aplicación web progresiva
