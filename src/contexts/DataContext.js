import { useThunkReducer } from "../hooks/useThunkReducer";
import produce from "immer";
import React from "react";
import { apiActionTypes } from "./ApiContext";

const initialState = {
  videos: [],
  categories: [],
  activeCategories: [],
  watchHistory: [],
  watchLater: [],
  playlists: [],
  singlePlaylist: [],
  likedVideos: [],
  activeCategories: [],
  activePlaylist: [],
};

const reducer = produce((state = initialState, action) => {
  //* videos actions
  if (action.type === apiActionTypes.getAllVideos) {
    state.videos = action.payload.videos;
  }
  // * categories actions
  if (action.type === apiActionTypes.getAllCategories) {
    state.categories = action.payload.categories;
    state.activeCategories = new Array(action.payload.categories.length).fill(
      false
    );
  }

  // ? set active category for ui
  if (action.type === "setActiveCategory") {
    state.activeCategories[action.payload] =
      !state.activeCategories[action.payload];
  }

  if (action.type === "clearActiveCategory") {
    state.activeCategories = new Array(state.activeCategories.length).fill(
      false
    );
  }

  // * likes actions
  if (action.type === apiActionTypes.getLikes) {
    state.likedVideos = action.payload.likes;
  }

  if (action.type === apiActionTypes.updateLikes) {
    state.likedVideos = action.payload.likes;
  }

  if (action.type === apiActionTypes.deleteLikes) {
    state.likedVideos = action.payload.likes;
  }

  // * watch later actions
  if (action.type === apiActionTypes.getWatchLater) {
    state.watchLater = action.payload.watchlater;
  }

  if (action.type === apiActionTypes.updateWatchLater) {
    state.watchLater = action.payload.watchlater;
  }

  if (action.type === apiActionTypes.deleteWatchLater) {
    state.watchLater = action.payload.watchlater;
  }

  // * history actions
  if (action.type === apiActionTypes.getWatchHistory) {
    state.watchHistory = action.payload.history;
  }

  if (action.type === apiActionTypes.updateWatchHistory) {
    state.watchHistory = action.payload.history;
  }

  if (action.type === apiActionTypes.deleteWatchHistory) {
    state.watchHistory = action.payload.history;
  }

  if (action.type === apiActionTypes.deleteAllWatchHistory) {
    state.watchHistory = action.payload.history;
  }

  // * playlist actions

  if (action.type === apiActionTypes.getAllPlaylist) {
    state.playlists = action.payload.playlists;
    state.activePlaylist = new Array(action.payload.playlists.length).fill(
      true
    );
  }

  if (action.type === apiActionTypes.updatePlaylist) {
    state.playlists = action.payload.playlists;
    state.activePlaylist = new Array(action.payload.playlists.length).fill(
      true
    );
  }

  if (action.type === apiActionTypes.deletePlaylist) {
    state.playlists = action.payload.playlists;
  }

  if (action.type === apiActionTypes.getSinglePlaylist) {
    state.singlePlaylist = action.payload.playlist;
  }

  if (action.type === apiActionTypes.updateSinglePlaylist) {
    state.singlePlaylist = action.payload.playlist;
    state.playlists = state.playlists.map((item) =>
      item._id === action.payload.playlist._id ? action.payload.playlist : item
    );
  }
  if (action.type === apiActionTypes.deleteFromSinglePlaylist) {
    state.singlePlaylist = action.payload.playlist;
    state.playlists = state.playlists.map((item) =>
      item._id === action.payload.playlist._id ? action.payload.playlist : item
    );
  }

  // * clear state
  if (action.type === "clearState") {
    return initialState;
  }
}, initialState);

export const DataContext = React.createContext();
DataContext.displayName = "DataContext";

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useThunkReducer(reducer, initialState);
  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = React.useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
