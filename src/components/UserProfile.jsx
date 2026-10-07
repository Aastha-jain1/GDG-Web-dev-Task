import React, { useState } from 'react';

export default function UserProfile({
  currentUser,
  onUpdateProfile,
  projects,
  userVotes,
  onSelectProject,
  onNavigate
}) {
  const [activeTab, setActiveTab] = useState('profile');
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({
    name: currentUser.name || 'Demo Student',
    role: currentUser.role || "Computer Science '26",
    chapter: currentUser.chapter || 'GDG on Campus',
    githubHandle: currentUser.githubHandle || 'demostudent',
    bio: currentUser.bio || 'Passionate student developer exploring web applications and developer tools.'
  });
  const [saveMessage, setSaveMessage] = useState('');

  // Derived: My Projects (projects authored by this student)
  const myProjects = projects.filter((p) =>
    p.creatorName.toLowerCase().includes(currentUser.name.toLowerCase())
  );

  // Derived: Projects upvoted by this student
  const upvotedProjects = projects.filter((p) => userVotes.includes(p.id));

  // Derived: Comments authored by this student across all projects
  const myComments = [];
  projects.forEach((proj) => {
    if (proj.comments) {
      proj.comments.forEach((c) => {
        if (c.author && c.author.toLowerCase().includes(currentUser.name.toLowerCase())) {
          myComments.push({
            ...c,
            projectId: proj.id,
            projectTitle: proj.title
          });
        }
      });
    }
  });

  const handleSaveProfile = (e) => {
    e.preventDefault();
    if (!editForm.name.trim()) return;

    onUpdateProfile(editForm);
    setIsEditing(false);
    setSaveMessage('Profile updated successfully!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const initials = currentUser.name
    ? currentUser.name.split(' ').map((w) => w[0]).slice(0, 2).join('')
    : 'DS';

  return (
    <div className="profile-container">
      {/* Profile Header Banner */}
      <section className="profile-header-card">
        <div className="profile-avatar-row">
          <div className="profile-avatar-large">{initials}</div>
          <div className="profile-identity">
            <h1 className="profile-name">{currentUser.name}</h1>
            <p className="profile-role">
              {currentUser.role} &bull; <span className="profile-chapter">{currentUser.chapter}</span>
            </p>
            {currentUser.githubHandle && (
              <a
                href={`https://github.com/${currentUser.githubHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                className="profile-github-link"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <span>github.com/{currentUser.githubHandle}</span>
              </a>
            )}
          </div>
        </div>

        <p className="profile-bio-text">{currentUser.bio}</p>

        {saveMessage && <div className="alert-box alert-success">{saveMessage}</div>}
      </section>

      {/* Tabs navigation */}
      <nav className="profile-tabs" aria-label="Profile navigation tabs">
        <button
          className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
          onClick={() => setActiveTab('profile')}
        >
          My Profile
        </button>
        <button
          className={`tab-btn ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          My Projects <span className="tab-count">{myProjects.length}</span>
        </button>
        <button
          className={`tab-btn ${activeTab === 'activity' ? 'active' : ''}`}
          onClick={() => setActiveTab('activity')}
        >
          My Activity <span className="tab-count">{upvotedProjects.length + myComments.length}</span>
        </button>
      </nav>

      {/* Tab 1: Edit / View Profile */}
      {activeTab === 'profile' && (
        <section className="profile-content-card">
          <div className="section-header-split">
            <h2 className="section-title">Student Profile Details</h2>
            {!isEditing ? (
              <button className="btn btn-secondary" onClick={() => setIsEditing(true)}>
                Edit Profile
              </button>
            ) : (
              <button className="btn btn-ghost" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            )}
          </div>

          {!isEditing ? (
            <div className="profile-read-grid">
              <div className="profile-field">
                <span className="field-label">Student Name</span>
                <span className="field-value">{currentUser.name}</span>
              </div>
              <div className="profile-field">
                <span className="field-label">Department &amp; Year</span>
                <span className="field-value">{currentUser.role}</span>
              </div>
              <div className="profile-field">
                <span className="field-label">GDG Chapter</span>
                <span className="field-value">{currentUser.chapter}</span>
              </div>
              <div className="profile-field">
                <span className="field-label">GitHub Username</span>
                <span className="field-value">@{currentUser.githubHandle}</span>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSaveProfile} className="profile-edit-form">
              <div className="form-grid-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="editName">Full Name *</label>
                  <input
                    id="editName"
                    type="text"
                    className="form-input"
                    value={editForm.name}
                    onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="editRole">Department &amp; Year</label>
                  <input
                    id="editRole"
                    type="text"
                    className="form-input"
                    value={editForm.role}
                    onChange={(e) => setEditForm({ ...editForm, role: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-grid-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="editChapter">GDG Chapter</label>
                  <input
                    id="editChapter"
                    type="text"
                    className="form-input"
                    value={editForm.chapter}
                    onChange={(e) => setEditForm({ ...editForm, chapter: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="editGithub">GitHub Username</label>
                  <input
                    id="editGithub"
                    type="text"
                    className="form-input"
                    value={editForm.githubHandle}
                    onChange={(e) => setEditForm({ ...editForm, githubHandle: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="editBio">Bio / Interests</label>
                <textarea
                  id="editBio"
                  rows="3"
                  className="form-textarea"
                  value={editForm.bio}
                  onChange={(e) => setEditForm({ ...editForm, bio: e.target.value })}
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn btn-primary">
                  Save Changes
                </button>
              </div>
            </form>
          )}
        </section>
      )}

      {/* Tab 2: My Projects */}
      {activeTab === 'projects' && (
        <section className="profile-content-card">
          <div className="section-header-split">
            <div>
              <h2 className="section-title">My Submitted Projects</h2>
              <p className="comments-subtitle">
                Projects associated with your student profile ({currentUser.name}).
              </p>
            </div>
            <button className="btn btn-primary" onClick={() => onNavigate('add')}>
              + Submit New Project
            </button>
          </div>

          {myProjects.length > 0 ? (
            <div className="user-project-list">
              {myProjects.map((p) => (
                <div key={p.id} className="user-project-row">
                  <div className="user-project-main">
                    <div className="header-badges">
                      <span className="card-category-badge">{p.category}</span>
                      {p.status && (
                        <span className={`status-badge status-${p.status.toLowerCase().replace(/\s+/g, '-')}`}>
                          {p.status}
                        </span>
                      )}
                      {p.lookingForFeedback && (
                        <span className="feedback-badge">Seeking Feedback</span>
                      )}
                    </div>
                    <h3 className="user-project-title" onClick={() => onSelectProject(p.id)}>
                      {p.title}
                    </h3>
                    <p className="user-project-desc">{p.shortDescription}</p>
                  </div>
                  <div className="user-project-stats">
                    <span className="stat-badge">&uarr; {p.upvotes} Upvotes</span>
                    <button className="btn btn-secondary" onClick={() => onSelectProject(p.id)}>
                      View Details &rarr;
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3 className="empty-state-title">No projects submitted yet</h3>
              <p className="empty-state-text">
                Showcase your hackathon prototype, course build, or open-source campus tool.
              </p>
              <button className="btn btn-primary" onClick={() => onNavigate('add')}>
                Submit Your First Project
              </button>
            </div>
          )}
        </section>
      )}

      {/* Tab 3: My Activity */}
      {activeTab === 'activity' && (
        <div className="profile-activity-sections">
          {/* Section A: Upvoted Projects */}
          <section className="profile-content-card">
            <h2 className="section-title">Projects You've Upvoted ({upvotedProjects.length})</h2>
            <p className="comments-subtitle" style={{ marginBottom: '14px' }}>
              Student builds you supported with an upvote.
            </p>

            {upvotedProjects.length > 0 ? (
              <div className="activity-list">
                {upvotedProjects.map((p) => (
                  <div key={p.id} className="activity-item-row" onClick={() => onSelectProject(p.id)}>
                    <div>
                      <strong className="activity-item-title">{p.title}</strong>
                      <span className="activity-item-meta">by {p.creatorName} &bull; {p.category}</span>
                    </div>
                    <span className="btn-upvote voted" style={{ pointerEvents: 'none' }}>
                      &uarr; {p.upvotes}
                    </span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="empty-activity-text">You haven't upvoted any projects yet. Browse the feed to upvote great work!</p>
            )}
          </section>

          {/* Section B: Feedback & Comments Left */}
          <section className="profile-content-card" style={{ marginTop: '16px' }}>
            <h2 className="section-title">Feedback You've Left ({myComments.length})</h2>
            <p className="comments-subtitle" style={{ marginBottom: '14px' }}>
              Peer reviews and suggestions posted under student projects.
            </p>

            {myComments.length > 0 ? (
              <div className="activity-list">
                {myComments.map((c) => (
                  <div key={c.id} className="comment-card" style={{ cursor: 'pointer' }} onClick={() => onSelectProject(c.projectId)}>
                    <div className="comment-card-header">
                      <div>
                        <span className="breadcrumb-muted">Project: </span>
                        <strong>{c.projectTitle}</strong>
                      </div>
                      <span className={`comment-type-badge type-${c.type ? c.type.toLowerCase() : 'general'}`}>
                        {c.type}
                      </span>
                    </div>
                    <p className="comment-card-body">{c.text}</p>
                    <span className="comment-date">{c.createdAt}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="empty-activity-text">You haven't posted any peer reviews yet. Visit projects marked "Seeking Feedback" to share tips!</p>
            )}
          </section>
        </div>
      )}
    </div>
  );
}
