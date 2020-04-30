import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useHotkeys } from "react-hotkeys-hook";
import { Moon, Sun } from "react-feather";

const isServer = typeof window === "undefined";

const Home = () => {
  const [darkMode, setDarkMode] = useState(
    !isServer && Boolean(localStorage.getItem("darkMode"))
  );

  useHotkeys("command+k, ctrl+k", () => setDarkMode((darkMode) => !darkMode));

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem("darkMode", 1);
      document.querySelector("html").classList.add("dark");
    } else {
      localStorage.removeItem("darkMode");
      document.querySelector("html").classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="container">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <h1 className="title">Abdul Ali</h1>
          <p>
            frontend engineer w a passion for building high-quality products ppl
            love 💕
          </p>
          <p>
            i'm currently at{" "}
            <a href="https://confluent.io" target="_blank">
              confluent
            </a>{" "}
            helping build the future of event streaming.
          </p>
        </div>
      </main>

      <footer>
        <div>
          <a href="https://twitter.com/abdul_ali5" target="_blank">
            twitter
          </a>
          <span>/</span>
          <a href="https://github.com/AbdulAli19" target="_blank">
            github
          </a>
          <span>/</span>
          <a href="https://www.linkedin.com/in/abdul-ali19/" target="_blank">
            linkedin
          </a>
          <span>/</span>
          <a href="https://www.instagram.com/abdulali5/" target="_blank">
            instagram
          </a>
        </div>
        <div className="icon-wrapper">
          {darkMode ? (
            <Sun onClick={() => setDarkMode(false)} size={14} />
          ) : (
            <Moon onClick={() => setDarkMode(true)} size={14} />
          )}
        </div>
      </footer>

      <style jsx>{`
        h1 {
          color: #333;
        }

        .container {
          height: 100vh;
          display: flex;
          flex-direction: column;
          max-width: 500px;
          margin: 0 auto;
          padding: 0 8px;
          justify-content: space-between;
        }

        .title {
          margin: 0;
          padding-top: 80px;
          font-size: 48px;
        }

        .icon-wrapper:hover {
          cursor: pointer;
          opacity: 0.5;
        }

        a:visited {
          color: inherit;
        }

        a:hover {
          color: #38cced;
        }

        footer {
          margin-bottom: 16px;
          font-size: 14px;
          font-weight: 300;
          display: flex;
          justify-content: space-between;
        }

        footer a {
          text-decoration: none;
        }

        footer a:hover {
          text-decoration: underline;
          color: currentColor;
        }

        footer span {
          padding: 0 8px;
        }
      `}</style>
    </div>
  );
};

export default Home;
