import about from "../../../image/about.png";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto my-16 px-4 xl:px-0">
      {/* overall container  */}
      <div className="flex flex-col md:flex-row justify-center items-start gap-5 lg:gap-8">
        {/* card info  */}
        <div className="md:w-1/2 card divide-y-2 divide-dashed border-t-2 shadow-violet-200 border-violet-500 p-8 bg- shadow-xl bg-opacity-40 rounded-2xl">
          <div>
            <h1 className="text-3xl text-center md:text-start text-blue-500 font-semibold mb-5">
              Your Gateway to the World of Books
            </h1>
          </div>
          <div>
            <p className="indent-8 pt-5">
              <span className="text-lg font-bold">At NovelNexus</span>
              {`, we believe in the power of storytelling to
            inspire, educate, and entertain. Whether you're a casual reader or a
            passionate book lover, our carefully curated selection of books
            offers something for everyone.`}
            </p>
            <p className="mt-5 indent-8">
              Our mission is simple: to connect readers with the books they’ll
              love. We strive to provide a seamless experience, making it easy
              to discover new authors, explore different genres, and find your
              next favorite read. With a user-friendly platform, insightful
              reviews, and personalized recommendations, we aim to make every
              reading journey memorable.
            </p>
            <p className="mt-5 indent-8">
              Founded by a team of avid readers and literary enthusiasts,
              NovelNexus is committed to fostering a vibrant community of book
              lovers. We not only offer books for purchase but also engage with
              our audience through author interviews, book clubs, and reading
              events to help cultivate a deeper connection with literature.
            </p>
            <p className="mt-5 indent-8">
              Thank you for choosing us as your trusted source for all things
              books. We’re here to help you discover new worlds, one page at a
              time.
            </p>
          </div>
        </div>
        {/* image and stats  */}
        <div className="md:w-1/2">
          {/* image  */}
          <div className="mb-6 bg-gray-200 bg-opacity-30 rounded-2xl">
            <img
              className="w-full object-cover border rounded-2xl"
              src={about}
              alt="about-image"
            />
          </div>
          {/* stats  */}
          <div className="card shadow-xl border shadow-violet-200 grid grid-cols-1 p-5 sm:grid-cols-2 gap-5">
            {/* years  */}
            <div className="flex px-6 flex-col py-5 bg-gray-300 bg-opacity-20 rounded-2xl justify-center items-start space-y-2">
              <h1 className="text-2xl sm:text-4xl font-bold">5</h1>
              <p>Years of Experience</p>
            </div>
            {/* events  */}
            <div className="flex px-6 flex-col py-5 bg-gray-300 bg-opacity-20 rounded-2xl justify-center items-start space-y-2">
              <h1 className="text-2xl sm:text-4xl font-bold">8</h1>
              <p>Successful Events</p>
            </div>
            {/* reviews  */}
            <div className="flex px-6 flex-col py-5 bg-gray-300 bg-opacity-20 rounded-2xl justify-center items-start space-y-2">
              <h1 className="text-2xl sm:text-4xl font-bold">10.5k+</h1>
              <p>Positive Reviews</p>
            </div>
            {/* trusted readers  */}
            <div className="flex px-6 flex-col py-5 bg-gray-300 bg-opacity-20 rounded-2xl justify-center items-start space-y-2">
              <h1 className="text-2xl sm:text-4xl font-bold">200K</h1>
              <p>Trusted Readers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
