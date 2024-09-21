/* eslint-disable react/prop-types */
import cl from "./Popup.module.css";

const AuthPopup = ({popupType, activatePopup}) => {
  return (
    <div className={[cl.authPopup, activatePopup].join(' ')}>
      <h2>{popupType}</h2>
      <form className={cl.authForm}>
        <div className={cl.formGroup}>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
        </div>
        <div className={cl.formGroup}>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
        </div>
        <button type="submit" className={cl.submitButton}>
          {popupType === 'login' ? 'Login' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default AuthPopup;
