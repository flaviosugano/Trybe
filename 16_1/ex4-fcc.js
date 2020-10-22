// https://www.freecodecamp.org/learn/front-end-libraries/redux/use-a-switch-statement-to-handle-multiple-actions

// The code editor has a store, actions, and action creators set up for you. Fill in the reducer function
// to handle multiple authentication actions. Use a JavaScript switch statement in the reducer to respond 
// to different action events. This is a standard pattern in writing Redux reducers. The switch statement
// should switch over action.type and return the appropriate authentication state.

// Change code below this line

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

// Change code above this line

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case LOGIN:
      return {
        authenticated: true
      }

    case LOGOUT:
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};
