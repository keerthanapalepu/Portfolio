import notes from "../assets/notes.jpeg";
import AI from "../assets/AI.jpeg";
import game from "../assets/game.jpeg";
import portfolio from "../assets/portfolio.jpeg";
const projects = [
  {
    id: 1,
    image: AI,
    name: "Face Recognition Attendance system",
    description:
      "Full-stack app with python assisted AI based facial recognition attendance system for college. CMRIT Hackathon project 2021.",
    link: "https://github.com/Maveric-k07/FaceRecognitionAttendance"
  },
  {
    id: 2,
    image: game,
    name: "Multiplayer Tic-Tac-Toe",
    description:
      "Flutter app with NodeJs backend enabling communication via websockets using SocketIo and mongoDb",
    link: "https://github.com/Maveric-k07/tictactoe-flutter-frontend"
  },
  {
    id: 3,
    image: notes,
    name: "Notes App",
    description:
      "React app with Django backend to provide and manage REST API.",
    link: "https://github.com/Maveric-k07/notes-frontend"
  },
  {
    id: 4,
    image: portfolio,
    name: "Portfolio site",
    description:
      "Portfolio App using reactjs with HTML CSS Javascript Bootstrap ",
    link: "https://github.com/Maveric-k07/portfolio-react"
  }
];

export default projects;
