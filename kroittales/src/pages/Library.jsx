import { sampleStories } from "../mockData.js";
import StoryDetail from "../components/StoryDetail.jsx";

export default function Library() {
  return (
    <section>
      <header>
        <h2>Library</h2>
        <p>Saved stories will appear here. Showing samples for now.</p>
      </header>

      <ul>
        {sampleStories.map(s => (
          <li key={s.id}>
            <h3>{s.title}</h3>
            <StoryDetail storyText={s.text} />
          </li>
        ))}
      </ul>
    </section>
  );
}
