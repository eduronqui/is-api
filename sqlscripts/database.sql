CREATE SCHEMA oc_database ;

<<<<<<< HEAD
CREATE TABLE `oc_database`.`oc_transactions` (
  `id` INT NOT NULL COMMENT '',
  `client_id` INT NULL COMMENT '',
  `store_id` INT NULL COMMENT '',
  `transaction_id` INT NULL COMMENT '',
  `transaction_type` VARCHAR(2) NULL COMMENT '',
  `transaction_items` LONGTEXT NULL COMMENT '',
  PRIMARY KEY (`id`)  COMMENT '');
=======
CREATE TABLE oc_database.oc_transactions (
  id INT NOT NULL AUTO_INCREMENT ,
  client_id INT NOT NULL,
  transaction_id INT NOT NULL,
  store_id INT NOT NULL,
  transaction_type VARCHAR(2) NOT NULL,
  item VARCHAR(20) NOT NULL,
  PRIMARY KEY (id));
>>>>>>> 890b59b0b78ee56cfed302d81d6def9f1ccdb487


  CREATE TABLE `oc_database`.`oc_rules` (
  `id_oc_rules` INT NOT NULL COMMENT '',
  `rules` VARCHAR(200) NULL COMMENT '',
  `support` FLOAT NULL COMMENT '',
  `confidence` FLOAT NULL COMMENT '',
  `lift` FLOAT NULL COMMENT '',
  `X1` VARCHAR(45) NULL COMMENT '',
  `X2` VARCHAR(45) NULL COMMENT '',
  `store_id` VARCHAR(45) NULL COMMENT '',
  PRIMARY KEY (`id_oc_rules`)  COMMENT '');
