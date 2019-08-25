import { List } from '.'

let list

beforeEach(async () => {
  list = await List.create({ name: 'test', description: 'test', address: 'test', phone: 'test', email: 'test', city: 'test', uf: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = list.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(list.id)
    expect(view.name).toBe(list.name)
    expect(view.description).toBe(list.description)
    expect(view.address).toBe(list.address)
    expect(view.phone).toBe(list.phone)
    expect(view.email).toBe(list.email)
    expect(view.city).toBe(list.city)
    expect(view.uf).toBe(list.uf)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = list.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(list.id)
    expect(view.name).toBe(list.name)
    expect(view.description).toBe(list.description)
    expect(view.address).toBe(list.address)
    expect(view.phone).toBe(list.phone)
    expect(view.email).toBe(list.email)
    expect(view.city).toBe(list.city)
    expect(view.uf).toBe(list.uf)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
