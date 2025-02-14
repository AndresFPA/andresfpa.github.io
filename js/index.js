import {
  bio,
  skills,
  education,
  experience,
  footer,
} from "../user-data/data.js";

import { URLs } from "../user-data/urls.js";

function populateSection(items, id) {
  const sectionTag = document.getElementById(id);
  items.forEach((item) => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${item.title}</h3><p>${item.duration}</p><p>${item.subtitle}</p>`;
    item.details.forEach((detail) => {
      const p = document.createElement("p");
      p.innerHTML = `&bullet; ${detail}`;
      div.append(p);
    });
    sectionTag.append(div);
  });
}

populateSection(bio, "bio");
populateSection(skills, "skills");
populateSection(experience, "experience");
populateSection(education, "education");
populateSection(footer, "footer");
