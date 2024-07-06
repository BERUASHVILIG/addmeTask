import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: FormState = {
  addUserForm: {
    backgroundColor: "",
    backgroundImage: null,
    textColor: "",
    iconColor: "",
    image: null,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    facebook: "",
    instagram: "",
    linkedIn: "",
    github: "",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData(state, action: PayloadAction<UpdateFormDataPayload>) {
      const { field, value } = action.payload;
      state.addUserForm[field] = value;
    },
    resetForm(state) {
      state.addUserForm = initialState.addUserForm;
    },
  },
});

export const { updateFormData, resetForm } = formSlice.actions;
export default formSlice.reducer;
