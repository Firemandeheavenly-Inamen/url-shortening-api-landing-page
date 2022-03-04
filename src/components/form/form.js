import React from "react";
import "./form.css";

const Form = () => {
  return (
    <div id="formWrap">
            <form>
        <div id="formControl">
          <input type="text" id="url" placeholder="Shorten a link here..." />
          <button id="submitButton">Shorten It!</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
