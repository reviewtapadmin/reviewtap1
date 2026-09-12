export default function Home() {
  return (
    <main>
      <nav className="nav shell">
        <div className="brand"><span className="brand-dot"></span>ReviewTap</div>
        <a className="nav-link" href="/r/the-olive-table">View demo</a>
      </nav>

      <section className="hero shell">
        <div className="eyebrow">NFC + QR CUSTOMER FEEDBACK</div>
        <h1>Turn every tap into a better customer experience.</h1>
        <p className="hero-copy">
          ReviewTap gives your customers a simple, branded way to share feedback,
          discover your Google review page and help your business grow.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="/r/the-olive-table">See the live demo <span>→</span></a>
          <a className="button secondary" href="#how">How it works</a>
        </div>
        <div className="trust-row">
          <span>✓ Mobile first</span><span>✓ NFC ready</span><span>✓ QR compatible</span>
        </div>
      </section>

      <section id="how" className="section shell">
        <div className="section-heading">
          <div className="eyebrow">HOW IT WORKS</div>
          <h2>One tap. One beautiful experience.</h2>
        </div>
        <div className="cards">
          {[
            ["01","Customer taps","Your NFC card or scans your QR code."],
            ["02","They share feedback","A branded ReviewTap page makes it effortless."],
            ["03","They choose what’s next","Leave a genuine Google review or send private feedback."]
          ].map(([n,t,d]) => <article className="info-card" key={n}><span className="number">{n}</span><h3>{t}</h3><p>{d}</p></article>)}
        </div>
      </section>

      <section className="dark-section">
        <div className="shell split">
          <div><div className="eyebrow muted">BUILT FOR LOCAL BUSINESS</div><h2>Beautiful enough for premium brands. Simple enough for everyone.</h2></div>
          <div className="feature-list">
            <div><b>Business-specific pages</b><span>Logo, colours and messaging for every client.</span></div>
            <div><b>Unique card links</b><span>Track each NFC card or location separately.</span></div>
            <div><b>Private feedback</b><span>Give customers a direct way to tell you what went wrong.</span></div>
          </div>
        </div>
      </section>

      <footer className="footer shell"><div className="brand"><span className="brand-dot"></span>ReviewTap</div><span>Customer feedback, simplified.</span></footer>
    </main>
  );
}