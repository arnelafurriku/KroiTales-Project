function Library({ stories, selectedIds, onToggleSelect, onDeleteSelected }) {
  const hasStories = stories && stories.length > 0;
  const hasSelected = selectedIds && selectedIds.length > 0;

  return (
    <div className="panel panel-saved" style={{ marginTop: 24 }}>
      <h3 className="story-title" style={{ textAlign: "center" }}>
        Saved Stories
      </h3>

      <div className="saved-actions">
        <button
          className="btn delete"
          type="button"
          onClick={onDeleteSelected}
          disabled={!hasSelected}
        >
          Delete
        </button>
      </div>

      <ul className="list" style={{ marginTop: 12 }}>
        {hasStories ? (
          stories.map(story => (
            <li key={story.id}>
              <label className="story-item">
                <input
                  type="checkbox"
                  checked={selectedIds.includes(story.id)}
                  onChange={() => onToggleSelect(story.id)}
                />
                <div className="story-item__content">
                  <h4>{story.title}</h4>
                  <p style={{ margin: 0 }}>{story.text}</p>
                </div>
              </label>
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