import React, { useState } from 'react';

export default function HelpSupport() {
  const [reportForm, setReportForm] = useState({
    category: 'Bug',
    target: '',
    description: ''
  });
  const [reportSuccess, setReportSuccess] = useState('');
  const [reportError, setReportError] = useState('');

  const faqs = [
    {
      q: 'How do I add my project to the showcase board?',
      a: 'Click the "+ Add Project" button in the top navigation bar. Fill in your project title, a short pitch, the campus problem you are solving, technologies used, and your public GitHub link. Your project will immediately appear on the showcase feed!'
    },
    {
      q: 'How does the "Seeking Feedback" status work?',
      a: 'When submitting or editing a project, enabling "Looking for Feedback" flags your project on the showcase board and adds an amber badge. Fellow GDG student developers can filter specifically for projects seeking review and leave suggestions, bug reports, and UX feedback.'
    },
    {
      q: 'How does duplicate upvote prevention work?',
      a: 'The application tracks your upvoted project IDs in your browser\'s local storage. Clicking the upvote button toggles your vote: the first click increments the vote count by one, and a second click removes your vote. This prevents accidental duplicate voting without requiring login credentials.'
    },
    {
      q: 'What are the GDG on Campus peer review guidelines?',
      a: 'All comments should be constructive, specific, and respectful. When pointing out bugs or edge cases, provide code snippets or reproduction steps where possible to help the author learn.'
    }
  ];

  const handleReportSubmit = (e) => {
    e.preventDefault();
    setReportError('');
    setReportSuccess('');

    if (!reportForm.description.trim()) {
      setReportError('Please describe the issue or problem you encountered.');
      return;
    }

    try {
      const existing = JSON.parse(localStorage.getItem('gdg_reported_issues') || '[]');
      const newReport = {
        id: 'issue-' + Date.now(),
        ...reportForm,
        createdAt: new Date().toISOString()
      };
      existing.push(newReport);
      localStorage.setItem('gdg_reported_issues', JSON.stringify(existing));

      setReportSuccess('Thank you! Your issue report has been logged successfully.');
      setReportForm({ category: 'Bug', target: '', description: '' });
      setTimeout(() => setReportSuccess(''), 4000);
    } catch (err) {
      console.error(err);
      setReportError('Could not save report locally.');
    }
  };

  return (
    <div className="help-container">
      {/* Header */}
      <section className="hero-section">
        <h1 className="hero-title">Help &amp; Support</h1>
        <p className="hero-subtitle">
          Find answers to common questions about the GDG on Campus showcase, learn our peer review
          guidelines, or report a bug.
        </p>
      </section>

      {/* Two-column layout for FAQ & Contact/Report */}
      <div className="help-grid">
        {/* Left column: FAQ */}
        <section className="help-card">
          <h2 className="section-title" style={{ marginBottom: '16px' }}>
            Frequently Asked Questions
          </h2>
          <div className="faq-list">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <h3 className="faq-question">{faq.q}</h3>
                <p className="faq-answer">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Right column: Contact & Report Issue Form */}
        <div className="help-sidebar">
          {/* Chapter Contact Box */}
          <section className="help-card">
            <h2 className="section-title">Campus Chapter Contact</h2>
            <p className="comments-subtitle" style={{ marginTop: '4px', marginBottom: '14px' }}>
              Have questions about GDG on Campus recruitment or workshops?
            </p>
            <div className="contact-list">
              <div className="contact-row">
                <strong>Community Email:</strong>
                <span>gdgoncampus@example.edu</span>
              </div>
              <div className="contact-row">
                <strong>Campus Venue:</strong>
                <span>Computer Science Block &bull; Room 302</span>
              </div>
              <div className="contact-row">
                <strong>Community Discord:</strong>
                <a href="#" className="card-details-link">Join GDG Campus Discord &rarr;</a>
              </div>
            </div>
          </section>

          {/* Report an Issue Form */}
          <section className="help-card" style={{ marginTop: '18px' }}>
            <h2 className="section-title">Report a Website or Project Issue</h2>
            <p className="comments-subtitle" style={{ marginTop: '4px', marginBottom: '14px' }}>
              Found a broken link, UI glitch, or inappropriate comment?
            </p>

            {reportError && <div className="alert-box alert-error">{reportError}</div>}
            {reportSuccess && <div className="alert-box alert-success">{reportSuccess}</div>}

            <form onSubmit={handleReportSubmit} className="report-form">
              <div className="form-group">
                <label className="form-label" htmlFor="issueCategory">
                  Issue Type <span className="required-star">*</span>
                </label>
                <select
                  id="issueCategory"
                  className="form-select"
                  value={reportForm.category}
                  onChange={(e) => setReportForm({ ...reportForm, category: e.target.value })}
                >
                  <option value="Bug">Website Bug / Glitch</option>
                  <option value="Broken Link">Broken GitHub / Demo Link</option>
                  <option value="Inappropriate Content">Inappropriate Comment or Project</option>
                  <option value="Suggestion">General Suggestion</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="issueTarget">
                  Related Project or Page (Optional)
                </label>
                <input
                  id="issueTarget"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Canteen Pre-order or Project Feed"
                  value={reportForm.target}
                  onChange={(e) => setReportForm({ ...reportForm, target: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="issueDesc">
                  Description of Problem <span className="required-star">*</span>
                </label>
                <textarea
                  id="issueDesc"
                  rows="3"
                  className="form-textarea"
                  placeholder="Please describe what happened..."
                  value={reportForm.description}
                  onChange={(e) => setReportForm({ ...reportForm, description: e.target.value })}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Submit Report
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
