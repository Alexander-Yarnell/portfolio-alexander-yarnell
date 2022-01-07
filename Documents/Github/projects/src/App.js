import logo from "./logo.svg";
import "./App.css";

//Import Components
import Hero from "./components/Hero";
import Card from "./components/Card.js";
import Nav from "./components/Nav.js";


//Import images
import project1 from "./images/project1.png";
import project2 from "./images/Screenshot_2022-01-07_05-02-45.png";
import project3 from "./images/todo.png";
import project4 from "./images/pacman.png";

function App() {
  const projects = [
    {
      title: "Banking App",
      git: "https://github.com/Alexander-Yarnell",
      page: "http://50.116.26.57:3000/#/",
      img: `${project1}`,
    },
    {
      title: "Random Food Picker",
      git: "https://github.com/Alexander-Yarnell/Fetch-And-Render-Data",
      page: "https://fetch-and-render-data-kecm4.ondigitalocean.app/",
      img: `${project2}`
    },
    {
      title: "Todo List",
      git: "https://github.com/Alexander-Yarnell/TodoList",
      page: "https://todo-list-f9wwy.ondigitalocean.app",
      img: `${project3}`
    },
    {
      title: "Pacman Factory",
      git: "https://github.com/Alexander-Yarnell/PacMen-Factory",
      page: "https://pac-men-factory-cowtn.ondigitalocean.app/",
      img: `${project4}`
    }

  ];

  let cards = projects.map((item) => {
    return <Card title={item.title} img={item.img} git={item.git} page={item.page}/>;
  });

  return (
    <div className="App">
      <header className="App-header">
        <Hero />
        <div className="Projects-title">Projects</div>
        <div>
          <div className="Grid-container">{cards}</div>
        </div>
        <div className="Certificate-container">
          <img
            className="Certificate-img"
            src="https://api.accredible.com/v1/frontend/credential_website_embed_image/certificate/40800845"
            alt="..."
          />
          <div className="Certificate-background"></div>
        </div>
        <div className="Projects-title">Contact Me</div>
        <form className="Contact-container" action="https://formsubmit.co/yarnell.alexander@yahoo.com" method="POST">
          <div className="Email">
            <input type="email" className="Email-input" placeholder="Email" name="email" required />
          </div>
          <div className="Subject">
            <textarea
              type="text"
              className="Subject-input"
              placeholder="Message"
              rows="4"
              name="name"
            />
          </div>
          <br />
          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: "15vw", fontSize: "100%", borderRadius: "25px" }}
          >
            Send
          </button>
        </form>
      </header>
    </div>
  );
}

export default App;
