 function StoryList({ items = [] }) {
  return items.map(item => (
    <option key={item} value={item}>{item}</option>
  ));
}
export default StoryList;