import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import InputMask from 'react-input-mask';
import cn from 'classnames';
import * as yup from 'yup';
import './mainPage.scss';
import { myEmail, myPhone } from '../../utils/utils';
import { InputMainPageType } from '../../types';

const Form = () => {
  const navigate = useNavigate();
  const signUpSchema = yup.object().shape({
    phoneNumber: yup
      .string()
      .matches(/^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/, 'Номер должен соответствовать формату +7 (999) 999-99-99')
      .required('Поле является обязательным'),
    email: yup
      .string()
      .trim()
      .email('Почта должна соответствовать формату name@gmail.com')
      .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, 'Почта должна соответствовать формату name@gmail.com')
      .required('Поле является обязательным'),
  });
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      phoneNumber: myPhone,
      email: myEmail,
    },
    validationSchema: signUpSchema,
    onSubmit: () => {
      navigate('/step1');
    },
  });
  const inputClass = (inputName: InputMainPageType) => cn('form__input', 'form__input_main-page', {
    'form__input-error': formik.errors[inputName] && formik.touched[inputName],
  });
  return (
    <form className="form" onSubmit={formik.handleSubmit}>
      <label htmlFor="phoneNumber" className="form__label-flex form__label_main-page">
        Номер телефона
        <InputMask
          mask="+7 (999) 999-99-99"
          maskPlaceholder={null}
          type="tel"
          name="phoneNumber"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
          id="phoneNumber"
          disabled
          className={inputClass('phoneNumber')}
          required
        />
        {formik.errors.phoneNumber && formik.touched.phoneNumber && <p className="form__error-text">{formik.errors.phoneNumber}</p>}
      </label>
      <label htmlFor="email" className="form__label-flex form__label_main-page">
        Email
        <input
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={inputClass('email')}
          disabled
          required
        />
        {formik.errors.email && formik.touched.email && <p className="form__error-text">{formik.errors.email}</p>}
      </label>
      <div className="form__button-wrap">
        <button
          type="submit"
          className="form__button button__submit"
          id="button-start"
        >
          Начать
        </button>
      </div>
    </form>
  );
};
export default Form;
