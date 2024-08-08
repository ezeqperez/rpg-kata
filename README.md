Para inicializar el proyecto, sigue estos pasos:

Inicializa el proyecto y añade TypeScript:

npm init -y
npm install --save-dev typescript

Configura TypeScript:

npx tsc --init


Instala Jest y las demás dependencias:

npm install --save-dev jest ts-jest @types/jest


Configura Jest para TypeScript:

npx ts-jest config:init


Esto te permitirá realizar pruebas unitarias con Jest en tu proyecto TypeScript.