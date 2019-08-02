import {
  FETCH_PROFILE_START,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_FAILURE,
  ADD_POST_START,
  ADD_POST_SUCCESS,
  ADD_POST_FAILURE,
  UPDATE_PROFILE_START,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  UPDATE_ACTIVE_POST_START,
  UPDATE_ACTIVE_POST_SUCCESS,
  UPDATE_ACTIVE_POST_FAILURE
} from "../actions";

const initialState = {
  profiles: [],
  activePost: {},
  error: "",
  fetchingProfile: false,
  addingPost: false,
  updatingProfile: false,
  updatingPost: false,
  deletingPost: false
};

export const ProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PROFILE_START:
      return {
        ...state,
        error: "",
        fetchingProfile: true
      };
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state,
        profiles: action.payload,
        error: "",
        fetchingProfile: true
      };
    case FETCH_PROFILE_FAILURE:
      return {
        ...state,
        error: action.payload,
        fetchingProfile: false
      };
    case ADD_POST_START:
      return {
        ...state,
        error: "",
        addingPost: true
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        error: "",
        addingPost: true,
        profiles: action.payload
      };
    case ADD_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        addingPost: false
      };
    case UPDATE_PROFILE_START:
      return {
        ...state,
        error: "",
        updatingProfile: true
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        error: "",
        updatingProfile: true,
        profiles: action.payload
      };
    case UPDATE_PROFILE_FAILURE:
      return {
        ...state,
        error: action.payload,
        updatingProfile: false
      };
    case UPDATE_ACTIVE_POST_START:
      return {
        ...state,
        updatingPost: true
      };
    case UPDATE_ACTIVE_POST_SUCCESS:
      return {
        ...state,
        updatingPost: true,
        activePost: action.payload
      };
    case UPDATE_ACTIVE_POST_FAILURE:
      return {
        ...state,
        updatingPost: true,
        error: action.payload
      };
    default:
      return state;
  }
};
