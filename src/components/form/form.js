import React from "react";
import "./form.css";

const Form = () => {
  return (
    <section id='shortenContainer'>
    <div id='shortenWrap'>
      <div id="formContainer">
    <div id="formWrap">
            <form>
        <div id="formControl">
        <label id="hiddenLabel" htmlFor='url'>Shorten a link here</label>
          <input type="text" id="url" placeholder="Shorten a link here..." />
          <button id="submitButton">Shorten It!</button>
        </div>
      </form>
    </div>
    </div>
    </div>
    </section>
  );
};

export default Form;
