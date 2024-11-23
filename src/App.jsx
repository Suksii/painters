import "./App.css";
import Sidebar from "./components/Sidebar";
import MainPage from "./pages/MainPage";
import { Routes, Route } from "react-router-dom";
import Painters from "./pages/Painters";
import DjokajDjeljos1 from "./assets/Đokaj Đeljoš.jpg";
import DjokajDjeljos2 from "./assets/Đokaj Đeljoš1.jpg";
import DjokajDjeljos3 from "./assets/Đokaj Đeljoš2.jpg";
import DjokajDjeljos4 from "./assets/Đokaj Đeljoš3.jpg";
import GjokajAgron1 from "./assets/GjokajAgron.jpg";
import GjokajAgron2 from "./assets/Gjokaj Agron.jpg";
import GjokajAgron3 from "./assets/Gjokaj Agron1.jpg";

function App() {
  const DjokajDjeljos = {
    title: "Đokaj Đeljoš",
    paragraphs: [
      "Đokaj Đeljoš (Gjokaj Gjelosh) je roden 1933. godine u selu Milješ, nadomak Podgorice. Nakon rata 1946. godine, sa porodicom napušta Crnu Goru i odlazi u Zmajevo, u Vojvodini. Bez završene srednje škole, kao poseban talenat, u Beogradu upisuje Akademiju likovnih umetnosti, Odsjek slikarstvo, u klasi profesora Mila Milunovića, Stojana Celiča i Mladena Srbinovića. Diplomirao je 1963. godine u klasi profesora Boška Karanovića. Magistrirao je specijalni tečaj za grafiku 1966. godine na istoj akademiji.",
      "U periodu 1964/68. radi kao profesor umjetnosti/šef katedre na Višoj pedagoškoj školi u Prištini, gdje je bio i jedan od inicijatora osnivanja Fakulteta umjetnosti. Nastanjuje se u Rimu 1969.godine i intenzivno izlaže u više italijanskih gradova. Izložbe su naišle na pozitivne ocjene i komentare italijanskih likovnih kritičara. Privukao ih je njegov autentični likovni izraz - „nova metafizika'' inspirisana specifičnim kulturno-istorijskim nasljeđem rodnog kraja i balkanskog prostora.",
      "U Rimu je otvorio grafičku radionicu koja je bila cijenjena po visokom kvalitetu štampe. Na vrhuncu slave, 1983/84. odlazi iz Rima i nastanjuje se u Augzburgu, u Njemačkoj. Kao umjetnik koji je stekao međunarodnu reputaciju, angažovan je kao profesor na Fakultetu likovnih umjetnosti na Cetinju, gdje je predavao na Odsjeku grafika od osnivanja 1988. do 1992. godine.",
      "Za života Đeljoš Đokaj je imao oko 70 samostalnih izložbi u Crnoj Gori, Srbiji, Kosovu, Sjevernoj Makedoniji, Albaniji, Italiji, Njemačkoj, Holandiji, Sjedinjenim Američkim Državama. Kao istaknuti grafičar i slikar predstavljao je Jugoslaviju I Italiju na preko 150 kolektivnih, selektovanih i izložbi po pozivu širom Evrope, Latinske Amerike, Indije, Afrike i Australije.",
      "Bio je član Dukljanske akademije nauka i umjetnosti, Akademije nauka, kniiževnosti i umjetnosti u Palermu, Akademije nauka i umjetnosti Kosova, Udruženia likovnih umjetnika Crne Gore i Udruženja likovnih umjetnika Srbije.",
      "Đelioš Đokaj, umjetnik altruista i humanista koji je sa sobom nosio rodni kraj, nakon katastrofalnog zemljotresa, poklonio je fondu Galerije solidarnosti u Kotoru 50 grafika italijanskih grafičara. Nostalgija za Crnom Gorom i rodnim krajem vodila ga je da u Milješu sagradi kuću i atelje-galeriju gdje se danas nalaze njegova grafička presa, slikarski materijal, započeti radovi i manji broj djela. Đeljoš Đokaj je preminuo 2016. godine u 83. godini u Minhenu. Po želji, sahranjen je u rodnom Milješu.",
    ],
    rewards: [],
    criticism: [
      {
        title: "Irina Subotić, likovna kritičarka o radu Deljoše Dokaja",
        description:
          "Rad Deljoša Dokaja otkriva jednu dovoljno savremenu, čak univerzalnu čuvstvenost, koju treba posnnatrati I prihvatiti i izvan isključivo lokalne prisme. Zaista posebna, ona svakako sadrši neke elemente svog okruženja, ali je i transponovana u daleke reminiscencije, posebno tematske, te u prostorne, a katkad i kolorističke odnose.. lako privlačna sila koja Dokaja vuče prema nadrealnom i metaforičkom ostavlja gotovo neizbrisiv trag, umjetnik postepeno udaljio od simboličkog ifantastičnog slikarstra iprihvatio neposrednije, šivlje uticaje sauremenih ambijenata koji ga okružuju. Oru intimnu promjenu odnosa prema svijetu ispratila je i promjena umjetničkog jezika, čija je posljedica pročišćavanje isražaja, brisanje de talja, fornmalna sinteza površina i upotreba strožeg spektra boja. Dugi nis crteža, zatim, Đokaju je poslužio kao posrednik ismedu gravure i slikanja; ruka je poslušala naredbe i želje vida - nalazimo se pred vanrednim primjerom logičkog i posljedičnog razvoja ideje do njene konačne i savršene realizacije...",
      },
    ],
    images: [
      {
        image: DjokajDjeljos1,
        text: (
          <span>
            Đokaj Đeljoš, Generalno poprsje ulje na platnu.
            <br /> Fotografisao: Arben Çunmulaj
          </span>
        ),
      },
      {
        image: DjokajDjeljos2,
        text: (
          <span>
            Đokaj Đeljoš, Brusač ulje na platnu. <br /> Fotografisao: Arben
            Çunmulaj
          </span>
        ),
      },
      {
        image: DjokajDjeljos3,
        text: (
          <span>
            Đokaj Đeljoš, bez naziva, akril na platnu.
            <br /> Fotografisao: Arben Çunmulaj
          </span>
        ),
      },
      {
        image: DjokajDjeljos4,
        text: (
          <span>
            Đokaj Đeljoš, Bacač kamena akvatinta, 1970.
            <br /> Fotografisao: Arben Çunmulaj",
          </span>
        ),
      },
    ],
  };
  const GjokajAgron = {
    title: "Gjokaj Agron",
    paragraphs: [
      "Gjokaj Agron roden je 1993. godine u Podgorici. Nakon završene Srednje umjetničke škole „Petar Lubarda” na Cetinju završava Fakultet likovnih umjetnosti na Cetinju, Odsjek slikarstvo, 2017. godine. Trenutno pohada specijalističke akademske studije na istom fakultetu u klasi profesora Branislava Sekulića. Tokom studiranja boravio je u ateljeu poznatog slikara igrafičara Đeljoša Đokaja (Gjelosh Gjokaj) gdje je sticao znanja i vještine iz slikarstva i grafike. Kao talentovani mladi slikar 2008. godine učestvovao je na 16-om Medunarodnom bijenalu dječije i omladinske grafičke umjetnostiu Torunu u Poljskoj; 2009. godine na Kineskom međunarodnom takmičenju u slikanju za djecu. Godinu kasnije učestvovao je na medunarodnom dječijem konkursu „EX LIBRIS”, Subotica-Srbija i na XII međunarodnom umjetničkom takmičenju za djecu i omladinu „Dijete i pas” Čenstohova (Poljska).",
      "Imao je tri samostalne izložbe a učestvovao je na više od 20 kolektivnih predstavljanja u Crnoj Gori, Srbiji, Sloveniji, Makedoniji , Kini i Poljskoj.",
    ],
    rewards: [
      "Nagrada za pojedinačna ostvarenja na XXVIII izložbi, Bitola, Sjeverna Makedonija, 2010.god.",
      "I nagrada na temu „Borba protiv korupcije”, Podgorica.",
      "Pojedinačna jedinstvena nagrada za starosnu grupu od 16 do 20 godina, Slovenija, 2010. god.",
      "Nagrada za pojedinačna ostvarenja na XXVIIl izložbi, 2010.god. Pojedinačna jedinstvena nagrada za starosnu grupu od 11 do 15 godina, Slovenija, 2007.god.",
    ],
    criticism: [],
    images: [
      {
        image: GjokajAgron1,
        text: (
          <span>
            Gjokaj Agron, bez naziva, kombinovana tehnika.
            <br /> Fotografisao: Arben Çunmulaj
          </span>
        ),
      },
      {
        image: GjokajAgron2,
        text: (
          <span>
            Gjokaj Agron, bez naziva, kombinovana tehnika. <br /> Fotografisao:
            Arben Çunmulaj
          </span>
        ),
      },
      {
        image: GjokajAgron3,
        text: (
          <span>
            Gjokaj Agron, bez naziva, kombinovana tehnika.
            <br /> Fotografisao: Arben Çunmulaj
          </span>
        ),
      },
    ],
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="container mx-auto p-8">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/djokaj_djeljos"
            element={<Painters data={DjokajDjeljos} />}
          />
          <Route
            path="/gjokaj_agron"
            element={<Painters data={GjokajAgron} />}
          />
          <Route path="/kapllani_edin" />
          <Route path="/prelvukaj_zake" />
          <Route path="/rijevac_masanovic_renata" />
          <Route path="/kolja_berisaj" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
