export default function Contact() {
  return (
    <div
      className="contact-section py-24 px-8 md:px-16 bg-primary-300 rounded-3xl max-w-5xl mx-auto"
      id="contact"
    >
      <div className="text-center mb-16">
        <div className="text-primary-900 text-lg mb-2 font-ibm-plex">
          Want to start a project?
        </div>
        <div className="text-4xl font-bold font-poppins text-primary-900">
          Let&apos;s Talk
        </div>
      </div>

      <div className="max-w-2xl mx-auto space-y-8">
        <div className="space-y-2">
          <div className="text-sm font-medium text-primary-900">Name</div>
          <div
            className="w-full p-4 bg-white/80 rounded-lg border border-primary-500/20 
            hover:border-primary-500 focus:border-primary-500 transition-colors 
            duration-200 outline-none min-h-[48px] cursor-text shadow-sm"
            role="textbox"
            tabIndex={0}
          ></div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium text-primary-900">Email</div>
          <div
            className="w-full p-4 bg-white/80 rounded-lg border border-primary-500/20 
            hover:border-primary-500 focus:border-primary-500 transition-colors 
            duration-200 outline-none min-h-[48px] cursor-text shadow-sm"
            role="textbox"
            tabIndex={0}
          ></div>
        </div>

        <div className="space-y-2">
          <div className="text-sm font-medium text-primary-900">Message</div>
          <div
            className="w-full p-4 bg-white/80 rounded-lg border border-primary-500/20 
            hover:border-primary-500 focus:border-primary-500 transition-colors 
            duration-200 outline-none min-h-[160px] cursor-text shadow-sm"
            role="textbox"
            tabIndex={0}
          ></div>
        </div>

        <div
          className="mt-8 py-4 px-8 bg-primary-500 text-white font-medium rounded-lg 
          hover:bg-primary-700 transition-colors duration-200 cursor-pointer text-center
          shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          role="button"
          tabIndex={0}
        >
          Send Message
        </div>
      </div>
    </div>
  );
}
