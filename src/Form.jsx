import { useState } from "react";
import { useNavigate, useNavigation } from "react-router-dom";

const Form = () => {
  const history = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const handleSubmit = () => {

    let isError = false;
    if (!formData.email) {
      isError = true
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      isError = true
      setEmailError("Email in Invalid");
    } else {
      isError = false
      setEmailError("")
    }
    // Password validation
    if (!formData.password) {
      isError = true
      setPasswordError("Password is required");
    } else if (formData.password.length < 6) {
      isError = true
      setPasswordError("Password must be at least 6 characters long");
    } else {
      isError = false
      setPasswordError("")
    }
    if (!isError) {
      console.log("insaidew", emailError, passwordError);
      localStorage.setItem("user", JSON.stringify(formData));
      history("/dashboard");
    }
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };
  return (
    <div>
      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        placeholder="Enter email"
        onChange={handleInputChange}
      />
      {!!emailError && (
        <div>
          <p>{emailError}</p>
        </div>
      )}
      <label>Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        placeholder="Enter password"
        onChange={handleInputChange}
      />
      {!!passwordError && (
        <div>
          <p>{passwordError}</p>
        </div>
      )}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Form;
