
const About = () => {
  return (
    <section id="about" className="md:flex-row-reverse py-36 container flex flex-col-reverse items-center justify-between gap-8">
      <div className="md:text-left text-center">
        <h1 className=" title-primary mb-4">About me</h1>
        <p className="max-w-xl text-xl">
        I am a passionate and goal-oriented Frontend developer hailing from the beautiful country of Kazakhstan. My work is not just a job; it's a labor of love where I pour my creativity into crafting exceptional user experiences. With a firm grasp of popular technologies, I bring a dynamic and innovative approach to my projects.
        </p>
      </div>
      <img className="md:w-2/4 rounded-2xl" src="./img/laptop.jpg" alt="" />
    </section>
  )
}

export default About