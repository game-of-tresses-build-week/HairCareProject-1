import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  NEW_ACCOUNT_START,
  NEW_ACCOUNT_SUCCESS,
  NEW_ACCOUNT_FAILURE
} from '../actions';


const initialState = {
  loggingIn: false,
  error: '',
  addingStylists: false
}

export const LoginReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_START:
      return {
        ...state,
        error: '',
        loggingIn: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: '',
        loggingIn: false
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        error: action.payload,
        loggingIn: false
      }
    case NEW_ACCOUNT_START:
      return {
        ...state,
        error: '',
        addingStylists: true
      }
    case NEW_ACCOUNT_SUCCESS:
      return {
        ...state,
        error: '',
        addingStylists: false
      }
    case NEW_ACCOUNT_FAILURE:
      return {
        ...state,
        error: action.payload,
        addingStylists: false
      }
    default:
      return state;
  }
}