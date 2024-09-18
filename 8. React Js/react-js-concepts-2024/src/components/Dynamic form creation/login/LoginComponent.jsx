import { useState } from "react";
import { loginFormElements } from "../../../config";
import CommonForm from "../common-form/CommonForm";

const initialFormData = {
  email: "",
  password: "",
};

const LoginComponent = () => {
  const [loginFormData, setLoginFormData] = useState({
    initialFormData,
  });

  const onHandleSubmit = (event) => {
    event.preventDefault();
    console.log("loginFormData", loginFormData);

    //api logic and database logic

    setLoginFormData(initialFormData);
  };

  return (
    <div>
      <h1>Login Form</h1>
      <CommonForm
        formData={loginFormData}
        setFormData={setLoginFormData}
        formControls={loginFormElements}
        buttonText={"Login"}
        onHandleSubmit={onHandleSubmit}
      />
    </div>
  );
};

export default LoginComponent;
