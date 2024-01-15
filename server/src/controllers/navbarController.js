import navbarModel from '../models/navbar/navbarModel.js'
import express from 'express'
import mongoose from 'mongoose'

export const createNavbarItem = async (req, res) => {
  try {
    const { title, link, dropdown } = req.body
    const newNavbarItem = new navbarModel({
      title,
      link,
      dropdown: dropdown || []
    })
    await newNavbarItem.save()
    res
      .status(200)
      .json({ message: 'Navbar Item Created', newNavbarItem: newNavbarItem })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getAllNavItems = async (req, res) => {
  try {
    const navItems = await navbarModel.find({}).exec()
    res.status(200).json({ message: 'Navbar Items', navItems: navItems })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteNavItem = async (req, res) => {
  try {
    const { id } = req.params
    const findNavItemAndDelete = await navbarModel.findByIdAndDelete(id)
    console.log(findNavItemAndDelete)
    if (!findNavItemAndDelete) {
      return res.status(404).json({ message: 'Item not found' })
    }
    res.status(200).json({ message: 'Item deleted', findNavItemAndDelete })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateNavItem = async (req, res) => {
  try {
    const { id } = req.params
    const { title, link, dropdown, isDropdown } = req.body
    const updatedNavItem = await navbarModel.findByIdAndUpdate(
      id,
      { title, link, isDropdown, dropdown },
      { new: true }
    )

    if (!updatedNavItem) {
      return res.status(404).json({ message: 'Item not found' })
    }

    res.status(200).json({ message: 'Item updated', updatedNavItem })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getNavbarItemById = async (req, res) => {
  try {
    const { id } = req.params
    const findItem = await navbarModel.findById(id)
    if (!findItem) return res.status(404).json({ message: 'Item not found' })
    res.status(200).json({ message: 'Get By Id Item', findItem })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

// {
//     title: 'Menu', // Общий заголовок меню
//     link: '/menu', // Ссылка на общую страницу меню
//     dropdownCategories: [
//       {
//         heading: 'Clothes', // Заголовок категории
//         to: '/clothes', // Ссылка на страницу категории
//         items: [
//           {
//             title: 'Hoodies', // Название элемента
//             to: '/clothes/hoodies' // Ссылка на страницу элемента
//           },
//           {
//             title: 'Jackets',
//             to: '/clothes/jackets'
//           },
//           // Другие элементы
//         ]
//       },
//       {
//         heading: 'Cycling',
//         to: '/cycling',
//         items: [
//           {
//             title: 'E-Bikes',
//             to: '/cycling/e-bikes'
//           },
//           {
//             title: 'Bikes',
//             to: '/cycling/bikes'
//           },
//           // Другие элементы
//         ]
//       },
//       // Другие категории
//     ]
//   }
