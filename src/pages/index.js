import React, { useState } from "react"
import { useQuery, useMutation, gql } from "@apollo/client"
import shortid from "shortid"

const GET_TODOS = gql`
  query {
    getTodos {
      done
      id
      title
    }
  }
`
const CREATE_TODO = gql`
  mutation createTodo($todo: TodoInput!) {
    addTodo(todo: $todo) {
      done
      id
      title
    }
  }
`

export default function Home() {
  const [title, setTitle] = useState("")
  const { data, loading } = useQuery(GET_TODOS)
  const [addTodo] = useMutation(CREATE_TODO)

  const handleSubmit = async () => {
    const todo = {
      id: shortid.generate(),
      title,
      done: false,
    }
    console.log("Creating Todo", todo)
    setTitle("")
    await addTodo({
      variables: {
        todo,
      },
      refetchQueries: [{ query: GET_TODOS }],
    })
  }

  console.log(data)

  return (
    <div style={{ textAlign: "center" }}>
      <h1>
        <u>Todo App</u>
      </h1>
      {loading && <h1>loading...</h1>}
      <label>
        Todo:
        <input
          value={title}
          onChange={({ target }) => {
            setTitle(target.value)
          }}
        />
      </label>
      <button onClick={handleSubmit}>Create Todo</button>
      <br />
      {!loading &&
        data &&
        data.getTodos.map(item => (
          <div key={item.id} style={{ marginLeft: "1rem", marginTop: "2rem" }}>
            <h2>
              {item.title} : {item.done ? "DONE" : "NOT COMPLETED"}
            </h2>
          </div>
        ))}
    </div>
  )
}
