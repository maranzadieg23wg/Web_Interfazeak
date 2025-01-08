import Menu from "./menu/Menu"
import Body from "./body/Body"
import Footer from "./footer/Footer"

function Center() {

    return (
      <div className=" h-screen flex justify-center items-center">
        <div className="bg-blue-200 size-9/12">
          <Menu />
          <Body />
          <Footer />
        </div>
        
      </div>

    )
  }
  
  export default Center
  