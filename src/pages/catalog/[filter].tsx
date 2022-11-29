import {useRouter} from 'next/router'

const Catalog = () => {

  const router = useRouter()
  const filters = router.asPath.split('/').pop()

  return (
    <>
      <div>
        Catalog {filters}
      </div>
    </>
  )
}

export default Catalog
