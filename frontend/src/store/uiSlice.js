import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    activeProjectCategory: "all",
    mobileMenuOpen: false
  },
  reducers: {
    setProjectCategory: (state, action) => {
      state.activeProjectCategory = action.payload;
    },
    toggleMobileMenu: (state) => {
      state.mobileMenuOpen = !state.mobileMenuOpen;
    },
    closeMobileMenu: (state) => {
      state.mobileMenuOpen = false;
    }
  }
});

export const {
  setProjectCategory,
  toggleMobileMenu,
  closeMobileMenu
} = uiSlice.actions;

export default uiSlice.reducer;