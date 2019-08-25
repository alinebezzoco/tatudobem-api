import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export List, { schema } from './model'

const router = new Router()
const { name, description, address, phone, email, city, uf } = schema.tree

/**
 * @api {post} /lists Create list
 * @apiName CreateList
 * @apiGroup List
 * @apiParam name List's name.
 * @apiParam description List's description.
 * @apiParam address List's address.
 * @apiParam phone List's phone.
 * @apiParam email List's email.
 * @apiParam city List's city.
 * @apiParam uf List's uf.
 * @apiSuccess {Object} list List's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 List not found.
 */
router.post('/',
  body({ name, description, address, phone, email, city, uf }),
  create)

/**
 * @api {get} /lists Retrieve lists
 * @apiName RetrieveLists
 * @apiGroup List
 * @apiUse listParams
 * @apiSuccess {Number} count Total amount of lists.
 * @apiSuccess {Object[]} results List of lists.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /lists/:id Retrieve list
 * @apiName RetrieveList
 * @apiGroup List
 * @apiSuccess {Object} list List's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 List not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /lists/:id Update list
 * @apiName UpdateList
 * @apiGroup List
 * @apiParam name List's name.
 * @apiParam description List's description.
 * @apiParam address List's address.
 * @apiParam phone List's phone.
 * @apiParam email List's email.
 * @apiParam city List's city.
 * @apiParam uf List's uf.
 * @apiSuccess {Object} list List's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 List not found.
 */
router.put('/:id',
  body({ name, description, address, phone, email, city, uf }),
  update)

/**
 * @api {delete} /lists/:id Delete list
 * @apiName DeleteList
 * @apiGroup List
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 List not found.
 */
router.delete('/:id',
  destroy)

export default router
