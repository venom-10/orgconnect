import { useState, useEffect } from "react";
import Topic from "./NewsTopic";

const news = [
  {
    title: "AWS to invest $12.7 billion in India",
    author: "Manish Singh",
    published_date: "2023-05-18 02:58:44",
    published_date_precision: "full",
    link: "https://techcrunch.com/2023/05/17/aws-to-invest-12-7-billion-in-india/",
    clean_url: "techcrunch.com",
    excerpt:
      "Amazon's AWS plans to invest $12.7 billion into its cloud infrastructure in India by 2030, doubling down in the key overseas market.",
    summary:
      "Amazon plans to invest $12.7 billion into its cloud infrastructure in India by 2030, the e-commerce group said Thursday, as it pushes ahead to scale up its AWS business in the key overseas market at a time when it has cut several other spendings in the region.\n\n\nThe company, which has earlier invested $3.7 billion for AWS infra in India and currently maintains two data center regions in the South Asian market, said its spendings will support 131,700 full-time jobs. The announcement is \na surprise doubling down by Amazon\n, which had last year said it plans to invest $4.",
    rights: "techcrunch.com",
    rank: 163,
    topic: "tech",
    country: "US",
    language: "en",
    authors: "Manish Singh",
    media:
      "https://techcrunch.com/wp-content/uploads/2021/12/GettyImages-1356696981.jpg?resize=1200,885",
    is_opinion: false,
    twitter_account: "@TechCrunch",
    _score: 7.2143965,
    _id: "9a725693ba17b15c8896275032032000",
  },
  {
    title: "AWS to invest $12.7B in India's cloud infrastructure",
    author: "ET CIO",
    published_date: "2023-05-18 02:46:36",
    published_date_precision: "full",
    link: "https://cio.economictimes.indiatimes.com/news/cloud-computing/aws-to-invest-inr-105600-crores-us-12-7-billion-into-cloud-infrastructure-in-india/100316605",
    clean_url: "indiatimes.com",
    excerpt:
      "This planned investment in data center infrastructure in India will support an estimated average of 1,31,700 full-time equivalent (FTE) jobs in Indian businesses each year. These positions, including…",
    summary:
      "Amazon Web Services (\nAWS\n) announced it plans to invest INR 1,05,600 crores (US $12.7 billion) into \ncloud\n infrastructure in \nIndia\n by 2030 to meet growing customer demand for \ncloud\n services in \nIndia\n. This investment is estimated to contribute INR 1,94,700 crores (US $23.3 billion) to India's total gross domestic product (GDP) by 2030.\n'PM Narendra Modi ji's Digital India vision is driving expansion of cloud & data centers in India,' said \nRajeev Chandrashekhar\n, minister of state for electronics and information technology, skill development and entrepreneurship in India.",
    rights: "indiatimes.com",
    rank: 296,
    topic: "news",
    country: "IN",
    language: "en",
    authors: "ET CIO,www.ETCIO.com",
    media:
      "https://etimg.etb2bimg.com/thumb/msid-100316605,imgsize-60300,width-1200,height=765,overlay-etcio/cloud-computing/aws-to-invest-inr-105600-crores-us-12-7-billion-into-cloud-infrastructure-in-india.jpg",
    is_opinion: false,
    twitter_account: "http://twitter.com/ET_CIO",
    _score: 7.2130175,
    _id: "87dfd2c3599bdac37f538b05b17db0f9",
  },
  {
    title: "AWS to invest $12.7 billion in India",
    author: "Manish Singh",
    published_date: "2023-05-18 02:58:44",
    published_date_precision: "full",
    link: "https://news.yahoo.com/aws-invest-12-7-billion-025844559.html",
    clean_url: "yahoo.com",
    excerpt:
      "Amazon plans to invest $12.7 billion into its cloud infrastructure in India by 2030, the e-commerce group said Thursday, as it pushes ahead to scale up its AWS business in the key overseas market at a…",
    summary:
      "Amazon plans to invest $12.7 billion into its cloud infrastructure in India by 2030, the e-commerce group said Thursday, as it pushes ahead to scale up its AWS business in the key overseas market at a time when it has cut several other spendings in the region.\nThe company, which has earlier invested $3.7 billion for AWS infra in India and currently maintains two data center regions in the South Asian market, said its spendings will support 131,700 full-time jobs across roles such as engineering, telecommunications and construction.",
    rights: "yahoo.com",
    rank: 31,
    topic: "news",
    country: "US",
    language: "en",
    authors: "Manish Singh",
    media:
      "https://s.yimg.com/ny/api/res/1.2/HwXGQnRqu53Do0pO9tbF2Q--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/techcrunch_350/c9e9fa362eb0b503ca74913707360205",
    is_opinion: false,
    twitter_account: "@YahooNews",
    _score: 7.210226,
    _id: "3edd11ee62a1d6628e3bfe94cd6b69b0",
  },
  {
    title: "Air India Express hires over 280 pilots, 250 cabin crew",
    author: "PTI",
    published_date: "2023-05-16 13:33:39",
    published_date_precision: "full",
    link: "https://economictimes.indiatimes.com/industry/transportation/airlines-/-aviation/air-india-express-hires-over-280-pilots-250-cabin-crew/articleshow/100281978.cms",
    clean_url: "indiatimes.com",
    excerpt:
      "Formerly under the Indian Government, Air India Express is now owned by Tata Group, which acquired the airline along with the full-service carrier Air India in late January last year.",
    summary:
      "Air India Express said it has been actively focusing on strengthening its workforce since October last year.\nLow-cost international carrier \nAir India Express\n on Tuesday said it has hired over 280 pilots and 250 cabin crew during a recent recruitment drive conducted across Delhi, Mumbai and Bangalore. Approximately 300 pilots actively participated in the selection process conducted during the drive, the airline said. \nFormerly under the Indian Government, \nAir India\n Express is now owned by \nTata Group\n, which acquired the airline along with the full-service carrier Air India in late January last year.",
    rights:
      "Copyright:(C)2023 Bennett Coleman & Co. Ltd, http://info.indiatimes.com/terms/tou.html",
    rank: 296,
    topic: "economics",
    country: "IN",
    language: "en",
    authors: "PTI",
    media:
      "https://img.etimg.com/thumb/msid-100282054,width-1070,height-580,imgsize-61702,overlay-economictimes/photo.jpg",
    is_opinion: false,
    twitter_account: "@EconomicTimes",
    _score: 7.1983137,
    _id: "0148adc0fae07058bd2deb7747ebd7dc",
  },
  {
    title: "GABRIEL INDIA LIMITED : Stock Market News and Information",
    author: "MarketScreener",
    published_date: "2023-05-16 10:45:00",
    published_date_precision: "timezone unknown",
    link: "https://www.marketscreener.com/quote/stock/GABRIEL-INDIA-LIMITED-6692880/news/Gabriel-India-May-10-2023-Business-Call-Update-43864289",
    clean_url: "marketscreener.com",
    excerpt:
      "GABRIEL INDIA LIMITED : News, information and stories for GABRIEL INDIA LIMITED | Bombay Stock Exchange: 505714 | Bombay Stock Exchange",
    summary:
      "06:23a\nGabriel India : May 10, 2023 Business Call Update\nPU\n \n \n05/10\nTranscript : Gabriel India Limited - Special Call\nCI\n \n \n05/09\nGabriel India Partners with Netherlands-based Inalfa to Manufacture Sunroofs for Indian..\nMT\n \n \n05/09\nGabriel India Enters into Technical Collaboration with Inalfa Roof Systems\nCI\n \n \n03/30\nGabriel India Limited Announces Retirement of Aditya Vij as an Independent Director\nCI\n \n \n02/10\nGabriel India : Q3FY23 Earnings Call\nPU\n \n \n02/06\nGabriel India : Q3 FY23 Gabriel Investors Presentation – Feb 2023\nPU\n \n \n02/06\nTranscript : Gabriel India Limited, Q3 2023 Earnings Call, Feb 06, 2023\nCI\n \n \n02/03\nGabriel India : Investors Presentation – Feb 2023\nPU\n \n \n02/03\nGabriel India Limited Reports Earnings Results for the Third Quarter and Nine Months En.",
    rights: "marketscreener.com",
    rank: 3681,
    topic: "finance",
    country: "US",
    language: "en",
    authors: "MarketScreener",
    media: "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
    is_opinion: false,
    twitter_account: "@ForTraders",
    _score: 7.196826,
    _id: "9c3977a7bd0b14480856cac5f06c0842",
  },
  {
    title:
      "India's global manufacturing hub ambition gets strong investment boost",
    author: "India Today Business Desk",
    published_date: "2023-05-18 00:00:00",
    published_date_precision: "date",
    link: "https://www.indiatoday.in/business/story/top-companies-investing-in-india-amazon-apple-cisco-walmart-foxconn-2380890-2023-05-18",
    clean_url: "indiatoday.in",
    excerpt:
      "From Apple to Amazon, some of the top global companies, especially those in the US, have set their sights on India as the country expands rapidly across various sectors.",
    summary:
      "By India Today Business Desk\n: India's goal of becoming a global manufacturing hub is gathering momentum as more global companies continue to invest in the country. The flurry of investments is not only good news for the Indian economy but also for the ruling government ahead of the crucial general elections next year.\nFrom Apple to Amazon, some of the top global companies, especially those in the US, have set their sights on India as the country expands rapidly across various sectors. Global companies are also relying on India to reduce their dependence on China, following the disruptions they faced last year.",
    rights: "indiatoday.in",
    rank: 1817,
    topic: "news",
    country: "IN",
    language: "en",
    authors: "India Today Business Desk",
    media:
      "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202305/indian-rupee-2_0-sixteen_nine.png?VersionId=7FfaYYVsj4V32KJs3NtrPAcK9z7QzeYa",
    is_opinion: false,
    twitter_account: "@indiatoday",
    _score: 7.1951766,
    _id: "64e816c6e17ecb794f52fcad5db1c788",
  },
  {
    title:
      "Hyundai India Partners with Shell India To Enhance EV-Charging Facility, Details Here",
    author: "Shahrukh Shah",
    published_date: "2023-05-17 11:37:37",
    published_date_precision: "full",
    link: "https://www.news18.com/auto/hyundai-india-partners-with-shell-india-to-enhance-ev-charging-facility-details-here-7843561.html",
    clean_url: "news18.com",
    excerpt:
      "The official press release also informed that Shell India will also consider installing DC 120 kW Fast Chargers in dealers instead of DC 60 kW Fast charges if feasible.",
    summary:
      "The leading car manufacturer Hyundai Motor India Ltd (HMIL), which is considered India's first smart mobility solutions provider and largest exporter, has signed a Memorandum of Agreement with the largest oil company Shell India. During this joint agreement, both companies agreed to install 60 kW DC Fast Chargers across 36 of their EV Dealerships in India.\nThe collaboration with Shell India is a part of \nHyundai's EV charging infrastructure expansion plan\n for providing customer-centric solutions towards a cleaner and greener future through the adoption of environment-friendly Battery Electric Vehicles (BEV).",
    rights: "news18.com",
    rank: 2238,
    topic: "news",
    country: "IN",
    language: "en",
    authors: "Shahrukh Shah",
    media:
      "https://images.news18.com/ibnlive/uploads/2023/05/new-project-1-1-62-1-168432329116x9.jpg",
    is_opinion: false,
    twitter_account: "@cnnnews18",
    _score: 7.1889844,
    _id: "31f456f5cb87abae7b28403e5bfcc67c",
  },
  {
    title: "Decoding Russia's new foreign policy concept – Part II",
    author: "",
    published_date: "2023-05-21 09:18:40",
    published_date_precision: "full",
    link: "https://timesofindia.indiatimes.com/blogs/truth-lies-and-politics/decoding-russias-new-foreign-policy-concept-part-ii/",
    clean_url: "indiatimes.com",
    excerpt:
      "Russia-China Relationship Falling-out of Russia with the West has made closer relations with China a strategic imperative for Russia as Russia needs China's political backing in the multilateral…",
    summary:
      "Russia-China Relationship\n\n\nFalling-out of Russia with the West has made closer relations with China a strategic imperative for Russia as Russia needs China's political backing in the multilateral forums. In addition, China also provides an alternative market for Russian hydrocarbons and commodities, as also, she has been a source of critical manufactures.\n\n\nFor China, Russia is a like-minded partner sharing a strategic outlook centred on antipathy to the US primacy, a wish to recast the international order to better reflect their interests and resentment at the perceived encirclement by America and its allies.",
    rights: "indiatimes.com",
    rank: 296,
    topic: "news",
    country: "IN",
    language: "en",
    authors: "",
    media:
      "https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2021/08/IMG-20210805-WA0005.jpg",
    is_opinion: false,
    twitter_account: null,
    _score: 7.18682,
    _id: "37137d483e930cb7480d3df873299a61",
  },
  {
    title:
      "Indian Visa For United States Of America and United Kingdom Citizens",
    author: "AB Newswire",
    published_date: "2023-05-19 02:30:00",
    published_date_precision: "timezone unknown",
    link: "https://markets.financialcontent.com/stocks/article/abnewswire-2023-5-19-indian-visa-for-united-states-of-america-and-united-kingdom-citizens",
    clean_url: "financialcontent.com",
    excerpt:
      "Indian Visa for US Citizens Since 2014, US residents have been able to apply electronically for an Indian visa. An e-Visa is available to American visitors, business travelers, and medical patients.…",
    summary:
      "Since 2014, US residents have been able to apply electronically for an Indian visa. An e-Visa is available to American visitors, business travelers, and medical patients. Tourist e-Visa: Americans who want to visit India for vacation must apply for a Tourist e-Visa, which allows them to stay in the country for tourism and recreation purposes. There are three categories of Tourist eVisas, each with a different validity period and duration of stay in India. US nationals with a Short-Term Tourist eVisa can stay in India for up to 30 days from the date of entry.",
    rights: "financialcontent.com",
    rank: 4400,
    topic: "finance",
    country: "US",
    language: "en",
    authors: "AB Newswire",
    media: null,
    is_opinion: false,
    twitter_account: null,
    _score: 7.1866884,
    _id: "1cd6ce2469bfaddada39064304962800",
  },
  {
    title: "BATA INDIA LIMITED : Stock Market News and Information",
    author: "MarketScreener",
    published_date: "2023-05-18 16:00:00",
    published_date_precision: "timezone unknown",
    link: "https://www.marketscreener.com/quote/stock/BATA-INDIA-LIMITED-46728582/news/Footwear-maker-Bata-India-s-Q4-profit-rises-on-lower-costs-higher-demand-43887934",
    clean_url: "marketscreener.com",
    excerpt:
      "BATA INDIA LIMITED : News, information and stories for BATA INDIA LIMITED | Bombay Stock Exchange: 500043 | Bombay Stock Exchange",
    summary:
      "10:15a\nFootwear maker Bata India's Q4 profit rises on lower costs, higher demand\nRE\n \n \n04/25\nBata India Names New CFO\nMT\n \n \n04/25\nBata India Limited Approves Appointment of Anil Ramesh Somani as Whole-Time Director\nCI\n \n \n04/25\nBata India Limited Approves Appointment of Anil Ramesh Somani as CFO\nCI\n \n \n04/03\nBata India's CFO Takes Charge\nMT\n \n \n04/03\nBata India Limited Appoints Anil Somani as the Chief Financial Officer\nCI\n \n \n02/14\nBata India Posts Higher Fiscal Q3 Consolidated Net Profit\nMT\n \n \n02/14\nBata India Limited Reports Earnings Results for the Third Quarter and Nine Months Ended.",
    rights: "marketscreener.com",
    rank: 3681,
    topic: "finance",
    country: "US",
    language: "en",
    authors: "MarketScreener",
    media: "https://www.marketscreener.com/images/twitter_MS_fdnoir.png",
    is_opinion: false,
    twitter_account: "@ForTraders",
    _score: 7.1834917,
    _id: "a8e4ec3ed8b7bd09db55aac6a75bb292",
  },
  {
    title: "Air India Express hires over 280 pilots, 250 cabin crew",
    author: "",
    published_date: "2023-05-16 13:28:58",
    published_date_precision: "full",
    link: "https://www.moneycontrol.com/news/business/air-india-express-hires-over-280-pilots-250-cabin-crew-10599691.html",
    clean_url: "moneycontrol.com",
    excerpt:
      "Approximately 300 pilots actively participated in the selection process conducted during the drive, the airline said.",
    summary:
      "Low-cost international carrier Air India Express on Tuesday said it has hired over 280 pilots and 250 cabin crew during a recent recruitment drive conducted across Delhi, Mumbai and Bangalore.\nApproximately 300 pilots actively participated in the selection process conducted during the drive, the airline said.\nFormerly under the Indian Government, Air India Express is now owned by Tata Group, which acquired the airline along with the full-service carrier Air India in late January last year.\nBesides Air India and Air India Express, Tata Group also owns domestic budget carrier AirAsia India as well as a 51 per cent stake in its joint venture airline with Singapore Airlines, Vistara.",
    rights: "moneycontrol.com",
    rank: 2753,
    topic: "news",
    country: "IN",
    language: "en",
    authors: "",
    media:
      "https://images.moneycontrol.com/static-mcnews/2017/09/Air-India-Express-770x433.jpg",
    is_opinion: false,
    twitter_account: "@moneycontrolcom",
    _score: 7.1824574,
    _id: "107194928f2778d4499f3febe2d42c8c",
  },
  {
    title:
      "India to see AWS invest $12.7 billion into cloud infrastructure by 2030",
    author: "Paul Hill",
    published_date: "2023-05-18 16:35:47",
    published_date_precision: "full",
    link: "https://www.neowin.net/news/india-to-see-aws-invest-127-billion-into-cloud-infrastructure-by-2030/",
    clean_url: "neowin.net",
    excerpt:
      "AWS has said it will invest $12.7 billion in cloud infrastructure in India to meet growing demand. The investments will be made between now and 2030 and build on several other investments.",
    summary:
      "Amazon \nhas announced\n that its \nAmazon Web Services (AWS) business\n will invest $12.7 billion into cloud infrastructure in India by the end of the decade. The decision comes as demand for cloud services in India increases. By the end of the decade, the investment will contribute $23.3 billion to India's total GDP.\n \n'PM Narendra Modi ji's Digital India vision is driving expansion of cloud & data centres in India,' said Rajeev Chandrashekhar, minister of state for electronics and information technology, skill development and entrepreneurship in India.",
    rights: "neowin.net",
    rank: 3713,
    topic: "news",
    country: "US",
    language: "en",
    authors: "Paul Hill",
    media:
      "https://cdn.neowin.com/news/images/uploaded/2023/05/1684424925_amazon-india_story.jpg",
    is_opinion: false,
    twitter_account: "@NeowinFeed",
    _score: 7.178727,
    _id: "de0c966366ff047cdeeea1f440ecfbd3",
  },
  {
    title:
      "Indian Visa Online For British, USA, French, German and Canadian Citizens",
    author: "AB Newswire",
    published_date: "2023-05-17 22:54:01",
    published_date_precision: "full",
    link: "http://markets.buffalonews.com/buffnews/article/abnewswire-2023-5-17-indian-visa-online-for-british-usa-french-german-and-canadian-citizens",
    clean_url: "buffalonews.com",
    excerpt:
      "INDIAN VISA FOR BRITISH CITIZENS The Republic of India is located in Asia's southernmost region. It is well-known for its rich local culture and the distinctive features that give it its identity.…",
    summary:
      "The Republic of India is located in Asia's southernmost region. It is well-known for its rich local culture and the distinctive features that give it its identity. Because India is Asia's most popular tourist destination, visitors come from all over the world to learn about the country's history, traditions, cuisine, and way of life. The United Kingdom is one of the countries whose citizens must obtain a visa before entering India. The India e-Visa is a digital entry visa for British citizens to India.",
    rights: "buffalonews.com",
    rank: 2700,
    topic: "news",
    country: "US",
    language: "en",
    authors: "AB Newswire",
    media: "",
    is_opinion: false,
    twitter_account: null,
    _score: 7.1765757,
    _id: "09bcf816c56895f21675dff0f3b0d9f4",
  },
  {
    title:
      "New Delhi, India: A Summit on India's G20 Presidency and Sustainability & Unveiling of the Biography",
    author: "Business Standard",
    published_date: "2023-05-17 13:30:05",
    published_date_precision: "full",
    link: "https://www.business-standard.com/content/press-releases-ani/new-delhi-india-a-summit-on-india-s-g20-presidency-and-sustainability-unveiling-of-the-biography-j-c-chaudhry-an-incredible-aakash-story-by-asiaone-123051700949_1.html",
    clean_url: "business-standard.com",
    excerpt:
      "New Delhi [India], May 17 (ANI/GPRC): AsiaOne Magazine has organized a summit on Sustainability in Post Covid Times at The Grand Vasant Kunj, New Delhi, India. The summit also witnessed the unveiling…",
    summary:
      "New Delhi, India: A Summit on India's G20 Presidency and Sustainability & Unveiling of the Biography - J.C. Chaudhry - An Incredible Aakash Story by AsiaOne\n \nNew Delhi [India], May 17 (ANI/GPRC): AsiaOne Magazine has organized a summit on Sustainability in Post Covid Times at The Grand Vasant Kunj, New Delhi, India. The summit also witnessed the unveiling of biography of Dr. J. C. Chaudhry: J.C. Chaudhry - An Incredible Aakash Story. The focus of the summit was Sustainability as one of the objectives of India's G20 drive this year.",
    rights: "business-standard.com",
    rank: 1298,
    topic: "news",
    country: "IN",
    language: "en",
    authors: "ANI Press Release,Business Standard",
    media:
      "https://www.business-standard.com/assets/web-assets/images/Business_Standard_685x385.jpg",
    is_opinion: false,
    twitter_account: "@bsindia",
    _score: 7.1765556,
    _id: "c2260e8bdbcb19acad26413245d8ffb5",
  },
  {
    title:
      "We are investing in the country for next decades: AWS India president Puneet Chandok",
    author: "Debangana Ghosh",
    published_date: "2023-05-18 07:40:31",
    published_date_precision: "full",
    link: "https://www.moneycontrol.com/news/business/we-are-investing-in-the-country-for-next-decades-aws-india-president-puneet-chandok-10613211.html",
    clean_url: "moneycontrol.com",
    excerpt:
      "Amazon Web Services (AWS) is betting big on India, with long term investment and skill training plans, said Puneet Chandok, president of commercial business, AWS India and South Asia, reflecting…",
    summary:
      "Amazon Web Services (AWS) is betting big on India, with long term investment and skill training plans, said Puneet Chandok, president of commercial business, AWS India and South Asia, reflecting bullishness on the India opportunity amidst the \nslowdown in its cloud services business expected globally\n.\nOut of AWS' 31 geographic regions globally, India is amongst the few countries to have two locations—in Mumbai and Hyderabad. The company also announced a new investment of $12.7 billion to build cloud infrastructure in India by 2030.",
    rights: "moneycontrol.com",
    rank: 2753,
    topic: "news",
    country: "IN",
    language: "en",
    authors: "Debangana Ghosh",
    media:
      "https://images.moneycontrol.com/static-mcnews/2023/05/Puneet-Chandok-President-of-Commercial-Business-AWS-India-South-Asia-Amazon-Web-Services-India-Pvt.-Ltd-654x435.jpg",
    is_opinion: false,
    twitter_account: "@moneycontrolcom",
    _score: 7.175251,
    _id: "f62a9b06a46090fa266fe32e03ad3457",
  },
  {
    title:
      "Hyundai partners with Shell to install DC Fast chargers across 36 EV dealerships in India",
    author: "Etauto Desk",
    published_date: "2023-05-17 09:45:00",
    published_date_precision: "timezone unknown",
    link: "https://auto.economictimes.indiatimes.com/news/industry/hyundai-partners-with-shell-to-install-dc-fast-chargers-across-36-ev-dealerships-in-india/100297829",
    clean_url: "indiatimes.com",
    excerpt:
      "The MoA was signed between Hyundai Motor India Ltd. and Shell India Markets Private Limited in the presence of Jae Wan Ryu, Executive Director, Hyundai Motor India Limited and Sanjay Varkey, Director,…",
    summary:
      "The MoA was signed between Hyundai Motor India Ltd. and Shell India Markets Private Limited in the presence of Jae Wan Ryu, Executive Director, Hyundai Motor India Limited and Sanjay Varkey, Director, Shell India Markets Private Limited, at HMIL's headquarters in Gurugram, Haryana. The strategic partnership aims to increase the expansion of charging infrastructure for BEV in India.\n \n \n \n \n \nShell's network of chargers would also be available in Hyundai CMS along with HMIL's own chargers & those from 3rd party Charge Point Operators.",
    rights: "indiatimes.com",
    rank: 296,
    topic: "news",
    country: "IN",
    language: "en",
    authors: "ET Auto,ETAuto Desk,www.ETAuto.com",
    media:
      "https://etimg.etb2bimg.com/thumb/msid-100297829,imgsize-547886,width-1200,height=765,overlay-etauto/industry/hyundai-partners-with-shell-to-install-dc-fast-chargers-across-36-ev-dealerships-in-india.jpg",
    is_opinion: false,
    twitter_account: "http://twitter.com/ETAuto",
    _score: 7.169015,
    _id: "819cdbfd92650e816910436ab2d5c5e3",
  },
  {
    title: "Why Does the G7 Need India?",
    author: "",
    published_date: "2023-05-19 20:45:00",
    published_date_precision: "timezone unknown",
    link: "https://thediplomat.com/2023/05/why-does-the-g7-need-india/",
    clean_url: "thediplomat.com",
    excerpt: "Engaging with India is imperative for the G-7.",
    summary:
      "Advertisement\nIndian Prime Minister Narendra Modi is \nvisiting\n Hiroshima, Japan, from May 19 to 21 where he will represent India as an invited country at the 49th G-7 Summit. This engagement comes amid a busy diplomatic schedule for India, which holds the presidency of the G-20 and the Shanghai Cooperation Organization (SCO) for 2023. The G-7 Summit is thus a platform for India to take its many multilateral engagements forward. For the G-7, engaging with India is imperative for several reasons.\nFirst, with a GDP of \n$2.",
    rights: "thediplomat.com",
    rank: 2310,
    topic: "news",
    country: "ID",
    language: "en",
    authors: "",
    media:
      "https://thediplomat.com/wp-content/uploads/2023/05/sizes/td-story-s-2/thediplomat_2023-05-19-153008.jpg",
    is_opinion: false,
    twitter_account: null,
    _score: 7.168895,
    _id: "43b9b2dfbc0d9af09c69f8122d8734c1",
  },
  {
    title:
      "Amazon India: AWS to invest Rs 1.05 trillion to boost cloud infrastructure in India",
    author: "Business Standard",
    published_date: "2023-05-19 03:46:07",
    published_date_precision: "full",
    link: "https://www.business-standard.com/companies/news/aws-to-invest-rs-1-05-trillion-to-boost-cloud-infrastructure-in-india-123051900165_1.html",
    clean_url: "business-standard.com",
    excerpt:
      "Amazon India: Amazon's cloud computing unit said its long-term commitment in India will reach Rs 1.36 trillion by 2030",
    summary:
      "BS Web Team\n New Delhi \nPhoto: Bloomberg\nYour browser does not support the \naudio\n element.\n1x\n Amazon Web Services (AWS) WILL invest Rs 1.05 trillion into cloud infrastructure in India by 2030 as it looks to meet growing customer demand for cloud services in the country. \n \n Amazon's cloud computing unit on Thursday said that the planned investment in data centre infrastructure in India will support an estimated average of 1,31,700 full-time equivalent (FTE) jobs in Indian businesses each year.\n \n \n These positions, including construction, facility maintenance, engineering, telecommunications, and other jobs, are part of the data centre supply chain in India.",
    rights: "Copyright www.business-standard.com",
    rank: 1298,
    topic: "news",
    country: "IN",
    language: "en",
    authors: "Business Standard",
    media:
      "https://bsmedia.business-standard.com/_media/bs/img/article/2023-04/28/full/1682698090-2846.jpg",
    is_opinion: false,
    twitter_account: "@bsindia",
    _score: 7.1680913,
    _id: "c0bb666c2ca6aa37baf0e79c52d53107",
  },
  {
    title:
      "IDRC is Credible and Technology driven Arbitration Institution: Justice MR Shah at Arbitrate in India Conclave, 2023",
    author: "Business Standard",
    published_date: "2023-05-18 13:30:05",
    published_date_precision: "full",
    link: "https://www.business-standard.com/content/press-releases-ani/idrc-is-credible-and-technology-driven-arbitration-institution-justice-mr-shah-at-arbitrate-in-india-conclave-2023-123051800992_1.html",
    clean_url: "business-standard.com",
    excerpt:
      "New Delhi [India], May 18 (ANI/BusinessWire India): Indian Dispute Resolution Centre's (IDRC) 2nd Arbitrate in India Conclave 2023' was organized in collaboration with the Bar Council of India's India…",
    summary:
      "New Delhi [India], May 18 (ANI/BusinessWire India): Indian Dispute Resolution Centre's (IDRC) 2nd Arbitrate in India Conclave 2023' was organized in collaboration with the Bar Council of India's India International University of Legal Research and Education, Goa (IIULER) recently at Dr Ambedkar International Centre, Janpath, New Delhi. The event marked the 3rd Anniversary of IDRC.\nJustice M R Shah, Judge, Supreme Court of India, who was the Chief Guest at the event, delivered the Presidential Address.",
    rights: "business-standard.com",
    rank: 1298,
    topic: "news",
    country: "IN",
    language: "en",
    authors: "ANI Press Release,Business Standard",
    media:
      "https://www.business-standard.com/assets/web-assets/images/Business_Standard_685x385.jpg",
    is_opinion: false,
    twitter_account: "@bsindia",
    _score: 7.167342,
    _id: "f41e5358189c1a33a929975712e1d9d5",
  },
  {
    title: "India will need a foolproof case to tax Netflix",
    author: "Mint SnView",
    published_date: "2023-05-15 05:37:12",
    published_date_precision: "full",
    link: "https://www.livemint.com/opinion/online-views/india-will-need-a-foolproof-case-to-tax-netflix-11684128575647.html",
    clean_url: "livemint.com",
    excerpt:
      "Similar cases from the past suggest it won't be easy for tax authorities to prove in court that the company has a permanent establishment here",
    summary:
      "Mint recently reported that India may tax US-headquartered Netflix's income from streaming services here. India is not alone in attempting this. Governments across the world are trying to write new rules and impose new taxes on foreign companies. The common goal is to ensure that these corporations, including digital firms, pay tax on the revenues they earn in these jurisdictions. This also ties up with a concerted global move towards ending multinational companies' practices collectively dubbed as base erosion and profit-shifting.",
    rights: "livemint.com",
    rank: 1404,
    topic: "news",
    country: "IN",
    language: "en",
    authors: "Mint SnapView",
    media:
      "https://www.livemint.com/lm-img/img/2023/05/15/600x338/379c48ac-ea14-11eb-b8ce-2737a30d4ad4_1627468180968_1684128730634.jpg",
    is_opinion: true,
    twitter_account: "@mint",
    _score: 7.1668725,
    _id: "4971440c586c44aa59b3e894bb9da414",
  },
  {
    title: "Tesla seems ready to open a factory in India",
    author: "Niharika Sharma",
    published_date: "2023-05-17 12:25:00",
    published_date_precision: "full",
    link: "https://qz.com/tesla-india-factory-proposal-1850444870",
    clean_url: "qz.com",
    excerpt: "A group of Tesla executives might visit India this week",
    summary:
      "Tesla has developed feelings for India yet again.\nA group of Tesla executives could visit India this week to meet government officials about potentially building a factory in the country, both \nBloomberg\n and \nReuters\n reported, citing sources. Tesla's previous \nplan to sell its vehicles in India fell through\n last year over tax issues.\nTesla's push to sell its cars in India represents the electric vehicle maker's latest effort to increase its footprint beyond China. Shanghai houses Tesla' \nfirst factory\n outside the US.",
    rights: "qz.com",
    rank: 424,
    topic: "news",
    country: "US",
    language: "en",
    authors: "Niharika Sharma",
    media:
      "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/f22cb2207a4500dd73b68dcecd6c67db.jpg",
    is_opinion: false,
    twitter_account: "qz",
    _score: 7.164043,
    _id: "cc6cc5f1173ab45a1d1c42129dd78a5d",
  },
  {
    title: "Air India Express Hires Over 280 Pilots, 250 Cabin Crew",
    author: "PTI",
    published_date: "2023-05-16 15:00:35",
    published_date_precision: "full",
    link: "https://www.outlookindia.com/business/air-india-express-hires-over-280-pilots-250-cabin-crew-news-286795",
    clean_url: "outlookindia.com",
    excerpt:
      "Low-cost international carrier Air India Express on Tuesday said it has hired over 280 pilots and 250 cabin crew during a recent recruitment drive conducted across Delhi, Mumbai and Bangalore.",
    summary:
      "Low-cost international carrier Air India Express on Tuesday said it has hired over 280 pilots and 250 cabin crew during a recent recruitment drive conducted across Delhi, Mumbai and Bangalore.\n\nApproximately 300 pilots actively participated in the selection process conducted during the drive, the airline said.\n\nFormerly under the Indian Government, Air India Express is now owned by Tata Group, which acquired the airline along with the full-service carrier Air India in late January last year.\n\nBesides Air India and Air India Express, Tata Group also owns domestic budget carrier AirAsia India as well as a 51 per cent stake in its joint venture airline with Singapore Airlines, Vistara.",
    rights: "outlookindia.com",
    rank: 3864,
    topic: "news",
    country: "IN",
    language: "en",
    authors: "PTI",
    media:
      "https://imgnew.outlookindia.com/uploadimage/library/16_9/16_9_5/IMAGE_1646109056.jpeg?utm_source=fb",
    is_opinion: false,
    twitter_account: "@outlookindia",
    _score: 7.163226,
    _id: "98725547e12be0b5a8a95494c1735aa4",
  },
  {
    title:
      "India-Japan Trade Hits 10-Year Milestone With $17.15 Billion FDI Inflow: Commerce Department Data",
    author: "Harshika Yadav",
    published_date: "2023-05-21 17:50:45",
    published_date_precision: "full",
    link: "https://www.news18.com/business/indo-japan-trade-hits-10-year-milestone-with-us-17-15-billion-fdi-inflow-commerce-department-data-7878415.html",
    clean_url: "news18.com",
    excerpt:
      "Japan has been actively encouraging its companies to relocate their manufacturing operations from China to India",
    summary:
      "Japan is making significant investments in India and has emerged as one of the country's largest investors with a cumulative Foreign Direct Investment (FDI) amounting to US$ 17.15 billion between April 2022 and January 2023, according to the Department of Commerce.\nThe East Asian country has been actively encouraging its companies to relocate their manufacturing operations from China to India.\nAuguste Tano Kouame, World Bank's Country Director in India said, 'India's economy has been remarkably resilient to the deteriorating external environment, and strong macroeconomic fundamentals have placed it in good stead compared to other emerging market economies.",
    rights: "news18.com",
    rank: 2238,
    topic: "economics",
    country: "IN",
    language: "en",
    authors: "Harshika Yadav",
    media:
      "https://images.news18.com/ibnlive/uploads/2023/05/india-japan111-168469079416x9.jpg",
    is_opinion: false,
    twitter_account: "@cnnnews18",
    _score: 7.1539736,
    _id: "c00cb6a966e10e56fa54e0d714592956",
  },
  {
    title:
      "AWS to invest $12.7 billion in India's cloud infrastructure by 2030",
    author: "ETtech",
    published_date: "2023-05-18 05:30:00",
    published_date_precision: "timezone unknown",
    link: "https://economictimes.indiatimes.com/tech/technology/aws-to-invest-12-7-billion-in-indias-cloud-infrastructure-by-2030/articleshow/100319592.cms",
    clean_url: "indiatimes.com",
    excerpt:
      "AWS newly appointed chief executive officer, Adam Selipsky, considers India a ‘bright spot amid a period of unprecedented global uncertainty.",
    summary:
      "Reuters\nCurrently, AWS hosts two of India's largest digital public infrastructures (DPI) — document storage network DigiLocker and vaccination platform Cowin \nAmazon Web Services (AWS) said on Thursday it will invest $12.7 billion (Rs 1.05 lakh crore) in India's \ncloud infrastructure\n by 2030 to meet the growing customer demand for cloud services in India. The investment is expected to support an estimated average of 131,700 full-time equivalent (FTE) jobs in Indian businesses each year. This will also take AWS' total investment in India to $16.",
    rights: "indiatimes.com",
    rank: 296,
    topic: "economics",
    country: "IN",
    language: "en",
    authors: "ETtech",
    media:
      "https://img.etimg.com/thumb/msid-100319595,width-1070,height-580,imgsize-60300,overlay-ettech/photo.jpg",
    is_opinion: false,
    twitter_account: "@EconomicTimes",
    _score: 7.152079,
    _id: "24c7efde2867f133df83391bb2175ef8",
  },
  {
    title:
      "Trouble Brewing For Meta? Facebook Parent Sees Year's 4th Major Executive Exit In India",
    author: "Shomik Sen Bhattacharjee",
    published_date: "2023-05-17 12:03:07",
    published_date_precision: "full",
    link: "https://www.benzinga.com/news/23/05/32439791/trouble-brewing-for-meta-facebook-parent-sees-years-4th-major-executive-exit-in-india",
    clean_url: "benzinga.com",
    excerpt:
      "This story was originally published on the Benzinga India portal.",
    summary:
      "This story was originally published on the Benzinga India portal.\nManish Chopra, the director and head of partnerships of Facebook parent Meta Platforms Inc's META India unit, is stepping down after a four-and-a-half-year stint.\n\nWhat Happened: In a LinkedIn post, Chopra acknowledged his journey with Meta and hinted at an upcoming new professional phase.\n\nChopra joined Meta India in January 2019 and led partnerships in the country, an increasingly crucial market for Meta. He expressed gratitude for the trust placed in him and pride in his team's work in fostering growth, engagement and support for creators and businesses across Facebook, Instagram and WhatsApp.",
    rights: "benzinga.com",
    rank: 1933,
    topic: "news",
    country: "US",
    language: "en",
    authors: "Shomik Sen Bhattacharjee",
    media:
      "https://cdn.benzinga.com/files/images/story/2023/05/17/muhammad-asyfaul-52oeap8gcms-unsplash_1.jpg?width=1200&height=800&fit=crop",
    is_opinion: false,
    twitter_account: "@benzinga",
    _score: 7.148591,
    _id: "490f268fc7008f746e847aaed0288e99",
  },
  {
    title:
      "Michael Douglas wants to visit Hyderabad, Goa on next India trip with Catherine Zeta-Jones: We haven't been to the south",
    author: "HT Entertainment Desk",
    published_date: "2023-05-20 08:57:53",
    published_date_precision: "full",
    link: "https://www.hindustantimes.com/entertainment/hollywood/michael-douglas-wants-to-visit-hyderabad-goa-on-next-india-trip-with-catherine-zeta-jones-we-haven-t-been-to-the-south-101684571449015.html",
    clean_url: "hindustantimes.com",
    excerpt:
      "At Cannes 2023, Hollywood actor Michael Douglas visited the India Pavilion and said he has not yet travelled to south India, and would like to visit soon.",
    summary:
      "Earlier this week, veteran actor \nMichael Douglas \nreceived the honorary Palme d'Or at the 76th Cannes Film Festival. He recently also attended a session at the India Pavilion with minister of state for information and broadcasting L Murugan, where the actor received an invitation for the International Film Festival of India (IFFI) in Goa, which will be held in November. \nAlso read: \nMichael Douglas, Catherine Zeta-Jones explore India\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nMichael Douglas and Catherine Zeta-Jones during one of their visits to India.",
    rights: "hindustantimes.com",
    rank: 980,
    topic: "entertainment",
    country: "IN",
    language: "en",
    authors: "HT Entertainment Desk",
    media:
      "https://www.hindustantimes.com/ht-img/img/2023/05/20/1600x900/Michael-Douglas-Catherine-Zeta_1684571611131_1684571624922.jpg",
    is_opinion: false,
    twitter_account: "@httweets",
    _score: 7.1485815,
    _id: "f8757028dd848acd73a67fd87e774daf",
  },
  {
    title: "India's links to Silicon Valley grow",
    author: "N Francisco Silicon Valley",
    published_date: "2023-05-15 10:40:13",
    published_date_precision: "full",
    link: "https://timesofindia.indiatimes.com/blogs/silicon-valley-viewpoint/indias-links-to-silicon-valley-grow/",
    clean_url: "indiatimes.com",
    excerpt:
      "India's economic ties to the San Francisco/Silicon Bay Area are continuing to grow, led by reform and growth in India, Silicon Valley's global reach, and geostrategic alignment between India and the…",
    summary:
      "India's economic ties to the San Francisco/Silicon Bay Area are continuing to grow, led by reform and growth in India, Silicon Valley's global reach, and geostrategic alignment between India and the US. These ties have been building for some time. What's new, however, is the acceleration.  \n\n\nLet's start with geopolitics. Faced with aggressive policies and an ominous convergence of ideology and technology in China, policy perspectives between the U.S. and India are increasingly aligned. Points of connection include the Quad (linking India, the U.",
    rights: "indiatimes.com",
    rank: 296,
    topic: "news",
    country: "IN",
    language: "en",
    authors:
      "Advises Businesses,Comparative Innovation Systems,Governments,International Trade,Investment,N Francisco Silicon Valley,R D,Sean Randolph,Universities",
    media:
      "https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2020/08/Sean.jpg",
    is_opinion: false,
    twitter_account: null,
    _score: 7.1481624,
    _id: "d41dda9433f75aec8621c1b02bf95d64",
  },
  {
    title: "What next for India and Russia in trade and investment",
    author: "ET CONTRIBUTORS",
    published_date: "2023-05-16 16:45:00",
    published_date_precision: "timezone unknown",
    link: "https://economictimes.indiatimes.com/news/economy/foreign-trade/what-next-for-india-and-russia-in-trade-and-investment/articleshow/100284543.cms",
    clean_url: "indiatimes.com",
    excerpt:
      "Trade between India and Russia reached the record level of 44.4 bln USD during the financial year 2022-2023, having surpassed the targets set by the leadership of the two countries. Today Russia is…",
    summary:
      "iStock\nAt present, India's declining export to Russia predominantly consists of pharmaceuticals and organic chemicals.\nWhen I \nwrote for this newspaper\n back in 2019, I stressed the need for Russia and India to develop cutting-edge financial mechanisms in order to overcome the stalemate in their economic cooperation, when, despite diversified efforts on both sides, the mutual trade volumes barely crossed the 10 bln USD mark for several years in a row.Since then tremendous changes took place globally and in our two countries.",
    rights: "indiatimes.com",
    rank: 296,
    topic: "economics",
    country: "IN",
    language: "en",
    authors: "ET CONTRIBUTORS",
    media:
      "https://img.etimg.com/thumb/msid-100284518,width-1070,height-580,imgsize-19346,overlay-economictimes/photo.jpg",
    is_opinion: false,
    twitter_account: "@EconomicTimes",
    _score: 7.148123,
    _id: "4aa20c4db87d61768df34370364181b0",
  },
  {
    title:
      "AI, AI Express hired more than 3,900 people this year: Campbell Wilson",
    author: "Business Standard",
    published_date: "2023-05-19 16:50:04",
    published_date_precision: "full",
    link: "https://www.business-standard.com/companies/news/ai-ai-express-hired-more-than-3-900-people-this-year-campbell-wilson-123051901246_1.html",
    clean_url: "business-standard.com",
    excerpt:
      "Air India, under the stewardship of Tata Group, is revamping the airline group and hiring more people as it expands the fleet as well as operations",
    summary:
      'Press Trust of India\n New Delhi \nYour browser does not support the \naudio\n element.\n1x\n Air India chief Campbell Wilson on Friday said the airline and Air India Express have hired more than 3,900 people, including over 500 pilots and 2,400 cabin crew members, since the start of this year.\n   \n Air India, under the stewardship of Tata Group, is revamping the airline group and hiring more people as it expands the fleet as well as operations.\n  \n \n "Since the start of the year more than 500 pilots, 2,400 cabin crew and 1,000 other staff have been recruited across AI and AIX.',
    rights: "Copyright www.business-standard.com",
    rank: 1298,
    topic: "news",
    country: "IN",
    language: "en",
    authors: "Business Standard",
    media:
      "https://bsmedia.business-standard.com/_media/bs/img/article/2022-09/02/full/1662137892-9876.jpg",
    is_opinion: false,
    twitter_account: "@bsindia",
    _score: 7.148038,
    _id: "9b5be62b567a554ef88e47e4644a349a",
  },
  {
    title:
      "AWS to invest $12.7 billion into cloud infrastructure in India by 2030",
    author: "PTI",
    published_date: "2023-05-18 06:45:00",
    published_date_precision: "timezone unknown",
    link: "https://www.financialexpress.com/industry/aws-to-invest-12-7-billion-into-cloud-infrastructure-in-india-by-2030/3092198/",
    clean_url: "financialexpress.com",
    excerpt:
      "The planned investment in data centre infrastructure in India will support an estimated average of 1,31,700 full-time equivalent (FTE) jobs in Indian businesses each year, Amazon's cloud computing…",
    summary:
      "Amazon Web Services (AWS) \non Thursday announced plans to invest Rs 1,05,600 crore (USD 12.7 billion) into cloud infrastructure in India by 2030 as it looks to meet growing customer demand for cloud services in the country. The planned investment in data centre infrastructure in India will support an estimated average of 1,31,700 full-time equivalent (FTE) jobs in Indian businesses each year, Amazon's cloud computing unit, AWS, said in a statement. These positions, including construction, facility maintenance, engineering, telecommunications, and other jobs, are part of the data centre supply chain in India.",
    rights: "financialexpress.com",
    rank: 2106,
    topic: "news",
    country: "IN",
    language: "en",
    authors: "PTI",
    media:
      "https://www.financialexpress.com/wp-content/uploads/2023/05/AWS.jpg",
    is_opinion: false,
    twitter_account: "@FinancialXpress",
    _score: 7.147444,
    _id: "66c4fd51ef8c8ca6c43c9949d7c203dd",
  },
  {
    title:
      "Air India, Air India Express have hired more than 3,900 people this year, says airline chief Campbell Wilson",
    author: "PTI",
    published_date: "2023-05-19 07:41:14",
    published_date_precision: "full",
    link: "https://www.thehindu.com/business/Industry/air-india-air-india-express-have-hired-more-than-3900-people-this-year-says-airline-chief-campbell-wilson/article66869449.ece",
    clean_url: "thehindu.com",
    excerpt:
      "Air India chief Campbell Wilson on May 19 said the airline and Air India Express have hired more than 3,900 people, including over 500 pilots and 2,400 cabin crew members, since the start of 2023.",
    summary:
      'May 19, 2023 01:11 pm | Updated 01:11 pm IST - New Delhi \n\nAir India Chief Executive Officer Campbell Wilson.\n| Photo Credit: Reuters\n\nAir India chief Campbell Wilson on Friday (May 19) said the airline and Air India Express have hired more than 3,900 people, including over 500 pilots and 2,400 cabin crew members, since the start of this year.\nAir India, under \nthe stewardship of Tata Group\n, is revamping the airline group and hiring more people as \nit expands the fleet as well as operations\n.\nAlso Read | \nAir India to hire 500 cabin crew, 50 pilots every month for its rapid fleet expansion: CEO Campbell Wilson\n "Since the start of the year more than 500 pilots, 2,400 cabin crew and 1,000 other staff have been recruited across AI and AIX.',
    rights: "Copyright (C) 2023 THG PUBLISHING PVT LTD.",
    rank: 984,
    topic: "news",
    country: "IN",
    language: "en",
    authors: "PTI",
    media:
      "https://th-i.thgim.com/public/incoming/553aw9/article66869492.ece/alternates/LANDSCAPE_1200/2023-03-31T013037Z_1194440869_RC2GKZ9K6J5P_RTRMADP_3_INDIA-AVIATION-AIR-INDIA.JPG",
    is_opinion: false,
    twitter_account: "@The_Hindu",
    _score: 7.1456423,
    _id: "e9a7d1aac8e0561773b574d00ba7e6c2",
  },
  {
    title:
      "iPhone 15, iPhone 15 Plus to be made in India by Tata Group as Apple looks to diversify supply sources: Report",
    author: "Priya Pathak",
    published_date: "2023-05-15 10:30:00",
    published_date_precision: "timezone unknown",
    link: "https://www.financialexpress.com/life/technology-iphone-15-iphone-15-plus-to-be-made-in-india-by-tata-group-as-apple-looks-to-diversify-supply-sources-report-3088296/",
    clean_url: "financialexpress.com",
    excerpt:
      "Apple is eyeing Tata Group for the fact that it is one of the largest conglomerates in India.",
    summary:
      "Tata Group, one of India's leading conglomerates, has entered into a manufacturing contract with Apple for its upcoming iPhone 15 and 15 Plus in India. The news comes from TrendForce, a Taiwanese market intelligence provider, that claims Tata will be the fourth iPhone manufacturing partner for Apple in India. It is unknown exactly what percentage of the total iPhones will be manufactured in India in partnership with Tata but it is worth noting that Apple currently has three manufacturing partners in India – Wistron, Foxconn, and Pegatron.",
    rights: "financialexpress.com",
    rank: 2106,
    topic: "tech",
    country: "IN",
    language: "en",
    authors: "Priya Pathak",
    media:
      "https://www.financialexpress.com/wp-content/uploads/2023/05/Tata.webp",
    is_opinion: false,
    twitter_account: "@FinancialXpress",
    _score: 7.1444225,
    _id: "45bbbef3ce0799322622d880c5e59e5a",
  },
  {
    title: "Enhancing India's maritime footprint in the Indo-Pacific",
    author: "Hindustan Times",
    published_date: "2023-05-17 06:37:27",
    published_date_precision: "full",
    link: "https://www.hindustantimes.com/ht-insight/economy/enhancing-india-s-maritime-footprint-in-the-indopacific-101684304166961.html",
    clean_url: "hindustantimes.com",
    excerpt:
      "Authored by Shrabana Barua, political analyst, New Delhi and Sankalp Gurjar, assistant professor, Manipal Academy of Higher Education, Karnataka.",
    summary:
      "From May 2-8, 2023, the maiden Association of Southeast Asian Nations (ASEAN)-India Maritime Exercise (AIME) took place in the Indian Ocean. The harbour phase of the exercise began from Changi Naval Base in Singapore, which is located close to the strategic Malacca Strait. The sea phase took place in the South China Sea. The AIME-23 saw all 10 ASEAN member States participate, eight of which sent their naval ships, while Cambodia and Laos, which are under considerable Chinese influence, sent their delegates.",
    rights: "hindustantimes.com",
    rank: 980,
    topic: "economics",
    country: "IN",
    language: "en",
    authors: "Hindustan Times",
    media:
      "https://www.hindustantimes.com/ht-img/img/2023/05/17/1600x900/india-us-military-malabar_f35dbb40-9b14-11e8-86f4-8f26f26dd985_1684304631966.jpg",
    is_opinion: false,
    twitter_account: "@httweets",
    _score: 7.1419725,
    _id: "76e5693371778862ec2152a4d5c1089e",
  },
  {
    title: "Nepal PM aiming to create new history with upcoming India trip",
    author: "IANS",
    published_date: "2023-05-20 10:00:00",
    published_date_precision: "timezone unknown",
    link: "https://www.msn.com/en-in/news/world/nepal-pm-aiming-to-create-new-history-with-upcoming-india-trip/ar-AA1brjSa",
    clean_url: "msn.com",
    excerpt:
      "Kathmandu, May 20 (IANS) Nepalese Prime Minister Pushpa Kamal Dahal on Saturday said he is aiming to create a new history during his upcoming visit to India.",
    summary:
      'Kathmandu, May 20 (IANS) Nepalese Prime Minister Pushpa Kamal Dahal on Saturday said he is aiming to create a new history during his upcoming visit to India.\nPrachanda, as the Prime Minister is popularly known, is all set to embark on a four-day official visit to India on May 29.\n"I am going to India to add new dynamism in our bilateral relations. We are hoping that we will get some new things this time during my India visit," he said.\n"This is a good opportunity for both Nepal and India. We will strengthen our bilateral ties as well as explore new avenues in our areas of cooperation.',
    rights: "msn.com",
    rank: 100,
    topic: "world",
    country: "US",
    language: "en",
    authors: "IANS",
    media:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA15E81e.img?h=315&w=600&m=6&q=60&o=t&l=f&f=jpg&x=246&y=135",
    is_opinion: false,
    twitter_account: null,
    _score: 7.1382694,
    _id: "ffbf76170554f5f122c4d3f9dadc2e10",
  },
  {
    title:
      "Air India Express hires 280 pilots, 250 crew in recent recruitment drive",
    author: "Business Standard",
    published_date: "2023-05-16 13:52:15",
    published_date_precision: "full",
    link: "https://www.business-standard.com/companies/news/air-india-express-hires-280-pilots-250-crew-in-recent-recruitment-drive-123051600886_1.html",
    clean_url: "business-standard.com",
    excerpt:
      "Low-cost international carrier Air India Express on Tuesday said it has hired over 280 pilots and 250 cabin crew during a recent recruitment drive conducted across Delhi, Mumbai and Bangalore.",
    summary:
      "Press Trust of India\n Mumbai \nYour browser does not support the \naudio\n element.\n1x\n Low-cost international carrier Air India Express on Tuesday said it has hired over 280 pilots and 250 cabin crew during a recent recruitment drive conducted across Delhi, Mumbai and Bangalore. \n Approximately 300 pilots actively participated in the selection process conducted during the drive, the airline said.\n \n Formerly under the Indian Government, Air India Express is now owned by Tata Group, which acquired the airline along with the full-service carrier Air India in late January last year.",
    rights: "Copyright www.business-standard.com",
    rank: 1298,
    topic: "news",
    country: "IN",
    language: "en",
    authors: "Business Standard,Press Trust",
    media:
      "https://bsmedia.business-standard.com/_media/bs/img/article/2021-06/11/full/1623428509-0845.jpg",
    is_opinion: false,
    twitter_account: "@bsindia",
    _score: 7.137633,
    _id: "5d2cb120f53c1e64997ef85680b74e72",
  },
  {
    title:
      "We are investing in India for the next decades: AWS country president Puneet Chandok",
    author: "Arun Padmanabhan",
    published_date: "2023-05-18 07:37:13",
    published_date_precision: "full",
    link: "https://www.moneycontrol.com/news/business/we-are-investing-in-india-for-the-next-decades-aws-country-president-puneet-chandok-10613221.html",
    clean_url: "moneycontrol.com",
    excerpt:
      "The company has announced a new investment of $12.7 billion to construct cloud infrastructure in India by 2030.",
    summary:
      "Amazon Web Services (AWS) is betting big on India, with long-term investment and skill training plans, said Puneet Chandok, president of commercial business, AWS India and South Asia. This reflects the company's bullishness on the India opportunity, despite the expected slowdown in its cloud services business globally.\nAmong AWS' 31 geographic regions worldwide, India stands out as one of the few countries with two locations—Mumbai and Hyderabad. Additionally, the company has announced a new investment of $12.",
    rights: "moneycontrol.com",
    rank: 2753,
    topic: "news",
    country: "IN",
    language: "en",
    authors: "Arun Padmanabhan",
    media:
      "https://images.moneycontrol.com/static-mcnews/2023/05/Puneet-Chandok-President-of-Commercial-Business-AWS-India-South-Asia-Amazon-Web-Services-India-Pvt.-Ltd-1-654x435.jpg",
    is_opinion: false,
    twitter_account: "@moneycontrolcom",
    _score: 7.1375966,
    _id: "806744c3a273b38497aa3e0fe8790543",
  },
  {
    title: "Tesla seems ready to open a factory in India",
    author: "Niharika Sharma",
    published_date: "2023-05-17 12:25:00",
    published_date_precision: "full",
    link: "https://finance.yahoo.com/news/tesla-seems-ready-open-factory-122500239.html",
    clean_url: "yahoo.com",
    excerpt:
      "Tesla has developed feelings for India yet again.A group of Tesla executives could visit India this week to meet government officials about potentially building a factory in the country, both…",
    summary:
      "Tesla has developed feelings for India yet again.\nA group of Tesla executives could visit India this week to meet government officials about potentially building a factory in the country, both Bloomberg and Reuters reported, citing sources. Tesla's previous plan to sell its vehicles in India fell through last year over tax issues.\n\n\n\n\nTesla's push to sell its cars in India represents the electric vehicle maker's latest effort to increase its footprint beyond China. Shanghai houses Tesla' first factory outside the US.",
    rights: "yahoo.com",
    rank: 31,
    topic: "business",
    country: "US",
    language: "en",
    authors: "Niharika Sharma",
    media:
      "https://media.zenfs.com/en/quartz.com/9ac5d38e0c86d34029a39b9f5fb4727c",
    is_opinion: false,
    twitter_account: "@YahooFinance",
    _score: 7.135812,
    _id: "f77e44f8bf4242fd6595590ed38457af",
  },
  {
    title:
      "India's RISC-V startup InCore receives funding from Sequoia Capital",
    author: "Jingyue Hsiao",
    published_date: "2023-05-15 01:44:50",
    published_date_precision: "full",
    link: "https://www.digitimes.com/news/a20230515VL200/ic-design-distribution-india-risc-v.html",
    clean_url: "digitimes.com",
    excerpt:
      "India-based RISC-V fabless chip startup InCore Semiconductors received funding from Sequoia Capital India, the second deal that the venture capital firm invested in India's semiconductor startup.",
    summary:
      "Credit: AFP\n \nIndia-based RISC-V fabless chip startup InCore Semiconductors received funding from Sequoia Capital India, the second deal that the venture capital firm invested in India's semiconductor startup.\nAccording to \nPTI\n and \nIANS\n, InCore Semiconductors raised US$3 million in a funding round from Sequoia Capital India, Speciale Invest, and Whiteboard Capital in the 'SemiCon India FutureDesign Roadshow' held by India's Ministry of IT.\nZaubaCorp's data shows that InCore Semiconductors was incorporated on May 11, 2018, and registered in Chennai with an authorized share capital of INR1 million (US$12,165).",
    rights: "Copyright 2023 DIGITIMES Inc.",
    rank: 6170,
    topic: "news",
    country: "TW",
    language: "en",
    authors: "Digitimes Asia,Jingyue Hsiao,Taipei",
    media: "https://img.digitimes.com/newsshow/20230515vl200_files/1_2b.jpg",
    is_opinion: false,
    twitter_account: "@DigitimesAsia",
    _score: 7.134096,
    _id: "542cecd5060a317bd2835024f5726084",
  },
  {
    title: "Why Shanghai Cooperation Organisation has importance for India?",
    author: "ANI",
    published_date: "2023-05-19 18:44:08",
    published_date_precision: "full",
    link: "https://theprint.in/world/why-shanghai-cooperation-organisation-has-importance-for-india/1584518/",
    clean_url: "theprint.in",
    excerpt:
      "Tokyo [Japan], May 19 (ANI): India assumed the SCO (Shanghai Cooperation Organisation) Chairship for 2023 and it already held meetings at the level of Directors of the National Security Agency,…",
    summary:
      "Tokyo [Japan], May 19 (ANI): India assumed the SCO (Shanghai Cooperation Organisation) Chairship for 2023 and it already held meetings at the level of Directors of the National Security Agency, Defense Ministers, and Foreign Ministers.\n \nAn article from a magazine, ‘Wedge' dated May 16, 2023, written by Japanese scholar Satoru Nagao, who works with the Sasakawa Peace Foundation provides a perspective as to why India is focusing on its active participation in SCO.\n \nThe article has noted the current pattern of partnerships within SCO.",
    rights: "theprint.in",
    rank: 5567,
    topic: "news",
    country: "IN",
    language: "en",
    authors: "ANI",
    media:
      "https://static.theprint.in/wp-content/uploads/2018/07/cropped-512x512-32x32.png",
    is_opinion: false,
    twitter_account: "@ThePrintIndia",
    _score: 7.1339536,
    _id: "eb1d85bbc7dc6edae18ab2802cbf1446",
  },
  {
    title: "RALLIS INDIA LIMITED : Stock Market News and Information",
    author: "MarketScreener",
    published_date: "2023-05-17 06:20:09",
    published_date_precision: "full",
    link: "https://www.marketscreener.com/quote/stock/RALLIS-INDIA-LIMITED-9058971/news/Rallis-India-Newspaper-Advertisement-for-Public-Notice-of-75th-Annual-General-Meeting-English-an-43871543",
    clean_url: "marketscreener.com",
    excerpt:
      "RALLIS INDIA LIMITED : News, information and stories for RALLIS INDIA LIMITED | NSE India Stock Exchange: RALLIS | NSE India Stock Exchange",
    summary:
      "02:20a\nRallis India : Newspaper Advertisement for Public Notice of 75th Annual General Meeting - ..\nPU\n \n \n04/26\nRallis India Widens Net Loss in Fiscal Q4\nMT\n \n \n04/26\nTranscript : Rallis India Limited, Q4 2023 Earnings Call, Apr 26, 2023\nCI\n \n \n04/25\nRallis India Limited Recommends Dividend for the Financial Year 2022-23\nCI\n \n \n04/25\nRallis India Limited Reports Earnings Results for the Fourth Quarter Ended March 31, 20..\nCI\n \n \n04/25\nRallis India Limited Reports Earnings Results for the Full Year Ended March 31, 2023\nCI\n \n \n03/31\nRallis India : Audited Financial Results of the Company for the quarter and financial year.",
    rights: "marketscreener.com",
    rank: 3681,
    topic: "science",
    country: "US",
    language: "en",
    authors: "MarketScreener",
    media: "https://www.marketscreener.com/images/twitter_MS_fdgris.png",
    is_opinion: false,
    twitter_account: "@ForTraders",
    _score: 7.1338267,
    _id: "94bb09d3236d0ba03b7f78e2263a60fc",
  },
  {
    title: "What is the population of India? Is it the largest in the world?",
    author: "Jacob Livesay",
    published_date: "2023-05-17 10:03:08",
    published_date_precision: "full",
    link: "https://www.usatoday.com/story/news/world/2023/05/17/what-is-the-population-india/70193209007/",
    clean_url: "usatoday.com",
    excerpt:
      "As of May 2023, India is the most populous country in the world. Here's how many people live there.",
    summary:
      "As of May 2023, India is the most populous country in the world. According to the United Nations, India \nsurpassed\n its neighbor China, which was previously the world's most populous nation, in late April.\nChina's population is in decline and skewing older because of \nfamily planning policies\n launched in the 1970s, as well as increasing income and education, Vox reports. The U.N. \nprojects\n China will lose almost half of its population by the year 2100.\nIndia, however, contributes to \nglobal working-age population growth\n more than any other country, according to CNN.",
    rights: "usatoday.com",
    rank: 126,
    topic: "news",
    country: "US",
    language: "en",
    authors: "Jacob Livesay,USA TODAY",
    media:
      "https://www.gannett-cdn.com/presto/2023/04/25/USAT/a7f7a6ae-f818-4391-824f-9339948eb9e7-AFP_AFP_33DR62W.jpg?auto=webp&crop=3264,1836,x0,y166&format=pjpg&width=1200",
    is_opinion: false,
    twitter_account: "@usatoday",
    _score: 7.1327524,
    _id: "e8b21c199f22e62335c6dbfdd22094d9",
  },
  {
    title: "Why Shanghai Cooperation Organisation has importance for India?",
    author: "ANI 20th",
    published_date: "2023-05-19 18:27:00",
    published_date_precision: "full",
    link: "https://www.bignewsnetwork.com/news/273836853/why-shanghai-cooperation-organisation-has-importance-for-india",
    clean_url: "bignewsnetwork.com",
    excerpt:
      "India assumed the SCO Shanghai Cooperation Organisation Chairship for 2023 and it already held meetings at the level of Directors of the National Security Age",
    summary:
      "ANI \n20th May 2023, 04:27 GMT+10\nTokyo [Japan], May 19 (ANI): India assumed the SCO (Shanghai Cooperation Organisation) Chairship for 2023 and it already held meetings at the level of Directors of the National Security Agency, Defense Ministers, and Foreign Ministers.\nAn article from a magazine, 'Wedge' dated May 16, 2023, written by Japanese scholar Satoru Nagao, who works with the Sasakawa Peace Foundation provides a perspective as to why India is focusing on its active participation in SCO.\nThe article has noted the current pattern of partnerships within SCO.",
    rights: "bignewsnetwork.com",
    rank: 5608,
    topic: "news",
    country: "US",
    language: "en",
    authors: "ANI 20th",
    media:
      "https://static.bignewsnetwork.com/bnn/images/big-news-network-slogan.jpg",
    is_opinion: false,
    twitter_account: "@BigNewsNetwork",
    _score: 7.131652,
    _id: "c7435a42bbdb3d9782e113adae1e3ab7",
  },
  {
    title:
      "Indian business and policy leaders join Western delegates at inaugural India Week in UK",
    author: "Arab News",
    published_date: "2023-05-16 19:59:12",
    published_date_precision: "full",
    link: "https://www.arabnews.com/node/2304751",
    clean_url: "arabnews.com",
    excerpt:
      "LONDON: More than 100 business and policy leaders from India joined 800 delegates from the UK, Europe and the US at the inaugural India Week, organizers said on Tuesday. UK-based global advisory firm…",
    summary:
      "LONDON: More than 100 business and policy leaders from India joined 800 delegates from the UK, Europe and the US at the inaugural India Week, organizers said on Tuesday.\n\nUK-based global advisory firm the Economic Policy Group said on Tuesday it had staged the event, which took place last week in England, to create a global conversation about the increasingly important role of India in the world economy, and that a wide range of cross-party policymakers had attended.\n\n'Now the most populous country in the world, India's economic-growth rate is the highest among major economies today (and) India's inflation rate is lower than that of the UK, the US and other major economies,' the organization said.",
    rights: "arabnews.com",
    rank: 2667,
    topic: "news",
    country: "SA",
    language: "en",
    authors: "Arab News,Sheany Yasuko Lai",
    media:
      "https://www.arabnews.com/sites/default/files/styles/660x371_watermarksaudi/public/main-image/2023/05/16/3820481-585426575.jpg?itok=ofhZ4WiI",
    is_opinion: false,
    twitter_account: "@Arab_News",
    _score: 7.1314173,
    _id: "5718ab9806009b3b97096a3c3cfe020e",
  },
  {
    title:
      "Australia cosies up to India to balance China, but is the relationship overrated?",
    author: "Su-Lin Tan",
    published_date: "2023-05-20 03:00:00",
    published_date_precision: "timezone unknown",
    link: "https://www.msn.com/en-xl/news/other/australia-cosies-up-to-india-to-balance-china-but-is-the-relationship-overrated/ar-AA1bqrPu",
    clean_url: "msn.com",
    excerpt:
      "The Quad partners ended a 10-year deadlock to seal a trade deal and are getting closer, bound by a mutual interest in countering Beijing's influence But their economies are not 'especially…",
    summary:
      "As India's regional security role grows against a backdrop of heightened US-China rivalry, it's moving closer to fellow Quad member Australia - bound by a common desire to counter Beijing's influence.\nThe boost in relations helped end Canberra's decade-long deadlock with New Delhi, notorious for its protectionism, over the terms of their first free-trade agreement, which Australian Prime Minister Anthony Albanese's government speedily sealed last year.\nFor a long time, \"Australia had never been in the first rank of India's international priorities\", said Peter Varghese, Canberra's former ambassador to Delhi and the architect of its key Indian economic strategy, in a report published in 2018.",
    rights: "msn.com",
    rank: 100,
    topic: "news",
    country: "US",
    language: "en",
    authors: "Nick Bisley,Su-Lin Tan",
    media:
      "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA1bqrPd.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg&x=606&y=239",
    is_opinion: false,
    twitter_account: null,
    _score: 7.130889,
    _id: "5fd0c5a85ac45fd623278763e181d56d",
  },
  {
    title:
      "Amazon Web Services to invest USD 12.7 billion in cloud infrastructure in India",
    author: "",
    published_date: "2023-05-18 11:30:00",
    published_date_precision: "timezone unknown",
    link: "https://www.bignewsnetwork.com/news/273835408/amazon-web-services-to-invest-usd-127-billion-in-cloud-infrastructure-in-india",
    clean_url: "bignewsnetwork.com",
    excerpt:
      "Amazon Web Services (AWS) on Thursday announced it plans to invest USD 12.7 billion (Rs 1,05,600 crore) in cloud infrastructure in India by 2030 to meet growing",
    summary:
      "Mumbai (Maharashtra) [India], May 18 (ANI): Amazon Web Services (AWS) on Thursday announced it plans to invest USD 12.7 billion (Rs 1,05,600 crore) in cloud infrastructure in India by 2030 to meet growing customer demand for cloud services in India.\n \nThis investment is estimated to contribute USD 23.3 billion (Rs 1,94,700 crore) to India's total gross domestic product (GDP) by 2030, according to a statement from Amazon. This planned investment in data centre infrastructure in India will support an estimated average of 1,31,700 full-time equivalent (FTE) jobs in Indian businesses each year.",
    rights: "indiagazette.com",
    rank: 5608,
    topic: "news",
    country: "US",
    language: "en",
    authors: "",
    media: "https://cdn.bignewsnetwork.com/ani1684407944.jpg",
    is_opinion: false,
    twitter_account: "@indiagazette",
    _score: 7.1292605,
    _id: "f3ac68b1b7bd4a96b4ebc689a906203b",
  },
  {
    title: "Amazon To Invest $12.7 Billion In Cloud Infrastructure In India",
    author: "Press Trust",
    published_date: "2023-05-18 03:10:03",
    published_date_precision: "full",
    link: "https://www.ndtv.com/business/amazon-web-services-to-invest-12-7-billion-in-cloud-infrastructure-in-india-4043983",
    clean_url: "ndtv.com",
    excerpt:
      "Amazon Web Services on Thursday announced plans to invest USD 12.7 billion in cloud infrastructure in India by 2030 as it looks to meet growing customer demand for cloud services in the country.",
    summary:
      "Amazon Web Services said that its investment in India has a ripple effect on the local economy.\n\nMumbai:\n\nAmazon Web Services on Thursday announced plans to invest USD 12.7 billion in cloud infrastructure in India by 2030 as it looks to meet growing customer demand for cloud services in the country.\n\nThe planned investment in data centre infrastructure in India will support an estimated average of 1,31,700 full-time equivalent (FTE) jobs in Indian businesses each year, Amazon Web Services (AWS) -- Amazon's cloud computing unit -- said in a statement.",
    rights: "ndtv.com",
    rank: 920,
    topic: "news",
    country: "IN",
    language: "en",
    authors: "Press Trust",
    media:
      "https://c.ndtvimg.com/2023-05/n59fic_amazon-web-services-reuters_625x300_18_May_23.jpg",
    is_opinion: false,
    twitter_account: "@ndtv",
    _score: 7.1292486,
    _id: "bb63e26b62eca3cf1e3f68ddb01930f4",
  },
  {
    title:
      "Indian Visa Online For British, USA, French, German and Canadian Citizens",
    author: "AB Newswire",
    published_date: "2023-05-17 23:15:00",
    published_date_precision: "timezone unknown",
    link: "https://markets.financialcontent.com/stocks/article/abnewswire-2023-5-17-indian-visa-online-for-british-usa-french-german-and-canadian-citizens",
    clean_url: "financialcontent.com",
    excerpt:
      "INDIAN VISA FOR BRITISH CITIZENS The Republic of India is located in Asia's southernmost region. It is well-known for its rich local culture and the distinctive features that give it its identity.…",
    summary:
      "The Republic of India is located in Asia's southernmost region. It is well-known for its rich local culture and the distinctive features that give it its identity. Because India is Asia's most popular tourist destination, visitors come from all over the world to learn about the country's history, traditions, cuisine, and way of life. The United Kingdom is one of the countries whose citizens must obtain a visa before entering India. The India e-Visa is a digital entry visa for British citizens to India.",
    rights: "financialcontent.com",
    rank: 4400,
    topic: "finance",
    country: "US",
    language: "en",
    authors: "AB Newswire",
    media: null,
    is_opinion: false,
    twitter_account: null,
    _score: 7.126496,
    _id: "946dfb1b8de35d0705e8bc15097a0e4d",
  },
  {
    title:
      "Why is India an attractive investment destination among its Asian counterparts?",
    author: "guest",
    published_date: "2023-05-20 04:00:00",
    published_date_precision: "timezone unknown",
    link: "https://www.financialexpress.com/market/why-is-india-an-attractive-investment-destination-among-its-asian-counterparts/3094234/",
    clean_url: "financialexpress.com",
    excerpt:
      "India is a consumption-driven economy, as reflected by the 60% contribution by private consumption in the GDP.",
    summary:
      "By Abhishek Sharman\n \nIndia's consumption story has been impressive over the last decade. As the world's now most populous country and one of the fastest-growing large economies, India's consumption market stands out as an attractive destination. India is a consumption-driven economy, as reflected by the 60% contribution by private consumption in the GDP. Despite facing some challenges due to the disruptions by COVID-19 and the increasing interest rates in recent times, India's consumption story remains one of the most compelling narratives in the global investing landscape.",
    rights: "financialexpress.com",
    rank: 2106,
    topic: "news",
    country: "IN",
    language: "en",
    authors: "guest",
    media:
      "https://www.financialexpress.com/wp-content/uploads/2023/05/Untitled-design-24-2.jpg",
    is_opinion: false,
    twitter_account: "@FinancialXpress",
    _score: 7.1241655,
    _id: "fe5636add9d71f10127fad789884b415",
  },
  {
    title: "Amazon's cloud arm to invest $12.7 billion in India by 2030",
    author: "Mini Tejaswi",
    published_date: "2023-05-18 14:37:49",
    published_date_precision: "full",
    link: "https://www.thehindu.com/business/amazons-cloud-arm-to-invest-127-billion-in-india-by-2030/article66866961.ece",
    clean_url: "thehindu.com",
    excerpt:
      "Amazon Web Services (AWS) said it plans to invest $12.7 billion in India by 2030 to meet the fast-growing customer demand for cloud services in the country.",
    summary:
      "May 18, 2023 08:07 pm | Updated 09:13 pm IST - Mumbai \n\nAWS' investment was also estimated to contribute $23.3 billion to India's total gross domestic product (GDP) by 2030.\n| Photo Credit: Reuters\n\nAmazon Web Services (AWS) said it plans to invest $12.7 billion in India by 2030 to meet the fast-growing customer demand for cloud services in the country.\nThe cloud-computing arm of e-tailer Amazon had already invested $3.7 billion in India between 2016-2022.\nPuneet Chandok, president of commercial business, AWS India and South Asia, said India was a rapidly expanding cloud market and therefore the company was making considerable investments in the country and the newly-announced investments would help create more beneficial ripple effects, supporting the country on its path to becoming a global digital powerhouse.",
    rights: "Copyright (C) 2023 THG PUBLISHING PVT LTD.",
    rank: 984,
    topic: "news",
    country: "IN",
    language: "en",
    authors: "Mini Tejaswi",
    media:
      "https://th-i.thgim.com/public/incoming/wzn4e7/article66866986.ece/alternates/LANDSCAPE_1200/2023-05-09T194245Z_580478636_RC2VFS933VGV_RTRMADP_3_EU-TECH-CLOUD.JPG",
    is_opinion: false,
    twitter_account: "@The_Hindu",
    _score: 7.1239905,
    _id: "76af5af5d1d59abdfdb55a0e6adee47e",
  },
  {
    title: "Air India Express hires over 280 pilots, 250 cabin crew",
    author: "PTI",
    published_date: "2023-05-16 13:36:38",
    published_date_precision: "full",
    link: "https://www.telegraphindia.com/business/air-india-express-hires-over-280-pilots-250-cabin-crew/cid/1937362",
    clean_url: "telegraphindia.com",
    excerpt:
      "While Vistara is in the process of merging with Air India, AirAsia India is being integrated with Air India Express",
    summary:
      "Low-cost international carrier Air India Express on Tuesday said it has hired over 280 pilots and 250 cabin crew during a recent recruitment drive conducted across Delhi, Mumbai and Bangalore.\n \nApproximately 300 pilots actively participated in the selection process conducted during the drive, the airline said.\n \nFormerly under the Indian Government, Air India Express is now owned by Tata Group, which acquired the airline along with the full-service carrier Air India in late January last year.\n \nBesides Air India and Air India Express, Tata Group also owns domestic budget carrier AirAsia India as well as a 51 per cent stake in its joint venture airline with Singapore Airlines, Vistara.",
    rights: "telegraphindia.com",
    rank: 5415,
    topic: "business",
    country: "IN",
    language: "en",
    authors: "PTI",
    media:
      "https://assets.telegraphindia.com/telegraph/2023/May/1684244169_airindiaexpress.jpg",
    is_opinion: false,
    twitter_account: "@ttindia",
    _score: 7.1234627,
    _id: "f91c8161ded7b9a79b0024ce8e425677",
  },
];

export default function SideBar() {
  // const [news, setNews] = useState([]);

  // const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;

  

  return (
    <div className="sidebar ml-2 flex flex-col p-4 gap-6">
      <div className="hidden suggestion basis-1/4 text-center bg-white rounded-md shadow-md drop-shadow-md mt-2">
        <p className="font-main text-xl font-bold m-5">Profile Suggestion</p>
      </div>
      <div className="news basis-3/4 bg-white rounded-md shadow-md drop-shadow-md p-3 font-main">
        <div className="header flex gap-3 ">
          <h1 className="text-xl p-4 pt-2 font-bold">Today's headline</h1>
        </div>
        <div className="py-2 px-4 gap-3 flex flex-col text-sm font-medium">
          {news.slice(0, 16).map((item, id) => (
            <Topic key={id} title={item.title} url={item.link} />
          ))}
        </div>
      </div>
    </div>
  );
}
