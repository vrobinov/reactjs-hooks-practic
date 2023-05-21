import React, { useState } from "react";
import PropTypes from "prop-types";

export const SimpleComponent = ({ onLogIn, onLogOut, isAuth }) => {
    const [loginStatus, setLoginStatus] = useState(isAuth === "token");
    const handleClick = () => {
        loginStatus ? onLogOut() : onLogIn();
        setLoginStatus((loginStatus) => !loginStatus);
    };
    return (
        <div>
            <button className="btn btn-primary" onClick={handleClick}>
                {loginStatus ? "Выйти" : "Войти"}
            </button>
        </div>
    );
};
SimpleComponent.propTypes = {
    onLogIn: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.string
};
