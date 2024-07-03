import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const User = () => {
  const formData = useSelector((state: RootState) => state.form.addUserForm);

  return (
    <div>
      <h1>User Details</h1>
      {formData.image && (
        <img
          style={{ borderRadius: "50px", width: "100px", height: "100px" }}
          src={formData.image}
          alt="Uploaded"
        />
      )}
      <p>First Name: {formData.firstName}</p>
      <p>Last Name: {formData.lastName}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
};

export default User;
