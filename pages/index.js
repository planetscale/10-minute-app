import Head from "next/head";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Home = () => {
  const { data, error } = useSWR("/api/database-connection", fetcher);

  return (
    <div className="container">
      <Head>
        <title>10 minute app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to your app!</h1>
        <div className="subtitle">
          Enjoy the power of <a href="https://planetscale.com">PlanetScaleDB</a>{" "}
          and <a href="https://vercel.com">Vercel</a> together.
        </div>
        {error && (
          <div className="result failure">
            Database connection failed.
            <p className="subresult">
              <ul>
                <li>Is your PlanetScaleDB cluster deployed?</li>
                <li>
                  Have you copied the connection string details to the Vercel
                  environmental details correctly?
                </li>
              </ul>
            </p>
          </div>
        )}
        {!error && !data && (
          <div className="result testing">Testing database connection...</div>
        )}
        {!error && data && (
          <div className="result success">Database connection successful!</div>
        )}

        <div className="next-steps">
          <h2>Next Steps</h2>
          <ol>
            <li>
              Learn more about{" "}
              <a href="https://docs.planetscale.com/">PlanetScaleDB</a> and{" "}
              <a href="https://vercel.com">Vercel</a>.
            </li>
            <li>
              Configure your PlanetScaleDB database. Add a schema to your
              database following{" "}
              <a href="https://docs.planetscale.com/psdb/migrating-database-schemas">
                this guide
              </a>
              .
            </li>
            <li>
              Populate your PlanetScaleDB database with the data for your app.
              If you have an existing MySQL client you can import your database
              into PlanetScaleDB following{" "}
              <a href="https://docs.planetscale.com/psdb/importing-data">
                this guide
              </a>
              .
            </li>
            <li>
              Write serverless functions to define your data api. In addition to
              nodejs,{" "}
              <a href="https://vercel.com/docs/v2/serverless-functions/supported-languages">
                Vercel supports other languages
              </a>
              .
            </li>
            <li>
              Use Next.js or any of the other{" "}
              <a href="https://vercel.com/import/templates">
                frameworks Vercel supports
              </a>{" "}
              to build the fullstack app of your dreams!
            </li>
          </ol>
        </div>
      </main>

      <style jsx>
        {`
          .container {
            min-height: 100vh;
            padding: 0 3rem;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          main {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
          }

          h1 {
            font-size: 4em;
          }
          h2 {
            font-size: 2em;
          }
          .subtitle {
            font-size: 2em;
          }

          .result {
            margin-top: 40px;
            padding: 16px;
            text-align: center;
            color: white;
            font-weight: bold;
            font-size: 1.5em;
            border-radius: 8px;
          }
          .subresult {
            font-weight: normal;
            text-align: left;
            font-size: 1rem;
            line-height: 24px;
          }
          .result.success {
            background: green;
          }
          .result.failure {
            background: red;
          }
          .result.testing {
            background: darkblue;
          }

          .next-steps {
            text-align: flex-start;
            margin-top: 40px;
            line-height: 2.5em;
          }

          .next-steps ol {
            font-size: 1.5em;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
