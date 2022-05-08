# Uso de bootstrap con npm y webpack

Iniciamos el proyecto
`npm init`

Instalamos las dependencias (algo como esto)
`npm install bootstrap`
`npm install @popperjs/core`
`npm install -D autoprefixer css-loader node-sass postcss-loade sass-loader style-loader webpack webpack-cli`

Creamos el webpack.config con la configuración básica y el script de build en package.json
`"build": "webpack && cp src/index.html dist/index.html`

Se importan los archivos necesarios de bootsrap en scss y js.
En index html importamos el bundle.js
`npm run build`

Y en la carpeta dist nos generará el bundle con bootsrap incluido