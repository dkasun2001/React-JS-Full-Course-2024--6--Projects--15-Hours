import { useState } from "react";

const FormComponent = () => {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (event) => {
    const { value } = event.target;
    setNameValue(value);
  };

  const handleEmailChange = (event) => {
    const { value } = event.target;
    setEmailValue(value);
  };

  const handleOnChange = (event) => {
    console.log(event.target.name);

    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // call the api and pass the name value

    console.log("nameValue:", nameValue, "\nemailValue:", emailValue);
  };

  console.log(formData);

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input
          // value={nameValue}
          value={formData.name}
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          // onChange={handleInputChange}

          // onChange={handleOnChange}

          onChange={(event) =>
            setFormData({...formData, [event.target.name] : event.target.value})
          }
        />
        <br />
        <input
          // value={emailValue}
          value={formData.email}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          // onChange={handleEmailChange}

          // onChange={handleOnChange}

          onChange={(event) =>
            setFormData({...formData, [event.target.email] : event.target.value})
          }
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
