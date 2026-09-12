"use client";

import { useState } from "react";

const businesses = {
  "esquires-farnborough": {
    name: "Esquires Coffee",
    location: "Farnborough",
    type: "Coffee Shop",
    initials: "EC",
    accent: "#6b3f24",
    googleUrl:
      "https://search.google.com/local/writereview?placeid=ChIJ8YglVnQrdEgRva_fNzP_jII",
    message:
      "Thanks for visiting Esquires Coffee Farnborough. We'd love to hear about your experience.",
  },

  "the-olive-table": {
    name: "The Olive Table",
    type: "Restaurant",
    initials: "OT",
    accent: "#1f4b3f",
    googleUrl: "https://www.google.com/",
    message:
      "Thanks for dining with us. We'd love to hear about your experience.",
  },

  "demo-barbers": {
    name: "North & Co. Barbers",
    type: "Barbershop",
    initials: "NC",
    accent: "#202124",
    googleUrl: "https://www.google.com/",
    message:
      "Thanks for visiting. Your feedback helps us keep raising the bar.",
  },
};

export default function ReviewPage({ params }) {
  const business =
    businesses[params.slug] || businesses["esquires-farnborough"];

  const [rating, setRating] = useState(0);
  const [feedbackOpen, setFeedbackOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (value) => {
    setRating(value);
    setSubmitted(false);

    if (value <= 3) {
      setFeedbackOpen(true);
    } else {
      setFeedbackOpen(false);
    }
  };

  const handleFeedback = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main
      className="review-page"
      style={{
        "--accent": business.accent,
      }}
    >
      <div className="review-shell">

        <div className="brand">
          <div className="business-mark">{business.initials}</div>

          <div className="business-info">
            <div className="type">{business.type}</div>
            <h1>{business.name}</h1>
            {business.location && (
              <div className="location">{business.location}</div>
            )}
          </div>
        </div>

        <div className="intro">
          <h2>How was your experience?</h2>
          <p>{business.message}</p>
        </div>

        <div className="rating-card">
          <div className="stars" aria-label="Choose a rating">
            {[1, 2, 3, 4, 5].map((number) => (
              <button
                key={number}
                type="button"
                className={number <= rating ? "star selected" : "star"}
                onClick={() => handleRating(number)}
                aria-label={`${number} star rating`}
                aria-pressed={number === rating}
              >
                ★
              </button>
            ))}
          </div>

          {rating === 0 && (
            <div className="rating-hint">
              Tap a star to rate your experience
            </div>
          )}

          {rating > 0 && (
            <div className="rating-result">
              {rating === 5
                ? "Fantastic — thank you!"
                : rating === 4
                ? "Thanks — we're glad you enjoyed your visit."
                : rating === 3
                ? "Thanks for your feedback."
                : "We're sorry we didn't get it quite right."}
            </div>
          )}
        </div>

        {rating >= 4 && (
          <div className="action-card success-card">
            <div className="action-icon">✓</div>

            <h3>We're glad you enjoyed your visit!</h3>

            <p>
              Would you take a moment to share your experience on Google?
              It really helps the business.
            </p>

            <a
              className="review-button"
              href={business.googleUrl}
              target="_blank"
              rel="noreferrer"
            >
              Leave a Google Review
              <span>↗</span>
            </a>
          </div>
        )}

        {rating > 0 && rating <= 3 && (
          <div className="action-card feedback-card">
            {!feedbackOpen ? (
              <>
                <div className="action-icon">♥</div>

                <h3>We'd like to make it right</h3>

                <p>
                  We'd really appreciate the opportunity to understand what
                  happened and improve your next visit.
                </p>

                <button
                  className="private-button"
                  type="button"
                  onClick={() => setFeedbackOpen(true)}
                >
                  Give private feedback
                </button>
              </>
            ) : (
              <>
                <h3>Tell us what we can improve</h3>

                {submitted ? (
                  <div className="thank-you">
                    <div className="thank-you-icon">✓</div>
                    <strong>Thank you for your feedback.</strong>
                    <p>
                      Your comments have been recorded for this demo.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleFeedback}>
                    <textarea
                      required
                      placeholder="Tell us about your experience..."
                    />

                    <input
                      placeholder="Your name (optional)"
                      type="text"
                    />

                    <button className="send" type="submit">
                      Send feedback
                    </button>

                    <small>
                      Your feedback goes directly to the business.
                    </small>
                  </form>
                )}
              </>
            )}
          </div>
        )}

        <div className="trust">
          <span>Private feedback</span>
          <span>•</span>
          <span>Quick & easy</span>
        </div>

        <p className="powered">
          Powered by <b>ReviewTap</b>
        </p>
      </div>

      <style jsx>{`
        .review-page {
          min-height: 100vh;
          background:
            radial-gradient(
              circle at top,
              rgba(107, 63, 36, 0.08),
              transparent 35%
            ),
            #f7f6f3;
          color: #202124;
          padding: 32px 18px;
          font-family:
            Inter,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        .review-shell {
          width: 100%;
          max-width: 480px;
          margin: 0 auto;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 42px;
        }

        .business-mark {
          width: 58px;
          height: 58px;
          border-radius: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent);
          color: white;
          font-size: 19px;
          font-weight: 800;
          letter-spacing: -0.5px;
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
          flex-shrink: 0;
        }

        .business-info .type {
          color: #777;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 3px;
        }

        .business-info h1 {
          margin: 0;
          font-size: 21px;
          line-height: 1.15;
          letter-spacing: -0.5px;
        }

        .location {
          color: #777;
          font-size: 13px;
          margin-top: 4px;
        }

        .intro {
          text-align: center;
          margin-bottom: 25px;
        }

        .intro h2 {
          font-size: 30px;
          line-height: 1.1;
          letter-spacing: -1px;
          margin: 0 0 12px;
        }

        .intro p {
          max-width: 390px;
          margin: 0 auto;
          color: #6d6d6d;
          line-height: 1.6;
          font-size: 15px;
        }

        .rating-card,
        .action-card {
          background: rgba(255, 255, 255, 0.92);
          border: 1px solid rgba(0, 0, 0, 0.06);
          border-radius: 24px;
          padding: 27px 20px;
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.06);
        }

        .rating-card {
          text-align: center;
        }

        .stars {
          display: flex;
          justify-content: center;
          gap: 5px;
        }

        .star {
          appearance: none;
          border: 0;
          background: transparent;
          cursor: pointer;
          padding: 3px;
          font-size: 44px;
          line-height: 1;
          color: #d9d9d9;
          transition:
            transform 0.15s ease,
            color 0.15s ease;
        }

        .star:hover {
          transform: scale(1.12);
        }

        .star.selected {
          color: #f4b400;
        }

        .rating-hint,
        .rating-result {
          margin-top: 13px;
          font-size: 13px;
          color: #777;
        }

        .rating-result {
          color: var(--accent);
          font-weight: 700;
        }

        .action-card {
          margin-top: 16px;
          text-align: center;
        }

        .action-icon {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(107, 63, 36, 0.09);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 14px;
          font-weight: 800;
          font-size: 19px;
        }

        .action-card h3 {
          margin: 0 0 9px;
          font-size: 20px;
          letter-spacing: -0.4px;
        }

        .action-card p {
          color: #707070;
          font-size: 14px;
          line-height: 1.55;
          margin: 0 auto 18px;
          max-width: 370px;
        }

        .review-button,
        .private-button,
        .send {
          width: 100%;
          min-height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          font-size: 15px;
          font-weight: 750;
          cursor: pointer;
          text-decoration: none;
          transition:
            transform 0.15s ease,
            opacity 0.15s ease;
          box-sizing: border-box;
        }

        .review-button {
          background: var(--accent);
          color: white;
        }

        .private-button {
          border: 1px solid #ddd;
          background: white;
          color: #333;
        }

        .review-button:hover,
        .private-button:hover,
        .send:hover {
          transform: translateY(-1px);
          opacity: 0.92;
        }

        form {
          margin-top: 17px;
        }

        textarea,
        input {
          width: 100%;
          box-sizing: border-box;
          border: 1px solid #dedede;
          border-radius: 13px;
          background: #fafafa;
          padding: 14px;
          font: inherit;
          font-size: 14px;
          outline: none;
          margin-bottom: 11px;
        }

        textarea {
          min-height: 120px;
          resize: vertical;
        }

        textarea:focus,
        input:focus {
          border-color: var(--accent);
          background: white;
        }

        .send {
          border: 0;
          background: var(--accent);
          color: white;
        }

        form small {
          display: block;
          margin-top: 10px;
          color: #888;
          font-size: 11px;
        }

        .thank-you {
          padding: 10px 0 3px;
        }

        .thank-you-icon {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          background: #edf6ef;
          color: #32834a;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 12px;
          font-weight: 800;
        }

        .thank-you strong {
          font-size: 17px;
        }

        .thank-you p {
          margin: 7px 0 0;
        }

        .trust {
          display: flex;
          justify-content: center;
          gap: 8px;
          color: #999;
          font-size: 11px;
          margin-top: 22px;
        }

        .powered {
          text-align: center;
          color: #aaa;
          font-size: 11px;
          margin: 22px 0 0;
        }

        .powered b {
          color: #777;
        }

        @media (max-width: 420px) {
          .review-page {
            padding: 24px 14px;
          }

          .intro h2 {
            font-size: 27px;
          }

          .star {
            font-size: 39px;
          }

          .brand {
            margin-bottom: 34px;
          }
        }
      `}</style>
    </main>
  );
}
