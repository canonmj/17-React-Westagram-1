import React from "react";
import './Login.scss';
import { Link } from 'react-router-dom';
import logo from '../../../images/jiyeon/facebook_icon.png'

class LoginJY extends React.Component {
  render() {
    return (
      <div className="Login">
        <div className="login_container">
          <div className="instagram_logo">westagram</div>
          <form className="login_form">
            <input type="text" className="id_input" placeholder="전화번호, 사용자 이름 또는 이메일"/>
            <input type="password"  className="password_input" placeholder="비밀번호"/>
            <Link to="/main-jiyeon">
              <button className="inactive_btn login_btn">로그인</button>
            </Link>
          </form>
          <div className="underline_content">
            <div className="underline"></div>
            <p className="under_text">또는</p>
            <div className="underline"></div>
          </div>
          <button type="button" className="facebook_login_btn">
            <img src={logo} alt="Facebook icon"/>
            <span>Facebook으로 로그인</span>
          </button>
          <a className="forget-password" href="">비밀번호를 잊으셨나요?</a>
        </div>
        <div className="create_accout_container">
          <div>계정이 없으신가요？<span>가입하기</span></div>
        </div>
      </div>
    );
  }
}
export default LoginJY;
