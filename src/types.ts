/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'EN' | 'DK';

export interface TranslationDictionary {
  tickerText: string;
  services: string;
  webDev: string;
  about: string;
  blog: string;
  contactUs: string;
  career: string;
  callUs: string;
  titlePart1: string;
  titlePart2: string;
  subtitle: string;
  getInTouch: string;
  aboutUsBtn: string;
  modalTitle: string;
  modalSub: string;
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  submitBtn: string;
  successMessage: string;
  featuresTitle: string;
  featuresSubtitle: string;
  qualityTitle: string;
  qualityDesc: string;
  punctualTitle: string;
  punctualDesc: string;
  experienceTitle: string;
  experienceDesc: string;
  supportTitle: string;
  supportDesc: string;
  aboutUsHeader: string;
  aboutUsHeadline1: string;
  aboutUsHeadline2: string;
  aboutUsText1: string;
  aboutUsText2: string;
  servicesSectionTitle: string;
  servicesSectionSub: string;
  servicesSectionDesc: string;
  servicesSectionAccountingTitle: string;
  servicesSectionAccountingDesc: string;
  servicesSectionTaxTitle: string;
  servicesSectionTaxDesc: string;
  servicesSectionConsultingTitle: string;
  servicesSectionConsultingDesc: string;
  seeMore: string;
  teamTitle: string;
  teamDesc: string;
  founderRole: string;
  assistantRole: string;
  accountantRole: string;
  footerJoinTitle: string;
  footerSubscribePlaceholder: string;
  footerSubscribeBtn: string;
  footerDescText: string;
  footerUsefulLinksTitle: string;
  footerContactInfoTitle: string;
  footerAddressLabel: string;
  footerTelLabel: string;
  footerFaxLabel: string;
  footerEmailLabel: string;
  whyTitleOverline: string;
  whyDavidTitlePart1: string;
  whyDavidTitlePart2: string;
  whyDavidSub: string;
  whyDavidCard1Title: string;
  whyDavidCard1Desc: string;
  whyDavidCard2Title: string;
  whyDavidCard2Desc: string;
  whyDavidCard3Title: string;
  whyDavidCard3Desc: string;
  whyDavidCard4Title: string;
  whyDavidCard4Desc: string;
  whyDavidCard5Title: string;
  whyDavidCard5Desc: string;
  whyDavidCard6Title: string;
  whyDavidCard6Desc: string;
  whyDavidCard7Title: string;
  whyDavidCard7Desc: string;
  whyMilestoneValue: string;
  whyMilestoneLabel: string;
  moneyBackTitle: string;
  moneyBackDesc: string;
  trustTitle: string;
  trustDesc: string;
  trustAuditValue: string;
  trustAuditLabel: string;
  trustFilingValue: string;
  trustFilingLabel: string;
  ctaBannerTitle: string;
  ctaBannerBtn: string;
  expertAdviceTitle: string;
  expertAdviceSub: string;
  expertAdviceStat1Value: string;
  expertAdviceStat1Label: string;
  expertAdviceStat2Value: string;
  expertAdviceStat2Label: string;
  testimonialHeadline: string;
  testimonial1Quote: string;
  testimonial1AuthorName: string;
  testimonial1AuthorTitle: string;
  testimonial2Quote: string;
  testimonial2AuthorName: string;
  testimonial2AuthorTitle: string;
  testimonial3Quote: string;
  testimonial3AuthorName: string;
  testimonial3AuthorTitle: string;
  testimonialQuote: string;
  testimonialAuthorName: string;
  testimonialAuthorTitle: string;
  growthMarketingTitle: string;
  growthMarketingConsultingYears: string;
  growthMarketingConsultingLabel: string;
  growthMarketingCard1Title: string;
  growthMarketingCard1Desc: string;
  growthMarketingCard2Title: string;
  growthMarketingCard2Desc: string;
  growthMarketingCard3Title: string;
  growthMarketingCard3Desc: string;
}

export const translations: Record<Language, TranslationDictionary> = {
  EN: {
    tickerText: "Supreme Court will decide third-party recordkeeper issue",
    services: "Services",
    webDev: "Web Development",
    about: "About",
    blog: "Blog",
    contactUs: "Contact us",
    career: "Career",
    callUs: "Call 24/7",
    titlePart1: "Accounting ,Tax",
    titlePart2: "& Financial Services",
    subtitle: "At Taaxwala Associate we are value driven. We offer fair and competitive pricing for all of our services.",
    getInTouch: "Get In Touch",
    aboutUsBtn: "About us",
    modalTitle: "Start a Consultation",
    modalSub: "Specify how we can assist with your accounts, taxes, or finances.",
    nameLabel: "Your Name",
    emailLabel: "Email Address",
    messageLabel: "Tell us about your needs",
    submitBtn: "Send Message",
    successMessage: "Thank you! Our advisory team will contact you within 2 hours.",
    featuresTitle: "Consultant tax in built",
    featuresSubtitle: "for small business.",
    qualityTitle: "Quality",
    qualityDesc: "Our quality is reached through efficient management and constant dedication.",
    punctualTitle: "Punctual",
    punctualDesc: "Taaxwala Associate's goal is customer satisfaction, which we obtain through professionalism and the allocation of ongoing service and support.",
    experienceTitle: "Experince",
    experienceDesc: "The main focus is for our customers to have an easy and pleasent experience handling their finances and interactions with SKAT.",
    supportTitle: "Support",
    supportDesc: "Taaxwala Associate offers extra support whenever needed to make sure that our customers businesses succeed in the competitive market.",
    aboutUsHeader: "ABOUT US",
    aboutUsHeadline1: "A winding road to success:",
    aboutUsHeadline2: "Strategies to blaze your trail",
    aboutUsText1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    aboutUsText2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    servicesSectionTitle: "Services",
    servicesSectionSub: "COMPETITIVE & COMPREHENSIVE",
    servicesSectionDesc: "At Taaxwala Associate we are value driven. We offer fair and competitive pricing for all of our services.",
    servicesSectionAccountingTitle: "Accounting",
    servicesSectionAccountingDesc: "Taaxwala Associate performs accounting and bookkeeping services for small and medium sized businesses in Copenhagen.",
    servicesSectionTaxTitle: "Tax",
    servicesSectionTaxDesc: "Taaxwala Associate has been helping businesses and individuals file their taxes for current and previous years.",
    servicesSectionConsultingTitle: "Consulting",
    servicesSectionConsultingDesc: "Taaxwala Associate consults many businesses and individuals on financial and tax strategy. We have years of experience.",
    seeMore: "See More",
    teamTitle: "Our Team",
    teamDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    founderRole: "Founder",
    assistantRole: "Assistant",
    accountantRole: "Accountant",
    footerJoinTitle: "Join Us today and let us help you to grow your business.",
    footerSubscribePlaceholder: "Your Email ...",
    footerSubscribeBtn: "Subscribe Now",
    footerDescText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ...",
    footerUsefulLinksTitle: "Useful links",
    footerContactInfoTitle: "Contact info",
    footerAddressLabel: "Adress : Taaxwala Associate, 2750 Ballerup",
    footerTelLabel: "Tel : +45 71469728",
    footerFaxLabel: "Fax : +45 71469728",
    footerEmailLabel: "Email : contact@taaxwala.com",
    whyTitleOverline: "WHY CHOOSE US?",
    whyDavidTitlePart1: "Why Choose ",
    whyDavidTitlePart2: "Taaxwala Associate?",
    whyDavidSub: "India's leading Accounting & Tax Consultant company.",
    whyDavidCard1Title: "Affordable Cost",
    whyDavidCard1Desc: "Affordable Cost through automation and technology.",
    whyDavidCard2Title: "Startup Friendly Team",
    whyDavidCard2Desc: "Startup friendly team which gives you service beyond satisfaction.",
    whyDavidCard3Title: "Superb Packages",
    whyDavidCard3Desc: "Superb packages which you can't find anywhere.",
    whyDavidCard4Title: "Lifetime Support",
    whyDavidCard4Desc: "After Service Lifetime support as premium client.",
    whyDavidCard5Title: "Money Back Guarantee",
    whyDavidCard5Desc: "100% Money back guarantee on Professional Fee.",
    whyDavidCard6Title: "Confidential Policy",
    whyDavidCard6Desc: "Confidential documents policy during the process.",
    whyDavidCard7Title: "Highest Credibility",
    whyDavidCard7Desc: "Highest credibility reviews on social media.",
    whyMilestoneValue: "10k+",
    whyMilestoneLabel: "CLIENTS ACROSS INDIA FOR TAX",
    moneyBackTitle: "100% Money Back Guarantee*",
    moneyBackDesc: "Our client's satisfaction is our #1 priority! That's why each person who avails service with Taaxwala Associate is completely protected by our 100% Money Back Guarantee Program*. Simply try our services and if Taaxwala Associate does not provide you final legal approved certifications, just checkout our Refund Policy Section.",
    trustTitle: "Trust With Our Best Accountants",
    trustDesc: "Our firm is the industry-leading source of tax, accounting & finance management supports. We are dedicated strategic partners transforming our clients for the better, helping them step into real-world scaling with precise financial insights.",
    trustAuditValue: "500",
    trustAuditLabel: "SUCCESSFUL AUDITS",
    trustFilingValue: "98%",
    trustFilingLabel: "ON-TIME FILING RATE",
    ctaBannerTitle: "Looking for a premium accounting for your business?",
    ctaBannerBtn: "Get started",
    expertAdviceTitle: "We provide expert advice for all size businesses",
    expertAdviceSub: "Whether you're a startup or an established enterprise, our tailored expert advice meets your needs at absolute ease at any scale, ensuring your growth.",
    expertAdviceStat1Value: "80",
    expertAdviceStat1Label: "INDUSTRIES SERVED",
    expertAdviceStat2Value: "95%",
    expertAdviceStat2Label: "CLIENT SATISFACTION RATE",
    testimonialHeadline: "India's top-class Accounting & Tax Consultant, trusted by more than 10000+ happy clients & 1000+ social reviews",
    testimonial1Quote: "Taaxwala Associate helped me file my ITR seamlessly. Their team was professional, responsive, and made the entire process stress-free. Highly recommend their services!",
    testimonial1AuthorName: "Rahul Sharma",
    testimonial1AuthorTitle: "Business Owner, Mumbai",
    testimonial2Quote: "Excellent service! They helped with my company registration and GST filing. Very knowledgeable team with great customer support. Will definitely use again.",
    testimonial2AuthorName: "Priya Patel",
    testimonial2AuthorTitle: "Startup Founder, Bangalore",
    testimonial3Quote: "I've been using Taaxwala Associate for 3 years now. Their tax planning advice has saved me lakhs. The best accounting firm I've ever worked with!",
    testimonial3AuthorName: "Amit Verma",
    testimonial3AuthorTitle: "IT Professional, Delhi",
    testimonialQuote: " When we needed funding to initiate a new project, their team provided us with excellent options and guided us through the loan process seamlessly. The personalized attention and tailored financial solutions were exactly what we were looking for. ",
    testimonialAuthorName: "David Leo",
    testimonialAuthorTitle: "Founder at GrowthHackers.co",
    growthMarketingTitle: "Driving Growth Through Strategic Marketing",
    growthMarketingConsultingYears: "12 years",
    growthMarketingConsultingLabel: "IN CONSULTING SECTOR",
    growthMarketingCard1Title: "Consultancy",
    growthMarketingCard1Desc: "Auditing advice helps you formulate your strategy for the future business diversification and make fire to enhancement (ROI).",
    growthMarketingCard2Title: "Audit & Assurance",
    growthMarketingCard2Desc: "Auditing services give authentic, actionable and insightful statements to the businesses to build their business relationships.",
    growthMarketingCard3Title: "Tax Planning Services",
    growthMarketingCard3Desc: "Our specialists' tax knowledge encompasses both national & global laws of taxation. As a result, you would get expert advice.",
  },
  DK: {
    tickerText: "Højesteret vil afgøre sag om tredjeparts-arkivar",
    services: "Tjenester",
    webDev: "Webudvikling",
    about: "Om os",
    blog: "Blog",
    contactUs: "Kontakt os",
    career: "Karriere",
    callUs: "Ring 24/7",
    titlePart1: "Regnskab ,Skat",
    titlePart2: "& Finansielle ydelser",
    subtitle: "Hos Taaxwala Associate er vi værdidrevne. Vi tilbyder rimelige og konkurrencedygtige priser på alle vores ydelser.",
    getInTouch: "Kontakt os",
    aboutUsBtn: "Om os",
    modalTitle: "Start en konsultation",
    modalSub: "Fortæl os, hvordan vi kan hjælpe med dit regnskab, skat eller økonomi.",
    nameLabel: "Dit navn",
    emailLabel: "E-mailadresse",
    messageLabel: "Fortæl os om dine behov",
    submitBtn: "Send besked",
    successMessage: "Tak! Vores rådgivningsteam kontakter dig inden for 2 timer.",
    featuresTitle: "Rådgivende skat indbygget",
    featuresSubtitle: "til små virksomheder.",
    qualityTitle: "Kvalitet",
    qualityDesc: "Vores kvalitet opnås gennem effektiv ledelse og konstant engagement.",
    punctualTitle: "Punktlig",
    punctualDesc: "Taaxwala Associates mål er kundetilfredshed, som vi opnår gennem professionalisme og tildeling af løbende service og support.",
    experienceTitle: "Erfaring",
    experienceDesc: "Hovedfokuseringen er, at vores kunder skal have en nem og behagelig oplevelse med at håndtere deres økonomi og interaktioner med SKAT.",
    supportTitle: "Support",
    supportDesc: "Taaxwala Associate tilbyder ekstra support, når det er nødvendigt, for at sikre, at kunders virksomheder lykkes på det konkurrenceprægede marked.",
    aboutUsHeader: "OM OS",
    aboutUsHeadline1: "En snoet vej til succes:",
    aboutUsHeadline2: "Strategier til at bane din vej",
    aboutUsText1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    aboutUsText2: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    servicesSectionTitle: "Tjenester",
    servicesSectionSub: "KONKURRENCEPREGET & OMFATTENDE",
    servicesSectionDesc: "Hos Taaxwala Associate er vi værdidrevne. Vi tilbyder rimelige og konkurrencedygtige priser på alle vores ydelser.",
    servicesSectionAccountingTitle: "Regnskab",
    servicesSectionAccountingDesc: "Taaxwala Associate udfører regnskabs- og bogføringsydelser for små og mellemstore virksomheder i København.",
    servicesSectionTaxTitle: "Skat",
    servicesSectionTaxDesc: "Taaxwala Associate har hjulpet virksomheder og enkeltpersoner med at indberette deres skat for indeværende og tidligere år.",
    servicesSectionConsultingTitle: "Rådgivning",
    servicesSectionConsultingDesc: "Taaxwala Associate rådgiver mange virksomheder og enkeltpersoner om finansiel rådgivning og skattestrategi. Vi har mange års erfaring.",
    seeMore: "Se mere",
    teamTitle: "Vores team",
    teamDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    founderRole: "Stifter",
    assistantRole: "Assistent",
    accountantRole: "Revisor",
    footerJoinTitle: "Tilmeld dig i dag, og lad os hjælpe dig med at vækste din virksomhed.",
    footerSubscribePlaceholder: "Din e-mail ...",
    footerSubscribeBtn: "Tilmeld nu",
    footerDescText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum ...",
    footerUsefulLinksTitle: "Nyttige links",
    footerContactInfoTitle: "Kontaktoplysninger",
    footerAddressLabel: "Adresse : Taaxwala Associate, 2750 Ballerup",
    footerTelLabel: "Tlf : +45 71469728",
    footerFaxLabel: "Fax : +45 71469728",
    footerEmailLabel: "E-mail : contact@taaxwala.com",
    whyTitleOverline: "HVORFOR VÆLGE OS?",
    whyDavidTitlePart1: "Hvorfor vælge ",
    whyDavidTitlePart2: "Taaxwala Associate?",
    whyDavidSub: "Indiens førende regnskabs- og skatterådgivningsfirma.",
    whyDavidCard1Title: "Overkommelig pris",
    whyDavidCard1Desc: "Overkommelig pris gennem automatisering og teknologi.",
    whyDavidCard2Title: "Startup-venligt team",
    whyDavidCard2Desc: "Startup-venligt team, der giver dig service ud over tilfredshed.",
    whyDavidCard3Title: "Fantastiske pakker",
    whyDavidCard3Desc: "Fantastiske pakker, som du ikke kan finde andre steder.",
    whyDavidCard4Title: "Livstidsstøtte",
    whyDavidCard4Desc: "Livstidsstøtte efter service som premiumkunde.",
    whyDavidCard5Title: "Pengene tilbage garanti",
    whyDavidCard5Desc: "100% pengene tilbage garanti på professionelle gebyrer.",
    whyDavidCard6Title: "Fortrolighedspolitik",
    whyDavidCard6Desc: "Fortrolig dokumentpolitik under processen.",
    whyDavidCard7Title: "Højeste troværdighed",
    whyDavidCard7Desc: "Højeste troværdighedsanmeldelser på sociale medier.",
    whyMilestoneValue: "10k+",
    whyMilestoneLabel: "KUNDER I HELE INDIEN FOR SKAT",
    moneyBackTitle: "100% Pengene Tilbage Garanti*",
    moneyBackDesc: "Vores kunders tilfredshed er vores #1 prioritet! Derfor er hver person, der benytter service hos Taaxwala Associate, fuldt beskyttet af vores 100% Pengene Tilbage Garanti Program*. Prøv blot vores tjenester, og hvis Taaxwala Associate ikke giver dig endelige juridisk godkendte certificeringer, så tjek vores Refusionspolitik sektion.",
    trustTitle: "Tillid med vores bedste revisorer",
    trustDesc: "Vores firma er den brancheførende kilde til skatte-, regnskabs- og økonomistyringsstøtte. Vi er dedikerede strategiske partnere, der transformerer vores klienter til det bedre, og hjælper dem med at træde ind i reel skalering med præcis finansiel indsigt.",
    trustAuditValue: "500",
    trustAuditLabel: "VELLYKKEDE REVISIONER",
    trustFilingValue: "98%",
    trustFilingLabel: "RETIDIG INDBERETNINGSRATE",
    ctaBannerTitle: "Søger du førsteklasses regnskab til din virksomhed?",
    ctaBannerBtn: "Kom i gang",
    expertAdviceTitle: "Vi yder ekspertrådgivning til virksomheder i alle størrelser",
    expertAdviceSub: "Uanset om du er en nystartet virksomhed eller en etableret koncern, opfylder vores skræddersyede ekspertrådgivning dine behov med lethed, hvilket sikrer din succesfulde vækst.",
    expertAdviceStat1Value: "80",
    expertAdviceStat1Label: "INDUSTRIER BETJENT",
    expertAdviceStat2Value: "95%",
    expertAdviceStat2Label: "TILFREDSHEDSRATE BLANDT KUNDER",
    testimonialHeadline: "Indiens førsteklasses regnskabs- og skatterådgiver, betroet af mere end 10000+ tilfredse kunder og 1000+ sociale anmeldelser",
    testimonial1Quote: "Taaxwala Associate hjalp mig med at indberette min ITR problemfrit. Deres team var professionelt, responsivt og gjorde hele processen stressfri. Anbefales varmt!",
    testimonial1AuthorName: "Rahul Sharma",
    testimonial1AuthorTitle: "Virksomhedsejer, Mumbai",
    testimonial2Quote: "Fremragende service! De hjalp med min virksomhedsregistrering og GST-indberetning. Meget vidende team med fantastisk kundesupport. Vil helt sikkert bruge igen.",
    testimonial2AuthorName: "Priya Patel",
    testimonial2AuthorTitle: "Startup-stifter, Bangalore",
    testimonial3Quote: "Jeg har brugt Taaxwala Associate i 3 år nu. Deres skatteplanlægningsrådgivning har sparet mig for hundredtusindvis. Det bedste regnskabsfirma, jeg nogensinde har arbejdet med!",
    testimonial3AuthorName: "Amit Verma",
    testimonial3AuthorTitle: "IT-professionel, Delhi",
    testimonialQuote: " Da vi havde brug for finansiering til at starte et nyt projekt, gav deres team os fremragende muligheder og guidede os problemfrit igennem låneprocessen. Den personlige opmærksomhed og de skræddersyede økonomiske løsninger var præcis det, vi søgte. ",
    testimonialAuthorName: "David Leo",
    testimonialAuthorTitle: "Stifter hos GrowthHackers.co",
    growthMarketingTitle: "Skab vækst gennem strategisk markedsføring",
    growthMarketingConsultingYears: "12 år",
    growthMarketingConsultingLabel: "I CONSULTING-SEKTORER",
    growthMarketingCard1Title: "Rådgivning",
    growthMarketingCard1Desc: "Revisionsrådgivning hjælper dig med at formulere din strategi for fremtidig forretningsdiversificering og styrke afkastet (ROI).",
    growthMarketingCard2Title: "Revision & Assurance",
    growthMarketingCard2Desc: "Revisionsydelser giver autentiske, handlingsværdige og indsigtsfulde erklæringer til virksomheder for at opbygge tillid.",
    growthMarketingCard3Title: "Skatteplanlægning",
    growthMarketingCard3Desc: "Vores specialisters skatteviden dækker både nationale og globale skattelove. Som et resultat heraf får du ekspertrådgivning.",
  },
};
