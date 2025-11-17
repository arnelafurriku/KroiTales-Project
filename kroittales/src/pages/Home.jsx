import { useState, useEffect } from "react";
import Builder from "../components/Builder.jsx";
import Library from "../components/Library.jsx";
import { characters, sidekicks, settings, actions } from "../data/stories.js";

function buildStory({ character, sidekick, setting, action, notes }) {
  if (!character || !sidekick || !setting || !action) return "";

  const intro = `Once upon a time, in a ${setting}, ${character} was getting ready to ${action}.`;
  const meetSidekick = `${character} wasn't alone. Their best friend, ${sidekick}, was right there, ready to help with every brave step.`;
  const middle = `Together, ${character} and ${sidekick} explored the ${setting}, noticing tiny details that most people never see—sparkling lights, funny shadows, and secret paths that only show up if you really believe in them.`;
  const challenge = `On their way, they faced a little challenge, but instead of giving up, they remembered to be kind, patient, and to listen to each other. That made them even stronger as a team.`;
  const ending = `By the time the stars were blinking sleepily in the sky, ${character} and ${sidekick} had finished their adventure to ${action}, and they felt proud, cozy, and ready for a good night's sleep.`;

  const paragraphs = [intro, meetSidekick, middle, challenge, ending];

  if (notes && notes.trim()) {
    paragraphs.push(`Grown-up note: ${notes.trim()}`);
  }
  return paragraphs.join("\n\n");
}
const INITIAL_BUILDER_STATE = {
  character: "",
  sidekick: "",
  setting: "",
  action: "",
  notes: "",
  title: "",
};

function Home() {

  const [builderState, setBuilderState] = useState(INITIAL_BUILDER_STATE);
  const [storyText, setStoryText] = useState("");
  const [savedStories, setSavedStories] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem("kroiTalesStories");
      if (stored) {
        setSavedStories(JSON.parse(stored));
      }
    } catch {
      // helps start with an empty list
    }
  }, []);

  useEffect(() => {
    try {
      window.localStorage.setItem(
        "kroiTalesStories",
        JSON.stringify(savedStories)
      );
    } catch {
      // helps start with an empty list
    }
  }, [savedStories]);

  function handleFieldChange(field, value) {
    setBuilderState(prev => ({
      ...prev,
      [field]: value,
    }));
  }

  function handleGenerateStory() {
    const text = buildStory(builderState);
    if (!text) {
      alert("Please pick a character, sidekick, setting and action first.");
      return;
    }
    setStoryText(text);
  }

  function handleSaveStory() {

    let text = storyText.trim();


    if (!text) {
      const generated = buildStory(builderState);
      if (!generated) {
        alert("Please pick a character, sidekick, setting and action before saving.");
        return;
      }
      text = generated;
      setStoryText(generated);
    }

    const title = builderState.title.trim() || "Untitled story";

    const newStory = {
      id: Date.now().toString(),
      title,
      text,
      notes: builderState.notes.trim(),
    };

    setSavedStories(prev => [newStory, ...prev]);

    setBuilderState(() => ({ ...INITIAL_BUILDER_STATE }));
    setStoryText("");
  }

  function handleToggleStorySelect(id) {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  }

  function handleDeleteSelectedStories() {
    if (selectedIds.length === 0) return;

    setSavedStories(prev =>
      prev.filter(story => !selectedIds.includes(story.id))
    );
    setSelectedIds([]);
  }

  return (
    <section className="container">
      <header className="home-header">
        <h2 className="home-title">Hey Kiddo, Let’s Build Your Story Together!</h2>
      </header>

      <div className="builder-grid">
        <Builder
          builderState={builderState}
          storyText={storyText}
          onFieldChange={handleFieldChange}
          onGenerate={handleGenerateStory}
          onSaveStory={handleSaveStory}
          characters={characters}
          sidekicks={sidekicks}
          settings={settings}
          actions={actions}
        />
      </div>

      <Library
        stories={savedStories}
        selectedIds={selectedIds}
        onToggleSelect={handleToggleStorySelect}
        onDeleteSelected={handleDeleteSelectedStories}
      />
    </section>
  );
}

export default Home;