const express = require("express");
const { swaggerUi, swaggerSpec } = require("./swagger");
const { centralRouter } = require("./routes/centralRouter");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Central Router
app.use("/api/v1", centralRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
