import { useState } from "react"

export default function App() {

  const [autor, setAutor] = useState("")
  const [content, setContent] = useState("")
  const [comments, setComments] = useState([])

  const handleSubmit = (ev) => {
    ev.preventDefault()

    const newComment =  {
      id: Math.floor(Math.random() * 1000000),
      autor: autor,
      content: content,
      createdAt: new Date()

    }

    setComments((state) => [newComment, ...state])
    setAutor("")
    setContent("")
  }
  return(
    <div id="app " className="container">
      <h2>Comentar:</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="text">Email:</label>
        <input 
        type="email" 
        id="email" 
        required
        value={autor}
        onChange={(ev) => setAutor(ev.target.value)}
        />
        <label htmlFor="text">Comentário:</label>
        <textarea 
        id="comment" 
        cols="30" 
        rows="10"
        required
        value={content}
        onChange={(ev) => setContent(ev.target.value)}
        ></textarea>
        <div className="btn">
          <button type="submit">Enviar Comentário</button>
        </div>
      </form>

      <hr />
      
      <section id="comments">
        
        {comments.length > 0
         ? (
          comments.map((comment) => (
            <div key={comment.id}>
              <h3>{comment.autor}</h3>
              <span>Em {comment.createdAt.toLocaleString()}</span>
              <p>{comment.content}</p>

            </div>
          ))
        ) : (
          <p>Seja o primeiro a comentar: </p>
        )}
      </section>      
    </div>
  )
}
