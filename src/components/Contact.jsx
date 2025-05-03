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
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className={styles.iconWrapper} aria-hidden="true">
            <SiMinutemailer />
          </div>
          <div className={styles.contentWrapper}>
            <h2 className="text-xl font-bold">{t('form_notif')}</h2>
          </div>
          <button 
            className={styles.closeIcon} 
            onClick={() => toast.dismiss(tt.id)}
            aria-label={t('close_notification')}
            type="button"
          >
            <MdOutlineClose aria-hidden="true" />
          </button>
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
      <div className='flex flex-col items-center relative xl:px-20 bg-gray-950/25 backdrop-blur border-y-1.5 border-pink'>
        <h2 className='text-gray-400 text-2xl font-semibold mt-12 mb-6 hidden lg:inline'>{t('contact_me')}</h2>
        <Toaster />
        <div className='inline lg:flex justify-around my-24 px-8'>
          <div className='flex-1 text-center lg:text-start'>
            <h2 className='text-white text-4xl lg:text-5xl mb-5'>{t('contact_title')}</h2>
            <p className='text-gray-400 text-2xl mb-12'>{t('contact_subtitle')}</p>
            <div className='group hidden lg:inline'>
              <a 
                className="flex items-center text-pink text-lg group-hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-400" 
                href="mailto:iacovozzi.jessica@gmail.com"
                aria-label="Email me at iacovozzi.jessica@gmail.com"
              >
                <TfiEmail className='text-pink me-1 group-hover:text-white' aria-hidden="true" />
                iacovozzi.jessica@gmail.com
              </a>
            </div>
          </div>
          <form onSubmit={formik.handleSubmit} className='flex flex-col text-white flex-1 px-5 lg:px-0' aria-label={t('contact_form')} noValidate>
            <div className='mb-4'>
              <label className='mb-1 font-medium' htmlFor="from_name">
                {t('name')}
                <span className="text-red-500 ml-1" aria-hidden="true">*</span>
              </label>
              <input 
                type="text" 
                id="from_name" 
                name="from_name" 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.from_name} 
                className='w-full rounded-md text-2xl text-gray-950 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400' 
                aria-required="true" 
                aria-invalid={formik.touched.from_name && formik.errors.from_name ? "true" : "false"}
                aria-describedby={formik.touched.from_name && formik.errors.from_name ? "from_name-error" : undefined}
              />
              <div 
                id="from_name-error"
                className={`expandable text-red-700 ${formik.touched.from_name && formik.errors.from_name ? 'show' : ''}`}
                aria-live="polite"
              >
                {formik.errors.from_name}
              </div>
            </div>
            <div className='mb-4'>
              <label className='my-1 font-medium' htmlFor="reply_to">
                {t('email')}
                <span className="text-red-500 ml-1" aria-hidden="true">*</span>
              </label>
              <input 
                type="email" 
                id="reply_to" 
                name="reply_to" 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.reply_to} 
                className='w-full rounded-md text-2xl text-gray-950 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400' 
                aria-required="true" 
                aria-invalid={formik.touched.reply_to && formik.errors.reply_to ? "true" : "false"}
                aria-describedby={formik.touched.reply_to && formik.errors.reply_to ? "reply_to-error" : undefined}
              />
              <div 
                id="reply_to-error"
                className={`expandable text-red-700 ${formik.touched.reply_to && formik.errors.reply_to ? 'show' : ''}`}
                aria-live="polite"
              >
                {formik.errors.reply_to}
              </div>
            </div>
            <div className='mb-4'>
              <label className='my-1 font-medium' htmlFor="message">
                {t('message')}
                <span className="text-red-500 ml-1" aria-hidden="true">*</span>
              </label>
              <textarea 
                id="message" 
                name="message" 
                onChange={formik.handleChange} 
                onBlur={formik.handleBlur}
                value={formik.values.message} 
                className='w-full rounded-md text-2xl text-gray-950 p-2 focus:outline-none focus:ring-2 focus:ring-blue-400' 
                aria-required="true" 
                aria-invalid={formik.touched.message && formik.errors.message ? "true" : "false"}
                aria-describedby={formik.touched.message && formik.errors.message ? "message-error" : undefined}
                rows="4"
              />
              <div 
                id="message-error"
                className={`expandable text-red-700 ${formik.touched.message && formik.errors.message ? 'show' : ''}`}
                aria-live="polite"
              >
                {formik.errors.message}
              </div>
            </div>
            <button 
              type="submit" 
              disabled={formik.isSubmitting} 
              className="w-fit mx-auto text-lg relative inline-flex border-2 mt-2 border-white hover:border-gray-950 px-6 py-3 overflow-hidden font-medium transition-all bg-gray-950 rounded-lg hover:bg-gray-950 group focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label={formik.isSubmitting ? t('sending_message') : t('send_message')}
            >
              <span className="w-48 h-48 rounded rotate-[-40deg] bg-white absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
              <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-gray-950">{buttonState}</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

Contact.propTypes = {
  contactRef: PropTypes.object
}
