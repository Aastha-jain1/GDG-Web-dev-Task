# GDG on Campus AITR – Web Development Recruitment Task

## Live Demo

https://gdg-on-campus-project-showcase.vercel.app/

## GitHub Repository

https://github.com/Aastha-jain1/GDG-Web-dev-Task

---

# Section A: GDG Portal Review & Suggestions<img width="1920" height="1080" alt="Screenshot (23)" src="https://github.com/user-attachments/assets/f2b8af96-6188-4564-ac53-5c4f0b80682b" /><img width="1920" height="1080" alt="Screenshot (15)" src="https://github.com/user-attachments/assets/add68088-73d1-42dc-9dda-8bcd73af0320" />
<img width="1920" height="1080" alt="Screenshot (16)" src="https://github.com/user-attachments/assets/19aaf4c7-b4ea-48b8-a88c-0d16d230d56d" />
<img width="1920" height="1080" alt="Screenshot (17)" src="https://github.com/user-attachments/assets/79cee84f-48e0-45f0-9778-5a4692ca060b" />
<img width="1920" height="1080" alt="Screenshot (18)" src="https://github.com/user-attachments/assets/f4f13b42-5dc1-4a2c-95b3-6e66c574b151" />
<img width="1920" height="1080" alt="Screenshot (19)" src="https://github.com/user-attachments/assets/172958a9-c179-4fd8-977f-411a094d6b84" />
<img width="1920" height="1080" alt="Screenshot (20)" src="https://github.com/user-attachments/assets/82081412-f9b3-406e-b829-d5be200670b1" />
<img width="1920" height="1080" alt="Screenshot (21)" src="https://github.com/user-attachments/assets/eaafcef4-1068-4ad9-96a9-d6707e635a3b" />
<img width="1920" height="1080" alt="Screenshot (22)" src="https://github.com/user-attachments/assets/6e895407-fedd-4747-9146-e4996d30560d" />

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

Conclusion

The Project Showcase & Feedback Board was built to provide a simple way for
students to share projects, discover other student work and receive useful
feedback.

The implementation focuses on the core recruitment task while keeping the
codebase lightweight and understandable.

The final application demonstrates:

React component-based development
JavaScript state management
Form handling and validation<img width="1920" height="1080" alt="Screen23)" src="https://github.com/user-attachments/assets/b81acee6-9448-4500-8139-3d35a17bc556" /><img width="shot (1920" height="1080" alt="Screenshot (15)" src="https://github.com/user-attachments/assets/bc35a5a8-6087-4b93-a750-754d88d0f0ec" />
<img width="1920" height="1080" alt="Screenshot (16)" src="https://github.com/user-attachments/assets/75d4e8d7-254d-456c-8313-3dd7b028b5bf" />
<img width="1920" height="1080" alt="Screenshot (17)" src="https://github.com/user-attachments/assets/4a7586a2-7201-4498-a058-24262c5d2dc1" />
<img width="1920" height="1080" alt="Screenshot (18)" src="https://github.com/user-attachments/assets/7ba51e29-7b9f-4f1e-a015-ff9df7ddcc56" />
<img width="1920" height="1080" alt="Screenshot (19)" src="https://github.com/user-attachments/assets/8f463ada-5816-46d8-86df-c8ae27258bf6" />
<img width="1920" height="1080" alt="Screenshot (20)" src="https://github.com/user-attachments/assets/236d220c-8092-49c2-aaf8-0d969b943391" />
<img width="1920" height="1080" alt="Screenshot (21)" src="https://github.com/user-attachments/assets/94b6cc0d-6fce-4cd5-8060-4c05b141d742" />
<img width="1920" height="1080" alt="Screenshot (22)" src="https://github.com/user-attachments/assets/cef6d9cc-4fe0-4566-bb07-1cc365f7869f" />
