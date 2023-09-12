import MailLogo from '../assets/mail.png'
import LinkedinLogo from '../assets/linkedin.png'

function Buttons() {
      return (
        <div className="btn">
            <a className="mail-btn" href="mailto:josemanuelarandadelgado@gmail.com"><img className="mail-img" src={MailLogo} />Email</a>
            <a className="linkedin-btn" href='https://www.linkedin.com/in/jose-manuel-aranda-delgado/'><img src={LinkedinLogo} />LinkedIn</a>
        </div>    
    )
  }
  
export default Buttons