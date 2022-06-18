import { RootState } from "@/services/redux/store";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { Product } from "@/declarations/products";
import { toProductWithCurrency } from "@/utils/adapters/products";
export interface CatalogState {
  product: Product | null;
  products: Product[];
}

const initialState: CatalogState = {
  product: null,
  products: [],
};

export const catalog = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setProduct, setProducts } = catalog.actions;

// State selector
const catalogState = (state: RootState) => state.catalog;
const product = createSelector(catalogState, (catalog: CatalogState) => {
  return catalog.product ? toProductWithCurrency(catalog.product) : null;
});
const products = createSelector(catalogState, (catalog: CatalogState) => {
  return catalog.products.length > 0
    ? catalog.products.map((product) => {
        const res = toProductWithCurrency(product);
        return res ? res : product;
      })
    : [];
});

export const catalogSelector = { product, products };

export default catalog.reducer;
