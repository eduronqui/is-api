CREATE SCHEMA `oc_database` ;

CREATE TABLE `oc_database`.`oc_transactions` (
  `id` INT NOT NULL COMMENT '',
  `client_id` INT NULL COMMENT '',
  `store_id` INT NULL COMMENT '',
  `transaction_type` VARCHAR(2) NULL COMMENT '',
  `transaction_items` LONGTEXT NULL COMMENT '',
  PRIMARY KEY (`id`)  COMMENT '');

