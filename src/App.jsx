import "./App.css";
import logo from "./assets/Group 20.svg";
import search from "./assets/Vector (1).svg";
import phone from "./assets/phone.svg";
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
        <main></main>
        <footer></footer>
      </div>
    </>
  );
}

export default App;
