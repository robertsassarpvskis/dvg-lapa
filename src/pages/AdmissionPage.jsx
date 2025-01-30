import AdmissionElement from "../components/Admission/AdmissionCriteria";
import MissonElement from "../components/Home/MissionElement";
import NewsHeader from "../components/NewsHeader";
import Health from "/src/assets/icons/health.svg";
import WordDoc10_12 from "/src/assets/documents/admission/PIETEIKUMS_uznemsanai_10_12.klasei_2024 (4).docx"
const AdmissionPage = () => {
    const admissionData7to9 = {
        title: "Izglītojamo uzņemšana 7. – 9. klasēs 2024./2025.m.g.",
        content: [
            {
                text: "Lai uzņemtu 7.klasē, 6. klases liecībā vai iepriekšējā semestrī, ja stājas mācību gada laikā:",
                list: [
                    "mācību sasniegumu vērtējumi ir 5 balles un augstāki;",
                    "gada vērtējumi matemātikā, latviešu valodā un angļu valodā ir vismaz 6 balles."
                ]
            },
            {
                text: "Lai uzņemtu 8., 9.klasē, skolēna iepriekšējās klases liecībā vai iepriekšējā semestrī, ja stājas mācību gada laikā:",
                list: [
                    "vērtējumi ir 5 balles un augstāki (vai vidējais vērtējums katrā mācību priekšmetā, ja stājas mācību gada 2.semestrī un semestra vērtējumi netiek izlikti);",
                    "vidējais vērtējums ir 6,5 balles vai augstāks;",
                    "gada vērtējumi (vai semestra vērtējumi, ja stājas mācību gada laikā, vai vidējais vērtējums, ja semestra vērtējumi netiek izlikti) latviešu valodā, matemātikā un angļu valodā ir 7 balles vai augstāks."
                ]
            },
            {
                text: "Dokumentu pieņemšana uz 7.-9. klasi notiek no 03.06.2024. līdz 14.06.2024. ģimnāzijas kancelejā darba dienās no plkst. 9.00 līdz 16.00. Dokumentus var iesniegt arī elektroniski, tos parakstot ar drošu elektronisko parakstu un nosūtot uz adresi dvg@daugrc.edu.lv."
            }
        ],
        link: "https://daugrc.edu.lv/wp-content/uploads/2024/04/DVG_uznemsanas_noteikumi_7.-9.kl_.pdf",
        linkTitle: "Izglītojamo uzņemšanas noteikumi 7. - 9. klasēs 2024./2025.m.g."
    };

    const admissionData10 = {
        title: "Izglītojamo uzņemšana 10. klasē 2024./2025.m.g.",
        content: [
            {
                text: "Ģimnāzijas 10. klasē uzņem izglītojamos konkursa kārtībā, ņemot vērā:",
                list: [
                    "augstāko vidējo vērtējumu apliecībā par vispārējo pamatizglītību;",
                    "ģimnāzijas iestājpārbaudījuma rezultātu;",
                    "mācību sasniegumu atbilstību kritērijiem."
                ]
            },
            {
                text: "Pretendents ir atbrīvots no iestājpārbaudījuma, ja gada vērtējumi angļu valodā, matemātikā un latviešu valodā ir vismaz 7 balles."
            },
            {
                text: "Ja paliek vakantas vietas, var tikt izskatīti pretendenti, kuru sasniegumi neatbilst kādam no kritērijiem:",
                list: [
                    "vērtējumi ir 5 balles un augstāki;",
                    "valsts pārbaudes darbos iegūtie vērtējumi ir: latviešu valodā - 55% vai 6 balles, matemātikā - 50% vai 6 balles, svešvalodā - 50% vai 6 balles;",
                    "ja pretendents ir atbrīvots no VPD, gada vērtējumi latviešu valodā, matemātikā un svešvalodā ir vismaz 6 balles."
                ]
            },
            {
                text: "Iestājpārbaudījuma organizēšana:",
                list: [
                    "Pieteikšanās no 31.05.2024. līdz 06.06.2024. plkst. 11.00 skolas mājaslapā.",
                    "Iestājpārbaudījums notiek 06.06.2024. plkst. 12.00 klātienē.",
                    "Ja pretendents piesakās mācību gada laikā, iestājpārbaudījums notiek 5 darba dienu laikā pēc pieteikuma saņemšanas."
                ]
            },
            {
                text: "Dokumentu pieņemšana uz 10. klasi notiek no 03.07.2024. līdz 11.07.2024. ģimnāzijas kancelejā darba dienās no plkst. 9.00 līdz 16.00. Dokumentus var iesniegt arī elektroniski, tos parakstot ar drošu elektronisko parakstu un nosūtot uz adresi dvg@daugrc.edu.lv."
            }
        ],
        link: "https://daugrc.edu.lv/wp-content/uploads/2024/04/DVG_uznemsanas_noteikumi_10.-12.kl_-1.pdf",
        linkTitle: "Izglītojamo uzņemšanas noteikumi 10. - 12. klasēs 2024./2025.m.g.",
        link2: "https://daugrc.edu.lv/wp-content/uploads/2024/04/DVG_uznemsanas_noteikumi_10.-12.kl_-1.pdf",
        linkTitle2: "Iestājpārbaudījumu kārtība"
    };

    const admissionData11 = {
        title: "Izglītojamo uzņemšana 11. klasē 2024./2025.m.g.",
        content: [
            {
                text: "Uz vakantajām vietām 11. klasē uzņem izglītojamos, kuru iepriekšējās klases liecībā (vai iepriekšējā semestra vērtējumi, vai vidējie vērtējumi katrā mācību kursā (ja semestra vērtējumi netiek izlikti), ja stājas mācību gada laikā) mācību sasniegumi atbilst šādiem kritērijiem:",
                list: [
                    "vērtējumi ir 5 balles vai augstāki;",
                    "gada vērtējumi matemātikā, latviešu valodā, svešvalodā (angļu valodā) un izvēlētajos padziļinātajos kursos ir “7” balles vai augstāki."
                ]
            },
            {
                text: "Dokumentu pieņemšana uz 11. vai 12. klasi notiek no 03.06.2024. līdz 14.06.2024. ģimnāzijas kancelejā darba dienās no plkst. 9.00 līdz 16.00. Dokumentus var iesniegt arī elektroniski, tos parakstot ar drošu elektronisko parakstu un nosūtot uz adresi dvg@daugrc.edu.lv."
            },
            {
                text: "Pieteikuma veidlapa 10.-12. klasei"
            },
            {
                text: "Uzņemšanas komisijas sēde notiek 12.07.2024 (uzņemot 11. un 12. klasēs). Mācību gada laikā Uzņemšanas komisijas sēde notiek 3 darba dienu laikā pēc pieteikuma saņemšanas. Rezultāti tiek paziņoti ne vēlāk kā divas darba dienas pēc uzņemšanas komisijas sēdes. Ar rezultātiem var iepazīties ģimnāzijas kancelejā un ģimnāzijas mājas lapā."
            }
        ],
        link: "https://daugrc.edu.lv/wp-content/uploads/2024/04/DVG_uznemsanas_noteikumi_10.-12.kl_.pdf",
        linkTitle: "Izglītojamo uzņemšanas noteikumi 10. - 12. klasēs 2024./2025.m.g."
    };

    const admissionData12 = {
        title: "Izglītojamo uzņemšana 12. klasē 2024./2025.m.g.",
        content: [
            {
                text: "Uz vakantajām vietām 12. klasē uzņem izglītojamos, kuru iepriekšējās klases liecībā (vai iepriekšējā semestra vērtējumi, vai vidējie vērtējumi katrā mācību kursā (ja semestra vērtējumi netiek izlikti), ja stājas mācību gada laikā) mācību sasniegumi atbilst šādiem kritērijiem:",
                list: [
                    "vērtējumi ir 5 balles vai augstāki;",
                    "gada vērtējumi matemātikā, latviešu valodā, angļu valodā un izvēlētajos padziļinātajos kursos ir “7” balles vai augstāki;",
                    "matemātikas un angļu valodas optimālā līmeņa centralizētajos eksāmenos ir iegūti vismaz 65%."
                ]
            },
            {
                text: "Dokumentu pieņemšana uz 11. vai 12. klasi notiek no 03.06.2024. līdz 14.06.2024. ģimnāzijas kancelejā darba dienās no plkst. 9.00 līdz 16.00. Dokumentus var iesniegt arī elektroniski, tos parakstot ar drošu elektronisko parakstu un nosūtot uz adresi dvg@daugrc.edu.lv."
            },
            {
                text: "Pieteikuma veidlapa 10.-12. klasei"
            },
            {
                text: "Uzņemšanas komisijas sēde notiek 12.07.2024 (uzņemot 11. un 12. klasēs). Mācību gada laikā Uzņemšanas komisijas sēde notiek 3 darba dienu laikā pēc pieteikuma saņemšanas. Rezultāti tiek paziņoti ne vēlāk kā divas darba dienas pēc uzņemšanas komisijas sēdes. Ar rezultātiem var iepazīties ģimnāzijas kancelejā un ģimnāzijas mājas lapā."
            }
        ],
        link: "https://daugrc.edu.lv/wp-content/uploads/2024/04/DVG_uznemsanas_noteikumi_10.-12.kl_.pdf",
        linkTitle: "Izglītojamo uzņemšanas noteikumi 10. - 12. klasēs 2024./2025.m.g."
    };

    return (
        <div className="bg-whiteGray">
            <NewsHeader Heading={"Uzņemšana Daugavpils"} HeadingGreen={"Valsts ģimnāzijā"} text={"Daugavpils Valsts ģimnāzija piedāvā efektīvu, kvalitatīvu, konkurētspējīgu un mūsdienīgu vidējo izglītību. Skolai ir stabilas tradīcijas, tā ir atvērta jaunām idejām, dinamiska."} />
            <div className="container mx-auto px-2">
            
            <div className="space-y-4">
            <AdmissionElement
                    title={admissionData7to9.title}
                    content={admissionData7to9.content}
                    link={admissionData7to9.link}
                    linkTitle={admissionData7to9.linkTitle}
                />
                <AdmissionElement
                    title={admissionData10.title}
                    content={admissionData10.content}
                    link={admissionData10.link}
                    linkTitle={admissionData10.linkTitle}
                    link2={admissionData10.link2}
                    linkTitle2={admissionData10.linkTitle2}
                    wordDocFile="/docs/PIETEIKUMS_uznemsanai_10_12.klasei_2024.docx"  
                />

                <AdmissionElement
                    title={admissionData11.title}
                    content={admissionData11.content}
                    link={admissionData11.link}
                    linkTitle={admissionData11.linkTitle}
                />
                <AdmissionElement
                    title={admissionData12.title}
                    content={admissionData12.content}
                    link={admissionData12.link}
                    linkTitle={admissionData12.linkTitle}
                />
            </div>
               
            </div>
        </div>
    );
}

export default AdmissionPage;
