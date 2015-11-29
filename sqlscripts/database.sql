CREATE SCHEMA `oc_database` ;

CREATE TABLE `oc_database`.`oc_transactions` (
  `id` INT NOT NULL COMMENT '',
  `client_id` INT NULL COMMENT '',
  `store_id` INT NULL COMMENT '',
  `transaction_id` INT NULL COMMENT '',
  `transaction_type` VARCHAR(2) NULL COMMENT '',
  `transaction_items` LONGTEXT NULL COMMENT '',
  PRIMARY KEY (`id`)  COMMENT '');


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
