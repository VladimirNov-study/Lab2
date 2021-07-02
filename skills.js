function insert_skills(skills) {
    const dl = document.createElement('dl');
    dl.classList.add('skills-list');
    skills.forEach(skill => {
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
}
fetch('db/skills.json')
  .then(data => data.json())
  .then(json => { 
    insert_skills(json); 
  })
  .catch(() => console.error("упс, что-то пошло не так"));