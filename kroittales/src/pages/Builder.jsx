function Builder() {
  return (
    <>
      <div className="panel panel-left">
        <div className="form-row">
          <label>Character</label>
          <select defaultValue="Kroi" disabled>
            <option>Kroi</option>
            <option>Luna</option>
            <option>Beni the Brave</option>
            <option>Ari the Fox</option>
          </select>
        </div>

        <div className="form-row">
          <label>Sidekick</label>
          <select defaultValue="Spot the Puppy" disabled>
            <option>Spot the Puppy</option>
            <option>Milo the Robot</option>
            <option>Flappy the Bird</option>
          </select>
        </div>

        <div className="form-row">
          <label>Setting</label>
          <select defaultValue="enchanted forest" disabled>
            <option>enchanted forest</option>
            <option>space station</option>
            <option>undersea city</option>
            <option>grandma's garden</option>
          </select>
        </div>

        <div className="form-row">
          <label>Action</label>
          <select defaultValue="help a friend" disabled>
            <option>solve a mystery</option>
            <option>help a friend</option>
            <option>discover a secret door</option>
            <option>fly to the moon</option>
          </select>
        </div>

        <div className="btn-center">
          <button className="btn" disabled>Generate Story</button>
        </div>

        <div className="form-row">
          <label>Notes / Tags</label>
          <input placeholder="e.g., bedtime, space, Albanian" disabled />
        </div>
        <div className="btn-center">
          <button className="btn" disabled>Save Story</button>
        </div>
      </div>

      <div className="panel panel-right">
        <h3 className="story-title">Your Story</h3>
        <textarea className="story-text" readOnly value="Once upon a time..." />
        <div className="story-actions">
          <button className="btn" disabled>Read Aloud</button>
          <button className="btn" disabled>Save</button>
        </div>
      </div>
    </>
  );
}
export default Builder;