import { Request, Response, Router } from "express";
import products from "../controllers/products.controllers";
import cacheInit from "../../../middlewares/cache.config";

const routerMarkProducts = Router();
const path = "/api/v1/employees/products";
const productsControllers = new products();

// ? endpoint para crear un producto
// routerMarkProducts.post(`${path}/create-product`, (req: Request, res: Response) => {
//     productsControllers.createProduct(req, res)
// })

// ? endpoint para marcar como vendidos
routerMarkProducts.post(`${path}/mark-sold/:productId`, (req: Request, res: Response) => {
  productsControllers.markProductIsSold(req, res);
});

// ? endpoint para mostrar los que no fueron vendidos
routerMarkProducts.get(
  `${path}/unsold-products`,
  cacheInit,
  (req: Request, res: Response) => {
    productsControllers.productsUnsolds(req, res);
  }
);

// ? endpoint para mostrar los que ya fueron vendidos
routerMarkProducts.get(
  `${path}/solds-products`,
  cacheInit,
  (req: Request, res: Response) => {
    productsControllers.productsSolds(req, res);
  }
);
export default routerMarkProducts;
