CREATE TABLE users (

    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(100) UNIQUE NOT NULL,
    pass VARCHAR(100) NOT NULL,
    role VARCHAR(10)

);


