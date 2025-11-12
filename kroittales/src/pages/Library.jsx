import { sampleStories } from "../data/stories.js";

function Library() {
  return (
    <div className="panel panel-saved" style={{ marginTop: 24 }}>
      <h3 className="story-title" style={{ textAlign: "center" }}>Saved Stories</h3>
      <div className="saved-row">
        <input placeholder="Story Title" disabled />
        <button className="btn delete" disabled>Delete</button>
      </div>
      <ul className="list" style={{ marginTop: 12 }}>
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