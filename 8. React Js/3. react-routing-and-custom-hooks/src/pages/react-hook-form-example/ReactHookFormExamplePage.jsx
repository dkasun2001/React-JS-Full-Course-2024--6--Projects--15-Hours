import { useForm } from "react-hook-form";

const ReactHookFormExamplePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmitForm = (formData) => {
    console.log(formData);
    reset();
  };

  return (
    <div>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <label>Email</label>
          <input
            {...register("email", { required: true })}
            name="email"
            type="email"
          />
        </div>
        <div>
          <label>Password</label>
          <input
            {...register("password", { required: true, minLength: 5 })}
            name="password"
            type="password"
          />

          {errors.email && errors.email.type === "required" ? (
            <p style={{ color: "red", fontWeight: "bold", margin: "20px" }}>
              Email is required
            </p>
          ) : null}

          {errors.password && errors.password.type === "required" ? (
            <p style={{ color: "red", fontWeight: "bold", margin: "20px" }}>
              password is required
            </p>
          ) : null}

          {errors.password && errors.password.type === "minLength" ? (
            <p style={{ color: "red", fontWeight: "bold", margin: "20px" }}>
              password shold be at least 8 characters
            </p>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReactHookFormExamplePage;
