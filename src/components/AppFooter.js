export const AppFooter = () => {
  return (
    <footer class="footer">
      {/* <!-- first column --> */}
      <div class="footer-columns">
        <h4 class="footer-heading">Minion Talk</h4>
        <small class="footer-subheading">Made with love and javascript</small>
        <a
          class="footer-link"
          href="https://github.com/FarhanMobashir/minions-talk"
        >
          Source code
        </a>
        <a
          class="footer-link"
          href="https://www.youtube.com/watch?v=yLZazznWoAs&list=PLzvhQUIpvvuj5KPnyPyWsvgyzNkX_ACPA&index=6"
        >
          Learn to make your own
        </a>
      </div>
      {/* <!-- second column --> */}
      <div class="footer-columns">
        <h4 class="footer-heading">Made by</h4>
        <small class="footer-subheading">
          Mobashir Farhan. Feel free to connect and share your feedback
        </small>
        <a class="footer-link" href="https://github.com/FarhanMobashir">
          Github
        </a>
        <a class="footer-link" href="https://mobile.twitter.com/MobashirFarhan">
          Twitter
        </a>
        <a
          class="footer-link"
          href="https://www.linkedin.com/in/mobashirfarhan/"
        >
          LinkedIn
        </a>
      </div>
      {/* <!-- third column --> */}
      <div class="footer-columns">
        <h4 class="footer-heading">API Used</h4>
        <small class="footer-subheading">
          Funtranslation minion api
          <a href="https://funtranslations.com/api/minions">link Here</a>
        </small>
      </div>
    </footer>
  );
};
