import { PayloadAction, createSlice } from '@reduxjs/toolkit'
interface AuthState {
    email: string | null;
    name: string | null;
    _id: string | null;
    token: string | null;
  }
  const initialState: AuthState = {
    email: null,
    name: null,
    _id: null,
    token: null,
  };
// const initialState: InitialState =  {
//     user:{
//         name: "",
//         email: "",
//         token: "",
//         id: "",
    
//     },
// }
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<AuthState>) => {
        // Set user data in the state
        state.email = action.payload.email;
        state.name = action.payload.name;
        state._id = action.payload._id;
        state.token = action.payload.token;
        },
        clearUser: (state) => {
        // Clear user data in the state
        state.email = null;
        state.name = null;
        state._id = null;
        state.token = null;
        },
    }
})

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;