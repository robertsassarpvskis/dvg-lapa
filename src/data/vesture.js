import { Images } from "lucide-react";
import im1840 from "../assets/images/Vesture/1840.jpg";
import im1840_1 from "../assets/images/Vesture/1840_1.jpg";
import im1878 from "../assets/images/Vesture/1878.jpg";
import im1878_1 from "../assets/images/Vesture/1878_1.jpg";
import im1891 from "../assets/images/Vesture/1891.png";
import im1891_1 from "../assets/images/Vesture/1891_1.jpg";
import im1900 from "../assets/images/Vesture/1900.jpg";
import im1900_1 from "../assets/images/Vesture/1900_1.jpg";
import im1910 from "../assets/images/Vesture/1910.jpg";
import im1910_1 from "../assets/images/Vesture/1910_1.jpg";
import im1920 from "../assets/images/Vesture/1920.jpg";
import im1922_1 from "../assets/images/Vesture/1922_1.jpg";
import im1922 from "../assets/images/Vesture/1922.jpg";
import im1927 from "../assets/images/Vesture/1927.jpg";
import im1929 from "../assets/images/Vesture/1929.png";
import im1939 from "../assets/images/Vesture/1939.png";
import im1939_1 from "../assets/images/Vesture/1939_1.jpg";
import im1939_2 from "../assets/images/Vesture/1939_2.jpg";
import im1939_3 from "../assets/images/Vesture/1939_3.png";
import im1940 from "../assets/images/Vesture/1940.jpg";
import im1944 from "../assets/images/Vesture/1940-1944.jpg";
import im1944_1 from "../assets/images/Vesture/1940-1944-1.jpg";
import im1966 from "../assets/images/Vesture/1966.jpg";
import im1966_1 from "../assets/images/Vesture/1966_1.jpg";
import im1971 from "../assets/images/Vesture/1971.jpg";
import im1971_1 from "../assets/images/Vesture/1971_1.jpg";
import im1991 from "../assets/images/Vesture/1991.jpg";
import im1991_1 from "../assets/images/Vesture/1991_1.jpg";
import im1996 from "../assets/images/Vesture/1996.jpg";
import im1996_1 from "../assets/images/Vesture/1996_1.jpg";
import im1996_2 from "../assets/images/Vesture/1996_2.jpg";
import im1998 from "../assets/images/Vesture/1998.jpg";
import im2000 from "../assets/images/Vesture/2000.jpg";
import im2001 from "../assets/images/Vesture/2001.png";
import im2001_1 from "../assets/images/Vesture/2001_1.jpg";
import im2004 from "../assets/images/Vesture/2004.jpg";
import im2004_1 from "../assets/images/Vesture/2004_1.jpg";
import DV from "/src/assets/images/dienesta.jpg";
import tradicijasIM from "../assets/images/Vesture/tradicijas.jpg";

export const vestureData = {
    vesture: [{
        title: "Vēsture",
        description: `Daugavpils Valsts ģimnāzija, dibināta 1831. gadā, ir viena no vecākajām un prestižākajām izglītības iestādēm Latvijā. Sākotnēji kā muižniecības skola, tā pārtapa par ģimnāziju un spēlēja nozīmīgu lomu Latgales izglītības attīstībā. Skola ir piedzīvojusi daudzus pārveidojumus un attīstību, saglabājot ciešu saikni ar latviešu kultūru un vēsturi. 2004. gadā tai tika piešķirts Valsts ģimnāzijas statuss, nodrošinot kvalitatīvu izglītību skolēniem un saglabājot tās tradīcijas mūsdienu izglītības sistēmā.`,
        link: "/vesture",
        images: im1840,
        notikumi: [
            {id: 1831, gads: 1831   , notikums: "Septembrī Dinaburgā (Daugavpilī) atvērās pirmās divas apriņķa muižniecības skolas klases. Tā bija pirmā vidējā valsts mācību iestāde krievu muižnieku, virsnieku un ierēdņu bērniem (zēniem)."},	
            {id: 1835, gads: 1835   , notikums: "Muižniecības skolu pārdēvēja par ģimnāziju. Sešās klasēs mācījās 149 skolēni."},	
            {id: 1837, gads: 1837   , notikums: "Notika pirmais skolas izlaidums. Skolu pabeidza 4 skolēni."},	
            {id: 1840,  gads: 1840, images:[im1840, im1840_1], notikums: "Pēc arhitekta A. Štauberta projekta uzcelta skolas ēka. Tā tika veidota ampīra stilā."},	
            {id: 1841, gads: 1841   , notikums: "1.septembrī notika svinīga jaunās skolas ēkas iesvētīšana."},	
            {id: 1865, gads: 1865   , notikums: "Dinaburgas ģimnāzija pārveidota par reālģimnāziju. Skolas pagalmā ierīkots botāniskais dārzs ar 300 dažādiem augiem."},	
            {id: 1872, gads: 1872   , notikums: "Septiņklasīgā Dinaburgas ģimnāzija pārveidota par sešklasīgo reālskolu.  Ieviesta klases audzinātāju sistēma."},	
            {id: 1878, gads: 1878, images:[im1878, im1878_1],  notikums: "Pēc ķīmijas skolotāja un skolas direktora A. Kņazeva projekta uzbūvēta unikāla (vienīgā Baltijā) ķīmijas krāsns, vēlāk izmantota kā velkmes skapis."},	
            {id: 1891, gads: 1891, images:[im1891, im1891_1], notikums: "Ieviesta mūzikas mācība, organizēts skolas orķestris."},	
            {id: 1900, gads: 1900, images:[im1900, im1900_1]   , notikums: "Skolā bijušas 19 klases ar 466 skolēniem. Skolas ēka tika paplašināta ar divstāvu piebūvi Virsnieku (tagad Lāčplēša) ielā - aktu un sporta zāli un vairākām klašu telpām."},	
            {id: 1910, gads: 1910, images:[im1910, im1910_1]   , notikums: "Pilsētas bulvārī (tagad A.Pumpura skvērs) iepretī reālskolai tika uzstādīts Saules pulkstenis. Pulksteņa izgatavošanas iniciators bija reālskolas fizikas skolotājs Arkādijs Jaskovs. Naudu pulksteņa būvei savāca reālskolas vecāko klašu audzēkņi. Pulksteņa skalu un rādītāju izgatavoja pēc A. Jaskova rasējumiem vietējā gravēšanas darbnīcā, bet pulksteņa melnais marmora postaments piramīdas veidā tika pasūtīts kapu pieminekļu izgatavošanas darbnīcā."},	
            {id: 1920, gads: 1920, images:[im1920]   , notikums: "Notika Daugavpils reālskolas pēdējais izlaidums."},	
            {id: 1921, gads: 1921   , notikums: "3.jūnijā uz reālskolas bāzes ar V. Seiles un A. Bojāra atbalstu atvērta Daugavpils Valsts vidusskola ar latviešu mācību valodu. Skolas telpās darbojās arī divas pamatskolas klases, Daugavpils pedagoģiskais seminārs (līdz 1923. gadam), Latgales Tautas konservatorija (no 1923. līdz 1935. gadam) un Daugavpils Latviešu biedrības komercskola (no 1926. līdz 1937. gadam). Valsts vidusskola līdz ar to kļuva par pirmo latviskās izglītības centru Daugavpilī."},	
            {id: 1922, gads: 1922, images:[im1922, im1922_1]   , notikums: "Pirmajā mācību gadā skolā bija 87 skolēni vecumā no 12 līdz 21 gadam un 22 skolotāji.  Neskatoties uz visām pēckara grūtībām 17. jūnijā 15 absolventi saņēma gatavības apliecības – tas bija Daugavpils latviešu vidusskolas pirmais izlaidums."},	
            {id: 1927, gads: 1927, images:[im1927]   , notikums: "24.janvārī mūsu skolu apmeklē izglītības ministrs un dzejnieks J. Rainis."},	
            {id: 1929, gads: 1929, images:[im1929]  , notikums: "22.augustā ar izglītības ministra rīkojumu visas vispārizglītojošas vidusskolas tika pārdēvētas par ģimnāzijām (tai skaitā arī Daugavpils valsts vidusskola). “Izglītības Ministrijas Mēnešraksts” (01.09.1929.)"},	
            {id: 1931, gads: 1931   , notikums: "Ar plašu sarīkojumu programmu tika svinēta latviešu vidusskolas 10 gadu jubileja. Vietējā avīzē „Latgales ziņas” rakstīja: <br> <b>„Jau no paša rīta ģimnāzijas telpas greznotas zaļumiem un ziediem. Skolēni no rīta deva Dievam savu pateicību katoļu vecajā baznīca Rīgas ielā un luteriskie skolēni ģimnāzijas aulā mācītāja Šancberga vadība. Plkst. 12 ieradās viesi no Rīgas un ģimnāzijas skolotāju istabā notika svinīga pedagoģiskā sēde izglītības ministra klātbūtnē... Plkst. 14. sākās svinīgais akts ģimnāzijas skaisti izremontētājā un grezni pušķotajā aulā. Pedagogu saimei un jaunatnei nesa sveicienus un novēlējumus tuvie un tālie ģimnāzijas draugi un labvēļi… ”</b>"},	
            {id: 1935, gads: 1935   , notikums: "Izglītības ministrs A. Tentelis parakstīja rīkojumu par  Daugavpils valsts  krievu, poļu un baltkrievu ģimnāziju apvienošanos vienā ģimnāzijā zem nosaukuma 2. Daugavpils valsts ģimnāzija, bet latviešu ģimnāzija turpmāk sauksies 1. Daugavpils valsts ģimnāzija."},	
            {id: 1939, gads: 1939, images:[im1939, im1939_1, im1939_2, im1939_3]   , notikums: "15.februārī iesvētīja Daugavpils Latviešu biedrības dāvināto skolas karogu. 18. februārī notika karoga pasniegšanas akts ar svinīgu sarīkojumu skolas zālē. <br> Skolas karogs tika izgatavots biedrības „Saule” sieviešu arodskolā Daugavpilī. Ir saglabājušās melnbaltas skolas karoga fotogrāfijas, bet laikrakstā “Latvijas kareivis” (15.02.1939.) atrodams karoga apraksts: <br> <b>“Karogs darināts no zīda auduma zilā un dzeltenā krāsā. Zilajā laukumā izveidota latviskā saule – Latvijas simbols un uzraksts „I Daugavpils valsts ģimnāzija”. Otrā pusē – dzeltenā laukā devīze „Par latvisku, daiļu un varenu Latviju”.</b>"},	
            {id: 1940, gads: 1940, images:[im1940]   , notikums: "16.jūnijā Latgales Dziesmusvētku koncertā Stropu estrādē piedalījās 1. Daugavpils valsts ģimnāzijas koris mūzikas skolotāja A. Feila vadībā."},	
            {id: 1944, gads: 1940, images:[im1944, im1944_1]   , notikums: "Mainīts skolas nosaukums – Daugavpils 1. vidusskola. Kā maza latvietības saliņa tā savās sienās pulcināja Daugavpils pilsētas un apkārtnes bērnus, kuru vecāki gribēja, lai viņu bērni prastu latviešu valodu, pazītu savas tautas tradīcijas un kultūru."},	
            {id: 1966, gads: 1966, images:[im1966, im1966_1]   , notikums: "Kopš 1966. gada skolā notiek Dzejas dienas – tikšanās ar dzejniekiem un rakstniekiem."},	
            {id: 1972, gads: 1971, images:[im1971, im1971_1]   , notikums: "Daugavpils 1. vidusskola atzīta par labāko skolu republikā."},	
            {id: 1991, gads: 1991, images:[im1991, im1991_1]   , notikums: "Skola svinēja 160 gadu jubileju. 15. novembrī notika svinīga jaunās piebūves pamatu iesvētīšana, taču līdzekļu trūkuma dēļ darbi bija jāpārtrauc."},	
            {id: 1996, gads: 1996, images:[im1996, im1996_1, im1996_2]   , notikums: "2.septembrī svinīgi atklāts skolas jaunais korpuss. Beidzot bija piepildījies un realizējies tik daudzu cilvēku sapnis par jaunu un ērtu skolu bērniem, kas mācās latviešu valodā.<br>25.oktobrī skolu apmeklē Valsts prezidents Guntis Ulmanis. Iznāk rakstu un atmiņu krājums par skolas vēsturi “Vakardiena uzrunā šodienu”,  2001. gadā iznāk otrā grāmata  – “Vakardiena turpina uzrunāt šodienu”. Grāmatu autore – pedagoģe, skolas muzeja dibinātāja un ilggadēja vadītāja Astrīda Petaško (1927-2013)."},	
            {id: 1998, gads: 1998, images:[im1998]   , notikums: "Mūsu skolā 38 klasēs mācījās 920 skolēni, strādāja 82 skolotāji. 1.jūlijā skolai mainīts nosaukums – Daugavpils pilsētas 1. ģimnāzija."},	
            {id: 2000, gads: 2000, images:[im2000]   , notikums: "31.maijā Valsts prezidente Vaira Vīķe-Freiberga tikās ar skolēnu un skolotāju kolektīvu."},	
            {id: 2001, gads: 2001, images:[im2001, im2001_1]   , notikums: "Skolā 50 klasēs mācījās 1262 skolēni. 17.novembrī skola svinēja 170 gadu jubileju (latviešu skolai – 80 gadu jubileju)."},	
            {id: 2002, gads: 2002   , notikums: "1.jūlijā ģimnāzija tiek reorganizēta divās mācību iestādēs: Daugavpils pilsētas 1. ģimnāzija (7.-12. klases) un Daugavpils Vienības pamatskola (1.-9. klases)."},	
            {id: 2004, gads: 2004, images:[im2004, im2004_1]    , notikums: "1.septembrī skolai piešķirts Valsts ģimnāzijas statuss."},	
            {id: 2008, gads: 2008, images:[DV]   , notikums: "1.septembrī atklāta ģimnāzijas dienesta viesnīca."},	
            {id: 2009, gads: 2009   , notikums: "Ģimnāzijai piešķirts starptautiski atzītā Deutsches Sprachdiplom (vācu valodas diploma) skolas statuss."},	
        ]
    }],

    tradicijas: [{
        title: "Tradīcijas",
        description: "",
        link: "/", 
        images: tradicijasIM,
        notikumi: [
            {title: "Skolotāju diena", text: "Ik rudeni oktobra pirmajā nedēļā svētkus svin mūsu mīļie skolotāji. Tā ir diena, kad varam pateikties skolotājiem par rūpēm, pacietību, izturību, sniegtajām zināšanām, par visu , kas skolēnus priecē skolā. 2002./2003. m. g. tika atjaunota tradīcija, ka skolotāji ir atbrīvoti no mācību priekšmetu pasniegšanas šajā dienā, tiek aizvietota ģimnāzijas vadība. “Jaunievēlētos” skolotājus un vadību pārstāv divpadsmito klašu skolēni. Skolotāji skolā ierodas pusdienlaikā, lai rīta pusē varētu atpūsties un saposties. Ienākot skolā, katram skolotājam pasniedz sarkanvaidzi ābolu - veselības un mundruma simbolu. Tad seko svinīgs sveiciens, kuru organizē Skolēnu līdzpārvalde, un jauki kopā bildēšanās brīži."},
            {title: "Daugavpils Valsts ģimnāzijas piederības zīme  „STIKLA POGA”", text: "Apbalvojums – Daugavpils Valsts ģimnāzijas piederības zīme “Stikla poga”- tika iedibināts 2018.gadā, svinot Latvijas Republikas simtgadi, lai godinātu izcilākos ģimnāzijas pedagogus, skolēnus, darbiniekus, vecākus, absolventus un sadarbības partnerus par valsts ģimnāzijas idejas iedzīvināšanu. Stikla poga ir unikāls Latvijas stikla meistaru darinājums – caurspīdīga stikla poga, kurā mirdz Latvijas Republikas karoga karmīnsarkanais un Daugavpils Valsts ģimnāzijas tumši zilais. Stikla pogu caurvij Latvijas Republikas karoga lentīte."},
            {title: "10. klašu skolēnu imatrikulācija ģimnāzistu kārtā", text: "Parasti šis pasākums notiek gada sākumā. Tas ir ļoti gaidīts desmito klašu skolēnu vidū. Apmēram nedēļu iepriekš parādās biedējoši, satraucoši un tai pašā brīdī vilinoši plakāti un uzraksti par imatrikulācijas norisēm. Kad beidzot svētku diena ir pienākusi, desmitos brīdina par attiecīgo ģērbšanās stilu - visvecākais! sliktākais! visnetīrākais! un lūdz atstāt skolas telpas pēc iespējas ātrāk un atnākt uz pasākumu laicīgi. Pasākumu organizē divpadsmito klašu skolēni. Tamdēļ var nojaust par scenārija oriģinalitāti. Dalībniekiem klājas smagi, tomēr tie vēlas sasniegt finišu, lai pienācīgi un ar godu iekļūta ģimnāzista kārtā. Katrs finālists beigu posmā iesaucas : Beidzot! jūtoties ļoti laimīgs. Tad seko vairs tikai oficiālā daļa - zvērests un tā apstiprinošas un pastiprinošas darbības. Protams, ka vēlāk jautrība valda arī visu turpmāko vakaru diskotēkas laikā. Neapšaubāmi imatrikulācija ir viens no visjautrākajiem un atmiņā paliekošajiem svētkiem ģimnāzista dzīvē."},
            {title: "Tehnisko darbinieku svētki", text: "Svētku organizatori ir skolēnu līdzpārvalde. Svētki ir sava veida pateicība un cieņas apliecinājums skolas tehniskajiem darbiniekiem, kuri gādā, lai ģimnāzijas telpās allaž valdītu tīrība un kārtība, lai ģimnāzijas audzēkņi, skolotāji un viesi allaž justos labi un omulīgi. Skolēni rīko dažādus priekšnesumus, attēlojot tehnisko darbinieku ikdienu, atrakcijas, notiek dejas. Darbinieki ar prieku izrāda savu atjautību, asprātību, ir aktīvi, līdz ar to pasākuma laikā valda ļoti jauka un draudzīga atmosfēra."},
            {title: "Absolventu vakars", text: "Pirmo reizi absolventu vakars tika rīkots 1948. gadā. Iemesls tam bija pavisam vienkāršs - 12. klases absolventi vēlējās satikties un tāpēc sarīkoja vakaru. Absolventu vakars sākas ar svinīgo daļu skolas zālē, kurā notiek skolas kolektīvu un pašdarbības pulciņu uzstāšanās, tad tiek dots vārds absolventiem - jubilāriem. Īpaši tiek sumināti absolventi, kuri skolu beiguši pirms 60, 55, u.t.t. gadiem. To visu rīko divpadsmito klašu skolēni. Pēc svinīgās daļas notiek absolventu tikšanās ar klasesbiedriem un skolotājiem."},
            {title: "Gada balvas pasniegšanas ceremonija", text: "Šī tradīcija ir radusies nesen, tikai 2002./2003. m.g. beigās. Tā aizstāj ierastās „līnijas” gada noslēgumā ar jautru pasākumu Latviešu kultūras centrā. Tiek izsniegti pateicības raksti. Par dažādiem sasniegumiem mācību gada laikā tiek apbalvoti audzēkņi, pedagogi un tehniskie darbinieki. Visaugstākā nominācija ir „Gada ģimnāzists”, to iegūt nav viegli. Šai nominācijai tiek izvirzīti audzēkņi, kuriem ir augstas sekmes mācībās, panākumi olimpiādēs pilsētā un valstī. 19 nominācijās tiek pasniegtas dažādas gada balvas. Šī pasākuma sagatavošanā un kandidātu izvērtēšanā aktīvi iesaistās Ģimnāzijas padome un Vecāku kolēģija."},
        ]
    }]
};
