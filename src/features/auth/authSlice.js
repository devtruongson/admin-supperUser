import { createSlice } from '@reduxjs/toolkit';

const initState = {
    isLoginIn: false,
    user: null,
    _token_device: null,
};

export const authSlice = createSlice({
    initialState: initState,
    name: 'authSlice',
    reducers: {
        loginSuccess(state, action) {
            const stateClone = {
                ...state,
            };
            console.log(action);

            stateClone.user = action.payload.user;
            stateClone._token_device = action.payload._token_device;
            stateClone.isLoginIn = true;
            return stateClone;
        },

        logoutAction(state) {
            state._token_device = null;
            state.isLoginIn = false;
            state.user = null;
        },
    },
});

// Action creators are generated for each case reducer function
export const { loginSuccess, logoutAction } = authSlice.actions;

export default authSlice.reducer;
