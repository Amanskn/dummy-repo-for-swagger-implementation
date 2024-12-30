const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

// Swagger definition
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Implementation of swagger for dummy APIs", // API title
      version: "1.0.0", // API version
      description: "Below are some apis with their information", // Description
    },
    servers: [
      {
        url: "http://localhost:3000/api/v1", // Base URL
      },
    ],
  },
  apis: ["./index.js", "./routes/*.js"], // Files containing Swagger annotations
};

// Generate Swagger docs
const swaggerSpec = swaggerJsdoc(options);

module.exports = { swaggerUi, swaggerSpec };
