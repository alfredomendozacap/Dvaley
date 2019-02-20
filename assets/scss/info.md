## Estructura de Archivos SASS
**Descripción**
* _settings_ -> variables globales, colores, tamaños, etc.
* _tools_ -> funciones, mixins.
* _generics_ -> restablecer o normalizar estilos, definición de tamaño de caja, etc. Acá es donde primeramente se que genera CSS real.
* _elements_ -> sobreescribir a las etiquetas directamente(h1,li,ul,a) con estilos propios.
* _objects_ -> solo layout de nada de diseño.
* _components_ -> Diseño de cada parte de código UI que se podra reutilizar 
* _utilities_ -> clases de ayuda con la capacidad de anular todo lo que va antes(emergencia)
___
**Ejemplo de Importación**
~~~css
@import "settings.global";
@import "settings.colors";

@import "tools.functions";
@import "tools.mixins";

@import "generic.box-sizing";
@import "generic.normalize";

@import "elements.headings";
@import "elements.links";

@import "objects.wrappers";
@import "objects.grid";

@import "components.site-nav";
@import "components.buttons";
@import "components.carousel";
@import "utilities";
~~~