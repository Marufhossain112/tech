import { createSlice } from "@reduxjs/toolkit";
interface IUserSlice {
    user: {
        email: string | null;
    };
    isLoading: boolean;
    isError: boolean;
    error: string | null;
}
const initialState: IUserSlice = {
    user: {
        email: null
    },
    isLoading: false,
    isError: false,
    error: null
};
const userSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {

    }
});
export default userSlice.reducer;