import React from "react";
import GjokajAgron from "../assets/GjokajAgron.jpg";
import {
  FaCommentDots,
  FaGlobe,
  FaLightbulb,
  FaPalette,
  FaUsers,
} from "react-icons/fa6";

const MainPage = () => {
  const paragraphs = [
    "U Crnoj Gori postoji nekoliko mladih albanskih slikara koji se ističu svojim radovima i doprinosom savremenoj umjetnosti. Njihovi radovi često reflektuju kulturne i društvene teme, a neki od njih izlažu na lokalnim i međunarodnim izložbama.",
    "Mladi umjetnici često sarađuju sa različitim umjetničkim kolektivima i učestvuju na radionicama, što im omogućava da se povežu sa širim okruženjem i razmjenjuju ideje. U Crnoj Gori postoji i nekoliko umjetničkih manifestacija i festivala koji promovišu rad mladih umjetnika, a neki od njih su i međunarodni, što dodatno doprinosi vidljivosti albanskih umjetnika iz ovog regiona. U daljim tesktovima izdvojićemo najperspektivnije mlade albanske sliakre za koje smatramo da nisu u dovoljnoj mjeri afirmisani kroz razne digitalne platforme, štampane medije kao I kroz televizijske emisije.",
    " Jedan od poznatijih mladih umetnika je Fatmir Hoxha, čiji radovi često kombinuju tradicionalne elemente sa modernim tehnikama. Takođe, umjetnici kao što su Ilir Bojku i Arben Hoxha istražuju identitet i svakodnevne živote kroz svoje slike. Pored Fatmira Hoxhe, Ilira Bojku i Arbena Hoxhe, u Crnoj Gori se može primijetiti i rad drugih mladih albanskih umjetnika koji se bave različitim formama vizuelne umjetnosti.",
    "Na primjer, Ema Muriqi je mlada slikarka koja istražuje teme identiteta i pripadnosti kroz svoje slike, često koristeći vibrantne boje i simboliku. Njen rad je često izložen u lokalnim galerijama i učestvuje na grupnim izložbama.",
    "Takođe, Driton Tola se bavi savremenim pristupima slikarstvu i često koristi različite medije, uključujući instalacije i performanse, što doprinosi dinamičnom umjetničkom pejzažu.",
    "Mladi umjetnici često sarađuju sa različitim umetničkim kolektivima i učestvuju na radionicama, što im omogućava da se povežu sa širim okruženjem i razmenjuju ideje. U Crnoj Gori postoji i nekoliko umetničkih manifestacija i festivala koji promovišu rad mladih umetnika, a neki od njih su i međunarodni, što dodatno doprinosi vidljivosti albanskih umetnika iz ovog regiona. U nastavku slijedete detaljniji podaci o izabranim umjetnicima kao I njihova djela koja dominiraju a gdje je ujedno I izvršena selekcija najboljih radova. ",
  ];

  const prominentValues = {
    title: "Istaknute vrijednosti kod albanskih umjetnika",
    intro:
      "Vrijednost umjetnika slikara albanske nacionalnosti može se sagledati iz više perspektiva. Njihov doprinos umjetnosti često obuhvata:",
    list: [
      {
        title: "Kulturni identitet",
        description:
          "Mnogi albanski umjetnici koriste svoje radove kako bi istraživali i izražavali teme identiteta, tradicije i kulturnog nasljeđa. Kroz svoje slike, oni otvaraju dijalog o kulturi i identitetu, što može obogatiti širu umjetničku scenu.",
      },
      {
        title: "Savremeni pristupi",
        description:
          "Mnogi mladi albanski umjetnici usvajaju moderne tehnike i stilove, što doprinosi inovaciji unutar savremene umjetnosti. Njihova sposobnost kombinovanja tradicionalnih i modernih elemenata čini njihove radove jedinstvenima i relevantnima.",
      },
      {
        title: "Društveni komentari",
        description:
          "Umjetnici često koriste svoje radove da komentarišu društvene i političke teme, posebno one koje su relevantne za albansku zajednicu. Ovi radovi mogu poslužiti kao sredstvo za podizanje svijesti o važnim pitanjima.",
      },
      {
        title: "Izložbe i međunarodna prisutnost",
        description:
          "Mnogi albanski umjetnici izlažu na domaćim i međunarodnim izložbama, čime stiču reputaciju i prepoznatljivost u širem umjetničkom kontekstu. Učešće na umjetničkim manifestacijama omogućava im da predstavljaju svoju kulturu i doprinose globalnom dijalogu o umjetnosti.",
      },
      {
        title: "Inspiracija za mlade generacije",
        description:
          "Kroz svoj rad i uspjehe, ovi umjetnici postaju inspiracija mladim talentima, potičući ih da istražuju svoje vlastite kreativne puteve. Sve ove dimenzije doprinose sve većoj vrijednosti i prepoznatljivosti albanskih slikara u savremenom umjetničkom svijetu.",
      },
    ],
    textEditor: "Amina Drešević",
    publishedAt: "12. septembar 2024.",
  };

  const iconMap = {
    "Kulturni identitet": <FaPalette className="text-4xl text-indigo-600" />,
    "Savremeni pristupi": <FaLightbulb className="text-4xl text-yellow-500" />,
    "Društveni komentari": <FaCommentDots className="text-4xl text-red-500" />,
    "Izložbe i međunarodna prisutnost": (
      <FaGlobe className="text-4xl text-green-500" />
    ),
    "Inspiracija za mlade generacije": (
      <FaUsers className="text-4xl text-blue-500" />
    ),
  };

  return (
    <>
      <h1 className="text-center text-4xl font-bold mb-8 text-gray-800 underline decoration-indigo-500">
        Albanski slikari
      </h1>

      <section className="flex flex-col-reverse xl:flex-row items-center mb-8 gap-6">
        <img
          src={GjokajAgron}
          alt="Gjokaj Agron"
          className="w-full xl:w-1/2 h-72 object-cover rounded-lg shadow-md"
        />
        <div className="flex flex-col gap-4 w-full">
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            {paragraphs[0]}
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            {paragraphs[1]}
          </p>
        </div>
      </section>

      <section className="space-y-6">
        {paragraphs.slice(2).map((paragraph, index) => (
          <p
            key={index}
            className="text-lg md:text-xl leading-relaxed text-gray-700"
          >
            {paragraph}
          </p>
        ))}
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8 text-center">
          {prominentValues.title}
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed w-42 pb-8">
          {prominentValues.intro}
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {prominentValues.list.map((item, index) => (
            <div key={index} className="p-6 rounded-xl shadow-xl">
              <div className="flex items-center gap-4 mb-4">
                {iconMap[item.title]}
                <h3 className="text-2xl font-bold text-gray-800">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col leading-5 text-gray-800 pt-3">
          <h3 className="flex gap-2 justify-end items-end">
            Urednik teksta:
            <span className="font-semibold">{prominentValues.textEditor}</span>
          </h3>
          <h3 className="leading-5 flex gap-2 justify-end items-end">
            Objavljeno:
            <span className="font-semibold">{prominentValues.publishedAt}</span>
          </h3>
        </div>
      </section>
    </>
  );
};

export default MainPage;
