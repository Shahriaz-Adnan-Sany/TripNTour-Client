const data = [
    {
        title: "Rome to Venice Cruise 2022",
        description: "TripNTour is thrilled to return to the Mediterranean with Silversea in summer 2022 on the brand-new, ultra-luxury Silver Dawn vessel on a custom TripNTour Only itinerary. Sailing both the Mediterranean and Adriatic, we’ll dive deep into the fascinating history, rich culture, and incredible food and wine of the region.        This family-friendly voyage begins in the Eternal City of Rome before sailing to the legendary Amalfi Coast, where we’ll spend two days exploring glamorous Sorrento and Amalfi. Next stop: Taormina, a hilltop town on the east coast of Sicily offering stunning active volcano views. In Malta—a small island nation—stroll the quaint streets of the walled town of Mdina. Sail north to Bari, a historic port town full of Old World charm. Cross the Adriatic where you’ll dock in Split, Croatia, to visit paradisiacal beaches and a UNESCO World Heritage Site. End the journey in Venice, exploring its labyrinthine canals and striking architecture",
        duration: "Jul 13, 2022 To Jul 21, 2022 ",
        cost: 2200,
        img: "https://i.ibb.co/3stgM8c/img1.jpg",
        key: "tNt01",
        id: "cruise01",
    },
    {
        title: "Douro River Cruise 2022",
        description: "Follow the Douro River through Portugal and into Spain for this culturally rich and intimately immersive cruise. We’ll journey past steeply terraced hillsides, quaint villages, and acres of ripe vineyards. Enjoy private tastings of port wine while we wind our way through the dramatic landscapes of the UNESCO-designated Douro Valley, heading ashore to visit charming quintas, or estates, and meet the winemakers who operate them—there’s no better way to discover this valley, one of Europe’s best-kept secrets. We’ll set sail on the S.S. São Gabriel, a brand-new vessel decorated to pay homage to the Douro Valley. With large and lavishly appointed suites, and two dining venues—a restaurant and an al fresco option on the top deck—the ship makes for a luxe home away from home.",
        duration: "Aug 21, 2022 To Aug 28, 2022 ",
        cost: 1400,
        img: "https://i.ibb.co/JRYNBdW/img2.jpg",
        key: "tNt02",
        id: "cruise02",
    },
    {
        title: "Palm Springs Health and Wellness Retreat",
        description: "Take this opportunity to reconnect with your highest self and explore what well-being means to you in the tranquil desert setting of the The Ritz-Carlton, Rancho Mirage. During this four-day experience, health and mindfulness experts will guide you through activities like yoga, spa time, creative meal prep, hiking, and more. Enjoy luxury accommodations and nutrient-dense cuisine to help you rest, recharge, and energize. Prior to arrival, guests will be asked what they hope to get out of their time in Palm Springs, making sure everyone has a personalized experience. Whether you’re looking to reach new nutrition goals, reset your exercise routine, or go deeper into meditation and breathwork, this experience will expand your wellness repertoire.",
        duration: "Jan 26, 2022 To Jan 29, 2022 ",
        cost: 600,
        img: "https://i.ibb.co/WBYzcK4/img3.jpg",
        key: "tNt03",
        id: "relax01",
    },
    {
        title: "Upstate New York Adults Summer Camp 2022",
        description: "TripNTour has taken the classic American summer camp from childhood of yesteryear and reimagined it—with a sophisticated, adults-only twist. Spend four nights at The Inns of Aurora, a collection of five quaint and historic estates in upstate New York, overlooking tranquil Cayuga Lake. Mornings unfold at your leisure as you stand-up paddleboard, kayak, or canoe, or opt for archery, yoga, or arts and crafts. Come together with fellow TripNTour members in the afternoon to play summer camp-style games, craft, taste local wines, enjoy a cooking class, embark on a sunset cruise, and much more. We’ve designed this one-of-a-kind experience to help you relax and unwind through play and quality time with like-minded members.",
        duration: "Aug 10, 2022 To Aug 16, 2022 ",
        cost: 920,
        img: "https://i.ibb.co/NCD2y6X/img4.jpg",
        key: "tNt04",
        id: "camp01",
    },
    {
        title: "Winter Family Weekend",
        description: "C Lazy U Ranch is a luxury guest ranch in Colorado, nestled at the foot of the breathtaking Rocky Mountains and Continental Divide. This all-inclusive package includes gourmet dining with an elevated and refined ranch cuisine, most outdoor activities, Kids’ Club with counselor supervision, daily housekeeping service, plush robes, and coffee, tea, and cocoa in your room. Go for a horseback ride in the serene quiet on a blanket of fresh snow, cross-country ski along miles of trails, snowshoe into a winter wonderland, take an adventurous trip down the private on-site tubing hill, ice skate, or play hockey across freshly Zamboni-groomed pond. Curl up next to the roaring fire in the lodge and sip hot cocoa (or some whisky!) with your loved one after a long, fun day on the ranch.",
        duration: "Feb 24, 2022 To Feb 28, 2022 ",
        cost: 780,
        img: "https://i.ibb.co/yY5JLzj/img5.jpg",
        key: "tNt05",
        id: "winter01",
    },
    {
        title: "Best of Botswana Safari 2022",
        description: "Begin and end your journey in vibrant Johannesburg—known as the “City of Gold.” Explore traditional muti (medicine) shops, the Apartheid Museum, Nelson Mandela Bridge, and more. Learn about South Africa's political struggles on a guided tour into the sprawling township of Soweto. Travel on to Chobe National Park, boasting the largest concentration of wildlife in Africa. Stay for three nights at the incomparable Belmond Savute Elephant Lodge, where you can view wildlife from the private outdoor lounge or cool off in your air-conditioned tent. Board a private charter flight to the Okavango Delta where you’ll find a maze of sparkling lagoons, meandering channels, and overgrown islands teeming with wildlife. Spend three nights at the organically designed andBeyond Sandibe Okavango Safari Lodge, set on 55,000 acres of private land. Enjoy daily game drives and come return to a cozy fireplace and breathtaking views from your room.",
        duration: "Nov 5, 2022 To Nov 13, 2022 ",
        cost: 1480,
        img: "https://i.ibb.co/MVnt5K9/img6.jpg",
        key: "tNt06",
        id: "camp02",
    },
    {
        title: "Magic of Advent on the Rhine",
        description: "The dreamy landscapes of the Middle Rhine Valley await you on this festive trip, as well as visits to the most beautiful Christmas markets of the region, where the scents of roasted almonds, gingerbread and glühwein fill the air. A Rhine cruise during this most peaceful time of year offers you relaxation and contemplation in romantic destinations, glowing with wintery Christmas cheer.",
        duration: "Dec 8, 2021 To Dec 13, 2022 ",
        cost: 580,
        img: "https://i.ibb.co/yyJK0TX/img7.jpg",
        key: "tNt07",
        id: "cruise03",
    },
    {
        title: "Dakar to Lisbon",
        description: "Leaving Dakar in your wake, set sail for a different kind of Atlantic adventure with a stop off in the Gambia before sailing to Cape Verde. These stunning islands are still unchartered territory—when the Portuguese colonized them in the 15th century, they found no human inhabitants, so today’s Cape Verdeans have a unique blend of European and African ancestry. Balance two days in Spain’s Canary Islands with sea days and you have a near-perfect cruise.",
        duration: "Aug 4, 2022 To Aug 11, 2022 ",
        cost: 880,
        img: "https://i.ibb.co/1MF2RJv/img8.jpg",
        key: "tNt08",
        id: "cruise04",
    },
    {
        title: "Rome to Barcelona",
        description: "The beauty of the western Mediterranean is that it is a melting pot of cultures. There is Italy’s grandiosity, from the buildings of Rome to the vistas of Tuscany. And then there is Monte Carlo’s uber-glamour, France’s “joie de vivre” approach to life, and Spain’s love of fiestas and fun. Seven days sailing the coasts will offer you a bite-sized mouthful of a region that will leave you hungry for more.",
        duration: "Aug 4, 2022 To Aug 11, 2022 ",
        cost: 1220,
        img: "https://i.ibb.co/1Mt8Bzb/img09.jpg",
        key: "tNt09",
        id: "cruise05",
    },
    {
        title: "Copenhagen to Stockholm",
        description: "Leaving Copenhagen’s Tivoli Gardens in your wake, travel to a bygone era by going back three centuries to Imperial times in St. Petersburg. During your three-day stay in the city, take in a ballet or opera at the world-renowned Mariinsky Theatre or enjoy a private opening of the Hermitage before the crowds arrive. Punctuate the rest of your trip with the inspiring city of Helsinki as well as the pretty, lovely town of Tallinn.",
        duration: "Aug 22, 2022 To Aug 29, 2022 ",
        cost: 1220,
        img: "https://i.ibb.co/4ppNv2K/img10.jpg",
        key: "tNt10",
        id: "cruise06",
    },
    {
        title: "Athens to Athens",
        description: "This round trip begins and ends in the shadow of Athens’ ubiquitous Acropolis. Drink in years of history starting with the ancient city of Ephesus, St. John’s Cave of the Apocalypse in Patmos, and the vestiges of the Colossus in Rhodes. Venture on to the Holy Land and Jerusalem and Nazareth’s incredible religious significance and cultural wonder. Relax with a day at sea plus another day in Crete’s lovely Souda Bay before returning to where you began.",
        duration: "Oct 12, 2022 To Oct 21, 2022",
        cost: 1400,
        img: "https://i.ibb.co/KmC3NgM/img11.jpg",
        key: "tNt11",
        id: "roadtrip01",
    },
    {
        title: "New Orleans Culture and Cuisine 2022",
        description: "Experience one of the most vibrant cities in the United States with this five-day immersive deep dive into New Orleans. You’ll explore the city as the locals see it with a home base at The Chloe hotel, a 19th-century mansion that's been converted to a luxe, boutique hotel just for you and your fellow TripNTour members. Set off on exclusive tours throughout the city and beyond to glean a deeper appreciation for NOLA’s rich history. You’ll learn about classic architectural styles in the Garden District, marvel at the amount of artisanry and preparation behind the scenes of Mardi Gras, and take in the quintessential southern beauty of Honey Island Swamp. Along the way, you’ll dine at a series of hand-picked restaurants that come highly recommended by locals and industry experts for a refined, behind-the-scenes experience of New Orleans’ culinary offerings.",
        duration: "Apr 5, 2022 To Apr 9, 2022",
        cost: 900,
        img: "https://i.ibb.co/Fq3tYSp/img12.jpg",
        key: "tNt12",
        id: "roadtrip02",
    },

];