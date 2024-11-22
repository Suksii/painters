import DjokajDjeljos1 from "../assets/Đokaj Đeljoš.jpg";
import DjokajDjeljos2 from "../assets/Đokaj Đeljoš1.jpg";
import DjokajDjeljos3 from "../assets/Đokaj Đeljoš2.jpg";
import DjokajDjeljos4 from "../assets/Đokaj Đeljoš3.jpg";

const Painters = () => {
  const DjokajDjeljos = {
    paragraphs: [
      "Đokaj Đeljoš (Gjokaj Gjelosh) je roden 1933. godine u selu Milješ, nadomak Podgorice. Nakon rata 1946. godine, sa porodicom napušta Crnu Goru i odlazi u Zmajevo, u Vojvodini. Bez završene srednje škole, kao poseban talenat, u Beogradu upisuje Akademiju likovnih umetnosti, Odsjek slikarstvo, u klasi profesora Mila Milunovića, Stojana Celiča i Mladena Srbinovića. Diplomirao je 1963. godine u klasi profesora Boška Karanovića. Magistrirao je specijalni tečaj za grafiku 1966. godine na istoj akademiji.",
      "U periodu 1964/68. radi kao profesor umjetnosti/šef katedre na Višoj pedagoškoj školi u Prištini, gdje je bio i jedan od inicijatora osnivanja Fakulteta umjetnosti. Nastanjuje se u Rimu 1969.godine i intenzivno izlaže u više italijanskih gradova. Izložbe su naišle na pozitivne ocjene i komentare italijanskih likovnih kritičara. Privukao ih je njegov autentični likovni izraz - „nova metafizika'' inspirisana specifičnim kulturno-istorijskim nasljeđem rodnog kraja i balkanskog prostora.",
      "U Rimu je otvorio grafičku radionicu koja je bila cijenjena po visokom kvalitetu štampe. Na vrhuncu slave, 1983/84. odlazi iz Rima i nastanjuje se u Augzburgu, u Njemačkoj. Kao umjetnik koji je stekao međunarodnu reputaciju, angažovan je kao profesor na Fakultetu likovnih umjetnosti na Cetinju, gdje je predavao na Odsjeku grafika od osnivanja 1988. do 1992. godine.",
      "Za života Đeljoš Đokaj je imao oko 70 samostalnih izložbi u Crnoj Gori, Srbiji, Kosovu, Sjevernoj Makedoniji, Albaniji, Italiji, Njemačkoj, Holandiji, Sjedinjenim Američkim Državama. Kao istaknuti grafičar i slikar predstavljao je Jugoslaviju I Italiju na preko 150 kolektivnih, selektovanih i izložbi po pozivu širom Evrope, Latinske Amerike, Indije, Afrike i Australije.",
      "Bio je član Dukljanske akademije nauka i umjetnosti, Akademije nauka, kniiževnosti i umjetnosti u Palermu, Akademije nauka i umjetnosti Kosova, Udruženia likovnih umjetnika Crne Gore i Udruženja likovnih umjetnika Srbije.",
      "Đelioš Đokaj, umjetnik altruista i humanista koji je sa sobom nosio rodni kraj, nakon katastrofalnog zemljotresa, poklonio je fondu Galerije solidarnosti u Kotoru 50 grafika italijanskih grafičara. Nostalgija za Crnom Gorom i rodnim krajem vodila ga je da u Milješu sagradi kuću i atelje-galeriju gdje se danas nalaze njegova grafička presa, slikarski materijal, započeti radovi i manji broj djela. Đeljoš Đokaj je preminuo 2016. godine u 83. godini u Minhenu. Po želji, sahranjen je u rodnom Milješu.",
    ],
    images: [
      {
        image: DjokajDjeljos1,
        text: "Đokaj Đeljoš, Generalno poprsje ulje na platnu. Fotografisao: NN",
      },
      {
        image: DjokajDjeljos2,
        text: "Đokaj Đeljoš, Brusač ulje na platnu. Fotografisao: NN",
      },
      {
        image: DjokajDjeljos3,
        text: "Đokaj Đeljoš, bez naziva, akril na platnu. Fotografisao: NN",
      },
    ],
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
        Đokaj Đeljoš
      </h1>
      <div className="space-y-8">
        {DjokajDjeljos.paragraphs.map((paragraph, index) => (
          <p key={index} className="text-lg text-gray-700 leading-relaxed">
            {paragraph}
          </p>
        ))}
      </div>
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
        {DjokajDjeljos.images.map((image, index) => (
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
