# Tá tudo bem? API v1.0.0

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

