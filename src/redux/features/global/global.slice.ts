import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';


const globalSlice = createSlice({
  name: 'global',
  initialState: {isNavbarOpen:true},
  reducers: {
    setNavbarState: (state, action) => {
      state.isNavbarOpen = !state.isNavbarOpen
    }
  },
});

export const { setNavbarState } = globalSlice.actions;

export default globalSlice.reducer;

export const navbarState = (state: RootState) => state.global.isNavbarOpen;
