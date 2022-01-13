import React from "react";

function Contact() {
  
    const onBtnClick = () => {
        alert("Your Response Has been Submited")
    }

  return (
    <div className="contactStyle">
      <h1 className="App my-4">Contact Us</h1>
      <div className="w-50 m-auto">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label text-start">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="Kiraz Eda"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          Your Question
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={5}
          defaultValue={""}
        />
      </div>
      <input className="btn btn-info" type="submit" defaultValue="Submit" onClick={onBtnClick}/>

      </div>
    </div>
  );
}

export default Contact;
