import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PostForm from '../components/PostForm.jsx'

// TODO (student): Implement create flow (POST /api/posts).
// Suggested steps:
// 1) Read form values in handleSubmit.
// 2) POST JSON body to /api/posts.
// 3) On success, navigate to /posts/:id.
// 4) Show an error message on failure.
function NewPostPage() {
  const navigate = useNavigate()
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError(null)

    // TODO (student): Implement this submit logic.
    try {
      // 1) Read the form values
      const { title, content, author } = Object.fromEntries(
        new FormData(e.target)
      )

      // 2) Send the POST request to the backend
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, content, author })
      })

      const post = await response.json()

      if (!response.ok) {
        throw new Error(post.error || 'Failed to create post')
      }

      // 3) Navigate to the newly created post
      navigate(`/posts/${post._id}`)

    } catch (error) {
      // 4) Show an error message if something goes wrong
      setError(error.message)
    } finally {
      setSubmitting(false)
    }
  }


  return (
    <div>
      <h1 className="page-title">New post</h1>
      {error && <p className="status-msg error">{error}</p>}
      <PostForm onSubmit={handleSubmit} submitting={submitting} />
    </div>
  )
}

export default NewPostPage
