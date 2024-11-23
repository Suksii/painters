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
import KapllaniEdin1 from "./assets/Kapllani Edin.jpg";
import KapllaniEdin2 from "./assets/Kapllani Edin1.jpg";
import KapllaniEdin3 from "./assets/Kapllani Edin2.jpg";
import PrelvukajZake1 from "./assets/Prelvukaj Zake1.jpg";
import PrelvukajZake2 from "./assets/Prelvukaj Zake2.jpg";
import PrelvukajZake3 from "./assets/Prelvukaj Zake3.jpg";
import PrelvukajZake4 from "./assets/Prelvukaj Zake4.jpg";
import PrelvukajZake5 from "./assets/Prelvukaj Zake5.jpg";
import RijavecMasanovicRenata1 from "./assets/Rijavec Mašanović Renata1.jpg";
import RijavecMasanovicRenata2 from "./assets/Rijavec Mašanović Renata2.jpg";
import RijavecMasanovicRenata3 from "./assets/Rijavec Mašanović Renata3.jpg";

function App() {
  const DjokajDjeljos = {
    title: "Đokaj Đeljoš",
    paragraphs: [
      "Đokaj Đeljoš (Gjokaj Gjelosh) je roden 1933. godine u selu Milješ, nadomak Podgorice. Nakon rata 1946. godine, sa porodicom napušta Crnu Goru i odlazi u Zmajevo, u Vojvodini. Bez završene srednje škole, kao poseban talenat, u Beogradu upisuje Akademiju likovnih umetnosti, Odsjek slikarstvo, u klasi profesora Mila Milunovića, Stojana Celiča i Mladena Srbinovića. Diplomirao je 1963. godine u klasi profesora Boška Karanovića. Magistrirao je specijalni tečaj za grafiku 1966. godine na istoj akademiji.",
      "U periodu 1964/68. radi kao profesor umjetnosti/šef katedre na Višoj pedagoškoj školi u Prištini, gdje je bio i jedan od inicijatora osnivanja Fakulteta umjetnosti. Nastanjuje se u Rimu 1969.godine i intenzivno izlaže u više italijanskih gradova. Izložbe su naišle na pozitivne ocjene i komentare italijanskih likovnih kritičara. Privukao ih je njegov autentični likovni izraz - „nova metafizika” inspirisana specifičnim kulturno-istorijskim nasljeđem rodnog kraja i balkanskog prostora.",
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
  const KapllaniEdin = {
    title: "Kapllani Edin",
    paragraphs: [
      "Kapllani Edin je roden 1980. godine u Baru. Diplomirao je na Fakultetu likovnih umjetnosti u Prištini u klasi profesora Redžepa Ferrija 2004. god. Član je Udruženja likovnih umjetnika Crne Gore od 2010. godine. Kapllani radi asocijativne i apstraktne radove izuzetnim koloritom nadahnute morem, životom i atmosferom Mediterana. Imao je l3 samostalnih izložbi u Crnj Gori, Albaniji, Srbiji i Švajcarskoj.",
      "Učestvovao je na preko 200 kolektivnih izložbi u zemlji i inostranstvu. Živi i radi u Ulcinju.",
    ],
    rewards: [
      "Prvo mjesto za slikarstvo u koloniji “Pro beach soocer 2007.god.",
    ],
    criticism: [],
    images: [
      {
        image: KapllaniEdin1,
        text: (
          <span>
            Kapllani Edin, bez naziva, kombinovana tehnika.
            <br /> Fotografisao: Arben Çunmulaj
          </span>
        ),
      },
      {
        image: KapllaniEdin2,
        text: (
          <span>
            Kapllani Edin, bez naziva, ulje na platnu. <br /> Fotografisao:
            Arben Çunmulaj
          </span>
        ),
      },
      {
        image: KapllaniEdin3,
        text: (
          <span>
            Kapllani Edin, bez naziva, kombinovana tehnika.
            <br /> Fotografisao: Arben Çunmulaj
          </span>
        ),
      },
    ],
  };
  const PrelvukajZake = {
    title: "Prelvukaj Zake",
    paragraphs: [
      "Prelvukaj Zake je rodena 1961. godine u Martinovićima (Martinaj), opština Gusinje.U dịetinjstvu porodica napušta Crnu Gorui odlazi u Prištinu Kosovo. Na Fakultetu umjetnosti DAE Odsjek slikarstvo, diplomirala je 1990 godine u klasi profesora Nusreta Salihamidžića. Magistrirala je 1997. godine slikarstvo u klasi profesora Muslima Mulićija. Radi na istom fakultetu kao redovni profesor na predmetu Monumentalno slikarstvo. Povremeno predaje na ljetnjim univerzitetima i kulturnim institucijama u zemlji i inostranstvu.",
      "Pored umjetničkog stvaralaštva, bavi se likovnom kritikom, scenografijom i kostimografijom. Imala je 33 samostalne izložbe na Kosovu, Crnoj Gori, Albaniji, Srbiji, Makedoniji, Hrvatskoj, Njemačkoj, Austriji, Španiji, Belgiji, Velikoj Britaniji i Sjedinjenim Američkim Državama, a učestvovala je i na preko 100 grupnih, kolektivnih i izložbi po pozivu još u Bosni i Hercegovini, Mađarskoj, Francuskoj, Turskoj, Italiji, Švajcarskoj, Indiji i Japanu. Sa umjetničkim preduzećem „New Balkan”, realizovala je umjetničke projekte u zemlji i inostranstvu kao što su: freske, mozaici, murali, javna umjetnost, izložbe, debate... Bila je kustos nekoliko domaćih imeđunarodnih izložbi. Djela su joj zastupljena u muzejima i galerijama širom Evrope i u Nacionalnom muzeju žena u umjetnosti u Vašingtonu, jedinom te vrste u svijetu. Živi i radi u Prištini.",
    ],
    rewards: [
      "Nagrada na „Međunarodnom bijenalu crtanja portreta” Tuzla, Bosna i Hercegovina, 2006.god.",
      "Nagrada na nacionalnoj izložbi „Novembarska scena” Skoplje, Makedonija, 2005.god.",
      "„Bijenale međunarodnog crtanja” - Nacionalna galerija Kosova, Priština, 2004.god.",
    ],
    criticism: [],
    images: [
      {
        image: PrelvukajZake1,
        text: (
          <span>
            Prelvukaj Zake, Sexbhitionkombinovana tehnika 2005.
            <br /> Fotografisao: Arben Çunmulaj
          </span>
        ),
      },
      {
        image: PrelvukajZake2,
        text: (
          <span>
            Prelvukaj Zake, bez naziva, ulje na platnu.
            <br /> Fotografisao: Arben Çunmulaj
          </span>
        ),
      },
      {
        image: PrelvukajZake3,
        text: (
          <span>
            Prelvukaj Zake, bez naziva, ulje na platnu.
            <br /> Fotografisao: Arben Çunmulaj
          </span>
        ),
      },
      {
        image: PrelvukajZake4,
        text: (
          <span>
            Prelvukaj Zake, bez naziva, ulje na platnu.
            <br /> Fotografisao: Arben Çunmulaj
          </span>
        ),
      },
      {
        image: PrelvukajZake5,
        text: (
          <span>
            Prelvukaj Zake, bez naziva, ulje na platnu.
            <br /> Fotografisao: Arben Çunmulaj
          </span>
        ),
      },
    ],
  };
  const RijavecMasanovicRenata = {
    title: "Rijavec Mašanović Renata",
    paragraphs: [
      "Rijavec Mašanović Renata je rodena 1970. godine u Zemnunu. Završila je školu za industrijsko oblikovanjeu Beogradu 1988. godine. Diplomirala je na Falkultetu primenjenih umetnosti i dizajna u Beogradu, na Odsjeku keramika i staklo, u klasi profesorke Mirjane Isaković 1996. godine. Clanica je Udruženja likovnih umetnika primenjenih umetnosti Srbije i Udruženja likovnih umjetnika Crne Gore.",
      "U periodu 1992-1994. godine živjela je u Sloveniji gdje je učestvovala u više multimedijalnih projekata i pozorišnih predstava na kojima je radila specijalne efekte i scensku masku. Bavi se utilitarnom keramikom ikeramičkom skulpturom, ilustracijom, fotografijom, i grafičkim dizajnom.",
      "Samostalno je izlagala utilitarnu keramiku i keramičke skulpture u galerijama u Crnoj Gori, Srbiji i Albaniji. Takode je izlagala keramiku, crteže i slike na kolektivnim izložbama u Srbiji, Crnoj Gori, Hrvatskoj, Sloveniji i Austriji. Vodi likovnu radionicu za djecu iz Ulcinja sa slikarkom Vahidom Hasanagić Nimanbegu.",
      "Samostalna je umjetnica od 2002. godine. Živi i radi u Ulcinju.",
    ],
    rewards: [
      "Prvo mjesto za slikarstvo u koloniji “Pro beach soocer 2007.god.",
    ],
    criticism: [
      {
        title: "Sanja Martinović pjesnikinja o djelima Renate",
        description:
          "..Djelo Renate Mašanović je prepoznatljivo, te bogato kvalitetima koje treba da ima snačujna unmjetnost. Autentičnost je prva i najsnačajnija karakteristika djela ulcinjske umjetnice. Njenu ribu cemo preposnati uvijek, njenu čemo poruku sa keramičke šolje prihvatiti ne bes smijeha i ne bes gorčine. Da, njen je humor sofisticiran i gorak. Baš onakar kakar mora i biti ako se radi o subversivnom umjetniku, odnosno umjetnici. Renata Mašanović to svakakojeste. Njene su tvorevine korisne, lijepe, duhovite i subversivne. Nikada nisu tek dobro i originalno napravljen predmet, već dobro i originalno napravljen predmet koji upire prstom u društvo i njegova nevesela gibanja. Njena je umjetnost „skromna”- na ruborima velikih tema. Njenje pogled onaj iskosa, a veliki mislioci današnjice vjeruju da je upravo taj pogled jedini autentičan ijedini koji može biti subversivan",
      },
    ],
    images: [
      {
        image: RijavecMasanovicRenata1,
        text: (
          <span>
            Rijavec Mašanović Renata, oeralizam kompozicija keramika.
            <br /> Fotografisao: Arben Çunmulaj
          </span>
        ),
      },
      {
        image: RijavecMasanovicRenata2,
        text: (
          <span>
            Rijavec Mašanović Renata, oeralizam kompozicija keramika.
            <br /> Fotografisao: Arben Çunmulaj
          </span>
        ),
      },
      {
        image: RijavecMasanovicRenata3,
        text: (
          <span>
            Rijavec Mašanović Renata, panica - keramika.
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
          <Route
            path="/kapllani_edin"
            element={<Painters data={KapllaniEdin} />}
          />
          <Route
            path="/prelvukaj_zake"
            element={<Painters data={PrelvukajZake} />}
          />
          <Route
            path="/rijevac_masanovic_renata"
            element={<Painters data={RijavecMasanovicRenata} />}
          />
          <Route path="/kolja_berisaj" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
