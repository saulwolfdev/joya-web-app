const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}

/**
 * assets
 * public
 * src
 *    pages
 *        home
 *            index.js
 *             // Idealmente el styles.css
 *    components
 *    redux
 *        home
 *            index.js
 *        root.js -> Configuracion global de redux
 *    navigation
 *        // Logica de navegacion
 *    scss
 */