import Head from 'next/head';
import BitcoinChart from '../components/BitcoinChart';

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Bitcoin Tracker</title>
        <meta name="description" content="Bitcoin price tracker using Next.js and Chart.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Bitcoin Tracker</h1>
        <BitcoinChart />
      </main>
    </div>
  );
};

export default Home;