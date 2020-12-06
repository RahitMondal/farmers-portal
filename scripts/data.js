const englishObj = {
    menu : ['about us', 'major crops', 'select state', 'Maharasthra','Punjab','West Bengal'],
    welcome : `Welcome to farmer's portal`,
    p1:`Agriculture is the backbone of the Indian Economy"- said Mahatma Gandhi six decades ago. Even today, the situation is still the same, with almost the entire economy being sustained by agriculture, which is the mainstay of the villages. It contributes 16% of the overall GDP and accounts for employment of approximately 52% of the Indian population. Rapid growth in agriculture is essential not only for self-reliance but also to earn valuable foreign exchange.`,
    p2:`Indian farmers are second to none in production and productivity despite of the fact that millions are marginal and small farmers. They adopt improved agriculture technology as efficiently as farmers in developed countries. It is felt that with provision of timely and adequate inputs such as fertilizers, seeds, pesticides and by making available affordable agricultural credit /crop insurance, Indian farmers are going to ensure food and nutritional security to the Nation.`,
    p3:`It is envisaged to make available relevant information and services to the farming community and private sector through the use of information and communication technologies, to supplement the existing delivery channels provided for by the department. Farmers’ Portal is an endeavour in this direction to create one stop shop for meeting all informational needs relating to Agriculture, Animal Husbandry and Fisheries sectors production, sale/storage of an Indian farmer. With this Indian Farmer will not be required to sift through maze of websites created for specific purposes.`,
    p4:`Once in the Farmers’ Portal, a farmer will be able to get all relevant information on specific subjects around his village/block /district or state. This information will be delivered in the form of text, SMS, email and audio/video in the language he or she understands. These levels can be easily reached through the Map of India placed on the Home page. Farmers will also be able to ask specific queries as well as give valuable feedback through the Feedback module specially developed for the purpose.`
}

const hindiObj = {
    menu : ['हमारे बारे में', 'प्रमुख फसलें', 'राज्यों का चयन करें','महाराष्ट्र','पंजाब','पश्चिम बंगाल'],
    welcome : `किसान पोर्टल पर आपका स्वागत है`,
    p1:`कृषि भारतीय अर्थव्यवस्था की रीढ़ की हड्डी है" - महात्मा गांधी ने छह दशक पहले कहा था.आज भी, स्थिति यथावत बनी हुई है जहां लगभग पूरी अर्थव्यवस्था कृषि पर निर्भर है जो गांवों का मुख्य पेशा है. यह समग्र जीडीपी के 16% का योगदान करती है और लगभग 52% भारतीय आबादी को रोजगार देने का काम करती है. कृषि में तीव्र विकास न केवल आत्मनिर्भर होने के लिए बल्कि बहुमूल्य विदेशी मुद्रा अर्जित करने के लिए भी अनिवार्य है.`,
    p2:`भारतीय किसान इस तथ्य के बावजूद कि लाखों लोग सीमांत और छोटे किसान हैं, उत्पादन और उत्पादकता में किसी से पीछे नहीं हैं. वे विकसित देशों के किसानों की तरह कुशलतापूर्वक उन्नत कृषि तकनीक को अपनाते हैं. यह महसूस किया गया है कि उर्वरक, बीज, कीटनाशक जैसे इनपुट की समय पर और पर्याप्त व्यवस्था करने और किफायती कृषि ऋण/फसल बीमा उपलब्ध कराने पर भारतीय किसान देश के लिए खाद्य एवं पोषण सुरक्षा सुनिश्चित करने में सक्षम हैं.`,
    p3:`आईटी विभाग द्वारा लिए प्रदान की मौजूदा वितरण चैनलों के पूरक के लिए, सूचना और संचार प्रौद्योगिकी के उपयोग के माध्यम से कृषक समुदाय और निजी क्षेत्र के लिए उपलब्ध प्रासंगिक सूचना और सेवाओं बनाने की परिकल्पना की गई है। किसान पोर्टल कृषि, पशुपालन और मत्स्य क्षेत्रों उत्पादन, बिक्री / एक भारतीय किसान के भंडारण से संबंधित सभी सूचना के जरूरतों को पूरा करने के लिए एक बंद दुकान बनाने के लिए इस दिशा में एक प्रयास है। इस भारतीय किसान के साथ विशिष्ट प्रयोजनों के लिए बनाई गई वेबसाइटों की भूलभुलैया के माध्यम से झारना करने के लिए आवश्यक नहीं किया जाएगा।.`,
    p4:`एक बार जब किसान पोर्टल, एक किसान अपने गांव / ब्लॉक / जिला या राज्य के चारों ओर विशिष्ट विषयों पर सभी प्रासंगिक जानकारी प्राप्त करने में सक्षम हो जाएगा।यह जानकारी, एसएमएस, ईमेल और ऑडियो / वीडियो पाठ के रूप में वह या वह की भाषा में समझने के लिये वितरित किया जाएगा। होम पेज पर रखे भारत के मानचित्र के माध्यम से इन स्तरों पर आसानी से पहुंचा जा सकता है। किसान भी विशिष्ट प्रश्न पूछने के लिये और तो और विशेष रूप से इस प्रयोजन के लिए विकास की प्रतिक्रिया मॉड्यूल के माध्यम से बहुमूल्य राय देने के लिए सक्षम हो जाएगा।.
    `
}

const benObj = {
    menu : ['আমাদের সম্পর্কে', 'প্রধান ফসল', 'রাষ্ট্র নির্বাচন করুন','মহারাষ্ট্র','পাঞ্জাব','পশ্চিম বঙ্গ'],
    welcome : `কৃষকের পোর্টালে আপনাকে স্বাগতম`,
    p1:`কৃষিই হল ভারতীয় অর্থনীতির মেরুদণ্ড - ছয় দশক আগে মহাত্মা গাঁধী বলেছেন.অদ্যাপি, পরিস্থিতি প্রায় সমগ্র অর্থনীতি, গ্রাম প্রধান অবলম্বন, যা কৃষি, দ্বারা টেকসই করা হচ্ছে সঙ্গে, এখনও একই. এটা সামগ্রিক জিডিপি 16% অবদান এবং ভারতীয় জনসংখ্যার প্রায় 52% এর কর্মসংস্থানের জন্য অ্যাকাউন্ট. কৃষি দ্রুত বৃদ্ধি আত্মনির্ভরশীলতা জন্য কিন্তু মূল্যবান বৈদেশিক মুদ্রা উপার্জন না শুধুমাত্র অপরিহার্য.`,
    p2:`ভারতীয় কৃষকদের লাখ লাখ প্রান্তিক ও ক্ষুদ্র কৃষকদের যে এর সত্ত্বেও উৎপাদন ও উৎপাদনশীলতা মধ্যে দ্বিতীয় কেউ. তারা উন্নত দেশে কৃষকদের হিসাবে হিসাবে দক্ষতার উন্নত কৃষি প্রযুক্তি অবলম্বন. এটা যেমন সার, বীজ, কীটনাশক হিসেবে সময়মত এবং পর্যাপ্ত ইনপুট বিধান দিয়ে এবং উপলব্ধ সাশ্রয়ী মূল্যের কৃষি ক্রেডিট / শস্য বীমা করে যে অনুভূত হয়, ভারতীয় কৃষকদের জাতির খাদ্য ও পুষ্টির নিরাপত্তা নিশ্চিত করতে যাচ্ছি.`,
    p3:`এটা বিভাগের জন্য দেওয়া বিদ্যমান ডেলিভারি চ্যানেল সম্পূরক, তথ্য ও যোগাযোগ প্রযুক্তি ব্যবহারের মাধ্যমে চাষ সম্প্রদায় ও বেসরকারি খাতের জন্য উপলব্ধ প্রাসঙ্গিক তথ্য এবং পরিষেবা করতে envisaged হয়. চাষীরা 'পোর্টাল কৃষি, পশুপালন ও মৎস্য খাতে একটি ভারতীয় কৃষকের উৎপাদন, বিক্রয় / সংগ্রহস্থল সংক্রান্ত সব তথ্য চাহিদা পূরণের জন্য এক স্টপ দোকান তৈরি করতে এই দিক একটি প্রচেষ্টা করা. এই ভারতীয় কৃষক সঙ্গে নির্দিষ্ট উদ্দেশ্যে নির্মিত ওয়েবসাইটের ধাঁধা মাধ্যমে টালা করার প্রয়োজন হবে না.`,
    p4:`একবার চাষীরা 'পোর্টাল সালে একটি কৃষক তার গ্রামের / ব্লক / জেলা বা রাষ্ট্র চারপাশে নির্দিষ্ট বিষয়ের উপর সমস্ত প্রাসঙ্গিক তথ্য পেতে পারবেন. এই তথ্য টেক্সট, এসএমএস, ইমেইল এবং অডিও / সে বোঝে ভাষায় ভিডিও আকারে সরবরাহ করা হবে. এই মাত্রা সহজেই হোম পেজে স্থাপন ভারতের ম্যাপ মাধ্যমে পৌঁছে যাবে. চাষীরা এছাড়াও নির্দিষ্ট প্রশ্ন জিজ্ঞাসা হিসেবে বিশেষভাবে উদ্দেশ্যে উন্নত প্রতিক্রিয়া মডিউল মাধ্যমে মূল্যবান মতামত দিতে পারবেন.
    `
}
