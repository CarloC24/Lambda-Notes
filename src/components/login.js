import React from 'react';
import '../CSS/index.scss';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';
import { get_name_picture } from '../actions';

const login = props => {
  const responseFacebook = response => {
    props.get_name_email(response.name, response.picture.data.url);
  };
  return (
    <div className="login">
      <h1 className="login-heading">Welcome to lambda notes</h1>
      <FacebookLogin
        appId="286081698918745"
        autoLoad={true}
        cssClass="button"
        fields="name,email,picture"
        onClick={() => props.toggle()}
        callback={responseFacebook}
      />
    </div>
  );
};

const mapStateToProps = state => {};

const mapDispatchToProps = dispatch => {
  return {
    get_name_email: (name, picture) => dispatch(get_name_picture(name, picture))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(login);
