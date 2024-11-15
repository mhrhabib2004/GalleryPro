import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const TeamSection = () => {
  return (
    <div className="bg-gray-100 h-screen">
      <div className="py-10 max-w-screen-lg mx-auto">
        <div className="text-center mb-16">
          <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
            THE TEAM
          </p>
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Our<span className="text-indigo-600"> Team</span>
          </h3>
        </div>

        <div className="grid grid-cols-3 gap-10">
          <div className="text-center bg-white">
            <img
              className="w-full"
              src="https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
              alt="Mehdi Mohammadi"
            />
            <div className="p-4">
              <div className="text-md">
                <a
                  href="#"
                  className="hover:text-indigo-500 text-gray-900 font-semibold transition duration-500 ease-in-out"
                >
                  Mehdi Mohammadi
                </a>
                <p className="text-gray-500 uppercase text-sm">Web developer</p>
              </div>
              <div className="my-4 flex justify-center items-center">
                <a href="#">
                  <FaFacebook className="mr-3" size={18} />
                </a>
                <a href="#">
                  <FaTwitter className="mr-3" size={18} />
                </a>
                <a href="#">
                  <FaLinkedin className="mr-3" size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center bg-white">
            <img
              className="w-full"
              src="https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
              alt="Yahya R. Makarim"
            />
            <div className="p-4">
              <div className="text-md">
                <a
                  href="#"
                  className="hover:text-indigo-500 text-gray-900 font-semibold transition duration-500 ease-in-out"
                >
                  Yahya R. Makarim
                </a>
                <p className="text-gray-500 uppercase text-sm">President & CEO</p>
              </div>
              <div className="my-4 flex justify-center items-center">
                <a href="#">
                  <FaFacebook className="mr-3" size={18} />
                </a>
                <a href="#">
                  <FaTwitter className="mr-3" size={18} />
                </a>
                <a href="#">
                  <FaLinkedin className="mr-3" size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center bg-white">
            <img
              className="w-full"
              src="https://images.pexels.com/photos/2797374/pexels-photo-2797374.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
              alt="John Doe"
            />
            <div className="p-4">
              <div className="text-md">
                <a
                  href="#"
                  className="hover:text-indigo-500 text-gray-900 font-semibold transition duration-500 ease-in-out"
                >
                  John Doe
                </a>
                <p className="text-gray-500 uppercase text-sm">CTO</p>
              </div>
              <div className="my-4 flex justify-center items-center">
                <a href="#">
                  <FaFacebook className="mr-3" size={18} />
                </a>
                <a href="#">
                  <FaTwitter className="mr-3" size={18} />
                </a>
                <a href="#">
                  <FaLinkedin className="mr-3" size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
