-- Criar um novo schema
CREATE SCHEMA db_live_3;

-- Criar uma tabela
CREATE TABLE db_live_3.usuarios (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(80) UNIQUE NOT NULL,
  senha VARCHAR(100) NOT NULL,
  data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Inserir um ou mais dados na tabela
INSERT INTO
  db_live_3.usuarios (name, email, senha)
VALUES
  ("Teste Nome", "teste@gmail.com", "123456");

-- Listar um ou mais dados de uma tabela
SELECT
  *
FROM
  db_live_3.usuarios;

-- Listar apenas colunas específicas de um ou mais dados na tabela
SELECT
  name,
  email
FROM
  db_live_3.usuarios;

-- Listar dados baseados em condições com WHERE
SELECT
  *
FROM
  db_live_3.usuarios
WHERE
  id = 1;

-- Importante, utilizar aspas simples na hora da comparação
SELECT
  *
FROM
  db_live_3.usuarios
WHERE
  email = 'teste@gmail.com';

SELECT
  *
FROM
  db_live_3.usuarios
WHERE
  data_criacao > 'AAAA-MM-DD';

-- Ordenação dos dados pelo ORDER BY -> ASC/DESC
SELECT
  *
FROM
  db_live_3.usuarios
ORDER BY
  name ASC;

SELECT
  *
FROM
  db_live_3.usuarios
ORDER BY
  name DESC;

-- Listar dados de uma tabela com WHERE e ORDER BY juntos
SELECT
  *
FROM
  db_live_3.usuarios
WHERE
  data_criacao > '2024-10-10'
ORDER BY
  nome ASC;

-- Listar dados de usuários limitando a somente 5 itens
SELECT
  *
FROM
  db_live_3.usuarios
LIMIT
  5;

-- Atualizar um item na tabela
UPDATE
  db_live_3.usuarios
SET
  name = 'Teste alteração'
WHERE
  id = 1;

UPDATE
  db_live_3.usuarios
SET
  name = 'Teste alteração',
  senha = '987456321'
WHERE
  id = 1;

-- COUNT (Contagem)
SELECT
  COUNT(email)
FROM
  db_live_3.usuarios;

SELECT
  COUNT(*)
FROM
  db_live_3.usuarios;

SELECT
  COUNT(*)
FROM
  db_live_3.livros
WHERE
  ano_publicacao > 1900;

-- AVG (Média)
SELECT
  AVG(preco)
FROM
  db_live_3.livros;

SELECT
  AVG(preco)
FROM
  db_live_3.livros
WHERE
  preco > 30;

-- GROUP BY
SELECT
  autor,
  COUNT(*)
FROM
  db_live_3.livros
GROUP BY
  autor;

SELECT
  autor,
  COUNT(*) AS total_livros
FROM
  db_live_3.livros
GROUP BY
  autor;

-- JOIN
select
  l.id,
  l.titulo,
  l.editora,
  l.ano_publicacao,
  a.nome as autor,
  e.numero_exemplar,
  e.status
from
  app_biblioteca.livros l
  join app_biblioteca.autores a on l.autor_id = a.id
  join app_biblioteca.exemplares e on e.livro_id = l.id
where
  e.status = 0
order by
  l.titulo
limit
  10 offset 0;