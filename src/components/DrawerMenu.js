import { useNavigate } from "react-router-dom";
import { CustomedNavLink } from "./CustomNavlink";

const NavigationRoutes = [
  {
    title: "Your Playlists",
    route: "/user/playlist",
    icon: "list-ul",
  },
  {
    title: "Watch Later Videos",
    route: "/user/watch-later",
    icon: "hourglass",
  },
  {
    title: "Watch History",
    route: "/user/history",
    icon: "history",
  },
];

export const DrawerMenu = ({ onClick }) => {
  return (
    <>
      <div
        onClick={onClick}
        style={{
          backgroundColor: "black",
          width: "100%",
          height: "100vh",
          position: "fixed",
          top: "0",
          opacity: "0.5",
        }}
      ></div>

      <ul
        class="no-bullet-list"
        style={{
          position: "fixed",
          left: "0",
          background: "white",
          height: "100vh",
          top: "0",
          WebkitTapHighlightColor: "transparent",
          zIndex: "999",
        }}
      >
        <h1 class="h4 list-title">
          Menu <i className="uil uil-times" onClick={onClick}></i>
        </h1>
        {NavigationRoutes.map((item) => {
          return (
            <CustomedNavLink key={item.title} to={item.route} onClick={onClick}>
              <li className="tx-18">
                <i class={`uil uil-${item.icon} tx-24`}></i> {item.title}
              </li>
            </CustomedNavLink>
          );
        })}
      </ul>
    </>
  );
};
