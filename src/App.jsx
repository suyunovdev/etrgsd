import "./App.css";
import logo from "./assets/Group 20.svg";
import search from "./assets/Vector (1).svg";
import phone from "./assets/phone.svg";
import play from "./assets/plays.svg";
import person2 from "./assets/person2.png";
import burger from "./assets/burger.png";
function App() {
  return (
    <>
      <div>
        <header>
          <div className="container">
            <nav>
              <img src={logo} alt="" />
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">
                    <select name="" id="">
                      <option value="">Menu</option>
                      <option value="">Drink</option>
                      <option value="">Food</option>
                    </select>
                  </a>
                </li>
                <li>
                  <a href="#">
                    {" "}
                    <select name="" id="">
                      <option value="">Services</option>
                      <option value="">Drink</option>
                      <option value="">Food</option>
                    </select>
                  </a>
                </li>
                <li>
                  <a href="#">Offers</a>
                </li>
              </ul>
              <div className="right">
                <img src={search} alt="" />
                <button>
                  <img src={phone} alt="" />
                  Contact
                </button>
              </div>
            </nav>
          </div>
        </header>
        <main>
          <section>
            <div className="container">
              <div className="hero">
                <div className="chap">
                  <h1>
                    Dive into Delights Of Delectable <span>Food</span>
                  </h1>
                  <p>
                    Where Each Plate Weaves a Story of Culinary Mastery and
                    Passionate Craftsmanship
                  </p>
                  <div className="pas">
                    <button>Order Now</button>
                    <a href="#">Watch Video</a>
                    <div className="circle">
                      <img src={play} alt="" />
                    </div>
                  </div>
                </div>
                <img className="person2" src={person2} alt="" />
              </div>
            </div>
          </section>
          <section>
            <div className="container">
              <div className="customer">
                <h4>Customer Favorites</h4>
                <h2>Popular Categories</h2>
                <div className="cards">
                  <div className="card">
                    <div className="burger_circle">
                      <img src={burger} alt="" />
                    </div>
                    <h2>Main Dish</h2>
                    <p>(86 dishes)</p>
                  </div>
                  <div className="card">
                    <div className="burger_circle">
                      <img src={burger} alt="" />
                    </div>
                    <h2>Main Dish</h2>
                    <p>(86 dishes)</p>
                  </div>
                  <div className="card">
                    <div className="burger_circle">
                      <img src={burger} alt="" />
                    </div>
                    <h2>Main Dish</h2>
                    <p>(86 dishes)</p>
                  </div>
                  <div className="card">
                    <div className="burger_circle">
                      <img src={burger} alt="" />
                    </div>
                    <h2>Main Dish</h2>
                    <p>(86 dishes)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
