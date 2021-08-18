const ProductController = require("../controllers/product.controller");

module.exports = (app) => {
  app.post("/api/product", ProductController.addNewProduct);
  app.get("/api/product", ProductController.getAllProducts);
  app.delete("/api/product/:productId", ProductController.deleteProduct);
  app.get("/api/product/:productId", ProductController.getOneProduct);
  app.put("/api/product/:productId", ProductController.updateProduct);
};
