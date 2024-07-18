// Import the repository modules responsible for handling data operations on the tables
const UserRepository = require("./models/UserRepository");
const CategoryRepository = require("./models/CategoryRepository");
const OrderProductRepository = require("./models/OrderProductRepository");
const OrderRepository = require("./models/OrderRepository");
const ProductRepository = require("./models/ProductRepository");
const RoleRepository = require("./models/RoleRepository");


// Create an empty object to hold data repositories for different tables
const tables = {};

/* ************************************************************************* */
// Register data repositories for tables
/* ************************************************************************* */
tables.user = new UserRepository;
tables.category = new CategoryRepository;
tables.orderProduct = new OrderProductRepository;
tables.order = new OrderRepository;
tables.product = new ProductRepository;
tables.role = new RoleRepository;
// Register each repository as data access point for its table


/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table

// Export the Proxy instance with custom error handling
module.exports = new Proxy(tables, {
  get(obj, prop) {
    // Check if the property (table) exists in the tables object
    if (prop in obj) return obj[prop];

    // If the property (table) does not exist, throw a ReferenceError with a custom error message
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
