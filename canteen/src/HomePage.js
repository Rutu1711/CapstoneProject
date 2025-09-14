import React from "react";

function HomePage() {
  return (
    <>
      <style>{`
        .home-container {
          font-family: 'Segoe UI', sans-serif;
          margin: 0;
          padding: 0;
          background: #f9f9f9;
          overflow-x: hidden;
        }

        /* Navbar */
        .navbar {
          background: linear-gradient(90deg, #4facfe, #00f2fe);
          color: white;
          padding: 15px 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          top: 0;
          z-index: 1000;
        }
        .navbar h1 {
          margin: 0;
          font-size: 24px;
          font-weight: bold;
          animation: slideInLeft 1s ease;
        }
        .navbar a {
          color: white;
          text-decoration: none;
          margin-left: 20px;
          font-weight: bold;
          transition: 0.3s;
        }
        .navbar a:hover {
          color: #ffe082;
        }

        /* Hero Section */
        .hero {
          background: linear-gradient(135deg, #4facfe, #00f2fe);
          color: white;
          text-align: center;
          padding: 100px 20px;
          animation: fadeIn 1.5s ease;
        }
        .hero h2 {
          font-size: 42px;
          margin-bottom: 15px;
          animation: slideInUp 1s ease;
        }
        .hero p {
          font-size: 18px;
          margin-bottom: 25px;
        }
        .hero button {
          padding: 14px 28px;
          font-size: 16px;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          background: white;
          color: #4facfe;
          cursor: pointer;
          transition: transform 0.3s;
        }
        .hero button:hover {
          transform: scale(1.05);
          background: #f0f0f0;
        }

        /* Features Section */
        .features {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 25px;
          padding: 50px 20px;
          text-align: center;
        }
        .feature-card {
          background: white;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0px 5px 15px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
          animation: fadeInUp 1s ease;
        }
        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0px 8px 20px rgba(0,0,0,0.15);
        }
        .feature-card h3 {
          margin-bottom: 10px;
          color: #4facfe;
        }

        /* Menu Preview */
        .menu {
          padding: 50px 20px;
          background: #fff;
          animation: fadeIn 1.5s ease;
        }
        .menu h2 {
          text-align: center;
          margin-bottom: 30px;
          color: #333;
        }
        .menu-items {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 20px;
        }
        .menu-card {
          background: #fafafa;
          padding: 15px;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0px 3px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s, box-shadow 0.3s;
        }
        .menu-card:hover {
          transform: scale(1.05);
          box-shadow: 0px 5px 15px rgba(0,0,0,0.15);
        }
        .menu-card img {
          width: 100%;
          border-radius: 10px;
          margin-bottom: 10px;
        }

        /* Footer */
        .footer {
          background: #4facfe;
          color: white;
          text-align: center;
          padding: 20px;
          margin-top: 30px;
          animation: fadeIn 1.5s ease;
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="home-container">
        {/* Navbar */}
        <div className="navbar">
          <h1>CanteenHub</h1>
          <div>
            <a href="/">Home</a>
            <a href="/menu">Menu</a>
            <a href="/login">Login</a>
          </div>
        </div>

        {/* Hero */}
        <div className="hero">
          <h2>🍽️ Welcome to CanteenHub</h2>
          <p>Smart, Delicious, and Waste-Free Dining Experience!</p>
          <button>Explore Menu</button>
        </div>

        {/* Features */}
        <div className="features">
          <div className="feature-card">
            <h3>🔐 Secure Login</h3>
            <p>Personalized experience with quick and secure login.</p>
          </div>
          <div className="feature-card">
            <h3>📋 Menu Display</h3>
            <p>Browse our daily menu with prices & special items.</p>
          </div>
          <div className="feature-card">
            <h3>🤖 Smart Predictions</h3>
            <p>Our system predicts required food quantities to avoid wastage.</p>
          </div>
        </div>

        {/* Menu Preview */}
        <div className="menu">
          <h2>Popular Dishes</h2>
          <div className="menu-items">
            <div className="menu-card">
              <img src="https://via.placeholder.com/220x130" alt="Veg Thali" />
              <h4>Veg Thali</h4>
              <p>₹60</p>
            </div>
            <div className="menu-card">
              <img src="https://via.placeholder.com/220x130" alt="Chicken Curry" />
              <h4>Chicken Curry</h4>
              <p>₹120</p>
            </div>
            <div className="menu-card">
              <img src="https://via.placeholder.com/220x130" alt="Pav Bhaji" />
              <h4>Pav Bhaji</h4>
              <p>₹50</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="footer">
          <p>📍 Location: College Campus | ⏰ 8AM - 8PM | 📞 +91 98765 43210</p>
          <p>&copy; {new Date().getFullYear()} CanteenHub</p>
        </div>
      </div>
    </>
  );
}

export default HomePage;
