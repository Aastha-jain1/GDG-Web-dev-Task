import React, { useState } from 'react';
import { GDG_ACTIVITIES } from '../data/gdgActivities.js';

export default function Activities({ onNavigate }) {
  const [filterTab, setFilterTab] = useState('all');

  const upcomingActivities = GDG_ACTIVITIES.filter((a) => a.status === 'Upcoming');
  const completedActivities = GDG_ACTIVITIES.filter((a) => a.status === 'Completed');

  const displayedActivities =
    filterTab === 'upcoming'
      ? upcomingActivities
      : filterTab === 'completed'
      ? completedActivities
      : GDG_ACTIVITIES;

  return (
    <div className="activities-container">
      {/* Header */}
      <section className="hero-section">
        <h1 className="hero-title">GDG on Campus Activities</h1>
        <p className="hero-subtitle">
          Join hands-on coding workshops, hackathons, and peer review sessions. Build projects
          together and share them on the student showcase board.
        </p>

        {/* Tab filters */}
        <div className="category-chips" style={{ marginTop: '16px' }}>
          <button
            className={`chip-btn ${filterTab === 'all' ? 'active' : ''}`}
            onClick={() => setFilterTab('all')}
          >
            All Activities ({GDG_ACTIVITIES.length})
          </button>
          <button
            className={`chip-btn ${filterTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setFilterTab('upcoming')}
          >
            Upcoming ({upcomingActivities.length})
          </button>
          <button
            className={`chip-btn ${filterTab === 'completed' ? 'active' : ''}`}
            onClick={() => setFilterTab('completed')}
          >
            Completed ({completedActivities.length})
          </button>
        </div>
      </section>

      {/* Activities Grid */}
      <div className="activities-grid">
        {displayedActivities.map((act) => (
          <article key={act.id} className="activity-card">
            <div className="activity-card-header">
              <span className="card-category-badge">{act.category}</span>
              <span
                className={`status-badge status-${act.status === 'Upcoming' ? 'in-development' : 'published'}`}
              >
                {act.status}
              </span>
            </div>

            <h2 className="activity-title">{act.title}</h2>

            <div className="activity-details-meta">
              <div className="meta-row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                <span>{act.date} &bull; {act.time}</span>
              </div>
              <div className="meta-row">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{act.location}</span>
              </div>
            </div>

            <p className="activity-description">{act.description}</p>

            <div className="activity-footer">
              <span className="activity-badge-action">
                {act.status === 'Upcoming' ? act.actionText : 'Session Completed'}
              </span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
