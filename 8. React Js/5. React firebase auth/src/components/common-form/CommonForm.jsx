import CommonInput from "../common-input/CommonInput";

const formElementTypes = {
  INPUT: "input",
  SELECT: "select",
  TEXTAREA: "textarea",
};

const CommonForm = ({
  formControlls = [],
  buttonText,
  formData,
  setFormData,
  onSubmit,
}) => {
  const renderFormElement = (getCurrentFormControll, getFormData) => {
    let element = null;

    switch (getCurrentFormControll.componentType) {
      case formElementTypes.INPUT:
        element = (
          <CommonInput
            type={getCurrentFormControll.type}
            placeholder={getCurrentFormControll.placeholder}
            value={getFormData[getCurrentFormControll.name]}
            name={getCurrentFormControll.name}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getCurrentFormControll.name]: event.target.value,
              })
            }
          />
        );
        break;
      /*  case formElementTypes.SELECT:
        break;
      case formElementTypes.TEXTAREA:
        break; */

      default:
        element = (
          <CommonInput
            type={getCurrentFormControll.type}
            placeholder={getCurrentFormControll.placeholder}
            value={getFormData[getCurrentFormControll.name]}
            name={getCurrentFormControll.name}
            onChange={(event) =>
              setFormData({
                ...formData,
                [getCurrentFormControll.name]: event.target.value,
              })
            }
          />
        );
        break;
    }
    return element;
  };

  return (
    <form onSubmit={onSubmit}>
      {formControlls.map((singleFormControll) =>
        renderFormElement(singleFormControll, formData)
      )}
      <button type="submit">{buttonText || "Submit"}</button>
    </form>
  );
};

export default CommonForm;
