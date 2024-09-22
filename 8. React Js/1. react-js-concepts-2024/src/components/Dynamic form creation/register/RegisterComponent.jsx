import { useState } from "react";
import CommonForm from "../common-form/CommonForm";
import { registerFormElements } from "../../../config";

const initialRegisterFormData = {
  name: "",
  email: "",
  password: "",
};

const RegisterComponent = () => {
  const [registerFormData, setRegisterFormData] = useState(
    initialRegisterFormData
  );

  const handleRegisterOnSubmit = (event) => {
    event.preventDefault();

    console.log(registerFormData);

    setRegisterFormData(initialRegisterFormData);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Register Page</h1>
      <CommonForm
        formControls={registerFormElements}
        formData={registerFormData}
        setFormData={setRegisterFormData}
        buttonText={"Register"}
        onHandleSubmit={handleRegisterOnSubmit}
      />
    </div>
  );
};

export default RegisterComponent;
