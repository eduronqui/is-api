CREATE SCHEMA oc_database ;

CREATE TABLE oc_database.oc_transactions (
  id INT NOT NULL AUTO_INCREMENT ,
  client_id INT NOT NULL,
  transaction_id INT NOT NULL,
  store_id INT NOT NULL,
  transaction_type VARCHAR(2) NOT NULL,
  item VARCHAR(20) NOT NULL,
  PRIMARY KEY (id));

  CREATE TABLE oc_database.oc_rules (
  id_oc_rules INT NULL,
  rules VARCHAR(200) NULL,
  support VARCHAR(20) NULL,
  confidence VARCHAR(20) NULL,
  lift VARCHAR(20) NULL,
  X1 VARCHAR(45) NULL,
  X2 VARCHAR(45) NULL,
  store_id VARCHAR(45) NULL,
  PRIMARY KEY (id_oc_rules));
