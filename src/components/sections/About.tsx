
const About = () => {
  return (
    <section id="about" className="md:flex-row-reverse py-40 container flex flex-col-reverse items-center justify-between gap-8">
      <div className="md:text-left text-center">
        <h1 className=" title-primary mb-4">About me</h1>
        <p className="max-w-xl text-xl">
        A dedicated and committed student and emerging front-end developer, widely acknowledged for crafting web applications that seamlessly blend creativity and functionality. The focus is firmly on continuous learning and professional growth, reflecting not only proficiency but also an unwavering dedication to consistently delivering exceptional web experiences, pushing the boundaries of what is possible in the digital world.
        </p>
      </div>
      <img className="md:w-2/4 rounded-2xl" src="./img/laptop.jpg" alt="" />
    </section>
  )
}

export default About