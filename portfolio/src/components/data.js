export const projectData = [
  {
    id: 4,
    title: "Space Vampire",
    description: {
      context: "Captain Count Orlock is an undead cosmic voyager set adrift amongst the stars. In the year 2897, the thousand-year-old villain is outed as a vampire and exiled from planet Earth aboard the Starship Demeter. With only the ships onboard AI for company, he travels to the Bat Nebula to recover the lost relics of Cosmo-Baron Ko-Ehn. When he\’s collected them all, he shall be powerful enough to return home and conquer the Earth! \n\n Will the Space Vampire have his revenge? Or could he rediscover his long-lost humanity on a far-out celestial odyssey?",
      contribution: "", //"As Creative Director, I originated the concept and characters. I generated concept art and constructed 3D models with Blender3D. \n\nAs Project Manager, I established our goals and organized our schedule to complete the project on time within budget and within scope. I programmed user input and character animations with Unity/C#.",
      more: "", //"This project was a fantastic experience! When I shared the concept with my teammates, they lit up and ran with it. It was very rewarding realizing one of my ideas from sketch to product with the help of my team."
    },
    category: "Video Game",
    gitHubLink:
      "https://youtube.com/playlist?list=PLAHaOiMUCZRZ5IENSC4CZq7RQ3OEoxvvN",
    img: "/images/projects/sketches/Spaceman7.png",
    img_classes: "",
    slides: [
      {
        src: "/images/projects/spacevampire.png",
        caption: "spacevampire",
        index: 4,
      },
    ],
    skills: [
      "Game Development",
      "Animation",
      "3D Modeling",
      "3D Character Rigging",
      "Video Editing",
    ],
    tech: ["Unity", "C#", "Blender3D", "Photoshop", "Premiere"],
  },
  {
    id: 5,
    title: "Healthify",
    description: {
      context:
        "Healthify is the front-end of an Android health and fitness app built in Android Studio for a human-computer interaction course at UMD. The course focused on the principles of UI/UX design; The goal of the project was to generate a prototype prepared for user testing, then to apply the data from testing toward improving the design.",
      contribution:
        "I worked as both a developer and designer. I programmed pages for the Nutrition section of the app where a user could log calorie consumption and research nutrition facts about food items. \n\nThe professor was unimpressed with our original prototype, citing poor accessibility and an unattractive interface. I completely redesigned the app to address his feedback. I generated high-fidelity mockups in PowerPoint which we used as templates for the final version. My final design received praise from the professor for creatively integrating icons and brand colors while maintaining a consistent UI.",
      more:
        "This project was my first experience with UI design, and I had a lot of fun with it! I wanted to redesign the app before our next meeting. The two day deadline energized me to work quickly and decisively. I examined interfaces I liked on my phone and tried to dissect why I liked them aesthetically. This project presented me with new opportunities to combine my skills and passion as an artist with computer science.",
    },
    category: "Android App",
    gitHubLink: "https://youtu.be/U42hCzOBTfI",
    img: "/images/projects/sketches/healthify6.png",
    img_classes: "scale-75",
    slides: [
      { src: "/images/projects/HealthifyThumbnail.png", caption: "healthify", index: 5 },
    ],
    skills: [
      "UI/UX Design",
      "App Development",
      "Android",
      "User Testing",
      "Heuristic Evaluation",
    ],
    tech: ["Java", "XML", "Android Studio", "CSS", "PowerPoint"],
  },
  {
    id: 3,
    title: "Genome Assembler",
    category: "Java/Python Program",
    description: {
      context:
        "This toy genome assembler uses bioinformatic algorithms to analyze gene fragments, and reconstruct and index genomes. Parts of the project are programmed in Python or C++, but I primarily used Java.",
      contribution:
        "The project is the culmination of five assignments completed throughout the semester.Project one uses a greedy algorithm to determine the shortest common superstring of a collection of gene fragments to reassemble a genome. Projects two and three index a genome by constructing a suffix array and using the Burrows-Wheeler transform of the genome to generate an FM-index, respectively. Projects four and five use these indexes to align genes on the genome and determine the accuracy of possible alignments.",
      more:
        "Hard work pays off. I sat down for hours with these problems for days, reviewed the course material repeatedly, and found numerous outside resources to help me understand the complicated algorithms I had to implement. I was fueled by a love of biology and a desire to understand the material. I got 100% on all five projects which gave me the confidence I needed to trust myself as a graduating computer scientist. I can accomplishing anything if I put my mind to it.",
    },
    gitHubLink: "https://github.com/smkhalil2/Toy-Genome-Assembler",
    img: "/images/projects/sketches/bioinformatics4.png",
    img_classes: "",
    slides: [
      {
        src: "/images/projects/GenomeAssemblerThumbnail.png",
        caption: "genome assembler",
        index: 3,
      },
    ],
    skills: ["Bioinformatic Algorithms", "Scripting"],
    tech: ["Java", "Python", "C++", "bash"],
  },
  {
    id: 1,
    title: "LilyHoney",
    description: {context: 
"LilyHoney is an eCommerce site UI designed in Figma as part of a Udemy online course. The fictional brand was generated randomly, the name is a combination of my cat\'s name and a random product. The product is a high quality organic honey marketed towards working adults ages 25-40.", 
contribution:"I began by generating a task flow for purchasing an item which I used to generate a low-fidelity wireframe Figma. After constructing a mood board and establishing a color palette, I designed an interactive high-fidelity mockup. I developed the brand and created a logo. I generated product shots using AI image generators.", 
more:"I learned to use Figma tools and techniques inclduing basic Figma structures like frames, shapes, and text components. I also learned how to convert these into reusable assets, create custom icons and logos, define variables, use effects, and implement animations. I applied UI/UX design principles to address accessibility, responsiveness, and branding, applying features like Auto-Layout and Constraints to build a visually appealing and consistent UI."},
    category: "eCommerce Site UI Concept",
    gitHubLink:
      "https://www.figma.com/file/q9tbUjKEpxhwjOu3cShHQu/LilyHoney-eCom-V1?type=design&node-id=314%3A25&mode=design&t=Uxfkwrg3CGxmY4QR-1",
    img: "/images/projects/sketches/bee3.png",
    img_classes: "",
    slides: [
      {
        src: "/images/projects/LilyHoneyThumbnail.png",
        caption: "lilyhoney",
        index: 1,
      },
    ],
    skills: ["UI/UX Design", "Brand Design"],
    tech: ["Figma", "Photoshop", "AI"],
  },
  {
    id: 2,
    title: "Paint Palette",
    description:{context:"Paint Palette is an art tool built with React.js and Material UI. You can explore pre-made color palettes for inspiration, or you can build and save your own. You can also copy color codes to your clipboard as HEX, RGB, or RGBA values.", 
contribution:"I programmed this project using JavaScript, HTML, and CSS. I used Material UI components with custom styles. I utilized built-in React hooks and also defined custom hooks. The UI is responsive; Text color changes to remain readable depending on how light or dark a color is and the palettes change shape to scale with the browser window.", 
more:"This project allowed me to exercise skills learned as part of a Udemy online React bootcamp. Though the course was created for class based React, I redesigned it to use functional React. This allowed me to use hooks to handle state changes. I also personalized the UI design to look more modern and engaging."},
    category: "React App",
    gitHubLink: "https://github.com/smkhalil2/Color-Palette-Project",
    img: "/images/projects/sketches/paintbucket3.png",
    img_classes: "",
    slides: [
      {
        src: "/images/projects/colorpalette.png",
        caption: "color palette maker",
        index: 2,
      },
    ],
    skills: ["UI/UX Design", "App Development", "Input Validation"],
    tech: ["React.js", "JavaScript", "HTML", "CSS"],
  },
  {
    id: 6,
    title: "About this Page",
    description:{
      context:"I designed this site with Figma and built it using React.js with Next.js and TailwindCSS. I chose to use TailwindCSS because it allowed me to construct a prototype quickly and apply changes easily. I was able to construct a first deployment in a week and implemented a total redesign in about two days. I am using Next.js to take advantage of its simplified routing and server-side rendering to decrease load times.", 
      contribution:"I began by designing a wireframe in Figma that was essentially a breakdown of my resume. I converted my wireframe into a low fidelity mockup for a single page site. Using this mockup as a basis, I constructed an initial deployment. I sent this prototype out to friends and family for review. Feedback was positive overall, but personally, I was not yet satisfied with the site. I wanted the site to showcase my creativity and subtly hint at my nerdiness, but I was afraid of going overboard and risking making UI appear amateurish. \n\nMy subsequent redesign of the site embraces my personal creative style and nerdiness. The white 60\'s sci-fi dots are inspired by the interior of the classic TARDIS from BBC\'s \"Doctor Who\". They to create a sense of vast, open space. I sketched the illustrations on these project cards in Autodesk Sketchbook Pro in my personal style.", 
      more:"Building this site has been a valuable experience both practically and creatively. As my first real project outside of academia and online courses, I set out to define my own criteria for success. I was able to apply what I have learned in React.js and Figma, but I also had to teach myself new tools like TailwindCSS. I want this site to reflect what makes me unique as an artist and UI designer. \n\nThank you for exploring my site! I hope we get to work together to create unique digital experiences."},
    category: "React App",
    gitHubLink: "https://github.com/smkhalil2?tab=repositories",
    img: "/images/projects/sketches/bird2.png",
    img_classes: "",
    slides: [
      { src: "/images/projects/portfolio.png", caption: "portfolio", index: 6 },
    ],
    skills: [
      "UI/UX Design",
      "Brand Design",
      "Web Development",
      "Photo Editing",
      "Illustration",
    ],
    tech: [
      "React.js",
      "Next.js",
      "TailwindCSS",
      "HTML",
      "Figma",
      "Sketchbook Pro",
      "Photoshop",
    ],
  },
];

export const skills = [
  {
    name: "React",
    logo: "/images/icons/react.png",
    color: "#1897F4",
  },
  {
    name: "Figma",
    logo: "/images/icons/figma.png",
    color: "#279C6B",
  },
  {
    name: "JavaScript",
    logo: "/images/icons/javascript.png",
    color: "#EFCD74",
  },
  {
    name: "Java",
    logo: "/images/icons/java.png",
    color: "#e84848",
  },
  // {
  //     name: 'Python',
  //     logo: '/images/icons/python.png',
  //     color: '#fff654'
  // },
  {
    name: "HTML",
    logo: "/images/icons/html.png",
    color: "#DF6B17",
    img_classes: "",
  },
  {
    name: "CSS",
    logo: "/images/icons/css.png",
    color: "#485B9F",
    img_classes: "w-[22px] h-[22px]",
  },
  {
    name: "Adobe Creative Suite",
    logo: "/images/icons/adobe2.png",
    color: "#e84848",
    img_classes: "w-[20px] h-[20px]",
  },
];

export const slideImages = [
  {
    src: "/images/slideshow/gradphoto.jpg",
    caption: "With Jim Henson and Kermit statue at UMD, 2022",
    index: 0,
  },
  {
    src: "/images/slideshow/KayakingOnPotomac.jpg",
    caption: "Kayaking in Georgetown, Washington DC, 2023",
    index: 1,
  },
  {
    src: "/images/slideshow/Performing.jpg",
    caption: "Performing live in Washington DC, 2023",
    index: 2,
  },
  {
    src: "/images/slideshow/oregoncoast.jpg",
    caption: "Visting the Oregon Coast, 2022",
    index: 2,
  },
];


