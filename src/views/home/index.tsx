import About from "@/components/about"
import CardA from "@/components/cardA"
import CardB from "@/components/cardB"
import Divding from "@/components/dividing"
import Wapper from "@/components/wapper"

const Home = () => {
  return   <main className="body">
  <Wapper></Wapper>
  <Divding id="WHO"></Divding>
  <About></About>
  <Divding id="TOK"></Divding>
  <CardA></CardA>
  <Divding id="STATS"></Divding>
  <CardB></CardB>
  <Divding id="STATS"></Divding>
</main>
}

export default Home
