const fs = require("fs");
const PDFDocument = require("pdfkit");
const swaggerJson = require("../swagger-output/swagger.json"); // Path to your Swagger JSON

// Create a new PDF document
const doc = new PDFDocument();
doc.pipe(fs.createWriteStream("API_Documentation.pdf"));

// Add the title of the PDF
doc.fontSize(20).text("API Documentation", { align: "center" });
doc.moveDown(2);

// Helper function to render tables
function renderTable(headers, rows) {
  const colWidth = 150;
  let y = doc.y;

  // Render headers
  doc
    .fontSize(12)
    .font("Helvetica-Bold")
    .text(headers[0], 50, y, { width: colWidth });
  doc.text(headers[1], 200, y, { width: colWidth });
  doc.text(headers[2], 350, y, { width: colWidth });
  y += 20;

  // Draw the divider
  doc.lineWidth(0.5).moveTo(50, y).lineTo(500, y).stroke();
  y += 10;

  // Render rows
  doc.fontSize(10).font("Helvetica");
  rows.forEach((row) => {
    doc.text(row[0], 50, y, { width: colWidth });
    doc.text(row[1], 200, y, { width: colWidth });
    doc.text(row[2], 350, y, { width: colWidth });
    y += 20;
  });

  doc.moveDown(1);
}

// Extract schema properties from Swagger JSON
const schemaProperties =
  swaggerJson.paths["/booking_api"].post.requestBody.content["application/json"]
    .schema.properties;
const fields = [];

// Traverse the schema properties and add them to the fields array
function extractFields(properties, parentKey = "") {
  for (let key in properties) {
    const property = properties[key];
    const fieldName = parentKey ? `${parentKey}.${key}` : key; // Handle nested fields

    // Check for nested objects or arrays
    if (property.type === "object") {
      extractFields(property.properties, fieldName); // Recurse for objects
    } else if (
      property.type === "array" &&
      property.items &&
      property.items.type === "object"
    ) {
      extractFields(property.items.properties, fieldName); // Recurse for array of objects
    } else {
      // Push field data
      fields.push([
        fieldName,
        property.type,
        property.example || "No example available",
      ]);
    }
  }
}

extractFields(schemaProperties); // Start extracting fields

// Add the schema section to the PDF
doc
  .fontSize(16)
  .text("Request Body (application/json) Schema", { underline: true });
doc.moveDown(2);

// Render the table with extracted fields
renderTable(["Field", "Data type", "Required"], fields);

// Finalize the document
doc.end();
console.log("PDF documentation generated!");
