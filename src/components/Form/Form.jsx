import { Form, ErrorMessage, Field, Formik } from "formik";
import * as Yup from "yup";
import css from "./Form.module.css";

const FormСomment = () => {
  const initialValues = {
    name: "",
    email: "",
    booking_date: "",
    comment: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    booking_date: Yup.date().required("Booking date is required"),
  });

  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={css.form}>
        <div className={css.inputWrapper}>
          <Field
            className={css.input}
            type="text"
            name="name"
            placeholder="Name"
            autoComplete="off"
          />

          <ErrorMessage
            name="name"
            component="span"
            className={css.error}
          ></ErrorMessage>
        </div>

        <div className={css.inputWrapper}>
          <Field
            className={css.input}
            type="text"
            name="email"
            placeholder="Email"
            autoComplete="off"
          />

          <ErrorMessage
            name="email"
            component="span"
            className={css.error}
          ></ErrorMessage>
        </div>

        <div className={css.inputWrapper}>
          <Field
            className={css.input}
            type="date"
            name="booking_date"
            placeholder="Name"
            autoComplete="off"
          />

          <ErrorMessage
            name="booking_date"
            placeholder="Booking date"
            component="span"
            className={css.error}
          ></ErrorMessage>
        </div>

        <div className={css.inputWrapper}>
          <Field
            name="comment"
            as="textarea"
            className={css.textarea}
            placeholder="Comment"
          />
          <ErrorMessage name="comment" component="div" className={css.error} />
        </div>

        <button className={css.submitBtn} type="submit">
          Send
        </button>
      </Form>
    </Formik>
  );
};

export default FormСomment;
