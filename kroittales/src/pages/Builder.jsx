import "./Builder.css";

function Builder() {
  return (
    <div className="builder-wrapper">
      <div className="builder-panel">
        <label>Character</label>
        <select><option>Kroi</option></select>

        <label>Sidekick</label>
        <select><option>Spot</option></select>

        <label>Setting</label>
        <select><option>Forest</option></select>

        <label>Action</label>
        <select><option>Help a friend</option></select>

        <button>Generate Story</button>

        <input placeholder="Notes/tags" />
        <button>Save Story</button>

        <h3>Saved Stories</h3>
        <input placeholder="Story Title" />
        <button>Delete</button>
      </div>

      <div className="story-box">
        <h3>Your Story</h3>
        <textarea readOnly value="Once Upon A Time..." />
        <button>Read Aloud</button>
        <button>Save</button>
      </div>
    </div>
  );
}
export default Builder;