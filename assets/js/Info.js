//Capturar o parametro da Url
const params = new URLSearchParams(window.location.search);
const projectId = params.get("project");

//Base de dados dos Projetos
const projects = {
  refazendo_youtube: {
    title: "Refazendo a Tela do Youtube",
    description:
      "Projeto desenvolvido durante estudos de desenvolvimento web, com foco em CSS e responsividade.",
    image: "./assets/Images/Projetos/Replica Youtube/youtube.png",
    github: "https://github.com/GutsCarioka/Refazendo_Tela_Youtube",
  },
  diabetes: {
    title: "DeepLearning Project",
    description:
      "Projeto de Deep Learning em Python desenvolvido como trabalho final da disciplina de IA.",
    image: "./assets/Images/Projetos/Diabetes.png",
    github: "https://github.com/GutsCarioka/DeepLearning_Project",
  },

  "yu-gi-oh": {
    title: "Yu-Gi-Oh | Jo-ken-po Edition",
    description:
      "Jogo de Jokenpo criado para explicar conceitos de lógica de programação.",
    image: "./assets/Images/Projetos/YU-GI-OH.png",
    github: "https://github.com/GutsCarioka/Criando_Jogo_de_cartas_yu_gi_oh",
  },

  pokedex: {
    title: "PokeDex",
    description: "Pokedex com integração com a PokeAPI.",
    image: "./assets/Images/Projetos/PokeDex.png",
    github: "https://github.com/GutsCarioka/ProjetoPokeDex",
  },
};

//Se o projeto existir na base de dados, preencher as infromaçoes na página
if (projects[projectId]) {
  document.getElementById("project-title").textContent =
    projects[projectId].title;

  document.getElementById("project-github").onclick = () => {
    window.open(projects[projectId].github, "_blank");
  };
  document.getElementById("project-description").textContent =
    projects[projectId].description;

  const img = document.getElementById("project-image");
  img.src = projects[projectId].image;
  img.alt = projects[projectId].title;
} else {
  document.getElementById("project-title").textContent =
    "Projeto não encontrado";
}
