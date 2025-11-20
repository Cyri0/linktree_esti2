import type { FormEvent } from "react"

const CreateNewLink = () => {

  const sendData = (event: FormEvent) => {
    event.preventDefault()
    // TODO
  }

  return (
    <form onSubmit={sendData}>
        <label>Cím:
            <input type="text"/>
        </label>
        <label>URL:
            <input type="url"/>
        </label>
        <button type="submit">Kattints!</button>
    </form>
  )
}

export default CreateNewLink