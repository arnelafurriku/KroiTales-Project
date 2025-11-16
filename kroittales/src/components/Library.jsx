function Library({ stories, onDeleteAll }) {
  const hasStories = stories && stories.length > 0;

  return (
    <div className="panel panel-saved" style={{ marginTop: 24 }}>
      <h3 className="story-title" style={{ textAlign: "center" }}> Saved Stories</h3>

      <div className="saved-actions">
        <button
          className="btn delete"
          type="button"
          onClick={onDeleteAll}
          disabled={!hasStories}
        >
          Delete
        </button>
      </div>
      <ul className="list" style={{ marginTop: 12 }}>
        {hasStories ? (
          stories.map(s => (
            <li key={s.id}>
              <h4>{s.title}</h4>
              <p style={{ margin: 0 }}>{s.text}</p>
            </li>
          ))
        ) : (
          <li>
            <p style={{ margin: 0 }}>
              No stories saved yet. Generate a story and click Save to add it
              here.
            </p>
          </li>
        )}
      </ul>
    </div>
  );
}
export default Library;