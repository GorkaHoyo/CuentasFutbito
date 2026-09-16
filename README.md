# Registro de Horas

App web (lista para convertir en PWA / instalar en el móvil) para llevar el registro diario de horas de trabajo por proyecto, comparando **horas trabajadas** con **horas imputadas** en el sistema corporativo, y sincronizando los datos en un repositorio de GitHub.

## Qué incluye

- `index.html` — la app (pestañas: Registro diario, Semana, Mes, Año, Rango, Proyectos, Configuración)
- `app.js` — toda la lógica
- `manifest.json` + `sw.js` — para poder instalarla como PWA (Android/desktop) y usarla offline
- `icon-192.png`, `icon-512.png` — iconos de la app
- `data.json` — datos iniciales (proyectos con el saldo de horas imputadas a día de hoy, sacado del sistema corporativo, y el desfase conocido de E-MAR)

## Cómo funciona

- Cada día se registra: hora de entrada, hora de salida, minutos de comida, otras pausas y horas extra (nocturnas o en otro momento), y luego una o varias líneas de **proyecto + horas trabajadas + horas imputadas + descripción de la tarea**.
- La app calcula la "jornada" (entrada→salida menos pausas más extra) y la compara con la suma de horas repartidas entre proyectos, para que cuadren.
- Por defecto, horas imputadas = horas trabajadas en cada línea; si el sistema corporativo no te deja imputar más en un proyecto ese trimestre, edita el campo "Horas imputadas" a mano (se desacopla del campo trabajadas) y la diferencia queda registrada como **desfase** de ese proyecto.
- La pestaña **Año** y la pestaña **Proyectos** muestran, para cada proyecto, el total trabajado, el total imputado y el desfase acumulado (incluyendo el saldo inicial que ya traía cada proyecto antes de usar la app), con un aviso de "desfases pendientes de imputar" para que sepas qué regularizar la primera semana del siguiente trimestre/semestre.
- Los proyectos se pueden crear, renombrar, desactivar (dejan de aparecer como opción nueva pero se conserva su histórico) o borrar.

### Datos iniciales cargados

En `data.json` ya están dados de alta los proyectos con su saldo de horas **imputadas** acumuladas hasta la semana pasada (lo que aparecía en el sistema corporativo), tomado de las capturas que compartiste. El proyecto **E-MAR** además lleva un desfase inicial de **2,75 h** (trabajadas por encima de imputadas). A partir del lunes de esta semana, los días se registran ya con detalle día a día en la app.

## Cómo desplegarlo

1. Crea un repositorio en GitHub (por ejemplo `RegistroHoras`, público para poder usar GitHub Pages gratis, igual que hiciste con `CuentasFutbito`).
2. Sube todos los ficheros de esta carpeta a la raíz del repo (o a una carpeta y ajusta la ruta en Pages).
3. En el repo, ve a **Settings → Pages**, elige la rama (`main`) y la carpeta raíz. Guarda: en un par de minutos tendrás la URL pública (`https://<usuario>.github.io/<repo>/`).
4. Abre esa URL en el móvil y, desde el menú del navegador, elige "Añadir a pantalla de inicio" / "Instalar app" para tenerla como una PWA.

## Sincronización con GitHub (guardar los datos en el repo)

La app puede guardar automáticamente el fichero `data.json` en tu repositorio cada vez que registras un día, igual que hace la app de Cuentas Futbol.

1. Crea un **Personal Access Token** en GitHub: `Settings → Developer settings → Personal access tokens → Fine-grained tokens`, con permiso de **lectura y escritura sobre "Contents"** solo para el repo de esta app (o un token clásico con scope `repo` si prefieres uno más simple).
2. En la app, ve a la pestaña **Configuración** y rellena: usuario/organización, nombre del repositorio, rama (`main`), ruta del fichero (`data.json`) y pega el token.
3. Pulsa **Guardar configuración** y luego **⬇ Cargar desde GitHub** la primera vez (o **⬆ Subir a GitHub** si quieres que el repo se quede con lo que tengas en local ahora mismo).
4. A partir de ahí, con "Auto-sync al guardar" activado, cada vez que guardes un día se subirá automáticamente al repo unos segundos después.

**Importante sobre el token:** se guarda solo en el `localStorage` de tu navegador, nunca se envía a ningún sitio salvo a la API de GitHub. Si usas la app desde varios dispositivos, tendrás que configurar el token en cada uno (y usar "Cargar desde GitHub" al entrar para traer lo último). Si compartes el ordenador con alguien, no dejes el token guardado.

## Copia de seguridad local

En Configuración también hay botones para **exportar** el `data.json` actual a un fichero descargable, o **importar** uno (por si quieres restaurar una copia o mover los datos manualmente sin usar GitHub).

## Estructura del JSON

```json
{
  "meta": { "version": 1, "lastUpdated": "...", "baselineDate": "2026-09-14" },
  "projects": [
    { "id": "e-mar", "name": "E-MAR", "active": true, "color": "#f75f5f",
      "carryOverImputadas": 300.12, "carryOverDesfase": 2.75 }
  ],
  "entries": [
    { "date": "2026-09-15", "entrada": "08:00", "salida": "17:00",
      "comida": 45, "otros": 0, "extra": 0, "extraDesc": "",
      "tasks": [
        { "projectId": "e-mar", "trabajadas": 4, "imputadas": 4, "desc": "..." }
      ]
    }
  ]
}
```

`carryOverImputadas` es el saldo de horas imputadas que ya tenía el proyecto antes de empezar a usar la app; `carryOverDesfase` es el desfase (trabajadas − imputadas) que ya arrastraba en ese momento.
