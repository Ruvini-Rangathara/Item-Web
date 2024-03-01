DROP DATABASE IF EXISTS thogaKade;
CREATE DATABASE IF NOT EXISTS thogaKade;

USE thogaKade;

CREATE TABLE IF NOT EXISTS item(
                     code VARCHAR(6) PRIMARY KEY,
                     description VARCHAR(50),
                     unit_price DECIMAL(8,2),
                     qty_on_hand INT(5),
                     image LONGBLOB
);

INSERT INTO item VALUES('P001','Keerisamba Retail',105.00,3000,NULL);
INSERT INTO item VALUES('P002','Keerisamba 5Kg ',525.00,200,NULL);
INSERT INTO item VALUES('P003','Keerisamba 10Kg',995.00,36,NULL);
INSERT INTO item VALUES('P004','Keerisamba 50Kg',4100.00,36,NULL);
INSERT INTO item VALUES('P005','Red Raw Rice',60.00,6000,NULL);
INSERT INTO item VALUES('P006','Red Raw Rice 10Kg Pack',560.00,300,NULL);
INSERT INTO item VALUES('P007','Red Raw Rice 50Kg Pack',5230.00,80,NULL);
INSERT INTO item VALUES('P008','White Raw Rice 5Kg Pack',275.00,130,NULL);
INSERT INTO item VALUES('P009','White Raw Rice 50Kg Pack',2600.00,13,NULL);
INSERT INTO item VALUES('P010','Wattana Dhal 500g',90.00,83,NULL);
INSERT INTO item VALUES('P011','Wattana Dhal 1Kg',170.00,40,NULL);
INSERT INTO item VALUES('P012','Mysoor Dhal 500g',90.00,89,NULL);
INSERT INTO item VALUES('P013','Mysoor Dhal 1Kg',180.00,59,NULL);
INSERT INTO item VALUES('P014','Orient Green Gram 500g',118.00,39,NULL);
INSERT INTO item VALUES('P015','Orient Green Gram 1Kg',220.00,12,NULL);
INSERT INTO item VALUES('P016','Anchor F/C Milk powder 450g',220.00,93,NULL);
INSERT INTO item VALUES('P017','Anchor F/C Milk powder 1Kg',580.00,40,NULL);
INSERT INTO item VALUES('P018','Anchor N/F Milk powder 1Kg',560.00,33,NULL);
INSERT INTO item VALUES('P019','Milo Packet 400g',240.00,33,NULL);
INSERT INTO item VALUES('P020','Lipton Ceylon Tea 100g',107.00,40,NULL);


