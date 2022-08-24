## [Ampere-Videos - A Video Library](https://ampere-videos.netlify.app/)

### Table of contents

- [About Ampere-Videos](#about)
- [Features and demo](#features)
- [Technology and libraries used](#tech)
- [Pre-requisites and project setup(in local)](#setup)
- [Highlights](#highlights)
- [Let us connect](#connect)

<a name="about"></a>

### About Ampere-Videos

**[Ampere-Videos](https://ampere-videos.netlify.app/)** - a video library for some good songs

<a name="features"></a>

### Features and demo

- **[Home](https://ampere-videos.netlify.app/)** - houses all the categories.
- **[Videolisting](https://ampere-videos.netlify.app/videos)** - all videos at one place. Users can
  - view and like videos
  - add videos to watch later(only after logging in)
  - create playlist and add video to it(only after logging in)
  - add or remove videos from playlist(only after logging in)
  - filter videos based on category
- **[Playlist Management](https://ampere-videos.netlify.app/user/playlists)** - list of playlists created by user including watch later playlist. This feature requires user to be logged in. Users can
  - view list of playlists created by them
  - view particular playlist and videos in it
  - delete a particular video from playlist
  - delete complete playlist
- **[Watch later](https://ampere-videos.netlify.app/user/watch-later)** - list of videos added to watch later by the user(requires user to be logged in). User can remove videos from watch later.
- **[Liked Videos](https://ampere-videos.netlify.app/user/likedVideos)** - list of videos liked by the user(requires user to be logged in). User can remove video from liked videos.
- **[History](https://ampere-videos.netlify.app/user/history)** - list of videos watched by user when logged in(requires user to be logged in). User can remove video from watch history.
- **[Authentication](https://ampere-videos.netlify.app/auth)** - As of now user can login as guest only and logout. Feature signup and login using own credentials will be added in near future.
- **Detailed video page** - view particular video. USer can:
  - view and like particular video
  - add that video to watch later
  - create playlsit and add video to it
  - view list of other videos

<a name="tech"></a>

### Technologies and libraries used

- [ReactJS](https://reactjs.org/docs/getting-started.html)
- [Mockbee APIs](https://mockbee.netlify.app/)
- [AmpereUi Component Library](https://ampereui.netlify.app)
- [React Router](https://reactrouter.com/docs/en/v6/getting-started/overview)

<a name="highlights"></a>

### Highlights

- **Responsiveness** - This app is completely responsive and can be accessed in all kind of devices.
- Proper messages for **error/exception handling** across the application
- Use of **loader** to show status of tasks

<a name="setup"></a>

### Pre-requisites and project setup(in local)

#### Step 1

Install [NodeJs](https://nodejs.org/en/)(if not already installed)

#### Step 2

Clone dev branch of this repo to local using:

     git clone https://github.com/FarhanMobashir/ampere-videos -b dev

#### Step 3

Go into the project folder

     cd project-name

#### Step 4

Install all the npm packages

     npm install

#### Step 5

Run the application using:

     npm start

The application runs on **localhost:3000**

<a name="connect"></a>

### Let us connect

[<img src="https://user-images.githubusercontent.com/64582473/162154693-eaf76505-59e8-4b6d-8e03-5cac4cd29d5d.png" width="30" height="30">](https://www.linkedin.com/in/mobashirfarhan/) &nbsp;
[<img src="https://user-images.githubusercontent.com/64582473/162155893-3e273e1a-4a29-47e2-8e39-06b45ab6f6eb.png" width="30" height="30">](https://twitter.com/MobashirFarhan) &nbsp;
[<img src="https://user-images.githubusercontent.com/64582473/162157812-3e1d6b9b-7729-4137-99cb-8337d6396472.png" width="30" height="30">](https://github.com/FarhanMobashir)
