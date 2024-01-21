import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = () => {


  const stack:string[] = [
    'javascript',
    'typescript',
    'react',
    'redux',
    'html',
    'css',
    'scss',
    'tailwindCss',
  ]

  return (
    <section id='home' className="container py-52 md:py-60">
      <img src="" alt="" />
      <div className="md:gap-4 flex flex-col">
        <h1 className="md:text-6xl text-2xl font-bold">Frontend developer</h1>
        <p className="md:text-2xl">Hi i am Ansar. A passionate frontend developer from Kazakhstan <span className="md:text-4xl">👋</span>.</p>
        <div className="flex items-center gap-2 md:gap-6 mb-6 mt-6">
          <a className='duration-500 scale-75 md:scale-100 md:hover:scale-125 hover:scale-90' href='https://github.com/zugzwanggg'><GitHubIcon style={{fontSize: '2rem'}}/></a>
          <a className='duration-500 scale-75 md:scale-100 md:hover:scale-125 hover:scale-90' href='https://www.linkedin.com/in/ansar-amankos-392b91286/'><LinkedInIcon style={{fontSize: '2.5rem'}}/></a>
          <a className='duration-500 scale-75 md:scale-100 md:hover:scale-125 hover:scale-90' href="https://hh.kz/resume/bb1a6000ff0c76f0fb0039ed1f547271736f74"><img className='w-9' src='./img/hh-logo.png'/></a>
        </div>
        
      </div>
      <div className="mt-16 flex items-center flex-col md:flex-row gap-4">
        <h1 className="font-semibold text-xl">Stack</h1>
        <hr className="border-neutral-900 bg-neutral-900 border-2 w-10 h-1 md:w-0 md:h-10 md:mr-8" />
        <ul className="flex gap-4">
        {stack.map(pic => {
          return <li key={pic}>
            <img className="relative w-10 duration-1000 hover:-top-4 md:w-14" src={`./img/${pic}.svg`} alt={`${pic}`} />
          </li>
        })}
      </ul>
      </div>
    </section>
  )
}

export default Home