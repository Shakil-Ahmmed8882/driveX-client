import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Tbooking } from '../../../types/booking.type';

interface BookingState {
  bookings: Tbooking[];
}

const initialState: BookingState = {
  bookings: [],
};

const bookingSlice = createSlice({
  name: 'bookings',
  initialState,
  reducers: {
    setBookings: (state, action: PayloadAction<Tbooking[]>) => {
      state.bookings = action.payload;
    },
    addBooking: (state, action: PayloadAction<Tbooking>) => {
      state.bookings.push(action.payload);
    },
    clearBookings: (state) => {
      state.bookings = [];
    },
  },
});

export const { setBookings, addBooking, clearBookings } = bookingSlice.actions;

export default bookingSlice.reducer;

export const selectBookings = (state: RootState) => state.bookings.bookings;
