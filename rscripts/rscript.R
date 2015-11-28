#install.packages("RMySQL");
library(RMySQL); #Carregando a Lib RMySQL
library(dplyr);
library(arules);
mydb = dbConnect(MySQL(), user='hackathon', password='hackainm', dbname='hackathon-commerce', host='hackathon.cgzz1hagylvs.us-east-1.rds.amazonaws.com');

rs = dbSendQuery(mydb, "Select
t1.id_order,
t4.product_name
from ps_orders t1
left outer join ps_order_detail t4 on t1.id_order = t4.id_order");

my_data <- fetch(rs, n=-1);
#TS <- my_data %>% group_by(id_order) %>% summarise(vector=paste(product_name, collapse=","));

write.csv(my_data, file = "data.csv", row.names=FALSE)

tr <- read.transactions("data.csv", format = "single",sep ="," , cols = c(1,2))

m1 <- apriori(tr, parameter = list(support=0.007, confidence= 0.15, minlen = 2))


inspect(m1)


