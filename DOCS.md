# Tá tudo bem? API v1.0.0

# Listagem de todos os items

## Adicionar um novo item


	POST /lists


### Parameters

| Nome    | Tipo      | Descrição                          |
|---------|-----------|--------------------------------------|
| name			| String 			|  <p>Nome da instituição</p>							|
| description	| String 			|  <p>Sobre a instituição</p>							|
| address		| String 			|  <p>Endereço</p>							|
| phone			| String			|  <p>Telefone</p>							|
| email			| String			|  <p>Email</p>							|
| city			| String		|  <p>Cidade</p>							|
| uf			| String			|  <p>Estado</p>							|


## Excluir item



	DELETE /lists/:id


## Detalhes do item



	GET /lists/:id


## Recuperar lista



	GET /lists


### Parâmetros

| Nome    | Tipo      | Descrição                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query para busca</p>							|
| page			| Number			| **optional** <p>Paginação</p>							|
| limit			| Number			| **optional** <p>Quantidade de itens devolvidos</p>							|
| sort			| String[]			| **optional** <p>Ordenação dos itens devolvidos</p>							|
| fields			| String[]			| **optional** <p>Campos a serem retornados</p>							|


## Atualizar um item



	PUT /lists/:id

### Parâmetros

| Nome    | Tipo      | Descrição                          |
|---------|-----------|--------------------------------------|
| name			| String			|  <p>Nome da instituição</p>							|
| description	| String 			|  <p>Sobre a instituição</p>							|
| address		| String			|  <p>Endereço</p>							|
| phone			| String			|  <p>Telefone</p>							|
| email			| String			|  <p>Email</p>							|
| city			| String			|  <p>Cidade</p>							|
| uf			| String		|  <p>Estado</p>							|

