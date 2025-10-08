import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            const { user, token } = action.payload;
            state.user = user;
            state.token = token;
            state.isAuthenticated = true;

            // Store in localStorage
            if (typeof window !== "undefined") {
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
            }
        },
        logout: (state) => {
            state.user = null;
            state.token = null;
            state.isAuthenticated = false;

            // Clear localStorage
            if (typeof window !== "undefined") {
                localStorage.removeItem("token");
                localStorage.removeItem("user");
            }
        },
        loadCredentialsFromStorage: (state) => {
            if (typeof window !== "undefined") {
                const token = localStorage.getItem("token");
                const user = localStorage.getItem("user");

                if (token && user) {
                    state.token = token;
                    state.user = JSON.parse(user);
                    state.isAuthenticated = true;
                }
            }
        },
    },
});

export const { setCredentials, logout, loadCredentialsFromStorage } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;


