import contactFormStyles from '../styles/components/contactForm.module.scss';

import React from 'react';

import { Field, Form, Formik } from 'formik';

const contactForm = () => {
  // function encode takes object of key: "value" pairs and turns it into query string
  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        message: '',
      }}
      onSubmit={(values, actions) => {
        fetch('/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: encode({ 'form-name': 'contact-demo', ...values }),
        })
          .then(() => {
            alert('Success');
            actions.resetForm();
          })
          .catch(() => {
            alert('Error');
          })
          .finally(() => actions.setSubmitting(false));
      }}
      validate={(values) => {
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        const errors = {};
        if (!values.name) {
          errors.name = 'Name Required';
        }
        if (!values.email || !emailRegex.test(values.email)) {
          errors.email = 'Valid Email Required';
        }
        if (!values.message) {
          errors.message = 'Message Required';
        }
        return errors;
      }}
    >
      {({ errors }) => (
        <Form
          className={contactFormStyles.form}
          name='contact-demo'
          data-netlify={true}
        >
          <label htmlFor='name' className={contactFormStyles.label}>
            Name:{' '}
          </label>
          <p className={contactFormStyles.error}>{errors.name}</p>
          <Field name='name' className={contactFormStyles.field} />

          <label htmlFor='email' className={contactFormStyles.label}>
            Email:{' '}
          </label>
          <p className={contactFormStyles.error}>{errors.email}</p>
          <Field name='email' className={contactFormStyles.field} />

          <label htmlFor='message' className={contactFormStyles.label}>
            Message:{' '}
          </label>
          <p className={contactFormStyles.error}>{errors.message}</p>
          <Field
            name='message'
            component='textarea'
            className={`${contactFormStyles.field}`}
          />
          <div>
            <button type='submit' className={contactFormStyles.button}>
              Send message
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default contactForm;
