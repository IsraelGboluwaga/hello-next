import VerseGenerator from './verse-generator';

export default function Home() {
  return (
    <main className="container">
      <header className="header">
        <h1 className="title">Daily Verse</h1>
        <p className="subtitle">A word for this moment.</p>
      </header>

      <VerseGenerator />

      <footer className="footer">
        <p>
          Scripture from the{' '}
          <span className="translation">World English Bible</span> (public domain).
        </p>
      </footer>
    </main>
  );
}
