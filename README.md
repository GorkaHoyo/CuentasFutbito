# ⚽ Cuentas F5·F7 — Manual Oficial y Documentación

Aplicación web progresiva (**PWA**) diseñada a medida para gestionar las cuentas (créditos, deudas y bote común), la creación de equipos equilibrados, la liquidación automática de pistas y las estadísticas oficiales por temporadas de un grupo de amigos de Fútbol 5 (**F5**) y Fútbol 7 (**F7**).

Funciona directamente desde el navegador (se puede instalar en el móvil como una app normal sin pasar por Play Store ni App Store) y **sincroniza todos los datos automáticamente en la nube con GitHub** para que estén siempre actualizados en cualquier móvil u ordenador.

🔗 **Abrir la aplicación:** [https://gorkahoyo.github.io/CuentasFutbito/](https://gorkahoyo.github.io/CuentasFutbito/)

---

## 📑 Índice

1. [¿Qué hace la app?](#1-que-hace-la-app)
2. [La rutina del día de partido (Paso a paso en 3 minutos)](#2-rutina-dia-de-partido)
3. [Guía de uso detallada (Pestaña por pestaña)](#3-guia-de-uso)
   * [3.1. Pestaña Resumen (Cuentas y Morosos)](#31-resumen)
   * [3.2. Pestaña Jugadores (Altas, Niveles y Bilbao Kirolak)](#32-jugadores)
   * [3.3. Pestaña Movimientos (Pagos múltiples y Bote)](#33-movimientos)
   * [3.4. Pestaña Equipos (Convocatoria, Equilibrado y Liquidación)](#34-equipos)
   * [3.5. Pestaña Estadísticas (Clasificación, Cromos y Partidos)](#35-estadisticas)
   * [3.6. Pestaña Ajustes (Nube, Copias y Editar Historial)](#36-ajustes)
4. [¿Cómo funcionan las Temporadas y el Histórico?](#4-temporadas)
5. [Los 6 Exportables para el grupo de WhatsApp](#5-exportables-whatsapp)
6. [Instalación en el móvil como App (PWA)](#6-instalacion-pwa)
7. [Sincronización con GitHub (Configuración y Token)](#7-sincronizacion-github)
8. [Contenido del repositorio y Modelo de datos](#8-contenido-y-modelo)
9. [Preguntas frecuentes y Solución de problemas (FAQ)](#9-preguntas-frecuentes)

---

<a id="1-que-hace-la-app"></a>
## 1. ¿Qué hace la app?

La aplicación resuelve en un solo sitio las **cuatro tareas** de todas las semanas:

1. **Lleva las cuentas al céntimo (separando F5 y F7):** Sabe quién tiene dinero a favor (crédito en verde), quién está a cero (al día) y quién debe dinero (deuda en rojo), además de cuánto dinero hay guardado en el **Bote común** de cada modalidad.
2. **Liquida el coste del partido automáticamente:** Le dices cuánto ha costado alquilar la pista y cuánto paga cada jugador (distinguiendo si tiene carnet de *Bilbao Kirolak* o no). La app le cobra la cuota a cada asistente, le devuelve el dinero de la pista a quien la haya pagado y mete las vueltas (el sobrante) directamente en el Bote.
3. **Genera equipos equilibrados:** A partir de los convocados del día, reparte a los jugadores en **🔴 Equipo Rojo** y **🔵 Equipo Azul** compensando las posiciones (*Portero, Defensa, Medio, Delantero*), la habilidad técnica y el físico para que los partidos salgan igualados.
4. **Lleva la Liga de Estadísticas y crea Carteles para WhatsApp:** Registra los resultados y goleadores de cada partido, calcula la clasificación general (Puntos, Goles, Diferencia de goles `+/-`, Rachas, % de Victorias), genera **Cromos estilo FIFA** de cada jugador (con su *Mejor Socio* y su *Bestia Negra*) y exporta todo en imágenes de alta calidad listas para mandar al grupo de WhatsApp.

---

<a id="2-rutina-dia-de-partido"></a>
## 2. La rutina del día de partido (Paso a paso en 3 minutos)

Si es día de partido, este es el orden exacto que debes seguir para dejar todo hecho sin olvidarte de nada:

### Paso A — Antes de jugar (Hacer los equipos)
1. Entra en la pestaña **👕 Equipos** (abajo) y elige arriba si hoy toca **`F5`** o **`F7`**.
2. Si siguen marcados los jugadores de la semana pasada, toca el botón rojo **`🗑️ Vaciar`** arriba a la derecha.
3. Ve marcando con un tic (`☑️`) a los **10, 12, 14 o 16 jugadores** que van a jugar hoy (si viene algún amigo de fuera que no está en la app, pulsa **`+ Añadir invitado`**).
4. Pulsa **`🔀 Equilibrar`**. Si quieres cambiar a alguien de equipo a mano, toca primero a un jugador y luego al jugador del otro equipo por el que lo quieras cambiar.
5. Pulsa **`Exportar`** para mandar la foto de los equipos al grupo de WhatsApp.
6. Pulsa el botón verde **`⚽ Sellar Partido Oficial`** (abajo del todo). Esto deja el partido guardado y listo para anotar los goles cuando terminéis de jugar.

### Paso B — Al terminar de jugar (Cobrar la pista)
1. Vuelve a la pestaña **👕 Equipos** y toca el botón amarillo **`💰 Liquidar Partido`**.
2. Comprueba los datos que salen en pantalla:
   * **Cuota (BK):** Lo que paga hoy cada socio de Bilbao Kirolak (ej. `3.00`).
   * **Cuota (Normal):** Lo que paga hoy quien no tenga BK (ej. `3.00`).
   * **Coste Pista:** Lo que ha cobrado el polideportivo por la pista (ej. `19.55`).
   * **¿Quién pagó?:** Elige *Fondo común (Bote)* si se ha pagado con dinero del bote, o elige el nombre del jugador que haya pagado la pista con su tarjeta/efectivo.
3. Pulsa **`Confirmar y Liquidar`**. ¡Cuentas hechas! *(El botón se pondrá en verde diciendo `✅ Partido ya liquidado hoy` para que nadie lo cobre dos veces por equivocación).*

### Paso C — Anotar el resultado y los goles
1. Entra en la pestaña **📊 Estadísticas** y toca arriba en **`Partidos`**.
2. Verás el partido de hoy en color amarillo (**`Anotar resultado ➔`**). Tócalo.
3. Pulsa los botones **`+`** y **`-`** al lado de cada jugador para poner cuántos goles ha metido cada uno (el marcador grande de arriba se irá sumando solo).
   * *¿Hubo un gol en propia puerta o de alguien que no recuerdas?* Escribe directamente el resultado final en los números grandes de arriba (**ROJO - AZUL**).
4. Toca el botón dorado **`📸 Exportar Resultado del Partido`** para mandar el cartel final al WhatsApp, y pulsa **`💾 Guardar Partido`** para que se actualice la clasificación.

---

<a id="3-guia-de-uso"></a>
## 3. Guía de uso detallada (Pestaña por pestaña)

En la parte superior de la pantalla siempre verás el selector amarillo **`F5 | F7`**. Ese botón cambia toda la vista de cuentas entre Fútbol 5 y Fútbol 7. En la barra inferior tienes las **6 pestañas** de la aplicación:

---

<a id="31-resumen"></a>
### 3.1. 🏠 Pestaña «Resumen» (Cuentas y Morosos)

Es la pantalla principal de dinero. Muestra el estado económico de la modalidad (`F5` o `F7`) que tengas marcada arriba a la derecha.

#### ¿Qué significan los 3 números del marcador verde superior?
| Casilla | ¿Qué significa? | Ejemplo práctico |
| :--- | :--- | :--- |
| **BOTE** | Dinero acumulado por el grupo (sobrantes de partidos, ingresos al bote menos gastos de balones/pistas). | `11.90€` |
| **JUGADORES** | Suma de los saldos individuales de todos los jugadores (lo que tienen a favor menos lo que deben). | `+49.60€` |
| **BALANCE** | **Es el dinero real que tiene que haber en la cuenta/cartera del tesorero** (`Bote + Jugadores`). | `61.50€` |

#### Lista de jugadores y cobro rápido
Debajo del marcador, los jugadores aparecen divididos automáticamente en tres bloques:
* 🟢 **Con crédito:** Jugadores que han puesto dinero por adelantado y tienen saldo a su favor (`+15.00€`).
* ⚪ **Al día:** Jugadores que están exactamente en `0.00€`.
* 🔴 **Con deuda:** Jugadores que deben dinero de partidos anteriores (`-6.00€`).

> 💡 **Truco de cobro rápido:** Si un amigo te hace un Bizum o te da efectivo, **toca directamente sobre su nombre en esta pantalla**. Se abrirá su ficha rápida donde puedes ver sus últimos 4 movimientos, anotarle un ingreso (`+ Abona`), un gasto (`- Carga`) o pulsar el botón verde **`✅ Saldar deuda`** para dejarlo a `0.00€` con un solo toque.

#### Botones para WhatsApp en Resumen
* **`⬇️ Exportar imagen`:** Descarga una imagen resumen con el marcador y las columnas de deudas y créditos para enviarla al grupo.
* **`📋 Copiar deudas`:** Copia en el portapapeles de tu móvil un texto con la lista de morosos y el total pendiente para pegarlo directamente en WhatsApp.

---

<a id="32-jugadores"></a>
### 3.2. 👥 Pestaña «Jugadores» (Altas, Niveles y Bilbao Kirolak)

Aquí está la plantilla completa del grupo. Puedes usar el buscador superior o filtrar por **`Todos / F5 / F7`** y por **`Habituales / Esporádicos`**.
* En los jugadores que participan en ambas modalidades (`F5/F7`), debajo de su nombre verás su saldo desglosado por separado (`F5: +3.00€ · F7: -3.00€`) y a la derecha su saldo total combinado.

#### Cómo crear o editar un jugador
Pulsa el botón redondo amarillo **`+`** (abajo a la derecha) para añadir a alguien nuevo, o toca sobre un jugador existente para editar sus datos:
* **Nombre:** Nombre o apodo con el que aparecerá en las tablas y fotos.
* **Tipo (`F5`, `F7` o `F5/F7`):** Elige en qué partidos participa para que no estorbe en las listas que no le corresponden.
* **Habilidad Técnica (`Muy bajo` a `Muy alto`):** Nota del 1 al 5 que usa la app para equilibrar equipos.
* **Físico / Resistencia (`Bajo`, `Medio`, `Alto`):** Nota del 1 al 3 que suma al peso del jugador al equilibrar equipos.
* **Posición (`portero`, `defensa`, `medio`, `delantero`):** Imprescindible para que el generador reparta un número compensado de defensas, medios y delanteros en cada bando.
* **Abonado Bilbao Kirolak (`Sí` / `No`):** Determina qué tarifa se le cobra automáticamente al liquidar un partido.
* **Habitual (`Sí` / `Esporádico`):** Los habituales salen primero en la lista de convocatoria de los partidos.

---

<a id="33-movimientos"></a>
### 3.3. 💶 Pestaña «Movimientos» (Pagos múltiples y Bote)

Sirve para apuntar movimientos de dinero cuando no quieres ir uno por uno:
* **Subpestaña `A jugadores`:** Permite marcar a varios jugadores a la vez en la lista, elegir si es **`+ Abona`** (pagan) o **`- Carga`** (se les cobra), poner el importe por persona y el motivo.
* **Subpestaña `Al bote`:** Permite meter un **`+ Ingreso`** o un **`- Gasto`** directo al fondo común del grupo (por ejemplo, `−20.00€` por comprar un balón nuevo) sin tocar el saldo individual de los jugadores.

---

<a id="34-equipos"></a>
### 3.4. 👕 Pestaña «Equipos» (Convocatoria, Equilibrado y Liquidación)

Es el centro de mando los días de partido. Cuenta con varias ayudas inteligentes:

1. **Ordenación inteligente de la lista:** A medida que marcas jugadores como presentes, suben automáticamente a la parte superior de la lista pintados en verde para que veas de un vistazo a los convocados. Debajo aparecen los habituales y al final los esporádicos.
2. **Control de número y posiciones:** El contador (`10 / 10 o 12` en F5; `14 / 14 o 16` en F7) te avisa en rojo si faltan o sobran jugadores. Si alguno de los presentes no tiene posición asignada en su ficha, la app te dirá exactamente quién es antes de sortear.
3. **Algoritmo de equilibrado en serpentina:** Al pulsar **`🔀 Equilibrar`**, la app agrupa a los convocados por demarcación (porteros, defensas, medios y delanteros) y los va asignando siempre al equipo que tenga menos peso acumulado en ese momento, añadiendo una pequeña variación aleatoria entre jugadores de nivel parecido para que cada vez que pulses el botón te proponga combinaciones equilibradas distintas.
4. **Intercambio manual de jugadores:** Una vez generados el **🔴 Equipo Rojo** y el **🔵 Equipo Azul**, si tocas sobre el nombre de un jugador (se ilumina) y luego tocas sobre un jugador del otro equipo, **se intercambian de equipo al instante** y se recalcula la media de estrellas (`★`) de cada equipo.
5. **Liquidar Partido (con blindaje anti-cobro doble):**
   * Calcula automáticamente la recaudación multiplicando cuántos asistentes tienen Bilbao Kirolak y cuántos no, le resta el coste de la pista y mete la diferencia en el Bote.
   * *Nota sobre invitados:* Si en el partido hay un **Invitado**, la app cuenta su pago dentro de la recaudación de la pista para que el sobrante del Bote cuadre al céntimo, pero no le crea ficha de deuda porque no forma parte de la plantilla fija.

---

<a id="35-estadisticas"></a>
### 3.5. 📊 Pestaña «Estadísticas» (Clasificación, Cromos y Partidos)

Recoge todos los datos deportivos de los partidos oficiales sellados y completados. Arriba puedes filtrar por **Temporada** y por **Modalidad (`Todos`, `F5`, `F7`)**.

#### A) Subpestaña «Clasificación»
* **Cuadro de Honor (Las 4 tarjetas superiores):** Muestra automáticamente quién lidera el grupo en **⚽ Pichichi** (más goles), **🏆 Líder Puntos** (más puntos sumados), **🛡️ Mejor Balance** (mejor diferencia de goles `+/-`) y **🎯 Media G/P** (mejor promedio goleador por partido).
* **Tabla General Ordenable:** Puedes tocar en el título de cualquiera de las 7 columnas para ordenar la clasificación por ese dato (por ejemplo, toca en `PTS` para ordenar por puntos o en `+/-` para ordenar por balance):

| Columna | Significado | Cómo se calcula |
| :---: | :--- | :--- |
| **Jugador** | Nombre, racha y resumen | Debajo del nombre muestra 3 bolitas de colores con sus últimos 3 partidos (🟢 Victoria, 🟡 Empate, 🔴 Derrota), su registro `V-E-D` y los goles a favor y en contra de su equipo (`GF-GC`). |
| **PTS** | Puntos | **3 puntos** por victoria, **1 punto** por empate y **0 puntos** por derrota. |
| **PJ** | Partidos Jugados | Total de partidos oficiales completados por ese jugador. |
| **G** | Goles | Total de goles marcados por el jugador. |
| **+/-** | Balance de Goles | Diferencia entre los goles que ha marcado su equipo y los que ha recibido mientras él jugaba (`GF - GC`). En **verde (`+`)** si su equipo mete más de lo que encaja con él en el campo; en **rojo (`-`)** si encaja más. |
| **G/P** | Media de Goles | Promedio de goles por partido (`Goles ÷ Partidos Jugados`). |
| **%WIN** | Porcentaje de Victoria | Porcentaje de partidos ganados sobre el total jugado (`Victorias ÷ PJ × 100`). |

* **Cromo Individual del Jugador:** Al tocar sobre la fila de cualquier jugador en la tabla, se abre su **Cromo oficial** con sus estadísticas, su racha actual y dos datos calculados a partir de todos sus partidos:
  * **🤝 Mejor Socio:** El compañero con el que más victorias ha conseguido jugando en el mismo equipo.
  * **😈 Bestia Negra:** El rival contra el que más veces ha perdido teniéndolo en el equipo contrario.

#### B) Subpestaña «Partidos»
Muestra el listado cronológico de todos los partidos de la temporada:
* Los partidos con borde amarillo (**`Anotar resultado ➔`**) están pendientes de jugar o de apuntar el marcador.
* Los partidos con borde verde ya están terminados y muestran el marcador final (`6 - 4`). Puedes tocar cualquier partido terminado cuando quieras para ver quién metió los goles, corregir el resultado o volver a descargar el cartel del Acta.

---

<a id="36-ajustes"></a>
### 3.6. ⚙️ Pestaña «Ajustes» (Nube, Copias y Editar Historial)

* **Sincronización con GitHub:** Muestra con un tic verde (`✅ Sincronizado`) si el móvil está conectado a la nube, e incluye botones para *Descargar de la nube* o *Reintentar subida* manualmente.
* **Copia de seguridad manual (`Exportar` / `Importar`):** Permite descargar en tu móvil u ordenador un archivo `.json` con todos los datos por si quieres guardar una copia extra en tu dispositivo.
* **Solución de problemas (`↻ Forzar actualización`):** Botón rojo que limpia la memoria caché del navegador y descarga de nuevo la última versión del código de la app sin borrar tus datos.
* **Historial de movimientos (con Lápiz de edición `✏️` y Papelera `🗑️`):** Lista completa con buscador de todos los movimientos de dinero hechos en la app.
  * Si te equivocaste al poner una cantidad o un motivo, pulsa el **lápiz (`✏️`)** para corregirlo al instante.
  * Si un movimiento se creó por error, pulsa la **papelera (`🗑️`)** para eliminarlo.

---

<a id="4-temporadas"></a>
## 4. ¿Cómo funcionan las Temporadas y el Histórico?

En la pestaña **📊 Estadísticas** tienes el desplegable de **`Temporada`**. Así es como funciona:

1. **¿Qué tengo que hacer el año que viene cuando empiece una temporada nueva?**
   * Absolutamente nada de código. Solo entra en `Estadísticas`, toca el desplegable de **Temporada** y elige **`➕ Nueva temporada...`**.
   * La app te sugerirá automáticamente el curso siguiente (ej. `2027/2028`). Acepta y listo: la tabla de clasificación y la lista de partidos quedarán limpias a cero para empezar el nuevo año, y la estrella (`⭐`) indicará que esa es la nueva temporada activa.
   * *Importante:* Cambiar de temporada **solo reinicia los goles y partidos**. Los jugadores, el dinero del Bote y las deudas o créditos pendientes se mantienen intactos.
2. **¿Cómo veo los datos de años anteriores o la suma de todos los años?**
   * Toca el desplegable de **Temporada** y selecciona un año anterior (ej. `2026/2027`) para ver cómo acabó esa liga, o elige **`🌟 Histórico (Todas)`** para ver quién es el máximo goleador o líder de puntos sumando todas las temporadas jugadas desde que existe la app.
3. **¿Y si me equivoco al escribir el nombre de una temporada o creo una sin querer?**
   * Selecciona esa temporada en el desplegable y luego vuelve a abrir el desplegable: abajo del todo verás las opciones **`✏️ Renombrar "..."`** (cambia el nombre y actualiza todos sus partidos automáticamente) y **`🗑️ Eliminar "..."`**.

---

<a id="5-exportables-whatsapp"></a>
## 5. Los 6 Exportables para el grupo de WhatsApp

Como el resto de amigos del grupo sigue las cuentas y la liga por WhatsApp, la app genera **4 carteles gráficos (PNG)** de alta resolución y **2 resúmenes de texto**:

| Exportable | ¿Dónde está el botón? | ¿Qué enseña en el grupo de WhatsApp? |
| :--- | :--- | :--- |
| 🖼️ **1. Cartel de Cuentas** | `Resumen` → *Exportar imagen* | Marcador superior (Bote, Jugadores, Balance), lista roja de deudores, lista verde de créditos y jugadores al día. |
| 📋 **2. Texto de Morosos** | `Resumen` → *Copiar deudas* | Mensaje de texto directo con el listado de los que deben dinero y la suma total pendiente de cobro. |
| 🖼️ **3. Cartel de Equipos** | `Equipos` → *Exportar* | Tarjetas del Equipo Rojo y Equipo Azul con la demarcación en colores (`POR`, `DEF`, `MED`, `DEL`) y media de nivel `★`. |
| 📲 **4. Texto de Equipos** | `Equipos` → *Compartir* | Lista rápida en texto con las dos alineaciones para copiar/compartir antes del partido. |
| 🖼️ **5. Acta del Partido** | `Estadísticas > Partidos` → *(Tocar partido)* → *📸 Exportar Resultado* | Marcador gigante con el resultado final, equipo ganador, plantillas completas y globos de goles (`⚽ x2`) junto a cada goleador. |
| 🖼️ **6. Clasificación y Cromos** | `Estadísticas` → *📸 Exportar Clasificación* / *📸 Exportar Cromo* | Tabla general con las 4 tarjetas de líderes arriba, medallas de oro/plata/bronce en el Top 3, bolitas de racha y columna `+/-`. O el cromo individual estilo FIFA de un jugador con su Mejor Socio y Bestia Negra. |

---

<a id="6-instalacion-pwa"></a>
## 6. Instalación en el móvil como App (PWA)

No hace falta buscar la app en ninguna tienda; se instala directamente desde el navegador abriendo `[https://gorkahoyo.github.io/CuentasFutbito/](https://gorkahoyo.github.io/CuentasFutbito/)`:

* **En Android (Chrome):**
  1. Abre el enlace en Google Chrome.
  2. Toca el menú de los tres puntos **`⋮`** (arriba a la derecha).
  3. Pulsa en **«Instalar aplicación»** o **«Añadir a pantalla de inicio»**. Aparecerá en tu móvil con su propio icono a pantalla completa.
* **En iPhone / iPad (Safari):**
  1. Abre el enlace en Safari.
  2. Toca el botón **Compartir** (el cuadrado con la flecha hacia arriba en la barra inferior).
  3. Baja y pulsa en **«Añadir a pantalla de inicio»** → **Añadir**.
* **En Ordenador (Chrome / Edge):**
  1. Haz clic en el icono de la pantallita con una flecha que aparece a la derecha de la barra de direcciones web y pulsa **Instalar**.

---

<a id="7-sincronizacion-github"></a>
## 7. Sincronización con GitHub (Configuración y Token)

Para que tanto tú como tu hermano veáis siempre los mismos datos desde vuestros respectivos móviles, la app guarda automáticamente todos los cambios dentro del archivo `futbol-cuentas-backup.json` de este repositorio mediante la API de GitHub.

### ¿Qué datos se ponen en `Ajustes > Sincronización`?
* **Usuario:** `gorkahoyo`
* **Repositorio:** `CuentasFutbito`
* **Archivo:** `futbol-cuentas-backup.json`
* **Rama:** `main`
* **Token:** Tu código privado `github_pat_...`

### ¿Cómo crear un Token nuevo si algún día caduca o cambias de móvil?
Por seguridad, los tokens de GitHub tienen fecha de caducidad (suelen durar unos meses o 1 año). Si un día en la pestaña `Ajustes` ves el mensaje `⚠️ Sin sincronizar: Token inválido`, renúevalo en 1 minuto así:

1. Entra en [GitHub.com](https://github.com) con tu cuenta y toca tu foto de perfil (arriba a la derecha) → **Settings**.
2. Baja hasta el final del menú izquierdo y entra en **<> Developer settings**.
3. En el menú izquierdo, despliega **Personal access tokens** → **Fine-grained tokens**.
4. Pulsa el botón verde **Generate new token** (arriba a la derecha).
5. Rellena estos 4 puntos:
   * **Token name:** Pon `App Futbol` (o el nombre que quieras).
   * **Expiration:** Elige la duración máxima que te permita.
   * **Repository access:** Marca **Only select repositories** y selecciona `gorkahoyo/CuentasFutbito`.
   * **Permissions:** Despliega **Repository permissions**, busca la fila **Contents** y cambia su desplegable de *No access* a **Read and write** (Lectura y escritura).
6. Baja del todo, pulsa **Generate token** y copia el código largo que empieza por `github_pat_...`.
7. Abre la app en el móvil, ve a **⚙️ Ajustes**, pulsa **Desconectar** y vuelve a pegar los datos con el nuevo Token.

---

<a id="8-contenido-y-modelo"></a>
## 8. Contenido del repositorio y Modelo de datos

### Archivos que componen el repositorio
| Archivo | Función dentro del proyecto |
| :--- | :--- |
| `index.html` | Estructura base de la web, carga de fuentes modernas (`Outfit` e `Inter`) y control de versión de caché (`?v=XX`). |
| `styles.css` | Hoja de estilos con toda la apariencia visual (colores deportivos, marcadores, tarjetas, tablas y animaciones). |
| `app.js` | El cerebro completo de la aplicación: cálculos de cuentas, sorteador de equipos, estadísticas, dibujo de imágenes PNG en Canvas y conexión con GitHub. |
| `futbol-cuentas-backup.json` | Archivo de base de datos donde se guardan automáticamente en la nube los jugadores, movimientos, partidos y temporadas. |
| `sw.js` | *Service Worker* para que la aplicación cargue al instante en el móvil y funcione como app instalable. |
| `manifest.json` | Configuración del nombre, colores e iconos al instalar la app en el teléfono. |
| `icon.svg` | Icono vectorial del balón sobre fondo verde de la aplicación. |

### Estructura del modelo de datos (`futbol-cuentas-backup.json`)
Toda la información de la app se almacena tanto en la memoria interna del navegador (`localStorage`) como en el archivo JSON de GitHub con la siguiente estructura:
* `players`: Lista de jugadores (`id`, `name`, `type` [`F5`|`F7`|`F5/F7`], `isRegular`, `skill`, `stamina`, `position`, `bilbaoKirolak`, `createdAt`).
* `transactions`: Movimientos de dinero de jugadores (`id`, `playerIds`, `amount`, `matchType`, `reason`, `createdAt`).
* `generalTransactions`: Movimientos directos del Bote común (`id`, `amount`, `matchType`, `reason`, `createdAt`).
* `matches`: Partidos oficiales sellados (`id`, `date`, `season`, `matchType`, `teamRojo`, `teamBlanco`, `scoreRojo`, `scoreBlanco`, `goals`, `status` [`pending`|`completed`]).
* `currentSeason` y `customSeasons`: Temporada activa en curso y listado de temporadas creadas.
* `teamsMatchType`, `teamsPresent`, `teamsGuests`, `teamsResult`: Estado actual de la convocatoria y últimos equipos generados.

---

<a id="9-preguntas-frecuentes"></a>
## 9. Preguntas frecuentes y Solución de problemas (FAQ)

**❓ He modificado el código en GitHub (`app.js` o `styles.css`), pero al abrir la app en el móvil o en el PC sigo viendo la versión antigua. ¿Por qué?**
> Los navegadores guardan los archivos `.js` y `.css` en su memoria caché para no descargarlos cada vez que abres la app. Siempre que modifiques el código en GitHub, debes hacer tres cosas:
> 1. Abre el archivo `index.html` en GitHub y súbele un número al final de `styles.css?v=XX` y `app.js?v=XX` (por ejemplo, si pone `?v=50`, cámbialo a `?v=51`).
> 2. Espera **2 minutos** tras guardar para que los servidores de GitHub Pages publiquen el cambio.
> 3. Entra en la app en `Ajustes` y pulsa el botón rojo **`↻ Forzar actualización`**.

**❓ Si pulso el botón rojo «↻ Forzar actualización», ¿se borran mis jugadores o los partidos?**
> **No.** Ese botón solo borra los archivos visuales en caché para descargar las mejoras nuevas de la app, pero jamás borra tus datos guardados ni en el móvil ni en GitHub.

**❓ ¿Qué pasa si mi hermano y yo usamos la app cada uno desde su móvil?**
> Siempre que ambos tengáis configurada la sincronización con GitHub en la pestaña `Ajustes`, cada vez que uno de los dos abra la app se descargarán automáticamente los últimos datos de la nube, y cualquier cambio que hagáis se subirá solo 0,7 segundos después.

**❓ Me he equivocado al liquidar un partido (he puesto mal el precio de la pista o me he dejado a alguien sin marcar). ¿Cómo lo arreglo?**
> Ve a `Ajustes > Historial de movimientos`. Ahí verás los movimientos que acaba de crear la liquidación (`Cuota partido (BK)`, `Cuota partido (Normal)` y `Sobrante partido`). Puedes tocar el icono del **lápiz (`✏️`)** para cambiar el importe de cualquiera de ellos, o pulsar la **papelera (`🗑️`)** para borrarlos y volver a liquidar el partido desde `Equipos`.
