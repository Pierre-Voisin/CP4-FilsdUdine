
CREATE TABLE role (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL
);


CREATE TABLE category (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL
);


CREATE TABLE product (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  image VARCHAR(255),
  prix DECIMAL(10, 2),
  stock INT,
  category_id INT UNSIGNED,
  FOREIGN KEY (category_id) REFERENCES category(id)
);


CREATE TABLE user (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  lastname VARCHAR(255) NOT NULL,
  firstname VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  zipcode INT,
  city VARCHAR(255) NOT NULL,
  role_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (role_id) REFERENCES role(id)
);


CREATE TABLE `order` (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  order_date DATE,
  status VARCHAR(100),
  quantity INT,
  user_id INT UNSIGNED NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id)
);


CREATE TABLE orderproduct (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  order_id INT UNSIGNED,
  product_id INT UNSIGNED,
  FOREIGN KEY (order_id) REFERENCES `order`(id),
  FOREIGN KEY (product_id) REFERENCES product(id)
);



INSERT INTO role (name) VALUE ('user'), ('admin');