

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
    <section className="container my-52 md:my-80">
      <img src="" alt="" />
      <div className="md:gap-4 flex flex-col">
        <h1 className="md:text-6xl text-2xl font-bold">Frontend developer</h1>
        <p className="md:text-2xl">Hi i am Ansar. A passionate frontend developer from Kazakhstan <span className="md:text-4xl">👋</span>.</p>
      </div>
      <div className="mt-16 flex items-center flex-col md:flex-row gap-4">
        <h1 className="font-semibold text-xl">Stack</h1>
        <hr className="border-neutral-900 bg-neutral-900 border-2 w-10 h-1 md:w-0 md:h-10 md:mr-8" />
        <ul className="flex gap-4">
        {stack.map(pic => {
          return <li key={pic}>
            <img className="relative w-10 transition -z-10 hover:-top-2 md:w-14" src={`./img/${pic}.svg`} alt={`${pic}`} />
          </li>
        })}
      </ul>
      </div>
    </section>
  )
}

export default Home