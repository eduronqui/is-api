CREATE SCHEMA oc_database ;

CREATE TABLE oc_database.oc_transactions (
  id INT NOT NULL AUTO_INCREMENT ,
  client_id INT NOT NULL,
  transaction_id INT NOT NULL,
  store_id INT NOT NULL,
  transaction_type VARCHAR(2) NOT NULL,
  item VARCHAR(20) NOT NULL,
  PRIMARY KEY (id));

