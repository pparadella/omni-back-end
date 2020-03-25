const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) =>{
    return response.json([{
        name: 'Pedro Paradella2',
        mat: 2222
    }]);
});

module.exports = routes;