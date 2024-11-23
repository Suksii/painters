

const Painters = ({data}) => {
  

  return (
    <>
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Đokaj Đeljoš
      </h1>
      <div className="space-y-8">
        {data.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-lg text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-2">
        {data.images.map((image, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={image.image}
              alt={`Slika Đokaj Đeljoš ${index + 1}`}
              className="w-full h-96 object-cover"
            />
            <div className="p-4">
              <p className="text-gray-50 text-sm font-semibold">{image.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Painters;
