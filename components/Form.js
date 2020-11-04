import React from "react"
import { useState } from "react"
import { Formik } from "formik"
import * as Yup from "yup"
import Error from "./Error"
import emailjs from "emailjs-com"

const validationSchema = Yup.object().shape({
  name: Yup.string().min(1, "Must have a character").max(255, "Must be shorter than 255").required("Must enter a name"),
  email: Yup.string().min(1, "Must be a valid email address").max(255, "Must be shorter than 255").required("Must enter an email"),
  text: Yup.string().min(1, "Must have a character").max(255, "Must be shorter than 255").required("Must enter a message")
})

const Form = () => {
  const [status, setStatus] = useState("")

  function sendEmail(e) {
    e.preventDefault()
    emailjs.sendForm("lionellord@gmail.com", "template_n784bvm", e.target, "user_3O9WLynbLmp0MSRxtHwd2").then(
      result => {
        setStatus("Message sent")
      },
      error => {
        alert(error.text)
      }
    )
    e.target.reset()
  }
  return (
    <Formik
      initialValues={{ name: "", email: "", text: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(true)

        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          resetForm()
          setSubmitting(false)
        }, 500)
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={sendEmail}>
          <div className="input-row">
            <input type="text" name="name" id="name" placeholder="Your Name" onChange={handleChange} onBlur={handleBlur} value={values.name} className={touched.name && errors.name ? "has-error" : null} />
            <Error touched={touched.name} message={errors.name} />
          </div>
          <div className="input-row">
            <input type="email" name="email" id="email" placeholder="Your Email" onChange={handleChange} onBlur={handleBlur} value={values.email} className={touched.email && errors.email ? "has-error" : null} />
            <Error touched={touched.email} message={errors.email} />
          </div>
          <div className="input-row">
            <textarea type="text" name="text" id="text" placeholder="Your Message" onChange={handleChange} onBlur={handleBlur} value={values.text} className={touched.text && errors.text ? "has-error" : null} />
            <Error touched={touched.text} message={errors.text} />
          </div>
          <div className="input-row message">
            <button type="submit" disabled={isSubmitting}>
              Send
            </button>
          </div>
          <div className="status">{status}</div>
        </form>
      )}
    </Formik>
  )
}

export default Form
