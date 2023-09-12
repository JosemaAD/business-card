import MailLogo from '../assets/mail.png'
import LinkedinLogo from '../assets/linkedin.png'

function Buttons() {
      return (
        <div className="btn">
            <a className="mail-btn"><img className="mail-img" src={MailLogo} />Email</a>
            <a className="linkedin-btn"><img src={LinkedinLogo} />LinkedIn</a>
        </div>    
    )
  }
  
export default Buttons