import CommonInput from "../common-input/CommonInput";

const formTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

const CommonForm = ({
  formControls = [],
  formData,
  setFormData,
  buttonText,
  onHandleSubmit,
}) => {
  const renderFormElement = (getCurrentElement) => {
    let content = null;

    switch (getCurrentElement?.componentType) {
      case formTypes.INPUT:
        content = (
          <CommonInput
            label={getCurrentElement.label}
            type={getCurrentElement.type}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name]}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;

      default:
        content = (
          <CommonInput
            label={getCurrentElement.label}
            type={getCurrentElement.type}
            name={getCurrentElement.name}
            id={getCurrentElement.id}
            placeholder={getCurrentElement.placeholder}
            value={formData[getCurrentElement.name]}
            onChange={(event) =>
              setFormData({
                ...formData,
                [event.target.name]: event.target.value,
              })
            }
          />
        );
        break;
    }
    return content;
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <div style={{ textAlign: "right", fontSize:"24px" }}>
        {formControls?.length
          ? formControls.map((singleFormElementItem) =>
              renderFormElement(singleFormElementItem)
            )
          : null}
      </div>

      <div style={{ marginTop: "12px" }}>
        <button type="submit">{buttonText || "Submit"}</button>
      </div>
    </form>
  );
};

export default CommonForm;
