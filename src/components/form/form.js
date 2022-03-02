import React from "react";
import "./form.css";

const Form = () => {
  return (
      <div id="formContainer">
    <div id="formWrap">
            <form>
        <div id="formControl">
          <input type="text" id="url" placeholder="Shorten a link here..." />
        </div>
      </form>
    </div>
    </div>
  );
};

export default Form;
