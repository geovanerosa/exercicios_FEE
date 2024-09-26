function hasJavascriptSkill(habilidades) {
    return habilidades.includes("Javascript");
}


const skills = ["HTML", "CSS", "Javascript", "React"];
console.log(hasJavascriptSkill(skills));

const otherSkills = ["Python", "C++", "Ruby"];
console.log(hasJavascriptSkill(otherSkills));
