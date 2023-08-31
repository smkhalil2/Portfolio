export const projectData = [
    
   
    {
        id: 4,
        title: "Space Vampire",
        description: "The Space Vampire is a single player 3D platformer built in Unity/C# as part of a game development course at UMD. The character was inspired by the finale of the Nickelodeon TV Series Danny Phantom, which sees the primary antagonist, the half-human, half-ghost millionare mayor of town, exiled into space after failing to save the world from a haunted asteroid he himself had drawn to the Earth. I wanted to explore the implications of an undead villain exiled from his home, lost in the cosmos for eternity, completely alone. \n\n I sketched character art including his appearance, abilities, items, and his ship's AI assistant and shared the design with my team. They immediately connected with the idea and brainstormed that he should crash land on a garlic planet and battle garlic themed monsters. With only a month allowed for construction, we decided to model the game after simple 3D platformers on the Nintendo64 like Super Mario 64 and Banjo & Kazooie. \n\n My team handled implementing gameplay and building the level map with Unity/C# while I primarily focused on building character models in Blender and animating movement. I also voiced the character and animated the introduction and a concept demo for the boss battle.",
        category: "Video Game",
        gitHubLink: 'https://youtube.com/playlist?list=PLAHaOiMUCZRZ5IENSC4CZq7RQ3OEoxvvN',
        img: '/images/projects/sketches/Spaceman5.png',
        img_classes: '',
        slides: [{src: '/images/projects/spacevampire.png', caption:'spacevampire', index:4}],
        skills: ['Game Development', 'Animation', '3D Modeling', '3D Character Rigging', 'Video Editing'], 
        tech: ['Unity','C#', 'Blender3D', 'Photoshop', 'Premiere']
    },
    {
        id: 5,
        title: "Healthify",
        description: "Healthify is an Android app which allows a user to keep track of their health and fitness goals. It was built in AndroidStudio using XML with the back-end implemented using Java. This project was part of a UMD course on Human-Computer Interaction which taught how to implement the principles of user interface (UI) design to enhance the user experience (UX). \n\n We built the app from the ground up, utilizing various prototyping methods to refine and evaluate functionality and usability. We began by defining user personas and task scenarios, then constructed a paper prototype to help define task-flow. After that we built a working prototype which the professor evaluated. His feedback was highly critical of the simple design and the poor accessibility of our color choices. So, for the second prototype I designed high-fidelity mockups in PowerPoint. Scrapping our original design, but keeping our brand colors, I created a high contrast dark mode which used icons to simplify the interface. My goal was to make the app look and feel more fun. \n\nFinally, we submitted the project for peer review, which simulated user testing. We also conducted a heuristic evaluation of another groups app. We updated our final submission to address issues and feedback from user testing.",
        category: "Android App",
        gitHubLink: 'https://youtu.be/U42hCzOBTfI',
        img: '/images/projects/sketches/healthify4.png',
        img_classes: 'lg:scale-100 scale-75',
        slides: [{src: '/images/projects/healthify.png', caption:'healthify', index:5}],
        skills: ['UI/UX Design', 'App Development', 'Android', 'User Testing', 'Heuristic Evaluation'], 
        tech: ['Java','XML', 'Android Studio', 'CSS', 'PowerPoint']
    }, 
    {
        id: 3,
        title: "Genome Assembler",
        category: "Java/Python Program",
        description: "This is a toy genome assembler which uses bioinformatic algorithms to fragment and reconstruct the genome. The project generates output files called picoindex and picomap. \n\nThe picoindex processes an input genome and produces an FM-index, which uses the Burrow-Wheeler transform to rotate the genome and generate suffixes. This allows us to determine the index of individual basepairs in the genome. The picomap takes in gene fragments and attempts to align them on the genome using the picoindex as reference in order to find the position where a particular gene starts within the genome. This is useful for geneticists who have isolated a gene, possibly in an attempt to determine its function, but now want to know where that gene can be found in the genome. The output produces a list of possible alignments, scored based on how few differences are detected between the fragment and the genome. It also generates a representative CIGAR string which uses a combination of numbers and symbols to illustrate what differences were detected.",
        gitHubLink: 'https://github.com/smkhalil2/Toy-Genome-Assembler',
        img: '/images/projects/sketches/bioinformatics3.png',
        img_classes: '',
        slides: [{src: '/images/projects/genomeAssembler2.png', caption:'genome assembler', index:3}],
        skills: ['Bioinformatic Algorithms', 'Scripting'], 
        tech: ['Java', 'Python', 'C++', 'bash']
    },
    {
        id: 1,
        title: "LilyHoney",
        description: "LilyHoney is an eCommerce site concept for a fictional company that produces and sells organic honey. This project was designed in Figma as part of a Udemy course on the design tool. I learned to define a task-flow which I used to generate a basic wireframe. I then constructed a high fidelity mockup of the mobile and desktop versions of the app. I used AI to generate photos of the fictional product. I also designed a brand and logo in Photoshop. This project enabled me to learn how to use Figma features including animations, reusable components, and effects.",
        category: "eCommerce Site UI Concept",
        gitHubLink: 'https://www.figma.com/file/q9tbUjKEpxhwjOu3cShHQu/LilyHoney-eCom-V1?type=design&node-id=314%3A25&mode=design&t=Uxfkwrg3CGxmY4QR-1',
        img: '/images/projects/sketches/bee3.png',
        img_classes: '',
        slides: [{src: '/images/projects/lilyhoney4.png', caption:'lilyhoney', index:1}],
        skills: ['UI/UX Design', 'Brand Design'], 
        tech: ['Figma','Photoshop', 'AI']
    },
    {
        id: 2,
        title: "Color Palette Maker",
        description: "This is a single-page web app built in ReactJS. You can explore the pregenerated color palettes for inspiration or build and save your own. The colors can be directly copied to the keyboard as either an HEX, RGB, or RGBA value. You can use the slider to adjust the saturation of the colors, or click on a color to see different shades.",
        category: "React App",
        gitHubLink: 'https://github.com/smkhalil2/Color-Palette-Project',
        img: '/images/projects/sketches/paintbucket2.png',
        img_classes: '',
        slides: [{src: '/images/projects/colorpalette.png', caption:'color palette maker', index:2}],
        skills: ['UI/UX Design', 'App Development', 'Input Validation'], 
        tech: ['React.js','JavaScript', 'HTML', 'CSS']
    },
    {
        id: 6,
        title: "This Website!",
        description: "This website is a ReactJS app. I used Next.js to take advantage of server-side rendering to decrease load times. Next.js also allowed me to implement routing more easily. I styled the site using TailwindCSS which has reduced the number of files I am responsible for and allows me to make changes to components quickly. I am also able to easily implement responsiveness and interactivity like styling hover effects. \n\n I modeled the design of this app after the TARDIS from the original run of Doctor Who on BBC in the 1960s. I drew the illustrations you see in Autodesk Sketchbook. I wanted this site to expresses my skill, creativity, and nerdiness!",
        category: "React App",
        gitHubLink: 'https://github.com/smkhalil2?tab=repositories',
        img: '/images/projects/sketches/bird2.png',
        img_classes: '',
        slides: [{src:'/images/projects/portfolio.png', caption:'portfolio', index:6}],
        skills: ['UI/UX Design', 'Brand Design', 'Web Development', 'Photo Editing', 'Illustration'], 
        tech: ['React.js','Next.js', 'TailwindCSS', 'HTML', 'Figma', 'Autodesk Sketchbook', 'Photoshop']
    },
    
]


export const skills = [
    {
        name: 'React',
        logo: '/images/icons/react.png',
        color: '#1897F4'
    },
    {
        name: 'Figma',
        logo: '/images/icons/figma.png',
        color: '#279C6B'
    },
    {
        name: 'JavaScript',
        logo: '/images/icons/javascript.png',
        color: '#EFCD74'
    },
    {
        name: 'Java',
        logo: '/images/icons/java.png',
        color: '#e84848'
    },
    // {
    //     name: 'Python',
    //     logo: '/images/icons/python.png',
    //     color: '#fff654'
    // },
    {
        name: 'HTML',
        logo: '/images/icons/html.png',
        color: '#DF6B17',
        img_classes: ""
    },
    {
        name: 'CSS',
        logo: '/images/icons/css.png',
        color: '#485B9F',
        img_classes: "w-[22px] h-[22px]"
    },
    {
        name: 'Adobe Creative Suite',
        logo: '/images/icons/adobe2.png',
        color: '#e84848',
        img_classes: "w-[20px] h-[20px]"
    }

]

export const slideImages = [
    {
        src: '/images/slideshow/gradphoto.jpg',
        caption: 'With Jim Henson and Kermit statue at UMD, 2022',
        index: 0
    },
    {
        src: '/images/slideshow/KayakingOnPotomac.jpg',
        caption: 'Kayaking in Georgetown, Washington DC, 2023',
        index: 1
    },
    {
        src: '/images/slideshow/Performing.jpg',
        caption: 'Performing live in Washington DC, 2023',
        index: 2
    },
    {
        src: '/images/slideshow/oregoncoast.jpg',
        caption: 'Visting the Oregon Coast, 2022',
        index: 2
    }
]