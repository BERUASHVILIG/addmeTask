import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const User = () => {
  const formData = useSelector((state: RootState) => state.form.addUserForm);

  return (
    <div
      className="container"
      style={{
        backgroundColor: formData.color || "#ffffff",
        minHeight: "100vh",
        minWidth: "100vw",
      }}
    >
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 text-center">
          <h1>User Details</h1>
          {formData.image && (
            <img
              className="img-fluid mb-3"
              style={{ borderRadius: "50px", width: "100px", height: "100px" }}
              src={formData.image}
              alt="Uploaded"
            />
          )}
          <div className="d-flex flex-column align-items-center">
            <div className="d-flex gap-5">
              {formData.firstName && <p> {formData.firstName}</p>}
              {formData.lastName && <p>{formData.lastName}</p>}
            </div>
            <div className="d-flex gap-5">
              {formData.email && (
                <p>
                  <i className="bi bi-envelope-at-fill"></i> {formData.email}
                </p>
              )}
              {formData.phoneNumber && (
                <p>
                  <i className="bi bi-telephone-fill"></i>{" "}
                  {formData.phoneNumber}
                </p>
              )}
            </div>
            <div className="d-flex gap-3">
              {formData.facebook && (
                <a
                  href={formData.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-facebook fs-1"></i>
                </a>
              )}
              {formData.instagram && (
                <a
                  href={formData.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-instagram fs-1"></i>
                </a>
              )}
              {formData.linkedIn && (
                <a
                  href={formData.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-linkedin fs-1"></i>
                </a>
              )}
              {formData.github && (
                <a
                  href={formData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-github fs-1"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
