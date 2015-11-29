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
  id_oc_rules INT NOT NULL,
  rules VARCHAR(200) NULL,
  support FLOAT NULL,
  confidence FLOAT NULL,
  lift FLOAT NULL,
  X1 VARCHAR(45) NULL,
  X2 VARCHAR(45) NULL,
  store_id VARCHAR(45) NULL,
  PRIMARY KEY (id_oc_rules));
