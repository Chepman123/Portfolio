export interface projectData{
  title:string,
  description:string,
  technologies:string[],
  images:string[],
  github:string,
  link:string
}
export const projects:projectData[]=[
    {
        title:'Chat',
        description:'A full-stack chat application built with Node.js, React, and TypeScript. The project includes: User authentication and logging system. Message sending and storage in a database. Editing and deleting messages functionality. Automated chat creation in the database when a new user registers. The app provides a modern, scalable',
        technologies:['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'],
        images:['/ChatImages/image(8).png','/ChatImages/image(20).png'],
        github:'https://github.com/Chepman123/chat_project',
        link:''
    },
    {
        title:'Game_Studio_WebSite',
        description:'A React and TypeScript-based website for a game studio featuring a modern and dynamic design. The site includes sections for news and projects, with all content automatically fetched and updated from a database or content management system. The project focuses on clean UI/UX, responsive layouts, and smooth animations to present the studio’s games and updates in a professional and engaging way',
        technologies:['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'],
        images:['/Game Studio/image(9).png','/Game Studio/image(12).png','/Game Studio/image(13).png','/Game Studio/image(14).png','/Game Studio/image(16).png','/Game Studio/image(17).png'],
        github:'https://github.com/Chepman123/pervomens-website',
        link:'https://pervomens-website-git-main-vlad-shlapak.vercel.app?_vercel_share=ONbrWz7fuTOJgaPHhv85ImffnYGSIrJv'
    }
    ,
    {
        title:'Dantway',
        description:'A modern website for a dental clinic built with React, TypeScript, and Node.js. The site features automatic data population for clinic information, services, and contact details, ensuring easy content management and real-time updates. It also includes an online booking system, allowing patients to schedule appointments directly through the website. The design emphasizes clean aesthetics, responsive layouts, and user-friendly navigation, providing patients with a professional and trustworthy online experience',
        technologies:['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'],
        images:['/DantWay/image(10).png','/DantWay/image(18).png','/DantWay/image(19).png','/DantWay/image(32).png'],
        github:'https://github.com/Chepman123/stomatology-site',
        link:'https://dantway.pl/'
    }
    ,
    {
        title:'TwitterCopy',
        description:'A fullstack twiiter copy. It includes login system, posts, comments, profiles, followings and search feature',
        technologies:['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'],
        images:['/TwitterCopy/image (38).png','/TwitterCopy/image (39).png','/TwitterCopy/image (40).png','/TwitterCopy/image (41).png'],
        github:'https://github.com/Chepman123/twitter-copy',
        link:''
    }
    ,
    {
        title:'Onlinelibrary',
        description:'This project is a full-stack online library platform that allows users to read, share, and discuss stories. Users can register, create their own works, leave reviews, like or dislike books, and explore titles by genres or filters. The platform includes an advanced search system with multiple filters, a rating and feedback mechanism, and a clean, user-friendly interface. The backend is built with Node.js, Express, and MongoDB, featuring structured TypeScript interfaces for better scalability and code safety. The project also implements user interaction features such as likes, dislikes, and comments, as well as genre-based categorization for easier content discovery. It’s designed with a modular architecture separating services, controllers, and interfaces, following modern full-stack development principles.',
        technologies:['https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg','https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'],
        images:['/Onlinelibrary/1.jpg','/Onlinelibrary/1.jpg','/Onlinelibrary/1.jpg'],
        github:'https://github.com/Chepman123/LibraryProject',
        link:''
    }
]
