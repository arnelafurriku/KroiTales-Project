import Builder from "./Builder.jsx";
import "../index.css";

function Home() {
  return (
    <section>
      <header>
        <h2>Hey Kiddo, Let’s Build Your Story Together!</h2>
        <p>
          Choose your characters and settings below to co-create bedtime stories
          that spark imagination and fun!
        </p>
      </header>

      <Builder />
    </section>
  );
}
export default Home;