import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AddUserFormState {
  image: string | null;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber?: string;
  facebook?: string;
  instagram?: string;
  linkedIn?: string;
  github?: string;
}

interface FormState {
  addUserForm: AddUserFormState;
}

interface UpdateFormDataPayload {
  field: keyof AddUserFormState;
  value: string;
}

const initialState: FormState = {
  addUserForm: {
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
