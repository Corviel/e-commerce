import {
  FILTER_PRODUCTS,
  LOAD_PRODUCTS,
  SET_GRIDVIEW,
  SET_LISTVIEW,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  UPDATE_SORT,
} from "../actions"

const filter_reducer = (state, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS:
      let maxPrice = action.payload.map((product) => product.price)
      maxPrice = Math.max(...maxPrice)
      return {
        ...state,
        all_products: [...action.payload],
        filtered_products: [...action.payload],
        filters: { ...state.filters, maxPrice: maxPrice, price: maxPrice },
      }
    case SET_GRIDVIEW:
      return {
        ...state,
        grid_view: true,
      }
    case SET_LISTVIEW:
      return {
        ...state,
        grid_view: false,
      }
    case UPDATE_SORT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      }
    case SORT_PRODUCTS:
      const { sort, filtered_products } = state
      let tempProducts = [...filtered_products]
      if (sort === "price-lowest") {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price)
      }
      if (sort === "price-highest") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price)
      }
      if (sort === "name-a") {
        tempProducts = tempProducts.sort((a, b) => {
          return a.name.localeCompare(b.name)
        })
      }
      if (sort === "name-z") {
        tempProducts = tempProducts.sort((a, b) => {
          return b.name.localeCompare(a.name)
        })
      }
      return { ...state, filtered_products: tempProducts }

    case UPDATE_FILTERS:
      const { name, value } = action.payload
      return {
        ...state,
        filters: { ...state.filters, [name]: value },
      }
    case FILTER_PRODUCTS:
      console.log("filtering")
      return {
        ...state,
      }
    default: {
      throw new Error(`No Matching "${action.type}" - action type`)
    }
  }
}

export default filter_reducer
