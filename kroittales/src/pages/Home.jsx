import Builder from "./Builder.jsx";
import Library from "./Library.jsx";

function Home() {
  return (
    <section className="container">
      <header className="home-header">
        <h2 className="home-title">Hey Kiddo, Let’s Build Your Story Together!</h2>
      </header>
      <div className="builder-grid">
        <Builder />
      </div>
      <Library />
    </section>
  );
}
export default Home;