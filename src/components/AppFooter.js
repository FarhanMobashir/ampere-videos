export const AppFooter = () => {
  return (
    <footer className="footer">
      {/* <!-- first column --> */}
      <div className="footer-columns">
        <h4 className="footer-heading">Minion Talk</h4>
        <small className="footer-subheading">
          Made with love and javascript
        </small>
        <a
          className="footer-link"
          href="https://github.com/FarhanMobashir/minions-talk"
        >
          Source code
        </a>
        <a
          className="footer-link"
          href="https://www.youtube.com/watch?v=yLZazznWoAs&list=PLzvhQUIpvvuj5KPnyPyWsvgyzNkX_ACPA&index=6"
        >
          Learn to make your own
        </a>
      </div>
      {/* <!-- second column --> */}
      <div className="footer-columns">
        <h4 className="footer-heading">Made by</h4>
        <small className="footer-subheading">
          Mobashir Farhan. Feel free to connect and share your feedback
        </small>
        <a className="footer-link" href="https://github.com/FarhanMobashir">
          Github
        </a>
        <a
          className="footer-link"
          href="https://mobile.twitter.com/MobashirFarhan"
        >
          Twitter
        </a>
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/mobashirfarhan/"
        >
          LinkedIn
        </a>
      </div>
      {/* <!-- third column --> */}
      <div className="footer-columns">
        <h4 className="footer-heading">API Used</h4>
        <small className="footer-subheading">
          Funtranslation minion api
          <a href="https://funtranslations.com/api/minions">link Here</a>
        </small>
      </div>
    </footer>
  );
};
