
// scripts/generate-readme.js
const fs = require('fs');
const path = require('path');


// The Ultimate README content as a template string
const readmeContent = `# 🚀 Ultimate GitHub Profile README — All-In-One (Everything Combined)


# <img src="https://emoji.gg/assets/emoji/9314-wavegif.gif" width="28"/> Hi, I'm **Isahaq** — Full-Stack Developer


🔥 I build enterprise-grade ERP modules, automations, HRM/Payroll engines, finance systems, and full-stack apps.
💻 Laravel · Vue · React · MySQL · Node · REST APIs · Queues · DevOps basics


<p align="center">
<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=230&section=header&text=Hm%20Isahaq&fontSize=70&fontAlignY=35&animation=fadeIn"/>
</p>


---


## ⚡ About Me


- 🔧 Full-stack developer specializing in **ERP systems** & **enterprise automation**
- 🧮 Expert in **Leave, Attendance, Payroll, COA, Subledger, Finance Modules**
- 🧠 Clean architecture, modular design, scalable backend systems
- 📨 Open for freelance/remote projects


---


## 🛠️ Tech Stack (Badges)
... (include all badges from Ultimate README)


---


## 📌 Featured Projects (Cards)
... (include all projects from Ultimate README)


---


## 📊 GitHub Insights (Dynamic)
... (include GitHub stats from Ultimate README)


---


## 🤖 Auto-Update GitHub Action
... (include workflow YAML snippet)


---


## 📫 Contact Me
📧 **Email:** hm.isahaq@gmail.com


---


## 👀 Visitor Counter
<img src="https://komarev.com/ghpvc/?username=Hm-Isahaq&color=blueviolet" />


---


# 🎉 Done!
`;


// Output README.md
fs.writeFileSync(path.join(__dirname, '..', 'README.md'), readmeContent);
console.log('README.md generated successfully!');
