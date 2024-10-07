CREATE DATABASE atividade12;

------------------------------------------------------------------------------------------

CREATE TABLE alunos (

	id_aluno INT AUTO_INCREMENT PRIMARY KEY,
	cod_mat VARCHAR(20) UNIQUE NOT NULL,
	dt_mat DATE NOT NULL,
	nome VARCHAR(255) NOT NULL,
	endereco VARCHAR(255),
	fone VARCHAR(15),
	dtnsc DATE,
	altura DECIMAL(4,2),
	peso DECIMAL(4,2)

);

CREATE TABLE professores (

	id_professor INT AUTO_INCREMENT PRIMARY KEY,
	cpf VARCHAR(11) UNIQUE NOT NULL,
	nome VARCHAR(255) NOT NULL,
	dtnsc DATE,
	titulacao VARCHAR(100)

);

CREATE TABLE foneProfesor (

	if_fone INT AUTO_INCREMENT PRIMARY KEY,
	id_prof INT,
	fone VARCHAR(20) NOT NULL,
	FOREIGN KEY (id_prof) REFERENCES professores(id_professor) ON DELETE CASCADE
	
);

CREATE TABLE turmas (

	id_turma INT AUTO_INCREMENT PRIMARY KEY,
	qtd_alunos INT NOT NULL,
	horario TIME NOT NULL,
	duracao TIME NOT NULL,
	dt_inicio DATE NOT NULL,
	dt_fim DATE NOT NULL,
	tipo_curso VARCHAR(100) NOT NULL,
	id_prof INT,
	id_monitor INT UNIQUE,
	FOREIGN KEY (id_prof) REFERENCES professores(id_professor) ON DELETE CASCADE,
	FOREIGN KEY (id_monitor) REFERENCES alunos(id_aluno)

);

CREATE TABLE matricula (

	id_mat INT AUTO_INCREMENT PRIMARY KEY,
	id_aluno INT,
	id_turma INT,
	faltas INT DEFAULT 0,
	FOREIGN KEY (id_aluno) REFERENCES alunos(id_aluno) ON DELETE CASCADE,
	FOREIGN KEY (id_turma) REFERENCES turmas(id_turma) ON DELETE CASCADE

);


------------------------------------------------------------------------------------------

INSERT INTO `alunos`(`cod_mat`, `dt_mat`, `nome`, `endereco`, `fone`, `dtnsc`, `altura`, `peso`) VALUES 
('23568974','2024-02-02','jose','avenida lalala','98566-8754','2015-05-20','1.8','80'),
('20359774','2024-02-04','ana','avenida kfkfkfkf','95246-6320','1999-02-02','1.60','55.2'),
('20157896','2024-02-01','maria','rua jjfjfjf','96325-8522','2005-05-14','1.59','70.5'),
('30214589','2024-02-05','joao','rua fhhgjhg','99952-5552','2001-03-07','1.78','100.5');

INSERT INTO `professores`(`cpf`, `nome`, `dtnsc`, `titulacao`) VALUES 
('12345679126','rick','1980-07-01','PHD em fisica'),
('98765432101','lucas','1975-09-25','PHD em matematica'),
('36925814705','eva','1960-10-22','PHD em quimica');

INSERT INTO `foneprofesor`(`id_prof`, `fone`) VALUES 
('1','98574-9633'),
('2','98520-9633'),
('3','97412-9633');

INSERT INTO `turmas`(`qtd_alunos`, `horario`, `duracao`, `dt_inicio`, `dt_fim`, `tipo_curso`, `id_prof`, `id_monitor`) VALUES 
('30','08:00:00','02:00:00','2024-10-20','2025-03-20','fisica geral 1','1','1'),
('45','10:00:00','02:00:00','2024-10-20','2025-03-20','calculo 1','2','2');

INSERT INTO `matricula`(`id_aluno`, `id_turma`, `faltas`) VALUES 
('2','1','2'),
('3','1','0'),
('4','2','5'),
('1','2','0');


------------------------------------------------------------------------------------------

-- 1

SELECT * 
FROM alunos;

-- 2

SELECT a.nome, t.tipo_curso 
FROM alunos a INNER JOIN matricula m ON a.id_aluno = m.id_aluno INNER JOIN turmas t ON t.id_turma = m.id_turma;

-- 3

SELECT a.nome
FROM alunos a INNER JOIN matricula m ON a.id_aluno = m.id_aluno
WHERE m.faltas = 0;

-- 4

SELECT p.nome, COUNT(t.id_turma) as QTD_Turmas
FROM professores p INNER JOIN turmas t ON p.id_professor = t.id_prof
GROUP BY p.nome;

-- 5

SELECT p.nome as professor, MIN(f.fone), t.id_turma, t.dt_inicio, t.dt_fim, t.horario, t.tipo_curso, a.nome as alunos_matriculados
FROM professores p INNER JOIN foneProfesor f on p.id_professor = f.id_prof INNER JOIN turmas t ON p.id_professor = t.id_prof INNER JOIN matricula m ON t.id_turma = m.id_turma INNER JOIN alunos a ON a.id_aluno = m.id_aluno
GROUP BY p.nome, t.id_turma, a.nome
ORDER BY p.nome, t.id_turma, a.nome;

-- 6

UPDATE professores SET nome = UPPER(nome);

-- 7 

UPDATE alunos SET nome = UPPER(nome) 
WHERE id_aluno in 
					( SELECT m.id_aluno 
					  FROM matricula m INNER JOIN turmas t on m.id_turma = t.id_turma
					  WHERE t.qtd_alunos = 
											( SELECT MAX(t.qtd_alunos)
											  FROM turmas t)
					);

-- 8

UPDATE matricula m
JOIN turmas t ON t.id_turma = m.id_turma
SET m.faltas = 0
WHERE m.id_aluno = t.id_monitor;