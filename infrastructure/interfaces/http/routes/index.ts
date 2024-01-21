export type Route = {
  path: string;
  verb: string;
  useCase: any;
  successCode?: number;
  fileBuffer?: boolean;
};

export const routes: (dependencies: any) => Array<Route> = (dependencies: any) => [
  { path: '/departments', verb: 'POST', useCase: dependencies.createDepartment },
  { path: '/departments', verb: 'GET', useCase: dependencies.getAllDepartment },
  { path: '/departments/:id', verb: 'GET', useCase: dependencies.getDepartment },
  { path: '/categories', verb: 'GET', useCase: dependencies.getAllCategories },
  { path: '/categories', verb: 'POST', useCase: dependencies.createCategory },
  { path: '/categories/:id', verb: 'GET', useCase: dependencies.getSingleCategory },
  { path: '/categories/inDepartment/:departmentId', verb: 'GET', useCase: dependencies.getAllCategoriesInADepartment },
  { path: '/categories/inProduct/:productId', verb: 'GET', useCase: dependencies.getProductCategory },
  { path: '/customers', verb: 'POST', useCase: dependencies.createCustomer },
  { path: '/customers/:id', verb: 'PUT', useCase: dependencies.updateCustomerDetails },
  { path: '/customers/address/:id', verb: 'PUT', useCase: dependencies.updateCustomerAddress },
  { path: '/customers/:id', verb: 'GET', useCase: dependencies.getSingleCustomer },
  { path: '/customers/login', verb: 'POST', useCase: dependencies.loginCustomer },
  { path: '/products', verb: 'POST', useCase: dependencies.createProduct },
  { path: '/products', verb: 'GET', useCase: dependencies.getAllProducts },
  { path: '/products/:id', verb: 'GET', useCase: dependencies.getSingleProduct },
  { path: '/shoppingcart/generateUniqueId', verb: 'GET', useCase: dependencies.generateCartUniqueId },
  { path: '/shoppingcart/add', verb: 'POST', useCase: dependencies.addProductToShoppingCart },
  { path: '/shoppingcart/:cart_id', verb: 'GET', useCase: dependencies.getProductsInCart },
  { path: '/shoppingcart/update/:item_id', verb: 'PUT', useCase: dependencies.updateItemsQuantity },
  { path: '/shoppingcart/empty/:cart_id', verb: 'DELETE', useCase: dependencies.emptyCart },
  { path: '/shoppingcart/removeProduct/:item_id', verb: 'DELETE', useCase: dependencies.removeItemFromCart },
  { path: '/orders', verb: 'POST', useCase: dependencies.createOrder },
  { path: '/orders/:order_id', verb: 'GET', useCase: dependencies.getSingleOrder }
];
