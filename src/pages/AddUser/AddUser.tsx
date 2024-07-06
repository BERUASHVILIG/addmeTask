import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateFormData, resetForm } from "../../redux/addUser.slice";
import { RootState } from "../../redux/store";
import { useNavigate } from "react-router-dom";
import "./AddUser.css";

const AddUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formData = useSelector((state: RootState) => state.form.addUserForm);
  const [imagePreview, setImagePreview] = useState<string | null>(
    formData.image
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if ((name === "image" || name === "backgroundImage") && files && files[0]) {
      const file = files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        if (name === "image" || name === "backgroundImage") {
          setImagePreview(result);
        }
        dispatch(
          updateFormData({
            field: name as keyof typeof formData,
            value: result,
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

  useEffect(() => {
    dispatch(resetForm());
    setImagePreview("");
  }, [dispatch]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-10 col-md-7 text-center">
            <div className="image-upload">
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="file-input"
                required={!imagePreview}
              />
              {imagePreview ? (
                <img
                  className="image-preview"
                  src={imagePreview}
                  alt="Preview"
                />
              ) : (
                <div className="upload-placeholder">Upload Image</div>
              )}
              <div className="hover-text">Upload Image</div>
            </div>
            <div className="form-group">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="firstName"
                  value={formData.firstName}
                  placeholder="Firstname"
                  onChange={handleChange}
                  required
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
                  required
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="bi bi-envelope-at-fill"></i>
                </span>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  placeholder="Phone Number"
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
                  placeholder="Facebook"
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
                  placeholder="Instagram"
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
                  placeholder="LinkedIn"
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
                  placeholder="Github"
                  onChange={handleChange}
                />
              </div>
              <p>choose backgroundColor </p>
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  <i className="bi bi-palette"></i>
                </span>
                <input
                  type="color"
                  style={{ height: "calc(2.375rem + 2px)", cursor: "pointer" }}
                  className="form-control"
                  name="backgroundColor"
                  value={formData.backgroundColor}
                  onChange={handleChange}
                  placeholder="Color"
                  required
                />
              </div>
            </div>
            <p>Choose Text Color </p>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-palette"></i>
              </span>
              <input
                type="color"
                style={{ height: "calc(2.375rem + 2px)", cursor: "pointer" }}
                className="form-control"
                name="textColor"
                value={formData.textColor}
                onChange={handleChange}
                placeholder="textColor"
                required
              />
            </div>
            <p>Choose Icon Color </p>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-palette"></i>
              </span>
              <input
                type="color"
                style={{ height: "calc(2.375rem + 2px)", cursor: "pointer" }}
                className="form-control"
                name="iconColor"
                value={formData.iconColor}
                onChange={handleChange}
                placeholder="iconColor"
                required
              />
            </div>
            <p>Choose backgroundImage </p>
            <div className="input-group mb-3">
              <span className="input-group-text" id="basic-addon1">
                <i className="bi bi-card-image"></i>
              </span>
              <input
                type="file"
                style={{ height: "calc(2.375rem + 2px)", cursor: "pointer" }}
                className="form-control"
                name="backgroundImage"
                accept="image/*"
                onChange={handleChange}
                placeholder="bacgroundImage"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3 mb-5">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddUser;
