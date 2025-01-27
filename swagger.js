const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const path = require("path");
const fs = require("fs");

// Combine all Swagger annotation files
const swaggerDocsPath = path.resolve(__dirname, "./swagger-docs");
const swaggerFiles = fs
  .readdirSync(swaggerDocsPath)
  .map((file) => `${swaggerDocsPath}/${file}`);

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
  apis: ["./index.js", "./routes/*.js", ...swaggerFiles], // Files containing Swagger annotations
};

// Generate Swagger docs
const swaggerSpec = swaggerJsdoc(options);

fs.writeFileSync(
  "./swagger-output/swagger.json",
  JSON.stringify(swaggerSpec, null, 2)
);
console.log("Swagger JSON generated.");

module.exports = { swaggerUi, swaggerSpec };
