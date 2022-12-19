const container = require('./Infrastructures/container');
const server = require('./Infrastructures/http/createServer');
const UserRoutes = require('./Interfaces/http/api/routes/UserRoutes');

server.use('/api/users', UserRoutes(container));

server.listen(3000);
