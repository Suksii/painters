const Painters = ({ data, gridCols }) => {
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
              alt={`Slika Đokaj Đeljoš ${index + 1}`}
              className="w-full h-96 object-cover text-gray-50"
            />
            <div className="p-4">
              <p className="text-gray-50 text-sm font-semibold">{image.text}</p>
            </div>
          </div>
        ))}
      </section>
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
