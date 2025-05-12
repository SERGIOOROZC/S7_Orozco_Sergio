// Objeto con el perfil profesional
const iTprofile = {
    name: "Sergio Orozco",
    role: "Full Stack Developer",
    experienceYears: 1,
    skills: ["JavaScript", "CSS", "HTML", "GIT", "Github"],
    certifications: ["Silicon Misiones", "Developer Front-End"],
    education: "Platzy , Codigo Facilito , Alura Latam",
    languages: ["Spanish", "English"],
    location: "Posadas, Argentina"
  };
  
  // Función para generar la presentación en inglés - con desestructuracion-
  function generatePresentation(iTprofile) {
    const { name, role, experienceYears, skills, certifications, education, languages, location } = iTprofile;
  
    return `Hello, my name is ${name}, and I am a ${role} with over ${experienceYears} years of experience in the IT industry. 
  I am based in ${location} and I hold a ${education}. Throughout my career, I have developed strong skills in technologies such as ${skills.join(", ")}.
  Additionally, I have obtained certifications like ${certifications.join(" and ")}. 
  I am fluent in ${languages.join(" and ")}, which allows me to collaborate effectively in multicultural teams. 
  I am passionate about building scalable web applications and continuously learning new technologies to stay updated in the tech field.`;
  }
  
  // Ejemplo de uso
  console.log(generatePresentation(iTprofile));
  