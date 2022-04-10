import { Route, Routes } from "react-router-dom";
import { AuthScreen } from "./screens/AuthScreen";
import { HomeScreen } from "./screens/HomeScreen";
import Mockman from "mockman-js";
import { VideoListingScreen } from "./screens/VideoListingScreen";
import { WatchHistoryScreen } from "./screens/WatchHistoryScreen";
import { PlaylistListingScreen } from "./screens/PlaylistListingScreen";
import { WatchLaterScreen } from "./screens/WatchLaterScreen";
import { VideoPlayerScreen } from "./screens/VideoPlayerScreen";
import { SinglePlaylistScreen } from "./screens/SinglePlaylistScreen";
import { AppLayout } from "./components/AppLayout";
import { AuthProvider } from "./contexts/AuthContext";
import { PrivateRoute } from "./components/PrivateRoute";
import { DataProvider } from "./contexts/DataContext";
import { ApiProvider } from "./contexts/ApiContext";
import { LikedVideoScreen } from "./screens/LikedVideoScreen";
import errorImage from "./assets/emptyImage.svg";
import { EmptyState } from "./components/EmptyState";

function App() {
  return (
    <DataProvider>
      <AuthProvider>
        <ApiProvider>
          <Routes>
            {/* public routes  */}
            <Route path="/" element={<AppLayout />}>
              <Route
                path="*"
                exact
                element={
                  <EmptyState
                    title="404 Error : Page Not found"
                    description="This is not where you should be"
                    onButtonClick={() => navigate("/videos")}
                    buttonText="Watch Videos"
                    imageUrl={errorImage}
                  />
                }
              />
              <Route path="/" element={<HomeScreen />} />
              <Route path="/mock" element={<Mockman />} />
              <Route path="/auth" element={<AuthScreen />} />
              <Route path="/videos" element={<VideoListingScreen />} />
              <Route path="/videos/:videoid" element={<VideoPlayerScreen />} />
              {/* private routes  */}
              <Route path="/user">
                <Route
                  path="/user/history"
                  element={<PrivateRoute element={<WatchHistoryScreen />} />}
                />
                <Route
                  path="/user/playlist"
                  element={<PrivateRoute element={<PlaylistListingScreen />} />}
                />
                <Route
                  path="/user/playlist/:playlistid"
                  element={<PrivateRoute element={<SinglePlaylistScreen />} />}
                />
                <Route
                  path="/user/watch-later"
                  element={<PrivateRoute element={<WatchLaterScreen />} />}
                />
                <Route
                  path="/user/likes"
                  element={<PrivateRoute element={<LikedVideoScreen />} />}
                />
              </Route>
            </Route>
          </Routes>
        </ApiProvider>
      </AuthProvider>
    </DataProvider>
  );
}

export default App;
