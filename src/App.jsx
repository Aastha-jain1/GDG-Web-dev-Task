import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import ProjectFeed from './components/ProjectFeed.jsx';
import ProjectDetails from './components/ProjectDetails.jsx';
import UserProfile from './components/UserProfile.jsx';
import Activities from './components/Activities.jsx';
import HelpSupport from './components/HelpSupport.jsx';
import Footer from './components/Footer.jsx';
import AddProject from './components/AddProject.jsx';

export default function App() {
  // Theme state with localStorage persistence and system preference fallback
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('gdg_theme');
    if (saved) return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  // Projects state initialized from localStorage or seedProjects
  const [projects, setProjects] = useState(() => {
    try {
      const saved = localStorage.getItem('gdg_projects');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      }
    } catch (err) {
      console.error('Failed to load projects from localStorage:', err);
    }
    return SEED_PROJECTS;
  });

  // User upvoted project IDs with localStorage persistence (for toggle upvotes)
  const [userVotes, setUserVotes] = useState(() => {
    try {
      const saved = localStorage.getItem('gdg_voted_projects');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) return parsed;
      }
    } catch (err) {
      console.error('Failed to load user votes from localStorage:', err);
    }
    return [];
  });

  // Lightweight student user profile state
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('gdg_user_profile');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.name) return parsed;
      }
    } catch (err) {
      console.error('Failed to load user profile from localStorage:', err);
    }
    return {
      name: 'Demo Student',
      role: "Computer Science '26",
      chapter: 'GDG on Campus',
      githubHandle: 'demostudent26',
      bio: 'Student developer exploring React, campus automation tools, and open-source software.'
    };
  });

  // Feed search and filter state (lifted to preserve filter state on back-to-feed)
  const [feedSearchTerm, setFeedSearchTerm] = useState('');
  const [feedCategory, setFeedCategory] = useState('All');
  const [feedOnlyFeedback, setFeedOnlyFeedback] = useState(false);
  const [feedSortBy, setFeedSortBy] = useState('upvotes');

  // Navigation view state: 'feed' | 'details' | 'add' | 'profile' | 'activities' | 'help'
  const [currentView, setCurrentView] = useState('feed');
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  // Sync theme changes to document and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('gdg_theme', theme);
  }, [theme]);

  // Sync projects state to localStorage whenever modified
  useEffect(() => {
    try {
      localStorage.setItem('gdg_projects', JSON.stringify(projects));
    } catch (err) {
      console.error('Failed to persist projects to localStorage:', err);
    }
  }, [projects]);

  // Sync user upvotes to localStorage whenever modified
  useEffect(() => {
    try {
      localStorage.setItem('gdg_voted_projects', JSON.stringify(userVotes));
    } catch (err) {
      console.error('Failed to persist user votes to localStorage:', err);
    }
  }, [userVotes]);

  // Sync user profile changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('gdg_user_profile', JSON.stringify(currentUser));
    } catch (err) {
      console.error('Failed to persist user profile to localStorage:', err);
    }
  }, [currentUser]);

  // Toggle theme handler
  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Upvote toggle handler (Rule 5):
  // - First click: add one upvote and record project ID in userVotes
  // - Second click: remove upvote and decrease count by one
  const handleToggleUpvote = (projectId) => {
    const hasVoted = userVotes.includes(projectId);

    if (hasVoted) {
      // Remove upvote
      setUserVotes((prev) => prev.filter((id) => id !== projectId));
      setProjects((prev) =>
        prev.map((proj) =>
          proj.id === projectId
            ? { ...proj, upvotes: Math.max(0, (proj.upvotes || 0) - 1) }
            : proj
        )
      );
    } else {
      // Add upvote
      setUserVotes((prev) => [...prev, projectId]);
      setProjects((prev) =>
        prev.map((proj) =>
          proj.id === projectId
            ? { ...proj, upvotes: (proj.upvotes || 0) + 1 }
            : proj
        )
      );
    }
  };

  // Comment submission handler: immediately appends comment to project and persists
  const handleAddComment = (projectId, newComment) => {
    setProjects((prev) =>
      prev.map((proj) => {
        if (proj.id === projectId) {
          const existingComments = proj.comments || [];
          return {
            ...proj,
            comments: [newComment, ...existingComments]
          };
        }
        return proj;
      })
    );
  };

  // Profile update handler
  const handleUpdateProfile = (updatedProfile) => {
    setCurrentUser(updatedProfile);
  };

  // Navigation handler
  const handleNavigate = (view) => {
    setCurrentView(view);
    if (view === 'feed') {
      setSelectedProjectId(null);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Select project handler (moves to details view)
  const handleSelectProject = (projectId) => {
    setSelectedProjectId(projectId);
    setCurrentView('details');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Active project for details view
  const activeProject = projects.find((p) => p.id === selectedProjectId);

  return (
    <div className="app-container">
      {/* Sticky Top Navbar */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigate}
        theme={theme}
        onToggleTheme={handleToggleTheme}
        currentUser={currentUser}
      />

      {/* Main Content Area */}
      <main className="main-content">
        {currentView === 'feed' && (
          <ProjectFeed
            projects={projects}
            userVotes={userVotes}
            onToggleUpvote={handleToggleUpvote}
            onSelectProject={handleSelectProject}
            searchTerm={feedSearchTerm}
            onSearchChange={setFeedSearchTerm}
            selectedCategory={feedCategory}
            onCategoryChange={setFeedCategory}
            onlyFeedback={feedOnlyFeedback}
            onFeedbackChange={setFeedOnlyFeedback}
            sortBy={feedSortBy}
            onSortChange={setFeedSortBy}
          />
        )}

        {currentView === 'details' && (
          <ProjectDetails
            project={activeProject}
            isVoted={userVotes.includes(selectedProjectId)}
            onToggleUpvote={handleToggleUpvote}
            onBack={() => handleNavigate('feed')}
            onAddComment={handleAddComment}
          />
        )}

        {currentView === 'profile' && (
          <UserProfile
            currentUser={currentUser}
            onUpdateProfile={handleUpdateProfile}
            projects={projects}
            userVotes={userVotes}
            onSelectProject={handleSelectProject}
            onNavigate={handleNavigate}
          />
        )}

        {currentView === 'activities' && (
          <Activities onNavigate={handleNavigate} />
        )}

        {currentView === 'help' && (
          <HelpSupport />
        )}

        {currentView === 'add' && (
          <AddProject
            onAddProject={(newProj) => {
              setProjects((prev) => [...prev, newProj]);
              setSelectedProjectId(newProj.id);
              setCurrentView('details');
            }}
            onCancel={() => handleNavigate('feed')}
          />
        )}
      </main>

      {/* Community Footer */}
      <Footer />
    </div>
  );
}
