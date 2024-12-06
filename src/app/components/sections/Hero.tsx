export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="h-screen w-full pt-5"
    >
      <div className="h-full w-full mx-auto flex flex-col items-center justify-center px-40 gap-20 bg-primary-300 rounded-t-lg">
        <div className="self-end">
          <h1 className="text-9xl text-right font-bold font-poppins">
            Hello
            <br />
            I&apos;m Pavel
          </h1>
        </div>
        <div className="max-w-lg self-start">
          <p className="text-lg font-ibm-plex">
            I am a front-end developer who aims at providing the best service
            possible as I am very cool.
          </p>
        </div>
      </div>
    </section>
  );
}
