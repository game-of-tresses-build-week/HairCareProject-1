import {
    FETCH_STYLIST_START,
    FETCH_STYLIST_SUCCESS,
    FETCH_STYLIST_FAILURE,
    GET_STYLIST_BY_ID_START,
    GET_STYLIST_BY_ID_SUCCESS,
    GET_STYLIST_BY_ID_FAILURE,
    DELETE_POST_START,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILURE,
    UPDATE_POST_START,
    UPDATE_PROFILE_SUCCESS,
    UPDATE_POST_FAILURE
  } from '../actions';
  
  const initialState = {
    stylists: [],
    error: '',
    fetchingStylists: false,
    stylistPerson: {},
    deleteSuccessMessage: '',
    updatingPost: false,
  }
  
  export const StylistReducer = (state = initialState, action) => {
    switch(action.type) {
      case FETCH_STYLIST_START:
        return {
          ...state,
          error: '',
          fetchingStylists: true
        }
      case FETCH_STYLIST_SUCCESS:
        return {
          ...state,
          stylists: action.payload,
          error: '',
          fetchingStylists: false
        }
      case FETCH_STYLIST_FAILURE:
        return {
          error: action.payload,
          fetchingStylists: false
        }
      case GET_STYLIST_BY_ID_START:
        return {
          ...state,
          error: '',
          fetchingStylists: true
        }
      case GET_STYLIST_BY_ID_SUCCESS:
        return {
        ...state,
        error: '',
        stylistPerson: action.payload,
        fetchingStylists: false
        }
      case GET_STYLIST_BY_ID_FAILURE:
        return {
          ...state,
          error: action.payload,
          fetchingStylists: true
        }
      case DELETE_POST_START:
      return {
        ...state,
        error: "",
        deletingPost: true
      };
    case DELETE_POST_SUCCESS:
        const filteredPosts = state.stylistPerson.stylist.posts.filter(post => {
          return post.id !== action.payload;
        });
      return {
        ...state,
        error: "",
        deletingPost: false,
        deleteSuccessMessage: action.payload,
        stylistPerson: {
          stylist: {
            ...state.stylistPerson.stylist,
            posts: filteredPosts
          }
        }
      };
    case DELETE_POST_FAILURE:
      return {
        ...state,
        error: action.payload,
        deletingPost: false
      };
      case UPDATE_POST_START:
        return {
          ...state,
          error: '',
          updatingPost: true
        }
      case UPDATE_PROFILE_SUCCESS:
        return {
        ...state,
        error: '',
        updatingPost: false
        }
      case UPDATE_POST_FAILURE:
        return {
          ...state,
          error: action.payload,
          updatingPost: false
        }
      default:
        return state;
    }
  }
  