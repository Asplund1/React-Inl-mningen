import {createSlice} from "@reduxjs/toolkit";

// Initial state med darkMode baserat på tidigare sparad inställning i localStorage
const initialState = {
    darkMode: localStorage.getItem("darkMode") === "true", 
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        // Växlar dark mode och sparar inställningen i localStorage
        toggleTheme: (state) => {
            state.darkMode = !state.darkMode;
            localStorage.setItem("darkMode", state.darkMode);
        },
    },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;