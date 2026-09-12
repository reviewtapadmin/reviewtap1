const businesses = {
  "the-olive-table": {
    name: "The Olive Table",
    type: "Restaurant",
    initials: "OT",
    accent: "#1f4b3f",
    googleUrl: "https://www.google.com/",
    message: "Thanks for dining with us. We’d love to hear about your experience."
  },
  "demo-barbers": {
    name: "North & Co. Barbers",
    type: "Barbershop",
    initials: "NC",
    accent: "#202124",
    googleUrl: "https://www.google.com/",
    message: "Thanks for visiting. Your feedback helps us keep raising the bar."
  }
};

export default async function ReviewPage({ params }) {
  const business = businesses[params.slug] || businesses["the-olive-table"];
  return (
    <main className="review-page" style={{"--accent": business.accent}}>
      <div className="review-shell">
        <div className="business-mark">{business.initials}</div>
        <div className="type">{business.type}</div>
        <h1>{business.name}</h1>
        <p className="review-message">{business.message}</p>

        <div className="rating-card">
          <div className="question">How was your experience?</div>
          <div className="stars" aria-label="Choose a rating">
            {[1,2,3,4,5].map(n => <button key={n} aria-label={`${n} star rating`}>★</button>)}
          </div>
          <div className="rating-hint">Tap a star to continue</div>
        </div>

        <div className="choice">
          <a className="review-button" href={business.googleUrl} target="_blank" rel="noreferrer">
            Leave a Google Review <span>↗</span>
          </a>
          <a className="private-button" href="#feedback">Give private feedback</a>
        </div>

        <div id="feedback" className="feedback">
          <h2>Tell us what we can improve</h2>
          <textarea placeholder="Your feedback..."></textarea>
          <input placeholder="Your name (optional)" />
          <button className="send">Send feedback</button>
          <small>Your message goes directly to the business.</small>
        </div>

        <p className="powered">Powered by <b>ReviewTap</b></p>
      </div>
    </main>
  );
}