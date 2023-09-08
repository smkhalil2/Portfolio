export const projectData = [
  {
    id: 4,
    title: "Space Vampire",
    description: {
      context:
        "Space Vampire is an action-adventure 3D platformer demo built in Unity/C# for a game development course at UMD. The player takes the role of Captain Count Orlock, a vampire lost in space aboard the ship \"The Demeter\". He is accompanied only by his ship\'s AI computer. The development team consisted of myself and three other students. As we only had a month for development, we embraced a rough animation style inspired by games on the Nintendo 64, specifically \"Super Mario 64\" and \"Banjo & Kazooie\".",
      contribution:
        "I served as the creative director for the game. I generated character art and gameplay concepts as sketches in my notebook. I was inspired by the finale of the Nickelodeon animated series \"Danny Phantom\". In the episode, antagonist Vlad Plasmius, a half-human, half-ghost millionare, stages a catastrophe by luring a haunted asteroid to Earth in an attempt to falsely establish himself as a hero. When he fails to divert the asteroid, he realizes he cannot return to Earth, having publically revealed his identity as a half-ghost. He flees the planet in shame, exiling himself to the cosmos for eternity. I was fascinated by the concept of an undead being lost in space and decided to adapt the idea for the game. \n\nI built character models and sets in Blender3D, voiced and animated the character in cutscenes, and implemented character animations in-game with C#. I also designed elements of the UI in Photoshop.",
      lesson:
        "This project was an excellent experience. When I shared concept art with my team, they immediatly lit up and ran with it. They brainstormed some of his abilities, cool gameplay elements that capitalized on the outerspace setting, and determined that the first level should be filled with garlic themed aliens. It was a really great experience having people connect with my art and help me adapt it into a fully realized product.",
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
        "Healthify is the front-end of an Android health and fitness app built in Android Studio for a human-computer interaction course at UMD. The course focused on learning the principles of UI/UX design; The goal of the project was to generate a prototype prepared for user testing, then to apply the data from testing toward improving the design. The app was programmed in Java with XML and CSS. The app enables a user to log calorie consumption, research nutrition facts, record workouts, and track goals. Production took place during the first semester affected by COVID-19 and was fraught with difficulty, but ultimately proved to be a valuable learning experience.",
      contribution:
        "I was responsible for programming the Nutrition section of the app. I implemented functions that allow a user to log what foods they consumed, keeping track of calorie intake and meal times. They are able to add and remove items from their log and can research nutrition facts by searching for food items against a database. \n\nThe professor criticized our initial prototype as too simple. He pointed out that we used too much text and that our brand color made for a poor background color which would impact accessibility. He said this early version seemed focused on the task flow, but not on the interface design. \n\nTo address these issues, I redesigned the app from scratch myself. I generated a high fidelity mockup using PowerPoint. I took inspiration from popular apps with similar brand colors like Spotify and Hulu, as well as other fitness apps like Apple Fitness and Fitbit to generate a sleeker UI. I designed our logo, a letter H that when turned on its side resembles a man doing jumping jacks, and introduced representative icons to the interface to replace unneccessary blocks of text. I generated templates that could be applied across the Nutrition, Fitness, and Goals sections of the app to make sure our UI was consistent throughout and to reduce our workload. The final design is high-tech, energetic, and engaging.",
      lesson:
        "As a result of COVID-19, team meetings were done remotely over Zoom. Early in the semester, we had difficulty finding time to meet as one member was out of the country. The de facto leader of the group was difficult to communicate with, he would often veto creative ideas and attempt to do large chunks of the project alone. I have to commend my teammate Josh for working with me to bridge this communication gap. \n\nJosh and I worked on negotiating compromises and establishing goals for the team. When I presented my redesign, I received some pushback from the team lead that it may take too long to implement, but Josh supported my contributions as necessary to address the professor\'s critiques. Ultimately, my redesign helped us immensely. My templates focused our process and helped us to distribute work evenly.\n\nI learned two very valuable lessons from this experience; Firstly, while you may not always get to choose your group and you may not like all of your teammates, you can still be very successful if you are able to set aside egos, define mutually beneficial goals, and capitalize on each other\'s different skills. Secondly, I really like designing mockups!",
    },
    category: "Android App",
    gitHubLink: "https://youtu.be/U42hCzOBTfI",
    img: "/images/projects/sketches/healthify6.png",
    img_classes: "scale-75",
    slides: [
      { src: "/images/projects/healthify.png", caption: "healthify", index: 5 },
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
        "This is a toy genome assembler using bioinformatic algorithms for a course on the topic at UMD. Parts of the project are programmed in Python or C++, but it was primarily programmed with Java. The project is the culmination of five assignments completed throughout the semester. Project one uses a greedy algorithm to determine the shortest common superstring of a collection of gene fragments to reassemble a genome. Projects two and three index a genome by constructing a suffix array and using the Burrows-Wheeler transform of the genome to generate an FM-index, respectively. Projects four and five use the indexes generated in the previous projects to align genes on the genome and determine the accuracy of possible alignments.",
      contribution:
        "I programmed these projects myself. Notably, I received 100% on each assignment.",
      lesson:
        "This project was an excellent reminder of how hard work can pay off. I sat down for hours with these problems, reviewed the course material repeatedly, and found numerous outside resources to help me understand the complicated algorithms I had to implement. I was fueled by a love of biology and a desire to understand the material. Getting 100% on five difficult projects right at the end of my senior year gave me the confidence I needed to trust myself as a computer scientist. It reminded me that I am capable of accomplishing anything if I put my mind to it.",
    },
    gitHubLink: "https://github.com/smkhalil2/Toy-Genome-Assembler",
    img: "/images/projects/sketches/bioinformatics4.png",
    img_classes: "",
    slides: [
      {
        src: "/images/projects/genomeAssembler2.png",
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
    description: {context: 'LilyHoney is an eCommerce site UI designed in Figma as part of a Udemy online course. The fictional brand was generated randomly, the name is a combination of my cat\'s name and a random product. The product is a high quality organic honey marketed towards working adults ages 25-40.', contribution:'I began the design process by randomly generating a user persona for my target demographic and establishing a task flow. Using the task flow, I generated an interactive wireframe outlining the process for purchasing products from the app. Then I constructed a moodboard and color palette to help define a tone for the brand. Using the wireframe as a basis, I designed a high fidelity mobile mockup using AI generated images to simulate product shots. I am currently designing desktop and tablet versions of the interface. I also designed a logo for the product that expresses a rustic, homemade quality and evokes the use of natural ingredients.', lesson:'The project allowed me to learn and use Figma tools and techniques. I learned how to use basic Figma structures like frames, shapes, and text components. I also learned how to convert these into reusable assets, define variables, use effects, and implement animations. I practiced making the mockup into an interactive prototype. I learned to apply UI/UX design principles to address accessibility, responsiveness, and branding, applying features like Auto-Layout and Constraints to build a visually appealing and consistent UI.'},
    category: "eCommerce Site UI Concept",
    gitHubLink:
      "https://www.figma.com/file/q9tbUjKEpxhwjOu3cShHQu/LilyHoney-eCom-V1?type=design&node-id=314%3A25&mode=design&t=Uxfkwrg3CGxmY4QR-1",
    img: "/images/projects/sketches/bee3.png",
    img_classes: "",
    slides: [
      {
        src: "/images/projects/lilyhoney4.png",
        caption: "lilyhoney",
        index: 1,
      },
    ],
    skills: ["UI/UX Design", "Brand Design"],
    tech: ["Figma", "Photoshop", "AI"],
  },
  {
    id: 2,
    title: "Color Palette Maker",
    description:{context:'Color Palette Maker is an art tool built with React.js and Material UI. You can explore pre-made color palettes for inspiration, or you can build and save your own. Clicking on a color copies it to your clipboard. You can choose to copy it as an hex, rgb, or rgba value. Using a slider, you can increase or decrease the saturation of colors in a palette. Selecting \'More\' on a color display different shades of that color.', contribution:'I programmed this project using JavaScript, HTML, and CSS. I used Material UI components with custom styles. I utilized built-in React hooks and also defined custom hooks. I defined reusable components that are configured differently to perform multiple functions across the app. The UI is responsive; Text color changes to remain readable depending on how light or dark a color is and the palettes change shape to scale with the browser window.', lesson:'This project allowed me to exercise skills learned as part of a Udemy online React bootcamp. As the course was created for class based React, I made an effort to redesign it to use functional React. This allowed me to use hooks to handle state changes. I also personalized the UI design to look more modern and engaging.'},
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
    title: "This Website!",
    description:{
      context:'I designed this site with Figma and built it using React.js with Next.js and TailwindCSS. I chose to use TailwindCSS because it allowed me to construct a prototype quickly and apply changes easily. I was able to construct a first deployment in a week and implemented a total redesign in about two days. I am using Next.js to take advantage of server-side rendering to decrease load times, and because Next.js makes it easier to implement page routing.', 
      contribution:'I began by designing a wireframe in Figma that was essentially a breakdown of my resume. Originally, I was inspired by the color palette of \"Spider-Man: Across the Spider-Verse\" and incorporated the purple and green associated with Spider-Woman\'s (Gwen Stacy) universe into the design. I converted my wireframe into a low fidelity mockup for a single page site. Using this mockup as a basis, I constructed an initial deployment. I sent this prototype out to friends and family for review. Feedback was positive overall, with some complaints that animated skill badges were misleading as they were not clickable and that some of the text was hard to read over the hero section\'s background colors.\n\nPersonally, I was not yet satisfied with the site. I felt the initial design felt cramped, dated, and lacked my personal style. I wanted the site to showcase my creativity and subtly hint at my nerdiness, but I was afraid of going overboard and risking making UI appear amateurish. While researching UI inspiration, I discovered candycode.com. Please excuse this shameless plug, but their sites unique UI blew me away. Their use of color with pop and counter culture imagery imbued their site with a sense of magic and rebellious creativity that encouraged me to think outside the box. \n\nMy subsequent redesign of the site embraces my personal creative style and nerdiness. The white 60\'s sci-fi dots are inspired by the interior of the classic TARDIS from BBC\'s \"Doctor Who\." They to create a sense of vast, open space. I sketched the illustrations on these project cards in Autodesk Sketchbook Pro in my personal style to showcase my creativity, imagination, and attention to detail.', 
      lesson:'Building this site has been a valuable experience both practically and creatively. As my first real project outside of academia and online courses, I set out to define my own criteria for success. I was able to apply what I have learned in React.js and Figma, but I also had to teach myself new tools like TailwindCSS. I took inspiration from candycode.com to think about what makes me unique as an artist and use my skills to express my personality with UI design. \n\nThank you for exploring my site! I hope we get to work together to create unique digital experiences.'},
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
