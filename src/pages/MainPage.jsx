import React from "react";

const MainPage = () => {
  const painters = [
    "Đokaj Đeljoš",
    "Gjokaj Agron",
    "Kapllani Edin",
    "Prelvukaj Zake",
    "Rijevac Mašanovic Renata",
    "Kolja Berišaj",
  ];

  return (
    <div className="h-screen w-full flex items-center flex-col-reverse md:flex-row">
      <div className="w-full md:w-2/3 xl:w-1/2 h-1/2 md:h-full mx-auto duration-300 flex items-center">
        <div className="w-full md:w-2/3 xl:w-1/2 mx-auto">
          <h1 className="text-center text-3xl py-4">Albanski slikari</h1>
          <p className="text-xl text-center px-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
      <div className="w-full md:w-2/3 xl:w-1/2 h-1/2 md:h-full bg-cyan-600 flex items-center text-cyan-50">
        <div className="w-full md:w-2/3 xl:w-1/2 mx-auto duration-300">
          {painters.map((painter, index) => (
            <div key={index} className={`${index !== painters.length - 1 ? "border-b-2 border-cyan-50" : ""} leading-3 py-4 text-center`}>
              <p className="text-2xl">{painter}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
