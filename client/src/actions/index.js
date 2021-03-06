import axios from "axios";
import { FETCH_USER } from "./types";
//action creator uses redux-thunk
//communicates with backend api

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};
