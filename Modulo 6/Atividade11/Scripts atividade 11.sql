CREATE DATABASE atividade11;

------------------------------------------------------------------------------------------

CREATE TABLE cardapio (

	id_cardapio INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	nome VARCHAR(100) UNIQUE NOT NULL,
	descricao VARCHAR(255),
	preco DECIMAL(5,2) NOT NULL

);

CREATE TABLE comanda (
	
	id_comanda INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	data_comanda DATE NOT NULL,
	mesa INT NOT NULL,
	cliente VARCHAR(100) NOT NULL
	
);

CREATE TABLE itens (

	id_item INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	fk_comanda INT NOT NULL,
	fk_cardapio INT NOT NULL,
	qtd INT NOT NULL,
	valor_total DECIMAL(5,2) NOT NULL,
	FOREIGN KEY (fk_cardapio) REFERENCES cardapio(id_cardapio),
	FOREIGN KEY (fk_comanda) REFERENCES comanda(id_comanda),
	UNIQUE(fk_cardapio,fk_comanda)

);

------------------------------------------------------------------------------------------

INSERT INTO `cardapio`(`nome`, `descricao`, `preco`) VALUES 
('Expresso','cafe puro','4.5'),
('Cappuccino','cafe expresso com leite e espuma','7.5');

INSERT INTO `comanda`(`data_comanda`, `mesa`, `cliente`) VALUES 
('2024-09-18','8','jose'),
('2024-09-18','1','ana');

INSERT INTO `itens`(`fk_comanda`, `fk_cardapio`, `qtd`, `valor_total`) VALUES 
('1','1','3','13.5'),
('1','2','1','7.5'),
('2','1','1','4.5');


------------------------------------------------------------------------------------------

-- 1

SELECT * FROM cardapio c ORDER by c.nome;

-- 2

SELECT * 
FROM cardapio c INNER JOIN itens i ON c.id_cardapio = i.fk_cardapio INNER JOIN comanda co ON co.id_comanda = i.fk_comanda
ORDER BY co.data_comanda, c.id_cardapio, c.nome;

-- 3

SELECT c.*, SUM(i.valor_total) as total
FROM comanda c INNER JOIN itens i ON c.id_comanda = i.fk_comanda
GROUP by c.id_comanda
ORDER BY c.data_comanda;

-- 4

SELECT c.*, SUM(i.valor_total) as total
FROM comanda c INNER JOIN itens i ON c.id_comanda = i.fk_comanda
GROUP by c.id_comanda
HAVING COUNT(i.id_item) > 1
ORDER BY c.data_comanda;

--5

SELECT c.data_comanda, SUM(i.valor_total) as faturamento
FROM comanda c INNER JOIN itens i ON i.fk_comanda = c.id_comanda
GROUP BY c.data_comanda
ORDER BY c.data_comanda;
 