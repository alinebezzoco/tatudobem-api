import { success, notFound } from '../../services/response/'
import { List } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  List.create(body)
    .then((list) => list.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  List.count(query)
    .then(count => List.find(query, select, cursor)
      .then((lists) => ({
        count,
        results: lists.map((list) => list.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  List.findById(params.id)
    .then(notFound(res))
    .then((list) => list ? list.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  List.findById(params.id)
    .then(notFound(res))
    .then((list) => list ? Object.assign(list, body).save() : null)
    .then((list) => list ? list.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  List.findById(params.id)
    .then(notFound(res))
    .then((list) => list ? list.remove() : null)
    .then(success(res, 204))
    .catch(next)
