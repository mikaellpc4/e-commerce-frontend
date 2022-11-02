import { useParams } from "react-router-dom"

const Catalog = () => {

  const { filters } = useParams()

  return (
    <>
      <div>
        Catalog {filters}
      </div>
    </>
  )
}

export default Catalog
