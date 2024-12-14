import Logo from "/AiChefLogo.png"

function Header() {
  return (
    <header className="max-h-[25vh] flex justify-center items-center shadow-[0_20px_50px_rgba(8,_00,_00,_0.7)] rounded-b-md ">
      <img src={Logo} alt="" className="max-h-[20vh]" />
      <div className="flex flex-col">
        <h1 className="text-[3rem] font-[Alumni]">AiChef</h1>
        <span className="font-[Alumni]">
          CONVERT YOUR LIST OF RANDOM INDEGREDIENTS INTO TASTY RECIPE
        </span>
      </div>
    </header>
  )
}

export default Header

