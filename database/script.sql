CREATE DATABASE mercado;

USE mercado;

CREATE TABLE lista_compras(
id int not null AUTO_INCREMENT,
nome varchar(50),
valor float,
PRIMARY KEY (id));

