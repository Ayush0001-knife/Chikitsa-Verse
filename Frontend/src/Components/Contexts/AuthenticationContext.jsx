import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginDoctor, registerDoctor } from "../../Services/api";

const AuthenticationContext = createContext();

export const AuthenticationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("login");
  const [isVisible, setIsVisible] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  // Form states
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    firstName: "Ayush",
    lastName: null,
    email: "ayush@gmail.com",
    password: "ayush0001",
    confirmPassword: "ayush0001",
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 8;
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const newErrors = {};

    if (!loginData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(loginData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!loginData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    const credentials = {
      email: loginData.email,
      password: loginData.password,
    };

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await loginDoctor(credentials);
        if (response.success) {
          localStorage.setItem("access_token", response.token);
          setIsLoading(false);
          navigate("/doctor-dashboard");
        } else {
          setErrors({ submit: response.message || "Login failed" });
          setIsLoading(false);
        }
      } catch (error) {
        setErrors({
          submit: error.message || "An error occurred during login",
        });
        setIsLoading(false);
      }
    } else {
      console.log("Login errors:", newErrors);
      setIsLoading(false);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const newErrors = {};

    // ✅ First name
    if (!registerData.firstName) {
      newErrors.firstName = "First name is required";
    } else if (registerData.firstName.length < 3) {
      newErrors.firstName = "Firstname must be at least 3 characters long";
    }

    // ✅ Last name
    if (registerData.lastName) {
      if (registerData.lastName.length < 3) {
        newErrors.lastName = "Lastname must be at least 3 characters long";
      }
    }

    // ✅ Email
    if (!registerData.email) {
      newErrors.email = "Email is required";
    } else if (registerData.email.length < 5) {
      newErrors.email = "Email must be at least 5 characters long";
    } else if (!validateEmail(registerData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // ✅ Password
    if (!registerData.password) {
      newErrors.password = "Password is required";
    } else if (registerData.password.length < 5) {
      newErrors.password = "Password must be at least 5 characters long";
    }

    // ✅ Confirm password
    if (!registerData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (registerData.password !== registerData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    const credentials = {
      email: registerData.email,
      password: registerData.password,
      firstName: registerData.firstName,
      lastName: registerData.lastName,
    };

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await registerDoctor(credentials);
        if (response.success) {
          localStorage.setItem("access_token", response.token);
          setIsLoading(false);
          navigate("/doctor-dashboard");
        } else {
          setErrors({ submit: response.message || "Registration failed" });
          setIsLoading(false);
        }
      } catch (error) {
        setErrors({
          submit: error.message || "An error occurred during registration",
        });
        setIsLoading(false);
      }
    } else {
      setIsLoading(false);
    }
  };

  return (
    <AuthenticationContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        isVisible,
        setIsVisible,
        showPassword,
        setShowPassword,
        showConfirmPassword,
        setShowConfirmPassword,
        loginData,
        setLoginData,
        registerData,
        setRegisterData,
        errors,
        setErrors,
        isLoading,
        setIsLoading,
        handleLogin,
        handleRegister,
        validateEmail,
        validatePassword,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export const useAuthentication = () => useContext(AuthenticationContext);
