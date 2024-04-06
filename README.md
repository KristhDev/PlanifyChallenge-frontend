# PlanifyChallenge

Esta es una prueba técnica para la una postulación de trabajo. Este documento explica cómo levantar el proyecto y correr las 
pruebas. Puede probar la aplicación aqui: (https://planify-challenge-kristhdev.vercel.app)[https://planify-challenge-kristhdev.vercel.app].

## 1. Levantar el proyecto
Este proyecto usa una API para obener los datos, está se encuentra en el siguiente repositorio: (PlanifyChallenge-backend)[https://github.com/KristhDev/PlanifyChallenge-backend]. Lo puede clonar para ejecutarlo en su equipo o de lo contrario puede usar la url 
del api desplegada ```https://planify-challenge-backend.vercel.app```.

### 1.1. Clonar el repositorio
Lo primero que se debe hacer es clonar el repositorio con el siguiente comando:

```bash
git clone https://github.com/KristhDev/PlanifyChallenge-frontend.git
```

### 1.2. Instalar dependencias
Ahora se deben instalar las dependencias del proyecto, haga un ```cd``` al directorio del proyecto y ejecute el siguiente comando:

```bash
pnpm install
```

Como habra notado el proyecto usa pnpm como gestor de dependencias, pero no está obligado a usarlo, puede cambiarlo por yarn o npm.
Solo asegurese de borrar el archivo ```pnpm-lock.yaml```.

### 1.3. Variables de entorno
El proyecto tiene el archivo .env con la variable VITE_API_URL y la dirección local del API, lo puede dejar así o cambiar por la 
URL del API desplegada. En un escenario real este tipo de archivo no se sube al repositorio, pero al ser una prueba técnica y no 
ser una aplicación real, considere que no hay problema en subirlo.

### 1.4. Levantar el proyecto
Ya con las dependencias instaladas y con el API corriendo en su equipo o usando la URL del API desplegada ejecute el siguiente comando:

```bash
pnpm dev
```

Y listo ya podrá abrir el proyecto en el navegador (http://localhost:5173)[http://localhost:5173].

## 2. Testing
En el proyecto se realizó el testing para garantizar el correcto funcionamiento del proyecto y la detección de errores.

### 2.1. Rama testing
En la rama de testing se encuentran todas las pruebas, por lo que primero hay que moverse a esa rama, eso se hace con este comando:

```bash
git switch testing
```

### 2.2. Instalar dependencias
Ahora se deben instalar las dependencias del proyecto, haga un ```cd``` al directorio del proyecto y ejecute el siguiente comando:

```bash
pnpm install
```

### 2.3. Variables de entorno
Recuerde que siempre debe tener las variables de entorno en el archivo .env. Esas son las mismas que en la sección 1.3.

### 2.4. Ejecutar pruebas
Hay varios comandos para ejecutar los pruebas, con distintos propositos, esos son:

#### 2.4.1 Ejecutar todas los pruebas
Ese comando es para ejecutar todos los pruebas que se encuentren:

```bash
pnpm test
```

#### 2.4.2 Ejecutar pruebas unitarias
Ese comando es para ejecutar los pruebas unitarios, que se encuentran en el directorio unit dentro de tests:

```bash
pnpm test:unit
```

#### 2.4.3 Ejecutar pruebas de ui
Vitest da un modo UI para ver las pruebas desde el navegador y ver como se conectan los tests entre si:

```bash
pnpm test:ui
```

#### 2.4.4 Ejecutar pruebas modo coverage
El coverage es para crear un reporte que mostrará el porcentaje de pruebas que se han ejecutado y código comprobado, este crea 
un directorio coverage dentro de carpeta tests:

```bash
pnpm test:coverage
```