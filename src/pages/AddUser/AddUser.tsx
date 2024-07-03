import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData, resetForm } from "../../redux/addUser.slice";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formData = useSelector((state: RootState) => state.form.addUserForm);
  const [imagePreview, setImagePreview] = useState<string | null>(
    formData.image
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "image" && files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
        dispatch(
          updateFormData({
            field: name as keyof typeof formData,
            value: reader.result as string,
          })
        );
      };
      reader.readAsDataURL(file);
    } else {
      dispatch(updateFormData({ field: name as keyof typeof formData, value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    navigate("/user");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-10 col-md-7">
            <input
              type="file"
              name="image"
              accept="image/*"
              onChange={handleChange}
            />
            {imagePreview && (
              <img
                style={{
                  borderRadius: "50px",
                  width: "100px",
                  height: "100px",
                }}
                src={imagePreview}
                alt="Preview"
              />
            )}
            <div className="">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={formData.firstName}
                  placeholder="Firstname"
                  onChange={handleChange}
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="lastName"
                  value={formData.lastName}
                  placeholder="Lastname"
                  onChange={handleChange}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="bi bi-envelope-at-fill"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  placeholder="phoneNumber"
                  onChange={handleChange}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="bi bi-facebook"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="facebook"
                  value={formData.facebook}
                  placeholder="facebook"
                  onChange={handleChange}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="bi bi-instagram"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="instagram"
                  value={formData.instagram}
                  placeholder="instagram"
                  onChange={handleChange}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="bi bi-linkedin"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="linkedIn"
                  value={formData.linkedIn}
                  placeholder="linkedIn"
                  onChange={handleChange}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="bi bi-github"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  name="github"
                  value={formData.github}
                  placeholder="github"
                  onChange={handleChange}
                />
              </div>
            </div>
            <button type="submit">Submit</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddUser;
