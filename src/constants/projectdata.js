import todo from "../assets/todo.jfif";
import onlineLibrary from "../assets/onlineLibrary.jfif";
import travelAPI from "../assets/travelAPI.jfif";
import portfolioReact from "../assets/portfolioReact.jfif";
const projects = [{
        id: 1,
        image: onlineLibrary,
        name: "Online Library",
        description: "Full-stack web application to  system using PHP and MySQL as part of a curriculum project.",
        link: "https://github.com/keerthanapalepu/OnlineLibrary"
    },
    {
        id: 2,
        image: travelAPI,
        name: "Travel API",
        description: "React application which displays restaurant, hotel, and attraction data based on Geolocation from a specialised Rapid API.",
        link: "https://github.com/keerthanapalepu/travel-api"
    },
    {
        id: 3,
        image: todo,
        name: "Todo App",
        description: "React Redux app with NodeJs backend to provide and manage CRUD functionalities",
        link: "https://github.com/keerthanapalepu/TodoAppfrontend"
    },
    {
        id: 4,
        image: portfolioReact,
        name: "Portfolio site",
        description: "Portfolio App using reactjs with HTML CSS Javascript Bootstrap ",
        link: "https://github.com/keerthanapalepu/Portfolio"
    }

];

export default projects;