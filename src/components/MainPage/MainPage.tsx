import './mainPage.scss';
import socialIcon from '../../assets/icon/interface/social.svg';
import Form from './Form';
import { myLinks } from '../../utils/utils';

const MainPage = () => {
  const createUserSocialElements = () => myLinks.map((link) => (
    <div className="social__element" key={link.id}>
      <div className="social__logo">
        <img src={socialIcon} alt="social icon" className="social__logo__icon" />
      </div>
      <a className="social__link" href={link.url} target="_blank" type="button" rel="noreferrer">{link.name}</a>
    </div>
  ));

  return (
    <div className="container">
      <div className="main__header">
        <div className="main__header__user user">
          <div className="user__avatar avatar">
            <span className="avatar__text">АЕ</span>
          </div>
          <div className="user__data">
            <h3 className="user__title">Артем Егоров</h3>
            <div className="user__data__social social">
              {createUserSocialElements()}
            </div>
          </div>
        </div>
      </div>
      <div className="main__form">
        <Form />
      </div>
    </div>
  );
};

export default MainPage;
