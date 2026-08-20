/* ============================================================
   quiz-data.js — QUIZ = { modulAnahtari: [ {soru...}, ... ] }
   Modül 1: Tepkimelerde Meydana Gelen Enerji Değişimi (KİM.11.1.1)
   Modül 2: Maddelerin Enerji Kaynağı Olma Potansiyeli (KİM.11.1.2)
   ============================================================ */

const QUIZ = {
  "m1": [
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
      "compareChart": {
        "xLabels": [
          "0. dk",
          "2. dk",
          "4. dk",
          "6. dk"
        ],
        "series": [
          {
            "name": "Karışım sıcaklığı (°C)",
            "values": [
              24,
              24,
              24,
              18
            ],
            "color": "var(--endo)"
          }
        ]
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
  "m2": [
    {
      "difficulty": "kolay",
      "text": "Yanma yoluyla ısı ya da enerji üreten maddelere ne ad verilir?",
      "options": [
        "Çözücü",
        "Elektrolit",
        "Katalizör",
        "Yakıt",
        "İndikatör"
      ],
      "correct": 2,
      "explain": "Yanarak ısı ya da enerji üreten ve bu özelliğinden dolayı enerji kaynağı olarak kullanılan maddelere yakıt denir."
    },
    {
      "difficulty": "kolay",
      "text": "Belirli miktardaki (genellikle 1 g) bir maddenin tam yanması sırasında açığa çıkan ısı miktarına ne denir ve hangi birimle ifade edilir?",
      "options": [
        "Yanma ısısı, kJ/g",
        "Oluşum entalpisi, kJ/mol",
        "Aktivasyon enerjisi, kJ",
        "Bağ enerjisi, kJ/mol",
        "Tepkime hızı, mol/s"
      ],
      "correct": 0,
      "explain": "Bir maddenin birim kütlesinin tam yanması sırasında açığa çıkan ısıya yanma ısısı denir ve kJ/g birimiyle ifade edilir; yakıtları karşılaştırmanın en doğru yollarından biridir."
    },
    {
      "difficulty": "kolay",
      "table": {
        "headers": [
          "Yakıt",
          "Yanma Isısı (kJ/g)"
        ],
        "rows": [
          [
            "Selüloz",
            "17,5"
          ],
          [
            "Çam odunu",
            "21,2"
          ],
          [
            "Taş kömürü",
            "28,3"
          ],
          [
            "Doğal gaz",
            "49,5"
          ]
        ]
      },
      "text": "Tabloya göre verilen yakıtlar arasında birim kütle başına en fazla ısı açığa çıkaran hangisidir?",
      "options": [
        "Taş kömürü",
        "Hepsi eşittir",
        "Çam odunu",
        "Doğal gaz",
        "Selüloz"
      ],
      "correct": 3,
      "explain": "Tabloda en yüksek yanma ısısı değeri 49,5 kJ/g ile doğal gaza aittir; bu yüzden birim kütlede en fazla ısıyı doğal gaz açığa çıkarır."
    },
    {
      "difficulty": "kolay",
      "text": "Aşağıdakilerden hangisi fosil yakıtlardan biri değildir?",
      "options": [
        "Doğal gaz",
        "Bunların hepsi fosil yakıttır",
        "Taş kömürü",
        "Çam odunu",
        "Petrol"
      ],
      "correct": 3,
      "explain": "Petrol, doğal gaz ve taş kömürü fosil yakıtlardır; çam odunu ise biyolojik kaynaklı, yenilenebilir bir yakıttır."
    },
    {
      "difficulty": "kolay",
      "text": "Fosil yakıtların en önemli dezavantajlarından biri aşağıdakilerden hangisidir?",
      "options": [
        "Yalnızca katı hâlde bulunmaları",
        "Yenilenemeyen kaynaklar olmaları ve yanmaları sonucu sera gazı salınımına yol açmaları",
        "Hiçbir enerji üretmemeleri",
        "Depolanamamaları",
        "Yanma ısılarının çok düşük olması"
      ],
      "correct": 1,
      "explain": "Fosil yakıtlar (petrol, doğal gaz, kömür) yenilenemeyen enerji kaynaklarıdır; yanmaları sonucunda açığa çıkan karbon dioksit atmosferde sera etkisi oluşturarak küresel ısınmaya katkıda bulunur."
    },
    {
      "difficulty": "kolay",
      "text": "Hidrojen gazının yanma tepkimesi sonucunda oluşan tek ürün aşağıdakilerden hangisidir?",
      "options": [
        "Kükürt dioksit",
        "Su",
        "Azot oksit",
        "Karbon dioksit",
        "Karbon monoksit"
      ],
      "correct": 1,
      "explain": "H2(g) + 1/2O2(g) → H2O(s) tepkimesine göre hidrojen gazının yanması sonucunda yalnızca su oluşur; bu yüzden hidrojen, sera gazı üretmeyen bir yakıt olarak değerlendirilir."
    },
    {
      "difficulty": "kolay",
      "text": "Atmosferdeki karbon dioksit miktarının artması aşağıdaki sonuçlardan hangisiyle ilişkilendirilir?",
      "options": [
        "Atmosferdeki oksijen oranının artması",
        "Yakıtların yanma ısısının artması",
        "Ozon tabakasının kalınlaşması",
        "Sera etkisinin artması ve küresel ısınma",
        "Yağmur sularının bazikleşmesi"
      ],
      "correct": 3,
      "explain": "Atmosferde biriken fazla karbon dioksit, Güneş'ten gelen ısının bir kısmının uzaya geri yansımasını engelleyerek sera etkisi oluşturur; bu da küresel ısınmaya neden olur."
    },
    {
      "difficulty": "kolay",
      "table": {
        "headers": [
          "Besin ögesi",
          "Fizyolojik Enerji Değeri (kJ/g)"
        ],
        "rows": [
          [
            "Karbonhidrat",
            "17"
          ],
          [
            "Yağ",
            "38"
          ],
          [
            "Protein",
            "17"
          ]
        ]
      },
      "text": "Tabloya göre eşit kütlede alındığında hangi besin ögesi en fazla enerji sağlar?",
      "options": [
        "Hepsi eşit enerji sağlar",
        "Karbonhidrat",
        "Yağ",
        "Karbonhidrat ve protein eşittir, en yüksek onlardır",
        "Protein"
      ],
      "correct": 2,
      "explain": "Yağın fizyolojik enerji değeri (38 kJ/g), karbonhidrat ve proteinin enerji değerinin (17 kJ/g) yaklaşık iki katından fazladır; bu yüzden eşit kütlede en fazla enerjiyi yağ sağlar."
    },
    {
      "difficulty": "kolay",
      "text": "2 g'lık bir yakıt tamamen yandığında 40 kJ ısı açığa çıkıyorsa bu yakıtın yanma ısısı kaç kJ/g'dır?",
      "options": [
        "2 kJ/g",
        "40 kJ/g",
        "20 kJ/g",
        "10 kJ/g",
        "80 kJ/g"
      ],
      "correct": 2,
      "explain": "Yanma ısısı, açığa çıkan toplam ısının kütleye bölünmesiyle bulunur: 40 kJ ÷ 2 g = 20 kJ/g."
    },
    {
      "difficulty": "kolay",
      "chart": {
        "labels": [
          "Metanol",
          "İzooktan",
          "Hidrojen"
        ],
        "values": [
          22.7,
          47.8,
          142.9
        ],
        "unit": "Yanma ısısı (kJ/g)"
      },
      "text": "Grafiğe göre verilen üç yakıttan hangisi birim kütle başına en fazla ısı açığa çıkarır?",
      "options": [
        "Hidrojen",
        "Metanol ve izooktan eşittir",
        "İzooktan",
        "Metanol",
        "Grafikten belirlenemez"
      ],
      "correct": 0,
      "explain": "Grafikte hidrojenin yanma ısısı (142,9 kJ/g), metanol ve izooktana göre açık ara en yüksektir."
    },
    {
      "difficulty": "kolay",
      "text": "Aşağıdakilerden hangisi biyolojik kaynaklı (yenilenebilir) bir yakıttır?",
      "options": [
        "Çam odunu",
        "Taş kömürü",
        "İzooktan",
        "Doğal gaz",
        "Petrol"
      ],
      "correct": 0,
      "explain": "Çam odunu, bitkisel kaynaklardan elde edilen ve nispeten kısa sürede yenilenebilen biyolojik bir yakıttır; diğer seçenekler fosil kaynaklıdır."
    },
    {
      "difficulty": "kolay",
      "text": "Enerji içeceklerinde bulunan kafein gibi maddeler vücutta hangi etkiyi gösterebilir?",
      "options": [
        "Kalp atış hızını yavaşlatır",
        "Kalp atış hızını artırabilir ve yüksek tansiyonu tetikleyebilir",
        "Hiçbir fizyolojik etkisi yoktur",
        "Vücut sıcaklığını düşürür",
        "Kan basıncını düşürür"
      ],
      "correct": 1,
      "explain": "Enerji içeceklerindeki kafein, taurin, ginseng gibi maddeler kalp atış hızını artırabilir, yüksek tansiyonu tetikleyebilir ve sinirlilik gibi yan etkilere yol açabilir."
    },
    {
      "difficulty": "kolay",
      "text": "Yapay tatlandırıcılarla ilgili aşağıdaki ifadelerden hangisi doğrudur?",
      "options": [
        "Kalori içermeseler de tatlı isteğini artırabilir ve bazı metabolik etkilere yol açabilirler",
        "Vücutta hiçbir etkileri yoktur",
        "Şekerle aynı miktarda kalori içerirler",
        "Yalnızca enerji içeceklerinde bulunurlar",
        "Enerji değerleri karbonhidrattan yüksektir"
      ],
      "correct": 0,
      "explain": "Yapay tatlandırıcılar kalori içermese de tatlı isteğini artırabilir; bağırsak sistemini etkileyerek bazı metabolik bozukluklara neden olabileceği düşünülmektedir."
    },
    {
      "difficulty": "kolay",
      "text": "Propanın (C3H8) yanma tepkimesinde oksijenle birlikte tepkimeye girmesi sonucu hangi ürünler oluşur?",
      "options": [
        "Azot oksitler",
        "Karbon dioksit ve su",
        "Karbon monoksit ve hidrojen",
        "Yalnızca karbon dioksit",
        "Yalnızca su"
      ],
      "correct": 1,
      "explain": "C3H8(g) + 5O2(g) → 3CO2(g) + 4H2O(s) tepkimesine göre propanın tam yanması sonucunda karbon dioksit ve su oluşur; bu tepkime aynı zamanda ısı açığa çıkarır."
    },
    {
      "difficulty": "kolay",
      "text": "Bir yakıtın 'iyi bir yakıt' olarak nitelendirilmesinde temel ölçüt nedir?",
      "options": [
        "Suda çözünmemesi",
        "Birim kütle başına açığa çıkardığı ısının yüksek olması",
        "Renginin koyu olması",
        "Katı hâlde bulunması",
        "Kokusunun olmaması"
      ],
      "correct": 1,
      "explain": "Yakıtlar birim kütle başına (kJ/g) açığa çıkardıkları ısıya göre karşılaştırılır; bu değer yüksek olan yakıt genel olarak daha iyi bir yakıt sayılır."
    },
    {
      "difficulty": "kolay",
      "text": "Besin atıkları ile ilgili aşağıdaki ifadelerden hangisi bu modülün kapsamına göre doğrudur?",
      "options": [
        "Besin atıkları yalnızca gübre yapımında kullanılır",
        "Besin atıklarından enerji üretilemez",
        "Besin atıklarının enerji içeriği sıfırdır",
        "Besin atıklarından enerji üretilebilir",
        "Besin atıkları hiçbir şekilde değerlendirilemez"
      ],
      "correct": 3,
      "explain": "Besin atıkları da organik madde içerdiğinden, uygun yöntemlerle işlenerek enerji üretiminde kullanılabilir."
    },
    {
      "difficulty": "kolay",
      "text": "Yağ oranı yüksek bir besin ile karbonhidrat oranı yüksek bir besin eşit kütlede karşılaştırıldığında enerji değerleri hakkında ne söylenebilir?",
      "options": [
        "Yağ oranı yüksek besin daha fazla enerji sağlar",
        "Karşılaştırma yapılamaz",
        "Enerji değeri kütleyle ilgili değildir",
        "İkisi de aynı enerjiyi sağlar",
        "Karbonhidrat oranı yüksek besin daha fazla enerji sağlar"
      ],
      "correct": 0,
      "explain": "Yağın fizyolojik enerji değeri (38 kJ/g), karbonhidratınkinden (17 kJ/g) belirgin biçimde yüksektir; bu yüzden eşit kütlede yağ oranı yüksek besin daha fazla enerji sağlar."
    },
    {
      "difficulty": "orta",
      "statements": {
        "items": [
          "Fosil yakıtlar genellikle biyolojik kaynaklı yakıtlara göre birim kütle başına daha fazla ısı açığa çıkarır.",
          "Bir yakıtın çevresel etkisi, yalnızca yanma ısısına bakılarak değerlendirilebilir.",
          "Hidrojen gazının yanma ısısı, doğal gazın yanma ısısının yaklaşık üç katıdır."
        ]
      },
      "text": "Verilen önermelerden hangileri doğrudur?",
      "options": [
        "I, II ve III",
        "Yalnız I",
        "Yalnız III",
        "I ve III",
        "II ve III"
      ],
      "correct": 3,
      "explain": "I doğrudur; tabloya göre taş kömürü, doğal gaz gibi fosil yakıtlar çam odunu, selüloz gibi biyolojik yakıtlardan daha yüksek kJ/g değerine sahiptir. II yanlıştır; çevresel etki değerlendirmesi yanma ısısı dışında sera gazı salınımı, yenilenebilirlik gibi ölçütleri de gerektirir. III doğrudur; 142,9 kJ/g'ın 49,5 kJ/g'a oranı yaklaşık 2,9, yani yaklaşık üç kattır."
    },
    {
      "difficulty": "orta",
      "matchPairs": {
        "leftHeader": "Yakıt",
        "rightHeader": "Sınıflandırma",
        "pairs": [
          [
            "Taş kömürü, doğal gaz, petrol",
            "Fosil yakıt (yenilenemez)"
          ],
          [
            "Çam odunu, selüloz",
            "Biyolojik kaynaklı yakıt (yenilenebilir)"
          ],
          [
            "Hidrojen gazı",
            "Temiz enerji kaynağı adayı"
          ]
        ]
      },
      "text": "Yukarıdaki eşleştirmeye göre hangi yakıt grubu yanma sonucunda sera gazı oluşturmaz?",
      "options": [
        "Hidrojen gazı",
        "Biyolojik kaynaklı yakıtlar",
        "Hiçbiri",
        "Fosil yakıtlar",
        "Hem fosil hem biyolojik yakıtlar"
      ],
      "correct": 0,
      "explain": "Hidrojen gazının yanması sonucunda yalnızca su oluşur, karbon dioksit gibi bir sera gazı açığa çıkmaz; bu yüzden doğru üretim yöntemleriyle elde edildiğinde temiz bir enerji kaynağı adayı olarak değerlendirilir."
    },
    {
      "difficulty": "orta",
      "compareChart": {
        "xLabels": [
          "1 g",
          "2 g",
          "3 g",
          "4 g",
          "5 g"
        ],
        "series": [
          {
            "name": "Çam odunu (21,2 kJ/g)",
            "values": [
              21,
              42,
              64,
              85,
              106
            ],
            "color": "var(--energy)"
          },
          {
            "name": "Doğal gaz (49,5 kJ/g)",
            "values": [
              50,
              99,
              149,
              198,
              248
            ],
            "color": "var(--rate)"
          }
        ]
      },
      "text": "Grafikte iki farklı yakıtın kütlesi arttıkça açığa çıkan toplam ısının nasıl değiştiği gösterilmiştir. Grafiğe göre 3 g doğal gaz ile 3 g çam odununun açığa çıkardığı ısılar arasındaki fark yaklaşık kaç kJ'dir?",
      "options": [
        "85 kJ",
        "149 kJ",
        "64 kJ",
        "42 kJ",
        "21 kJ"
      ],
      "correct": 0,
      "explain": "3 g'da doğal gaz yaklaşık 149 kJ, çam odunu ise yaklaşık 64 kJ açığa çıkarmaktadır. Aradaki fark 149 − 64 = 85 kJ'dir."
    },
    {
      "difficulty": "orta",
      "dialogue": {
        "turns": [
          {
            "who": "Öğrenci A",
            "text": "C(grafit) yanınca 393,5 kJ, CH4 yanınca 890,3 kJ açığa çıkıyor; demek ki CH4 her zaman daha iyi bir yakıttır."
          },
          {
            "who": "Öğrenci B",
            "text": "Bu karşılaştırma eksik olabilir; verilen ısı değerleri farklı miktarlardaki (1 mol karbon, 1 mol metan) maddelere ait, kütleleri de farklı. Asıl karşılaştırma kJ/g üzerinden yapılmalı."
          }
        ]
      },
      "text": "Bu tartışmaya göre hangi öğrencinin yaklaşımı bilimsel olarak daha doğrudur?",
      "options": [
        "İkisi de haksızdır",
        "Yalnız Öğrenci A",
        "İkisi de aynı derecede haklıdır",
        "Yalnız Öğrenci B",
        "Verilen bilgiyle karar verilemez"
      ],
      "correct": 3,
      "explain": "Öğrenci B haklıdır. 1 mol karbon (12 g) ile 1 mol metanın (16 g) kütleleri farklıdır; toplam ısıyı doğrudan karşılaştırmak yanıltıcı olabilir. Doğru karşılaştırma için her iki değer de kütleye (grama) bölünerek kJ/g cinsinden karşılaştırılmalıdır."
    },
    {
      "difficulty": "orta",
      "checklist": {
        "items": [
          "Yakıt seçiminde yalnızca yanma ısısına değil; depolama kolaylığına, maliyetine ve çevresel etkisine de bakılmalıdır.",
          "Fosil yakıtlar yenilenebilir enerji kaynağı sınıfındadır.",
          "Enerji kaynağı olabilecek yakıtlar yalnızca açığa çıkan ısı miktarına göre tercih edilmelidir."
        ]
      },
      "text": "Yukarıdaki ifadelerden kaç tanesi doğrudur?",
      "options": [
        "3",
        "0",
        "2",
        "Verilenlerle belirlenemez",
        "1"
      ],
      "correct": 4,
      "explain": "Yalnızca birinci ifade doğrudur: yakıt seçimi çok yönlü bir değerlendirme gerektirir. İkinci ifade yanlıştır; fosil yakıtlar yenilenemez kaynaklardır. Üçüncü ifade de yanlıştır; yalnızca ısı miktarına bakmak depolama, maliyet ve çevresel etkiyi göz ardı eder."
    },
    {
      "difficulty": "orta",
      "text": "5 g'lık X yakıtı yanınca 100 kJ, 2 g'lık Y yakıtı yanınca 60 kJ ısı açığa çıkarıyor. Buna göre birim kütle başına hangi yakıt daha fazla ısı verir?",
      "options": [
        "X yakıtı, çünkü kütlesi daha fazladır",
        "Karşılaştırma için mol kütlesi gereklidir",
        "Y yakıtı, çünkü 30 kJ/g değeriyle X'in 20 kJ/g değerinden daha yüksektir",
        "İkisi eşittir",
        "X yakıtı, çünkü toplamda daha fazla ısı açığa çıkarmıştır"
      ],
      "correct": 2,
      "explain": "X'in yanma ısısı 100 kJ ÷ 5 g = 20 kJ/g, Y'nin yanma ısısı ise 60 kJ ÷ 2 g = 30 kJ/g'dır. Toplamda X daha fazla ısı açığa çıkarsa da birim kütle başına Y daha verimlidir; bu da yakıt karşılaştırmasında toplam değil kJ/g değerine bakılması gerektiğini gösterir."
    },
    {
      "difficulty": "orta",
      "table": {
        "headers": [
          "Besin",
          "Kütle (g)",
          "Ağırlıklı İçerik",
          "Enerji Değeri (kJ/g)"
        ],
        "rows": [
          [
            "Zeytinyağı",
            "10",
            "Yağ",
            "38"
          ],
          [
            "Ekmek",
            "10",
            "Karbonhidrat",
            "17"
          ]
        ]
      },
      "text": "Tabloya göre 10 g zeytinyağı ile 10 g ekmeğin sağladığı enerji arasındaki fark yaklaşık kaç kJ'dir?",
      "options": [
        "55 kJ",
        "380 kJ",
        "210 kJ",
        "170 kJ",
        "17 kJ"
      ],
      "correct": 2,
      "explain": "Zeytinyağı: 10 g × 38 kJ/g = 380 kJ. Ekmek: 10 g × 17 kJ/g = 170 kJ. Aradaki fark 380 − 170 = 210 kJ'dir."
    },
    {
      "difficulty": "orta",
      "text": "1 mol propan (C3H8, molar kütlesi 44 g/mol) tamamen yandığında 2219,9 kJ ısı açığa çıkmaktadır. Buna göre propanın yanma ısısı yaklaşık kaç kJ/g'dır?",
      "options": [
        "22 kJ/g",
        "35 kJ/g",
        "88 kJ/g",
        "50 kJ/g",
        "44 kJ/g"
      ],
      "correct": 3,
      "explain": "Yanma ısısı = toplam ısı ÷ kütle = 2219,9 kJ ÷ 44 g ≈ 50,45 kJ/g ≈ 50 kJ/g."
    },
    {
      "difficulty": "orta",
      "text": "Bir okul projesinde ısınma amacıyla kullanılacak yakıt seçilirken yalnızca yanma ısısı en yüksek olan yakıt (hidrojen gazı) tercih ediliyor; ancak hidrojenin depolanmasının özel, yüksek basınçlı tanklar gerektirdiği ve maliyetinin yüksek olduğu göz ardı ediliyor. Bu yaklaşımın eksikliği en iyi nasıl açıklanır?",
      "options": [
        "Yakıt seçimi yalnızca ısıl değere değil; depolama, maliyet ve pratik uygulanabilirliğe de dayanmalıdır",
        "Hidrojenin yanma ısısı yeterince yüksek değildir",
        "Yanma ısısı yüksek olan yakıtların çevresel etkisi de mutlaka yüksektir",
        "Bu yaklaşımda herhangi bir eksiklik yoktur",
        "Hidrojen hiçbir koşulda yakıt olarak kullanılamaz"
      ],
      "correct": 0,
      "explain": "Bir yakıtın enerji kaynağı olma potansiyeli değerlendirilirken yalnızca yanma ısısına değil; depolama koşullarına, maliyetine, temin edilebilirliğine ve çevresel etkisine birlikte bakılması gerekir. Yalnızca ısıl değere odaklanmak eksik bir değerlendirmedir."
    },
    {
      "difficulty": "orta",
      "text": "Bir araştırmacı, iki farklı kömür türünü karşılaştırıyor: turba kömürünün yanma ısısı 20,8 kJ/g, taş kömürünün yanma ısısı 28,3 kJ/g'dır. Aynı kütlede ısınma sağlamak isteyen biri hangi kömürden daha AZ miktar kullanmak zorundadır?",
      "options": [
        "Belirlenemez",
        "Turba kömürü",
        "Taş kömürü",
        "İkisinden de eşit miktar kullanılır",
        "Kömür türü fark etmez, ortam sıcaklığına bağlıdır"
      ],
      "correct": 2,
      "explain": "Taş kömürünün birim kütle başına açığa çıkardığı ısı (28,3 kJ/g) turba kömüründen (20,8 kJ/g) daha fazla olduğu için, aynı miktarda ısı elde etmek isteyen biri taş kömüründen daha az kullanmak zorundadır."
    },
    {
      "difficulty": "orta",
      "compareChart": {
        "xLabels": [
          "2 g",
          "4 g",
          "6 g",
          "8 g"
        ],
        "series": [
          {
            "name": "Metanol (22,7 kJ/g)",
            "values": [
              45,
              91,
              136,
              182
            ],
            "color": "var(--exo)"
          },
          {
            "name": "İzooktan (47,8 kJ/g)",
            "values": [
              96,
              191,
              287,
              382
            ],
            "color": "var(--endo)"
          }
        ]
      },
      "text": "Grafikteki iki doğrunun eğimleri karşılaştırıldığında bu eğimler neyi temsil eder?",
      "options": [
        "Yakıtların toplam kütlesini",
        "Yakıtların yanma ısısını (kJ/g); daha dik eğim daha yüksek yanma ısısına işaret eder",
        "Yakıtların yandığı süreyi",
        "Eğimlerin herhangi bir anlamı yoktur",
        "Yakıtların yoğunluğunu"
      ],
      "correct": 1,
      "explain": "Bu grafikte doğrunun eğimi, kütle arttıkça açığa çıkan ısının ne kadar hızlı arttığını, yani birim kütle başına açığa çıkan ısıyı (yanma ısısı, kJ/g) gösterir. İzooktan doğrusu daha dik olduğu için yanma ısısı daha yüksektir."
    },
    {
      "difficulty": "orta",
      "text": "Bir sağlık uzmanı, düzenli olarak yüksek miktarda enerji içeceği tüketen bir grubu inceliyor ve bu grupta kalp atış hızında düzensizlik ile aşırı şeker tüketimine bağlı sağlık sorunları gözlemliyor. Bu gözlem, enerji içeceklerinin içeriğiyle nasıl ilişkilendirilebilir?",
      "options": [
        "Enerji içecekleri yalnızca fiziksel performansı artırır, başka etkisi yoktur",
        "Bu sorunlar yalnızca yapay tatlandırıcılardan kaynaklanır",
        "Enerji içeceklerinin kimyasal içeriği sağlıkla ilgisizdir",
        "Enerji içecekleri yalnızca su içerir, bu gözlemler ilgisizdir",
        "İçeceklerdeki kafein gibi maddeler kalp atış hızını etkileyebilir, yüksek şeker içeriği de obezite ve diyabet gibi sorunlara yol açabilir"
      ],
      "correct": 4,
      "explain": "Enerji içeceklerindeki kafein, taurin gibi maddeler kalp atış hızını artırabilir; içeriklerindeki yüksek şeker miktarı da uzun vadede obezite, diyabet gibi sağlık sorunlarına katkıda bulunabilir."
    },
    {
      "difficulty": "orta",
      "statements": {
        "items": [
          "Yanma ısısı yüksek olan her yakıt, çevresel açıdan en uygun tercihtir.",
          "Aynı yakıtın farklı kütlelerde açığa çıkardığı toplam ısı, kütleyle doğru orantılı olarak artar.",
          "Fizyolojik enerji değeri, besinlerin yağ, karbonhidrat ve protein içeriğine göre değişir."
        ]
      },
      "text": "Bu önermelerden hangileri doğrudur?",
      "options": [
        "Yalnız I",
        "II ve III",
        "I ve II",
        "Yalnız III",
        "I, II ve III"
      ],
      "correct": 1,
      "explain": "I yanlıştır; yanma ısısı yüksek bir yakıt (örneğin taş kömürü) çevresel açıdan sorunlu olabilir. II doğrudur; toplam ısı, yanma ısısı (kJ/g) ile kütlenin çarpımına eşittir, bu yüzden kütleyle doğru orantılı artar. III doğrudur; besinin enerji değeri içerdiği yağ, karbonhidrat ve protein miktarına bağlıdır."
    },
    {
      "difficulty": "orta",
      "text": "Bir günlük beslenmede aynı kütlede tüketilen yağ ve karbonhidratın vücuda sağladığı enerji karşılaştırıldığında, hangi besin ögesinin enerji yoğunluğunun daha fazla olması beklenir ve bu neden önemlidir?",
      "options": [
        "Yağ, çünkü fizyolojik enerji değeri (38 kJ/g) karbonhidrattan (17 kJ/g) yüksektir; bu, dengeli beslenmede yağ miktarının kontrol edilmesini önemli kılar",
        "Karbonhidrat, çünkü daha hızlı sindirilir",
        "Karbonhidrat, çünkü sindirimi daha kolaydır",
        "Protein, çünkü kas gelişimini destekler",
        "İkisi de eşittir, bu yüzden fark önemsizdir"
      ],
      "correct": 0,
      "explain": "Yağın fizyolojik enerji değeri karbonhidrattan belirgin biçimde yüksektir. Bu farkın bilinmesi, aşırı yağ tüketiminin toplam enerji alımını hızla artırabileceğini anlamak açısından beslenme planlamasında önemlidir."
    },
    {
      "difficulty": "orta",
      "text": "Bir kamp organizasyonunda hem taşınabilir hem yüksek verimli bir yakıt aranırken bir görevli 'kamp yakıtımız 1 kg olduğuna göre en çok ısıyı o verir' diyor. Bu değerlendirme neden yetersizdir?",
      "options": [
        "1 kg her zaman en fazla ısıyı veren miktardır",
        "Toplam kütle, birim kütle başına açığa çıkan ısıyı (kJ/g) değiştirmez; karşılaştırma için diğer yakıtların da kJ/g değerine bakılması gerekir",
        "Yakıt miktarı arttıkça yanma ısısı azalır",
        "Kütle arttıkça yanma ısısı (kJ/g) de otomatik olarak artacağı için değerlendirme doğrudur",
        "Bu değerlendirme zaten tamamen doğrudur, eksiği yoktur"
      ],
      "correct": 1,
      "explain": "Bir yakıtın toplam kütlesinin fazla olması, o yakıtın birim kütle başına daha verimli olduğu anlamına gelmez. Yakıtları adil biçimde karşılaştırmak için her birinin kJ/g cinsinden yanma ısısına bakılması gerekir; yalnızca elde bulunan miktara bakmak yanıltıcıdır."
    },
    {
      "difficulty": "orta",
      "chart": {
        "labels": [
          "Selüloz",
          "Çam odunu",
          "Taş kömürü",
          "İzooktan"
        ],
        "values": [
          17.5,
          21.2,
          28.3,
          47.8
        ],
        "unit": "Yanma ısısı (kJ/g)"
      },
      "text": "Grafikte iki biyolojik kaynaklı (selüloz, çam odunu) ve iki fosil kaynaklı (taş kömürü, izooktan) yakıtın yanma ısıları karşılaştırılmıştır. Grafiğe göre aşağıdaki yorumlardan hangisi doğrudur?",
      "options": [
        "Biyolojik kaynaklı yakıtlar her zaman fosil yakıtlardan daha fazla ısı açığa çıkarır",
        "Dört yakıtın da yanma ısısı birbirine eşittir",
        "Grafikten hiçbir karşılaştırma yapılamaz",
        "Yanma ısısı yakıtın kaynağıyla hiç ilişkili değildir",
        "Verilen örneklerde fosil kaynaklı yakıtların yanma ısısı, biyolojik kaynaklı yakıtlardan daha yüksektir"
      ],
      "correct": 4,
      "explain": "Grafikte taş kömürü (28,3 kJ/g) ve izooktan (47,8 kJ/g), selüloz (17,5 kJ/g) ve çam odunundan (21,2 kJ/g) daha yüksek yanma ısısına sahiptir. Bu, verilen örneklerde fosil kaynaklı yakıtların birim kütle başına daha fazla ısı açığa çıkardığını gösterir; ancak bu, tüm çevresel değerlendirmenin yalnızca bu veriyle yapılabileceği anlamına gelmez."
    },
    {
      "difficulty": "orta",
      "checklist": {
        "items": [
          "Hidrojen gazı doğada serbest hâlde bol miktarda bulunduğu için üretim maliyeti yoktur.",
          "Bir yakıtın 'temiz enerji kaynağı' sayılması, yanma ürünleri arasında sera gazı bulunmamasıyla ilgilidir.",
          "Fosil yakıtların kullanımını azaltmak, sera gazı salınımını azaltmaya katkı sağlayabilir."
        ]
      },
      "text": "Aşağıdaki ifadelerden kaç tanesi doğrudur?",
      "options": [
        "1",
        "0",
        "2",
        "3",
        "Verilenlerle belirlenemez"
      ],
      "correct": 2,
      "explain": "Birinci ifade yanlıştır; hidrojen doğada çoğunlukla bileşik hâlde bulunur ve serbest hidrojen gazı üretimi enerji/maliyet gerektirir. İkinci ve üçüncü ifadeler doğrudur: temiz enerji kaynağı kavramı sera gazı üretmemekle ilişkilidir ve fosil yakıt kullanımının azaltılması sera gazı salınımını azaltmaya katkı sağlar. Doğru ifade sayısı 2'dir."
    },
    {
      "difficulty": "zor",
      "text": "Bir fabrika, ısıtma sistemi için iki yakıt arasında seçim yapacaktır: A yakıtından 3 kg kullanıldığında toplam 84.900 kJ, B yakıtından 2 kg kullanıldığında toplam 99.000 kJ ısı elde edilmektedir. Birim kütle başına hangi yakıt daha verimlidir?",
      "options": [
        "A yakıtı, çünkü daha fazla toplam ısı üretmiştir",
        "Karşılaştırma için sıcaklık verisi gereklidir",
        "A yakıtı, çünkü toplam kütlesi daha fazladır",
        "B yakıtı, çünkü 49,5 kJ/g değeriyle A'nın 28,3 kJ/g değerinden yüksektir",
        "İkisi eşit verimliliktedir"
      ],
      "correct": 3,
      "explain": "A yakıtının yanma ısısı: 84.900 kJ ÷ 3000 g = 28,3 kJ/g. B yakıtının yanma ısısı: 99.000 kJ ÷ 2000 g = 49,5 kJ/g. B yakıtı birim kütle başına daha fazla ısı verdiği için daha verimlidir; A'nın toplamda kullanılan miktarının fazla olması bu sonucu değiştirmez."
    },
    {
      "difficulty": "zor",
      "statements": {
        "items": [
          "Bir yakıtın toplam olarak en çok ısıyı açığa çıkarması, onun birim kütle başına en verimli yakıt olduğu anlamına gelmez.",
          "Hidrojen gazının çevre dostu kabul edilmesinin nedeni yalnızca yüksek yanma ısısına sahip olmasıdır.",
          "Fosil yakıtların biyolojik yakıtlara göre genellikle daha yüksek yanma ısısına sahip olması, çevresel açıdan tercih edilmeleri gerektiği anlamına gelmez."
        ]
      },
      "text": "Önermelerden hangileri doğrudur?",
      "options": [
        "I, II ve III",
        "II ve III",
        "Yalnız I",
        "Yalnız II",
        "I ve III"
      ],
      "correct": 4,
      "explain": "I doğrudur; toplam ısı, kullanılan kütleye bağlıdır ve tek başına verimliliği göstermez. II yanlıştır; hidrojenin çevre dostu kabul edilmesinin asıl nedeni yanma ürününün yalnızca su olması, sera gazı üretmemesidir — yüksek yanma ısısı ayrı bir avantajdır ama 'çevre dostu' olmasının nedeni değildir. III doğrudur; yüksek yanma ısısı tek başına bir yakıtın çevresel açıdan uygun olduğu anlamına gelmez, sera gazı salınımı ve yenilenebilirlik de değerlendirilmelidir."
    },
    {
      "difficulty": "zor",
      "compareChart": {
        "xLabels": [
          "1 g",
          "2 g",
          "3 g",
          "4 g",
          "5 g"
        ],
        "series": [
          {
            "name": "Yakıt X",
            "values": [
              18,
              36,
              54,
              72,
              90
            ],
            "color": "var(--energy)"
          },
          {
            "name": "Yakıt Y",
            "values": [
              25,
              50,
              75,
              100,
              125
            ],
            "color": "var(--rate)"
          }
        ]
      },
      "text": "Grafikteki iki doğru hiçbir noktada kesişmemektedir. Bu durum, X ve Y yakıtlarının yanma ısıları hakkında ne söyler?",
      "options": [
        "Kesişmemeleri bir hesaplama hatasından kaynaklanmaktadır",
        "X ve Y aynı yanma ısısına sahiptir",
        "X ve Y'nin yanma ısıları kütleye bağlı olarak değişkendir, bu yüzden kesişmezler",
        "Y'nin yanma ısısı (25 kJ/g), X'in yanma ısısından (18 kJ/g) her kütlede daha yüksek olduğu için Y doğrusu her zaman X'in üzerinde kalır ve kesişme olmaz",
        "Kesişmemeleri yakıtların katı hâlde olduğunu gösterir"
      ],
      "correct": 3,
      "explain": "Her iki yakıt için de toplam ısı, kütleyle doğru orantılı olarak (yanma ısısı × kütle) artar. Y'nin birim kütle başına verdiği ısı (25 kJ/g) X'ten (18 kJ/g) fazla olduğundan, Y doğrusunun eğimi daha diktir ve X'in üzerinde kalır; iki doğru orantısal (orijinden geçen) olduğu için hiçbir kütlede kesişmezler."
    },
    {
      "difficulty": "zor",
      "dialogue": {
        "turns": [
          {
            "who": "Öğrenci A",
            "text": "Taş kömürünün yanma ısısı çam odunundan yüksek, o zaman enerji üretiminde her zaman taş kömürü tercih edilmeli."
          },
          {
            "who": "Öğrenci B",
            "text": "Ama taş kömürü fosil yakıt, yenilenemez ve yakılması sera gazı salınımını artırır; çam odunu yenilenebilir."
          },
          {
            "who": "Öğrenci C",
            "text": "O hâlde tercih, yalnızca yanma ısısına değil; yenilenebilirlik, çevresel etki, maliyet ve kullanım amacına birlikte bakılarak yapılmalı."
          }
        ]
      },
      "text": "Bu tartışmadaki öğrencilerden hangisinin/hangilerinin yaklaşımı yakıt seçimi konusundaki bilimsel değerlendirmeyi en doğru şekilde yansıtır?",
      "options": [
        "B ve C",
        "Yalnız B",
        "Yalnız C",
        "Yalnız A",
        "A, B ve C"
      ],
      "correct": 2,
      "explain": "Öğrenci C'nin yaklaşımı en kapsamlısıdır: yakıt seçimi yalnızca yanma ısısına (A'nın vurguladığı) değil, aynı zamanda yenilenebilirlik ve çevresel etkiye (B'nin vurguladığı) ve ayrıca maliyet ile kullanım amacına birlikte bakılarak yapılmalıdır."
    },
    {
      "difficulty": "zor",
      "text": "Bir mühendis, uzun süreli bir uzay görevinde kullanılacak yakıtı seçerken şu ölçütleri karşılaştırıyor: yanma ısısı, depolama hacmi, yanma sonucu oluşan atık gaz miktarı. Hidrojen gazının yüksek yanma ısısına (142,9 kJ/g) sahip olmasına rağmen sıvılaştırılıp taşınmasının çok düşük sıcaklık ve yüksek basınç gerektirdiği biliniyor. Bu bilgi ışığında hangi çıkarım en tutarlıdır?",
      "options": [
        "Yanma ısısı düşük yakıtlar her zaman daha pratiktir",
        "Depolama zorluğu yanma ısısını değiştirir",
        "Hidrojen depolama zorluğu nedeniyle hiçbir alanda kullanılamaz",
        "Hidrojen her koşulda en iyi seçimdir çünkü yanma ısısı en yüksektir",
        "Bir yakıtın yanma ısısının yüksek olması tek başına 'en iyi yakıt' kararı için yeterli değildir; depolama zorluğu gibi pratik kısıtlar da karara dâhil edilmelidir"
      ],
      "correct": 4,
      "explain": "Yanma ısısı yüksek olsa da hidrojenin depolanmasının getirdiği pratik zorluklar (düşük sıcaklık, yüksek basınç gereksinimi), bir yakıtın 'en iyi' seçim olup olmadığına karar verirken yalnızca ısıl değere değil, uygulanabilirlik ölçütlerine de bakılması gerektiğini gösterir."
    },
    {
      "difficulty": "zor",
      "text": "Bir öğrenci, 'iki yakıtın yanma ısıları (kJ/g) birbirine eşitse, eşit kütlelerde yakıldıklarında ortama verdikleri toplam ısı da mutlaka eşittir' iddiasında bulunuyor. Bu iddia için en doğru değerlendirme hangisidir?",
      "options": [
        "İddia her zaman yanlıştır",
        "İddia doğrudur; toplam ısı = yanma ısısı × kütle olduğundan, yanma ısıları ve kütleleri eşit olan iki yakıt aynı toplam ısıyı açığa çıkarır",
        "Toplam ısı yalnızca yanma süresine bağlıdır, kütleyle ilgisizdir",
        "İddia yalnızca gaz yakıtlar için geçerlidir",
        "İddia yalnızca fosil yakıtlar için geçerlidir"
      ],
      "correct": 1,
      "explain": "Toplam açığa çıkan ısı, yanma ısısı (kJ/g) ile kütlenin (g) çarpımına eşittir. Yanma ısıları ve kütleleri eşit olan iki yakıt için bu çarpım da eşit olacağından, iddia bu koşullar altında doğrudur."
    },
    {
      "difficulty": "zor",
      "table": {
        "headers": [
          "Yakıt",
          "Yanma Isısı (kJ/g)",
          "Kullanılan Kütle (g)"
        ],
        "rows": [
          [
            "P",
            "15",
            "10"
          ],
          [
            "R",
            "30",
            "4"
          ],
          [
            "S",
            "10",
            "12"
          ]
        ]
      },
      "text": "Tabloya göre P, R ve S yakıtlarının verilen kütlelerde açığa çıkardığı toplam ısılar sırasıyla karşılaştırıldığında hangi sıralama doğrudur?",
      "options": [
        "S > P > R (120 kJ > 150 kJ > 120 kJ, imkânsız bir sıralama)",
        "R > P = S (120 kJ, 150 kJ, 120 kJ değerleriyle P en yüksektir, R ve S eşittir)",
        "P = S > R (150 kJ = 120 kJ, sıralama yanlış)",
        "P > R > S (150 kJ > 120 kJ > 120 kJ)",
        "P > R = S (150 kJ > 120 kJ = 120 kJ)"
      ],
      "correct": 4,
      "explain": "P: 15 × 10 = 150 kJ. R: 30 × 4 = 120 kJ. S: 10 × 12 = 120 kJ. Buna göre P en fazla toplam ısıyı açığa çıkarır, R ve S ise birbirine eşit toplam ısı açığa çıkarır: P > R = S."
    },
    {
      "difficulty": "zor",
      "context": "Fizyolojik enerji değerleri: Karbonhidrat 17 kJ/g, Yağ 38 kJ/g, Protein 17 kJ/g.",
      "text": "Bir besin etiketinde 100 g'lık bir ürünün 15 g yağ, 60 g karbonhidrat ve 10 g protein içerdiği belirtiliyor (kalan kısım su ve diğer bileşenlerdir). Fizyolojik enerji değerleri kullanılarak bu 100 g ürünün sağladığı toplam enerji yaklaşık kaç kJ'dir?",
      "options": [
        "1.190 kJ",
        "1.760 kJ",
        "2.020 kJ",
        "1.570 kJ",
        "1.360 kJ"
      ],
      "correct": 1,
      "explain": "Yağ: 15 × 38 = 570 kJ. Karbonhidrat: 60 × 17 = 1020 kJ. Protein: 10 × 17 = 170 kJ. Toplam: 570 + 1020 + 170 = 1760 kJ."
    },
    {
      "difficulty": "zor",
      "text": "Bir enerji politikası uzmanı, bir ülkenin enerji ihtiyacının %70'inin yakıtların yakılmasıyla karşılandığını, ancak bu yakıtların çoğunun fosil kaynaklı olduğunu belirtiyor ve 'yalnızca yanma ısısı en yüksek yakıtlara yatırım yapılmalı' öneriyor. Bu öneri, enerji kaynağı olma potansiyelinin değerlendirilmesi açısından hangi eksikliği taşımaktadır?",
      "options": [
        "Yanma ısısı zaten çevresel etkiyle doğru orantılıdır, bu yüzden öneri otomatik olarak çevreyi de gözetir",
        "Enerji ihtiyacının yakıtlarla karşılanması zaten yanlıştır",
        "Öneri tamamen doğrudur, herhangi bir eksiklik yoktur",
        "Yanma ısısı yüksek yakıtlar hiçbir zaman kullanılmamalıdır",
        "Öneri, yenilenebilirlik ve çevresel etki gibi uzun vadeli ölçütleri göz ardı ederek yalnızca kısa vadeli ısıl verimliliğe odaklanmaktadır"
      ],
      "correct": 4,
      "explain": "Yalnızca yanma ısısına odaklanan bir politika, fosil yakıtların yenilenemez oluşunu ve sera gazı salınımı gibi uzun vadeli çevresel etkilerini göz ardı eder. Enerji kaynağı olma potansiyeli değerlendirilirken ısıl verimlilik kadar yenilenebilirlik ve çevresel sürdürülebilirlik de dikkate alınmalıdır."
    },
    {
      "difficulty": "zor",
      "text": "Hidrojen gazının doğal gaza kıyasla gram başına yaklaşık üç kat daha fazla ısı açığa çıkardığı bilinmektedir. Buna karşın günümüzde dünya genelinde doğal gazın hidrojenden çok daha yaygın kullanılıyor olması en iyi hangi gerekçeyle açıklanabilir?",
      "options": [
        "Hidrojen gazı yalnızca laboratuvar ortamında bulunabilir",
        "Doğal gazın yanma ısısı aslında hidrojenden yüksektir",
        "Doğal gaz sera gazı salınımı yapmaz",
        "Hidrojen gazı yanıcı değildir",
        "Yaygın kullanım yalnızca yanma ısısına değil; mevcut altyapıya, üretim/depolama maliyetine ve teknolojik hazırlığa da bağlıdır"
      ],
      "correct": 4,
      "explain": "Bir yakıtın yaygın biçimde kullanılması yalnızca yanma ısısına bağlı değildir; mevcut boru hattı/depolama altyapısının doğal gaz için çok daha gelişmiş olması, hidrojenin üretim ve güvenli depolama maliyetinin yüksek olması gibi pratik etkenler de belirleyicidir."
    },
    {
      "difficulty": "zor",
      "text": "Bir laboratuvar raporunda 'X yakıtının 1 g'ı 2 g O2 ile tam tepkimeye girerek 25 kJ ısı açığa çıkarır' bilgisi veriliyor. Bu bilgiden yola çıkarak 4 g X yakıtının tam yanması için gereken O2 kütlesi ve açığa çıkan ısı sırasıyla nedir?",
      "options": [
        "4 g O2, 100 kJ",
        "8 g O2, 50 kJ",
        "2 g O2, 25 kJ",
        "8 g O2, 100 kJ",
        "16 g O2, 200 kJ"
      ],
      "correct": 3,
      "explain": "1 g X, 2 g O2 ile tepkimeye girip 25 kJ açığa çıkarıyorsa; oranlar sabit kalacağından 4 g X için gereken O2 kütlesi 4 × 2 = 8 g, açığa çıkan ısı ise 4 × 25 = 100 kJ olur."
    },
    {
      "difficulty": "zor",
      "text": "Bir yakıt üreticisi, ürününü 'diğer yakıtlardan %20 daha az kullanarak aynı ısıyı elde edersiniz' diye pazarlıyor. Bu iddianın bilimsel olarak sınanabilmesi için hangi karşılaştırma yapılmalıdır?",
      "options": [
        "Ürünün ve rakip yakıtların kJ/g cinsinden yanma ısıları karşılaştırılmalı, iddia edilen oranla tutarlı olup olmadığına bakılmalıdır",
        "Ürünün rengi ile rakip ürünlerin rengi karşılaştırılmalıdır",
        "Ürünün ambalaj hacmi karşılaştırılmalıdır",
        "Bu iddia hiçbir şekilde bilimsel olarak sınanamaz",
        "Ürünün fiyatı ile rakiplerin fiyatı karşılaştırılmalıdır"
      ],
      "correct": 0,
      "explain": "Bir yakıtın 'daha az kullanılarak aynı ısıyı verdiği' iddiası, doğrudan yanma ısısı (kJ/g) karşılaştırmasıyla sınanabilir; eğer ürünün kJ/g değeri rakiplerinden yaklaşık %20-25 daha yüksekse, aynı ısıyı elde etmek için gereken kütle yaklaşık %20 daha az olur."
    },
    {
      "difficulty": "zor",
      "text": "İki farklı yakıtın yanma ısıları sırasıyla 24 kJ/g ve 36 kJ/g'dır. Bu iki yakıt aynı kütlede karıştırılıp yakıldığında karışımın ortalama yanma ısısı için en doğru yaklaşım hangisidir?",
      "options": [
        "Her zaman 24 kJ/g olur çünkü küçük değer belirleyicidir",
        "Karışımın yanma ısısı her zaman 60 kJ/g olur",
        "Her zaman 36 kJ/g olur çünkü büyük değer belirleyicidir",
        "Karışımın yanma ısısı hesaplanamaz",
        "Eşit kütlelerde karıştırıldıkları için ortalama yanma ısısı yaklaşık (24+36)/2 = 30 kJ/g'a yakın olur"
      ],
      "correct": 4,
      "explain": "İki yakıt eşit kütlelerde karıştırıldığında, karışımın toplam ısısı yaklaşık olarak her bir yakıtın kendi kütlesi ve kJ/g değerinin toplamına eşittir; eşit kütleler söz konusu olduğunda bu, ağırlıklı ortalamanın basit ortalamaya (30 kJ/g) yakın çıkmasına neden olur."
    },
    {
      "difficulty": "zor",
      "text": "Bir çevre mühendisi, bir şehrin ısınma sisteminde taş kömüründen doğal gaza geçişin sera gazı salınımını azaltacağını savunuyor; ancak bir yetkili 'doğal gazın yanma ısısı taş kömüründen daha yüksek olduğu için zaten daha az yakıt kullanılacak, bu yüzden çevresel kazanç yalnızca miktar azalmasından kaynaklanıyor' diyor. Bu açıklamadaki eksiklik nedir?",
      "options": [
        "Doğal gazın yanma ısısı taş kömüründen düşüktür, bu yüzden açıklama tamamen yanlıştır",
        "Taş kömürü hiç sera gazı üretmez",
        "Açıklama, doğal gazın yanma başına ürettiği karbon dioksit miktarının da taş kömüründen farklı olabileceğini (yakıt cinsine bağlı bir etken) göz ardı etmektedir; çevresel kazanç yalnızca kullanılan kütlenin azalmasından ibaret değildir",
        "Sera gazı salınımı yalnızca yakıt miktarına bağlıdır, başka hiçbir etken yoktur",
        "Bu açıklamada herhangi bir eksiklik yoktur"
      ],
      "correct": 2,
      "explain": "Sera gazı salınımı yalnızca kullanılan yakıt kütlesine değil, aynı zamanda yakıtın kimyasal yapısına (birim ısı başına ürettiği karbon dioksit miktarına) da bağlıdır. Yetkilinin açıklaması yalnızca 'daha az kütle kullanımını' vurgulayarak bu ikinci etkeni göz ardı etmektedir."
    },
    {
      "difficulty": "zor",
      "dialogue": {
        "turns": [
          {
            "who": "Öğrenci A",
            "text": "Hidrojen üretmek için önce su elektrolizle ayrıştırılıyor, bu da enerji gerektiriyor; o zaman hidrojeni 'temiz enerji kaynağı' olarak adlandırmak yanıltıcı olabilir."
          },
          {
            "who": "Öğrenci B",
            "text": "Üretim aşamasındaki enerji kullanımı ayrı bir konu; 'temiz' ifadesi burada yanma sırasında sera gazı açığa çıkmamasını anlatıyor. Yine de üretim sürecinin kaynağı da değerlendirmeye katılmalı."
          }
        ]
      },
      "text": "Bu tartışmaya göre hidrojenin 'temiz enerji kaynağı' olarak nitelendirilmesiyle ilgili en dengeli değerlendirme hangisidir?",
      "options": [
        "Hidrojenin üretim yöntemi, temizlik değerlendirmesiyle hiç ilgili değildir",
        "Elektroliz işlemi hiçbir enerji gerektirmez",
        "Hidrojen hiçbir koşulda temiz değildir, bu adlandırma tamamen yanlıştır",
        "Üretim sürecinde harcanan enerji, yanma sırasında açığa çıkan ısıyı geçersiz kılar",
        "'Temiz' ifadesi yalnızca yanma ürünlerine (sera gazı içermemesine) işaret eder; hidrojenin üretim sürecinin kaynağı (yenilenebilir mi fosil mi) de ayrıca değerlendirilmesi gereken bir etkendir"
      ],
      "correct": 4,
      "explain": "Hidrojenin 'temiz enerji kaynağı' olarak adlandırılması, yanma sonucunda yalnızca su oluşması ve sera gazı açığa çıkmamasıyla ilgilidir. Ancak hidrojenin üretim sürecinde kullanılan enerjinin kaynağı (yenilenebilir mi, fosil mi) da hidrojenin genel çevresel etkisini değerlendirirken ayrıca göz önünde bulundurulmalıdır."
    },
    {
      "difficulty": "zor",
      "statements": {
        "items": [
          "Bir yakıtın yanma ısısının yüksek olması, o yakıtın mutlaka daha düşük maliyetli olduğu anlamına gelir.",
          "Enerji kaynağı olma potansiyeli değerlendirilirken ısıl değer, depolama, maliyet ve çevresel etki birlikte ele alınmalıdır.",
          "Fizyolojik enerji değerleri (kJ/g), yakıtların yanma ısılarıyla aynı fiziksel ölçüm mantığına (birim kütle başına açığa çıkan enerji) dayanır."
        ]
      },
      "text": "Aşağıdaki önermelerden hangileri doğrudur?",
      "options": [
        "Yalnız I",
        "I, II ve III",
        "II ve III",
        "I ve II",
        "Yalnız III"
      ],
      "correct": 2,
      "explain": "I yanlıştır; yanma ısısının yüksekliği ile maliyet arasında zorunlu bir ilişki yoktur (örneğin hidrojen yüksek yanma ısısına sahip olsa da maliyeti yüksektir). II doğrudur; madde 2'nin temel ilkesi budur. III doğrudur; hem yanma ısısı hem fizyolojik enerji değeri, birim kütlenin (1 g) sağladığı enerji miktarını ifade eder, ikisi de aynı temel mantığa (kJ/g) dayanır."
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { QUIZ };
}
