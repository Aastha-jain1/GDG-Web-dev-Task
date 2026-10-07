// Realistic seed projects built by demo students for GDG on Campus
export const SEED_PROJECTS = [
  {
    id: 'proj-1',
    title: 'Campus Lost & Found Bulletin',
    creatorName: 'Demo Student (CSE \'26)',
    category: 'Web Dev',
    status: 'Published',
    shortDescription: 'A campus-wide board to post and reclaim lost items like student IDs, calculators, and keys.',
    problemSolved: 'Campus WhatsApp and Telegram groups get flooded with lost item photos, causing urgent messages to get buried within an hour.',
    description: 'This application provides a structured lost-and-found notice board for university students. Anyone who finds an item can upload a photo, specify the hall/classroom, and set a date. Owners can verify their claim by answering a quick question or matching a unique mark.',
    technologies: ['React', 'Firebase', 'CSS'],
    githubUrl: 'https://github.com/example/campus-lost-found',
    demoUrl: 'https://campus-lostfound-demo.web.app',
    lookingForFeedback: true,
    feedbackNote: 'Seeking suggestions on a simple claim verification workflow without requiring complex university SSO login.',
    upvotes: 42,
    createdAt: '2026-10-01',
    comments: [
      {
        id: 'comm-101',
        author: 'Campus Peer (ECE \'25)',
        type: 'Suggestion',
        text: 'You could ask the owner to enter the last 3 digits of their student ID if it\'s an ID card, or describe a hidden key fob detail.',
        createdAt: '2026-10-02'
      },
      {
        id: 'comm-102',
        author: 'Demo Reviewer (IT \'26)',
        type: 'General',
        text: 'Really clean card layout! The location filtering makes it fast to check specific campus buildings.',
        createdAt: '2026-10-03'
      }
    ]
  },
  {
    id: 'proj-2',
    title: 'Canteen Queue & Meal Pre-Order',
    creatorName: 'Campus Dev (IT \'25)',
    category: 'Web Dev',
    status: 'In Development',
    shortDescription: 'Pre-order daily lunch specials to avoid 25-minute rush hour lines at the main student canteen.',
    problemSolved: 'Between 12:45 PM and 1:30 PM, the student canteen queue spills into the hallway, causing students to be late for 1:30 PM lab sessions.',
    description: 'A responsive web interface that lets students view today\'s available menu, pre-order meals 30 minutes in advance, and receive an estimated pickup slot with a digital token.',
    technologies: ['React', 'Node.js', 'Express', 'CSS'],
    githubUrl: 'https://github.com/example/canteen-order-app',
    demoUrl: 'https://canteen-preorder-demo.vercel.app',
    lookingForFeedback: true,
    feedbackNote: 'How would you handle orders when a canteen item runs out of stock midway through the lunch rush?',
    upvotes: 68,
    createdAt: '2026-10-02',
    comments: [
      {
        id: 'comm-201',
        author: 'Demo Reviewer (CSE \'25)',
        type: 'Bug',
        text: 'If two students tap pre-order at the exact same second for the last plate, does the stock counter decrement properly?',
        createdAt: '2026-10-03'
      }
    ]
  },
  {
    id: 'proj-3',
    title: 'Attendance Bunk & Safe Margin Tracker',
    creatorName: 'Demo Student (SWE \'24)',
    category: 'Mobile',
    status: 'Published',
    shortDescription: 'Mobile companion to calculate safe absences while maintaining the university 75% attendance rule.',
    problemSolved: 'Students constantly do mental math and spreadsheet tracking to know how many classes they can safely skip for hackathons or health reasons.',
    description: 'An offline-friendly mobile app that tracks weekly timetable attendance. Users set their target attendance percentage (e.g. 75% or 80%), and the app highlights how many future lectures can be skipped or how many consecutive classes must be attended to regain eligibility.',
    technologies: ['Flutter', 'Dart', 'SQLite'],
    githubUrl: 'https://github.com/example/attendance-tracker-app',
    demoUrl: '',
    lookingForFeedback: false,
    feedbackNote: '',
    upvotes: 95,
    createdAt: '2026-09-28',
    comments: [
      {
        id: 'comm-301',
        author: 'Campus Peer (IT \'26)',
        type: 'Praise',
        text: 'This is saving my semester already! The color coding for warning zones below 78% is very clear.',
        createdAt: '2026-09-30'
      }
    ]
  },
  {
    id: 'proj-4',
    title: 'GDG Event Certificate Generator & Mailer',
    creatorName: 'Campus Dev (Data Sci \'25)',
    category: 'Dev Tools',
    status: 'In Development',
    shortDescription: 'CLI tool to automate personalized PDF certificates and email dispatch for campus workshops.',
    problemSolved: 'Event organizers spend 3 to 4 hours manually editing Canva templates and emailing 200+ workshop attendees one by one.',
    description: 'A lightweight Python script that reads attendee names and emails from a Google Sheets CSV, draws names onto an official vector certificate template using Pillow, generates crisp PDFs, and queues them through Gmail SMTP with rate limiting.',
    technologies: ['Python', 'Pillow', 'CSV / Sheets'],
    githubUrl: 'https://github.com/example/gdg-certificate-generator',
    demoUrl: '',
    lookingForFeedback: true,
    feedbackNote: 'Looking for advice on handling SMTP rate limits and bounced emails without getting flagged as spam.',
    upvotes: 53,
    createdAt: '2026-10-03',
    comments: [
      {
        id: 'comm-401',
        author: 'Demo Student (CSE \'26)',
        type: 'Suggestion',
        text: 'Adding a 2-second sleep delay between emails and sending in batches of 40 will prevent Gmail SMTP connection timeouts.',
        createdAt: '2026-10-04'
      }
    ]
  },
  {
    id: 'proj-5',
    title: 'Lecture Slide Summarizer & Quiz Bot',
    creatorName: 'Campus Dev (AI \'26)',
    category: 'AI & ML',
    status: 'In Development',
    shortDescription: 'Converts 60-slide professor lecture decks into bullet summaries and 5 practice flashcards.',
    problemSolved: 'Studying long PowerPoint decks before midterm exams is overwhelming when professors include lots of decorative slides with minimal text.',
    description: 'A study utility that extracts text and outlines from uploaded lecture PDFs or PPTX files, generates concise topic summaries, and creates 5 active-recall multiple choice questions to test understanding.',
    technologies: ['Python', 'FastAPI', 'React', 'CSS'],
    githubUrl: 'https://github.com/example/slide-quiz-summarizer',
    demoUrl: 'https://slide-summarizer-demo.vercel.app',
    lookingForFeedback: true,
    feedbackNote: 'Feedback needed on prompt structuring to keep summary bullets factual without inventing concepts.',
    upvotes: 81,
    createdAt: '2026-10-04',
    comments: [
      {
        id: 'comm-501',
        author: 'Campus Peer (CSE \'25)',
        type: 'Suggestion',
        text: 'Try setting temperature to 0.2 and adding a strict instruction: "Only summarize concepts explicitly stated in the slide text".',
        createdAt: '2026-10-05'
      }
    ]
  },
  {
    id: 'proj-6',
    title: 'Semester Solved Question Papers Archive',
    creatorName: 'Demo Student (ECE \'25)',
    category: 'Web Dev',
    status: 'Planning',
    shortDescription: 'Curated repository of past 5 years university end-term papers categorized by subject and year.',
    problemSolved: 'Past exam papers are scattered across fragmented Google Drive links, broken seniors\' links, and photocopier shops.',
    description: 'A searchable catalog where students can filter past exam papers by department, semester, subject code, and academic year. Includes user-contributed handwritten step-by-step solutions verified by senior students.',
    technologies: ['React', 'JavaScript', 'CSS'],
    githubUrl: 'https://github.com/example/past-papers-archive',
    demoUrl: 'https://pastpapers-student-hub.web.app',
    lookingForFeedback: false,
    feedbackNote: '',
    upvotes: 37,
    createdAt: '2026-10-05',
    comments: []
  }
];

export const CATEGORIES = [
  'All',
  'Web Dev',
  'Mobile',
  'AI & ML',
  'Dev Tools'
];

export const PROJECT_STATUSES = [
  'Planning',
  'In Development',
  'Published'
];
