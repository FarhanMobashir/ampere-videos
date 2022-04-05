import React from "react";
import { buildHooks, fetchBaseQuery } from "../helpers/buildApiHooks";
import { AuthContext } from "./AuthContext";
import { useData } from "./DataContext";

export const ApiContext = React.createContext();
ApiContext.displayName = "ApiContext";

export const apiActionTypes = {
  getAllVideos: "getAllVideos",
  getSingleVideo: "getSingleVideo",
  getAllCategories: "getAllCategories",
  getSingleCategory: "getSingleCategory",
  getLikes: "getLikes",
  updateLikes: "updateLikes",
  deleteLikes: "deleteLikes",
  getWatchLater: "getWatchLater",
  updateWatchLater: "updateWatchLater",
  deleteWatchLater: "deleteWatchLater",
  getAllPlaylist: "getAllPlaylist",
  updatePlaylist: "updatePlaylist",
  deletePlaylist: "deletePlaylist",
  getSinglePlaylist: "getSinglePlaylist",
  updateSinglePlaylist: "updateSinglePlaylist",
  deleteFromSinglePlaylist: "deleteFromSinglePlaylist",
  getWatchHistory: "getWatchHistory",
  updateWatchHistory: "updateWatchHistory",
  deleteWatchHistory: "deleteWatchHistory",
  deleteAllWatchHistory: "deleteAllWatchHistory",
};

export const ApiProvider = ({ children }) => {
  const { dispatch: dataProviderDispatch } = useData();
  const { authToken } = React.useContext(AuthContext);

  const publicApi = buildHooks(
    [
      {
        name: apiActionTypes.getAllVideos,
        query: "/videos",
        type: "query",
        method: "GET",
      },
      {
        name: apiActionTypes.getSingleVideo,
        query: "/products",
        type: "query",
        method: "GET",
      },
      {
        name: apiActionTypes.getAllCategories,
        query: "/categories",
        type: "query",
        method: "GET",
      },
      {
        name: apiActionTypes.getSingleCategory,
        query: "/categories",
        type: "query",
        method: "GET",
      },
    ],
    fetchBaseQuery({
      baseUrl: "/api",
    }),
    dataProviderDispatch
  );

  const headers = {
    authorization: authToken,
  };

  const privateApi = buildHooks(
    [
      // * likes actions
      {
        name: apiActionTypes.getLikes,
        query: "/user/likes",
        type: "query",
        method: "GET",
      },
      {
        name: apiActionTypes.updateLikes,
        query: "/user/likes",
        type: "mutation",
        method: "POST",
      },
      {
        name: apiActionTypes.deleteLikes,
        query: "/user/likes",
        type: "mutation",
        method: "DELETE",
      },
      // * watch later actions
      {
        name: apiActionTypes.getWatchlater,
        query: "/user/watchlater",
        type: "query",
        method: "GET",
      },
      {
        name: apiActionTypes.updateWatchLater,
        query: "/user/watchlater",
        type: "mutation",
        method: "POST",
      },
      {
        name: apiActionTypes.deleteWatchLater,
        query: "/user/watchlater",
        type: "mutation",
        method: "DELETE",
      },
      // * history action
      {
        name: apiActionTypes.getWatchHistory,
        query: "/user/history",
        type: "query",
        method: "GET",
      },
      {
        name: apiActionTypes.updateWatchHistory,
        query: "/user/history",
        type: "mutation",
        method: "POST",
      },
      {
        name: apiActionTypes.deleteWatchHistory,
        query: "/user/history",
        type: "mutation",
        method: "DELETE",
      },
      {
        name: apiActionTypes.deleteAllWatchHistory,
        query: "/user/history/all",
        type: "mutation",
        method: "DELETE",
      },
      // * all playlist actions
      {
        name: apiActionTypes.getAllPlaylist,
        query: "/user/playlists",
        type: "query",
        method: "GET",
      },
      {
        name: apiActionTypes.updatePlaylist,
        query: "/user/playlist",
        type: "mutation",
        method: "POST",
      },
      {
        name: apiActionTypes.deletePlaylist,
        query: "/user/playlist",
        type: "mutation",
        method: "DELETE",
      },
      {
        name: apiActionTypes.getSinglePlaylist,
        query: "/user/playlists",
        type: "query",
        method: "GET",
      },
      {
        name: apiActionTypes.deleteFromSinglePlaylist,
        query: "/user/playlist",
        type: "mutation",
        method: "DELETE",
      },
    ],
    fetchBaseQuery({
      baseUrl: "/api",
      headers: headers,
    }),
    dataProviderDispatch
  );

  const value = React.useMemo(() => {
    return {
      ...publicApi,
      ...privateApi,
    };
  }, [publicApi, privateApi]);

  return <ApiContext.Provider value={value}>{children}</ApiContext.Provider>;
};

export const useApi = () => React.useContext(ApiContext);
