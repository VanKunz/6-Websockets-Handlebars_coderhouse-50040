

const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const exphbs = require('express-handlebars');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Configurar rutas y manejo de vistas aquí

server.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});


app.get('/', (req, res) => {
    res.render('index');
  });
  
  app.get('/realtimeproducts', (req, res) => {
    res.render('realTimeProducts');
  });


io.on('connection', (socket) => {
    console.log('Cliente conectado');
  
    // Aquí debes implementar la lógica para enviar y recibir mensajes desde los sockets
    // por ejemplo, actualizar la lista de productos cuando se crea o elimina uno.
  
    // Ejemplo:
    // socket.on('nuevoProducto', (producto) => {
    //   // Lógica para agregar el nuevo producto y emitir la actualización
    //   io.emit('actualizarProductos', listaDeProductos);
    // });
  
    // socket.on('eliminarProducto', (productoId) => {
    //   // Lógica para eliminar el producto y emitir la actualización
    //   io.emit('actualizarProductos', listaDeProductos);
    // });
  });
  