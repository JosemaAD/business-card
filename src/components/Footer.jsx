import Twitter from '../assets/Twitter Icon.png'
import Github from '../assets/Github Icon.png'

function Footer() {
      return (
        <div className="social">
            <a className="" href='https://twitter.com/josemaAD'><img src={Twitter} /></a>
            <a className="" href='https://github.com/JosemaAD'><img src={Github} /></a>
        </div>    
    )
  }
  
export default Footer