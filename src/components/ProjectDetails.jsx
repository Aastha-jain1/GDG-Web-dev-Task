import React, { useState } from 'react';

export default function ProjectDetails({
  project,
  isVoted,
  onToggleUpvote,
  onBack,
  onAddComment
}) {
  // Comment form local state
  const [authorName, setAuthorName] = useState('');
  const [feedbackType, setFeedbackType] = useState('Suggestion');
  const [commentText, setCommentText] = useState('');
  const [formError, setFormError] = useState('');
  const [formSuccess, setFormSuccess] = useState('');

  if (!project) {
    return (
      <div className="empty-state">
        <h2 className="empty-state-title">Project Not Found</h2>
        <p className="empty-state-text">
          The project you are looking for does not exist or has been removed.
        </p>
        <button className="btn btn-secondary" onClick={onBack}>
          &larr; Back to Feed
        </button>
      </div>
    );
  }

  const initials = project.creatorName
    ? project.creatorName.split(' ').map((w) => w[0]).slice(0, 2).join('')
    : 'CD';

  const comments = project.comments || [];

  // Handle comment submission with client-side validation
  const handleSubmitComment = (e) => {
    e.preventDefault();
    setFormError('');
    setFormSuccess('');

    // Validation checks
    if (!authorName.trim()) {
      setFormError('Please enter your name or student handle.');
      return;
    }
    if (!commentText.trim()) {
      setFormError('Please enter a feedback message.');
      return;
    }
    if (commentText.trim().length < 5) {
      setFormError('Feedback message must be at least 5 characters long.');
      return;
    }

    const newComment = {
      id: 'comm-' + Date.now(),
      author: authorName.trim(),
      type: feedbackType,
      text: commentText.trim(),
      createdAt: new Date().toISOString().split('T')[0]
    };

    onAddComment(project.id, newComment);

    // Reset comment text & show success notification
    setCommentText('');
    setFormSuccess('Feedback posted successfully!');
    setTimeout(() => setFormSuccess(''), 3000);
  };

  return (
    <div className="details-container">
      {/* Top Navigation & Breadcrumbs */}
      <nav className="details-nav" aria-label="Breadcrumb navigation">
        <button className="btn-back" onClick={onBack} aria-label="Return to project feed">
          &larr; Back to Feed
        </button>
        <div className="breadcrumb-trail">
          <span className="breadcrumb-muted">Projects</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-muted">{project.category}</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-current">{project.title}</span>
        </div>
      </nav>

      {/* Main Project Header Card */}
      <header className="details-header-card">
        <div className="header-top-row">
          <div className="header-badges">
            <span className="card-category-badge">{project.category}</span>
            {project.status && (
              <span className={`status-badge status-${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
                {project.status}
              </span>
            )}
            {project.lookingForFeedback && (
              <span className="feedback-badge">
                <span className="pulse-dot pulse-dot-amber" />
                Seeking Feedback
              </span>
            )}
          </div>

          {/* Action buttons (Upvote, GitHub, Demo) */}
          <div className="details-actions">
            {/* Toggle Upvote Button */}
            <button
              className={`btn-upvote ${isVoted ? 'voted' : ''}`}
              onClick={() => onToggleUpvote(project.id)}
              title={isVoted ? 'Remove your upvote' : 'Upvote this project'}
              aria-label={`${project.upvotes} upvotes. Click to ${isVoted ? 'remove upvote' : 'upvote'}`}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill={isVoted ? 'currentColor' : 'none'}
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="18 15 12 9 6 15" />
              </svg>
              <span>{project.upvotes} Upvotes</span>
            </button>

            {/* GitHub Link */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                aria-label="View source code on GitHub"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <span>GitHub</span>
              </a>
            )}

            {/* Live Demo Link */}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                aria-label="Open live project demo in new tab"
              >
                <span>Live Demo</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </a>
            )}
          </div>
        </div>

        {/* Project Title */}
        <h1 className="details-title">{project.title}</h1>

        {/* Creator Info */}
        <div className="details-creator">
          <span className="card-creator-avatar">{initials}</span>
          <span className="creator-name">{project.creatorName}</span>
          <span className="creator-bullet">&bull;</span>
          <span className="created-date">Added on {project.createdAt}</span>
        </div>
      </header>

      {/* Seeking Feedback Callout Banner */}
      {project.lookingForFeedback && (
        <section className="feedback-callout" aria-label="Author feedback request">
          <div className="feedback-callout-header">
            <span className="pulse-dot pulse-dot-amber" />
            <h2 className="feedback-callout-title">Author is Looking for Peer Feedback</h2>
          </div>
          <p className="feedback-callout-text">
            {project.feedbackNote ||
              'The creator is looking for constructive feedback on architecture, usability, or edge case handling.'}
          </p>
        </section>
      )}

      {/* Problem Statement Card */}
      <section className="details-section-card">
        <div className="section-header-block">
          <h2 className="section-title">The Problem Being Solved on Campus</h2>
        </div>
        <p className="section-body-text">{project.problemSolved}</p>
      </section>

      {/* Detailed Description Card */}
      <section className="details-section-card">
        <div className="section-header-block">
          <h2 className="section-title">Project Overview &amp; Implementation</h2>
        </div>
        <p className="section-body-text">{project.description}</p>
      </section>

      {/* Technologies Used */}
      <section className="details-section-card">
        <div className="section-header-block">
          <h2 className="section-title">Technologies Used</h2>
        </div>
        <div className="card-tags">
          {project.technologies.map((tech) => (
            <span key={tech} className="tech-tag tech-tag-lg">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Peer Feedback & Comments Section */}
      <section className="comments-section" aria-label="Peer feedback thread">
        <div className="comments-header">
          <h2 className="comments-title">
            Peer Feedback &amp; Discussion{' '}
            <span className="comments-count-pill">{comments.length}</span>
          </h2>
          <p className="comments-subtitle">
            Constructive peer reviews help student projects improve. Share thoughts, test edge cases, or suggest ideas.
          </p>
        </div>

        {/* Comment Submission Form */}
        <form className="comment-form" onSubmit={handleSubmitComment}>
          <h3 className="comment-form-title">Leave Constructive Feedback</h3>

          {formError && <div className="alert-box alert-error">{formError}</div>}
          {formSuccess && <div className="alert-box alert-success">{formSuccess}</div>}

          <div className="form-grid-row">
            {/* Reviewer Name */}
            <div className="form-group">
              <label htmlFor="authorName" className="form-label">
                Your Name / Student Handle <span className="required-star">*</span>
              </label>
              <input
                id="authorName"
                type="text"
                className="form-input"
                placeholder="e.g. Demo Reviewer (CS '26)"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
              />
            </div>

            {/* Feedback Type */}
            <div className="form-group">
              <label htmlFor="feedbackType" className="form-label">
                Feedback Type
              </label>
              <select
                id="feedbackType"
                className="form-select"
                value={feedbackType}
                onChange={(e) => setFeedbackType(e.target.value)}
              >
                <option value="Suggestion">Suggestion &mdash; Ideas &amp; UX</option>
                <option value="Bug">Bug &mdash; Edge Case or Issue</option>
                <option value="General">General &mdash; Discussion / Questions</option>
              </select>
            </div>
          </div>

          {/* Feedback Textarea */}
          <div className="form-group">
            <label htmlFor="commentText" className="form-label">
              Feedback Message <span className="required-star">*</span>
            </label>
            <textarea
              id="commentText"
              className="form-textarea"
              rows="3"
              placeholder="Provide specific, actionable suggestions or questions for this project..."
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              Post Feedback
            </button>
          </div>
        </form>

        {/* Existing Comments List */}
        <div className="comments-list">
          {comments.length > 0 ? (
            comments.map((comm) => (
              <article key={comm.id} className="comment-card">
                <div className="comment-card-header">
                  <div className="comment-author-info">
                    <span className="comment-author-avatar">
                      {comm.author ? comm.author[0].toUpperCase() : 'U'}
                    </span>
                    <strong className="comment-author-name">{comm.author}</strong>
                    <span className="comment-date">{comm.createdAt}</span>
                  </div>
                  <span className={`comment-type-badge type-${comm.type ? comm.type.toLowerCase() : 'general'}`}>
                    {comm.type}
                  </span>
                </div>
                <p className="comment-card-body">{comm.text}</p>
              </article>
            ))
          ) : (
            <div className="empty-comments-state">
              <p>No feedback posted yet. Be the first to review this project!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
