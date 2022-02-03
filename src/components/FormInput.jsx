import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  // 초기 값이 false이므로 input에 처음 입력할때는 pattern에 의해서 css가 동작하지 않음. (input:invalid[focus="false"] 이기 때문)
  // 이제 blur가 일어났을때는 focused가 무조건 true이기 때문에 input:invalid[focus="true"]에 의해서 계속해서 체킹 된다.
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        onFocus={() =>
          // confirmPassword일 경우는 무조건 focused를 true로 지정.
          inputProps.name === "confirmPassword" && setFocused(true)
        }
        focused={focused.toString()}
      />
      <span>{errorMessage}</span>
    </div>
  );
};

export default FormInput;
