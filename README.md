Instalación y Configuración
Este proyecto utiliza Playwright para la automatización de pruebas y Allure para generar reportes detallados. A continuación, te explicamos los pasos necesarios para configurar el entorno.

1. Requisitos Previos
Antes de empezar, asegúrate de tener instalados los siguientes componentes:

Node.js (versión 16 o superior)
npm o yarn para gestionar dependencias
Verificar instalación de Node.js y npm:
node -v   # Debería mostrar la versión de Node.js
npm -v    # Debería mostrar la versión de npm
2. Clonar el repositorio
Clona este repositorio en tu máquina local usando el siguiente comando:

git clone https://github.com/afnaviaz/Automation-PlaywrightQA.git
Luego, navega al directorio del proyecto clonado:

cd <nombre-del-directorio>
3. Instalar dependencias
Para instalar las dependencias del proyecto, incluyendo Playwright, ejecuta el siguiente comando dentro de la carpeta del proyecto:

npm init -y
Esto descargará e instalará todas las dependencias necesarias definidas en el archivo package.json.

4. Instalar Playwright
Si Playwright no se ha instalado automáticamente con las dependencias, puedes instalarlo manualmente ejecutando:

npm install @playwright/test --save-dev
5. Instalar Allure para generar reportes
Para utilizar Allure como generador de reportes, sigue estos pasos:

5.1 Instalar Allure como dependencia de desarrollo
Añade Allure como dependencia de desarrollo a tu proyecto:

npm install allure-playwright --save-dev
5.2 Verificar la instalación de Allure
Para asegurarte de que Allure está correctamente instalado, ejecuta:

allure --version
5.3 Configurar Allure en Playwright:
Para habilitar los reportes de Allure en Playwright, necesitas agregar el plugin de Allure en tu archivo de configuración de Playwright (playwright.config.ts o playwright.config.js).

Ejemplo de configuración básica: Si tienes un archivo playwright.config.ts, añade lo siguiente:

import { defineConfig } from '@playwright/test';

export default defineConfig({
  reporter: [
    ['list'],
    ['allure-playwright']
  ],
  use: {
    // Configuraciones adicionales si las necesitas
  },
});
6. Ejecución de pruebas
Para ejecutar las pruebas automatizadas de Playwright, simplemente ejecuta el siguiente comando:

npx playwright test
7. Generar reportes Allure
Después de ejecutar las pruebas, puedes generar un reporte de Allure con el siguiente comando

npx allure generate ./allure-results --clean
Esto generará un reporte HTML que puedes abrir en tu navegador ejecutando:

npx allure open
Resumen de pasos:
Copia el proyecto al repositorio clonado.
Inicializa el proyecto Node.js si es necesario (npm init -y).
Instala Playwright (npm install @playwright/test --save-dev).
Instala Allure Playwright (npm install allure-playwright --save-dev).
Configura el reporte Allure en playwright.config.ts.
Ejecuta las pruebas con npx playwright test.
Genera y visualiza el reporte con Allure (npx allure generate y npx allure open).