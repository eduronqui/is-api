#install.packages("RMySQL");
#install.packages("jsonlite");
#install.packages("data.table");
library(RMySQL); #Carregando a Lib RMySQL
library(dplyr);
library(arules);
library(jsonlite);
library(data.table);
#mydb = dbConnect(MySQL(), user='hackathon', password='hackainm', dbname='hackathon-commerce', host='hackathon.cgzz1hagylvs.us-east-1.rds.amazonaws.com');

mydb = dbConnect(MySQL(), user='root', password='1234', dbname='oc_database', host='192.168.99.100', port=32779);



#rs = dbSendQuery(mydb, "Select
#t1.id_order,
#t4.product_name
#from ps_orders t1
#left outer join ps_order_detail t4 on t1.id_order = t4.id_order");

rs = dbSendQuery(mydb, "SELECT * FROM oc_transactions where transaction_type = 'P'");


my_data <- fetch(rs, n=-1);
#TS <- my_data %>% group_by(id_order) %>% summarise(vector=paste(product_name, collapse=","));

write.csv(my_data, file = "data.csv")


tr <- read.transactions("data.csv", format = "single", sep ="," , cols = c("transaction_id","transaction_items")); #Alterar Parâmetros

#tr <- read.transactions("data.csv", format = "basket", sep ="," , cols = 6 );

#m1 <- apriori(tr, parameter = list(support=0.007, confidence= 0.15, minlen = 2)); #Alterar Parâmetros
m1 <- apriori(tr, parameter = list(support=0.001, confidence= 0.20))

inspect(m1)

dfrules <- as(m1, "data.frame")

SplittedDF <- data.frame(do.call('rbind', strsplit(as.character(dfrules$rules),'=>', fixed=TRUE)))
dfrules$ruleif <- SplittedDF["X1"]
dfrules$rulethen <- SplittedDF["X2"]




cat(toJSON(dfrules));
dbDisconnect(mydb);





