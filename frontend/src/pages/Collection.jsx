import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import ProductItem from '../components/ProductItem'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext)
  const [showFilter, setShowFilter] = useState(false)
  const [filterProducts, setFilterProducts] = useState([])
  const [category, setCategory] = useState([])
  const [subCategory, setSubCategory] = useState([])
  const [sortType, setSortType] = useState('relavent')

  // Shuffle function for randomizing product order
  const shuffleArray = (array) => {
    let shuffledArray = [...array]
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
    }
    return shuffledArray
  }

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value))
    } else {
      setCategory((prev) => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value))
    } else {
      setSubCategory((prev) => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice()

    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        category.includes(item.category)
      )
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter((item) =>
        subCategory.includes(item.subCategory)
      )
    }

    // Shuffle the filtered products
    productsCopy = shuffleArray(productsCopy)

    setFilterProducts(productsCopy)
  }

  const sortProduct = () => {
    let fpCopy = filterProducts.slice()

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price))
        break

      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price))
        break

      default:
        applyFilter()
        break
    }
  }

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch, products])

  useEffect(() => {
    sortProduct()
  }, [sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Options */}
      <div className='min-w-60'>
        <p
          onClick={() => setShowFilter(!showFilter)}
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt=''
          />
        </p>
        {/* Category Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className='mb-3 text-sm font-medium'>CATEGORII</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value='Man'
                onChange={toggleCategory}
              />{' '}
              Bărbați
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value='Women'
                onChange={toggleCategory}
              />{' '}
              Femei
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value='Unisex'
                onChange={toggleCategory}
              />{' '}
              Unisex
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? '' : 'hidden'
          } sm:block`}
        >
          <p className='mb-3 text-sm font-medium'>TIPUL</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value='winter'
                onChange={toggleSubCategory}
              />{' '}
              Iarnă
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value='spring'
                onChange={toggleSubCategory}
              />{' '}
              Primăvară
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value='summer'
                onChange={toggleSubCategory}
              />{' '}
              Vară
            </p>
            <p className='flex gap-2'>
              <input
                className='w-3'
                type='checkbox'
                value='autumn'
                onChange={toggleSubCategory}
              />{' '}
              Toamnă
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'TOATĂ'} text2={'COLECȚIA'} />
          {/* Product Sort */}
          <select
            onChange={(e) => setSortType(e.target.value)}
            className='border-2 border-gray-300 text-sm px-2'
          >
            <option value='relavent'>Sortați după: Relevant</option>
            <option value='low-high'>Sortați după: mic la ridicat</option>
            <option value='high-low'>Sortați după: de la mare la scăzut</option>
          </select>
        </div>

        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection
