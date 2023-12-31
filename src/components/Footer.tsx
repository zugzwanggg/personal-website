import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const Footer = () => {
  return (
    <footer className="bg-slate-600 py-12 text-white">
      <div className="container">
        <div className="flex items-center justify-center gap-6 mb-6">
          <a className='duration-500 hover:scale-125' href='https://github.com/zugzwanggg'><GitHubIcon style={{fontSize: '2rem'}}/></a>
          <a className='duration-500 hover:scale-125' href='https://www.linkedin.com/in/ansar-amankos-392b91286/'><LinkedInIcon style={{fontSize: '2.5rem'}}/></a>
          <a className='duration-500 hover:scale-125' href="https://hh.kz/resume/bb1a6000ff0c76f0fb0039ed1f547271736f74"><img className='w-9' src='./img/hh-logo-white.png'/></a>
        </div>
        <p className="text-center">Copyright ©2023 All rights reserved </p>
      </div>
    </footer>
  )
}
