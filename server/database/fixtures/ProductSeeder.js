/* eslint-disable camelcase */
const product = require("../data/product.json");

const AbstractSeeder = require("./AbstractSeeder");

class ProductSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "product", truncate: true });
  }

  run() {
    for (let i = 0; i < product.length; i += 1) {
      const products = product[i];
      const { name, description, image, prix, stock, category_id } = products;
      this.insert({
        name,
        description,
        image,
        prix,
        stock,
        category_id,
      });
    }
  }
}

module.exports = ProductSeeder;