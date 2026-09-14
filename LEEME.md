# Cuentas F5·F7 — nueva versión

## Qué es
Rediseño completo de tu app de cuentas de fútbol: mismo modelo de datos y misma
lógica de saldos que ya usabas (compatible con tu backup JSON actual), pero con
una interfaz mucho más visual y pensada para móvil: panel tipo marcador
electrónico (Bote / Jugadores / Balance), fichas tipo "ticket de partido" para
cada jugador, navegación inferior de app, y hojas deslizantes para añadir
datos en vez de formularios sueltos.

## Archivos
- `index.html` — la app (ábrela directamente en el navegador para probarla)
- `manifest.json` y `sw.js` — hacen que se pueda "instalar" como app (PWA)
- `icon.svg` — icono de la app

## Cómo importar tus datos actuales
1. Abre `index.html`.
2. Ve a **Ajustes → Importar backup**.
3. Selecciona tu archivo `futbol-cuentas-backup.json` (el mismo formato que ya
   usas). Se cargan todos tus jugadores y movimientos tal cual.

## Cómo instalarla en el móvil sin Play Store
Un PWA no es un APK: es una página web que el navegador deja "instalar" como
si fuera una app normal, así que no choca con la restricción de tu empresa.
Pero para que el icono de instalar aparezca, la web tiene que servirse por
HTTPS (no vale abrir el archivo suelto desde el móvil). La forma más rápida y
gratuita:

1. Sube estos 4 archivos a un repositorio de **GitHub** (puede ser privado).
2. En el repositorio, ve a **Settings → Pages**, elige la rama y guarda.
   GitHub te da una URL tipo `https://tuusuario.github.io/turepo/`.
3. Abre esa URL en Chrome desde el móvil → menú ⋮ → **"Instalar app"** (o
   "Añadir a pantalla de inicio"). Queda con icono propio y a pantalla
   completa, sin barra de navegador.

Alternativa igual de válida y sin usar GitHub: arrastrar los 4 archivos a
[Netlify Drop](https://app.netlify.com/drop), que te da una URL HTTPS al
instante.

## Qué cambia respecto a la versión anterior
- Diseño nuevo de arriba a abajo (marcador + tickets + navegación inferior).
- Se mantiene: jugadores, movimientos individuales y de bote, historial,
  resumen F5/F7, generador de equipos equilibrado por nivel, exportar/importar
  backup.
- Simplificado por ahora: la exportación de resumen/equipos como **imagen
  PNG** no está incluida (la versión anterior la generaba con canvas); en su
  lugar hay un botón "Compartir equipos" que copia el reparto como texto para
  pegar en WhatsApp. Si la imagen te hace falta, dímelo y la añado.
- El generador de equipos permite intercambiar jugadores entre equipo A y B
  tocando dos de ellos.

## Sincronizar automáticamente con GitHub (entre varios dispositivos)
Desde la versión con sincronización, la app puede leer y escribir directamente
en un archivo de tu repo de GitHub cada vez que añades o cambias algo, así que
si la abres desde el móvil y desde el ordenador ves siempre los mismos datos.

### 1. Crea un token de acceso personal (solo para este repo)
1. En GitHub, ve a **Settings de tu cuenta** (el icono de tu perfil, no el del
   repo) → **Developer settings** → **Personal access tokens** → **Fine-grained
   tokens** → **Generate new token**.
2. En **Repository access**, elige **Only select repositories** y marca solo
   `CuentasFutbito`.
3. En **Permissions → Repository permissions**, busca **Contents** y ponlo en
   **Read and write**. No hace falta ningún otro permiso.
4. Genera el token y **cópialo** (solo se muestra una vez).

### 2. Configúralo en la app
1. Abre la app → **Ajustes → Sincronización con GitHub**.
2. Rellena usuario (`ividat84`), repositorio (`CuentasFutbito`), el archivo
   (puedes dejar `futbol-cuentas-backup.json`, que es el que ya tienes subido
   con tus datos reales), rama (`main`) y pega el token.
3. Pulsa **Guardar y sincronizar**. La primera vez descarga ese archivo y lo
   carga en la app.
4. A partir de ahí, cada movimiento que registres se sube solo a GitHub unos
   segundos después. Al abrir la app en otro dispositivo con la misma
   configuración, se descarga automáticamente lo último.

### Importante sobre seguridad
El token se queda guardado en el navegador de ese dispositivo (no se sube a
ningún sitio salvo directamente a la API de GitHub). Como el repo es público,
cualquiera puede ver el contenido del archivo de datos si conoce la URL del
repo — igual que ya pasaba con el backup que subiste. Si algún día quieres
revocarlo, puedes borrar el token desde GitHub en cualquier momento (Developer
settings → Tokens → Delete), y desde **Ajustes → Desconectar** en la app.

Si dos personas guardan cambios casi al mismo tiempo desde dos dispositivos
distintos, gana el último que se guarda (no hay fusión automática de datos);
para vuestro caso, con un único usuario gestionando las cuentas, no debería
ser un problema real.
