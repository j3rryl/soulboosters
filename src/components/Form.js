import '../assets/scss/form.scss'
const Form = () => {
  return (
    <div className='contact-box'>
        <form>
            <h3>Contact Form</h3>
            <input type='text' className="input-field" placeholder='Your Name'/>
            <input type='email' className="input-field" placeholder='Your Email'/>
            <input type='text' className="input-field" placeholder='Subject'/>
            <textarea type='text' className="textarea-field" placeholder='Short Description'>

            </textarea><br></br>
            <button>Send Message</button>
        </form>
        
    </div>
  )
}

export default Form