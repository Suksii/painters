import { IoClose } from "react-icons/io5";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useRef, useState } from "react";

const FullscreenImage = ({
  selectedImageIndex,
  setSelectedImageIndex,
  data,
}) => {
  const [dragStart, setDragStart] = useState(null);
  const containerRef = useRef(null);

  const handleMouseDown = (e) => {
    setDragStart(e.clientX);
  };
  const handleMouseUp = (e) => {
    if (!dragStart) return;

    const dragEnd = e.clientX;
    const dragDistance = dragStart - dragEnd;

    if (dragDistance > 50 && selectedImageIndex < data.images.length - 1) {
      nextImage();
    } else if (dragDistance < -50 && selectedImageIndex > 0) {
      prevImage();
    }
    setDragStart(null);
  };

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
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black z-50 flex justify-center items-center overflow-hidden">
          <IoClose
            size={32}
            className="fixed top-0 right-0 m-4 text-gray-50 cursor-pointer z-50 hover:text-gray-400 duration-200"
            onClick={() => setSelectedImageIndex(null)}
          />
          <IoIosArrowForward
            size={38}
            className="absolute top-1/2 -translate-y-1/2 right-2 md:right-10 z-50 text-gray-50 cursor-pointer hover:text-gray-400 duration-200"
            onClick={nextImage}
          />
          <IoIosArrowBack
            size={38}
            className="absolute top-1/2 -translate-y-1/2 left-2 md:left-10 z-50 text-gray-50 cursor-pointer hover:text-gray-400 duration-200"
            onClick={prevImage}
          />
          <div className="relative w-full h-full flex items-center overflow-hidden">
            <div
              className="absolute inset-0 z-40"
              ref={containerRef}
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={() => setDragStart(null)}
            />
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
    </>
  );
};

export default FullscreenImage;
