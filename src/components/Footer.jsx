import Twitter from '../assets/Twitter Icon.png'
import Github from '../assets/Github Icon.png'

function Footer() {
      return (
        <div className="social">
            <a className=""><img src={Twitter} /></a>
            <a className=""><img src={Github} /></a>
        </div>    
    )
  }
  
export default Footer