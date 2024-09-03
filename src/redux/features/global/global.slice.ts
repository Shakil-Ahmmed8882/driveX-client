import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';


const globalSlice = createSlice({
  name: 'global',
  initialState: {
    isNavbarOpen:true,
    isSearchClick:false
  },
  reducers: {
    setNavbarState: (state) => {
      state.isNavbarOpen = !state.isNavbarOpen
    },
    setSearchClick: (state, {payload}) => {
      state.isSearchClick = payload
    }
  },
});

export const { setNavbarState, setSearchClick } = globalSlice.actions;

export default globalSlice.reducer;

export const navbarState = (state: RootState) => state.global.isNavbarOpen;
export const searchState = (state: RootState) => state.global.isSearchClick;
