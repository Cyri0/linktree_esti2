import { useParams } from "react-router-dom"

const UserPage = () => {
  const {username, id} = useParams()

  return (
    <div>
        Ez itt {username ? username : "Anonymous"} lapja!

        {id && `Az id ${id}`}
    </div>
  )
}

export default UserPage