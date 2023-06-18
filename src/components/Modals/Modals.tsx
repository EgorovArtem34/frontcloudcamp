import { useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import './modals.scss';
import successIcon from '../../assets/icon/successIcon.png';
import errorIcon from '../../assets/icon/errorIcon.png';
import closeIcon from '../../assets/icon/errorClose.svg';
import { setShowModal } from '../../store/modalsSlice';
import { resetAboutValue } from '../../store/aboutSlice';
import { reseteAdvantages } from '../../store/advantagesSlice';
import { resetStatusCheckBox } from '../../store/checkBoxesSlice';
import { resetProgressBar } from '../../store/progressBarSlice';
import { resetRadioValue } from '../../store/radioInputsSlice';
import { resetUserState } from '../../store/userSlice';
import ModalLoader from './ModalLoader';

const Modals = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isModalShow } = useAppSelector((state) => state.modalsSlice);
  const { postData: { error, isLoading } } = useAppSelector((state) => state.userSlice);
  if (!isModalShow) {
    return null;
  }
  if (isLoading) {
    return <ModalLoader />;
  }
  const headerClass = () => cn('modal__header', {
    modal__header_error: error,
    modal__header_success: !error,
  });
  const footerClass = () => cn('modal__footer', {
    modal__footer_center: !error,
    modal__footer_right: error,
  });

  const handleClick = () => {
    dispatch(setShowModal(false));
    if (error) {
      return;
    }
    dispatch(resetAboutValue());
    dispatch(reseteAdvantages());
    dispatch(resetStatusCheckBox());
    dispatch(resetProgressBar());
    dispatch(resetRadioValue());
    dispatch(resetUserState());
    navigate('/');
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      event.stopPropagation();
    }
  };

  return (
    <div
      className="modal"
      onClick={handleClick}
      onKeyDown={handleClick}
      role="button"
      tabIndex={0}
    >
      <div
        className="modal__content"
        onClick={(event) => event.stopPropagation()}
        onKeyDown={handleKeyDown}
        role="button"
        tabIndex={0}
      >
        <div className={headerClass()}>
          <h3 className="modal__title">
            {error ? 'Ошибка' : 'Форма успешно отправлена'}
          </h3>
          {error ? (
            <button type="button" className="button-transparent" onClick={handleClick}>
              <img src={closeIcon} alt="закрыть" className="modal__close-icon" />
            </button>
          )
            : null}
        </div>
        <div className="modal__body">
          <div className="modal__logo__container">
            <img src={error ? errorIcon : successIcon} alt="ошибка" className="modal__logo" />
          </div>
        </div>
        <div className={footerClass()}>
          <button
            type="button"
            onClick={handleClick}
            className="form__button"
            id={error ? 'button-close' : 'button-to-main'}
          >
            {error ? 'Закрыть' : 'На главную'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modals;
