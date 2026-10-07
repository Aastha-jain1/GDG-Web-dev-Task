// src/components/AddProject.jsx
import React, { useState } from 'react';
import { CATEGORIES, PROJECT_STATUSES } from '../data/seedProjects.js';

export default function AddProject({ onAddProject, onCancel }) {
  const [form, setForm] = useState({
    title: '',
    creatorName: '',
    category: CATEGORIES[1] || 'Web Dev',
    status: PROJECT_STATUSES[0] || 'Planning',
    shortDescription: '',
    problemSolved: '',
    description: '',
    technologies: '',
    githubUrl: '',
    demoUrl: '',
    lookingForFeedback: false,
    feedbackNote: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.title.trim()) newErrors.title = 'Title is required';
    if (!form.creatorName.trim()) newErrors.creatorName = 'Creator name required';
    if (!form.category) newErrors.category = 'Category required';
    if (!form.status) newErrors.status = 'Status required';
    if (!form.shortDescription.trim()) newErrors.shortDescription = 'Short description required';
    if (!form.problemSolved.trim()) newErrors.problemSolved = 'Problem solved description required';
    if (!form.description.trim()) newErrors.description = 'Full description required';
    if (!form.technologies.trim()) newErrors.technologies = 'At least one technology required';
    const urlPattern = /^(https?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/i;
    if (form.githubUrl && !urlPattern.test(form.githubUrl)) newErrors.githubUrl = 'Invalid URL';
    if (form.demoUrl && !urlPattern.test(form.demoUrl)) newErrors.demoUrl = 'Invalid URL';
    if (form.lookingForFeedback && !form.feedbackNote.trim()) newErrors.feedbackNote = 'Feedback note required when seeking feedback';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    const techArray = form.technologies.split(',').map((t) => t.trim()).filter(Boolean);
    const newProj = {
      id: 'proj-' + Date.now(),
      title: form.title.trim(),
      creatorName: form.creatorName.trim(),
      category: form.category,
      status: form.status,
      shortDescription: form.shortDescription.trim(),
      problemSolved: form.problemSolved.trim(),
      description: form.description.trim(),
      technologies: techArray,
      githubUrl: form.githubUrl.trim() || null,
      demoUrl: form.demoUrl.trim() || null,
      lookingForFeedback: form.lookingForFeedback,
      feedbackNote: form.lookingForFeedback ? form.feedbackNote.trim() : null,
      upvotes: 0,
      comments: [],
      createdAt: new Date().toISOString().split('T')[0]
    };
    onAddProject(newProj);
  };

  return (
    <div className="add-project-form">
      <h2 className="add-project-title">Submit a New Project</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group">
          <label>Title *</label>
          <input type="text" name="title" value={form.title} onChange={handleChange} />
          {errors.title && <p className="error-text">{errors.title}</p>}
        </div>
        <div className="form-group">
          <label>Creator Name *</label>
          <input type="text" name="creatorName" value={form.creatorName} onChange={handleChange} />
          {errors.creatorName && <p className="error-text">{errors.creatorName}</p>}
        </div>
        <div className="form-group">
          <label>Category *</label>
          <select name="category" value={form.category} onChange={handleChange}>
            {CATEGORIES.filter((c) => c !== 'All').map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
          {errors.category && <p className="error-text">{errors.category}</p>}
        </div>
        <div className="form-group">
          <label>Status *</label>
          <select name="status" value={form.status} onChange={handleChange}>
            {PROJECT_STATUSES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.status && <p className="error-text">{errors.status}</p>}
        </div>
        <div className="form-group">
          <label>Short Description *</label>
          <textarea name="shortDescription" value={form.shortDescription} onChange={handleChange} />
          {errors.shortDescription && <p className="error-text">{errors.shortDescription}</p>}
        </div>
        <div className="form-group">
          <label>Problem Solved *</label>
          <textarea name="problemSolved" value={form.problemSolved} onChange={handleChange} />
          {errors.problemSolved && <p className="error-text">{errors.problemSolved}</p>}
        </div>
        <div className="form-group">
          <label>Full Description *</label>
          <textarea name="description" value={form.description} onChange={handleChange} />
          {errors.description && <p className="error-text">{errors.description}</p>}
        </div>
        <div className="form-group">
          <label>Technologies (comma‑separated) *</label>
          <input type="text" name="technologies" value={form.technologies} onChange={handleChange} />
          {errors.technologies && <p className="error-text">{errors.technologies}</p>}
        </div>
        <div className="form-group">
          <label>GitHub URL (optional)</label>
          <input type="url" name="githubUrl" value={form.githubUrl} onChange={handleChange} />
          {errors.githubUrl && <p className="error-text">{errors.githubUrl}</p>}
        </div>
        <div className="form-group">
          <label>Live Demo URL (optional)</label>
          <input type="url" name="demoUrl" value={form.demoUrl} onChange={handleChange} />
          {errors.demoUrl && <p className="error-text">{errors.demoUrl}</p>}
        </div>
        <div className="form-group checkbox-group">
          <label>
            <input type="checkbox" name="lookingForFeedback" checked={form.lookingForFeedback} onChange={handleChange} />
            Seeking Feedback?
          </label>
        </div>
        {form.lookingForFeedback && (
          <div className="form-group">
            <label>Feedback Note *</label>
            <textarea name="feedbackNote" value={form.feedbackNote} onChange={handleChange} />
            {errors.feedbackNote && <p className="error-text">{errors.feedbackNote}</p>}
          </div>
        )}
        <div className="form-actions">
          <button type="submit" className="btn btn-primary">Submit Project</button>
          <button type="button" className="btn btn-secondary" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
