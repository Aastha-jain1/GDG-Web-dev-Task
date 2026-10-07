# GDG on Campus AITR – Web Development Recruitment Task

## Live Demo

https://gdg-on-campus-project-showcase.vercel.app/

## GitHub Repository

https://github.com/Aastha-jain1/GDG-Web-dev-Task

---

# Section A: GDG Portal Review & Suggestions

## Website Reviewed

GDG on Campus AITR Recruitment Portal:  
https://gdgocaitr.vercel.app/

I reviewed the portal on both desktop and mobile views and checked its main
navigation, event-related features, recruitment actions and responsive layout.

---

# 1. Bugs / Issues Observed

### 1.1 Occasional Scroll / Navigation Issue in "View Task"

While testing the event page, I noticed an occasional navigation/scroll issue
when clicking the **"View Task"** button.

Sometimes, instead of directly showing the intended task content, the page
briefly moves or displays a lower section before reaching the expected content.

This issue does not happen every time, so it was not consistently
reproducible during testing.

**Suggested fix:**  
The navigation or scroll behavior could be made more consistent so that
clicking "View Task" takes the user directly to the intended content without
the unexpected intermediate scroll.

---

# 2. Analysis / Testing

I tested the website on both desktop and mobile views.

The following areas were checked:

- Navigation links
- Events page
- Event cards
- Search
- Filters
- "Apply Now" button
- "View Task" button
- Mobile navigation menu
- Text and button alignment
- Mobile responsiveness
- Horizontal scrolling / content overflow

### Desktop

The main navigation, search, filters, event cards and recruitment actions
worked as expected during testing.

### Mobile

The recruitment page was tested using a mobile-sized viewport.

The header, hamburger menu, role buttons, text and recruitment content were
properly adjusted. I did not observe any major horizontal overflow or content
being cut off.

### Overall Testing Result

No major broken links, critical functional bugs or major mobile layout issues
were observed during manual testing.

The only issue noticed was the occasional scroll/navigation behavior with the
"View Task" button.

---

# 3. Suggestions for Improvement

### 3.1 AI-Powered Multilingual Student Assistant

An AI assistant could be added to help students navigate the GDG portal and
understand the community better.

Students could ask questions about:

- GDG and its activities
- Recruitment roles
- Events and workshops
- Registration
- Certificates
- Learning opportunities
- How GDG can help them build projects and improve their skills

The assistant could support **English, Hindi and Hinglish**, making the portal
more accessible to students who are more comfortable with Indian languages.

A useful feature could also be a **"Which Role Is Right For Me?"** option.
The assistant could ask a few questions about a student's interests,
experience and preferred activities and then suggest suitable GDG roles based
on the information available on the portal.

The assistant should use the actual information available on the website
rather than generating unrelated information.

---

### 3.2 More Detailed Role Information

Each recruitment role could include more information about:

- What the role involves
- What students will work on
- What they can learn
- Useful skills for the role
- Examples of possible projects or activities

This would help students choose a role based on their interests instead of
only the role name.

---

### 3.3 Recruitment Process Timeline

A simple visual timeline could make the recruitment process easier to
understand.

For example:

**Apply → Screening/Task → Interview → Shortlist → Final Selection**

This would help applicants know what to expect after submitting their
application.

---

### 3.4 Member Success Stories / Experiences

Along with the existing community and member content, short experiences from
GDG members could show how joining GDG helped them learn, build projects,
participate in events, or improve their skills.

This could give new applicants a more realistic idea of what they can expect
from the community.

---

# 4. Overall Feedback

The portal was easy to navigate during my testing, and most of the features
I checked worked as expected.

I did not find major functional or mobile responsiveness issues. The main
issue I noticed was the occasional scroll behavior with the "View Task"
button.

The main opportunity for improvement is to make the recruitment experience
more informative and interactive. A multilingual AI assistant, clearer role
information, a recruitment timeline and real member experiences could help
students better understand GDG and make more informed decisions about
applying.

---

# Section B: Project Showcase & Feedback Board

## Project Overview

For Section B, I built a Project Showcase & Feedback Board for students to
share their projects, discover projects created by other students, and
receive useful peer feedback.

The main idea is to provide a simple campus-focused space where students can
show what they have built instead of only keeping projects inside their local
folders or GitHub repositories.

Users can browse projects, search and filter them, open a project to see more
details, upvote projects, leave feedback, and submit their own projects.

The interface is designed to keep the project discovery and feedback process
simple and easy to understand.

---

## Key Features

### 1. Project Discovery

The home page displays projects in a clean card-based feed.

Users can:

- Search projects by title, creator or technology
- Filter projects by category
- Filter projects that are looking for feedback
- Sort projects by most upvoted, latest or most commented
- View the number of upvotes and comments
- Open a project to see its complete details

The statistics shown on the page are calculated from the project data rather
than being manually written numbers.

---

### 2. Project Details

Each project has its own detailed view.

The details page includes:

- Project title
- Creator
- Project status
- Category
- Technologies used
- Project description
- Problem or purpose of the project
- GitHub repository link
- Live demo link when available
- Upvote option
- Feedback section
- Comments

Users can return to the project feed without losing the overall application
state.

---

### 3. Add a Project

Users can submit their own project through the **Add Project** form.

The form collects information such as:

- Project title
- Creator name
- Category
- Technologies used
- Short description
- Detailed project description
- GitHub repository
- Optional live demo
- Whether feedback is requested

Basic validation is included so incomplete or invalid project information is
not submitted.

After submission, the project is added to the application and becomes
available in the project feed.

---

### 4. Upvotes

Projects can be upvoted directly from the project cards and project details
page.

The voting system prevents the same browser from repeatedly adding votes to
the same project.

Upvote information is stored locally so that refreshing the page does not
immediately remove the user's voting state.

The upvote system also supports removing a vote by clicking the button again.

---

### 5. Peer Feedback

Users can leave feedback on projects.

Feedback can be categorized as:

- Suggestion
- Bug
- General

The feedback is displayed on the project details page after submission.

This makes the project board more useful than a simple project gallery,
because students can actually receive suggestions and discuss their work.

---

### 6. Profile & Activity

The application includes a local student profile section.

Users can edit information such as:

- Name
- Department / year
- GDG chapter
- GitHub username
- Short bio

The profile also shows projects associated with the current profile and
activity derived from the user's interactions with projects.

The profile is stored locally in the browser.

This is a local profile feature for the project demonstration and is not
intended to represent secure authentication.

---

### 7. Activities

An activities section provides a place for students to view project-related
campus activities and learning opportunities included in the application.

Activities can contain information such as:

- Activity name
- Date
- Venue
- Status
- Event information
- RSVP option

Activity content used in the demo is clearly treated as sample content where
it has not been verified as an official GDG on Campus AITR event.

---

### 8. Help & Support

A Help & Support section provides:

- Frequently asked questions
- Basic guidance for using the project board
- Issue reporting

Users can submit an issue through the report form, and the report is stored
locally for the demonstration.

No unofficial GDG contact information or external communication channels are
presented as official information.

---

## How It Works

The application follows a simple client-side flow.

### Project Feed

The application loads project data and displays it on the home page.

Users can search, filter and sort the projects.
Project Submission

A user can open Add Project, enter the project information and submit the
form.

Add Project
   ↓
Form Validation
   ↓
Create Project
   ↓
Save Project
   ↓
Project Appears in Feed
Feedback

A user can open a project and leave feedback.

Project Details
   ↓
Feedback Form
   ↓
Suggestion / Bug / General
   ↓
Comment Saved
   ↓
Comment Appears on Project
Upvotes

Upvotes are handled on the client side and stored in local storage.

Click Upvote
   ↓
Check Existing Vote
   ↓
Add / Remove Vote
   ↓
Update Project
   ↓
Save Voting State
Technology Stack
Frontend
React
JavaScript
HTML
CSS
Build Tool
Vite
Data Storage
Browser LocalStorage
Deployment
Vercel

The project intentionally uses a lightweight frontend architecture instead of
adding a backend or database because the recruitment task focuses on the
Project Showcase & Feedback Board and the goal was to keep the implementation
simple and understandable.

Why LocalStorage?

LocalStorage was used to keep the application simple while still making the
main features functional.

The application stores information such as:

Projects
User profile
User votes
Reported issues

This allows actions such as adding a project, voting and editing a profile to
persist after refreshing the browser.

A backend database and authentication system were not added because they were
not necessary for the recruitment task and would add additional complexity to
the project.

Project Structure
GDG-Web-dev-Task/
│
├── src/
│   ├── components/
│   │   ├── Activities.jsx
│   │   ├── AddProject.jsx
│   │   ├── Footer.jsx
│   │   ├── HelpSupport.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── ProjectDetails.jsx
│   │   ├── ProjectFeed.jsx
│   │   └── UserProfile.jsx
│   │
│   ├── data/
│   │   ├── gdgActivities.js
│   │   └── seedProjects.js
│   │
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
Design & UI

The interface uses a clean campus-oriented design with a focus on
readability and project discovery.

The design includes:

Responsive navigation
Project cards
Clear category and status badges
Search and filtering controls
Responsive layouts
Consistent spacing
Simple interactive buttons
Hover and focus states
Mobile-friendly layouts

The styling is written using regular CSS and CSS variables rather than a
large UI framework.

The goal was to keep the interface visually polished while keeping the code
easy to understand and maintain.

Responsive Design

The website was designed to work across desktop and mobile screen sizes.

The layout adapts for smaller screens so that:

Navigation remains usable
Project cards fit the available width
Search and filters remain accessible
Project details remain readable
Forms adapt to smaller screens
Buttons and controls remain usable
Testing

The application was tested during development for the main user flows.

The following areas were checked:

Project feed loading
Search
Category filtering
Feedback filtering
Sorting
Project details navigation
Add Project form
Form validation
Project creation
Project display after submission
Upvote functionality
Removing an upvote
LocalStorage persistence
Comments and feedback
Profile editing
My Projects filtering
Activity display
Help and issue reporting
Desktop layout
Mobile layout
Production build

The production build completed successfully using Vite.

Setup & Installation

The project uses Node.js and Vite.

To run the project locally:

1. Clone the repository.

2. Open the project folder.

3. Install the project dependencies.

4. Start the development server.

5. Open the local URL shown by Vite in the browser.

The project does not require a backend server or database to run the current
version.

Deployment

The project is deployed using Vercel.

Deployed Website

https://gdg-on-campus-project-showcase.vercel.app/

Source Code

https://github.com/Aastha-jain1/GDG-Web-dev-Task

Limitations

The current version is intentionally frontend-focused.

Because the application uses LocalStorage:

Data is stored only in the current browser.
Projects are not shared between different users or devices.
The profile is not secure authentication.
Upvotes are local to the browser.
Comments are local to the browser.
There is no centralized database.

These limitations were kept intentionally to maintain a simple and
interview-friendly implementation for the recruitment task.

A future production version could introduce a backend, database and proper
authentication if the project were expanded beyond the recruitment task.

Future Improvements

If this project were developed further, possible improvements could include:

Secure user authentication
A shared backend database
Real-time project updates
User-specific project ownership
Persistent comments across users
Better moderation tools
Project reporting and moderation
Notifications for project feedback
GitHub API integration
More advanced project discovery
Real GDG campus event integration

These features were kept outside the current implementation to avoid
unnecessary complexity for the recruitment task.
Peer feedback
Responsive UI development
LocalStorage usage
Vite-based development

Conclusion

The Project Showcase & Feedback Board was built to provide a simple way for
students to share projects, discover other student work and receive useful
feedback.

The implementation focuses on the core recruitment task while keeping the
codebase lightweight and understandable.

The final application demonstrates:

React component-based development
JavaScript state management
Form handling and validation
Search and filtering
Client-side data persistence
Interactive project voting
Deployment using Vercel

The project was developed with the goal of creating a practical student
project showcase rather than a purely static interface.
