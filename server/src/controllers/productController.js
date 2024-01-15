import { Product } from '../models/product/productModel.js'
import cloudinary from 'cloudinary'
import { upload } from '../middlewares/upload.js'

export const creatProduct = async (req, res) => {
  try {
    const mainImageResult = await cloudinary.uploader.upload(
      req.files.mainImage[0].path,
      {
        folder: 'mainImages'
      }
    )
    const imagesResults = await Promise.all(
      req.files.images.map(async file => {
        const result = await cloudinary.uploader.upload(file.path, {
          folder: 'otherImages'
        })
        return result.secure_url
      })
    )

    const newProduct = new Product({
      ...req.body,
      mainImage: mainImageResult.secure_url,
      images: imagesResults
    })

    await newProduct.save()
    res.status(200).json(newProduct)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const getAllProducts = async (req, res) => {
  try {
    const getAllProducts = await Product.find({}).populate(
      'discount category reviews'
    )
    res.status(200).json(getAllProducts)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const deleteProduct = await Product.findByIdAndDelete(req.params.id)
    if (!deleteProduct) return res.status(404).json({ message: 'Not Found' })
    res.status(200).json(deleteProduct)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params.id
    const newDatas = { ...req.body }
    const existingProduct = await Product.findById(id)
    if (req.file) {
      const mainImageResult = await cloudinary.uploader.upload(req.file.path, {
        folder: 'mainİmages'
      })
      newDatas.mainImage = mainImageResult.secure_url
    }

    if (req.files && req.files.length > 0) {
      const imagesResults = await Promise.all(
        req.files.map(async file => {
          const result = await cloudinary.uploader.upload(file.path, {
            folder: 'otherImages'
          })
          return result.secure_url
        })
      )
      newDatas.images = imagesResults
    }

    if (req.body.colors && req.body.colors.length > 0) {
      newDatas.colors = existingProduct.colors.concat(req.body.colors)
    }

    if (req.body.tags && req.body.tags.length > 0) {
      newDatas.tags = existingProduct.tags.concat(req.body.tags)
    }

    if (req.body.sizes && req.body.sizes.length > 0) {
      newDatas.sizes = existingProduct.sizes.concat(req.body.tags)
    }

    const updateProduct = await Product.findByIdAndUpdate(id, updateFields, {
      new: true
    })
    if (!updateProduct) return res.status(404).json({ message: 'Not Found' })
    res.status(200).json(updateProduct)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const addCategoryToProduct = async (req, res) => {
  try {
    const { productId, categoryId } = req.body
    const product = await Product.findById(productId)
    if (!product) {
      return res.status(404).json({ message: 'Product not found' })
    }
    product.category.push(categoryId)
    await product.save()
    res.status(200).json({ message: 'Category added to product', product })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
