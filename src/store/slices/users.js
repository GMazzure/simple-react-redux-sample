import { createSlice } from "@reduxjs/toolkit";
import { mockedUsers } from './userMockData'

const slice = createSlice({
  name: "users",
  initialState: {
    loading: false,
    data: null,
    error: null,
  },
  reducers: {
    fetchStarted(state) {
      state.loading = true
    },
    fetchSuccess(state, action) {
      state.loading = false
      state.error = null
      state.data = action.payload;
    },
    fetchError(state, action) {
      state.loading = false
      state.error = action.payload
      state.data = null
    },
  },
});

const { fetchStarted, fetchSuccess, fetchError } = slice.actions;

export const fetchUsers =
  (page = 1) =>
  async (dispatch) => {
    try {
      dispatch(fetchStarted());
       
      const mockedFetchUsers = () => {
        return new Promise((resolve) => {
          resolve(mockedUsers)
        })
      }
        
      const data = await mockedFetchUsers()

      // const response = await fetch(
      //   `https://dogsapi.origamid.dev/json/api/photo/?_page=${page}&_total=9&user=0`,
      //   {
      //     cache: "no-store",
      //   }
      // );
      // const data = await response.json();

      dispatch(fetchSuccess(data));
    } catch (error) {
      console.log(error.message)
      dispatch(fetchError(error.message));
    }
  };

export const selectByMinAge = (age) => (state) => state.users.data?.filter(
  (user) => {
    console.log(user.age, age)
    return user.age >= age
  }
)

export default slice.reducer;
