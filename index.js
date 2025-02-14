import {
  bio,
  skills,
  education,
  experience,
  footer,
} from "./data.js";

import { URLs } from "./urls.js";

const { gitConnected, gitRepo } = URLs;

function populateBio(items, id) {
  const bioTag = document.getElementById(id);
  items.forEach((bioItem) => {
    const p = document.createElement("p");
    p.innerHTML = bioItem;
    bioTag.append(p);
  });
}

function populateSkills(items, id) {
  const skillsTag = document.getElementById(id);
  items.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = item;
    skillsTag.append(li);
  });
}

function populateExperience(items, id) {
  const experienceTag = document.getElementById(id);
  items.forEach((exp) => {
    const div = document.createElement("div");
    div.innerHTML = `<h2>${exp.title}</h2><p>${exp.duration}</p><p>${exp.subtitle}</p>`;
    exp.details.forEach((detail) => {
      const p = document.createElement("p");
      p.innerHTML = `&bullet; ${detail}`;
      div.append(p);
    });
    experienceTag.append(div);
  });
}

function populateEducation(items, id) {
  const educationTag = document.getElementById(id);
  items.forEach((edu) => {
    const div = document.createElement("div");
    div.innerHTML = `<h2>${edu.title}</h2><p>${edu.duration}</p><p>${edu.subtitle}</p>`;
    educationTag.append(div);
  });
}

function populateFooter(items, id) {
  const footerTag = document.getElementById(id);
  items.forEach((section) => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${section.label}</h3>`;
    section.data.forEach((link) => {
      const a = document.createElement("a");
      a.href = link.link;
      a.target = "_blank";
      a.innerHTML = link.text;
      div.append(a);
      div.append(document.createElement("br"));
    });
    footerTag.append(div);
  });
}

populateBio(bio, "bio");
populateSkills(skills, "skills");
populateExperience(experience, "experience");
populateEducation(education, "education");
populateFooter(footer, "footer");
