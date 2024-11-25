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

      <section
        className={`mt-12 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-${gridCols} gap-2`}
      >
        {data.images.map((image, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 rounded-lg shadow-lg overflow-hidden cursor-pointer"
            onClick={() => setSelectedImageIndex(index)}
          >
            <img
              src={image.image}
              alt={`Slika ${image.text} ${index + 1}`}
              className="w-full h-96 object-cover"
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
            className="fixed top-4 right-4 text-gray-50 cursor-pointer z-50"
            onClick={() => setSelectedImageIndex(null)}
          />
          <IoIosArrowBack
            size={48}
            className="absolute top-1/2 left-10 text-gray-50 cursor-pointer z-50"
            onClick={prevImage}
          />
          <IoIosArrowForward
            size={48}
            className="absolute top-1/2 right-10 text-gray-50 cursor-pointer z-50"
            onClick={nextImage}
          />
          <div className="relative w-full h-full flex items-center overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${selectedImageIndex * 100}%)`,
              }}
            >
              {data.images.map((image, index) => (
                <div
                  key={index}
                  className="relative w-full h-auto max-h-[90vh] flex-shrink-0"
                >
                  <img
                    src={image.image}
                    alt={`${data.title} ${index + 1} Fullscreen`}
                    className="object-contain w-full h-full"
                  />
                  <p className="absolute bottom-0 left-0 w-full mx-auto px-4 py-2 bg-black bg-opacity-90 text-gray-50 font-semibold text-center">
                    {image.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Painters;
