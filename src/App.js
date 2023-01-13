function App() {
  const title = "Blog Post";
  const body = "This is a blog post";
  const comments = [
    { id: 1, text: "Comment one" },
    { id: 2, text: "Comment two" },
    { id: 3, text: "Comment three" },
  ];

  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{body}</p>
      <div className="comeents">
        <h3>Comments {comments.length}</h3>
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
