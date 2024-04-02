// pages/index.tsx

import Head from "next/head";
import Link from "next/link";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>LearnView - Open Source Learning App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-blue-500">LearnView</span>
        </h1>

        <p className="mt-3 text-2xl">
          An open source learning app for all your educational needs.
        </p>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        Open Source Project by{" "}
        <Link
          href="https://cellstrat.com"
          style={{
            color: "cyan",
            marginLeft: "0.2rem",
          }}
          target="_blank"
        >
          {" "}
          Cellstrat
        </Link>
      </footer>
    </div>
  );
};

export default Home;
