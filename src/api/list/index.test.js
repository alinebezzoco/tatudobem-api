import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { List } from '.'

const app = () => express(apiRoot, routes)

let list

beforeEach(async () => {
  list = await List.create({})
})

test('POST /lists 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ name: 'test', description: 'test', address: 'test', phone: 'test', email: 'test', city: 'test', uf: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.address).toEqual('test')
  expect(body.phone).toEqual('test')
  expect(body.email).toEqual('test')
  expect(body.city).toEqual('test')
  expect(body.uf).toEqual('test')
})

test('GET /lists 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.results)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /lists/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${list.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(list.id)
})

test('GET /lists/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /lists/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${list.id}`)
    .send({ name: 'test', description: 'test', address: 'test', phone: 'test', email: 'test', city: 'test', uf: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(list.id)
  expect(body.name).toEqual('test')
  expect(body.description).toEqual('test')
  expect(body.address).toEqual('test')
  expect(body.phone).toEqual('test')
  expect(body.email).toEqual('test')
  expect(body.city).toEqual('test')
  expect(body.uf).toEqual('test')
})

test('PUT /lists/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ name: 'test', description: 'test', address: 'test', phone: 'test', email: 'test', city: 'test', uf: 'test' })
  expect(status).toBe(404)
})

test('DELETE /lists/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${list.id}`)
  expect(status).toBe(204)
})

test('DELETE /lists/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
