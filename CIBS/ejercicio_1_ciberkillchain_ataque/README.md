# Ejercicio CiberKillChain - Ataque

Haga una copia de este documto

## Alumno

Leandro Percivati

## Enunciado

Armar una cyberkillchain usando técnicas de la matriz de Att&ck para un escenario relacionado a tu trabajo práctico


## Datos trabajo práctico

Todavía no tengo trabajo práctico definido por lo que trabajaré sobre el sistema de la empresa en la que trabajo actualmente.

### SpaceGurú
Es una empresa nacida en 2020 dedicada al almacenamiento de cosas tipo "baulera". Cuenta con depósito y sistema de flete propio. El modelo de negocio consiste principalmente en cobrar mensualmente a los usuarios por guardar objetos en el depósito, haciéndose cargo de la seguridad y mantenimiento de los mismos. 
Con respecto a sistema, cuenta con página web abierta al público, web interna de estilo "backoffice" y aplicación de celular para registro y seguimiento de objetos de manera interna, utilizada por operarios, choferes y otros tipos de empleados durante toda la estadía de los objetos desde que se los retira hasta que se los devuelve al cliente.
https://www.spaceguru.com.ar/

## Resolución

### 1.Reconnaissance
Se busca la página web, navegando se llega a un formulario de contacto, teléfono, mail de contacto con la empresa y redes sociales.
A través de Linkedin, se puede saber quiénes están trabajando actualmente en la empresa.
A través de Facebook e Instagram, se puede saber posibles clientes a través de interacciones en las publicaciones.
Se observa que el dominio del mail es "@spaceguru.com".
Ingresando en la consola del navegador se puede extraer estilos de la fuente de la página, logo, paleta de colores, etc.

https://raw.githubusercontent.com/lpercivati/cibs/CIBS/ejercicio_1_ciberkillchain_ataque/reconocimiento.PNG

### 2. Weaponization
Creación de diferentes direcciones emails por ejemplo security@5paceguru.com o security-spaceguru@gmail.com.
Confección de templates de emails respetando estilos extraídos de la página web de la empresa.
El escenario pensado consiste en phishing:
- Llenar el formulario de contacto
- Hablar con un responsable de ventas, pedir mail particular de la empresa. En el intercambio consultar la mayor cantidad de información posible que se pueda obtener, por ejemplo si todo el sistema de trackeo de objetos es propio, qué medidas de seguridad tiene la empresa, etc.
- Investigar otros trabajadores a través de las redes sociales

### 3. Delivery
- Enviar mails phishing solicitando cambio de clave y enviando un link con formulario a llenar con clave actual y nueva clave.

### 4. Explotaition
- El empleado entra en el link, llena el formulario poniendo clave actual y nueva clave. Al intentar guardar la nueva clave, se le informa que finalmente no era necesario renovar la misma y se le solicita que cierre la pestaña del navegador. Internamente, el click guarda los datos del formulario en un sistema propio donde el atacante puede ver la clave ingresada.

### 5. Command and control
- Al obtener el password, el atacante puede ingresar al mail de la víctima, espacio en plataforma (ej Google Drive).

### 6. Actions on objectives
Posibles acciones:
- Revisar mails en búsqueda de información sensible. Búsqueda de otras plataformas a las que se pueda loguear con las mismas credenciales: Slack (chat), Github (repositorios de código), entre otros.
- Revisar espacio en nube en búsqueda de información sensible: calendarios, datos de clientes, usuarios y password, informes de contabilidad, documentación interna, datos de desarrollo como credenciales de otros sistemas o bases de datos.
- Contactar soporte IT buscando información del sistema interno como URL del portal backoffice, información de servidores.
