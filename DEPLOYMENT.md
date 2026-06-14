# VastoWorm.sys - Infiltration & Setup Guide

We have successfully coded the entire VastoWorm engine, the dynamic SVG generator, and the automated GitHub Workflows. Follow these instructions to activate the cyber-virus on your live GitHub profile.

---

## 🛰️ Step 1: Create or Locate Your Profile Repository

The repository name must exactly match your GitHub username (e.g. if your username is `richard`, the repo name must be `richard`). This repository contains your special profile README.md which is shown on your public page.

If you already have a profile README repository:
1. Clone it locally or prepare to add these files to it.
2. In the README.md, insert the following placeholder tags where you want the terminal dashboard to render:
   ```markdown
   <!-- VASTOWORM:START -->
   <!-- VASTOWORM:END -->
   ```
   *Note: If you do not have these tags, the script will automatically create a fresh, full-page hacker-themed README.md on its first run.*

---

## 🔑 Step 2: Configure Workflow Permissions

For the automated bot to update your README.md and SVG, it needs permissions to commit changes back to the repository.

1. On GitHub, navigate to your profile repository.
2. Go to **Settings** → **Actions** → **General**.
3. Scroll down to the **Workflow permissions** section.
4. Select **Read and write permissions**.
5. Check the box **Allow GitHub Actions to create and approve pull requests** (optional but recommended).
6. Click **Save**.

---

## 📂 Step 3: Push the Project Files

Copy all the created files from the workspace into your repository. The final structure of your repository should look like this:

```text
├── .github/
│   └── workflows/
│       ├── cycle.yml               # Runs the hourly cron job updates
│       └── payload_receiver.yml    # Runs when visitors open issue dispatches
├── assets/
│   └── virus.svg                   # Dynamic virus dashboard image (auto-generated)
├── data/
│   └── state.json                  # Persistent virus database (auto-updated)
├── src/
│   ├── github.js                   # Telemetry interface for GitHub REST API
│   ├── index.js                    # Orchestrator core
│   ├── readme.js                   # Markdown README parser and injector
│   ├── state.js                    # State mutations and decay engine
│   └── svg.js                      # Cyberpunk SVG styling and layout renderer
├── .gitignore                      # Ignore local logs and node_modules
├── package.json                    # Package metadata
└── README.md                       # Public profile display
```

Once pushed, GitHub Actions will immediately take over the orchestration.

---

## 🎮 Step 4: The Infiltration Cycle & Gameplay Mechanics

Here is how the game behaves autonomously once active on your profile:

1. **Hourly Vitals Update (`cycle.yml`):**
   * Every hour, a cron job executes `node src/index.js`.
   * It scans your repository for recent activity.
   * If you made commits in the past hour, the virus gains **Data Integrity** and replicates, increasing **Global Infection**.
   * If no commits are made, the virus's **Data Integrity** decays by 1.5% per hour.
   * It syncs **Firewall Resistance** (based on repository stars) and **CPU Load** (based on open issues/PR count).
   * It regenerates `virus.svg` and commits the changes back to your branch.

2. **Interactive Dispatch (`payload_receiver.yml`):**
   * Visitors viewing your profile can click the dynamic badges at the bottom of the README.
   * When they click **Inject Payload**, **Deploy Antivirus**, or **Trigger Mutation**, they are redirected to a pre-filled issue creation page.
   * When they click "Submit new issue", the `payload_receiver.yml` workflow fires instantly.
   * It extracts the action (e.g. `INJECT_PAYLOAD`), computes the state change, commits the updated README and SVG, posts a terminal logging report as an issue comment, and closes the issue.
   * The issue history serves as a public ledger of who attempted to quarantine or spread the virus!
