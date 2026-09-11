import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const loadPortfolio = createAsyncThunk(
  "portfolio/load",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(`${API_BASE_URL}/portfolio`);

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const result = await response.json();

      if (!result.success) {
        throw new Error(result.message || "Failed to load portfolio");
      }

      return result.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  profile: null,
  projects: [],
  skills: [],
  status: "idle",
  error: null,
};

const portfolioSlice = createSlice({
  name: "portfolio",

  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(loadPortfolio.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })

      .addCase(loadPortfolio.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.profile = action.payload.profile;
        state.projects = action.payload.projects;
        state.skills = action.payload.skills;
        
      })

      .addCase(loadPortfolio.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.payload || action.error.message || "Something went wrong";
      });
  },
});

export default portfolioSlice.reducer;