const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./src/app/controllers/usersController.js']

swaggerAutogen(outputFile, endpointsFiles).then(() => {
    require('./index.js')
})