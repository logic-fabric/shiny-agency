const JOBS = [
  {
    abridged: "full",
    male: "Développeur fullstack",
    female: "Développeuse fullstack",
  },
  {
    abridged: "front",
    male: "Développeur front-end",
    female: "Développeuse front-end",
  },
  {
    abridged: "back",
    male: "Développeur back-end",
    female: "Développeuse back-end",
  },
  {
    abridged: "devops",
    male: "DevOps",
    female: "DevOps",
  },
  {
    abridged: "mobile",
    male: "Développeur mobile",
    female: "Développeuse mobile",
  },
  {
    abridged: "chief",
    male: "Chef de projet",
    female: "Cheffe de projet",
  },
  {
    abridged: "ui",
    male: "Designer UI",
    female: "Designeuse UI",
  },
  {
    abridged: "ux",
    male: "Designer UX",
    female: "Designeuse UX",
  },
  {
    abridged: "scrum",
    male: "Scrum Master",
    female: "Scrum Master",
  },
];

const TECHNOS = {
  full: ["Django/Vue.js", "NodeJS/React.js", "Symphony/Angular"],
  front: ["React.js/Tailwind", "Vue.js/Material", "Angular/Bootstrap"],
  back: ["NodeJS/Express", "Python/Django"],
  mobile: ["iOS/Swift", "Android/Kotlin"],
  chief: [""],
  ui: [""],
  ux: [""],
  scrum: [""],
};

async function getRandomFreelance() {
  fetch("https://randomuser.me/api/?nat=fr")
    .then((response) => response.json())
    .then((data) => {
      const user = data.results[0];

      user.job = JOBS[Math.floor(Math.random() * JOBS.length)];
      user.technos =
        TECHNOS[user.job.abridged][
          Math.floor(Math.random() * TECHNOS[user.job.abridged].length)
        ];

      const freelanceProfile = {
        name: `${user.name.first} ${user.name.last}`,
        jobTitle: `${user.job[user.gender]} ${user.technos}`.trim(),
        picture: user.picture.large,
      };

      console.log(freelanceProfile);

      return freelanceProfile;
    });
}

export default getRandomFreelance;
