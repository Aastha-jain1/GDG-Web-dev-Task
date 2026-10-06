# GDG on Campus AITR – Web Developer 

This repository contains my analysis on finding bugs and giving possible suggestions for this website

---

## Section A – GDG Portal Review & Suggestions

### Website Reviewed

GDG on Campus AITR Recruitment Portal  
https://gdgocaitr.vercel.app/

### Testing

I checked the website on both desktop and mobile views.

I mainly tested:

- Navigation links
- Events page
- Event cards
- Search
- Filters
- Apply Now
- View Task
- Mobile menu
- Text and button alignment
- Mobile responsiveness
- Horizontal scrolling / content overflow

---

## My Observations

### 1. General Functionality

The main parts of the website that I tested were working properly.

I was able to use the navigation, search and filter options and open the event and recruitment related sections.

I did not find any major or critical functional bug during my testing.

### 2. Small Navigation Issue

While checking the event page, I noticed that clicking **View Task** sometimes caused the page to briefly move towards a lower section before showing the intended content.

This did not happen every time, so I could not reproduce it consistently.

**Suggestion:**  
The transition could be made more consistent so that the user directly reaches the intended content.

### 3. Mobile View

I also tested the recruitment page using a mobile-sized viewport.

The main elements looked properly adjusted:

- Header
- Hamburger menu
- Role buttons
- Text
- Recruitment content
- Buttons

I did not notice any major horizontal overflow or content getting cut off during the test.

---

# Suggestions for Improvement

These are some features that I think could make the recruitment portal more useful for students.

### 1. More Details About Each Role

Before applying, students could see basic information about each role, such as:

- What the role involves
- Main responsibilities
- Required skills
- Whether beginners can apply
- Expected time commitment
- Selection process

This would make it easier for students to choose the right role.

### 2. Recruitment FAQ

A small FAQ section could answer common questions about the recruitment process.

For example:

- Can a student apply for more than one role?
- What are the eligibility requirements?
- What happens after applying?
- How will shortlisted students be contacted?
- When will the results be announced?

### 3. Application Status

After submitting an application, students could have a way to check its status.

For example:

`Submitted → Under Review → Shortlisted → Selected`

This would make the process clearer and reduce uncertainty for applicants.

### 4. GDG Community / Project Showcase

A section showing previous GDG AITR activities could be useful.

It could include:

- Previous hackathons
- Workshops
- Projects
- Events
- Member achievements

This would also give new applicants a better idea of what they can experience after joining GDG.

### 5. Better Event Organization

Events could be separated more clearly into:

- Upcoming
- Ongoing
- Completed

A small status label on each event could make the events page easier to understand.

### 6. Accessibility

A few accessibility improvements could make the website easier to use for everyone.

Some things that could be considered are:

- Keyboard-friendly navigation
- Visible focus states
- Good color contrast
- Proper labels for buttons and form fields
- Keeping text readable on smaller screens

---

## Overall Feedback

I found the portal easy to navigate during my testing and the main features I checked were working.

I did not find any major functional issue, so instead of adding artificial bugs, I focused on smaller UX improvements that could make the recruitment and event experience better for students.

The biggest improvements I would suggest are clearer role information, an FAQ section, application status tracking and a section showing GDG's previous projects and activities.

---

## Section B – Project Showcase & Feedback Board

This section will contain my implementation for **Task 2: Project Showcase & Feedback Board**.

### Planned Features

- Add a project
- Display projects as cards
- Project title and description
- Tech stack / tags
- Search projects
- Filter projects
- Upvote projects
- Comment on projects
- Responsive design
- Prevent repeated upvotes from the same user

### Tech Stack

To be added after implementation.

### Live Demo

To be added after deployment.

### GitHub Repository

This repository contains the complete implementation and submission.
