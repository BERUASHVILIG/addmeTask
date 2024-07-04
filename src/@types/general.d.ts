interface AddUserFormState {
  color: string;
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
