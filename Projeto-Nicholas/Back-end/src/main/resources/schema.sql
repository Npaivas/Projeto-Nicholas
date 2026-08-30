CREATE TABLE noticia (
id INT AUTO_INCREMENT PRIMARY KEY,
titulo VARCHAR(100) NOT NULL,
conteudo VARCHAR(1000),
autor VARCHAR(100),
categoria VARCHAR(100),
data_publicacao DATE
);