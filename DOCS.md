# tatudobem-api v0.0.0



- [List](#list)
	- [Create list](#create-list)
	- [Delete list](#delete-list)
	- [Retrieve list](#retrieve-list)
	- [Retrieve lists](#retrieve-lists)
	- [Update list](#update-list)
	


# List

## Create list



	POST /lists


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>List's name.</p>							|
| description			| 			|  <p>List's description.</p>							|
| address			| 			|  <p>List's address.</p>							|
| phone			| 			|  <p>List's phone.</p>							|
| email			| 			|  <p>List's email.</p>							|
| city			| 			|  <p>List's city.</p>							|
| uf			| 			|  <p>List's uf.</p>							|

## Delete list



	DELETE /lists/:id


## Retrieve list



	GET /lists/:id


## Retrieve lists



	GET /lists


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| q			| String			| **optional** <p>Query to search.</p>							|
| page			| Number			| **optional** <p>Page number.</p>							|
| limit			| Number			| **optional** <p>Amount of returned items.</p>							|
| sort			| String[]			| **optional** <p>Order of returned items.</p>							|
| fields			| String[]			| **optional** <p>Fields to be returned.</p>							|

## Update list



	PUT /lists/:id


### Parameters

| Name    | Type      | Description                          |
|---------|-----------|--------------------------------------|
| name			| 			|  <p>List's name.</p>							|
| description			| 			|  <p>List's description.</p>							|
| address			| 			|  <p>List's address.</p>							|
| phone			| 			|  <p>List's phone.</p>							|
| email			| 			|  <p>List's email.</p>							|
| city			| 			|  <p>List's city.</p>							|
| uf			| 			|  <p>List's uf.</p>							|


