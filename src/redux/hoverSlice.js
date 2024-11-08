import { createSlice } from '@reduxjs/toolkit';

const hoverSlice = createSlice({
  name: 'hover',
  initialState: {
     // Set the initial value of the boolean
    isProjectsHovered: false,
    isContactHovered: false,
  },
  reducers: {
    ToggleHoverOff: (state) => {
      // Turn off both hover states
      state.isProjectsHovered = false;
      state.isContactHovered = false;
    },
    setProjectsHover: (state, action) => {
      state.isProjectsHovered = action.payload; // Sets boolean to true/false
      state.isContactHovered = !state.isProjectsHovered; // Only one hover state can be true at a time
    },
    setContactHover: (state, action) => {
      state.isContactHovered = action.payload; // Sets boolean to true/false
      state.isProjectsHovered = !state.isContactHovered; // Only one hover state can be true at a time
    },
  },
});

export const { ToggleHoverOff, setProjectsHover, setContactHover } = hoverSlice.actions;
export default hoverSlice.reducer;