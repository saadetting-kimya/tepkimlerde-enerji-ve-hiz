/* ============================================================
   quiz-data.js — QUIZ = { modulAnahtari: [ {soru...}, ... ] }
   Modül 1: Tepkimelerde Meydana Gelen Enerji Değişimi (KİM.11.1.1)
   ============================================================ */

const QUIZ = {
  m1: [
  {
    "difficulty": "kolay",
    "text": "Bir değişim gerçekleşirken çevresinden sürekli ısı alıyorsa bu değişim nasıl adlandırılır?",
    "options": [
      "Ekzotermik değişim",
      "Tersinmez değişim",
      "Endotermik değişim",
      "Nötr değişim",
      "Katalitik değişim"
    ],
    "correct": 2,
    "explain": "Çevresinden ısı alarak gerçekleşen değişimlere endotermik değişim denir. Bu sırada çevrenin sıcaklığı düşer, çünkü çevredeki enerjinin bir kısmı değişimi gerçekleştiren sisteme aktarılır."
  },
  {
    "difficulty": "kolay",
    "text": "Ekzotermik bir değişim gerçekleştiğinde değişimin yakın çevresindeki sıcaklık nasıl değişir?",
    "options": [
      "Artar",
      "Azalır",
      "Önce artar sonra azalır",
      "Değişmez",
      "Sıfıra düşer"
    ],
    "correct": 0,
    "explain": "Ekzotermik değişimlerde sistem çevresine ısı verir. Çevreye aktarılan bu ısı, çevrenin sıcaklığının artmasına neden olur."
  },
  {
    "difficulty": "kolay",
    "context": "Bir beherde katı hâldeki bir madde eritiliyor; ısıtma sırasında maddenin tanecikleri arasındaki düzenli yapı bozuluyor ancak madde kimliğini korumaya devam ediyor.",
    "text": "Metinde tanımlanan olay için aşağıdakilerden hangisi doğrudur?",
    "options": [
      "Değişim türü ısı alışverişinden bağımsız belirlenemez",
      "Tanecikler arasındaki bağlar koparak yeni bileşik oluşturur",
      "Hem fiziksel hem kimyasal bir değişimdir",
      "Fiziksel bir değişimdir, madde türü değişmez",
      "Kimyasal bir değişimdir ve yeni bir madde oluşur"
    ],
    "correct": 3,
    "explain": "Erime sırasında maddenin kimliği (formülü) değişmez, yalnızca tanecikler arasındaki düzen bozulur; bu yüzden erime fiziksel bir değişimdir."
  },
  {
    "difficulty": "kolay",
    "text": "Yanma tepkimeleri için aşağıdaki ifadelerden hangisi doğrudur?",
    "options": [
      "Yanma fiziksel bir değişimdir",
      "Yanma yalnızca katı maddelerde görülür",
      "Yanma sırasında çevre ısı verir, tepken ısı alır",
      "Yanma sonucunda yeni maddeler oluşur ve ısı açığa çıkar",
      "Yanma sırasında madde miktarı azalır ama tür değişmez"
    ],
    "correct": 3,
    "explain": "Yanma, tepkenlerin oksijenle tepkimeye girip farklı kimliğe sahip ürünler (örneğin karbon dioksit, su buharı) oluşturduğu kimyasal bir değişimdir ve ortama ısı verir; yani ekzotermiktir."
  },
  {
    "difficulty": "kolay",
    "text": "Aşağıdakilerden hangisi hem fiziksel hem de kimyasal değişimler için ortak olarak kullanılabilecek bir sınıflandırma ölçütüdür?",
    "options": [
      "Değişimin renkli olup olmaması",
      "Değişimin ısı alması ya da vermesi",
      "Değişimin süresinin uzun olması",
      "Değişimin katı, sıvı ya da gaz olması",
      "Madde formülünün değişip değişmediği"
    ],
    "correct": 1,
    "explain": "Isı alışverişi yönü (endotermik/ekzotermik), hem fiziksel hem kimyasal değişimlere uygulanabilen bağımsız bir sınıflandırma ölçütüdür; oysa formül değişimi yalnızca fiziksel-kimyasal ayrımını belirler."
  },
  {
    "difficulty": "kolay",
    "text": "Bir tepkime gerçekleşirken ortamın sıcaklığının yükseldiği gözlemleniyor. Bu gözlem, tepkimenin ısı alışverişi yönü hakkında ne söyler?",
    "options": [
      "Isı alışverişi hakkında bilgi vermez",
      "Tepkime ekzotermiktir",
      "Tepkime tersinmezdir",
      "Tepkime kesinlikle fizikseldir",
      "Tepkime endotermiktir"
    ],
    "correct": 1,
    "explain": "Ortam sıcaklığının yükselmesi, sistemin çevresine ısı verdiğinin işaretidir; bu da tepkimenin ekzotermik olduğunu gösterir."
  },
  {
    "difficulty": "kolay",
    "text": "Katı hâldeki kuru buzun (katı karbon dioksit) oda sıcaklığında doğrudan gaz hâline geçmesi (süblimleşme) sırasında ortamdaki sıcaklık nasıl değişir?",
    "options": [
      "Ortam önce ısınır sonra soğur",
      "Kuru buz ısı alışverişi yapmaz",
      "Ortam ısınır çünkü kuru buz enerji açığa çıkarır",
      "Ortam soğur çünkü kuru buz gaza geçmek için ısı alır",
      "Ortam sıcaklığı sabit kalır"
    ],
    "correct": 3,
    "explain": "Süblimleşme sırasında tanecikler katı hâlden doğrudan gaz hâline geçmek için enerji almak zorundadır; bu enerji ortamdan alınır ve ortam soğur. Süblimleşme fiziksel ve endotermik bir değişimdir."
  },
  {
    "difficulty": "kolay",
    "text": "Aşağıdaki olaylardan hangisi kimyasal bir değişime örnektir?",
    "options": [
      "Alkolün buharlaşması",
      "Suyun donması",
      "Sütün ekşiyerek yoğurda dönüşmesi",
      "Kâğıdın yırtılması",
      "Şekerin suda çözünmesi"
    ],
    "correct": 2,
    "explain": "Sütün ekşimesi sırasında laktoz, bakteriler etkisiyle laktik aside dönüşür; ortaya yeni bir madde çıktığı için bu kimyasal bir değişimdir. Diğer seçenekler madde kimliğini koruyan fiziksel değişimlerdir."
  },
  {
    "difficulty": "kolay",
    "text": "Bir değişimin endotermik ya da ekzotermik olduğunu belirlemek için en doğrudan gözlem hangisidir?",
    "options": [
      "Değişimin tersinir olup olmadığı",
      "Değişen maddenin rengi",
      "Çevredeki sıcaklığın artıp azaldığı",
      "Değişimin ne kadar sürdüğü",
      "Değişimin katı mı sıvı mı olduğu"
    ],
    "correct": 2,
    "explain": "Endotermik/ekzotermik ayrımı doğrudan ısı alışverişiyle ilgilidir; bunu gözlemlemenin en somut yolu değişim sırasında çevre sıcaklığının artıp azalmadığını izlemektir."
  },
  {
    "difficulty": "kolay",
    "text": "Aşağıdaki değişimlerden hangisi fiziksel bir değişimdir?",
    "options": [
      "Naftalin topunun zamanla küçülerek gaz hâline geçmesi",
      "Mumun yanarak is oluşturması",
      "Suyun elektrolizle hidrojen ve oksijene ayrışması",
      "Demirin paslanması",
      "Üzüm suyunun mayalanarak şaraba dönüşmesi"
    ],
    "correct": 0,
    "explain": "Naftalinin katı hâlden doğrudan gaz hâline geçmesi (süblimleşme) sırasında madde kimliği değişmez; bu yüzden fizikseldir. Diğer seçeneklerin hepsinde yeni maddeler oluşur."
  },
  {
    "difficulty": "kolay",
    "text": "Bir tıbbi soğutma paketi sıkıldığında içindeki katı madde suda çözünür ve paketin yüzeyi hızla soğur. Bu gözlem, çözünme olayının ısı alışverişi yönü hakkında ne gösterir?",
    "options": [
      "Çözünme endotermiktir",
      "Çözünme ekzotermiktir",
      "Çözünme sırasında yeni madde oluşur",
      "Çözünme ısı alışverişi yapmaz",
      "Çözünme kimyasal bir değişimdir"
    ],
    "correct": 0,
    "explain": "Paketin yüzeyinin soğuması, çözünen katının çevresinden (sudan ve dış ortamdan) ısı aldığının kanıtıdır; bu da çözünmenin endotermik olduğunu gösterir."
  },
  {
    "difficulty": "kolay",
    "text": "Bir demir-kükürt karışımı ısıtıldığında parlak kızıl bir ışıma ile birlikte demir sülfür oluşur ve tepkime başladıktan sonra dışarıdan ısı verilmese de kendiliğinden devam eder. Bu gözlem tepkimenin türü hakkında ne söyler?",
    "options": [
      "Tepkime fizikseldir çünkü ışık açığa çıkmıştır",
      "Tepkime ekzotermiktir çünkü kendi ürettiği ısıyla devam etmektedir",
      "Tepkime yalnızca fiziksel bir karışım oluşturur",
      "Tepkime ısı alışverişi yapmamaktadır",
      "Tepkime endotermiktir çünkü başlangıçta ısıtma gerekmiştir"
    ],
    "correct": 1,
    "explain": "Tepkimenin, başlatıldıktan sonra dışarıdan ısı almadan kendi ürettiği ısıyla ilerlemesi, açığa çıkardığı enerjinin tepkimeyi sürdürmeye yettiğini gösterir; bu ekzotermik tepkimelerin tipik bir özelliğidir. Demir ve kükürtten farklı bir bileşiğin (demir sülfür) oluşması da değişimin kimyasal olduğunu gösterir."
  },
  {
    "difficulty": "kolay",
    "text": "Aşağıdaki ifadelerden hangisi yanlıştır?",
    "options": [
      "Her fiziksel değişim mutlaka endotermiktir",
      "Bir değişim hem kimyasal hem ekzotermik olabilir",
      "Her kimyasal değişim yeni madde oluşumuyla sonuçlanır",
      "Bir değişim hem fiziksel hem endotermik olabilir",
      "Isı alışverişi yönü, değişimin fiziksel ya da kimyasal oluşundan bağımsızdır"
    ],
    "correct": 0,
    "explain": "Fiziksel değişimler endotermik de ekzotermik de olabilir; örneğin erime endotermikken yoğuşma ekzotermiktir. Bu yüzden 'her fiziksel değişim endotermiktir' ifadesi yanlıştır."
  },
  {
    "difficulty": "kolay",
    "text": "Su buharının soğuk bir cam yüzeyde yoğuşarak sıvı su damlacıkları oluşturması sırasında ortama ısı verilir mi?",
    "options": [
      "Bu, camın renginе bağlıdır",
      "Evet, yoğuşma ekzotermiktir",
      "Hayır, yoğuşma endotermiktir",
      "Yalnızca sıcak ortamlarda ısı verilir",
      "Hayır, yoğuşma ısı alışverişi yapmaz"
    ],
    "correct": 1,
    "explain": "Gaz hâlindeki tanecikler sıvı hâle geçerken taneciklerin enerjisinin bir kısmı çevreye aktarılır. Bu yüzden yoğuşma ekzotermik bir fiziksel değişimdir."
  },
  {
    "difficulty": "kolay",
    "text": "Bir değişim sırasında sistemin (değişimi geçiren maddenin) enerjisi artıyorsa bu enerji artışı nereden gelir?",
    "options": [
      "Sistemin kütlesi enerjiye dönüşür",
      "Çevreden sisteme aktarılan ısıdan gelir",
      "Sistem kendi kendine enerji üretir",
      "Enerji korunumu bu durumda geçerli değildir",
      "Enerji artışı yalnızca kimyasal değişimlerde görülür"
    ],
    "correct": 1,
    "explain": "Enerjinin korunumu ilkesine göre sistemin enerjisindeki artış, çevreden sisteme aktarılan ısıdan kaynaklanır; bu da endotermik bir sürecin tanımıdır."
  },
  {
    "difficulty": "kolay",
    "text": "Aşağıdaki olaylardan hangisinde madde, ortamdan ısı alarak hâl değiştirir?",
    "options": [
      "Erimiş mumun katılaşması",
      "Sıvı yağın donması",
      "Su buharının yoğuşması",
      "Suyun kaynayarak buharlaşması",
      "Sıvı azotun donması"
    ],
    "correct": 3,
    "explain": "Kaynama sırasında sıvı tanecikleri gaz hâline geçmek için ortamdan enerji alır; bu yüzden kaynama endotermik bir hâl değişimidir. Diğer seçeneklerin tümü ısı vererek gerçekleşen (ekzotermik) hâl değişimleridir."
  },
  {
    "difficulty": "kolay",
    "text": "Bir kimyasal değişimin fiziksel değişimden temel farkı nedir?",
    "options": [
      "Kimyasal değişimde madde kimliği değişerek yeni madde(ler) oluşur",
      "Kimyasal değişim yalnızca ekzotermik olabilir",
      "Fiziksel değişim geri döndürülemez",
      "Kimyasal değişimde ısı alışverişi olmaz",
      "Kimyasal değişim yalnızca gazlarda görülür"
    ],
    "correct": 0,
    "explain": "Kimyasal değişimlerde tepkenlerin bağları kopar, yeni bağlar oluşur ve kimliği farklı ürünler ortaya çıkar. Fiziksel değişimlerde ise madde kimliği korunur, yalnızca hâli ya da görünümü değişir."
  },
  {
    "difficulty": "orta",
    "statements": {
      "items": [
        "Endotermik bir değişimde çevrenin sıcaklığı artar.",
        "Bir değişimin fiziksel ya da kimyasal olması, ısı alışverişi yönünü tek başına belirlemez.",
        "Ekzotermik değişimlerde sistemin enerjisi çevreye aktarılır."
      ]
    },
    "text": "Yukarıdaki önermelerden hangileri doğrudur?",
    "options": [
      "I, II ve III",
      "Yalnız I",
      "I ve III",
      "II ve III",
      "Yalnız II"
    ],
    "correct": 3,
    "explain": "I yanlıştır; endotermik değişimde çevre ısı kaybettiği için sıcaklığı azalır, artmaz. II doğrudur; hem fiziksel hem kimyasal değişimler endotermik ya da ekzotermik olabilir. III doğrudur; ekzotermik değişimde enerji sistemden çevreye geçer."
  },
  {
    "difficulty": "orta",
    "table": {
      "headers": [
        "Olay",
        "Değişim Türü",
        "Çevre Sıcaklığı"
      ],
      "rows": [
        [
          "Sıvı azotun buharlaşması",
          "Fiziksel",
          "Azalır"
        ],
        [
          "Magnezyum şeridinin havada yanması",
          "Kimyasal",
          "Artar"
        ],
        [
          "Sönmemiş kirecin (CaO) su ile tepkimesi",
          "Kimyasal",
          "Artar"
        ],
        [
          "Amonyum nitratın suda çözünmesi",
          "Fiziksel",
          "Azalır"
        ]
      ]
    },
    "text": "Tabloya göre aşağıdaki genellemelerden hangisi yapılabilir?",
    "options": [
      "Değişimin fiziksel ya da kimyasal olması, çevre sıcaklığının artıp azalacağını tek başına belirlemez",
      "Tablodaki tüm fiziksel olaylar ekzotermiktir",
      "Tabloda hem fiziksel hem kimyasal olaylar aynı yönde ısı alışverişi göstermektedir",
      "Tablodaki tüm kimyasal olaylar endotermiktir",
      "Yalnızca kimyasal değişimlerde çevre sıcaklığı değişir"
    ],
    "correct": 0,
    "explain": "Tabloda hem fiziksel (azot buharlaşması: endotermik, amonyum nitrat çözünmesi: endotermik) hem kimyasal (magnezyum yanması: ekzotermik, kireç-su tepkimesi: ekzotermik) olaylar var; ısı yönü her ikisinde de değişebiliyor, dolayısıyla fiziksel/kimyasal oluş tek başına ısı yönünü belirlemiyor."
  },
  {
    "difficulty": "orta",
    "dialogue": {
      "turns": [
        {
          "who": "Öğrenci A",
          "text": "Bence bir olay ekzotermikse mutlaka kimyasal olmalı, çünkü büyük enerji değişimleri ancak yeni madde oluşumuyla mümkün."
        },
        {
          "who": "Öğrenci B",
          "text": "Katılmıyorum; su buharının yoğuşması da ekzotermiktir ama madde kimliği değişmez, yani fizikseldir."
        }
      ]
    },
    "text": "Bu tartışmaya göre hangi öğrenci bilimsel olarak haklıdır?",
    "options": [
      "Yalnız Öğrenci B",
      "Verilen bilgiyle karar verilemez",
      "İkisi de haksızdır",
      "İkisi de haklıdır",
      "Yalnız Öğrenci A"
    ],
    "correct": 0,
    "explain": "Öğrenci B haklıdır. Isı alışverişi yönü (endo/ekzo), değişimin fiziksel ya da kimyasal oluşundan bağımsız bir özelliktir; yoğuşma gibi fiziksel değişimler de ekzotermik olabilir."
  },
  {
    "difficulty": "orta",
    "text": "Bir madde katı hâlden sıvı hâle geçerken ortamdan sürekli ısı almasına rağmen erime boyunca sıcaklığı sabit kalmaktadır. Bu gözlem en iyi neyle açıklanır?",
    "options": [
      "Madde bu aşamada kimyasal bir değişime uğramaktadır",
      "Madde ısı almamaktadır",
      "Erime sırasında sıcaklık her zaman artar, bu bir ölçüm hatasıdır",
      "Alınan ısı, taneciklerin düzenini bozmak için kullanılır, taneciklerin ortalama kinetik enerjisini artırmaz",
      "Alınan ısı çevreye geri verilmektedir"
    ],
    "correct": 3,
    "explain": "Hâl değişimi sırasında alınan ısı, taneciklerin sıcaklığını (kinetik enerjisini) artırmak yerine aralarındaki çekim kuvvetlerini yenerek düzenlerini bozmakta kullanılır; bu yüzden hâl değişimi süresince sıcaklık sabit kalır."
  },
  {
    "difficulty": "orta",
    "chart": {
      "labels": [
        "Tuz (NaCl)",
        "Amonyum nitrat",
        "Sodyum hidroksit"
      ],
      "values": [
        -2,
        -8,
        12
      ],
      "unit": "Çözünme sırasında sıcaklık değişimi (°C)",
      "tone": [
        "endo",
        "endo",
        "exo"
      ]
    },
    "text": "Grafikte üç farklı katının aynı miktarda suda çözünmesi sırasında çözelti sıcaklığındaki değişim verilmiştir. Grafiğe göre hangi madde çözünürken en fazla ısı açığa çıkarmıştır?",
    "options": [
      "Üçü de eşit ısı açığa çıkarmıştır",
      "Tuz (NaCl)",
      "Amonyum nitrat",
      "Grafikten bu belirlenemez",
      "Sodyum hidroksit"
    ],
    "correct": 4,
    "explain": "Sodyum hidroksidin çözünmesi çözelti sıcaklığını +12°C artırmıştır; pozitif değer, madde çözünürken çevreye ısı verdiğini (ekzotermik) gösterir ve üç madde arasında en büyük artış ona aittir."
  },
  {
    "difficulty": "orta",
    "matchPairs": {
      "leftHeader": "Olay",
      "rightHeader": "Isı Alışverişi Yönü",
      "pairs": [
        [
          "Sıcak çayın soğuması",
          "Ekzotermik (çevreye ısı verir)"
        ],
        [
          "Alkolün cilt üzerinde buharlaşması",
          "Endotermik (çevreden ısı alır)"
        ],
        [
          "Betonun donarak sertleşmesi (kimyasal sertleşme)",
          "Ekzotermik (çevreye ısı verir)"
        ]
      ]
    },
    "text": "Yukarıdaki eşleştirme tablosuna göre hangi olay çevresinden ısı alarak gerçekleşir?",
    "options": [
      "Hiçbiri",
      "Hepsi",
      "Alkolün cilt üzerinde buharlaşması",
      "Betonun sertleşmesi",
      "Sıcak çayın soğuması"
    ],
    "correct": 2,
    "explain": "Alkolün buharlaşması için tanecikler sıvı hâlden gaz hâline geçerken enerjiye ihtiyaç duyar; bu enerji cilt yüzeyinden alınır, bu yüzden cilt serinler. Bu, buharlaşmanın endotermik bir süreç olduğunun günlük hayattaki bir kanıtıdır."
  },
  {
    "difficulty": "orta",
    "text": "Bir sodyum asetat cep sobası kristalleştirilerek harekete geçirildiğinde elle hissedilir biçimde ısınır; soba tekrar kullanılabilmesi için kaynar suda ısıtılarak katı hâlden aşırı doymuş sıvı hâle geri döndürülür. Buna göre sobanın kristalleşme ve yeniden sıvılaştırma adımları için aşağıdakilerden hangisi doğrudur?",
    "options": [
      "Kristalleşme endotermik, sıvılaştırma ekzotermiktir",
      "Her iki adım da endotermiktir",
      "Kristalleşme ekzotermik, sıvılaştırma endotermiktir",
      "Her iki adım da ekzotermiktir",
      "Adımların ısı yönü belirlenemez"
    ],
    "correct": 2,
    "explain": "Kristalleşme sırasında elle hissedilecek kadar ısı açığa çıkması, bu adımın ekzotermik olduğunu gösterir. Sobayı tekrar sıvı hâle döndürmek için dışarıdan (kaynar sudan) ısı verilmesi gerekmesi, bu adımın endotermik olduğunu gösterir; iki adım birbirinin tersidir."
  },
  {
    "difficulty": "orta",
    "checklist": {
      "items": [
        "Bir olayın ekzotermik olması için mutlaka kimyasal olması gerekir.",
        "Fiziksel bir değişim sırasında da ölçülebilir bir sıcaklık değişimi gözlenebilir.",
        "Isı alışverişinin yönü, değişimi geçiren maddenin çevresiyle karşılaştırılarak belirlenir."
      ]
    },
    "text": "Yukarıdaki ifadelerden kaç tanesi doğrudur?",
    "options": [
      "0",
      "1",
      "Verilenlerle belirlenemez",
      "2",
      "3"
    ],
    "correct": 3,
    "explain": "Birinci ifade yanlıştır (fiziksel değişimler de ekzotermik olabilir). İkinci ve üçüncü ifadeler doğrudur: fiziksel değişimlerde sıcaklık değişimi gözlenebilir ve ısı yönü, sistem ile çevre arasındaki alışverişe bakılarak belirlenir. Doğru ifade sayısı 2'dir."
  },
  {
    "difficulty": "orta",
    "text": "Bir kimyager, aynı miktarda iki farklı tuzu ayrı beherlerdeki eşit miktarda suda çözüyor ve her iki beherin sıcaklığını da çözünmeden önce ve sonra ölçüyor. 1. beherin sıcaklığı 3°C düşerken 2. beherin sıcaklığı 5°C artıyor. Bu ölçümlere dayanarak hangi sonuca varılabilir?",
    "options": [
      "1. tuzun çözünmesi endotermik, 2. tuzun çözünmesi ekzotermiktir",
      "1. tuzun çözünmesi ekzotermik, 2. tuzun çözünmesi endotermiktir",
      "Her iki çözünme de ekzotermiktir",
      "Sıcaklık verileri ısı yönünü belirlemek için yeterli değildir",
      "Her iki çözünme de endotermiktir"
    ],
    "correct": 0,
    "explain": "Sıcaklığın düşmesi (1. beher), çözünen maddenin ortamdan ısı aldığını, yani endotermik bir süreci gösterir. Sıcaklığın artması (2. beher) ise madde çözünürken ortama ısı verdiğini, yani ekzotermik bir süreci gösterir."
  },
  {
    "difficulty": "orta",
    "text": "Bir tepkime kabında gerçekleşen değişim sırasında kabın dış yüzeyi elle tutulamayacak kadar soğumaktadır. Bu gözlem, sistem ile çevre arasındaki enerji aktarımı hakkında ne söyler?",
    "options": [
      "Kabın malzemesi ısı yalıtkanı olduğu için sonuç anlamsızdır",
      "Sistemden çevreye enerji aktarılmaktadır",
      "Çevreden sisteme enerji aktarılmaktadır",
      "Sistem ile çevre arasında enerji aktarımı yoktur",
      "Enerji aktarımı yönü belirlenemez"
    ],
    "correct": 2,
    "explain": "Kabın dışının soğuması, çevrenin (kabın dış yüzeyinin ve elin) ısı kaybettiğini, dolayısıyla bu ısının içerideki sisteme aktarıldığını gösterir. Bu, endotermik bir değişimin tipik dış görünümüdür."
  },
  {
    "difficulty": "orta",
    "text": "Aşağıdaki olay çiftlerinden hangisinde iki olay da endotermiktir?",
    "options": [
      "Suyun donması ve mumun yanması",
      "Buzun erimesi ve suyun buharlaşması",
      "Su buharının yoğuşması ve demirin paslanması",
      "Kâğıdın yanması ve sıvı azotun donması",
      "Kireç söndürülmesi ve odun yanması"
    ],
    "correct": 1,
    "explain": "Erime ve buharlaşma, tanecikler arası çekim kuvvetlerinin yenilmesi için ortamdan enerji alınmasını gerektiren iki fiziksel hâl değişimidir; ikisi de endotermiktir. Diğer seçeneklerdeki olayların en az biri ekzotermiktir."
  },
  {
    "difficulty": "orta",
    "text": "Bir öğretmen sınıfta iki farklı deney düzeneği kuruyor: 1. düzenekte katı bir madde ısıtılınca renk değiştirip gaz çıkışı gözleniyor; 2. düzenekte aynı madde ısıtılınca sadece sıvı hâle geçiyor. Isıtmanın kesilmesi hâlinde her iki düzenekte beklenen davranış nedir?",
    "options": [
      "Her iki düzenekte de değişim tamamen tersine döner",
      "Her iki düzenekte de değişim geri döndürülemez",
      "Isıtmanın kesilmesi değişim türünü etkilemez, bu yüzden ikisi de aynı davranışı gösterir",
      "1. düzenekte tepkime tersine döner, 2. düzenekte madde katı hâle döner",
      "1. düzenekte oluşan yeni ürünler kendiliğinden eski maddeye dönüşmez, 2. düzenekte madde soğuyunca tekrar katılaşabilir"
    ],
    "correct": 4,
    "explain": "1. düzenekte renk değişimi ve gaz çıkışı, yeni madde oluşan bir kimyasal değişime işaret eder; bu tür değişimler kendiliğinden eski hâline dönmez. 2. düzenekteki erime ise fizikseldir ve soğutulduğunda madde tekrar katı hâle (donarak) geri dönebilir."
  },
  {
    "difficulty": "orta",
    "text": "Bir bombardıman böceği, karnındaki iki ayrı kimyasalı savunma anında karıştırarak avcısına doğru yüksek sıcaklıkta bir sıvı-buhar karışımı püskürtür. Bu olayla ilgili aşağıdaki yorumlardan hangisi doğrudur?",
    "options": [
      "Karışımın sıcak olması olayın fiziksel olduğunu gösterir",
      "İki kimyasalın tepkimeye girip ısı açığa çıkarması, olayın kimyasal ve ekzotermik olduğunu gösterir",
      "Olay endotermiktir çünkü böcek enerji harcamaktadır",
      "Bu olay ısı alışverişi açısından sınıflandırılamaz",
      "Karışımın sıcak çıkması yalnızca fiziksel bir hâl değişimidir"
    ],
    "correct": 1,
    "explain": "İki farklı kimyasalın tepkimeye girerek yeni ürünler ve yüksek sıcaklıkta bir karışım oluşturması kimyasal bir değişimdir; açığa çıkan ısının çevreye (ve avcıya) aktarılması bu tepkimenin ekzotermik olduğunu gösterir."
  },
  {
    "difficulty": "orta",
    "text": "Havai fişeklerin patlaması sırasında hem parlak ışık hem de yüksek miktarda ısı açığa çıkar ve barut yerini farklı gazlara bırakır. Bu olay için aşağıdaki sınıflandırmalardan hangisi doğrudur?",
    "options": [
      "Kimyasal ve ekzotermik",
      "Ne fiziksel ne kimyasal",
      "Fiziksel ve endotermik",
      "Fiziksel ve ekzotermik",
      "Kimyasal ve endotermik"
    ],
    "correct": 0,
    "explain": "Barutun yanarak farklı gazlara dönüşmesi madde kimliğinin değiştiğini, yani olayın kimyasal olduğunu gösterir. Işık ve ısının açığa çıkması ise enerjinin çevreye verildiğini, yani olayın ekzotermik olduğunu gösterir."
  },
  {
    "difficulty": "orta",
    "text": "Bir laboratuvarda iki özdeş kap kullanılıyor: A kabında buz suda erirken, B kabında aynı sıcaklıktaki su donduruluyor. A ve B kaplarındaki suyun sıcaklığı sabit tutulduğuna göre, bu iki olayın ısı alışverişi yönleri birbiriyle nasıl ilişkilidir?",
    "options": [
      "A ekzotermik, B endotermiktir; birbirinin tersidir",
      "A endotermik, B ekzotermiktir; birbirinin tersidir",
      "İkisi de ısı alışverişi yapmaz",
      "İkisi de aynı yönde ısı alışverişi yapar",
      "Yön, yalnızca kap malzemesine bağlıdır"
    ],
    "correct": 1,
    "explain": "Erime (A) tanecikler arası düzenin bozulması için ortamdan ısı alınmasını gerektirir; bu yüzden endotermiktir. Donma (B) ise tanecikler arası düzenli yapının kurulması sırasında ısının çevreye verilmesiyle gerçekleşir; bu yüzden ekzotermiktir. Erime ve donma birbirinin ters yönlü hâl değişimleridir."
  },
  {
    "difficulty": "orta",
    "text": "Bir tarım işletmesinde soğuk gecelerde bitkileri dondan korumak için tarlalara su püskürtülür; suyun bitki yüzeylerinde donarak ince bir buz tabakası oluşturması, bitkilerin daha fazla soğumasını engeller. Bu uygulamanın işe yaramasının nedeni aşağıdakilerden hangisiyle açıklanabilir?",
    "options": [
      "Donma endotermiktir ve bitkilerden ısı çeker",
      "Buz tabakası bitkiyi ısıtan bir kimyasal tepkime başlatır",
      "Donma sırasında ısı alışverişi olmaz",
      "Su püskürtme, bitkinin sıcaklığını doğrudan değiştirmez",
      "Donma ekzotermiktir ve açığa çıkan ısı bitki çevresini bir miktar ısıtır"
    ],
    "correct": 4,
    "explain": "Suyun donması sırasında tanecikler arasında düzenli bir katı yapı kurulur ve bu sırada açığa çıkan ısı çevreye (bitki yüzeyine) verilir. Bu ekzotermik ısı, bitkinin çevresini bir miktar ısıtarak dondan korunmasına yardımcı olur."
  },
  {
    "difficulty": "orta",
    "text": "Ekmek hamurunun mayalanması sırasında hamurun hafifçe ısındığı ve içindeki mayanın şeker ile tepkimeye girerek karbon dioksit gazı ürettiği gözleniyor. Bu gözleme dayanarak mayalanma olayı için en doğru sınıflandırma hangisidir?",
    "options": [
      "Fiziksel ve ekzotermik",
      "Fiziksel ve endotermik",
      "Kimyasal ve ekzotermik",
      "Kimyasal ve endotermik",
      "Ne fiziksel ne kimyasal, yalnızca hacim artışı"
    ],
    "correct": 2,
    "explain": "Mayanın şekeri parçalayarak karbon dioksit gazı gibi yeni maddeler üretmesi, olayın kimyasal olduğunu gösterir. Hamurun ısınması ise bu sürecin çevreye ısı verdiğini, yani ekzotermik olduğunu gösterir."
  },
  {
    "difficulty": "zor",
    "statements": {
      "items": [
        "Bir değişimin ekzotermik olması, o değişimin mutlaka kendiliğinden ve hızlı gerçekleştiği anlamına gelir.",
        "Aynı madde için erime endotermikken donma ekzotermiktir; bu iki değişim birbirinin tersidir.",
        "Bir kimyasal değişimde açığa çıkan ısı miktarı, yalnızca tepkimeye giren madde miktarına değil tepkenlerin cinsine de bağlıdır."
      ]
    },
    "text": "Verilen önermelerden hangileri doğrudur?",
    "options": [
      "I ve II",
      "I, II ve III",
      "Yalnız II",
      "II ve III",
      "I ve III"
    ],
    "correct": 3,
    "explain": "I yanlıştır; bir değişimin ekzotermik olması onun hızlı ya da kendiliğinden gerçekleştiği anlamına gelmez, örneğin demirin paslanması ekzotermik olduğu hâlde çok yavaştır. II doğrudur; erime-donma birbirinin ters yönlü hâl değişimidir. III doğrudur; farklı maddeler eşit miktarda tepkimeye girse de açığa çıkan ısı, maddelerin cinsine (kimyasal yapısına) göre değişir."
  },
  {
    "difficulty": "zor",
    "table": {
      "headers": [
        "Deney",
        "Gözlem",
        "Yorum"
      ],
      "rows": [
        [
          "1",
          "Katı A suda çözülüyor, çözelti soğuyor",
          "Endotermik, fiziksel"
        ],
        [
          "2",
          "Katı B suda çözülüyor, çözelti ısınıyor, dipte çökelti kalmıyor ve renk değişiyor",
          "?"
        ]
      ]
    },
    "text": "2. deneydeki gözlemler dikkate alındığında, Katı B'nin çözünmesiyle ilgili en tutarlı yorum hangisidir?",
    "options": [
      "Renk değişimi ısı alışverişini etkisiz kılar",
      "Fiziksel ve ekzotermik bir süreçtir",
      "Fiziksel ve endotermik bir süreçtir",
      "Gözlemler yetersiz olduğu için hiçbir yorum yapılamaz",
      "Kimyasal bir tepkime de eşlik ediyor olabilir; yalnızca çözünme değil olası bir tepkime de gerçekleşmiş olabilir"
    ],
    "correct": 4,
    "explain": "Basit bir çözünmede beklenen tek değişiklik sıcaklık ve görünüm iken, burada ayrıca renk değişimi gözlenmesi, çözünmenin yanı sıra maddenin kimliğini değiştiren bir kimyasal tepkimenin de eşlik edebileceğine işaret eder; ısınma bu sürecin ekzotermik olduğunu gösterir. Bu yüzden yalnızca 'fiziksel çözünme' demek gözlemin tamamını açıklamaz."
  },
  {
    "difficulty": "zor",
    "chart": {
      "labels": [
        "0. dk",
        "2. dk",
        "4. dk",
        "6. dk"
      ],
      "values": [
        24,
        24,
        24,
        18
      ],
      "unit": "Karışım sıcaklığı (°C)"
    },
    "text": "Bir deneyde katı bir madde suya eklendikten sonra karışımın sıcaklığı 2 dakika arayla ölçülüyor; grafiğe göre sıcaklık ilk 4 dakika sabit kalıp 6. dakikada düşüyor. Bu veriler için en tutarlı açıklama hangisidir?",
    "options": [
      "Ölçüm hatası nedeniyle veriler anlamsızdır",
      "Sıcaklığın sabit kalması, maddenin hiç çözünmediğini kesin olarak kanıtlar",
      "Çözünme endotermiktir ve baştan itibaren sabit hızda ilerlemiştir",
      "Madde 4. dakikaya kadar çözünmeye başlamamış, çözünme ancak 4-6. dakikalar arasında gerçekleşmiş olabilir",
      "Karışım 6. dakikada dış ortamdan ısı almıştır"
    ],
    "correct": 3,
    "explain": "İlk 4 dakika sıcaklığın sabit kalması, bu sürede belirgin bir ısı alışverişi yaşanmadığını düşündürür (örneğin madde henüz çözünmeye başlamamış ya da çok yavaş çözünüyor olabilir); sıcaklığın 4-6. dakikalar arasında düşmesi ise bu aralıkta belirgin bir endotermik çözünmenin gerçekleştiğine işaret eder."
  },
  {
    "difficulty": "zor",
    "dialogue": {
      "turns": [
        {
          "who": "Öğrenci A",
          "text": "Bir olayın kimyasal olup olmadığını anlamak için ısı alışverişine bakmak yeterlidir; ısı açığa çıkıyorsa kimyasaldır."
        },
        {
          "who": "Öğrenci B",
          "text": "Yanlış olabilir; ısı açığa çıkması yalnızca ekzotermik olduğunu gösterir, olayın fiziksel mi kimyasal mı olduğunu değil."
        },
        {
          "who": "Öğrenci C",
          "text": "O zaman olayın türünü anlamak için madde kimliğinin değişip değişmediğine bakmalıyız, ısı yönüne değil."
        }
      ]
    },
    "text": "Bu tartışmadaki öğrencilerden hangileri bilimsel olarak doğru bir çıkarımda bulunmuştur?",
    "options": [
      "Yalnız C",
      "Yalnız B",
      "B ve C",
      "Yalnız A",
      "A, B ve C"
    ],
    "correct": 2,
    "explain": "A'nın çıkarımı yanlıştır çünkü fiziksel değişimler de (örneğin donma, yoğuşma) ekzotermik olabilir. B ve C doğrudur: ısı alışverişi yönü değişimin endo/ekzo olduğunu gösterirken, değişim türünü (fiziksel/kimyasal) belirleyen ölçüt madde kimliğinin değişip değişmediğidir."
  },
  {
    "difficulty": "zor",
    "text": "Aynı miktardaki iki özdeş kapta, birinde X maddesi suda çözünürken diğerinde Y maddesi suda çözünüyor. X'in çözünmesi sırasında kap dışarıdan buğulanırken Y'nin çözünmesi sırasında kap ele sıcak geliyor. Bu iki gözlem birlikte değerlendirildiğinde hangi sonuç çıkarılabilir?",
    "options": [
      "Buğulanma ve ısınma, çözünmeyle ilgisiz dış etkenlerdir",
      "X ve Y'nin ısı yönü bu gözlemlerle belirlenemez",
      "Her iki çözünme de endotermiktir, buğulanma ve ısınma tesadüfidir",
      "X'in çözünmesi ekzotermik, Y'nin çözünmesi endotermiktir",
      "X'in çözünmesi endotermik, Y'nin çözünmesi ekzotermiktir; X kabı, çevredeki nemin soğuk yüzeyde yoğuşmasıyla buğulanmıştır"
    ],
    "correct": 4,
    "explain": "Kabın dışarıdan buğulanması, kabın yüzeyinin soğuduğunu ve havadaki su buharının bu soğuk yüzeyde yoğuştuğunu gösterir; bu da X'in çözünmesinin endotermik olduğuna işaret eder. Y'nin kabının ele sıcak gelmesi ise Y'nin çözünmesinin ekzotermik olduğunu gösterir."
  },
  {
    "difficulty": "zor",
    "statements": {
      "items": [
        "Bir tepkimenin ekzotermik olması, tepkimeye giren maddelerin tamamının kimyasal olarak kararsız olduğu anlamına gelir.",
        "Isı alışverişinin yönünü belirlemek için sistemin sınırının (neyin sistem, neyin çevre sayıldığının) net olması gerekir.",
        "Fiziksel bir değişim sırasında sistemin kimliği değişmediği için ısı alışverişi de sıfırdır."
      ]
    },
    "text": "Yukarıdaki önermelerden hangileri yanlıştır?",
    "options": [
      "Yalnız I",
      "I ve III",
      "I, II ve III",
      "Yalnız III",
      "II ve III"
    ],
    "correct": 1,
    "explain": "I yanlıştır; ekzotermik olmak, tepkenlerin kararsız olmasını değil ürünlerin tepkenlerden daha düşük enerjili olmasını gerektirir. II doğrudur; ısı yönünü belirlemek için sistem-çevre sınırının net tanımlanması gerekir. III yanlıştır; fiziksel değişimlerde madde kimliği sabit kalsa da (örneğin erime, donma, buharlaşma gibi) ısı alışverişi gerçekleşir, sıfır değildir."
  },
  {
    "difficulty": "zor",
    "text": "Bir kapalı kapta gerçekleşen tepkime sonucunda kabın hem sıcaklığı yükseliyor hem de yeni bir gaz oluşuyor. Buna karşın tepkimenin yalnızca 'ekzotermik' olarak tanımlanabileceği, kimyasal olup olmadığının ise belirsiz kaldığı iddia ediliyor. Bu iddia için en doğru değerlendirme hangisidir?",
    "options": [
      "Verilenlerle hiçbir sonuca varılamaz",
      "İddia doğrudur çünkü gaz oluşumu her zaman fizikseldir",
      "İddia yanlıştır çünkü kapalı kaplarda ısı alışverişi olamaz",
      "İddia doğrudur; sıcaklık artışı tek başına yeterlidir, kimyasal olup olmadığı önemsizdir",
      "İddia yanlıştır; yeni bir gazın (yeni madde) oluşması tepkimenin kimyasal olduğunu da gösterir, bu yüzden hem kimyasal hem ekzotermik denebilir"
    ],
    "correct": 4,
    "explain": "Yeni bir gazın oluşması, ortamdaki maddelerin kimliğinin değiştiğinin (yani kimyasal bir değişimin gerçekleştiğinin) kanıtıdır. Sıcaklığın artması ise bu tepkimenin ekzotermik olduğunu gösterir. Dolayısıyla tepkime hem kimyasal hem ekzotermik olarak tanımlanabilir; öğrencinin 'kimyasal olup olmadığı belirsiz' iddiası yanlıştır."
  },
  {
    "difficulty": "zor",
    "text": "Bir araştırmacı, X tuzunun çözünmesini iki farklı sıcaklıktaki suda (10°C ve 40°C) ayrı ayrı deniyor ve her iki durumda da çözelti sıcaklığının başlangıca göre yaklaşık aynı miktarda (yaklaşık 4°C) düştüğünü gözlemliyor. Bu gözlem hangi çıkarımı destekler?",
    "options": [
      "X'in çözünmesi yalnızca düşük sıcaklıklarda endotermiktir",
      "X'in çözünmesinin endotermik oluşu, başlangıç sıcaklığından bağımsız olarak gözlenen tutarlı bir özelliktir",
      "Sıcaklık düşüşünün miktarı, çözünmenin endotermik mi ekzotermik mi olduğunu göstermez",
      "Deney tekrarlanabilir değildir, bu yüzden sonuç güvenilmez",
      "X'in çözünmesi yalnızca yüksek sıcaklıklarda endotermiktir"
    ],
    "correct": 1,
    "explain": "İki farklı başlangıç sıcaklığında da benzer miktarda bir sıcaklık düşüşü gözlenmesi, X'in çözünmesinin endotermik oluşunun deneyin koşullarından (başlangıç sıcaklığından) bağımsız, maddenin kendine özgü bir özelliği olduğunu destekler."
  },
  {
    "difficulty": "zor",
    "text": "Bir kimyasal tepkimede tepkenlerin toplam enerjisi, oluşan ürünlerin toplam enerjisinden daha yüksektir. Bu bilgiye dayanarak tepkimenin ısı alışverişi yönü hakkında ne söylenebilir?",
    "options": [
      "Tepkime hem endotermik hem ekzotermiktir",
      "Enerjideki azalma yalnızca fiziksel değişimlerde görülür",
      "Tepkimenin ısı yönü bu bilgiyle belirlenemez",
      "Tepkime endotermiktir çünkü enerji azalmıştır",
      "Tepkime ekzotermiktir çünkü aradaki enerji farkı çevreye ısı olarak aktarılmıştır"
    ],
    "correct": 4,
    "explain": "Tepkenlerin toplam enerjisinin ürünlerden fazla olması, aradaki enerji farkının bir yere aktarılması gerektiği anlamına gelir; bu fark, tepkime sırasında sistemden çevreye ısı olarak verilir. Bu, tepkimenin ekzotermik olduğunu gösterir."
  },
  {
    "difficulty": "zor",
    "text": "'Çevre sıcaklığı hiç değişmese de bir değişim endotermik ya da ekzotermik olarak sınıflandırılabilir' görüşü öne sürülüyor. Bu görüş için en tutarlı gerekçe hangisidir?",
    "options": [
      "Bu görüş yalnızca gaz ortamlarda geçerlidir",
      "Isı alışverişi yönü yalnızca sıcaklık ölçümüyle belirlenir, bu görüş yanlıştır",
      "Çevre sıcaklığı sabitse hiçbir ısı alışverişi gerçekleşmemiştir",
      "Endotermik ve ekzotermik kavramları yalnızca kimyasal değişimler için geçerlidir",
      "Değişim çok büyük miktarda madde ile yapılıyorsa sıcaklık değişimi ölçülemeyecek kadar küçük kalabilir, ama ısı alışverişi yine de gerçekleşmiştir"
    ],
    "correct": 4,
    "explain": "Isı alışverişi, çevrenin madde miktarına (örneğin çok büyük bir oda ya da göl gibi geniş bir ortama) göre çok küçük kalıyorsa, ölçülebilir bir sıcaklık değişimi oluşturmayabilir; yine de sistem ile çevre arasında bir enerji aktarımı gerçekleşmiştir. Bu yüzden gözlenebilir sıcaklık değişimi olmasa da değişim kavramsal olarak endotermik ya da ekzotermik olarak sınıflandırılabilir."
  },
  {
    "difficulty": "zor",
    "table": {
      "headers": [
        "Tepkime",
        "Tepken Enerjisi",
        "Ürün Enerjisi"
      ],
      "rows": [
        [
          "1",
          "Yüksek",
          "Düşük"
        ],
        [
          "2",
          "Düşük",
          "Yüksek"
        ]
      ]
    },
    "text": "Tabloya göre 1. ve 2. tepkimelerin ısı alışverişi yönleri sırasıyla nasıldır?",
    "options": [
      "Ekzotermik – Ekzotermik",
      "Endotermik – Ekzotermik",
      "Endotermik – Endotermik",
      "Ekzotermik – Endotermik",
      "Verilerle belirlenemez"
    ],
    "correct": 3,
    "explain": "1. tepkimede tepken enerjisi üründen yüksektir; aradaki fark çevreye ısı olarak verilir, bu tepkime ekzotermiktir. 2. tepkimede ürün enerjisi tepkenden yüksektir; bu enerji farkının çevreden alınması gerekir, bu tepkime endotermiktir."
  },
  {
    "difficulty": "zor",
    "text": "Bir tarihçi kaynağa göre eski dönemlerde bazı el ısıtıcıları, demir tozunun nemli ortamda yavaşça oksitlenmesi ilkesiyle çalışırdı; ısıtıcı paket açıldığında havayla temas eden demir tozu saatlerce düşük şiddette ısı üretirdi. Bu bilgiye dayanarak aşağıdaki yorumlardan hangisi en doğrudur?",
    "options": [
      "Tepkimenin yavaş ilerlemesi, ekzotermik olup olmadığını değil yalnızca ısının ne kadar sürede açığa çıktığını etkiler",
      "Tepkime yavaş ilerlediği için ekzotermik olamaz",
      "Isının saatlerce sürmesi, tepkimenin endotermik olduğunu gösterir",
      "Bu tepkimede madde kimliği değişmez",
      "Tepkime fizikseldir çünkü sadece demir tozu kullanılmaktadır"
    ],
    "correct": 0,
    "explain": "Bir tepkimenin ekzotermik olup olmadığı, açığa çıkan ısının toplam miktarı ve yönüyle ilgilidir; tepkimenin hızı (ısının hızlı mı yoksa saatlere yayılarak mı açığa çıktığı) bu sınıflandırmayı değiştirmez. Demir tozunun oksijenle tepkimeye girip demir oksit oluşturması kimyasal bir değişimdir ve açığa çıkan ısı, sürece yayılsa da tepkimenin ekzotermik olduğunu gösterir."
  },
  {
    "difficulty": "zor",
    "text": "İki farklı kapta aynı miktarda buz eritiliyor: 1. kap oda sıcaklığında bırakılıyor, 2. kap bir ısıtıcı üstüne konuyor. 2. kaptaki buz çok daha kısa sürede eriyor. Bu gözleme dayanarak erimenin ısı alışverişi yönü hakkında hangi çıkarım yapılabilir?",
    "options": [
      "2. kapta erime ekzotermik, 1. kapta endotermiktir",
      "Bu gözlem ısı alışverişi yönüyle ilgisizdir",
      "1. kapta erime gerçekleşmemiştir",
      "Isıtıcı, erimenin türünü fizikselden kimyasala çevirir",
      "Isıtma hızını değiştirse de erimenin ısı alışverişi yönü (endotermik oluşu) her iki kapta da aynıdır; yalnızca ısının aktarılma hızı farklıdır"
    ],
    "correct": 4,
    "explain": "Her iki kapta da buz, katı hâlden sıvı hâle geçmek için ortamdan ısı almaktadır; bu yüzden erime her iki durumda da endotermiktir. Isıtıcının etkisi yalnızca ısının sisteme aktarılma hızını artırmaktır, erimenin temel ısı alışverişi yönünü değiştirmez."
  },
  {
    "difficulty": "zor",
    "text": "'Bir değişim sırasında hem sistem hem çevre aynı anda ısı kazanabilir' iddiası öne sürülüyor. Enerjinin korunumu ilkesi göz önüne alındığında bu iddia için en doğru değerlendirme hangisidir?",
    "options": [
      "İddia doğrudur, enerji her yerde aynı anda artabilir",
      "İddia yalnızca kimyasal değişimler için geçerlidir",
      "İddia, sistem-çevre ayrımının nasıl yapıldığına bağlı olarak yalnızca üçüncü bir dış kaynaktan enerji girişi varsa doğru olabilir; kapalı bir sistem-çevre etkileşiminde biri kazanırken diğeri kaybeder",
      "İddia her zaman yanlıştır, hiçbir koşulda ikisi de kazanamaz",
      "Enerjinin korunumu bu durumla ilgisizdir"
    ],
    "correct": 2,
    "explain": "Yalnızca sistem ve onun yakın çevresi arasındaki bir ısı alışverişinde, biri ısı kazanırken diğeri eşit miktarda kaybeder (enerjinin korunumu). Sistem ve çevrenin ikisinin birden ısı kazanması ancak dışarıdan (örneğin bir ısıtıcıdan) üçüncü bir enerji kaynağı devreye girerse mümkün olur; bu da orijinal iki-bileşenli sistem-çevre modelinin ötesine geçer."
  },
  {
    "difficulty": "zor",
    "text": "Bir mağara içinde binlerce yıl boyunca çok yavaş damlayan sudaki çözünmüş kalsiyum bileşiklerinin çökelerek sarkıt oluşturması sırasında ortama az miktarda ısı yayıldığı belirleniyor. Bu sürecin, laboratuvarda saniyeler içinde gerçekleşen bir çökelme tepkimesiyle temel ısı-alışverişi sınıflandırması açısından karşılaştırılması için en doğru yaklaşım hangisidir?",
    "options": [
      "Yalnızca laboratuvar koşullarında gerçekleşen tepkimeler sınıflandırılabilir",
      "Mağaradaki süreç kimyasal değil fizikseldir, bu yüzden karşılaştırma geçersizdir",
      "Süre farkı, iki sürecin ısı alışverişi yönünü karşılaştırılamaz kılar",
      "Yavaş süreç endotermik, hızlı süreç ekzotermik kabul edilmelidir",
      "Isının yayılma süresi ne olursa olsun, ortama ısı verilmesi her iki süreci de ekzotermik olarak sınıflandırmak için yeterlidir"
    ],
    "correct": 4,
    "explain": "Isı alışverişinin yönünü belirleyen, sürecin ortama ısı verip vermediğidir; bu sürecin binlerce yılda mı yoksa saniyeler içinde mi gerçekleştiği sınıflandırmayı değiştirmez. Her iki süreçte de (kalsiyum bileşiklerinin çökelmesi) ortama ısı verildiği için ikisi de ekzotermik kabul edilir; süre yalnızca sürecin hızını gösterir."
  },
  {
    "difficulty": "zor",
    "text": "Bir gölete güneşli bir günde düşen küçük bir buz parçasının erimesi ile aynı büyüklükteki bir buz parçasının bir kalorimetre kabında (dışarıyla ısı alışverişini en aza indiren yalıtılmış bir kap) eritilmesi karşılaştırılıyor. Göletteki erimenin ısı alışverişi yönünün belirlenmesi neden kalorimetredekinden daha zordur?",
    "options": [
      "Göletteki erime kimyasal, kalorimetredeki fizikseldir",
      "Kalorimetrede ısı alışverişi hiç gerçekleşmez",
      "Göl çok büyük bir çevre olduğu için ölçülebilir bir sıcaklık düşüşü oluşturmayabilir, oysa kalorimetrede sistem-çevre sınırı net ve küçük olduğundan değişim ölçülebilir",
      "Göletteki buz erimez, yalnızca kalorimetredeki erir",
      "Güneş ışığı erimenin ısı alışverişi yönünü tersine çevirir"
    ],
    "correct": 2,
    "explain": "Erimenin kendisi her iki ortamda da endotermiktir; fark, çevrenin büyüklüğündedir. Kalorimetrede sistem-çevre sınırı küçük ve yalıtılmış olduğu için sıcaklık değişimi net ölçülebilirken, göl gibi devasa bir çevrede aynı miktardaki ısı alışverişi ölçülemeyecek kadar küçük bir sıcaklık değişimine yol açar; bu da yönün gözlemsel olarak belirlenmesini zorlaştırır, ama kavramsal olarak süreç yine endotermiktir."
  }
],
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { QUIZ };
}
