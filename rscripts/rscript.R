#install.packages("RMySQL");
#install.packages("jsonlite");
#install.packages("data.table");
library(RMySQL); #Carregando a Lib RMySQL
library(dplyr);
library(arules);
library(jsonlite);
library(data.table);
#mydb = dbConnect(MySQL(), user='hackathon', password='hackainm', dbname='hackathon-commerce', host='hackathon.cgzz1hagylvs.us-east-1.rds.amazonaws.com');

mydb = dbConnect(MySQL(), user='api_usr', password='z"lD2v', dbname='oc_database', host='127.0.0.1', port=3306);



#rs = dbSendQuery(mydb, "Select
#t1.id_order,
#t4.product_name
#from ps_orders t1
#left outer join ps_order_detail t4 on t1.id_order = t4.id_order");

rs = dbSendQuery(mydb, "SELECT id, client_id, store_id, transaction_id, transaction_type, transaction_items FROM oc_transactions where transaction_type = 'P'");


my_data <- fetch(rs, n=-1);
#TS <- my_data %>% group_by(id_order) %>% summarise(vector=paste(product_name, collapse=","));

write.csv(my_data, file = "data.csv")


tr <- read.transactions("data.csv", format = "single", sep ="," , cols = c("transaction_id","transaction_items"), rm.duplicates=TRUE); #Alterar Par�metros

#tr <- read.transactions("data.csv", format = "basket", sep ="," , cols = 6 );

#m1 <- apriori(tr, parameter = list(support=0.007, confidence= 0.15, minlen = 2)); #Alterar Par�metros
invisible(m1 <- apriori(tr, parameter = list(support=0.001, confidence= 0.20)))

dfrules <- as(m1, "data.frame")

SplittedDF <- data.frame(do.call('rbind', strsplit(as.character(dfrules$rules),'=>', fixed=TRUE)))
dfrules$ruleif <- SplittedDF["X1"]
dfrules$rulethen <- SplittedDF["X2"]




cat(toJSON(dfrules));
dbDisconnect(mydb);





