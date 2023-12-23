import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

const Contact = () => {

  const [userName,setUserName] = useState('')
  const [userEmail,setUserEmail] = useState('')
  const [userMessage,setUserMessage] = useState('')
  const [isError,setIsError] = useState(false)

  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (userName.length == 0 || userMessage.length == 0 || userEmail.length == 0) {
      return setIsError(true)
    } else {
      setIsError(false)
    }

    emailjs.sendForm('service_uryedph', 'template_f3mlrrq', form.current as HTMLFormElement, '9JlGGaPHMsSbScIQN')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
    setUserName('')
    setUserEmail('')
    setUserMessage('')
  }

  return (
    <section id='contact' className="container py-48">
      <h1 className="title-primary mb-12">Contact me</h1>
      <div className="flex items-center justify-center md:justify-between gap-4">
        <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-6 w-full md:w-1/2">
          {isError ? <small className='text-center text-white p-2 bg-red-600'>Please enter valid values</small> : ''}
          <input 
          className="outline-none py-2 px-4 border-solid border-slate-500 border-2 rounded" 
          onChange={(e)=>setUserName(e.target.value)} placeholder="Name" name='name' type="text" value={userName}/>
          <input 
          className="outline-none py-2 px-4 border-solid border-slate-500 border-2 rounded" 
          onChange={(e)=>setUserEmail(e.target.value)} placeholder="email@example.com" name='email' type="email" value={userEmail}/>
          <textarea 
          className="resize-none outline-none h-36 py-2 px-4 border-solid border-slate-500 border-2 rounded" 
          onChange={(e)=>setUserMessage(e.target.value)} placeholder="Message" name='message' value={userMessage}></textarea>
          <button className="mt-6 py-4 px-6 bg-slate-600 text-white duration-300 hover:bg-slate-400 rounded">Send</button>
        </form>
        <img className="md:block hidden w-1/2" src="./img/contact-img.svg" alt="" />
      </div>
    </section>
  )
}

export default Contact