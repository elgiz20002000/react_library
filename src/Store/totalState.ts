import { createSlice } from "@reduxjs/toolkit";
import { totalStateInterface } from "../interfaces/totalState";
import { RootState } from "./store";

const totalState = createSlice({
  name: "totalState",
  initialState: {
    search: "",
    sort: "relevance",
    filter: "All",
    count: 1,
  } as totalStateInterface,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    increaseCount: (state) => {
      state.count += 30;
    },
    setDefaultCount: (state) => {
      state.count = 1;
    },
  },
});

export const getSearch = (state: RootState) => state.totalState.search;
export const getMore = (state: RootState) => state.totalState.more;
export const getSort = (state: RootState) => state.totalState.sort;
export const getFilter = (state: RootState) => state.totalState.filter;
export const getCount = (state: RootState) => state.totalState.count;

export const { setSearch, setSort, setFilter, increaseCount, setDefaultCount } =
  totalState.actions;

export default totalState.reducer;
