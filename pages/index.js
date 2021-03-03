import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Mukul Chugh</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main>
        <img
          className="image"
          src="https://mukulchugh.com/projects/profile.png"
        />

        <a href="https://instagram.com/themukulchugh">
          <h3 className="description"> @TheMukulChugh</h3>
        </a>

        <div className="grid">
          <a href="https://mukulchugh.com" className="card">
            <h3>Portfolio</h3>
          </a>

          <a href="https://digitalmoshai.com" className="card">
            <h3>Digital Moshai</h3>
          </a>
          <a href="https://mukulchugh.com/tagmango" className="card">
            <h3>Subscribe on TagMango</h3>
          </a>
          <a href="https://www.linkedin.com/in/mukulchugh/" className="card">
            <h3>Connect on LinkedIn</h3>
          </a>

          <a href="https://twitter.com/themukulchugh" className="card">
            <h3>Follow me on Twitter</h3>
          </a>

          <a href="https://github.com/mukulchugh" className="card">
            <h3>Github</h3>
          </a>
        </div>
      </main>

      <style jsx>{`
       ...
     `}</style>
    </div>
  );
}
