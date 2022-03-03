import React from "react";
import "./form.css";

const Form = () => {
  return (
    <section id='shortenContainer'>
    <div id='shortenWrap'>
      <div id="formContainer">
    <div id="formWrap">
      <label id="hiddenLabel" htmlFor='url'>Shorten a link here</label>
            <form>
        <div id="formControl">
          <input type="text" id="url" placeholder="Shorten a link here..." />
        </div>
      </form>
      <button id="submitButton">Shorten It!</button>
    </div>
    </div>
    </div>
    </section>
  );
};

export default Form;
