CREATE TABLE IF NOT EXISTS banco.tabela (
  id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  mensagem VARCHAR(64) NOT NULL
);

INSERT INTO banco.tabela (mensagem) VALUES ("item 0"), ("item 1"), ("item 2");