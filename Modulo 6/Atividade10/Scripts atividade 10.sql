CREATE DATABASE atividade10;

CREATE TABLE alunos (

	id_aluno INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	curso VARCHAR(100),
	nivel VARCHAR(100),
	idade INT

);

CREATE TABLE turmas (
	
	id_turma INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	nome VARCHAR(100) NOT NULL,
	sala VARCHAR(20),
	horario TIME
	
);

CREATE TABLE matricula (

	id_mat INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
	aluno_fk INT,
	turma_fk INT,
	nota1 DECIMAL(5,2),
	nota2 DECIMAL(5,2),
	nota3 DECIMAL(5,2),
	nota_final DECIMAL(5,2),
	num_faltas INT,
	FOREIGN KEY (aluno_fk) REFERENCES alunos(id_aluno),
	FOREIGN KEY (turma_fk) REFERENCES turmas(id_turma)

);

INSERT INTO `alunos`(`nome`, `curso`, `nivel`, `idade`) VALUES 
('ana','quimica','graduacao','20'),
('jose','fisica','graduacao','18'),
('joao','matematica','graduacao','22'),
('rick','fisica','mestrado','30'),
('maria','fisica','mestrado','28'),
('luis','quimica','graduacao','25'),
('lais','fisica','graduacao','20'),
('bob','matematica','graduacao','18');


INSERT INTO `turmas`(`nome`, `sala`, `horario`) VALUES 
('fisica geral 1','sala 1','08:00:00'),
('quimica geral 1','sala 2','14:00:00'),
('fisica geral 2','sala 2','10:00:00'),
('fisica geral 3','sala 3','08:00:00'),
('calculo 1','sala 5','10:00:00'),
('calculo 2','sala 1','13:00:00'),
('calculo 3','sala 4','15:00:00'),
('geometria analinica','sala 5','13:00:00');

INSERT INTO `matricula`(`aluno_fk`, `turma_fk`, `nota1`, `nota2`, `nota3`, `nota_final`, `num_faltas`) VALUES 
('1','1','5','8','9','0','0'),
('2','1','2','3','5','5','5'),
('3','2','8','8','8','0','1'),
('1','3','4','3','7','4','8'),
('3','4','10','2','9','0','0'),
('5','5','1','0','0','0','15'),
('6','5','9','8','10','0','2'),
('2','1','2','5','8','7','5');


----------------------------------------------------------------------------------------

-- 1

SELECT a.nome FROM alunos a;

-- 2

SELECT m.id_mat FROM matricula m;

-- 3

SELECT m.id_mat FROM matricula m WHERE turma_fk IS NULL;

-- 4

SELECT m.aluno_fk FROM matricula m WHERE turma_fk = 1;

--5

SELECT t.horario 
FROM alunos a INNER JOIN matricula m ON a.id_aluno = m.aluno_fk INNER JOIN turmas t ON t.id_turma = m.turma_fk
WHERE a.nome = 'ana';
 