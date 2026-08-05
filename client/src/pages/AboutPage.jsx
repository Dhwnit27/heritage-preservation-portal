import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./AboutPage.css";

function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="about-page">

        <section className="about-hero">

          <h1>🏛 About</h1>

          <h3>Heritage Preservation Portal</h3>

          <p>
            Preserving history through technology.
            The Heritage Preservation Portal is a virtual museum
            that allows visitors to explore India's iconic monuments,
            understand their history, and appreciate the remarkable
            architectural heritage they represent.
          </p>

        </section>

        <section className="about-grid">

          <div className="about-card">

            <h2>🎯 Our Mission</h2>

            <p>
              To create an engaging digital platform that celebrates
              India's cultural heritage while making historical
              monuments more accessible and educational for everyone.
            </p>

          </div>

          <div className="about-card">

            <h2>💻 Technologies</h2>

            <ul>

              <li>⚛️ React.js</li>

              <li>🎨 CSS3</li>

              <li>🧭 React Router</li>

              <li>💻 JavaScript (ES6)</li>

              <li>📦 Vite</li>

            </ul>

          </div>

        </section>

        <section className="project-card">

          <h2>🌟 Why This Project?</h2>

          <p>
            This project was built to demonstrate modern frontend
            development while highlighting India's architectural
            wonders. It combines clean design, reusable React
            components, and an interactive user experience into
            one virtual heritage museum.
          </p>

        </section>

      </main>

      <Footer />
    </>
  );
}

export default AboutPage;