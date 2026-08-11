Markdown

# 🏎️ RACE Club Official Website

The official web platform for the **Robotics, Automation, Coding, Engineers (RACE) Club**. Designed for managing workshop registrations, publishing past workshop reports, and securely hosting project documentations.

🌐 **Live Demo:** [https://sprc9034.github.io/Race-website/](https://sprc9034.github.io/Race-website/)

---

## ✨ Features

* **⚡ Workshop Registrations:** Reusable modal integration for Google Form workshop signups.
* **📄 Past Workshops Showcase:** Automatically fetches and previews official PDF workshop reports from Google Drive via Google Apps Script.
* **🔒 Passcode-Protected Projects Archive:** Secure access gate matching user input against an admin-managed `passcode.txt` hosted in Google Drive.
* **📱 Responsive Design:** Fully styled using Tailwind CSS with dark/light mode toggles and a mobile side drawer.

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Routing:** React Router (`HashRouter` for GitHub Pages compatibility)
* **Styling:** Tailwind CSS
* **Backend Integration:** Google Apps Script (REST API endpoints connecting to Google Drive)
* **Hosting:** GitHub Pages (`gh-pages`)

---

## 🚀 Getting Started Locally

### Prerequisites

* [Node.js](https://nodejs.org/) (v18 or higher)
* [npm](https://www.npmjs.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/sprc9034/Race-website.git](https://github.com/sprc9034/Race-website.git)
   cd Race-website

    Install dependencies:
    Bash

    npm install

    Start the local development server:
    Bash

    npm run dev

    Open http://localhost:5173/ in your browser.

☁️ Google Apps Script Integration

This project uses two Google Apps Script Web Apps to bridge Google Drive with the frontend:

    Workshops Reports Endpoint: Fetches .pdf event reports from the designated Google Drive folder and generates preview links.

    Projects Endpoint:

        Reads passcode.txt stored in the Google Drive folder.

        Compares the submitted code against passcode.txt.

        Returns project PDF metadata upon successful verification.

📦 Deployment

To deploy updates to GitHub Pages, run:
Bash

npm run deploy

This command automatically builds the Vite app into the dist/ directory and publishes it to the gh-pages branch.
📬 Contact & Info

    Location: EL7 Lab, First Floor, Main Campus

    Email: raceclub.edu@gmail.com