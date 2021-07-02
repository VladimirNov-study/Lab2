const skills = [
    {css_class: "skill-html", name: "HTML", level: 60},
    {css_class: "skill-csharp", name: "C#", level: 65},
    {css_class: "skill-css", name: "CSS", level: 40},
    {css_class: "skill-1c", name: "1C", level: 29},
]


fetch('db/skills.json')
  .then(data => data.json())
  .then(json => { 
    const dl = document.createElement('dl');
    dl.classList.add('skills-list');
    json.forEach(skill => {
        const dt = document.createElement('dt');
        dt.textContent = skill.name;
        dt.classList.add(skill.css_class);

        const dd = document.createElement('dd');
        dd.classList.add('level');

        const div = document.createElement('div');
        div.style.width = skill.level + '%';
        div.textContent = skill.level;
        
        dd.appendChild(div);
        dl.append(dt);  
        dl.append(dd);
    });
    document.querySelector('.skills').append(dl); 
  })
  .catch(() => console.error("упс, что-то пошло не так"));

