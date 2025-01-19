import Menu from "./menu/Menu"
import AllBody from "./body/AllBody"
import Footer from "./footer/Footer"

function Center() {

    return (
      <div className=" h-screen flex justify-center items-center">
        <div className="size-9/12">
          
          <div className="p-10">
            <Menu />
            <AllBody />
            <Footer />
          </div>
          
        </div>
        
      </div>

    )
  }
  
  export default Center
  