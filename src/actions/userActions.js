export const userActionTypes = {
    LOG_IN: "LOG_IN",
    LOG_OUT: "LOG_OUT",
};

export const logIn = (payload) => ({ type: userActionTypes.LOG_IN, payload });

export const logOut = () => ({ type: userActionTypes.LOG_OUT });
