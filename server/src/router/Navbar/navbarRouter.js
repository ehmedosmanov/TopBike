import express from 'express'
import {
  createNavbarItem,
  deleteNavItem,
  getAllNavItems,
  getNavbarItemById,
  updateNavItem
} from '../../controllers/navbarController.js'

const navbarRouter = express.Router()

navbarRouter.post('/navbar-item', createNavbarItem)
navbarRouter.get('/navbar-item', getAllNavItems)
navbarRouter.get('/navbar-item/:id', getNavbarItemById)
navbarRouter.delete('/navbar-item/:id', deleteNavItem)
navbarRouter.put('/navbar-item/:id', updateNavItem)

export default navbarRouter
