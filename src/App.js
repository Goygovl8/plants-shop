import logo from "./images/logo.png";
import search from "./images/search.png";
import user from "./images/user.png";
import shop from "./images/shop.png";
import flowers1 from "./images/flowers1.png";
import flowers2 from "./images/flowers2.png";
import flowers3 from "./images/flowers3.png";
import flowers4 from "./images/flowers4.png";
import flowers5 from "./images/flowers5.png";
import flowers6 from "./images/flowers6.png";
import flowers7 from "./images/flowers7.png";
import flowers8 from "./images/flowers8.png";
import flowers9 from "./images/flowers9.png";
import flowers10 from "./images/flowers10.png";
import flowers11 from "./images/flowers11.png";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";
import phone from "./images/phone.png";
import gmail from "./images/gmail.png";
import map from "./images/map.png";

function App() {
  return (
    <div className="App">
      <header>
        <div className="main-nav">
          <p>Shop</p>
          <p>Products▾</p>
          <p>Fertilizer</p>
          <p>Guide</p>
        </div>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="user-nav">
          <img src={search} alt="Search" />
          <img src={user} alt="User" />
          <img src={shop} alt="Shop" />
        </div>
      </header>
      <div className="hero-section">
        <div className="hero">
          <p className="hero-title">
            Happiness <br />
            blooms from <br />
            within
          </p>
          <p className="hero-subtitle">
            Our environment, the world in which we live and <br /> work, is a
            mirror of our attitudes and expectations.
          </p>
          <div className="hero-actions">
            <button>Shop now</button>
            <p>
              Explore plants <span className="arrow">⟶</span>
            </p>
          </div>
        </div>
        <div className="hero-gallery">
          <div className="hero-column">
            <div className="product-card1">
              <span className="badge1">New</span>
              <img src={flowers1} alt="Flower 1" />
            </div>
            <div className="product-card2">
              <span className="badge2">Popular</span>
              <img src={flowers2} alt="Flower 2" />
            </div>
          </div>
          <div className="hero-featured">
            <div className="product-card3">
              <span className="badge3">Featured</span>
              <img src={flowers3} alt="Featured" />
              <div className="card-content">
                <h3 className="card-title">Anthurium Flower</h3>
                <p className="card-description">
                  The flower of human being. It has meaningful of fact that the
                  plant always grow whatever season and weather...
                </p>
                <button className="btn-read-more">Read more</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-products">
        <div className="section-header">
          <p className="section-title">Featured</p>
          <p className="view-all-link">view all</p>
        </div>
        <div className="cards">
          <div className="card">
            <img src={flowers4} alt="Flower 4" />
            <div className="card-desc">
              <div className="card-name">Peperomia Ginny</div>
              <div className="card-price">$25</div>
            </div>
            <div className="card-bottom">
              <div className="color-picker">
                <p>Pot color</p>
                <div className="krug">
                  <div className="krug krug1"></div>
                  <div className="krug krug2"></div>
                  <div className="krug krug3"></div>
                  <div className="krug krug4"></div>
                </div>
              </div>
              <button className="card-btn">Buy</button>
            </div>
          </div>
          <div className="card">
            <img src={flowers5} alt="Flower 5" />
            <div className="card-desc">
              <div className="card-name">Peperomia Ginny</div>
              <div className="card-price">$45</div>
            </div>
            <div className="card-bottom">
              <div className="color-picker">
                <p>Pot color</p>
                <div className="krug">
                  <div className="krug krug1"></div>
                  <div className="krug krug2"></div>
                  <div className="krug krug3"></div>
                  <div className="krug krug4"></div>
                </div>
              </div>
              <button className="card-btn">Buy</button>
            </div>
          </div>
          <div className="card">
            <img src={flowers6} alt="Flower 6" />
            <div className="card-desc">
              <div className="card-name">Peperomia Ginny</div>
              <div className="card-price">$52</div>
            </div>
            <div className="card-bottom">
              <div className="color-picker">
                <p>Pot color</p>
                <div className="krug">
                  <div className="krug krug1"></div>
                  <div className="krug krug2"></div>
                  <div className="krug krug3"></div>
                  <div className="krug krug4"></div>
                </div>
              </div>
              <button className="card-btn">Buy</button>
            </div>
          </div>
          <div className="card">
            <img src={flowers7} alt="Flower 7" />
            <div className="br">⟶</div>
            <div className="card-desc">
              <div className="card-name">Peperomia Ginny</div>
              <div className="card-price">$30</div>
            </div>
            <div className="card-bottom">
              <div className="color-picker">
                <p>Pot color</p>
                <div className="krug">
                  <div className="krug krug1"></div>
                  <div className="krug krug2"></div>
                  <div className="krug krug3"></div>
                  <div className="krug krug4"></div>
                </div>
              </div>
              <button className="card-btn">Buy</button>
            </div>
          </div>
        </div>
      </div>
      <div className="search-bar">
        <button className="filter-btn">
          <svg
            width="59"
            height="59"
            viewBox="0 0 59 59"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            <line x1="14" y1="15.5" x2="45" y2="15.5" />
            <circle cx="22" cy="15.5" r="2.5" fill="currentColor" />
            <line x1="14" y1="29.5" x2="45" y2="29.5" />
            <circle cx="37" cy="29.5" r="2.5" fill="currentColor" />
            <line x1="14" y1="43.5" x2="45" y2="43.5" />
            <circle cx="22" cy="43.5" r="2.5" fill="currentColor" />
          </svg>
        </button>
        <input placeholder="Search flowers..." />
        <div className="search">
          <img src={search} alt="Search" />
        </div>
      </div>
      <div className="section-header">
        <p className="section-title">Colorful New Arrivals</p>
        <p className="view-all-link">view all</p>
      </div>
      <div className="categories-grid">
        <img src={flowers8} alt="Featured" />
        <img src={flowers9} alt="Featured" />
        <img src={flowers10} alt="Featured" />
        <img src={flowers11} alt="Featured" />
      </div>
      <div className="products-section">
        <div className="section-title plant-stands-header">
          <p>Plant stands</p>
        </div>
        <div className="products-list">
          <img src={image1} alt="Featured" />
          <img src={image2} alt="Featured" />
          <img src={image3} alt="Featured" />
          <p className="more">
            more <span className="arrow">⟶</span>
          </p>
        </div>
      </div>
      <footer>
        <div className="promo-banner">
          <img src={image4} alt="Featured" />
          <div className="banner-text-group">
            <p className="banner-title">Free Shipping Services</p>
            <p className="banner-subtitle">*only for the same region</p>
          </div>
          <div className="banner-contacts">
            <div className="contact-item">
              <img src={phone} alt="Phone" />
              <p className="numbers">+62 1189-2719-00</p>
            </div>
            <div className="contact-item">
              <img src={gmail} alt="Email" />
              <p className="gmail">order@platify.co</p>
            </div>
          </div>
        </div>

        <div className="map-container">
          <img src={map} alt="Map Background" className="map-bg" />
          <div className="map-card">
            <div className="card-top">
              <h3 className="map-card-title">Visit us</h3>
              <button className="directions-btn">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                </svg>
                GET DIRECTIONS
              </button>
            </div>
            <div className="card-bottom">
              <p className="address-text">
                Gekikara Street 16, Atalanta
                <br />
                1327 Block M<br />
                Mardial, Sigure
                <br />
                T2G 0T2
              </p>
              <p className="working-hours">
                <strong>Open day :</strong> 11am–5:30pm everyday
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;