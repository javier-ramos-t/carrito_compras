# Carrito

El proyecto se generó usando [Angular CLI](https://github.com/angular/angular-cli) versión 21.2.8.

## Servidor de desarrollo

Para iniciar un servidor de desarrollo local, ejecuta:

```bash
ng serve
```

Una vez que el servidor esté en ejecución, abre tu navegador y dirígete a http://localhost:4200/. La aplicación se recargará automáticamente cada vez que modifiques alguno de los archivos fuente.

Este proyecto cuenta con una deploy de git hub page para su consumo en linea puede acceder desde este enlace https://javier-ramos-t.github.io/carrito_compras/ o desde la barra lateral izquierda en la seccion Deployments.

## Compilación (Building)

Para compilar el proyecto, ejecuta:

```bash
ng build
```

Esto compilará tu proyecto y almacenará los artefactos resultantes en el directorio \`dist/\`. Por defecto, la compilación de producción optimiza tu aplicación para mejorar su rendimiento y velocidad.

## Registro de Cambios y Mejoras Implementadas

* **Enrutamiento inicial:** Se corrigió el comportamiento de la ruta raíz (\`localhost:4200\`) para que redirija correctamente a una vista pública de inicio, la tienda, o el login, según el estado de la sesión.
* **Manejo de errores HTTP:** Se mejoró la retroalimentación en el login. Ahora el sistema diferencia entre una "sesión expirada" y "usuario/contraseña inválidos", mostrando el mensaje adecuado.
* **Seguridad y control de acceso (Guards):** Se bloqueó el acceso de clientes estándar a la vista de administración de productos implementando protección de rutas.
* **Reactividad en el Topbar:** Se solucionó el problema del "estado fantasma" de la sesión. Ahora, los botones exclusivos de administrador (como "Administrar productos") aparecen y desaparecen instantáneamente al cambiar entre cuentas de cliente y gerente, sin necesidad de recargar la página manualmente.
* **Validaciones de formularios:** Se agregó la notificación visual de campos requeridos vacíos al intentar finalizar una compra.
  * Se corrigió el formulario de "Nuevo Producto" para que marque en rojo todos los campos obligatorios faltantes al intentar enviar el formulario (\markAllAsTouched\), y no solo los campos con los que el usuario ya interactuó.
* **Corrección de interfaz (Modales):** Se reparó el funcionamiento del botón de cancelar para cerrar correctamente el modal durante la edición o alta de un producto.
* **Nuevos modales de confirmación:** Se implementaron modales nativos de confirmación (\<dialog>\) para prevenir acciones accidentales al quitar productos del carrito o cancelar pedidos.
* **Nuevas vistas (Esqueletos):** Se integró el maquetado inicial y enrutamiento para las siguientes pantallas (pendientes de conexión final con la API):
  * Panel de gestión y estado de pedidos para administradores.
  * Formulario de registro para crear una cuenta nueva.
  * Formulario de recuperación de contraseña.
