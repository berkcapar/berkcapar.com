import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <Link href="/who">
        <a>Who</a>
      </Link>
      <Link href="/now">
        <a>Now</a>
      </Link>
      <Link href="/projects">
        <a>Projects</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <style jsx>{`
        nav {
          padding: 0;
          display: flex;
          justify-content: space-around;
        }
        nav a {
          margin-top: 1rem;
          margin-bottom: 1rem;
          text-decoration: none;
        }
        nav a:hover {
        }
        @media (min-width: 675px) {
          nav {
          }
          nav a {
            margin-right: 2rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
