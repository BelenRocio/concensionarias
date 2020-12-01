const express = require('express')
const app = express()

const autosRoutes = require('./routes/autos');
const homeRoutes = require('./routes/home');
const marcasRoutes = require('./routes/marcas');
const sucursalesRoutes = require('./routes/sucursales');

app.listen(3030, () => console.log('Server running in 3030 port'));

app.use('/', homeRoutes);
app.use('/autos', autosRoutes);
app.use('/marcas', marcasRoutes);
app.use('/sucursales', sucursalesRoutes);