CREATE TABLE users (

    id_user USING BIGINT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    pass VARCHAR(100),

);


