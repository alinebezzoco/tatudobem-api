# Tá tudo bem? API v1.0.0

RESTful API desenvolvida em Node.js que lista todas as universidades e instituições que oferecem atendimento psicológico gratuito. 


## Adicionar um novo item


	POST https://tatudobem-api.herokuapp.com/lists


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



	DELETE https://tatudobem-api.herokuapp.com/lists/:id


## Detalhes do item



	GET https://tatudobem-api.herokuapp.com/lists/:id


## Listar os items



	GET https://tatudobem-api.herokuapp.com/lists


### Parâmetros

| Nome    | Tipo      | Descrição                          |
|---------|-----------|--------------------------------------|
| q			| String			| **opcional** Query para busca						|
| page			| Number			| **opcional** Paginação						|
| limit			| Number			| **opcional** Quantidade de itens devolvidos						|
| sort			| String[]			| **opcional** Ordenação dos itens devolvidos						|
| fields			| String[]			| **opcional** Campos a serem retornados						|


## Atualizar um item



	PUT https://tatudobem-api.herokuapp.com/lists/:id

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