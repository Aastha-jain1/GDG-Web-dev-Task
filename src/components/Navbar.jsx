import React from 'react';

export default function Navbar({
  currentView,
  onNavigate,
  theme,
  onToggleTheme,
  currentUser
}) {
  const userInitials = currentUser?.name
    ? currentUser.name.split(' ').map((w) => w[0]).slice(0, 2).join('')
    : 'DS';

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Brand */}
        <button
          className="brand-link"
          onClick={() => onNavigate('feed')}
          aria-label="GDG on Campus Showcase - Home"
        >
          {/* Developer brackets icon */}
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ color: 'var(--primary)' }}
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
          <span>GDG Showcase</span>
          <span className="brand-badge">On Campus</span>
        </button>

        {/* Center / Right actions */}
        <div className="navbar-actions">
          {/* Navigation to Feed */}
          <button
            className={`nav-link-btn ${currentView === 'feed' ? 'active' : ''}`}
            onClick={() => onNavigate('feed')}
          >
            Feed
          </button>

          {/* Navigation to Activities */}
          <button
            className={`nav-link-btn ${currentView === 'activities' ? 'active' : ''}`}
            onClick={() => onNavigate('activities')}
          >
            Activities
          </button>

          {/* Navigation to Help & Support */}
          <button
            className={`nav-link-btn ${currentView === 'help' ? 'active' : ''}`}
            onClick={() => onNavigate('help')}
          >
            Help
          </button>

          {/* User Profile Button */}
          <button
            className={`nav-profile-btn ${currentView === 'profile' ? 'active' : ''}`}
            onClick={() => onNavigate('profile')}
            title="My Student Profile & Activity"
            aria-label="View my profile and activity"
          >
            <span className="nav-profile-avatar">{userInitials}</span>
            <span className="nav-profile-name">{currentUser?.name?.split(' ')[0] || 'Profile'}</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            className="btn-icon"
            onClick={onToggleTheme}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme mode"
          >
            {theme === 'dark' ? (
              /* Sun icon */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            ) : (
              /* Moon icon */
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            )}
          </button>

          {/* Add Project CTA */}
          <button
            className="btn btn-primary"
            onClick={() => onNavigate('add')}
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19" />
              <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span>Add Project</span>
          </button>
        </div>
      </div>
    </header>
  );
}
