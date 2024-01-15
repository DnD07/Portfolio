import React, { useRef } from "react";
import style from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import emailjs from '@emailjs/browser'


function Contact() {

  const form = useRef();

  const sendEmail = (e) =>{
    e.preventDefault();
    emailjs.sendForm("service_jd7p3qv", "template_zaf0v9g", form.current, 
    'p2NOKyjQPeMGgbejV')
    .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });

  }
  return (
    <footer id="contact" className={style.container}>
      <div>
        <h1 className={style.title}>Contact</h1>
        <p className={style.text}>Feel free to contact..!!</p>
      </div>
      <ul className={style.links}>
        <li className={style.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="emailIcon" />
          <a href="mailto: 07dnd.dahal@gmail.com">07dnd.dahal@gmail.com</a>
        </li>
        <li className={style.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="linkedinIcon"
          />
          <a href="https://www.linkedin.com/in/dinanath-dahal-073472219/">linkedin.com./dinanathdahal</a>
        </li>
        <li className={style.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="githubIcon" />
          <a href="https://github.com/DnD07">github.com./07dnd</a>
        </li>
      </ul >
      <form className={style.form} action="submit" ref={form}  onSubmit={sendEmail} >
        <ul className={style.formContents}>
          <li className={style.inputs} >
            <label className={style.formText} >Name</label>
            <input type="text" id="name" name="user_name" placeholder="Name" className={style.inputField} required/>
          </li>
          <li className={style.inputs}>
          <label className={style.formText}>Email</label>
          <input type="text" name="user_email" id="email" placeholder="Email" className={style.inputField} required />
          </li>
          <li className={style.inputs}>
            <label className={style.formText}>Message</label>
            <textarea type="textarea"  name="message" placeholder="Drop your message" className={style.messageInputs} required/>
          </li>
          <button type="submit"  value="Send" className={style.formBtn}>Send</button>
        </ul>
      </form>
    </footer>
  );
}

export default Contact;
