import { axiosWithAuth } from "../axiosWithAuth";
// import stylistData from '../../src/stylistData';

//loginPage actions & actionCreator
export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axiosWithAuth()
    .post("/auth/login", creds)
    .then(res => {
      console.log("response", res.data);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userId", res.data.ID);
      dispatch({ type: LOGIN_SUCCESS });
      return true;
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAILURE, payload: err });
    });
};

//newAccount actions & actionCreator
export const NEW_ACCOUNT_START = "NEW_ACCOUNT_START";
export const NEW_ACCOUNT_SUCCESS = "NEW_ACCOUNT_SUCCESS";
export const NEW_ACCOUNT_FAILURE = "NEW_ACCOUNT_FAILURE";

export const newAccount = newStylist => dispatch => {
  dispatch({ type: NEW_ACCOUNT_START });
  return axiosWithAuth()
    .post("/auth/register", newStylist)
    .then(res => {
      console.log("resData:", res.data);
      // localStorage.setItem('userType', res.data.type)
      localStorage.setItem("token", res.data.token);
      dispatch({ type: NEW_ACCOUNT_SUCCESS, payload: res.data });
      return true;
    })
    .catch(err => {
      dispatch({ type: NEW_ACCOUNT_FAILURE, payload: err });
    });
};

//stylists actions & actionCreators
export const FETCH_STYLIST_START = "FETCH_STYLIST_START";
export const FETCH_STYLIST_SUCCESS = "FETCH_STYLIST_SUCCESS";
export const FETCH_STYLIST_FAILURE = "FETCH_STYLIST_FAILURE";

export const getStylists = () => dispatch => {
  dispatch({ type: FETCH_STYLIST_START });
  axiosWithAuth()
    .get("/users")
    .then(res => {
      console.log("FETCH action users", res.data);
      dispatch({ type: FETCH_STYLIST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_STYLIST_FAILURE, payload: err.response });
    });
};

//fetching profile data for stylist user to see on login/signup
//MAY NOT NEED THIS ACTION - REMOVE
export const FETCH_PROFILE_START = "FETCH_PROFILE_START";
export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS";
export const FETCH_PROFILE_FAILURE = "FETCH_PROFILE_FAILURE";

export const getProfiles = id => dispatch => {
  dispatch({ type: FETCH_PROFILE_START });
  axiosWithAuth()
    .get(`/users/${id}`)
    .then(res => {
      console.log("profile", res.data);
      dispatch({ type: FETCH_PROFILE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_PROFILE_FAILURE, payload: err.response });
    });
};

//fetching stylist info by id for client user to see on btn click
export const GET_STYLIST_BY_ID_START = "GET_STYLIST_BY_ID_START";
export const GET_STYLIST_BY_ID_SUCCESS = "GET_STYLIST_BY_ID_SUCCESS";
export const GET_STYLIST_BY_ID_FAILURE = "GET_STYLIST_BY_ID_FAILURE";

export const getStylistId = id => dispatch => {
  dispatch({ type: GET_STYLIST_BY_ID_START });
  axiosWithAuth()
    .get(`/users/${id}`)
    .then(res => {
      dispatch({ type: GET_STYLIST_BY_ID_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_STYLIST_BY_ID_FAILURE, payload: err.response });
    });
};

// //NewPostForm actions & actionCreator
// //post request
//adding a new portfolio item to the profile page . . . . not a new person. How??
export const ADD_POST_START = "ADD_POST_START";
export const ADD_POST_SUCCESS = "ADD_POST_SUCCESS";
export const ADD_POST_FAILURE = "ADD_POST_FAILURE";

export const addPost = newPost => dispatch => {
  dispatch({ type: ADD_POST_START });
  axiosWithAuth()
    .post("/users/posts", newPost)
    .then(res => {
      dispatch({ type: ADD_POST_SUCCESS, payload: res.data });
      
    })
    .catch(err => {
      dispatch({ type: ADD_POST_FAILURE, payload: err.response });
    });
};

export const DELETE_POST_START = "DELETE_POST_START";
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS";
export const DELETE_POST_FAILURE = "DELETE_POST_FAILURE";

export const deletePost = id => dispatch => {
  dispatch({ type: DELETE_POST_START });
  axiosWithAuth()
    .delete(`/users/${id}/posts`)
    .then(res => {
      console.log(res.data)
      dispatch({ type: DELETE_POST_SUCCESS, payload: id });
    })
    .catch(err => {
      dispatch({ type: DELETE_POST_FAILURE, payload: err.response });
    });
};

export const UPDATE_PROFILE_START = "UPDATE_PROFILE_START";
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS";
export const UPDATE_PROFILE_FAILURE = "UPDATE_PROFILE_FAILURE";

export const updateProfile = (id, updatedProfile) => dispatch => {
  dispatch({ type: UPDATE_PROFILE_START });
  axiosWithAuth()
    .put(`/users/${id}`, updatedProfile)
    .then(res => {
      dispatch({ type: UPDATE_PROFILE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_PROFILE_FAILURE, payload: err.response });
    });
};

//updating locatState, pushing currentState into the form
export const UPDATE_ACTIVE_POST_START = `UPDATE_ACTIVE_POST_START`;
export const UPDATE_ACTIVE_POST_SUCCESS = `UPDATE_ACTIVE_POST_SUCCESS`;
export const UPDATE_ACTIVE_POST_FAILURE = `UPDATE_ACTIVE_POST_FAILURE`;

export const updateActivePost = post => dispatch => {
  dispatch({ type: UPDATE_ACTIVE_POST_START });
  console.log('ACTIVE POST MESSAGE: ', post)
  if (post !== undefined) {
    dispatch({ type: UPDATE_ACTIVE_POST_SUCCESS, payload: post });
  } else {
    dispatch({
      type: UPDATE_ACTIVE_POST_FAILURE,
      payload: "There was an error accessing the object"
    });
  }
};

export const UPDATE_POST_START = `UPDATE_POST_START`;
export const UPDATE_POST_SUCCESS = `UPDATE_POST_SUCCESS`;
export const UPDATE_POST_FAILURE = `UPDATE_POST_FAILURE`;

export const updatePost = (id, post) => dispatch => {
  dispatch({ type: UPDATE_POST_START });
  axiosWithAuth()
    .put(`/users/${id}/posts`, post)
    .then(res => {
      console.log('PUT REQUEST', res.data)
      dispatch({ type: UPDATE_POST_SUCCESS, payload: post })
    })
    .catch(err => {
      dispatch({ type: UPDATE_POST_FAILURE, payload: err.response })
    })
};