# Tá tudo bem? API v1.0.0 

## Rodando o projeto local

- Dê o `npm install` para instalar as dependências do projeto; 

- Antes de mais nada você precisa instalar o [MongoDB](https://www.mongodb.com/) para conseguir rodar o banco de dados local; 
- Depois de instalado basta rodar o comando abaixo: 

```bash
$ mongod
```

- Logo após de iniciar o MongoDB rode o projeto com o seguinte comando:

```bash
$ npm run dev
``` 

- O projeto irá rodar com o `http://localhost:9000`. 


## Adicionar um novo item


	POST /lists


### Parâmetros

| Nome    | Tipo      | Descrição                          	|
|---------|-----------|--------------------------------------|
| name			| String 			|  Nome da instituição			|
| description	| String 			|  Sobre a instituição			|
| address		| String 			|  Endereço						|
| phone			| String			|  Telefone						|
| email			| String			|  Email						|
| city			| String			|  Cidade						|
| uf			| String			|  Estado						|


## Excluir item



	DELETE /lists/:id


## Detalhes do item



	GET /lists/:id


## Listar os items



	GET /lists


### Parâmetros

| Nome    | Tipo      | Descrição                          |
|---------|-----------|--------------------------------------|
| q			| String			| **opcional** Query para busca						|
| page			| Number			| **opcional** Paginação						|
| limit			| Number			| **opcional** Quantidade de itens devolvidos						|
| sort			| String[]			| **opcional** Ordenação dos itens devolvidos						|
| fields			| String[]			| **opcional** Campos a serem retornados						|


## Atualizar um item



	PUT /lists/:id

### Parâmetros

| Nome    | Tipo      | Descrição                          |
|---------|-----------|--------------------------------------|
| name			| String			| Nome da instituição							|
| description	| String 			| Sobre a instituição							|
| address		| String			| Endereço							|
| phone			| String			| Telefone							|
| email			| String			| Email							|
| city			| String			| Cidade							|
| uf			| String		| Estado							|

