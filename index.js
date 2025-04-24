let inEnglish = false;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function toggleLanguage() {
  inEnglish = !inEnglish;

  let img = document.getElementById("flagIcon");
  let txt = document.getElementById("toggleText");
  if (inEnglish) {
    img.src = "engflag.png";
    img.alt = "UK flag";
    txt.textContent = "Switch to English";
  } else {
    img.src = "svflag.png";
    img.alt = "Swedish flag";
    txt.textContent = "Ändra till svenska";
  }

  document.getElementById("skills-h3").textContent = inEnglish
    ? "Färdigheter"
    : "Skills";
  document.getElementById("agile").textContent = inEnglish
    ? "Agila metoder"
    : "Agile methods";
  document.getElementById("basics-skills").textContent = inEnglish
    ? "grunder i C#, Java och OOP"
    : "basics in C#, Java and OOP";

  document.getElementById("presentation-h2").textContent = inEnglish
    ? "Profil"
    : "Profile";
  document.getElementById("presentation").textContent = inEnglish
    ? `Jag är en nyfiken, prestigelös och kreativ fullstack-utvecklare med tonvikt på frontend. Jag älskar problemlösning, att lära mig mer och att skapa rena, intuitiva, effektiva och skalbara lösningar av hög kvalitet. 
    
    Jag har professionell erfarenhet främst inom TypeScript och React, som jag har fått genom att arbeta med storskaliga tekniska projekt på globalt och big data- företag. Jag har även erfarenhet av utveckling i Python, FastAPI och PostgreSQL. Jag har varit involverad i och fått insikter i processerna kring nyutveckling under min karriär som utvecklare. Jag har erfarenhet av att arbeta på engelska och kan det flytande.
    
    Personligen trivs jag med att arbeta i en miljö som är inkluderande, omtänksam och blomstrande. Där vi kan skapa värde för användarna och kunderna, och samtidigt ha roligt, växa och dela kunskap.`
    : `I am a creative and curious fullstack engineer with strong frontend experience. I am passionate about problem solving, learning, and making clean, efficient and high-quality solutions. 
    
    I have professional experience primarily in TypeScript and React, which I have gained as a developer working on large-scale technical projects at global and big data companies. I also have experience in Python, FastAPI, and PostgreSQL. Throughout my career as a developer, I have been involved in and gained insights into the processes of development of new parts of systems. I have experience working in english and can do that fluently. 
    
    I thrive working in an inclusive, caring and supportive environment where we can enjoy and grow.`;

  document.getElementById("projects-h2").textContent = inEnglish
    ? "Några projekt"
    : "Some projects";

  document.getElementById("pun-rhyme-gen-description").textContent = inEnglish
    ? "generera julrim för saker"
    : "generate x-mas rhymes for items";

  document.getElementById("robomechanexus-description").textContent = inEnglish
    ? "register för robot-chip"
    : "robotic chip registry";

  document.getElementById("spacedome-description").textContent = inEnglish
    ? "sida för en fiktionell konsertlokal"
    : "website for a fictional concert hall";

  document.getElementById("projects-farstun").textContent = inEnglish
    ? "tablet/display-app för farstun"
    : "tablet/display app for the vestibule";

  document.getElementById("projects-pastime").textContent = inEnglish
    ? "minimalistisk underhållningssida"
    : "minimalistic entertainment site";

  document.getElementById("projects-blomgott").textContent = inEnglish
    ? "Ätbara blommor + recept"
    : "Eatable flowers + recipes";
}
