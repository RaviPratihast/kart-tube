import { v4 as uuidv4 } from "uuid";
const videos = [
  {
    id: "joDt8UBjJhY",
    title: "Destiny 2: Lightfall Trailer",
    description: "Full Episode Link: http://spotify.link/offtherecord",
    thumbnail: "https://i.ytimg.com/vi/xZPrldPWXJY/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=xZPrldPWXJY",
  },
  {
    id: "fHQhN7lJtOE",
    title: "American Idol Winner",
    description:
      "We still don't understand why someone would do this. \nWe are heartbroken for now.. but we have hope it will all work out one day.\n\nWe love you all so much!\nDALLIN AND BELLA\n\n#dellavlogs \n\nGet Lonely by Justin Bieber, Benny Blanco and over 1M + mainstream tracks here https://go.lickd.co/Music\n\nLicense ID: Yv3QWzBljNO https://lickd.lnk.to/x69gbaID!DELLA+VLOGS",
    thumbnail: "https://i.ytimg.com/vi/qaJcYz0BKm4/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=qaJcYz0BKm4",
  },
  {
    id: "IP1CcdDFgRA",
    title: "Iam Tongi & James Blunt",
    description:
      "We still don't understand why someone would do this. \nWe are heartbroken for now.. but we have hope it will all work out one day.\n\nWe love you all so much!\nDALLIN AND BELLA\n\n#dellavlogs \n\nGet Lonely by Justin Bieber, Benny Blanco and over 1M + mainstream tracks here https://go.lickd.co/Music\n\nLicense ID: Yv3QWzBljNO https://lickd.lnk.to/x69gbaID!DELLA+VLOGS",
    thumbnail: "https://i.ytimg.com/vi/M9hdHDXyo-8/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=M9hdHDXyo-8",
  },
  {
    id: "8Ni28qTnV8M",
    title: "There's an alien IN MY HOUSE!",
    description:
      "We still don't understand why someone would do this. \nWe are heartbroken for now.. but we have hope it will all work out one day.\n\nWe love you all so much!\nDALLIN AND BELLA\n\n#dellavlogs \n\nGet Lonely by Justin Bieber, Benny Blanco and over 1M + mainstream tracks here https://go.lickd.co/Music\n\nLicense ID: Yv3QWzBljNO https://lickd.lnk.to/x69gbaID!DELLA+VLOGS",
    thumbnail: "https://i.ytimg.com/vi/bvfSjzRUJcs/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=bvfSjzRUJcs",
  },
  {
    id: "y_90FX2_-Ls",
    title: "We made a REAL HOLOGRAM Desk",
    description:
      "We still don't understand why someone would do this. \nWe are heartbroken for now.. but we have hope it will all work out one day.\n\nWe love you all so much!\nDALLIN AND BELLA\n\n#dellavlogs \n\nGet Lonely by Justin Bieber, Benny Blanco and over 1M + mainstream tracks here https://go.lickd.co/Music\n\nLicense ID: Yv3QWzBljNO https://lickd.lnk.to/x69gbaID!DELLA+VLOGS",
    thumbnail: "https://i.ytimg.com/vi/PI6VA8ZNL-0/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=PI6VA8ZNL-0",
  },
  {
    id: "k90rS7iFbCc",
    title: "Resumen y goles |",
    description:
      "We still don't understand why someone would do this. \nWe are heartbroken for now.. but we have hope it will all work out one day.\n\nWe love you all so much!\nDALLIN AND BELLA\n\n#dellavlogs \n\nGet Lonely by Justin Bieber, Benny Blanco and over 1M + mainstream tracks here https://go.lickd.co/Music\n\nLicense ID: Yv3QWzBljNO https://lickd.lnk.to/x69gbaID!DELLA+VLOGS",
    thumbnail: "https://i.ytimg.com/vi/1D_iOST8060/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=1D_iOST8060",
  },
  {
    id: "AAxx1rEUZxs",
    title: "Rough Week",
    description:
      "We still don't understand why someone would do this. \nWe are heartbroken for now.. but we have hope it will all work out one day.\n\nWe love you all so much!\nDALLIN AND BELLA\n\n#dellavlogs \n\nGet Lonely by Justin Bieber, Benny Blanco and over 1M + mainstream tracks here https://go.lickd.co/Music\n\nLicense ID: Yv3QWzBljNO https://lickd.lnk.to/x69gbaID!DELLA+VLOGS",
    thumbnail: "https://i.ytimg.com/vi/a2tIrfeV46I/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=a2tIrfeV46I",
  },
  {
    id: "TylJyZI7KLs",
    title: "UNCLE ROGER CANCELED",
    description:
      "We still don't understand why someone would do this. \nWe are heartbroken for now.. but we have hope it will all work out one day.\n\nWe love you all so much!\nDALLIN AND BELLA\n\n#dellavlogs \n\nGet Lonely by Justin Bieber, Benny Blanco and over 1M + mainstream tracks here https://go.lickd.co/Music\n\nLicense ID: Yv3QWzBljNO https://lickd.lnk.to/x69gbaID!DELLA+VLOGS",
    thumbnail: "https://i.ytimg.com/vi/c0nvcyhhwkc/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=c0nvcyhhwkc",
  },
  {
    id: "WShbx93c9fo",
    title: "The Color Purple | Official Trailer",
    description:
      "We still don't understand why someone would do this. \nWe are heartbroken for now.. but we have hope it will all work out one day.\n\nWe love you all so much!\nDALLIN AND BELLA\n\n#dellavlogs \n\nGet Lonely by Justin Bieber, Benny Blanco and over 1M + mainstream tracks here https://go.lickd.co/Music\n\nLicense ID: Yv3QWzBljNO https://lickd.lnk.to/x69gbaID!DELLA+VLOGS",
    thumbnail: "https://i.ytimg.com/vi/wPwzBUui1GA/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=wPwzBUui1GA",
  },
  {
    id: "oq_0s3J3tUo",
    title: "Total War: PHARAOH ",
    description:
      "We still don't understand why someone would do this. \nWe are heartbroken for now.. but we have hope it will all work out one day.\n\nWe love you all so much!\nDALLIN AND BELLA\n\n#dellavlogs \n\nGet Lonely by Justin Bieber, Benny Blanco and over 1M + mainstream tracks here https://go.lickd.co/Music\n\nLicense ID: Yv3QWzBljNO https://lickd.lnk.to/x69gbaID!DELLA+VLOGS",
    thumbnail: "https://i.ytimg.com/vi/lLlD650ZBFQ/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=lLlD650ZBFQ",
  },
  {
    id: "oKStYmMgNRA",
    title: "KARD - ICKY _ M/V",
    description:
      "We still don't understand why someone would do this. \nWe are heartbroken for now.. but we have hope it will all work out one day.\n\nWe love you all so much!\nDALLIN AND BELLA\n\n#dellavlogs \n\nGet Lonely by Justin Bieber, Benny Blanco and over 1M + mainstream tracks here https://go.lickd.co/Music\n\nLicense ID: Yv3QWzBljNO https://lickd.lnk.to/x69gbaID!DELLA+VLOGS",
    thumbnail: "https://i.ytimg.com/vi/Dc9CkC6n0Z8/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=Dc9CkC6n0Z8",
  },
  {
    id: "dKZSOdYhyDU",
    title: "The Original PB&J from 1901",
    description:
      "We still don't understand why someone would do this. \nWe are heartbroken for now.. but we have hope it will all work out one day.\n\nWe love you all so much!\nDALLIN AND BELLA\n\n#dellavlogs \n\nGet Lonely by Justin Bieber, Benny Blanco and over 1M + mainstream tracks here https://go.lickd.co/Music\n\nLicense ID: Yv3QWzBljNO https://lickd.lnk.to/x69gbaID!DELLA+VLOGS",
    thumbnail: "https://i.ytimg.com/vi/l72b6tixc3s/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=l72b6tixc3s",
  },
  {
    id: "Q7fMvRk8b4s",
    title: "Two very different muggers",
    description:
      "We still don't understand why someone would do this. \nWe are heartbroken for now.. but we have hope it will all work out one day.\n\nWe love you all so much!\nDALLIN AND BELLA\n\n#dellavlogs \n\nGet Lonely by Justin Bieber, Benny Blanco and over 1M + mainstream tracks here https://go.lickd.co/Music\n\nLicense ID: Yv3QWzBljNO https://lickd.lnk.to/x69gbaID!DELLA+VLOGS",
    thumbnail: "https://i.ytimg.com/vi/s2EHxZGPtJI/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=s2EHxZGPtJI",
  },
  {
    id: "-R8XcAK4MTA",
    title: "ENHYPEN (엔하이픈) 'Bite Me' ",
    description:
      "We still don't understand why someone would do this. \nWe are heartbroken for now.. but we have hope it will all work out one day.\n\nWe love you all so much!\nDALLIN AND BELLA\n\n#dellavlogs \n\nGet Lonely by Justin Bieber, Benny Blanco and over 1M + mainstream tracks here https://go.lickd.co/Music\n\nLicense ID: Yv3QWzBljNO https://lickd.lnk.to/x69gbaID!DELLA+VLOGS",
    thumbnail: "https://i.ytimg.com/vi/wXFLzODIdUI/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=wXFLzODIdUI",
  },
  {
    id: "u9jORB1Nn_8",
    title: "Web Slingers Miles Morales",
    description:
      "We still don't understand why someone would do this. \nWe are heartbroken for now.. but we have hope it will all work out one day.\n\nWe love you all so much!\nDALLIN AND BELLA\n\n#dellavlogs \n\nGet Lonely by Justin Bieber, Benny Blanco and over 1M + mainstream tracks here https://go.lickd.co/Music\n\nLicense ID: Yv3QWzBljNO https://lickd.lnk.to/x69gbaID!DELLA+VLOGS",
    thumbnail: "https://i.ytimg.com/vi/m3SrWHTJTFw/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=m3SrWHTJTFw",
  },
  {
    id: "EsPA7U_zHhk",
    title: "The Return to Bloody Nights",
    description:
      "We still don't understand why someone would do this. \nWe are heartbroken for now.. but we have hope it will all work out one day.\n\nWe love you all so much!\nDALLIN AND BELLA\n\n#dellavlogs \n\nGet Lonely by Justin Bieber, Benny Blanco and over 1M + mainstream tracks here https://go.lickd.co/Music\n\nLicense ID: Yv3QWzBljNO https://lickd.lnk.to/x69gbaID!DELLA+VLOGS",
    thumbnail: "https://i.ytimg.com/vi/3HGvOnEY_A0/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=3HGvOnEY_A0",
  },
  {
    id: "VqTp1Ob46n0",
    title: "10 Things to buy ",
    description:
      "We still don't understand why someone would do this. \nWe are heartbroken for now.. but we have hope it will all work out one day.\n\nWe love you all so much!\nDALLIN AND BELLA\n\n#dellavlogs \n\nGet Lonely by Justin Bieber, Benny Blanco and over 1M + mainstream tracks here https://go.lickd.co/Music\n\nLicense ID: Yv3QWzBljNO https://lickd.lnk.to/x69gbaID!DELLA+VLOGS",
    thumbnail: "https://i.ytimg.com/vi/Y5sN2U9M-F4/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=Y5sN2U9M-F4",
  },
  {
    id: "l_vohOL-se4",
    title: " FULL GAME 4 HIGHLIGHTS",
    description:
      "We still don't understand why someone would do this. \nWe are heartbroken for now.. but we have hope it will all work out one day.\n\nWe love you all so much!\nDALLIN AND BELLA\n\n#dellavlogs \n\nGet Lonely by Justin Bieber, Benny Blanco and over 1M + mainstream tracks here https://go.lickd.co/Music\n\nLicense ID: Yv3QWzBljNO https://lickd.lnk.to/x69gbaID!DELLA+VLOGS",
    thumbnail: "https://i.ytimg.com/vi/hZo_G9-nob8/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=hZo_G9-nob8",
  },
  {
    id: "GKiJUZmStWw",
    title: "Ribwich from The Simpsons",
    description:
      "We still don't understand why someone would do this. \nWe are heartbroken for now.. but we have hope it will all work out one day.\n\nWe love you all so much!\nDALLIN AND BELLA\n\n#dellavlogs \n\nGet Lonely by Justin Bieber, Benny Blanco and over 1M + mainstream tracks here https://go.lickd.co/Music\n\nLicense ID: Yv3QWzBljNO https://lickd.lnk.to/x69gbaID!DELLA+VLOGS",
    thumbnail: "https://i.ytimg.com/vi/fYIk4ohZkYc/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=fYIk4ohZkYc",
  },
  {
    id: "3UNVua63wsE",
    title: "Stephen A. & JJ Redick ",
    description:
      "We still don't understand why someone would do this. \nWe are heartbroken for now.. but we have hope it will all work out one day.\n\nWe love you all so much!\nDALLIN AND BELLA\n\n#dellavlogs \n\nGet Lonely by Justin Bieber, Benny Blanco and over 1M + mainstream tracks here https://go.lickd.co/Music\n\nLicense ID: Yv3QWzBljNO https://lickd.lnk.to/x69gbaID!DELLA+VLOGS",
    thumbnail: "https://i.ytimg.com/vi/aPnNGTDBsMs/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=aPnNGTDBsMs",
  },
  {
    id: "fHQhN7lJtOE",
    title: "Sizce Yasin Cengiz 1 Tepsi Dolusu Döneri Bitirmiş Midir ?",
    description:
      "Ağababa Döner & Yemek Restorantı Adresimiz: Dudullu Esenşehir Mah. Natoyolu Cad. No:229 imes B Kapısı Karşısı Ümraniye ...",
    thumbnail: "https://i.ytimg.com/vi/fHQhN7lJtOE/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=fHQhN7lJtOE",
  },
  {
    id: "-SsMXO_g4wk",
    title: "Emoji Parkour! 🥷 #shorts",
    description: "Emoji Parkour! #shorts.",
    thumbnail: "https://i.ytimg.com/vi/-SsMXO_g4wk/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=-SsMXO_g4wk",
  },
  {
    id: "IP1CcdDFgRA",
    title: "Serenito | Nueva Receta",
    description: "",
    thumbnail: "https://i.ytimg.com/vi/IP1CcdDFgRA/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=IP1CcdDFgRA",
  },
  {
    id: "0B2rXIseYSk",
    title:
      "#baalveer #balveernewstatus #devjoshi #vivaan #anayana #balveerreturns #b3veer #shorts1",
    description:
      "baalveer #balveernewstatus #devjoshi #vivaan #anayana #balveerreturns #b3veer #shorts1 ...",
    thumbnail: "https://i.ytimg.com/vi/0B2rXIseYSk/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=0B2rXIseYSk",
  },
  {
    id: "y_90FX2_-Ls",
    title: "Elbet bir gün 🙏♥️",
    description: "",
    thumbnail: "https://i.ytimg.com/vi/y_90FX2_-Ls/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=y_90FX2_-Ls",
  },
  {
    id: "WShbx93c9fo",
    title:
      "wait for End😱 बासी रोटी से राजस्थानी डिश नया बना दिया😋#short viral",
    description:
      "wait for End   बासी रोटी से राजस्थानी डिश नया बना दिया  #short viral #shorts #trending ...",
    thumbnail: "https://i.ytimg.com/vi/WShbx93c9fo/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=WShbx93c9fo",
  },
  {
    id: "oq_0s3J3tUo",
    title: "help me to make a goal level 412 #trending #viral #10million",
    description: "",
    thumbnail: "https://i.ytimg.com/vi/oq_0s3J3tUo/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=oq_0s3J3tUo",
  },
  {
    id: "Itkp_E0n5E4",
    title: "Esto es lo que pasa cuando llueve en un abierto de tenis 🎾 #tenis",
    description: "",
    thumbnail: "https://i.ytimg.com/vi/Itkp_E0n5E4/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=Itkp_E0n5E4",
  },
  {
    id: "Q7fMvRk8b4s",
    title: "Khatu Shyam DJ Bhajan 🥰🥰 #shorts",
    description:
      "chunni Mein Chunni Mein Perfume lagave chunni mein चुन्नी में चुन्नी में परफ्यूम ...",
    thumbnail: "https://i.ytimg.com/vi/Q7fMvRk8b4s/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=Q7fMvRk8b4s",
  },
  {
    id: "wytQyk5USsQ",
    title:
      "Assam Rifles Final Selected Congratulation🎉🎉🎉 #agniveer #armyexam #viral #reels #shorts #short",
    description: "",
    thumbnail: "https://i.ytimg.com/vi/wytQyk5USsQ/hqdefault.jpg",
    src: "https://www.youtube.com/watch?v=wytQyk5USsQ",
  },
];

export default videos;

// AIzaSyDuJ2TOawbRGtYHuKAe7NAW4xoSABEOwvQ
