import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Painters = ({ data, gridCols }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % data.images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? data.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        {data.title}
      </h1>
      <section className="space-y-8">
        {data.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-lg text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </section>
      {data.rewards && data.rewards.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Nagrade</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {data.rewards.map((reward, index) => (
              <li key={index} className="text-lg">
                {reward}
              </li>
            ))}
          </ul>
        </section>
      )}
      <section
        className={`mt-12 grid grid-cols-1 lg:grid-cols-2 xl:${gridCols} gap-2`}
      >
        {data.images.map((image, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={image.image}
              alt={`${image.text} ${index + 1}`}
              className="w-full h-96 object-cover text-gray-50 cursor-pointer"
              onClick={() => setSelectedImageIndex(index)}
            />
            <div className="p-4">
              <p className="text-gray-50 text-sm font-semibold">{image.text}</p>
            </div>
          </div>
        ))}
      </section>
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black z-50 flex justify-center items-center overflow-hidden">
          <IoClose
            size={32}
            className="fixed top-0 right-0 m-4 text-gray-50 cursor-pointer z-50 hover:text-gray-400 duration-200"
            onClick={() => setSelectedImageIndex(null)}
          />
          <IoIosArrowForward
            size={38}
            className="absolute top-1/2 -translate-y-1/2 right-10 z-50 text-gray-50 cursor-pointer hover:text-gray-400 duration-200"
            onClick={nextImage}
          />
          <IoIosArrowBack
            size={38}
            className="absolute top-1/2 -translate-y-1/2 left-10 z-50 text-gray-50 cursor-pointer hover:text-gray-400 duration-200"
            onClick={prevImage}
          />
          <div className="relative w-full h-full flex items-center overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${selectedImageIndex * 100}%)` }}
            >
              {data.images.map((image, imageIndex) => (
                <div
                  className="w-full h-auto max-h-[90vh] text-gray-50 flex-shrink-0"
                  key={imageIndex}
                >
                  <img
                    src={image.image}
                    alt={`${image.text} ${selectedImageIndex + 1} Fullscreen`}
                    className="w-full h-full object-contain flex-shrink-0"
                    style={{ width: "100vw" }}
                  />
                  <div className="w-full absolute bottom-0 flex justify-center items-center text-center bg-black bg-opacity-70 text-gray-50 font-semibold">
                    {image.text}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <section className="mt-12">
        {data.criticism.map((critique, index) => (
          <div
            key={index}
            className="p-6 border border-gray-300 rounded-lg shadow-md relative"
          >
            <div className="absolute inset-y-0 left-0 w-1.5 bg-gray-800 rounded-l-lg"></div>
            <h3 className="text-2xl font-semibold text-gray-900 underline decoration-gray-400 mb-4">
              {critique.title}
            </h3>
            <p className="text-gray-700 leading-relaxed italic text-xl">
              {critique.description}
            </p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Painters;
