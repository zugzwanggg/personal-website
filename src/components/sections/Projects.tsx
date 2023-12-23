import GitHubIcon from '@mui/icons-material/GitHub';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

interface IProject {
  name: string,
  link: string,
  img: string,
  description: string,
  stack: string[],
  github: string
}

const Projects = () => {

  const projectArray:IProject[] = [
    {
      name: 'Movie App',
      link: 'https://movie-app-tan-five.vercel.app/',
      img: 'movie-app.png',
      description: `The Movie App web application designed to 
      provide users with a streamlined experience for discovering
      and exploring movies. Users can search for movies,
      view details such as release date and rate, and save
      their favorite movies to a bookmark if they are logged
      in`,
      stack: [
        'ReactJS',
        'Scss'
      ],
      github: 'https://github.com/zugzwanggg/movie-app'
    },
    {
      name: 'Bookstore App',
      link: 'https://bookstore-app-six.vercel.app/',
      img: 'bookstore-app.png',
      description: `Bookstore app is a web application created using 
      React with TypeScript and styled with Tailwind CSS. It is designed to 
      offer users a seamless and efficient experience for discovering and exploring books. 
      Users can utilize the app to search for books, and put their favorite books into cart. `,
      stack: [
        'ReactTS',
        'TailwindCSS'
      ],
      github: 'https://github.com/zugzwanggg/bookstore-app'
    },
  ]

  return (
    <section id="projects" className="container py-40">
      <h1 className="title-primary mb-16">Projects</h1>
      <ul className="flex flex-col items-center gap-24">
        {
          projectArray.map((item,index) => {
            if (index % 2) {
              return <li key={item.name} className="md:flex-row-reverse flex items-center p-6 flex-col justify-between gap-6 shadow-neutral-400 shadow-default rounded-lg w-full">
              <a href={`${item.link}`}>
                <img className="md:max-w-1/2 shadow-xl w-screen rounded-md" src={`./img/${item.img}`} alt="" />
              </a>
              <div className="flex flex-col justify-center items-center gap gap-4 text-center">
                <h1 className="font-bold text-xl uppercase">{item.name}</h1>
                <p className='max-w-2xl text-left'>{item.description}</p>
                <ul className="flex items-center gap-4">
                  {item.stack.map(stack =>  <li key={stack} className="p-2 border-2 shadow-default shadow-neutral-100 rounded font-bold text-lg">{stack}</li>)}
                </ul>
                <div className="flex items-center gap-6 mt-4">
                  <a className='hover:text-slate-300 text-xl' href={`${item.github}`}>Code <GitHubIcon/></a>
                  <a className='hover:text-slate-300 text-xl' href={`${item.link}`}>Visit <ExitToAppIcon/></a>
                </div>
              </div>
            </li>
            } else {
              return <li key={item.name} className="md:flex-row flex items-center p-6 flex-col justify-between gap-6 shadow-neutral-400 shadow-default rounded-lg w-full">
            <a href={`${item.link}`}>
              <img className="md:max-w-1/2 shadow-xl w-screen rounded-md" src={`./img/${item.img}`} alt="" />
            </a>
            <div className="flex flex-col justify-center items-center gap gap-4 text-center">
              <h1 className="font-bold text-xl uppercase">{item.name}</h1>
              <p className='max-w-2xl text-left'>{item.description}</p>
              <ul className="flex items-center gap-4">
                {item.stack.map(stack =>  <li key={stack} className="p-2 border-2 shadow-default shadow-neutral-100 rounded font-bold text-lg">{stack}</li>)}
              </ul>
              <div className="flex items-center gap-6 mt-4">
                <a className='hover:text-slate-300 text-xl' href={`${item.github}`}>Code <GitHubIcon/></a>
                <a className='hover:text-slate-300 text-xl' href={`${item.link}`}>Visit <ExitToAppIcon/></a>
              </div>
            </div>
          </li>
            }
          })
        }
      </ul>
    </section>
  )
}

export default Projects