import { sampleStories } from "../data/stories.js";

function Library() {
  return (
    <div className="panel" style={{ marginTop: 24 }}>
      <h3 className="story-title" style={{ textAlign: "left" }}>Saved Stories</h3>
      <ul className="list">
        {sampleStories.map((s) => (
          <li key={s.id}>
            <h4>{s.title}</h4>
            <p style={{ margin: 0 }}>{s.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Library;