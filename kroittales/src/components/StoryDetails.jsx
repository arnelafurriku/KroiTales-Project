function StoryDetail({ storyText = "No story yet" }) {
  return (
    <article>
      <h2>Story Preview</h2>
      <p>{storyText}</p>
    </article>
  );
}
export default StoryDetail;