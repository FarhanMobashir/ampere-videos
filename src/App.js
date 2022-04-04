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

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* public routes  */}
        <Route path="/" element={<AppLayout />}>
          <Route path="*" exact element={<h1>404 not found</h1>} />
          <Route path="/" element={<HomeScreen />} />
          <Route path="/mock" element={<Mockman />} />
          <Route path="/auth" element={<AuthScreen />} />
          <Route path="/videos" element={<VideoListingScreen />} />
          <Route path="/videos/:videoid" element={<VideoPlayerScreen />} />
          {/* private routes  */}
          <Route path="/user">
            <Route path="/user/history" element={<WatchHistoryScreen />} />
            <Route path="/user/playlist" element={<PlaylistListingScreen />} />
            <Route
              path="/user/playlist/:playlistid"
              element={<SinglePlaylistScreen />}
            />
            <Route path="/user/watch-later" element={<WatchLaterScreen />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
