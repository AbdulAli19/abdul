import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useHotkeys } from 'react-hotkeys-hook';

const isServer = typeof window === 'undefined';

const Home = () => {
  const [darkMode, setDarkMode] = useState(
    !isServer && Boolean(localStorage.getItem('darkMode'))
  );

  useHotkeys('command+k, ctrl+k', () => setDarkMode(darkMode => !darkMode));

  useEffect(() => {
    if (darkMode) {
      localStorage.setItem('darkMode', 1);
      document.querySelector('html').classList.add('dark');
    } else {
      localStorage.removeItem('darkMode');
      document.querySelector('html').classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="main-content">
          <div>
            <h1 className="title">Abdul Ali</h1>
            <p>
              frontend engineer w a passion for building high-quality products
              ppl love 💕
            </p>
            <p>
              i'm currently at{' '}
              <a href="https://confluent.io" target="_blank">
                confluent
              </a>{' '}
              helping build the future of event streaming.
            </p>
          </div>

          <footer>
            <a href="https://twitter.com/abdul_ali5" target="_blank">
              twitter
            </a>
            <span>/</span>
            <a href="https://www.instagram.com/abdulali5/" target="_blank">
              instagram
            </a>
            <span>/</span>
            <a href="https://www.linkedin.com/in/abdul-ali19/" target="_blank">
              linkedin
            </a>
          </footer>
        </div>
      </main>

      <style jsx>{`
        main {
          max-width: 500px;
          margin: 0 auto;
          padding: 0 8px;
        }

        h1 {
          color: #333;
        }

        .main-content {
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .title {
          margin: 0;
          padding-top: 80px;
          font-size: 48px;
        }

        a:visited {
          color: inherit;
        }

        a:hover {
          color: #38cced;
        }

        footer {
          margin-bottom: 16px;
          font-size: 12px;
          font-weight: 300;
        }

        footer a {
          text-decoration: none;
        }

        footer span {
          padding: 0 8px;
        }
      `}</style>
    </div>
  );
};

export default Home;
