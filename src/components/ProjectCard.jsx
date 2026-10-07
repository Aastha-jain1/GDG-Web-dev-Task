import React from 'react';

export default function ProjectCard({ project, isVoted, onToggleUpvote, onSelectProject }) {
  // Extract initial letters from creator name for demo avatar
  const initials = project.creatorName
    ? project.creatorName.split(' ').map(w => w[0]).slice(0, 2).join('')
    : 'CD';

  const commentCount = project.comments ? project.comments.length : 0;

  return (
    <article className="project-card">
      {/* Category & Feedback Status Header */}
      <div className="card-header">
        <div className="card-header-left">
          <span className="card-category-badge">{project.category}</span>
          {project.status && (
            <span className={`status-badge status-${project.status.toLowerCase().replace(/\s+/g, '-')}`}>
              {project.status}
            </span>
          )}
        </div>
        {project.lookingForFeedback && (
          <span className="feedback-badge" title="The author is actively looking for peer reviews">
            <span className="pulse-dot pulse-dot-amber" />
            Seeking Feedback
          </span>
        )}
      </div>

      {/* Project Title */}
      <h3
        className="card-title"
        onClick={() => onSelectProject(project.id)}
        tabIndex="0"
        role="button"
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelectProject(project.id);
          }
        }}
      >
        {project.title}
      </h3>

      {/* Student Creator */}
      <div className="card-creator">
        <span className="card-creator-avatar">{initials}</span>
        <span>{project.creatorName}</span>
      </div>

      {/* Short Description */}
      <p className="card-description">{project.shortDescription}</p>

      {/* Technology Stack Tags */}
      <div className="card-tags">
        {project.technologies.map((tech) => (
          <span key={tech} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>

      {/* Card Action Footer */}
      <div className="card-footer">
        <div className="footer-left">
          {/* Upvote Button with duplicate prevention toggle */}
          <button
            className={`btn-upvote ${isVoted ? 'voted' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              onToggleUpvote(project.id);
            }}
            title={isVoted ? 'Click to remove your upvote' : 'Click to upvote this project'}
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
            <span>{project.upvotes}</span>
          </button>

          {/* Comment Counter Indicator */}
          <button
            className="comment-indicator"
            onClick={() => onSelectProject(project.id)}
            title="View feedback and comments"
            aria-label={`${commentCount} comments`}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>{commentCount}</span>
          </button>
        </div>

        {/* View Details Button */}
        <button
          className="card-details-btn"
          onClick={() => onSelectProject(project.id)}
          aria-label={`View details for ${project.title}`}
        >
          <span>Details</span>
          <span className="arrow-icon" aria-hidden="true">&rarr;</span>
        </button>
      </div>
    </article>
  );
}
