import { Card } from "../components/card"
import { Carousel } from "../components/carousel"

const Home = () => {
  return (
    <>
      <section className="my-10">
        <Carousel className={'col-span-2'} />
      </section>
      <h1 className="font-bold text-xl text-yellow-500 text-center">  Destaques  </h1>
      <section className="flex flex-col">
        <Card />
      </section>
      <br /><br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    </>
  )
}

export default Home
