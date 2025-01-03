import contact from '../../../image/contact.png';
const Contact = () => {
  return (
    <div className="mt-10">
      <div className="space-y-2 text-center px-5">
        <h2 className="text-2xl sm:text-4xl font-bold leading-tight">
          {`We’d Love to Hear From You!`}
        </h2>
        <div className="text-gray-600">
          {`Whether you have a question about our books, need support, or want
              to share your feedback, feel free to get in touch with us.`}
        </div>
      </div>
      <div className="grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-8 py-10 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32">
        <div className="flex flex-col items-center justify-center">
          <img src={contact} alt="" className="w-full object-cover" />
        </div>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="text-sm">
              Full name
            </label>
            <input
              id="name"
              type="text"
              className="w-full mt-2 border border-blue-500 p-3 rounded input-bordered"
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              id="email"
              type="email"
              className="border mt-2 border-blue-500 w-full p-3 rounded input-bordered"
            />
          </div>
          <div>
            <label htmlFor="message" className="text-sm">
              Message
            </label>
            <textarea
              id="message"
              rows="3"
              className="w-full mt-2 p-3 border border-blue-500 rounded input-bordered"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-violet-600 text-gray-50"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
