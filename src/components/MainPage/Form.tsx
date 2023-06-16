import { useNavigate } from 'react-router-dom';
import './mainPage.scss';

const Form = () => {
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate('/step1');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="phoneNumber">
        Номер телефона
        <br />
        <input
          type="text"
          name="phoneNumber"
          className="form__input form__input_main-page"
          disabled
          defaultValue="+7 999 999-99-99"
        />
      </label>
      <br />
      <label htmlFor="email">
        Email
        <br />
        <input
          type="email"
          name="email"
          className="form__input form__input_main-page"
          disabled
          defaultValue="artegtor@gmail.com"
        />
      </label>
      <br />
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
