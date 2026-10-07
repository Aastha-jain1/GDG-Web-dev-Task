import React, { useState, useMemo } from 'react';
import ProjectCard from './ProjectCard.jsx';
import { CATEGORIES } from '../data/seedProjects.js';

export default function ProjectFeed({
  projects,
  userVotes,
  onToggleUpvote,
  onSelectProject,
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  onlyFeedback,
  onFeedbackChange,
  sortBy,
  onSortChange
}) {
  // Real statistics computed directly from local project data (Rule 8)
  const totalProjects = projects.length;
  const feedbackNeededCount = useMemo(
    () => projects.filter((p) => p.lookingForFeedback).length,
    [projects]
  );
  const totalUpvotes = useMemo(
    () => projects.reduce((acc, p) => acc + (p.upvotes || 0), 0),
    [projects]
  );

  // Filter and sort projects based on user input
  const filteredProjects = useMemo(() => {
    return projects
      .filter((project) => {
        // Category filter
        if (selectedCategory !== 'All' && project.category !== selectedCategory) {
          return false;
        }

        // Seeking Feedback toggle filter
        if (onlyFeedback && !project.lookingForFeedback) {
          return false;
        }

        // Search filter matching title, creator, description, and technologies
        if (searchTerm.trim() !== '') {
          const query = searchTerm.toLowerCase();
          const matchTitle = project.title.toLowerCase().includes(query);
          const matchCreator = project.creatorName.toLowerCase().includes(query);
          const matchDesc = project.shortDescription.toLowerCase().includes(query);
          const matchTech = project.technologies.some((tech) =>
            tech.toLowerCase().includes(query)
          );

          if (!matchTitle && !matchCreator && !matchDesc && !matchTech) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'upvotes') {
          return b.upvotes - a.upvotes;
        }
        if (sortBy === 'latest') {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }
        if (sortBy === 'comments') {
          const countA = a.comments ? a.comments.length : 0;
          const countB = b.comments ? b.comments.length : 0;
          return countB - countA;
        }
        return 0;
      });
  }, [projects, searchTerm, selectedCategory, onlyFeedback, sortBy]);

  const handleResetFilters = () => {
    if (onSearchChange) onSearchChange('');
    if (onCategoryChange) onCategoryChange('All');
    if (onFeedbackChange) onFeedbackChange(false);
    if (onSortChange) onSortChange('upvotes');
  };

  return (
    <div className="feed-container">
      {/* Hero Section & Genuine Computed Stats */}
      <section className="hero-section">
        <h1 className="hero-title">GDG on Campus Project Showcase</h1>
        <p className="hero-subtitle">
          Explore software, tools, and hackathon prototypes built by fellow student developers.
          Upvote your favorites and leave actionable peer feedback.
        </p>

        {/* Real computed community stats */}
        <div className="stats-row">
          <div className="stat-pill">
            <span className="pulse-dot" />
            <span><strong>{totalProjects}</strong> Projects Showcase</span>
          </div>
          <div className="stat-pill">
            <span className="pulse-dot pulse-dot-amber" />
            <span><strong>{feedbackNeededCount}</strong> Seeking Feedback</span>
          </div>
          <div className="stat-pill">
            <span><strong>{totalUpvotes}</strong> Total Community Upvotes</span>
          </div>
        </div>
      </section>

      {/* Search, Category, and Filter Toolbar */}
      <section className="feed-controls" aria-label="Project search and filters">
        {/* Search row */}
        <div className="search-row">
          <div className="search-box-wrapper">
            <svg
              className="search-icon"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search projects, technologies (e.g. React, Python), or authors..."
              value={searchTerm}
              onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
              aria-label="Search projects"
            />
          </div>
        </div>

        {/* Filter & Sort row */}
        <div className="filter-row">
          {/* Category Chips */}
          <div className="category-chips">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`chip-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => onCategoryChange && onCategoryChange(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Action filters: Feedback checkbox and Sort dropdown */}
          <div className="filter-actions">
            <label className="feedback-toggle-label">
              <input
                type="checkbox"
                className="feedback-checkbox"
                checked={onlyFeedback}
                onChange={(e) => onFeedbackChange && onFeedbackChange(e.target.checked)}
              />
              <span>Seeking Feedback Only</span>
            </label>

            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => onSortChange && onSortChange(e.target.value)}
              aria-label="Sort projects by"
            >
              <option value="upvotes">Top Upvoted</option>
              <option value="latest">Recently Added</option>
              <option value="comments">Most Discussed</option>
            </select>
          </div>
        </div>
      </section>

      {/* Projects Grid or Empty State */}
      {filteredProjects.length > 0 ? (
        <section className="project-grid" aria-label="Project feed results">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              isVoted={userVotes.includes(project.id)}
              onToggleUpvote={onToggleUpvote}
              onSelectProject={onSelectProject}
            />
          ))}
        </section>
      ) : (
        <div className="empty-state">
          <h2 className="empty-state-title">No matching projects found</h2>
          <p className="empty-state-text">
            No projects matched your search query or filter selection. Try adjusting your search term.
          </p>
          <button className="btn btn-secondary" onClick={handleResetFilters}>
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
