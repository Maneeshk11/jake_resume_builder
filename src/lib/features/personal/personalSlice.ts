import { PayloadAction, createSlice } from '@reduxjs/toolkit';


export interface PersonalState {
    first_name: string;
    last_name: string;
    address_line: string;
    country: string;
    email: string;
    phone_number: string;
}

const initialState: PersonalState = {
    first_name: "",
    last_name: "",
    address_line: "",
    country: "",
    email: "",
    phone_number: "",
};

export const personalSlice = createSlice({
    name:"personal",
    initialState,
    reducers: {
        setFirstName: (state, action: PayloadAction<string>) => {
            state.first_name = action.payload;
        },
        setLastName: (state, action: PayloadAction<string>) => {
            state.last_name = action.payload;
        },
        setAddressLine: (state, action: PayloadAction<string>) => {
            state.address_line = action.payload;
        },
        setCountry: (state, action: PayloadAction<string>) => {
            state.country = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPhoneNumber: (state, action: PayloadAction<string>) => {
            state.phone_number = action.payload;
        }
    }
})

export const { setFirstName, setLastName, setAddressLine, setCountry, setEmail, setPhoneNumber } = personalSlice.actions;
export const personalReducer = personalSlice.reducer;