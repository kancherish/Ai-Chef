import Header from "./components/Header"
import Content from "./components/Content/Content"
import Footer from "./components/Footer"


function App() {

  return (
    <>
      <div className="min-h-screen w-screen flex flex-col justify-between bg-[#FFF8E6] ">
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  )
}

export default App
