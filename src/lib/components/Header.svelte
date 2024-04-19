<script>
  import { page } from "$app/stores";
  import { base } from "$app/paths";

  import githubLogo from "$lib/images/icons/githubLogo.png";
  import emailLogo from "$lib/images/icons/emailLogo.png";
  import linkedInLogo from "$lib/images/icons/linkedInLogo.png";
</script>

<header>
  <div class="corner" style="width:calc(3*48px);"></div>

  <nav>
    <ul>
      <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
        <a href="{base}/">Home</a>
      </li>
      <li
        aria-current={$page.url.pathname === "/experience" ? "page" : undefined}
      >
        <a href="{base}/experience">Experience/Resume</a>
      </li>
    </ul>
  </nav>

  <div class="corner">
    <a href="https://www.linkedin.com/in/ben-barcaskey/">
      <img src={linkedInLogo} alt="LinkedIn" />
    </a>
  </div>
  <div class="corner">
    <a href="mailto:benbarcaskey@gmail.com">
      <img src={emailLogo} alt="Email" />
    </a>
  </div>
  <div class="corner">
    <a href="https://github.com/Slad3">
      <img src={githubLogo} alt="GitHub" />
    </a>
  </div>
</header>

<style>
  header {
    display: flex;

    position: fixed;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    top: 0;
    z-index: 999;
  }

  .corner a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .corner img {
    width: 2em;
    height: 2em;
    margin: 10px;
    object-fit: contain;
  }

  nav {
    display: flex;
    justify-content: center;
    width: calc(100%);
  }

  ul {
    position: relative;
    padding: 0;
    margin: 5px;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
    background: var(--background);
    background-size: contain;
  }

  li {
    position: relative;
    height: 100%;
    border-left: 1px dashed whitesmoke;
    border-right: 1px dashed whitesmoke;
    margin: 5px;
    border-radius: 3px;
  }

  li[aria-current="page"]::before {
    --size: 6px;
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    top: 0;
    left: calc(50% - var(--size));
    border: var(--size) solid transparent;
    border-top: var(--size) solid var(--color-theme-1);
  }

  nav a {
    display: flex;
    height: 100%;
    align-items: center;
    padding: 0 0.5rem;
    color: var(--color-text);
    font-weight: 700;
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
    transition: color 0.2s linear;
  }

  a:hover {
    color: var(--color-theme-1);
  }

  a {
    font-style: normal;
  }
</style>
