export default function About() {
  return (
    <section
      className="min-h-screen w-full flex items-center justify-center px-4 md:px-10 lg:px-20 text-white bg-primary-900"
      id="about"
    >
      <div className="max-w-7xl w-full flex flex-col gap-16 py-20">
        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
          <div className="w-full md:w-1/4 lg:w-1/5">
            <h3 className="text-2xl font-semibold mb-4 md:mb-0">About me</h3>
          </div>
          <div className="w-full md:w-3/4 lg:w-4/5 min-h-[50vh] flex items-center">
            <p className="text-2xl md:text-3xl lg:text-4xl leading-relaxed">
              A front-end developer always eager for new challenges. <br />
              <br />
              I specialize in crafting engaging and user-friendly web
              experiences that bring ideas to life.
              <br />
              <br />
              When I&apos;m not coding web projects, you&apos;ll find me diving
              into the world of video games —designing, developing, and
              exploring the creative possibilities of interactive entertainment.
              <br />
              <br />
              Whether it&apos;s perfecting the user experience or building
              captivating game mechanics, I love solving problems and
              experimenting with new ideas. Let&apos;s create something amazing
              together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
