import './Contact.css';
import styles from "./Contact.module.css";
import classNames from "classnames";
import emailjs from '@emailjs/browser';
import * as Yup from 'yup';
import { useTranslation } from "react-i18next";
import { useState } from 'react';
import { useFormik } from 'formik';
import toast, { Toaster } from "react-hot-toast";
import { TfiEmail} from 'react-icons/tfi';
import { MdOutlineClose } from "react-icons/md";
import { SiMinutemailer } from "react-icons/si";
import PropTypes from 'prop-types';

export default function Contact({ contactRef }) {
  const { t } = useTranslation();
  const [buttonState, setButtonState] = useState(t('send_message'));

  const notify = () =>
    toast.custom(
      (tt) => (
        <div
          className={classNames([
            styles.notificationWrapper,
            tt.visible ? "top-0" : "-top-96",
          ])}
        >
          <div className={styles.iconWrapper}>
            <SiMinutemailer />
          </div>
          <div className={styles.contentWrapper}>
            <h1>{t('form_notif')}</h1>
          </div>
          <div className={styles.closeIcon} onClick={() => toast.dismiss(tt.id)}>
            <MdOutlineClose />
          </div>
        </div>
      ),
      { id: "unique-notification", position: "top-right" }
  );

  const formik = useFormik({
    initialValues: {
      from_name: '',
      reply_to: '',
      message: ''
          },
    validationSchema: Yup.object({
       from_name: Yup.string()
      .required(t('required_name')),
       reply_to: Yup.string().email(t('invalid_email'))
      .required(t('required_email')),
       message: Yup.string().required(t('required_message'))
    }),
    onSubmit: (values, {setSubmitting, resetForm}) => {
       try{
      emailjs.send('service_stqbexb' , 'template_gl4fykr', values, 'A0yMhGCbJrQ8dMh6q')
        .then(() => {
           setButtonState(t('send_message'));
           setSubmitting(false);
           resetForm();
           notify();
              });
       }
       catch {
          setButtonState(t('send_message'));
          setSubmitting(false);
      }
       },
    });

  return (
    <div ref={contactRef} id='contact' className='lg:h-screen xl:h-3/4 mt-80 lg:mt-28 xl:mt-60'>
      <div className='flex flex-col items-center relative bg-gray-950/25 backdrop-blur border-y-1.5 border-pink'>
        <h2 className='text-gray-400 text-lg mt-12 hidden lg:inline'>{t('contact_me')}</h2>
        <Toaster />
        <div className='inline lg:flex justify-around my-24 px-8'>
          <div className='flex-1 text-center lg:text-start'>
            <h2 className='text-white text-4xl lg:text-5xl mb-5'>{t('contact_title')}</h2>
            <p className='text-gray-400 text-2xl mb-20'>{t('contact_subtitle')}</p>
            <div className='group hidden lg:inline'>
              <a className="flex items-center text-pink text-lg group-hover:text-white" href="mailto:iacovozzi.jessica@gmail.com">
                <TfiEmail className='text-pink me-1 group-hover:text-white' />
                iacovozzi.jessica@gmail.com
              </a>
            </div>
          </div>
          <form onSubmit={formik.handleSubmit} className='flex flex-col text-white flex-1 px-5 lg:px-0'>
              <label className='mb-1'>{t('name')}</label>
            <div className='mb-4'>
              <input type="text" id="from_name" name="from_name" onChange={formik.handleChange} value={formik.values.from_name} className='w-full rounded-md text-2xl text-gray-950 p-2' />
              <div className={`expandable text-red-700 ${formik.touched.from_name && formik.errors.from_name ? 'show' : ''}`}>
                  {formik.errors.from_name}
              </div>
            </div>
              <label className='my-1'>{t('email')}</label>
            <div className='mb-4'>
              <input type="email" id="reply_to" name="reply_to" onChange={formik.handleChange} value={formik.values.reply_to} className='w-full rounded-md text-2xl text-gray-950 p-2' />
              <div className={`expandable text-red-700 ${formik.touched.reply_to && formik.errors.reply_to ? 'show' : ''}`}>
                {formik.errors.reply_to}
              </div>
            </div>
              <label className='my-1'>{t('message')}</label>
            <div className='mb-4'>
              <textarea id="message" name="message" onChange={formik.handleChange} value={formik.values.message} className='w-full rounded-md text-2xl text-gray-950 p-2' />
              <div className={`expandable text-red-700 ${formik.touched.message && formik.errors.message ? 'show' : ''}`}>
                  {formik.errors.message}
              </div>
            </div>
            <button type="submit" disabled={formik.isSubmitting} className="hover:text-pink mt-2 text-lg relative inline-flex border-2 border-white hover:border-pink justify-center px-4 py-2 overflow-hidden font-medium transition-all bg-gray-950 rounded-lg hover:bg-gray-950 group">{buttonState}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  contactRef: PropTypes.object
}
