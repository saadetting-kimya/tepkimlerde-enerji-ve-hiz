/* ============================================================
   quiz-data.js — QUIZ = { modulAnahtari: [ {soru...}, ... ] }
   Modül 1: Tepkimelerde Meydana Gelen Enerji Değişimi (KİM.11.1.1)
   Modül 2: Maddelerin Enerji Kaynağı Olma Potansiyeli (KİM.11.1.2)
   Modül 3: Bağ Enerjileriyle Tepkime Entalpisinin Hesaplanması (KİM.11.1.3)
   Modül 4: Standart Oluşum Entalpisi (KİM.11.1.4)
   Modül 5: Kimyasal Tepkimelerin Gerçekleşmesi İçin Gerekli Şartlar (KİM.11.1.5)
   Modül 6: Tepken ve Ürün Derişimleriyle Ortalama Tepkime Hızlarının Hesaplanması (KİM.11.1.6)
   Modül 7: Tepkime Hızına Etki Eden Faktörler (KİM.11.1.7)
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
  ],
  "m3": [
    {
      "difficulty": "kolay",
      "text": "Standart koşullarda gaz hâlindeki taneciklerde 1 mol kimyasal bağın kırılması için gereken enerjiye ne ad verilir?",
      "options": [
        "Tepkime entalpisi",
        "Oluşum entalpisi",
        "Bağ enerjisi",
        "Yanma ısısı",
        "Aktivasyon enerjisi"
      ],
      "correct": 2,
      "explain": "Gaz hâlindeki 1 mol kimyasal bağın kırılması için gereken enerjiye bağ enerjisi denir; kJ/mol birimiyle ifade edilir."
    },
    {
      "difficulty": "kolay",
      "text": "Bir kimyasal bağın kırılması hangi türde bir olaydır?",
      "options": [
        "Endotermik, çevreden enerji alır",
        "Yalnızca fiziksel bir değişimdir",
        "Isı alışverişi içermez",
        "Ekzotermik, çevreye ısı verir",
        "Her zaman kendiliğinden gerçekleşir"
      ],
      "correct": 0,
      "explain": "Bağ kırmak enerji gerektiren (endotermik) bir olaydır; bağı oluşturan atomları birbirinden ayırmak için dışarıdan enerji verilmesi gerekir."
    },
    {
      "difficulty": "kolay",
      "text": "Yeni bir kimyasal bağın oluşması sırasında enerji açığa çıkar mı?",
      "options": [
        "Yalnızca iyonik bağlarda enerji açığa çıkar",
        "Bu, bağın uzunluğuna bağlıdır",
        "Hayır, bağ oluşumu da endotermiktir",
        "Evet, bağ oluşumu ekzotermiktir",
        "Hayır, bağ oluşumu ısı alışverişi yapmaz"
      ],
      "correct": 3,
      "explain": "Atomlar bir araya gelip bağ oluştururken daha kararlı, daha düşük enerjili bir duruma geçerler ve bu sırada enerji açığa çıkar; bağ oluşumu ekzotermiktir."
    },
    {
      "difficulty": "kolay",
      "text": "Bağ enerjisi yüksek olan bir kimyasal bağ için ne söylenebilir?",
      "options": [
        "Yalnızca gaz fazında bulunur",
        "Yalnızca metaller arasında oluşur",
        "Renksizdir",
        "Daha kararlı ve sağlamdır",
        "Daha kolay kırılır"
      ],
      "correct": 3,
      "explain": "Bağ enerjisi, bir bağın kırılması için gereken enerji miktarını gösterir; bu değer ne kadar yüksekse bağ o kadar sağlam ve kararlıdır."
    },
    {
      "difficulty": "kolay",
      "text": "Bir sistemin toplam enerjisini (kinetik ve potansiyel enerjilerin toplamını) ifade eden büyüklüğe ne denir?",
      "options": [
        "Tepkime hızı",
        "Entalpi",
        "Derişim",
        "Aktivasyon enerjisi",
        "Bağ enerjisi"
      ],
      "correct": 1,
      "explain": "Entalpi (H), bir sistemin kinetik ve potansiyel enerjilerinin toplamı olan toplam enerjisini ifade eder."
    },
    {
      "difficulty": "kolay",
      "text": "Bir tepkimede ΔH_tepkime > 0 ise bu tepkime nasıl adlandırılır?",
      "options": [
        "Katalitik",
        "Endotermik",
        "Dengeli",
        "Ekzotermik",
        "Tersinmez"
      ],
      "correct": 1,
      "explain": "ΔH_tepkime pozitifse tepkime çevresinden ısı alır; bu tür tepkimeler endotermik olarak adlandırılır."
    },
    {
      "difficulty": "kolay",
      "text": "Bir tepkimede ΔH_tepkime < 0 ise bu tepkime nasıl adlandırılır?",
      "options": [
        "Tersinir",
        "Dengede",
        "Endotermik",
        "Ekzotermik",
        "Nötr"
      ],
      "correct": 3,
      "explain": "ΔH_tepkime negatifse tepkime çevresine ısı verir; bu tür tepkimeler ekzotermik olarak adlandırılır."
    },
    {
      "difficulty": "kolay",
      "text": "Bağ enerjileri kullanılarak bir tepkimenin entalpi değişimi hangi matematiksel bağıntıyla hesaplanır?",
      "options": [
        "ΔH, bağ enerjilerinden hesaplanamaz",
        "ΔH = Oluşan bağ enerjileri toplamı + Kırılan bağ enerjileri toplamı",
        "ΔH = Kırılan bağ enerjileri toplamı − Oluşan bağ enerjileri toplamı",
        "ΔH = Kırılan bağ enerjileri toplamı × Oluşan bağ enerjileri toplamı",
        "ΔH = Oluşan bağ enerjileri toplamı − Kırılan bağ enerjileri toplamı"
      ],
      "correct": 2,
      "explain": "Tepkime entalpisi, tepkenlerdeki kırılan bağların toplam enerjisinden ürünlerdeki oluşan bağların toplam enerjisi çıkarılarak hesaplanır: ΔH = Σ(kırılan) − Σ(oluşan)."
    },
    {
      "difficulty": "kolay",
      "text": "1 mol H-Cl bağının kırılması için 431 kJ enerji gereklidir. Bu enerji tepkime sırasında nereden karşılanır?",
      "options": [
        "Bağın kendisinden",
        "Katalizörden",
        "Çevreden alınır",
        "Ürünlerden",
        "Kendiliğinden oluşur"
      ],
      "correct": 2,
      "explain": "Bağ kırmak endotermik bir olay olduğundan gereken enerji çevreden (ortamdan) alınır."
    },
    {
      "difficulty": "kolay",
      "text": "Bir tepkimede kırılan bağların toplam enerjisi 500 kJ, oluşan bağların toplam enerjisi 300 kJ ise ΔH_tepkime kaç kJ'dir ve tepkime türü nedir?",
      "options": [
        "+200 kJ, endotermik",
        "-800 kJ, ekzotermik",
        "+800 kJ, endotermik",
        "-200 kJ, ekzotermik",
        "0 kJ, nötr"
      ],
      "correct": 0,
      "explain": "ΔH = Kırılan − Oluşan = 500 − 300 = +200 kJ. Değer pozitif olduğu için tepkime endotermiktir."
    },
    {
      "difficulty": "kolay",
      "text": "Bir tepkimede kırılan bağların toplam enerjisi 300 kJ, oluşan bağların toplam enerjisi 500 kJ ise ΔH_tepkime kaç kJ'dir ve tepkime türü nedir?",
      "options": [
        "-200 kJ, ekzotermik",
        "+200 kJ, endotermik",
        "0 kJ, nötr",
        "+200 kJ, ekzotermik",
        "-800 kJ, endotermik"
      ],
      "correct": 0,
      "explain": "ΔH = Kırılan − Oluşan = 300 − 500 = -200 kJ. Değer negatif olduğu için tepkime ekzotermiktir."
    },
    {
      "difficulty": "kolay",
      "text": "Bağ enerjisi hangi birimle ifade edilir?",
      "options": [
        "g/mol",
        "kJ/mol",
        "°C",
        "kJ/s",
        "mol/L"
      ],
      "correct": 1,
      "explain": "Bağ enerjisi, 1 mol bağın kırılması için gereken enerji olduğundan kJ/mol (bazen kkal/mol) birimiyle ifade edilir."
    },
    {
      "difficulty": "kolay",
      "text": "Bağ enerjisi ölçümlerinin gaz fazında yapılmasının nedeni nedir?",
      "options": [
        "Gaz fazında tanecikler arasındaki etkileşimler çok düşük olduğundan ölçülen enerji değişimi yalnızca bağ enerjisini yansıtır",
        "Gaz fazında ölçüm yapmak daha ucuzdur",
        "Gaz fazında bağlar daha güçlüdür",
        "Katı ve sıvı fazlarda bağ enerjisi ölçülemez",
        "Gaz fazında tepkimeler daha yavaş gerçekleşir"
      ],
      "correct": 0,
      "explain": "Gaz fazında tanecikler birbirinden uzak olduğu için aralarındaki etkileşimler ihmal edilebilir düzeydedir; bu sayede ölçülen enerji değişimi yalnızca kimyasal bağın kırılmasından kaynaklanır."
    },
    {
      "difficulty": "kolay",
      "text": "N≡N (azot-azot üçlü bağı) bağ enerjisinin (946 kJ/mol) diğer birçok bağa göre çok yüksek olması, azot gazının kimyasal davranışı hakkında ne gösterir?",
      "options": [
        "Azot gazı bağ enerjisiyle ilgisizdir",
        "Azot gazı oldukça kararlıdır ve tepkimeye girmesi zordur",
        "Azot gazı yalnızca sıvı hâlde bulunur",
        "Azot gazı renklidir",
        "Azot gazı çok kolay tepkimeye girer"
      ],
      "correct": 1,
      "explain": "N≡N bağının çok yüksek enerjisi, bu bağı kırmanın çok fazla enerji gerektirdiği anlamına gelir; bu yüzden azot gazı atmosferde bol miktarda bulunmasına rağmen oksijen gibi maddelerle kolay tepkimeye girmez, oldukça kararlıdır."
    },
    {
      "difficulty": "kolay",
      "table": {
        "headers": [
          "Bağ",
          "Bağ Enerjisi (kJ/mol)"
        ],
        "rows": [
          [
            "H-F",
            "565"
          ],
          [
            "H-Cl",
            "431"
          ],
          [
            "H-Br",
            "364"
          ],
          [
            "H-I",
            "297"
          ]
        ]
      },
      "text": "Tabloya göre verilen bağlardan hangisi en kararlıdır (kırılması en fazla enerji gerektirir)?",
      "options": [
        "H-I",
        "H-F",
        "H-Cl",
        "H-Br",
        "Hepsi eşittir"
      ],
      "correct": 1,
      "explain": "En yüksek bağ enerjisi değerine (565 kJ/mol) sahip olan H-F bağı, verilenler arasında en kararlı ve en sağlam olandır."
    },
    {
      "difficulty": "kolay",
      "text": "Potansiyel enerji-tepkime koordinatı grafiğinde ürünün enerji düzeyi tepkenlerin enerji düzeyinden daha düşükse bu tepkime nasıl sınıflandırılır?",
      "options": [
        "Yavaş",
        "Endotermik",
        "Hızlı",
        "Ekzotermik",
        "Dengesiz"
      ],
      "correct": 3,
      "explain": "Ürünlerin potansiyel enerjisi tepkenlerden düşükse, sistem tepkime sırasında enerji kaybetmiş, bu enerjiyi çevreye vermiştir; bu durum ekzotermik bir tepkimeye işaret eder."
    },
    {
      "difficulty": "kolay",
      "text": "Potansiyel enerji-tepkime koordinatı grafiğinde ürünün enerji düzeyi tepkenlerin enerji düzeyinden daha yüksekse bu tepkime nasıl sınıflandırılır?",
      "options": [
        "Endotermik",
        "Nötr",
        "Tersinmez",
        "Ekzotermik",
        "Katalitik"
      ],
      "correct": 0,
      "explain": "Ürünlerin potansiyel enerjisi tepkenlerden yüksekse, sistem tepkime sırasında enerji kazanmış, bu enerjiyi çevreden almıştır; bu durum endotermik bir tepkimeye işaret eder."
    },
    {
      "difficulty": "orta",
      "table": {
        "headers": [
          "Bağ",
          "Bağ Enerjisi (kJ/mol)"
        ],
        "rows": [
          [
            "H-H",
            "436"
          ],
          [
            "F-F",
            "159"
          ],
          [
            "H-F",
            "565"
          ]
        ]
      },
      "text": "H2(g) + F2(g) → 2HF(g) tepkimesinde tepkenlerdeki bağların kırılması için gereken toplam enerji ve ürünlerde oluşan bağların toplam enerjisi sırasıyla kaç kJ'dir?",
      "options": [
        "595 kJ, 565 kJ",
        "436 kJ, 565 kJ",
        "159 kJ, 565 kJ",
        "595 kJ, 1130 kJ",
        "1130 kJ, 595 kJ"
      ],
      "correct": 3,
      "explain": "Kırılan: 1 mol H-H (436) + 1 mol F-F (159) = 595 kJ. Oluşan: 2 mol H-F (2 × 565) = 1130 kJ."
    },
    {
      "difficulty": "orta",
      "statements": {
        "items": [
          "Bağ enerjisi büyük olan bir bağı kırmak için daha fazla enerji gerekir.",
          "Bir tepkimede kırılan bağ enerjileri toplamı, oluşan bağ enerjileri toplamından büyükse tepkime endotermiktir.",
          "Entalpi değişimi yalnızca kimyasal tepkimelerde hesaplanabilir, fiziksel değişimlerde hesaplanamaz."
        ]
      },
      "text": "Bu önermelerden hangileri doğrudur?",
      "options": [
        "I ve II",
        "II ve III",
        "I, II ve III",
        "Yalnız I",
        "Yalnız III"
      ],
      "correct": 0,
      "explain": "I doğrudur; bağ enerjisi büyük bağlar daha sağlamdır ve kırılmaları daha fazla enerji gerektirir. II doğrudur; ΔH = kırılan − oluşan olduğundan kırılan taraf büyükse ΔH pozitif, yani endotermik olur. III yanlıştır; entalpi değişimi sabit basınç altında gerçekleşen hem fiziksel hem kimyasal değişimler için hesaplanabilir."
    },
    {
      "difficulty": "orta",
      "text": "H2(g) + Cl2(g) → 2HCl(g) tepkimesi için ΔH_tepkime değeri, H-H = 436 kJ/mol, Cl-Cl = 243 kJ/mol, H-Cl = 431 kJ/mol bağ enerjileri kullanılarak hesaplandığında kaç kJ bulunur?",
      "options": [
        "-183 kJ",
        "+862 kJ",
        "-862 kJ",
        "+183 kJ",
        "+679 kJ"
      ],
      "correct": 0,
      "explain": "Kırılan: 436 + 243 = 679 kJ. Oluşan: 2 × 431 = 862 kJ. ΔH = 679 − 862 = -183 kJ (ekzotermik)."
    },
    {
      "difficulty": "orta",
      "dialogue": {
        "turns": [
          {
            "who": "Öğrenci A",
            "text": "Bir tepkimede ΔH negatif çıktı, demek ki tepkenlerdeki bağlar ürünlerdeki bağlardan daha güçlüymüş."
          },
          {
            "who": "Öğrenci B",
            "text": "Tam tersi olmalı; ΔH negatifse oluşan bağların toplam enerjisi, kırılan bağların toplam enerjisinden daha büyüktür. Yani ürünlerdeki bağlar toplamda daha güçlüdür."
          }
        ]
      },
      "text": "Bu tartışmaya göre hangi öğrenci doğru söylemektedir?",
      "options": [
        "İkisi de yanlış söylemektedir",
        "Yalnız Öğrenci A",
        "İkisi de doğru söylemektedir",
        "Yalnız Öğrenci B",
        "Verilen bilgiyle karar verilemez"
      ],
      "correct": 3,
      "explain": "Öğrenci B haklıdır. ΔH = Kırılan − Oluşan olduğuna göre, ΔH negatifse Oluşan > Kırılan'dır; yani ürünlerdeki bağların toplam enerjisi, tepkenlerdeki bağların toplam enerjisinden daha büyüktür, ürünler daha kararlıdır."
    },
    {
      "difficulty": "orta",
      "matchPairs": {
        "leftHeader": "Bağ",
        "rightHeader": "Bağ Enerjisi (kJ/mol)",
        "pairs": [
          [
            "C≡C",
            "837"
          ],
          [
            "C=C",
            "611"
          ],
          [
            "C-C",
            "347"
          ]
        ]
      },
      "text": "Yukarıdaki eşleştirmeye göre karbon-karbon bağlarında bağ sayısı (tekli → ikili → üçlü) arttıkça bağ enerjisi nasıl değişmektedir?",
      "options": [
        "Önce artar sonra azalır",
        "Azalır",
        "Değişmez",
        "Belirlenemez",
        "Artar"
      ],
      "correct": 4,
      "explain": "Tablodaki değerlere göre C-C (347) < C=C (611) < C≡C (837); bağ sayısı arttıkça (tekliden üçlüye) bağ enerjisi de artmaktadır, çünkü atomlar arasında daha fazla ortak elektron çifti paylaşılır."
    },
    {
      "difficulty": "orta",
      "checklist": {
        "items": [
          "Bağ enerjisi kullanılarak hesaplanan ΔH pozitifse tepkime ekzotermiktir.",
          "İki atom arasındaki bağ sayısı arttıkça bağ genellikle daha kararlı hâle gelir.",
          "Bağ enerjisi tablosundaki değerler yalnızca belirli bir sıcaklıkta değil, genel ortalama değerlerdir."
        ]
      },
      "text": "Yukarıdaki ifadelerden kaç tanesi doğrudur?",
      "options": [
        "Verilenlerle belirlenemez",
        "3",
        "2",
        "1",
        "0"
      ],
      "correct": 2,
      "explain": "Birinci ifade yanlıştır; ΔH pozitifse tepkime endotermiktir, ekzotermik değil. İkinci ve üçüncü ifadeler doğrudur: bağ sayısı arttıkça bağ enerjisi (ve kararlılık) artar, ve tablo değerleri farklı moleküllerden elde edilen ortalama değerlerdir. Doğru ifade sayısı 2'dir."
    },
    {
      "difficulty": "orta",
      "context": "CH4(g) + 2O2(g) → CO2(g) + 2H2O(g) tepkimesinde 4 mol C-H (414 kJ/mol), 2 mol O=O (498 kJ/mol) bağı kırılırken; 2 mol C=O (736 kJ/mol) ve 4 mol O-H (464 kJ/mol) bağı oluşur.",
      "text": "Verilen bilgilere göre bu tepkimenin ΔH_tepkime değeri kaç kJ'dir?",
      "options": [
        "+676 kJ",
        "+3328 kJ",
        "-676 kJ",
        "-2652 kJ",
        "-121 kJ"
      ],
      "correct": 2,
      "explain": "Kırılan: (4 × 414) + (2 × 498) = 1656 + 996 = 2652 kJ. Oluşan: (2 × 736) + (4 × 464) = 1472 + 1856 = 3328 kJ. ΔH = 2652 − 3328 = -676 kJ (ekzotermik) — metanın yanması güçlü bir ekzotermik tepkimedir."
    },
    {
      "difficulty": "orta",
      "text": "N2(g) + O2(g) → 2NO(g) tepkimesinde N≡N = 946 kJ/mol, O=O = 498 kJ/mol, N=O = 590 kJ/mol bağ enerjileri kullanıldığında ΔH_tepkime kaç kJ bulunur ve tepkime türü nedir?",
      "options": [
        "-264 kJ, ekzotermik",
        "+1444 kJ, endotermik",
        "0 kJ, nötr",
        "+264 kJ, endotermik",
        "-1180 kJ, ekzotermik"
      ],
      "correct": 3,
      "explain": "Kırılan: 946 + 498 = 1444 kJ. Oluşan: 2 × 590 = 1180 kJ. ΔH = 1444 − 1180 = +264 kJ (endotermik). Bu, N2 ve O2'nin normal koşullarda kolayca tepkimeye girmemesinin bir nedenidir; örneğin yıldırım gibi çok yüksek enerjili ortamlarda gerçekleşebilir."
    },
    {
      "difficulty": "orta",
      "compareChart": {
        "xLabels": [
          "H-F",
          "H-Cl",
          "H-Br",
          "H-I"
        ],
        "series": [
          {
            "name": "Bağ enerjisi (kJ/mol)",
            "values": [
              565,
              431,
              364,
              297
            ],
            "color": "var(--energy)"
          }
        ]
      },
      "text": "Grafikte H-F, H-Cl, H-Br ve H-I bağlarının enerjileri sıralanmıştır. Grafiğe göre halojen atomunun boyutu büyüdükçe (F'den I'ya doğru) hidrojen-halojen bağının enerjisi nasıl değişmektedir?",
      "options": [
        "Sürekli azalmaktadır",
        "Sürekli artmaktadır",
        "Değişmemektedir",
        "Grafikten bu ilişki çıkarılamaz",
        "Önce artıp sonra azalmaktadır"
      ],
      "correct": 0,
      "explain": "Grafikteki doğru F'den I'ya doğru sürekli azalmaktadır (565 → 431 → 364 → 297 kJ/mol); halojen atomunun boyutu büyüdükçe bağ uzunluğu artar ve bağ enerjisi azalır."
    },
    {
      "difficulty": "orta",
      "text": "H2(g) + Br2(g) → 2HBr(g) tepkimesi için H-H = 436 kJ/mol, Br-Br = 193 kJ/mol, H-Br = 364 kJ/mol bağ enerjileri kullanılarak hesaplanan ΔH_tepkime kaç kJ'dir?",
      "options": [
        "-728 kJ",
        "+99 kJ",
        "-99 kJ",
        "-629 kJ",
        "+629 kJ"
      ],
      "correct": 2,
      "explain": "Kırılan: 436 + 193 = 629 kJ. Oluşan: 2 × 364 = 728 kJ. ΔH = 629 − 728 = -99 kJ (ekzotermik)."
    },
    {
      "difficulty": "orta",
      "text": "İki farklı tepkimenin ΔH_tepkime değerleri sırasıyla -535 kJ (H2+F2→2HF) ve -99 kJ (H2+Br2→2HBr)'dir. Bu iki değer karşılaştırıldığında hangi tepkimenin daha fazla ısı açığa çıkardığı söylenebilir?",
      "options": [
        "H2 + Br2 → 2HBr tepkimesi, çünkü ΔH değeri daha büyüktür",
        "H2 + F2 → 2HF tepkimesi, çünkü ΔH değeri daha küçük (daha negatif) ve mutlak değeri daha büyüktür",
        "ΔH değerleri karşılaştırılamaz",
        "Isı miktarı yalnızca kütleyle ilgilidir, ΔH ile ilgisizdir",
        "İkisi eşit miktarda ısı açığa çıkarır"
      ],
      "correct": 1,
      "explain": "ΔH ne kadar negatifse (mutlak değeri ne kadar büyükse) tepkime o kadar fazla ısı açığa çıkarır. -535 kJ, -99 kJ'den daha negatif (mutlak değeri daha büyük) olduğu için H2 + F2 → 2HF tepkimesi daha fazla ısı açığa çıkarır."
    },
    {
      "difficulty": "orta",
      "text": "Bir tepkimenin potansiyel enerji-tepkime koordinatı grafiğinde tepken ve ürün enerji düzeyleri neredeyse aynı yükseklikte çiziliyor. Bu, ΔH_tepkime değeri hakkında ne düşündürür?",
      "options": [
        "ΔH büyük ve negatiftir",
        "Tepkime gerçekleşmemiştir",
        "Grafik hatalı çizilmiştir",
        "ΔH büyük ve pozitiftir",
        "ΔH sıfıra yakın küçük bir değerdir"
      ],
      "correct": 4,
      "explain": "Tepken ve ürün enerji düzeyleri birbirine yakınsa, aralarındaki enerji farkı (ΔH) küçük olur; bu, kırılan ve oluşan bağ enerjileri toplamlarının birbirine yakın olduğu anlamına gelir."
    },
    {
      "difficulty": "orta",
      "text": "Aynı iki atom arasında (örneğin karbon-karbon) bağ sayısı arttıkça (tekliden üçlüye doğru) bağ uzunluğu ve bağ enerjisi nasıl değişir?",
      "options": [
        "Bağ uzunluğu artar, bağ enerjisi azalır",
        "Bağ uzunluğu azalır, bağ enerjisi artar",
        "Hem bağ uzunluğu hem bağ enerjisi artar",
        "Hem bağ uzunluğu hem bağ enerjisi azalır",
        "İkisi de değişmez"
      ],
      "correct": 1,
      "explain": "Bağ sayısı arttıkça (C-C'den C≡C'ye) atomlar arasında daha fazla elektron çifti paylaşılır; bu atomları birbirine daha yakın ve daha güçlü şekilde bağlar. Bu yüzden bağ uzunluğu azalırken bağ enerjisi artar."
    },
    {
      "difficulty": "orta",
      "statements": {
        "items": [
          "Bağ enerjisi yöntemiyle hesaplanan ΔH değerleri, gerçek deneysel değerlere çok yakın ama tam olarak birebir aynı olmayabilir çünkü tablo değerleri ortalamadır.",
          "Bir tepkimede birden fazla farklı türde bağ kırılıyor ve oluşuyorsa, her bağ türünün katkısı ayrı ayrı hesaba katılmalıdır.",
          "ΔH hesaplanırken yalnızca kırılan bağlar dikkate alınır, oluşan bağlar hesaba katılmaz."
        ]
      },
      "text": "Yukarıdaki önermelerden hangileri doğrudur?",
      "options": [
        "I ve II",
        "I, II ve III",
        "Yalnız I",
        "II ve III",
        "Yalnız III"
      ],
      "correct": 0,
      "explain": "I doğrudur; bağ enerjisi tablosundaki değerler farklı moleküllerden elde edilmiş ortalamalardır, bu yüzden hesaplanan ΔH gerçek değere yakın ama birebir aynı olmayabilir. II doğrudur; her bağ türü ve sayısı ayrı ayrı çarpılıp toplanmalıdır. III yanlıştır; ΔH hem kırılan hem oluşan bağların dikkate alınmasıyla hesaplanır."
    },
    {
      "difficulty": "orta",
      "text": "Bir laboratuvar raporunda bir tepkime için 'kırılan bağların toplam enerjisi 820 kJ, oluşan bağların toplam enerjisi 950 kJ' olarak veriliyor. Bu tepkimenin ΔH değeri ve türü nedir?",
      "options": [
        "+1770 kJ, endotermik",
        "-130 kJ, ekzotermik",
        "-1770 kJ, ekzotermik",
        "+130 kJ, endotermik",
        "0 kJ, nötr"
      ],
      "correct": 1,
      "explain": "ΔH = Kırılan − Oluşan = 820 − 950 = -130 kJ. Değer negatif olduğu için tepkime ekzotermiktir."
    },
    {
      "difficulty": "orta",
      "text": "Bir tepkimede tepkenler arasında yalnızca zayıf bağlar (düşük bağ enerjili), ürünlerde ise çok güçlü bağlar (yüksek bağ enerjili) oluşuyorsa bu tepkimenin ΔH işareti hakkında ne söylenebilir?",
      "options": [
        "ΔH kesinlikle pozitiftir (endotermik)",
        "ΔH sıfırdır",
        "Bu bilgi ΔH ile ilgisizdir",
        "ΔH işareti belirlenemez",
        "ΔH kesinlikle negatiftir (ekzotermik)"
      ],
      "correct": 4,
      "explain": "Zayıf (düşük enerjili) bağların kırılması az enerji gerektirirken, güçlü (yüksek enerjili) bağların oluşması çok enerji açığa çıkarır. Oluşan bağ enerjisi toplamı kırılan bağ enerjisi toplamından büyük olacağından ΔH negatif, yani tepkime ekzotermik olur."
    },
    {
      "difficulty": "orta",
      "chart": {
        "labels": [
          "H2O ayrışması",
          "N2H4 oluşumu",
          "H2+F2→2HF",
          "CH4 yanması"
        ],
        "values": [
          243,
          99,
          -535,
          -676
        ],
        "unit": "ΔH_tepkime (kJ)",
        "tone": [
          "endo",
          "endo",
          "exo",
          "exo"
        ]
      },
      "text": "Grafikte dört farklı tepkimenin ΔH_tepkime değerleri verilmiştir. Grafiğe göre bu tepkimelerden hangisi en fazla ısıyı çevreye vermektedir?",
      "options": [
        "N2H4 oluşumu",
        "H2O ayrışması",
        "CH4 yanması",
        "H2 + F2 → 2HF",
        "Hepsi eşit ısı verir"
      ],
      "correct": 2,
      "explain": "En fazla ısıyı çevreye veren tepkime, ΔH değeri en negatif olan tepkimedir. Grafikte CH4 yanması -676 kJ ile en negatif değere sahiptir; bu yüzden en fazla ısıyı açığa çıkaran (çevreye veren) tepkime budur."
    },
    {
      "difficulty": "zor",
      "text": "H2(g) + I2(g) → 2HI(g) tepkimesi için H-H = 436 kJ/mol, I-I = 151 kJ/mol, H-I = 297 kJ/mol bağ enerjileri kullanıldığında ΔH_tepkime kaç kJ bulunur? Bu değer, H2+F2, H2+Cl2 ve H2+Br2 tepkimeleriyle karşılaştırıldığında ne gösterir?",
      "options": [
        "+7 kJ; tepkime endotermiktir ve trend bozulmuştur",
        "0 kJ; hiç ısı alışverişi olmaz",
        "-587 kJ; I2 ile tepkime en ekzotermik olandır",
        "-7 kJ; halojen atomu büyüdükçe (F→Cl→Br→I) tepkimenin ekzotermikliği azalmakta, I2 ile neredeyse enerji değişimi sıfıra yaklaşmaktadır",
        "-297 kJ; tüm halojenlerle aynı sonuç elde edilir"
      ],
      "correct": 3,
      "explain": "Kırılan: 436 + 151 = 587 kJ. Oluşan: 2 × 297 = 594 kJ. ΔH = 587 − 594 = -7 kJ. Bu değer, F2(-535), Cl2(-183), Br2(-99) ile karşılaştırıldığında bir trend ortaya koyar: halojen atomu büyüdükçe H-X bağı zayıflar, bu da tepkimenin ekzotermikliğinin azalmasına, I2 ile neredeyse termonötr (ısı değişimi ~0) bir tepkimeye dönüşmesine neden olur."
    },
    {
      "difficulty": "zor",
      "text": "N2(g) + 2H2(g) → N2H4(g) tepkimesinde N≡N = 946 kJ/mol, H-H = 436 kJ/mol, N-N = 163 kJ/mol, N-H = 389 kJ/mol bağ enerjileri kullanılıyor (N2H4 molekülünde 1 N-N ve 4 N-H bağı vardır). Bu tepkimenin ΔH_tepkime değeri kaç kJ'dir?",
      "options": [
        "+1818 kJ",
        "+1719 kJ",
        "-99 kJ",
        "-1818 kJ",
        "+99 kJ"
      ],
      "correct": 4,
      "explain": "Kırılan: 946 + (2 × 436) = 946 + 872 = 1818 kJ. Oluşan: 163 + (4 × 389) = 163 + 1556 = 1719 kJ. ΔH = 1818 − 1719 = +99 kJ (endotermik) — çok güçlü N≡N bağının kırılması, oluşan bağların toplamından fazla enerji gerektirir."
    },
    {
      "difficulty": "zor",
      "statements": {
        "items": [
          "N≡N bağının çok yüksek enerjiye sahip olması, azot içeren bazı tepkimelerin (örneğin N2H4 oluşumu) endotermik çıkmasının nedenlerinden biri olabilir.",
          "Bir tepkimenin ΔH değeri negatifse bu tepkime mutlaka çok hızlı gerçekleşir.",
          "Aynı tepkenlerden farklı ürünler oluşabiliyorsa (örneğin N2+H2 hem NH3 hem N2H4 verebilir), her ürün için ayrı bir ΔH hesaplanmalıdır."
        ]
      },
      "text": "Verilen önermelerden hangileri doğrudur?",
      "options": [
        "II ve III",
        "Yalnız II",
        "Yalnız I",
        "I ve III",
        "I, II ve III"
      ],
      "correct": 3,
      "explain": "I doğrudur; N≡N bağının kırılması çok fazla enerji gerektirdiğinden bazı azot tepkimeleri endotermik çıkabilir. II yanlıştır; ΔH işareti tepkimenin hızıyla ilgili bilgi vermez, bu ayrı bir kavramdır (tepkime hızı ileriki modüllerde işlenecektir). III doğrudur; farklı ürünler farklı bağ yapılarına sahip olacağından her biri için ayrı ΔH hesaplanmalıdır."
    },
    {
      "difficulty": "zor",
      "text": "CH4(g) + Cl2(g) → CH3Cl(g) + HCl(g) tepkimesinde yalnızca 1 mol C-H (414 kJ/mol) ve 1 mol Cl-Cl (243 kJ/mol) bağı kırılırken, 1 mol C-Cl (339 kJ/mol) ve 1 mol H-Cl (431 kJ/mol) bağı oluşmaktadır (değişmeyen bağlar hesaba katılmamıştır). Bu tepkimenin ΔH_tepkime değeri kaç kJ'dir?",
      "options": [
        "+770 kJ",
        "-657 kJ",
        "-113 kJ",
        "+113 kJ",
        "-1440 kJ"
      ],
      "correct": 2,
      "explain": "Kırılan: 414 + 243 = 657 kJ. Oluşan: 339 + 431 = 770 kJ. ΔH = 657 − 770 = -113 kJ (ekzotermik). Yalnızca değişen bağları hesaba katmak, aynı kalan bağların (örneğin diğer 3 C-H bağının) her iki tarafta da eşit olup birbirini götürmesinden dolayı geçerli bir kısayoldur."
    },
    {
      "difficulty": "zor",
      "dialogue": {
        "turns": [
          {
            "who": "Öğrenci A",
            "text": "N2 + 3H2 → 2NH3 tepkimesi ekzotermik (-80 kJ) ama N2 + 2H2 → N2H4 tepkimesi endotermik (+99 kJ). Aynı tepkenlerle başlayıp farklı sonuç çıkması bana mantıksız geliyor."
          },
          {
            "who": "Öğrenci B",
            "text": "Aslında mantıklı; ürünler farklı (NH3 ve N2H4 farklı moleküller, farklı bağ sayı ve türlerine sahip), bu yüzden oluşan bağların toplam enerjisi de farklı çıkıyor. ΔH, hangi ürünün oluştuğuna bağlıdır."
          }
        ]
      },
      "text": "Bu tartışmaya göre hangi öğrencinin açıklaması bilimsel olarak doğrudur?",
      "options": [
        "İkisi de haksızdır",
        "Verilen bilgiyle karar verilemez",
        "İkisi de haklıdır",
        "Yalnız Öğrenci A",
        "Yalnız Öğrenci B"
      ],
      "correct": 4,
      "explain": "Öğrenci B haklıdır. ΔH yalnızca tepkenlere değil, hangi ürünlerin oluştuğuna da bağlıdır. NH3'te 6 N-H bağı (2 molekülde), N2H4'te ise 1 N-N ve 4 N-H bağı bulunur; bu farklı bağ yapıları farklı toplam bağ enerjilerine ve dolayısıyla farklı ΔH değerlerine yol açar."
    },
    {
      "difficulty": "zor",
      "text": "2H2(g) + O2(g) → 2H2O(g) tepkimesi için H-H = 436 kJ/mol, O=O = 498 kJ/mol, O-H = 464 kJ/mol bağ enerjileri kullanılarak ΔH_tepkime hesaplanıyor. Bu değer, H2O(g) → H2(g) + 1/2O2(g) tepkimesinin ΔH değeri olan +243 kJ ile nasıl bir ilişki içindedir?",
      "options": [
        "İki tepkimenin ΔH değerleri arasında hiçbir matematiksel ilişki yoktur",
        "2H2+O2→2H2O tepkimesinin ΔH'si tam olarak -486 kJ'dir; bu, +243 kJ'nin işareti değiştirilip 2 ile çarpılmasıyla elde edilen değere eşittir çünkü ikinci tepkime, birincinin tersinin iki katıdır",
        "Bu iki tepkime birbirinden tamamen bağımsız bağlar içerir",
        "2H2+O2→2H2O tepkimesinin ΔH'si +243 kJ ile aynıdır",
        "2H2+O2→2H2O tepkimesinin ΔH'si +486 kJ'dir"
      ],
      "correct": 1,
      "explain": "Kırılan: (2×436)+498 = 1370 kJ. Oluşan: 4×464 = 1856 kJ. ΔH = 1370 − 1856 = -486 kJ. H2O(g)→H2(g)+1/2O2(g) tepkimesi 2H2(g)+O2(g)→2H2O(g) tepkimesinin tam tersi ve yarısı olduğundan, bir tepkimenin yönü tersine çevrildiğinde ve/veya katsayıları belirli bir sayıyla çarpıldığında ΔH işareti değişir ve aynı oranda çarpılır: +243 × (-2) = -486 kJ; bu tutarlılık bağ enerjisi yönteminin doğruluğunu destekler."
    },
    {
      "difficulty": "zor",
      "compareChart": {
        "xLabels": [
          "F-F",
          "Cl-Cl",
          "Br-Br",
          "I-I"
        ],
        "series": [
          {
            "name": "Halojen-halojen bağ enerjisi (kJ/mol)",
            "values": [
              159,
              243,
              193,
              151
            ],
            "color": "var(--exo)"
          }
        ]
      },
      "text": "Grafikte halojen-halojen (X-X) bağ enerjileri verilmiştir. F-F bağının (159 kJ/mol), Cl-Cl bağından (243 kJ/mol) daha düşük bir enerjiye sahip olması, H-X serisindeki düzenli azalan trendin (H-F>H-Cl>H-Br>H-I) aksine bir durumdur. Bu gözlem neyi gösterir?",
      "options": [
        "Bu veriler yalnızca H-X bağları için geçerlidir, X-X bağları için hesaba katılmamalıdır",
        "Halojen-halojen bağları hiçbir düzen izlemez",
        "F-F bağı aslında var olamaz",
        "Grafikteki veriler hatalıdır, çünkü tüm bağ enerjileri atom boyutuyla ters orantılı azalmalıdır",
        "Bağ enerjisi trendleri, karşılaştırılan bağın türüne (X-X mi, H-X mi) göre farklı düzenler izleyebilir; genellemeler her bağ türü için ayrı ayrı test edilmelidir"
      ],
      "correct": 4,
      "explain": "F-F bağının beklenenden düşük enerjili olması (küçük flor atomlarındaki elektron çiftleri arasındaki itme nedeniyle), bağ enerjisi trendlerinin her bağ türü için ayrı ayrı incelenmesi gerektiğini gösterir; H-X serisindeki düzenli azalma, X-X serisine otomatik olarak genellenemez."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimenin bağ enerjisi yöntemiyle hesaplanan ΔH değeri -450 kJ çıkarken, aynı tepkimenin gerçek (deneysel) ΔH değerinin -463 kJ olduğu ölçülüyor. Aradaki küçük farkın en olası nedeni nedir?",
      "options": [
        "Hesaplama yöntemi tamamen yanlıştır ve hiçbir zaman kullanılmamalıdır",
        "Bağ enerjisi tablosundaki değerler, birçok farklı molekülden elde edilen ortalama değerlerdir; belirli bir moleküldeki gerçek bağ enerjisi bu ortalamadan hafifçe farklı olabilir",
        "Bu fark, tepkimenin gerçekleşmediğini gösterir",
        "ΔH değerleri asla birebir karşılaştırılamaz",
        "Deneysel ölçüm yöntemi güvenilmezdir"
      ],
      "correct": 1,
      "explain": "Bağ enerjisi tablosundaki değerler, o bağ türünün farklı moleküllerdeki ölçümlerinden elde edilen ortalama değerlerdir. Belirli bir moleküldeki gerçek bağ enerjisi, moleküldeki diğer atomların etkisiyle bu ortalamadan hafifçe sapabilir; bu yüzden bağ enerjisi yöntemiyle hesaplanan ΔH, deneysel değere yakın ama birebir aynı olmayabilir."
    },
    {
      "difficulty": "zor",
      "text": "Bir öğrenci, 'bağ enerjisi yüksek olan tepkenlerden oluşan bir tepkime her zaman endotermiktir' şeklinde bir genelleme yapıyor. Bu genellemenin geçerliliği hakkında en doğru değerlendirme hangisidir?",
      "options": [
        "Genelleme yalnızca organik tepkimeler için geçerlidir",
        "Bağ enerjisi ile ΔH işareti arasında hiçbir ilişki yoktur",
        "Genelleme yalnızca gaz tepkimeleri için doğrudur",
        "Genelleme her zaman doğrudur",
        "Genelleme yanlıştır; tepkimenin ΔH işareti yalnızca tepkenlerin değil, hem kırılan hem oluşan bağların toplam enerjilerinin karşılaştırılmasıyla belirlenir"
      ],
      "correct": 4,
      "explain": "Tepkenlerin bağ enerjisinin yüksek olması tek başına ΔH işaretini belirlemez. Örneğin N2+O2→2NO tepkiminde tepkenlerin bağları (N≡N, O=O) çok güçlü olsa da, oluşan N=O bağları da güçlüdür; ΔH işaretini belirleyen, kırılan ve oluşan bağ enerjileri toplamlarının birbirine göre büyüklüğüdür."
    },
    {
      "difficulty": "zor",
      "text": "İki basamaklı bir tepkimede önce A maddesindeki bağlar kırılıp B ara ürünü oluşuyor (ΔH1 = +150 kJ), sonra B'deki bağlar yeniden düzenlenerek C ürünü oluşuyor (ΔH2 = -400 kJ). A'dan C'ye doğrudan gerçekleşen toplam tepkimenin ΔH değeri kaç kJ'dir?",
      "options": [
        "-400 kJ",
        "+550 kJ",
        "+250 kJ",
        "-550 kJ",
        "-250 kJ"
      ],
      "correct": 4,
      "explain": "Birbirini izleyen basamaklardan oluşan bir tepkimede toplam entalpi değişimi, basamakların ΔH değerlerinin toplamına eşittir: ΔH_toplam = ΔH1 + ΔH2 = (+150) + (-400) = -250 kJ."
    },
    {
      "difficulty": "zor",
      "table": {
        "headers": [
          "Tepkime",
          "Kırılan Bağ Enerjisi Toplamı (kJ)",
          "Oluşan Bağ Enerjisi Toplamı (kJ)"
        ],
        "rows": [
          [
            "X",
            "1200",
            "1450"
          ],
          [
            "Y",
            "980",
            "820"
          ],
          [
            "Z",
            "1500",
            "1500"
          ]
        ]
      },
      "text": "Tabloya göre X, Y ve Z tepkimelerinden hangisi ya da hangileri ekzotermiktir?",
      "options": [
        "X ve Y",
        "Yalnız Y",
        "Yalnız Z",
        "Yalnız X",
        "X, Y ve Z"
      ],
      "correct": 3,
      "explain": "X: ΔH = 1200-1450 = -250 kJ (ekzotermik). Y: ΔH = 980-820 = +160 kJ (endotermik). Z: ΔH = 1500-1500 = 0 kJ (ısı alışverişi yaklaşık yok, ne endotermik ne ekzotermik sayılır). Bu durumda yalnızca X tepkimesi ekzotermiktir."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimede kullanılan bağ enerjisi tablosunun yalnızca ortalama değerler içerdiği bilinmesine rağmen bir öğrenci hesapladığı ΔH değerini 'kesin ve değişmez bir gerçek' olarak sunuyor. Bu yaklaşımın bilimsel açıdan eksikliği nedir?",
      "options": [
        "Bağ enerjisi yöntemiyle elde edilen ΔH bir yaklaşık değerdir; kesinlik iddiası, ortalama tablo değerlerinin doğasını göz ardı eder",
        "Hesaplama yöntemi yanlış olduğu için sonuç zaten geçersizdir",
        "Bu yaklaşımda herhangi bir bilimsel eksiklik yoktur",
        "Ortalama değerler kullanmak sonucu otomatik olarak yanlış yapar",
        "ΔH değerleri zaten hiçbir zaman hesaplanamaz"
      ],
      "correct": 0,
      "explain": "Bağ enerjisi tablosundaki değerler farklı moleküllerden elde edilen ortalamalar olduğundan, bu yöntemle hesaplanan ΔH gerçek değere yakın bir tahmindir, mutlak kesinlik taşımaz. Bir sonucu 'kesin' olarak sunmak, yöntemin doğasındaki bu yaklaşıklığı göz ardı etmek anlamına gelir."
    },
    {
      "difficulty": "zor",
      "text": "C2H4(g) + H2(g) → C2H6(g) tepkimesinde C2H4'teki 1 C=C (611 kJ/mol) ve 4 C-H (414 kJ/mol) bağı ile H2'deki 1 H-H (436 kJ/mol) bağı kırılırken; C2H6'da 1 C-C (347 kJ/mol) ve 6 C-H (414 kJ/mol) bağı oluşmaktadır. Bu tepkimenin ΔH_tepkime değeri kaç kJ'dir?",
      "options": [
        "+128 kJ",
        "-483 kJ",
        "-2703 kJ",
        "+2831 kJ",
        "-128 kJ"
      ],
      "correct": 4,
      "explain": "Kırılan: 611 + (4×414) + 436 = 611 + 1656 + 436 = 2703 kJ. Oluşan: 347 + (6×414) = 347 + 2484 = 2831 kJ. ΔH = 2703 − 2831 = -128 kJ (ekzotermik) — etilenin hidrojenlenerek etana dönüşmesi ekzotermik bir tepkimedir."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimenin ΔH değeri bağ enerjisi yöntemiyle -320 kJ olarak hesaplanmıştır. Aynı tepkimenin tersinin (ürünlerden tepkenlere dönüşün) ΔH değeri için en doğru çıkarım hangisidir?",
      "options": [
        "Ters tepkimenin ΔH'si de -320 kJ'dir",
        "Ters tepkimenin ΔH'si 0 kJ'dir",
        "Ters tepkimenin ΔH'si +320 kJ'dir; çünkü kırılan ve oluşan bağların rolleri yer değiştirir",
        "Ters tepkimenin ΔH'si hesaplanamaz",
        "Ters tepkimenin ΔH'si -640 kJ'dir"
      ],
      "correct": 2,
      "explain": "Bir tepkime tersine çevrildiğinde, ileri tepkimede oluşan bağlar artık kırılan, kırılan bağlar ise artık oluşan bağlar olur. Bu, ΔH = Kırılan − Oluşan ifadesindeki iki terimin yer değiştirmesi anlamına gelir; bu da ΔH'nin işaretinin tersine dönmesine (mutlak değeri aynı kalarak) yol açar: -320 kJ → +320 kJ."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimede tepkenlerdeki toplam bağ sayısı, ürünlerdeki toplam bağ sayısından fazladır (örneğin bir büyük molekül birden fazla küçük parçaya ayrışıyor). Yalnızca bu bilgiye (bağ sayılarının farkına) dayanarak tepkimenin ΔH işareti kesin olarak belirlenebilir mi?",
      "options": [
        "Hayır, çünkü ayrışma tepkimeleri her zaman ısı alışverişi yapmaz",
        "Evet, bağ sayısı ile ΔH işareti her zaman birebir örtüşür",
        "Evet, bağ sayısı azaldığı için tepkime kesinlikle endotermiktir",
        "Evet, bağ sayısı azaldığı için tepkime kesinlikle ekzotermiktir",
        "Hayır; ΔH işareti bağ SAYISINA değil, kırılan ve oluşan bağların toplam ENERJİSİNE bağlıdır — az sayıda ama çok güçlü bağ, çok sayıda zayıf bağdan daha fazla enerji içerebilir"
      ],
      "correct": 4,
      "explain": "ΔH işaretini belirleyen, bağların sayısı değil toplam enerjileridir. Örneğin tek bir çok güçlü bağ (örneğin N≡N, 946 kJ/mol), birkaç zayıf bağın toplamından daha fazla enerji taşıyabilir. Bu yüzden yalnızca bağ sayısındaki değişime bakarak ΔH işareti hakkında kesin bir sonuca varılamaz; enerjiler hesaplanmalıdır."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimede A maddesi B'ye dönüşürken ΔH1 = +180 kJ, B maddesi C'ye dönüşürken ΔH2 = +40 kJ değerleri ölçülüyor. A'dan doğrudan C'ye giden tek basamaklı bir yol bulunabilirse bu yolun ΔH değeri için en tutarlı beklenti nedir?",
      "options": [
        "Yaklaşık +140 kJ olması beklenir",
        "Bu iki değerden A'dan C'ye giden yolun ΔH'si hakkında hiçbir çıkarım yapılamaz",
        "Yaklaşık +220 kJ olması beklenir, çünkü entalpi değişimi izlenen yoldan bağımsız olarak yalnızca başlangıç ve bitiş durumuna bağlıdır",
        "Yaklaşık -220 kJ olması beklenir",
        "Tek basamaklı yolun ΔH'si her zaman 0 olur"
      ],
      "correct": 2,
      "explain": "Entalpi bir hâl fonksiyonudur; yani toplam ΔH, izlenen ara basamaklardan bağımsız olarak yalnızca başlangıç (A) ve bitiş (C) durumlarının enerjisine bağlıdır. A→B→C basamaklarının toplamı (180+40=220 kJ) ile A→C yolunun ΔH'si eşit olmalıdır: yaklaşık +220 kJ."
    }
  ],
  "m4": [
    {
      "difficulty": "kolay",
      "text": "Bir bileşiğin, kendi standart hâlindeki elementlerinden 1 molünün oluşması sırasındaki entalpi değişimine ne ad verilir?",
      "options": [
        "Bağ enerjisi",
        "Aktivasyon enerjisi",
        "Standart oluşum entalpisi",
        "Yanma ısısı",
        "Tepkime hızı"
      ],
      "correct": 2,
      "explain": "Bir bileşiğin kendi elementlerinden 1 mol oluşurken meydana gelen entalpi değişimine standart oluşum entalpisi (ΔH°f) denir."
    },
    {
      "difficulty": "kolay",
      "text": "Standart hâldeki elementlerin (örneğin H2(g), O2(g), N2(g)) standart oluşum entalpisi kaç kabul edilir?",
      "options": [
        "0",
        "Elemente göre değişir, sabit değildir",
        "100",
        "1",
        "Negatif sonsuz"
      ],
      "correct": 0,
      "explain": "Standart hâldeki elementler zaten kendi kendilerinden oluştuğu için, referans noktası olarak oluşum entalpileri 0 kabul edilir."
    },
    {
      "difficulty": "kolay",
      "text": "Standart oluşum entalpisi (ΔH°f) çok negatif olan bir bileşik için genel olarak ne söylenebilir?",
      "options": [
        "Bileşiğin kütlesi çok küçüktür",
        "Bileşik yalnızca gaz hâlinde bulunur",
        "Bileşik hiçbir zaman oluşmaz",
        "Bileşik oluşurken çok fazla enerji açığa çıkarmıştır ve oldukça kararlıdır",
        "Bileşik oldukça kararsızdır, kolayca ayrışır"
      ],
      "correct": 3,
      "explain": "ΔH°f değeri çok negatifse, bileşik elementlerinden oluşurken büyük miktarda enerji açığa çıkarmış demektir; bu, bileşiğin düşük enerjili ve oldukça kararlı bir yapıya sahip olduğunu gösterir."
    },
    {
      "difficulty": "kolay",
      "text": "Standart oluşum entalpisi (ΔH°f) pozitif olan bir bileşik (örneğin NO gazı) için ne söylenebilir?",
      "options": [
        "Bileşik hiç enerji değişimi yaşamamıştır",
        "Pozitif değer bir hesaplama hatasını gösterir",
        "Bileşik yalnızca sıvı hâlde bulunur",
        "Bileşik elementlerinden oluşurken enerji soğurmuştur (gerektirmiştir), genellikle daha az kararlıdır",
        "Bileşik elementlerinden oluşurken enerji açığa çıkarmıştır"
      ],
      "correct": 3,
      "explain": "ΔH°f pozitifse bileşiğin oluşumu için elementlerden dışarıdan enerji alınması gerekmiştir; bu tür bileşikler (örneğin NO, HCN) genellikle daha az kararlıdır."
    },
    {
      "difficulty": "kolay",
      "text": "Standart oluşum entalpileri kullanılarak bir tepkimenin entalpi değişimi hesaplanırken hangi matematiksel bağıntı kullanılır?",
      "options": [
        "ΔH°tepkime = Σn·ΔH°f(ürünler) × Σn·ΔH°f(tepkenler)",
        "ΔH°tepkime = Σn·ΔH°f(ürünler) − Σn·ΔH°f(tepkenler)",
        "ΔH°tepkime, oluşum entalpilerinden hesaplanamaz",
        "ΔH°tepkime = Σn·ΔH°f(ürünler) + Σn·ΔH°f(tepkenler)",
        "ΔH°tepkime = Σn·ΔH°f(tepkenler) − Σn·ΔH°f(ürünler)"
      ],
      "correct": 1,
      "explain": "Standart tepkime entalpisi, ürünlerin oluşum entalpileri toplamından tepkenlerin oluşum entalpileri toplamının çıkarılmasıyla hesaplanır: ΔH°tepkime = Σn·ΔH°f(ürünler) − Σn·ΔH°f(tepkenler)."
    },
    {
      "difficulty": "kolay",
      "text": "H2O(g)'nin standart oluşum entalpisi -241,8 kJ/mol'dür. 2 mol H2O(g) oluşurken açığa çıkan toplam enerji yaklaşık kaç kJ'dir?",
      "options": [
        "+483,6 kJ",
        "-483,6 kJ",
        "-967,2 kJ",
        "-120,9 kJ",
        "-241,8 kJ"
      ],
      "correct": 1,
      "explain": "2 mol H2O(g) oluşurken açığa çıkan enerji, 1 molün oluşum entalpisinin 2 katıdır: 2 × (-241,8) = -483,6 kJ."
    },
    {
      "difficulty": "kolay",
      "table": {
        "headers": [
          "Bileşik",
          "ΔH°f (kJ/mol)"
        ],
        "rows": [
          [
            "CO2(g)",
            "-393,5"
          ],
          [
            "CH4(g)",
            "-74,9"
          ],
          [
            "NO(g)",
            "+90,3"
          ],
          [
            "HCN(g)",
            "+135,1"
          ]
        ]
      },
      "text": "Tabloya göre verilen bileşiklerden hangisi elementlerinden oluşurken en fazla enerji açığa çıkarmıştır?",
      "options": [
        "HCN(g)",
        "Hepsi eşittir",
        "CH4(g)",
        "CO2(g)",
        "NO(g)"
      ],
      "correct": 3,
      "explain": "En negatif ΔH°f değeri -393,5 kJ/mol ile CO2(g)'ye aittir; bu, CO2'nin oluşurken en fazla enerji açığa çıkardığını gösterir."
    },
    {
      "difficulty": "kolay",
      "text": "Suyun standart oluşum entalpisinin çok negatif olması, suyun günlük hayattaki davranışıyla ilgili ne açıklar?",
      "options": [
        "Suyun kütlesinin neden düşük olduğunu",
        "Suyun neden kolayca kendiliğinden hidrojen ve oksijene ayrıştığını",
        "Suyun neden oldukça kararlı olduğunu ve kolayca tekrar ayrışmadığını",
        "Suyun neden sıvı hâlde bulunduğunu",
        "Suyun neden renksiz olduğunu"
      ],
      "correct": 2,
      "explain": "Su oluşurken çok fazla enerji açığa çıkardığından (ΔH°f çok negatif), su oldukça kararlı bir bileşiktir; bu yüzden kolayca hidrojen ve oksijene geri ayrışmaz."
    },
    {
      "difficulty": "kolay",
      "text": "Bir tepkimede ürünlerin oluşum entalpileri toplamı -400 kJ, tepkenlerin oluşum entalpileri toplamı -100 kJ olarak hesaplanmıştır. Bu tepkimenin ΔH°tepkime değeri kaç kJ'dir?",
      "options": [
        "-100 kJ",
        "+300 kJ",
        "-300 kJ",
        "-500 kJ",
        "+500 kJ"
      ],
      "correct": 2,
      "explain": "ΔH°tepkime = Ürünler − Tepkenler = (-400) − (-100) = -300 kJ."
    },
    {
      "difficulty": "kolay",
      "text": "Bir tepkimede ürünlerin oluşum entalpileri toplamı +100 kJ, tepkenlerin oluşum entalpileri toplamı -50 kJ olarak hesaplanmıştır. Bu tepkimenin ΔH°tepkime değeri kaç kJ'dir ve türü nedir?",
      "options": [
        "+150 kJ, endotermik",
        "+150 kJ, ekzotermik",
        "-150 kJ, ekzotermik",
        "+50 kJ, endotermik",
        "-50 kJ, ekzotermik"
      ],
      "correct": 0,
      "explain": "ΔH°tepkime = Ürünler − Tepkenler = (+100) − (-50) = +150 kJ. Değer pozitif olduğu için tepkime endotermiktir."
    },
    {
      "difficulty": "kolay",
      "text": "Aynı bileşiğin farklı fiziksel hâllerinin (örneğin H2O(g) ve H2O(s)) standart oluşum entalpileri birbirinden farklı olabilir mi?",
      "options": [
        "Evet, fiziksel hâl oluşum entalpisini etkiler; örneğin H2O(s) H2O(g)'den daha negatif bir değere sahiptir",
        "Hayır, fiziksel hâl oluşum entalpisini etkilemez",
        "Bu bilgi tablo olmadan belirlenemez",
        "Hayır, yalnızca element hâlleri farklı değer alabilir",
        "Evet ama fark her zaman sıfırdır"
      ],
      "correct": 0,
      "explain": "Fiziksel hâl oluşum entalpisini etkiler. H2O(g)'nin ΔH°f'i -241,8 kJ/mol iken H2O(s)'nin ΔH°f'i -285,8 kJ/mol'dür; sıvı su oluşurken ekstra bir yoğuşma enerjisi de açığa çıktığından daha negatif bir değere sahiptir."
    },
    {
      "difficulty": "kolay",
      "text": "Standart oluşum entalpisi hangi birimle ifade edilir?",
      "options": [
        "kJ",
        "kJ/mol",
        "mol/L",
        "kJ/s",
        "kJ/g"
      ],
      "correct": 1,
      "explain": "Standart oluşum entalpisi, 1 mol bileşiğin oluşumuna karşılık geldiğinden kJ/mol birimiyle ifade edilir."
    },
    {
      "difficulty": "kolay",
      "text": "ΔH°tepkime formülündeki 'n' sembolü neyi ifade eder?",
      "options": [
        "Tepkimedeki her bir maddenin katsayısını",
        "Tepkime süresini",
        "Tepkime hızını",
        "Sıcaklığı",
        "Molekül sayısını (Avogadro sayısı)"
      ],
      "correct": 0,
      "explain": "Formüldeki 'n', tepkime denkleminde ilgili maddenin önündeki katsayıyı (kaç mol olduğunu) ifade eder; her madde kendi katsayısıyla çarpılarak toplama dâhil edilir."
    },
    {
      "difficulty": "kolay",
      "text": "NH4Cl(k)'nın standart oluşum entalpisi -314,4 kJ/mol'dür. Bu değer neyi ifade eder?",
      "options": [
        "Bu değer NH4Cl'nin erime noktasını gösterir",
        "1 mol NH4Cl, kendi elementlerinden oluşurken 314,4 kJ enerji açığa çıkarır",
        "NH4Cl'nin kütlesi 314,4 g/mol'dür",
        "NH4Cl hiçbir zaman oluşmaz",
        "NH4Cl'nin 1 molünün ayrışması için 314,4 kJ gerekir"
      ],
      "correct": 1,
      "explain": "Standart oluşum entalpisi, bileşiğin kendi elementlerinden 1 mol oluşurken gerçekleşen entalpi değişimini gösterir; -314,4 kJ/mol, NH4Cl oluşurken bu kadar enerji açığa çıktığı anlamına gelir."
    },
    {
      "difficulty": "kolay",
      "text": "Standart oluşum entalpisi ile bağ enerjisi yöntemi arasındaki temel fark nedir?",
      "options": [
        "Bağ enerjisi yöntemi yalnızca elementler için geçerlidir",
        "Standart oluşum entalpisi yönteminde ürünlerden tepkenler çıkarılırken, bağ enerjisi yönteminde kırılandan oluşan çıkarılır",
        "İkisi de aynı sıralamayı (kırılan − oluşan) kullanır",
        "Standart oluşum entalpisi yalnızca fiziksel değişimler için kullanılır",
        "İki yöntem birbirinden tamamen bağımsız sonuçlar üretir ve karşılaştırılamaz"
      ],
      "correct": 1,
      "explain": "Standart oluşum entalpisi yönteminde ΔH°tepkime = Σ(ürünler) − Σ(tepkenler) şeklinde hesaplanırken, bağ enerjisi yönteminde ΔH = Σ(kırılan bağlar) − Σ(oluşan bağlar) şeklinde hesaplanır; sıralama ters yönlüdür. Bu iki yöntem, doğru uygulandığında aynı tepkime için tutarlı sonuçlar verir."
    },
    {
      "difficulty": "kolay",
      "text": "NO2(g)'nin standart oluşum entalpisi +33,2 kJ/mol'dür. Bu bilgiye göre NO2(g)'nin elementlerinden (N2 ve O2) oluşumu için aşağıdakilerden hangisi doğrudur?",
      "options": [
        "Oluşum hiçbir enerji değişimi göstermez",
        "Oluşum sırasında enerji açığa çıkar",
        "NO2 hiçbir koşulda oluşamaz",
        "Oluşum sırasında enerji soğurulur (dışarıdan enerji verilmesi gerekir)",
        "Bu değer NO2'nin kütlesiyle ilgilidir"
      ],
      "correct": 3,
      "explain": "ΔH°f pozitif olduğu için NO2'nin elementlerinden oluşumu enerji soğuran (endotermik) bir süreçtir; oluşabilmesi için dışarıdan enerji verilmesi gerekir."
    },
    {
      "difficulty": "kolay",
      "text": "Aşağıdaki maddelerden hangisinin standart oluşum entalpisi tanım gereği kesinlikle sıfırdır?",
      "options": [
        "O2(g)",
        "HCN(g)",
        "NH3(g)",
        "H2O(s)",
        "CO2(g)"
      ],
      "correct": 0,
      "explain": "O2(g), standart hâldeki (oda koşullarında bulunan doğal hâlindeki) bir elementtir; standart hâldeki elementlerin oluşum entalpisi tanım gereği sıfır kabul edilir. Diğer seçeneklerin hepsi bileşiktir."
    },
    {
      "difficulty": "orta",
      "text": "H2(g) + 1/2O2(g) → H2O(g) tepkimesi için H2O(g)'nin ΔH°f = -241,8 kJ/mol, H2(g) ve O2(g)'nin ΔH°f = 0 olduğuna göre bu tepkimenin ΔH°tepkime değeri kaç kJ'dir?",
      "options": [
        "-483,6 kJ",
        "+241,8 kJ",
        "-120,9 kJ",
        "-241,8 kJ",
        "0 kJ"
      ],
      "correct": 3,
      "explain": "ΔH°tepkime = ΔH°f(ürünler) − ΔH°f(tepkenler) = (-241,8) − [1×0 + 0,5×0] = -241,8 kJ. Elementlerin oluşum entalpisi sıfır olduğundan tepkime entalpisi doğrudan ürünün oluşum entalpisine eşit çıkar."
    },
    {
      "difficulty": "orta",
      "statements": {
        "items": [
          "Standart hâldeki bir elementin oluşum entalpisi her zaman sıfırdır.",
          "Bir bileşiğin oluşum entalpisi, o bileşiğin bulunduğu fiziksel hâlden bağımsızdır.",
          "Bir tepkimenin katsayıları 2 ile çarpılırsa, ΔH°tepkime değeri de 2 ile çarpılır."
        ]
      },
      "text": "Verilen önermelerden hangileri doğrudur?",
      "options": [
        "I ve III",
        "II ve III",
        "I, II ve III",
        "Yalnız I",
        "Yalnız II"
      ],
      "correct": 0,
      "explain": "I doğrudur; standart hâldeki elementlerin oluşum entalpisi referans olarak sıfır kabul edilir. II yanlıştır; H2O(g) ve H2O(s) örneğinde görüldüğü gibi fiziksel hâl oluşum entalpisini etkiler. III doğrudur; H2(g)+1/2O2(g)→H2O(g) (-241,8 kJ) ile 2H2(g)+O2(g)→2H2O(g) (-483,6 kJ) örneğinde katsayılar 2 katına çıkınca ΔH da 2 katına çıkmıştır."
    },
    {
      "difficulty": "orta",
      "context": "NH3(g)'nin ΔH°f = -46,1 kJ/mol, HCl(g)'nin ΔH°f = -92,3 kJ/mol, NH4Cl(k)'nın ΔH°f = -314,4 kJ/mol'dür.",
      "text": "NH3(g) + HCl(g) → NH4Cl(k) tepkimesinin ΔH°tepkime değeri kaç kJ'dir?",
      "options": [
        "-176,0 kJ",
        "+138,4 kJ",
        "-452,8 kJ",
        "-138,4 kJ",
        "+176,0 kJ"
      ],
      "correct": 0,
      "explain": "ΔH°tepkime = ΔH°f(NH4Cl) − [ΔH°f(NH3) + ΔH°f(HCl)] = (-314,4) − [(-46,1) + (-92,3)] = -314,4 − (-138,4) = -176,0 kJ."
    },
    {
      "difficulty": "orta",
      "dialogue": {
        "turns": [
          {
            "who": "Öğrenci A",
            "text": "ΔH°tepkime hesabında formülü 'tepkenler − ürünler' şeklinde kullandım, bağ enerjisi formülüyle karıştırmışım galiba."
          },
          {
            "who": "Öğrenci B",
            "text": "Evet, oluşum entalpisi formülünde sıra 'ürünler − tepkenler' şeklindedir; bağ enerjisinde ise 'kırılan − oluşan' yani tepken taraflı düşünülür. İki formülü karıştırmamak gerekiyor."
          }
        ]
      },
      "text": "Bu tartışmaya göre hangi öğrencinin son ifadesi doğrudur?",
      "options": [
        "İkisi de aynı formülü kullanmıştır",
        "Yalnız Öğrenci A'nın ilk cümlesi",
        "İkisi de yanlıştır",
        "Öğrenci B'nin açıklaması",
        "Verilen bilgiyle karar verilemez"
      ],
      "correct": 3,
      "explain": "Öğrenci B doğru açıklıyor: standart oluşum entalpisi yönteminde ΔH°tepkime = Σ(ürünler) − Σ(tepkenler) sırası kullanılır; bu, bağ enerjisi yöntemindeki 'kırılan − oluşan' sırasıyla karıştırılmamalıdır."
    },
    {
      "difficulty": "orta",
      "matchPairs": {
        "leftHeader": "Bileşik",
        "rightHeader": "ΔH°f (kJ/mol)",
        "pairs": [
          [
            "H2O(s)",
            "-285,8"
          ],
          [
            "CO2(g)",
            "-393,5"
          ],
          [
            "HCN(g)",
            "+135,1"
          ]
        ]
      },
      "text": "Yukarıdaki eşleştirmeye göre verilen bileşiklerden hangisi elementlerinden oluşurken enerji soğurmuştur (endotermik oluşum)?",
      "options": [
        "Hepsi ekzotermik oluşmuştur",
        "H2O(s)",
        "CO2(g)",
        "Hiçbiri",
        "HCN(g)"
      ],
      "correct": 4,
      "explain": "HCN(g)'nin oluşum entalpisi pozitiftir (+135,1 kJ/mol); bu, HCN'nin elementlerinden oluşurken enerji soğurduğunu (dışarıdan enerji aldığını) gösterir. Diğer iki bileşiğin ΔH°f değeri negatiftir, yani oluşumları ekzotermiktir."
    },
    {
      "difficulty": "orta",
      "checklist": {
        "items": [
          "Standart oluşum entalpisi tablosundaki değerler yalnızca element hâlindeki maddeler için verilir.",
          "Bir tepkimenin ΔH°tepkime değeri, ürünlerin ve tepkenlerin oluşum entalpileri kullanılarak hesaplanabilir.",
          "Bir bileşiğin oluşum entalpisi negatifse, bu bileşiğin elementlerinden oluşumu ekzotermiktir."
        ]
      },
      "text": "Yukarıdaki ifadelerden kaç tanesi doğrudur?",
      "options": [
        "Verilenlerle belirlenemez",
        "3",
        "2",
        "1",
        "0"
      ],
      "correct": 2,
      "explain": "Birinci ifade yanlıştır; oluşum entalpisi tablosu bileşikler için verilir, elementler için referans olarak sıfır kabul edilir. İkinci ve üçüncü ifadeler doğrudur. Doğru ifade sayısı 2'dir."
    },
    {
      "difficulty": "orta",
      "chart": {
        "labels": [
          "H2O(g)",
          "H2O(s)"
        ],
        "values": [
          -241.8,
          -285.8
        ],
        "unit": "ΔH°f (kJ/mol)",
        "tone": [
          "exo",
          "exo"
        ]
      },
      "text": "Grafikte suyun gaz ve sıvı hâllerinin oluşum entalpileri karşılaştırılmıştır. Aradaki farkın (-285,8 − (-241,8) = -44 kJ) en olası açıklaması nedir?",
      "options": [
        "Sıvı ve gaz suyun kimyasal formülleri farklıdır",
        "Gaz hâldeki su daha fazla atom içerir",
        "Sıvı su oluşurken ek olarak yoğuşma sırasında da enerji açığa çıkar, bu da toplam değeri daha negatif yapar",
        "Ölçüm hatasından kaynaklanmaktadır",
        "Bu fark rastgele bir değerdir, açıklaması yoktur"
      ],
      "correct": 2,
      "explain": "H2O(g) oluşumundan sonra su buharının yoğuşarak H2O(s) hâline geçmesi ekstra bir ekzotermik adımdır; bu ek enerji açığa çıkışı, sıvı suyun oluşum entalpisini gaz sudan daha negatif yapar."
    },
    {
      "difficulty": "orta",
      "text": "1/2N2(g) + O2(g) → NO2(g) tepkimesinin ΔH°tepkime değeri +33,2 kJ, 1/2N2(g) + 1/2O2(g) → NO(g) tepkimesinin ΔH°tepkime değeri +90,3 kJ olarak veriliyor. Buna göre NO2(g) → NO(g) + 1/2O2(g) tepkimesinin ΔH°tepkime değeri kaç kJ'dir?",
      "options": [
        "-57,1 kJ",
        "+123,5 kJ",
        "+33,2 kJ",
        "+57,1 kJ",
        "-123,5 kJ"
      ],
      "correct": 3,
      "explain": "NO2 → NO + 1/2O2 tepkimesi, NO oluşum tepkimesinden NO2 oluşum tepkimesinin çıkarılmasıyla elde edilebilir: ΔH = ΔH°f(NO) − ΔH°f(NO2) = 90,3 − 33,2 = +57,1 kJ."
    },
    {
      "difficulty": "orta",
      "text": "Bir tepkimenin ΔH°tepkime değeri hesaplanırken bir öğrenci yanlışlıkla elementlerin (H2, O2, N2) oluşum entalpisini sıfır yerine tabloda bulamadığı için 'hesaplanamaz' olarak bırakıyor. Bu yaklaşımdaki hata nedir?",
      "options": [
        "Standart hâldeki elementlerin oluşum entalpisi tanım gereği sıfır kabul edilir ve bu değer doğrudan hesaplamada kullanılabilir",
        "Hata yoktur, elementler için gerçekten hesaplama yapılamaz",
        "Elementler tepkime denklemlerinde hiç yer almaz",
        "Bu hata yalnızca gaz hâlindeki elementler için geçerlidir",
        "Elementlerin oluşum entalpisi her zaman pozitiftir"
      ],
      "correct": 0,
      "explain": "Standart hâldeki elementlerin oluşum entalpisi, tanım gereği referans noktası olarak sıfır kabul edilir; bu değer tabloda aranmaz, doğrudan 0 olarak hesaplamaya dâhil edilir."
    },
    {
      "difficulty": "orta",
      "text": "Bir bileşiğin ΔH°f değeri -50 kJ/mol'den -500 kJ/mol'e daha negatif bir bileşiğe geçildiğinde, bu bileşiklerin göreli kararlılığı hakkında ne söylenebilir?",
      "options": [
        "Daha negatif değer, bileşiğin daha hızlı tepkimeye gireceğini gösterir",
        "-500 kJ/mol'lük bileşik daha az kararlıdır",
        "-500 kJ/mol'lük bileşik, elementlerinden oluşurken daha fazla enerji açığa çıkardığından genellikle daha kararlıdır",
        "İki bileşik de aynı kararlılığa sahiptir",
        "Kararlılık yalnızca kütleyle ilgilidir, ΔH°f ile ilgisizdir"
      ],
      "correct": 2,
      "explain": "Genel olarak ΔH°f değeri ne kadar negatifse, bileşik o kadar düşük enerjili ve kararlı bir yapıya sahiptir. -500 kJ/mol'lük bileşik, -50 kJ/mol'lük bileşiğe göre elementlerinden oluşurken daha fazla enerji açığa çıkarmıştır, bu da genellikle daha yüksek kararlılığa işaret eder."
    },
    {
      "difficulty": "orta",
      "text": "Bir tepkimede iki mol tepken ve iki mol ürün bulunuyor; her bir maddenin oluşum entalpisi biliniyor ancak bir öğrenci yalnızca 1'er mol üzerinden (katsayıları çarpmadan) toplama yapıyor. Bu yaklaşımın sonucu nasıl etkiler?",
      "options": [
        "Sonucu etkilemez, çünkü katsayılar önemsizdir",
        "Yanlış bir ΔH°tepkime değeri hesaplanır, çünkü her maddenin katkısı kendi mol sayısıyla (katsayısıyla) orantılı olmalıdır",
        "Yalnızca ürünler için katsayı önemlidir, tepkenler için önemsizdir",
        "Katsayılar yalnızca gaz hâlindeki maddeler için önemlidir",
        "Sonuç otomatik olarak iki katına çıkar"
      ],
      "correct": 1,
      "explain": "ΔH°tepkime formülündeki 'n' katsayısı, her maddenin tepkimedeki mol sayısına göre katkısını doğru şekilde hesaba katmak için gereklidir. Katsayılar çarpılmadan yapılan bir toplama, gerçek ΔH°tepkime değerinden farklı (genellikle küçük) bir sonuç verir."
    },
    {
      "difficulty": "orta",
      "text": "Bir bileşiğin standart oluşum entalpisi 0 kJ/mol olarak veriliyor ve bu bileşiğin element olmadığı biliniyor (bir bileşik olduğu belirtiliyor). Bu durum için en makul açıklama hangisidir?",
      "options": [
        "Bu, hesaplamada bir hata olduğunu kesin olarak gösterir",
        "Yalnızca elementlerin ΔH°f'i 0 olabilir, bu yüzden bilgi çelişkilidir ve göz ardı edilmelidir",
        "ΔH°f 0 olan her madde element sayılmalıdır",
        "Bu bileşik hiçbir zaman var olamaz",
        "Bazı bileşiklerin oluşum entalpisi, oluşum sırasında açığa çıkan ve soğurulan enerjilerin birbirini dengelemesi sonucunda sıfıra çok yakın çıkabilir; bu, bileşiğin element olduğu anlamına gelmez"
      ],
      "correct": 4,
      "explain": "Bir bileşiğin oluşum entalpisinin sıfıra yakın çıkması, o bileşiğin oluşumu sırasında açığa çıkan ve soğurulan enerjilerin tesadüfen birbirini dengelemesinden kaynaklanabilir; bu durum, o maddenin element olduğu anlamına gelmez — yalnızca standart hâldeki elementler tanım gereği tam olarak sıfır kabul edilir."
    },
    {
      "difficulty": "orta",
      "text": "Bir tepkimenin ΔH°tepkime değeri +238,8 kJ olarak hesaplanıyor (2CH4(g) + N2(g) → HCN(g) + NH3(g)). Bu büyük pozitif değer, tepkimenin gerçekleşme koşulları hakkında ne düşündürür?",
      "options": [
        "Tepkime hiçbir koşulda gerçekleşemez",
        "Tepkimenin gerçekleşebilmesi için büyük miktarda enerji girişi (örneğin yüksek sıcaklık) gerekebilir",
        "Tepkime kendiliğinden ve hızlı gerçekleşir",
        "Pozitif değer bir hesaplama hatasına işaret eder",
        "Bu değer tepkimenin ekzotermik olduğunu gösterir"
      ],
      "correct": 1,
      "explain": "Büyük pozitif bir ΔH°tepkime değeri, tepkimenin gerçekleşmesi için ürünlerin oluşabilmesine yetecek kadar büyük miktarda enerjinin dışarıdan (örneğin yüksek sıcaklık koşullarında) sağlanması gerektiğini düşündürür."
    },
    {
      "difficulty": "orta",
      "text": "2H2S(g) + 3O2(g) → 2H2O(s) + 2SO2(g) tepkimesinde H2S(g)'nin ΔH°f = -20,7 kJ/mol, H2O(s)'nin ΔH°f = -285,8 kJ/mol, SO2(g)'nin ΔH°f = -296,8 kJ/mol'dür (O2 elementtir, ΔH°f=0). Ürünlerin oluşum entalpileri toplamı kaç kJ'dir?",
      "options": [
        "-1165,2 kJ",
        "+1165,2 kJ",
        "-582,6 kJ",
        "-41,4 kJ",
        "-1123,8 kJ"
      ],
      "correct": 0,
      "explain": "Ürünler: 2 × (-285,8) + 2 × (-296,8) = -571,6 + (-593,6) = -1165,2 kJ."
    },
    {
      "difficulty": "orta",
      "text": "Bir öğrenci standart oluşum entalpisi tablosunda bir bileşiği bulamıyor ve bu bileşiğin ΔH°f değerini tahmin ederek 0 olarak kabul ediyor. Bu yaklaşımın olası sonucu nedir?",
      "options": [
        "Bu yaklaşım her zaman güvenlidir",
        "Bu, yalnızca söz konusu madde gerçekten standart hâldeki bir element ise doğrudur; bir bileşik için bu varsayım hesaplamayı hatalı hâle getirir",
        "ΔH°f değeri tabloda olmayan maddeler hesaplamaya hiç dâhil edilmemelidir",
        "Sonuç her zaman doğru çıkar çünkü tüm maddelerin ΔH°f'i sıfırdır",
        "Bu durum yalnızca gaz hâlindeki bileşikler için sorun yaratır"
      ],
      "correct": 1,
      "explain": "Yalnızca standart hâldeki elementlerin ΔH°f değeri tanım gereği sıfırdır. Bir bileşiğin ΔH°f değerini bilmeden sıfır varsaymak, o bileşiğin gerçek enerji katkısını hesaba katmamak anlamına gelir ve hesaplanan ΔH°tepkime değerini yanlış çıkarır."
    },
    {
      "difficulty": "orta",
      "text": "2H2(g) + O2(g) → 2H2O(g) tepkimesi ile H2(g) + 1/2O2(g) → H2O(g) tepkimesi karşılaştırıldığında, ikinci tepkime birincinin katsayılarının yarısı alınarak elde edilmiştir. Bu iki tepkimenin ΔH°tepkime değerleri arasındaki oran nedir?",
      "options": [
        "Birbirinden tamamen bağımsızdır, herhangi bir oran yoktur",
        "İkinci tepkimenin ΔH°'si, birincinin iki katıdır",
        "Oran yalnızca deneysel olarak belirlenebilir, hesaplanamaz",
        "İki tepkimenin ΔH°'si her zaman eşittir",
        "İkinci tepkimenin ΔH°'si, birincinin tam yarısıdır (-483,6 kJ'nin yarısı -241,8 kJ)"
      ],
      "correct": 4,
      "explain": "Bir tepkimenin tüm katsayıları belirli bir sayıyla çarpılır/bölünürse (burada 1/2 ile), ΔH°tepkime değeri de aynı oranda değişir. 2H2+O2→2H2O tepkimesinin ΔH°'si -483,6 kJ; katsayılar yarıya indirildiğinde ΔH° da yarıya iner: -241,8 kJ."
    },
    {
      "difficulty": "orta",
      "text": "Bir tepkimede tepkenlerden biri element (ΔH°f=0), diğeri ise ΔH°f'i pozitif bir bileşiktir. Ürün ise ΔH°f'i negatif bir bileşiktir. Bu tepkimenin ΔH°tepkime işareti hakkında ne söylenebilir (sayısal değerler olmadan yalnızca eğilim olarak)?",
      "options": [
        "Kesinlikle negatiftir",
        "Kesinlikle pozitiftir",
        "Tepkenlerin toplamı (pozitif + 0) ile ürünün (negatif) değeri arasındaki fark hesaplanmadan kesin işaret söylenemez, ancak ürün negatif tepken pozitifse ekzotermik olma eğilimi güçlüdür",
        "ΔH°tepkime her zaman sıfırdır",
        "Bu bilgiyle hiçbir çıkarım yapılamaz"
      ],
      "correct": 2,
      "explain": "ΔH°tepkime = Ürünler − Tepkenler olduğundan, ürün negatif ve tepkenler toplamı pozitifse (negatif) − (pozitif) işlemi güçlü bir şekilde negatif çıkma eğilimindedir; yani tepkime ekzotermik olma eğilimindedir. Ancak kesin işaret, sayısal değerler hesaplanmadan garanti edilemez."
    },
    {
      "difficulty": "zor",
      "context": "C2H5OH(s)'nin ΔH°f = -235,1 kJ/mol, CO2(g)'nin ΔH°f = -393,5 kJ/mol, H2O(g)'nin ΔH°f = -241,8 kJ/mol'dür (O2 elementtir).",
      "text": "C2H5OH(s) + 3O2(g) → 2CO2(g) + 3H2O(g) tepkimesinin ΔH°tepkime değeri kaç kJ'dir?",
      "options": [
        "-1512,4 kJ",
        "-970,4 kJ",
        "+1277,3 kJ",
        "-1277,3 kJ",
        "-235,1 kJ"
      ],
      "correct": 3,
      "explain": "Ürünler: 2×(-393,5) + 3×(-241,8) = -787,0 + (-725,4) = -1512,4 kJ. Tepkenler: -235,1 + 3×0 = -235,1 kJ. ΔH°tepkime = -1512,4 − (-235,1) = -1277,3 kJ. Etanolün yanması, oluşum entalpisi yöntemiyle hesaplandığında da güçlü bir ekzotermik tepkime olarak çıkar."
    },
    {
      "difficulty": "zor",
      "text": "4NH3(g) + 6NO(g) → 5N2(g) + 6H2O(g) tepkimesinde NH3(g)'nin ΔH°f = -46,1 kJ/mol, NO(g)'nin ΔH°f = +90,3 kJ/mol, H2O(g)'nin ΔH°f = -241,8 kJ/mol'dür (N2 elementtir). Bu tepkimenin ΔH°tepkime değeri kaç kJ'dir?",
      "options": [
        "-1093,4 kJ",
        "-1450,8 kJ",
        "+1808,2 kJ",
        "+357,4 kJ",
        "-1808,2 kJ"
      ],
      "correct": 4,
      "explain": "Ürünler: 5×0 + 6×(-241,8) = -1450,8 kJ. Tepkenler: 4×(-46,1) + 6×(90,3) = -184,4 + 541,8 = +357,4 kJ. ΔH°tepkime = -1450,8 − 357,4 = -1808,2 kJ. Bu, çok büyük ve ekzotermik bir tepkime entalpisidir."
    },
    {
      "difficulty": "zor",
      "statements": {
        "items": [
          "Standart oluşum entalpisi yöntemiyle hesaplanan ΔH°tepkime değeri, aynı tepkime için bağ enerjisi yöntemiyle hesaplanan değere yaklaşık olarak eşit çıkmalıdır, çünkü ikisi de aynı fiziksel gerçekliği farklı yollardan hesaplar.",
          "Bir tepkimenin ΔH°tepkime değeri yalnızca ürünlerin oluşum entalpileri toplamına eşittir, tepkenler hesaba katılmaz.",
          "Katsayısı 1'den farklı olan (örneğin 2, 3, 4 gibi) maddelerin oluşum entalpisi, o katsayıyla çarpılmadan doğrudan toplanabilir."
        ]
      },
      "text": "Bu önermelerden hangileri doğrudur?",
      "options": [
        "I ve III",
        "Yalnız III",
        "I ve II",
        "Yalnız I",
        "I, II ve III"
      ],
      "correct": 3,
      "explain": "I doğrudur; her iki yöntem de tepkimenin gerçek entalpi değişimini farklı hesaplama yollarıyla tahmin ettiğinden sonuçlar birbirine yakın çıkar. II yanlıştır; tepkenlerin oluşum entalpileri de mutlaka çıkarılmalıdır. III yanlıştır; her maddenin katkısı kendi katsayısıyla çarpılarak hesaplanmalıdır."
    },
    {
      "difficulty": "zor",
      "dialogue": {
        "turns": [
          {
            "who": "Öğrenci A",
            "text": "2CH4(g)+N2(g)→HCN(g)+NH3(g) tepkimesinin ΔH°'si +238,8 kJ çıktı; bu tepkime hiç gerçekleşmeyecek demektir."
          },
          {
            "who": "Öğrenci B",
            "text": "Pozitif ΔH, tepkimenin imkânsız olduğu anlamına gelmez; yalnızca tepkimenin gerçekleşmesi için enerji girişi gerektiğini gösterir. Uygun koşullar (örneğin yüksek sıcaklık) sağlanırsa endotermik tepkimeler de gerçekleşebilir."
          }
        ]
      },
      "text": "Bu tartışmaya göre hangi öğrencinin değerlendirmesi bilimsel olarak daha doğrudur?",
      "options": [
        "İkisi de haksızdır",
        "İkisi de aynı derecede haklıdır",
        "Yalnız Öğrenci B",
        "Yalnız Öğrenci A",
        "Verilen bilgiyle karar verilemez"
      ],
      "correct": 2,
      "explain": "Öğrenci B haklıdır. ΔH°tepkime'nin pozitif olması yalnızca tepkimenin endotermik olduğunu, yani gerçekleşmesi için enerji girişi gerektiğini gösterir; bu, tepkimenin imkânsız olduğu anlamına gelmez."
    },
    {
      "difficulty": "zor",
      "text": "Bir araştırmacı iki farklı yoldan aynı ürüne ulaşan iki tepkime dizisi kuruyor: 1. yol tek basamakta ΔH°=-500 kJ veriyor; 2. yol iki basamakta sırasıyla ΔH°1=-300 kJ ve ΔH°2=-200 kJ veriyor. Bu iki yolun toplam ΔH° değerleri karşılaştırıldığında ne beklenir?",
      "options": [
        "Basamak sayısı arttıkça toplam ΔH° de artar",
        "Bu karşılaştırma yapılamaz çünkü basamak sayıları farklıdır",
        "2. yolun toplamı her zaman 1. yoldan daha büyük çıkar",
        "1. yolun ΔH°'si 2. yoldan çok farklı olmalıdır çünkü basamak sayısı farklıdır",
        "İki yolun toplam ΔH°'si eşit olmalıdır (-500 kJ), çünkü entalpi yalnızca başlangıç ve bitiş durumuna bağlı bir büyüklüktür"
      ],
      "correct": 4,
      "explain": "Entalpi bir hâl fonksiyonu olduğundan, aynı başlangıç ve bitiş durumları arasındaki toplam ΔH° değeri, izlenen yoldan (basamak sayısından) bağımsızdır. 2. yolun toplamı (-300)+(-200)=-500 kJ, 1. yolun değeriyle (-500 kJ) tutarlıdır."
    },
    {
      "difficulty": "zor",
      "text": "Bir tablo, X bileşiğinin ΔH°f değerini +5 kJ/mol, Y bileşiğinin ΔH°f değerini -5 kJ/mol olarak veriyor. Bu iki değerin birbirine bu kadar yakın (mutlak değerce eşit ama zıt işaretli) olması hakkında en dikkatli yorum hangisidir?",
      "options": [
        "X ve Y aynı bileşiktir",
        "Bu, yalnızca bir sayısal yakınlıktır; X'in oluşumu hafifçe endotermik, Y'nin oluşumu hafifçe ekzotermiktir, ancak bu tesadüfi yakınlık iki bileşik arasında özel bir kimyasal ilişki olduğu anlamına gelmez",
        "X ve Y birbirinin tam tersi tepkimeleridir",
        "X ve Y'nin molekül ağırlıkları da eşit olmalıdır",
        "Bu değerler mutlaka hatalıdır çünkü birbirine çok yakındır"
      ],
      "correct": 1,
      "explain": "ΔH°f değerlerinin yakınlığı yalnızca sayısal bir gözlemdir; her bileşiğin oluşum entalpisi kendi kimyasal yapısından kaynaklanır. X'in hafifçe endotermik (+5), Y'nin hafifçe ekzotermik (-5) oluşması, aralarında zorunlu bir kimyasal ilişki olduğu anlamına gelmez."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimenin ΔH°tepkime değeri hem bağ enerjisi yöntemiyle hem standart oluşum entalpisi yöntemiyle hesaplanıyor ve iki sonuç birbirine çok yakın (örneğin -674 kJ ve -676 kJ) çıkıyor. Bu küçük farkın en olası nedeni nedir?",
      "options": [
        "Fark, tepkimenin gerçekleşmediğini gösterir",
        "İki yöntem farklı tepkimeler için tasarlanmıştır, karşılaştırılamazlar",
        "Oluşum entalpisi yöntemi hiçbir zaman doğru sonuç vermez",
        "Yöntemlerden biri kesinlikle yanlış uygulanmıştır",
        "Bağ enerjisi tablosundaki değerler farklı moleküllerden elde edilen ortalamalar olduğundan, iki yöntem arasında küçük farklar beklenir"
      ],
      "correct": 4,
      "explain": "Bağ enerjisi tablosundaki değerler birçok farklı molekülden elde edilen ortalama değerlerdir; standart oluşum entalpisi değerleri ise doğrudan deneysel ölçümlerdir. Bu nedenle iki yöntemle hesaplanan ΔH değerleri birbirine yakın ama birebir aynı çıkmayabilir; bu, yöntemlerin doğasından kaynaklanan beklenen bir durumdur."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimenin tersi alındığında (ürünler tepken, tepkenler ürün olduğunda) ΔH°tepkime değeri nasıl değişir? H2(g)+1/2O2(g)→H2O(g) tepkimesi için ΔH°=-241,8 kJ olduğuna göre, H2O(g)→H2(g)+1/2O2(g) tepkimesinin ΔH°tepkime değeri kaç kJ'dir?",
      "options": [
        "-241,8 kJ",
        "+241,8 kJ",
        "+120,9 kJ",
        "-483,6 kJ",
        "0 kJ"
      ],
      "correct": 1,
      "explain": "Bir tepkime tersine çevrildiğinde ürün ve tepken rolleri değiştiği için ΔH°tepkime = Σ(ürünler)−Σ(tepkenler) ifadesindeki terimler yer değiştirir ve işaret tersine döner: -241,8 kJ → +241,8 kJ. Suyun ayrışması, oluşumunun tam tersi olduğundan endotermiktir."
    },
    {
      "difficulty": "zor",
      "text": "Bir kimya öğretmeni öğrencilerine 'yalnızca ΔH°tepkime değerinin büyüklüğüne (mutlak değerine) bakarak bir tepkimenin ne kadar hızlı gerçekleşeceğini söyleyebilir misiniz?' diye soruyor. Bu soruya en doğru yanıt hangisidir?",
      "options": [
        "Hayır, çünkü ΔH°tepkime yalnızca fiziksel değişimler için anlamlıdır",
        "Evet, negatif ΔH her zaman hızlı tepkime anlamına gelir",
        "Evet, ama yalnızca ekzotermik tepkimeler için geçerlidir",
        "Evet, ΔH°tepkime ne kadar büyükse tepkime o kadar hızlı gerçekleşir",
        "Hayır; ΔH°tepkime tepkimenin ne kadar enerji alıp verdiğini gösterir, tepkimenin hızıyla ilgili doğrudan bilgi vermez"
      ],
      "correct": 4,
      "explain": "ΔH°tepkime, bir tepkimenin başlangıç ve bitiş durumları arasındaki enerji farkını gösterir; tepkimenin ne kadar hızlı gerçekleştiği (tepkime hızı) ayrı bir kavramdır ve farklı etkenlere (derişim, sıcaklık, katalizör vb.) bağlıdır. Büyük bir ΔH değeri, tepkimenin hızlı ya da yavaş olacağı konusunda doğrudan bilgi vermez."
    },
    {
      "difficulty": "zor",
      "text": "Bir bileşiğin ΔH°f değeri bilinmiyor ancak bu bileşiğin yer aldığı bir tepkimenin ΔH°tepkime değeri ve tepkimedeki diğer tüm maddelerin ΔH°f değerleri biliniyor. Bilinmeyen ΔH°f değerine nasıl ulaşılabilir?",
      "options": [
        "Bu tür bir hesaplama yalnızca elementler için mümkündür",
        "Bilinmeyen değer asla bulunamaz",
        "Bilinmeyen değer, diğer tüm değerlerin ortalaması alınarak bulunur",
        "Bilinmeyen değer her zaman sıfır kabul edilir",
        "ΔH°tepkime = Σ(ürünler) − Σ(tepkenler) denklemi, bilinmeyen ΔH°f cebirsel olarak yalnız bırakılacak şekilde yeniden düzenlenerek çözülebilir"
      ],
      "correct": 4,
      "explain": "ΔH°tepkime = Σn·ΔH°f(ürünler) − Σn·ΔH°f(tepkenler) denklemi bir cebirsel denklemdir. Bilinmeyen tek değişken bilinmeyen ΔH°f olduğunda, bu denklem bilinmeyen için çözülerek değeri hesaplanabilir."
    },
    {
      "difficulty": "zor",
      "text": "İki farklı tepkimenin ΔH°tepkime değerleri -1277,3 kJ (etanol yanması) ve -1123,8 kJ (hidrojen sülfür yanması) olarak hesaplanmıştır. Bu iki değeri doğrudan karşılaştırıp 'etanol yanması her zaman daha fazla ısı üretir' sonucuna varmak neden dikkatli yapılmalıdır?",
      "options": [
        "Çünkü hidrojen sülfür yanmaz",
        "Çünkü bu değerler yanlış hesaplanmıştır",
        "Çünkü etanol bir element değildir",
        "Çünkü bu değerler tepkime denklemlerinde belirtilen mol miktarları içindir; birim kütle (kJ/g) bazında karşılaştırma yapılmadan hangisinin 'daha verimli' olduğu söylenemez",
        "Bu karşılaştırma her koşulda geçerlidir, dikkatli olmaya gerek yoktur"
      ],
      "correct": 3,
      "explain": "Verilen ΔH°tepkime değerleri, tepkime denklemindeki belirli mol miktarları için geçerlidir (örneğin 1 mol etanol ile 2 mol H2S). Farklı miktarlardaki maddeler için toplam ısıyı karşılaştırmak, tıpkı yakıt karşılaştırmasında olduğu gibi, birim kütle (kJ/g) bazında yapılmadıkça yanıltıcı olabilir."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimenin ΔH°tepkime değeri sıfıra çok yakın (örneğin +2 kJ) çıkıyor. Bu durumda tepkimenin potansiyel enerji-tepkime koordinatı grafiğinde tepken ve ürün enerji düzeyleri nasıl görünür?",
      "options": [
        "Tepken ve ürün enerji düzeyleri birbirine çok yakın (neredeyse aynı yükseklikte) çizilir",
        "Ürün düzeyi tepkenden çok daha yüksekte olur",
        "Grafik çizilemez çünkü ΔH sıfıra yakındır",
        "Tepken düzeyi görünmez",
        "Ürün düzeyi tepkenden çok daha düşükte olur"
      ],
      "correct": 0,
      "explain": "ΔH sıfıra yakın küçük bir değerse, tepken ve ürünlerin potansiyel enerji düzeyleri arasındaki fark da küçüktür; bu yüzden grafikte iki düzey birbirine çok yakın (neredeyse aynı yükseklikte) gösterilir."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimede tepkenlerin oluşum entalpileri toplamı pozitif, ürünlerin oluşum entalpileri toplamı ise daha büyük bir pozitif değer olarak hesaplanmıştır. Bu durumda tepkimenin ΔH°tepkime işareti ve türü nedir?",
      "options": [
        "Negatif, ekzotermik",
        "Negatif, endotermik (çelişkili bir durum)",
        "Sıfır, nötr",
        "İşaret her iki değerin de pozitif olmasından dolayı belirlenemez",
        "Pozitif, endotermik"
      ],
      "correct": 4,
      "explain": "ΔH°tepkime = Ürünler − Tepkenler'dir. Her iki değer de pozitifse ama ürünler tepkenlerden daha büyükse, fark yine pozitif çıkar (örneğin 500−300=+200). Bu durumda tepkime endotermiktir; değerlerin pozitif olması işaretin doğrudan belirlenmesini engellemez, yalnızca fark hesaplanmalıdır."
    },
    {
      "difficulty": "zor",
      "text": "N2(g) + 2O2(g) → 2NO2(g) tepkimesi için NO2(g)'nin ΔH°f = +33,2 kJ/mol olduğuna göre bu tepkimenin ΔH°tepkime değeri kaç kJ'dir? Bu değeri, 1/2N2(g)+O2(g)→NO2(g) tepkimesinin ΔH° değeriyle (+33,2 kJ) karşılaştırınız.",
      "options": [
        "+33,2 kJ; katsayılar ΔH°'yi etkilemez",
        "-66,4 kJ; tepkime ekzotermiktir",
        "+66,4 kJ; verilen tepkimenin katsayıları, tek mol NO2 oluşum tepkimesinin 2 katı olduğundan ΔH° de 2 katına çıkar",
        "+16,6 kJ; katsayılar yarıya iner",
        "0 kJ; azot ve oksijen element olduğundan ΔH° sıfırdır"
      ],
      "correct": 2,
      "explain": "N2(g)+2O2(g)→2NO2(g) tepkimesi, 1/2N2(g)+O2(g)→NO2(g) tepkiminin tüm katsayılarının 2 ile çarpılmasıyla elde edilir. ΔH°tepkime = 2 × (+33,2) = +66,4 kJ. Ürünler açısından da doğrulanabilir: 2×(33,2) − [0+0] = +66,4 kJ."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimenin ΔH°tepkime değeri hem standart oluşum entalpisi yöntemiyle hem de doğrudan kalorimetre ile deneysel olarak ölçülüyor ve iki değer neredeyse birebir örtüşüyor. Bu örtüşme, standart oluşum entalpisi tablosundaki değerler hakkında ne düşündürür?",
      "options": [
        "Bu örtüşme tesadüftür ve hiçbir anlam taşımaz",
        "Standart oluşum entalpisi yöntemi artık kullanılmamalıdır",
        "Tablo değerleri kesinlikle hatalıdır",
        "Kalorimetre ölçümü güvenilmezdir",
        "Tablo değerleri, gerçek deneysel verilerle tutarlı, güvenilir referans değerlerdir"
      ],
      "correct": 4,
      "explain": "Hesaplanan ve deneysel değerlerin örtüşmesi, standart oluşum entalpisi tablosundaki değerlerin dikkatli deneysel ölçümlerden elde edilmiş güvenilir referans değerler olduğunu ve bu yöntemin tepkime entalpisini tahmin etmek için güvenle kullanılabileceğini gösterir."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimede tepkenler A ve B, ürün ise yalnızca C'dir (A + B → C). ΔH°f(A) = -80 kJ/mol, ΔH°f(B) = -40 kJ/mol'dür ve tepkime ekzotermik olup ΔH°tepkime = -60 kJ olarak ölçülmüştür. Buna göre ΔH°f(C) kaç kJ/mol'dür?",
      "options": [
        "-60 kJ/mol",
        "-20 kJ/mol",
        "-180 kJ/mol",
        "-120 kJ/mol",
        "+60 kJ/mol"
      ],
      "correct": 2,
      "explain": "ΔH°tepkime = ΔH°f(C) − [ΔH°f(A) + ΔH°f(B)] eşitliğinden: -60 = ΔH°f(C) − [(-80) + (-40)] = ΔH°f(C) − (-120) = ΔH°f(C) + 120. Buradan ΔH°f(C) = -60 − 120 = -180 kJ/mol bulunur."
    }
  ],
  "m5": [
    {
      "difficulty": "kolay",
      "text": "Bir çarpışmanın 'etkin çarpışma' sayılabilmesi için tanecikler hangi iki koşulu birlikte sağlamalıdır?",
      "options": [
        "Yalnızca yüksek sıcaklıkta olmalıdır",
        "Yalnızca renkli olmalıdır",
        "Uygun geometride (doğru yönelimde) ve yeterli kinetik enerjiyle çarpışmalıdır",
        "Yalnızca aynı fazda (katı/sıvı/gaz) olmalıdır",
        "Yalnızca eşit kütleli olmalıdır"
      ],
      "correct": 2,
      "explain": "Etkin çarpışma, ürün oluşturan çarpışmadır. Bunun için tanecikler hem uygun geometride (doğru yönelimde) hem de yeterli kinetik enerjiyle çarpışmalıdır; bu iki koşuldan biri eksikse ürün oluşmaz."
    },
    {
      "difficulty": "kolay",
      "text": "Tepkimeye giren tanecikler arasındaki her çarpışma ürün oluşturur mu?",
      "options": [
        "Hayır, yalnızca etkin çarpışmalar ürün oluşturur",
        "Yalnızca katı tanecikler arasındaki çarpışmalar ürün oluşturur",
        "Yalnızca gaz fazındaki çarpışmalar ürün oluşturur",
        "Evet, her çarpışma mutlaka ürün oluşturur",
        "Çarpışma ürün oluşumuyla ilgisizdir"
      ],
      "correct": 0,
      "explain": "Her çarpışma ürün oluşturmaz; yalnızca uygun geometride ve yeterli kinetik enerjiyle gerçekleşen etkin çarpışmalar ürün oluşturur."
    },
    {
      "difficulty": "kolay",
      "text": "Tepkimeye giren taneciklerin etkin çarpışma yapabilmesi için sahip olması gereken minimum kinetik enerjiye ne ad verilir?",
      "options": [
        "Bağ enerjisi",
        "Oluşum entalpisi",
        "Tepkime entalpisi",
        "Eşik değeri",
        "Aktivasyon enerjisi"
      ],
      "correct": 3,
      "explain": "Tepkimeye giren taneciklerin etkin çarpışma yapabilmesi için sahip olması gereken minimum kinetik enerjiye eşik değeri (eşik enerjisi) denir."
    },
    {
      "difficulty": "kolay",
      "text": "Bir tepkimenin gerçekleşebilmesi için gereken minimum potansiyel enerjiye ne ad verilir?",
      "options": [
        "Bağ enerjisi",
        "Oluşum entalpisi",
        "Tepkime hızı",
        "Aktivasyon enerjisi",
        "Eşik değeri"
      ],
      "correct": 3,
      "explain": "Bir tepkimenin gerçekleşebilmesi için gereken minimum potansiyel enerjiye aktivasyon enerjisi denir; bu enerji tepkenlerin kinetik enerjilerinden karşılanır."
    },
    {
      "difficulty": "kolay",
      "text": "Tepkenlerin ürünlere dönüşmesine ne ad verilir?",
      "options": [
        "Tersinmez tepkime",
        "İleri tepkime",
        "Katalitik tepkime",
        "Denge tepkimesi",
        "Geri tepkime"
      ],
      "correct": 1,
      "explain": "Tepkenlerin ürünlere dönüşmesine ileri tepkime; ürünlerin tekrar tepkenlere dönüşmesine ise geri tepkime denir."
    },
    {
      "difficulty": "kolay",
      "text": "Tepkime entalpisi (ΔH_tepkime), ileri aktivasyon enerjisi (Eai) ve geri aktivasyon enerjisi (Eag) arasındaki ilişki hangi bağıntıyla ifade edilir?",
      "options": [
        "ΔH = Eai × Eag",
        "ΔH = Eai − Eag",
        "ΔH, Eai ve Eag ile ilişkisizdir",
        "ΔH = Eai + Eag",
        "ΔH = Eag − Eai"
      ],
      "correct": 1,
      "explain": "Tepkime entalpisi, ileri tepkimenin aktivasyon enerjisinden geri tepkimenin aktivasyon enerjisi çıkarılarak hesaplanır: ΔH_tepkime = Eai − Eag."
    },
    {
      "difficulty": "kolay",
      "text": "Endotermik bir tepkimede ileri aktivasyon enerjisi (Eai) ile geri aktivasyon enerjisi (Eag) arasındaki ilişki nasıldır?",
      "options": [
        "Eai ve Eag karşılaştırılamaz",
        "Eag her zaman sıfırdır",
        "Eai = Eag",
        "Eai > Eag",
        "Eai < Eag"
      ],
      "correct": 3,
      "explain": "Endotermik tepkimelerde Eai > Eag'dir; bu durum ΔH = Eai − Eag > 0 sonucunu verir, yani tepkime endotermiktir."
    },
    {
      "difficulty": "kolay",
      "text": "Ekzotermik bir tepkimede ileri aktivasyon enerjisi (Eai) ile geri aktivasyon enerjisi (Eag) arasındaki ilişki nasıldır?",
      "options": [
        "Eai her zaman sıfırdır",
        "Eai = Eag",
        "Eai < Eag",
        "Eai ve Eag karşılaştırılamaz",
        "Eai > Eag"
      ],
      "correct": 2,
      "explain": "Ekzotermik tepkimelerde Eai < Eag'dir; bu durum ΔH = Eai − Eag < 0 sonucunu verir, yani tepkime ekzotermiktir."
    },
    {
      "difficulty": "kolay",
      "text": "Aktivasyon enerjisi büyük olan tepkimeler genellikle nasıl gerçekleşir?",
      "options": [
        "Hiç gerçekleşmez",
        "Anlık olarak",
        "Genellikle yavaş",
        "Çok hızlı",
        "Tersinmez biçimde"
      ],
      "correct": 2,
      "explain": "Aktivasyon enerjisi büyük olan tepkimelerde, taneciklerin bu yüksek enerji eşiğini aşabilmesi zor olduğundan tepkime genellikle yavaş gerçekleşir."
    },
    {
      "difficulty": "kolay",
      "text": "Kimyasal tepkimelerin gerçekleşebilmesi için ortamın hangi özelliklerinin uygun olması gerekir?",
      "options": [
        "pH, sıcaklık ve basınç gibi çevresel koşullar",
        "Yalnızca hacmi",
        "Yalnızca kokusu",
        "Yalnızca rengi",
        "Ortam koşulları tepkimeyi etkilemez"
      ],
      "correct": 0,
      "explain": "Kimyasal tepkimelerin gerçekleşebilmesi için ortamın pH, sıcaklık ve basınç gibi değişkenlerinin uygun olması gerekir; rüzgâr hızı, nem oranı, güneş ışığı gibi etkenler de tepkimeleri etkileyebilir."
    },
    {
      "difficulty": "kolay",
      "text": "Demirin paslanma tepkimesi nem varlığında neden hızlanır?",
      "options": [
        "Nem, elektrokimyasal paslanma süreci için gereken iyonların taşınmasını sağlar",
        "Nem, demiri oksijenden korur",
        "Nemin paslanma hızıyla ilgisi yoktur",
        "Nem, demirin rengini değiştirir",
        "Nem, oksijeni ortamdan uzaklaştırır"
      ],
      "correct": 0,
      "explain": "Nem, demir ile oksijen arasındaki elektrokimyasal paslanma süreci için gereken iyonların taşınmasını sağladığından paslanmayı hızlandırır."
    },
    {
      "difficulty": "kolay",
      "text": "NO(g) + O3(g) → NO2(g) + O2(g) tepkimesinde çarpışma uygun geometride gerçekleşmezse ne olur?",
      "options": [
        "Ürün her zaman oluşur",
        "Ürün oluşmaz",
        "Yalnızca NO2 oluşur",
        "Tepkime hızlanır",
        "Tepkime tersine döner"
      ],
      "correct": 1,
      "explain": "Çarpışma uygun geometride gerçekleşmezse taneciklerdeki bağların kırılıp yeniden düzenlenmesi mümkün olmaz, bu yüzden ürün (NO2 ve O2) oluşmaz."
    },
    {
      "difficulty": "kolay",
      "text": "Orman yangınlarındaki temel yanma tepkimesinde organik maddeler (ağaç, yaprak vb.) atmosferdeki hangi gazla hızlı biçimde tepkimeye girer?",
      "options": [
        "Oksijen (O2)",
        "Hidrojen (H2)",
        "Azot (N2)",
        "Karbon dioksit (CO2)",
        "Argon (Ar)"
      ],
      "correct": 0,
      "explain": "Orman yangınlarında organik maddeler atmosferdeki oksijen (O2) ile hızlı bir şekilde tepkimeye girerek karbon dioksit, su buharı ve enerji açığa çıkarır."
    },
    {
      "difficulty": "kolay",
      "text": "Bir roket motorunda yakıt olarak hidrazin (N2H4), yakıcı (oksitleyici) olarak diazot tetraoksit (N2O4) kullanılan tepkime 1168 kJ ısı açığa çıkarmaktadır. Bu tepkime hangi türdedir?",
      "options": [
        "Tersinmez ama ısı alışverişsizdir",
        "Ekzotermik",
        "Isı alışverişi yapmaz",
        "Yalnızca fiziksel bir değişimdir",
        "Endotermik"
      ],
      "correct": 1,
      "explain": "Tepkime sonucunda 1168 kJ ısı açığa çıktığı belirtildiğinden bu tepkime ekzotermiktir; roket motorunda gereken yüksek ısı ve hızlı egzoz gazı bu ekzotermik tepkimeyle elde edilir."
    },
    {
      "difficulty": "kolay",
      "text": "Kinetik enerjisi eşik değerinin altında olan iki tanecik çarpışırsa ne olması beklenir?",
      "options": [
        "Çarpışma kesinlikle etkin çarpışma sayılır",
        "Taneciklerdeki bağların kırılması olası değildir, ürün oluşmaz",
        "Taneciklerdeki bağların kırılması ve ürün oluşması beklenir",
        "Tanecikler birleşerek yeni bir element oluşturur",
        "Bu durumda tepkime tersine döner"
      ],
      "correct": 1,
      "explain": "Kinetik enerjisi eşik değerinin altında olan taneciklerin çarpışması sonucunda bağların kırılması olası değildir; bu yüzden ürün oluşmaz, çarpışma etkin değildir."
    },
    {
      "difficulty": "kolay",
      "text": "Aktivasyon enerjisi, tepkimeye giren taneciklerin hangi enerji türünden karşılanır?",
      "options": [
        "Bağ enerjilerinden",
        "Potansiyel enerjilerinden",
        "Işık enerjisinden her zaman",
        "Kinetik enerjilerinden",
        "Kimyasal enerjilerinden değil, dışarıdan verilen ısıdan"
      ],
      "correct": 3,
      "explain": "Aktivasyon enerjisi, çarpışan taneciklerin kinetik enerjilerinden karşılanır; çarpışma sırasında bu kinetik enerji, bağların kırılmasına yol açarak taneciklerin potansiyel enerjisini değiştirir."
    },
    {
      "difficulty": "kolay",
      "text": "Potansiyel enerji-tepkime koordinatı grafiği temel olarak neyi gösterir?",
      "options": [
        "Tepkenlerin ve ürünlerin enerji düzeylerini ve birbirlerine dönüşebilmeleri için aşmaları gereken enerji engelini",
        "Yalnızca tepkimenin kütle korunumunu",
        "Tepkimede kullanılan katalizör miktarını",
        "Yalnızca tepkimenin süresini",
        "Yalnızca tepkimenin renk değişimini"
      ],
      "correct": 0,
      "explain": "Potansiyel enerji-tepkime koordinatı grafiği, tepkenlerin ve ürünlerin enerji düzeylerini ve aralarındaki dönüşüm için aşılması gereken enerji engelini (aktivasyon enerjisini) görselleştirir."
    },
    {
      "difficulty": "orta",
      "statements": {
        "items": [
          "Kinetik enerjisi eşik değerine eşit ya da eşik değerinden büyük olan tanecikler etkin çarpışma yapabilir.",
          "Uygun geometride ama düşük kinetik enerjili bir çarpışma her zaman ürün oluşturur.",
          "Aktivasyon enerjisi, tepkenlerin kinetik enerjilerinden karşılanan bir potansiyel enerji engelidir."
        ]
      },
      "text": "Verilen önermelerden hangileri doğrudur?",
      "options": [
        "I, II ve III",
        "Yalnız I",
        "Yalnız II",
        "I ve III",
        "II ve III"
      ],
      "correct": 3,
      "explain": "I doğrudur; eşik değerine eşit ya da üstünde kinetik enerjiye sahip tanecikler etkin çarpışma yapabilir. II yanlıştır; geometri uygun olsa da kinetik enerji yetersizse bağlar kırılamaz, ürün oluşmaz. III doğrudur; aktivasyon enerjisi, kinetik enerjinin bağları kırmak için kullanılmasıyla aşılan bir potansiyel enerji engelidir."
    },
    {
      "difficulty": "orta",
      "dialogue": {
        "turns": [
          {
            "who": "Öğrenci A",
            "text": "Bir tepkimenin aktivasyon enerjisi büyükse bu tepkime kesinlikle gerçekleşmez."
          },
          {
            "who": "Öğrenci B",
            "text": "Gerçekleşmez demek doğru değil; büyük aktivasyon enerjisi yalnızca tepkimenin daha yavaş gerçekleşeceğini gösterir, imkânsız olduğunu değil."
          }
        ]
      },
      "text": "Bu tartışmaya göre hangi öğrenci bilimsel olarak haklıdır?",
      "options": [
        "Yalnız Öğrenci B",
        "İkisi de haklıdır",
        "Verilen bilgiyle karar verilemez",
        "Yalnız Öğrenci A",
        "İkisi de haksızdır"
      ],
      "correct": 0,
      "explain": "Öğrenci B haklıdır. Büyük aktivasyon enerjisi, tepkimenin gerçekleşmesinin zor ve yavaş olacağını gösterir; ancak yeterli kinetik enerjiye sahip tanecikler varsa (örneğin yüksek sıcaklıkta) tepkime yine de gerçekleşebilir."
    },
    {
      "difficulty": "orta",
      "matchPairs": {
        "leftHeader": "Kavram",
        "rightHeader": "Tanım",
        "pairs": [
          [
            "Eşik değeri",
            "Etkin çarpışma için gereken minimum kinetik enerji"
          ],
          [
            "Aktivasyon enerjisi",
            "Tepkimenin gerçekleşmesi için gereken minimum potansiyel enerji"
          ],
          [
            "Etkin çarpışma",
            "Uygun geometride ve yeterli enerjiyle gerçekleşen, ürün oluşturan çarpışma"
          ]
        ]
      },
      "text": "Yukarıdaki eşleştirmeye göre bir tanecik kinetik enerji açısından yeterli olsa bile ürün oluşmaması hangi durumdan kaynaklanabilir?",
      "options": [
        "Çarpışmanın uygun geometride gerçekleşmemesinden",
        "Tepkimenin ekzotermik olmasından",
        "Eşik değerinin negatif olmasından",
        "Aktivasyon enerjisinin sıfır olmasından",
        "Kinetik enerjinin çok yüksek olmasından"
      ],
      "correct": 0,
      "explain": "Kinetik enerji yeterli olsa bile çarpışma uygun geometride (doğru yönelimde) gerçekleşmezse taneciklerdeki bağlar doğru şekilde etkileşemez ve ürün oluşmaz; etkin çarpışma için her iki koşulun birlikte sağlanması gerekir."
    },
    {
      "difficulty": "orta",
      "checklist": {
        "items": [
          "Endotermik bir tepkimede ileri aktivasyon enerjisi geri aktivasyon enerjisinden büyüktür.",
          "Ekzotermik bir tepkime başladıktan sonra kendiliğinden devam edebilir.",
          "Ortam sıcaklığı, basıncı ve pH değeri tepkimelerin gerçekleşmesini etkileyebilir."
        ]
      },
      "text": "Yukarıdaki ifadelerden kaç tanesi doğrudur?",
      "options": [
        "2",
        "0",
        "1",
        "3",
        "Verilenlerle belirlenemez"
      ],
      "correct": 3,
      "explain": "Üç ifade de doğrudur: endotermik tepkimede Eai>Eag'dir; ekzotermik tepkimeler genellikle kendi ürettikleri enerjiyle kendiliğinden devam edebilir; ve ortam koşulları (sıcaklık, basınç, pH) tepkimelerin gerçekleşmesini etkiler."
    },
    {
      "difficulty": "orta",
      "table": {
        "headers": [
          "Tepkime Türü",
          "Eai – Eag İlişkisi",
          "ΔH İşareti",
          "Kararlı Taraf"
        ],
        "rows": [
          [
            "Endotermik",
            "Eai > Eag",
            "ΔH > 0",
            "Tepkenler"
          ],
          [
            "Ekzotermik",
            "Eai < Eag",
            "ΔH < 0",
            "Ürünler"
          ]
        ]
      },
      "text": "Tabloya göre bir tepkimede ürünler tepkenlerden daha kararlıysa bu tepkime hakkında ne söylenebilir?",
      "options": [
        "Tepkime hakkında bilgi edinilemez",
        "Tepkime endotermiktir, Eai < Eag'dir",
        "Tepkime endotermiktir, Eai > Eag'dir",
        "ΔH sıfırdır",
        "Tepkime ekzotermiktir, Eai < Eag'dir"
      ],
      "correct": 4,
      "explain": "Tabloya göre ürünlerin tepkenlerden daha kararlı olduğu durum ekzotermik tepkimeye karşılık gelir; bu durumda Eai < Eag'dir ve ΔH < 0'dır."
    },
    {
      "difficulty": "orta",
      "text": "Bir tepkimede tanecikler arasındaki çarpışma sayısı artırılıyor ama taneciklerin ortalama kinetik enerjisi değiştirilmiyor. Bu durumda etkin çarpışma sayısı hakkında ne beklenir?",
      "options": [
        "Bu durumda hiçbir çarpışma etkin olamaz",
        "Etkin çarpışma tamamen ortadan kalkar",
        "Etkin çarpışma sayısı artar, çünkü daha fazla çarpışmadan bazıları etkin çarpışma koşullarını sağlayabilir",
        "Etkin çarpışma sayısı azalır",
        "Etkin çarpışma sayısı değişmez, çünkü yalnızca kinetik enerji önemlidir"
      ],
      "correct": 2,
      "explain": "Toplam çarpışma sayısı artarsa, aynı oranda etkin çarpışma koşullarını (uygun geometri + yeterli kinetik enerji) sağlayan çarpışmaların sayısı da artar; bu, tepkimenin daha hızlı ilerlemesine katkıda bulunur."
    },
    {
      "difficulty": "orta",
      "context": "Bir roket motorunda yükseklik arttıkça atmosferdeki oksijen derişimi azalır.",
      "text": "Atmosferdeki oksijen derişiminin azalması, oksijenle gerçekleşen bir tepkimedeki etkin çarpışma sayısını nasıl etkiler?",
      "options": [
        "Etkin çarpışma sayısını artırır, çünkü daha az tanecik daha kolay çarpışır",
        "Etkin çarpışma sayısı yalnızca sıcaklığa bağlıdır, derişimden etkilenmez",
        "Etkin çarpışma sayısını azaltır, çünkü ortamdaki oksijen taneciği sayısı azaldıkça toplam çarpışma olasılığı da azalır",
        "Etkin çarpışma sayısını etkilemez",
        "Oksijen derişimi etkin çarpışmayla ilgisizdir"
      ],
      "correct": 2,
      "explain": "Ortamdaki oksijen tanecik sayısı (derişimi) azaldıkça, oksijen tanecikleriyle gerçekleşecek toplam çarpışma sayısı da azalır; bu da etkin çarpışma sayısının azalmasına yol açar. Bu nedenle roketler yükseklerde yakıtla birlikte kendi oksitleyicilerini taşır."
    },
    {
      "difficulty": "orta",
      "text": "Bir tepkimenin ileri aktivasyon enerjisi 120 kJ, geri aktivasyon enerjisi 80 kJ olarak ölçülüyor. Bu tepkimenin ΔH_tepkime değeri kaç kJ'dir ve tepkime türü nedir?",
      "options": [
        "-40 kJ, ekzotermik",
        "+200 kJ, endotermik",
        "0 kJ, nötr",
        "+40 kJ, endotermik",
        "-200 kJ, ekzotermik"
      ],
      "correct": 3,
      "explain": "ΔH_tepkime = Eai − Eag = 120 − 80 = +40 kJ. Değer pozitif olduğu için tepkime endotermiktir; bu aynı zamanda Eai>Eag ilişkisiyle de tutarlıdır."
    },
    {
      "difficulty": "orta",
      "text": "Bir tepkimenin ileri aktivasyon enerjisi 60 kJ, geri aktivasyon enerjisi 150 kJ olarak ölçülüyor. Bu tepkimenin ΔH_tepkime değeri kaç kJ'dir ve tepkime türü nedir?",
      "options": [
        "-90 kJ, ekzotermik",
        "+90 kJ, endotermik",
        "+210 kJ, endotermik",
        "0 kJ, nötr",
        "-210 kJ, ekzotermik"
      ],
      "correct": 0,
      "explain": "ΔH_tepkime = Eai − Eag = 60 − 150 = -90 kJ. Değer negatif olduğu için tepkime ekzotermiktir; bu aynı zamanda Eai<Eag ilişkisiyle de tutarlıdır."
    },
    {
      "difficulty": "orta",
      "text": "Fosgen gazı (COCl2), güneş ışığı varlığında CO(g) + Cl2(g) → COCl2(g) tepkimesine göre sentezlenebilmektedir. Güneş ışığının bu tepkimede oynadığı rol için en makul açıklama hangisidir?",
      "options": [
        "Güneş ışığı tepkimenin ürününü değiştirir",
        "Güneş ışığı tepkimeyi tamamen durdurur",
        "Güneş ışığı, taneciklere gereken aktivasyon enerjisinin sağlanmasına katkıda bulunan bir enerji kaynağı olabilir",
        "Güneş ışığının tepkimeyle hiçbir ilgisi yoktur",
        "Güneş ışığı yalnızca rengi değiştirir"
      ],
      "correct": 2,
      "explain": "Bazı tepkimelerin gerçekleşmesi için gereken aktivasyon enerjisi ışık enerjisiyle sağlanabilir; güneş ışığı burada taneciklere enerji aktararak tepkimenin başlamasına katkıda bulunan bir etken olarak değerlendirilebilir."
    },
    {
      "difficulty": "orta",
      "text": "Bir kimyager, iki farklı tepkimenin eşik değerlerini karşılaştırıyor: A tepkimesinin eşik değeri düşük, B tepkimesinin eşik değeri yüksektir. Aynı taneciklerin kinetik enerji dağılımı için hangi tepkimede etkin çarpışma yapabilecek tanecik oranı daha fazladır?",
      "options": [
        "B tepkimesinde, çünkü eşik değeri yüksektir",
        "A tepkimesinde, çünkü daha düşük bir eşik değerini aşan tanecik oranı daha fazladır",
        "Bu bilgiyle karşılaştırma yapılamaz",
        "Eşik değeri etkin çarpışma oranını etkilemez",
        "İkisinde de aynıdır"
      ],
      "correct": 1,
      "explain": "Eşik değeri düşük olan bir tepkimede, kinetik enerji dağılımındaki taneciklerin daha büyük bir kısmı bu düşük eşiği aşabilir; bu yüzden A tepkimesinde etkin çarpışma yapabilecek tanecik oranı daha fazladır."
    },
    {
      "difficulty": "orta",
      "text": "Bir tepkimenin potansiyel enerji-tepkime koordinatı grafiğinde tepkenler ile ürünler arasındaki 'tepe nokta' (en yüksek enerji noktası) neyi temsil eder?",
      "options": [
        "Tepkimenin başlangıç noktasını",
        "Katalizörün etkisini",
        "Tepkimenin hızını doğrudan sayısal olarak",
        "Tepkimenin son ürününü",
        "Tepkenlerin ve ürünlerin geçmesi gereken en yüksek enerjili ara durumu (aktivasyon enerjisi zirvesini)"
      ],
      "correct": 4,
      "explain": "Grafikteki tepe nokta, tepkenlerin ürünlere (veya tam tersi) dönüşebilmesi için aşmaları gereken en yüksek enerjili ara durumu temsil eder; bu noktanın tepken/ürün düzeylerine göre yüksekliği aktivasyon enerjilerini (Eai, Eag) verir."
    },
    {
      "difficulty": "orta",
      "text": "Bir öğrenci 'geometri uygun değilse kinetik enerji ne kadar yüksek olursa olsun ürün oluşmaz' diyor. Bu ifade için en doğru değerlendirme hangisidir?",
      "options": [
        "Yanlıştır; kinetik enerji yeterince yüksekse geometri önemsizdir",
        "Doğrudur; etkin çarpışma için her iki koşulun (uygun geometri VE yeterli kinetik enerji) birlikte sağlanması gerekir",
        "Yanlıştır; yalnızca kinetik enerji önemlidir, geometri gereksizdir",
        "Doğrudur ama yalnızca gaz fazındaki tepkimeler için geçerlidir",
        "Bu konuda genel bir kural yoktur"
      ],
      "correct": 1,
      "explain": "İfade doğrudur. Etkin çarpışma tanımı gereği hem uygun geometri hem yeterli kinetik enerji birlikte sağlanmalıdır; taneciklerin kinetik enerjisi çok yüksek olsa bile yanlış yönelimde çarpışıyorlarsa bağlar doğru şekilde etkileşemez ve ürün oluşmaz."
    },
    {
      "difficulty": "orta",
      "text": "Ekzotermik bir tepkimede 'tepkime başladıktan sonra kendiliğinden devam edebilir' ifadesi hangi gözlemle açıklanabilir?",
      "options": [
        "Açığa çıkan ısı, tepkimenin devamı için gereken aktivasyon enerjisinin bir kısmını karşılayarak sonraki çarpışmaları destekleyebilir",
        "Ekzotermik tepkimelerde aktivasyon enerjisi sıfırdır",
        "Tepkime dışarıdan sürekli enerji almadan devam edemez",
        "Ekzotermik tepkimeler asla kendiliğinden durmaz",
        "Bu ifade yalnızca katalizörlü tepkimeler için geçerlidir"
      ],
      "correct": 0,
      "explain": "Ekzotermik bir tepkimede açığa çıkan ısı, komşu taneciklerin kinetik enerjisini artırarak onların da eşik değerini aşmasına ve etkin çarpışma yapmasına katkıda bulunabilir; bu, tepkimenin dışarıdan sürekli enerji verilmeden kendiliğinden ilerlemesini açıklar (örneğin demir-kükürt tepkimesinde görüldüğü gibi)."
    },
    {
      "difficulty": "orta",
      "text": "Bir tepkimenin gerçekleşmesi için gereken ortam koşulları (pH, sıcaklık, basınç) uygun değilse ne beklenir?",
      "options": [
        "Tepkime türü (endo/ekzotermik) değişir",
        "Tepkimenin gerçekleşmesi engellenebilir veya önemli ölçüde yavaşlayabilir",
        "Aktivasyon enerjisi otomatik olarak sıfırlanır",
        "Tepkime her koşulda aynı hızda gerçekleşir",
        "Ortam koşullarının tepkimeyle hiçbir ilgisi yoktur"
      ],
      "correct": 1,
      "explain": "Uygun olmayan pH, sıcaklık veya basınç koşulları taneciklerin etkin çarpışma yapma olasılığını azaltabilir; bu da tepkimenin gerçekleşmesini engelleyebilir ya da önemli ölçüde yavaşlatabilir."
    },
    {
      "difficulty": "orta",
      "text": "Bir öğretmen sınıfa 'ekzotermik tepkimeler her zaman kendiliğinden ve hızlı gerçekleşir' önermesini tartışmaya açıyor. Demirin paslanması ekzotermik olduğu hâlde çok yavaş ilerlediğine göre bu önerme için ne söylenebilir?",
      "options": [
        "Önerme doğrudur, paslanma bir istisnadır ve göz ardı edilmelidir",
        "Paslanma aslında endotermiktir, bu yüzden önerme etkilenmez",
        "Hız ve ısı alışverişi yönü arasında hiçbir zaman ilişki yoktur",
        "Önerme yalnızca gaz tepkimeleri için geçerlidir",
        "Önerme yanlıştır; bir tepkimenin ekzotermik olması (ΔH<0) ile hızlı gerçekleşmesi farklı kavramlardır, paslanma gibi yüksek aktivasyon enerjili ekzotermik tepkimeler yavaş ilerleyebilir"
      ],
      "correct": 4,
      "explain": "Bir tepkimenin ekzotermik olması yalnızca ürünlerin tepkenlerden daha düşük enerjili olduğunu (ΔH<0) gösterir; tepkimenin hızı ise aktivasyon enerjisine bağlıdır. Paslanma ekzotermik olsa da göreli olarak yüksek bir enerji engeline sahip olduğundan yavaş ilerler."
    },
    {
      "difficulty": "orta",
      "text": "Bir tepkimenin kinetik enerji dağılım eğrisinde eşik değeri işaretleniyor. Eğrinin eşik değerinin SOLUNDA kalan (daha düşük enerjili) taneciklerle ilgili en doğru ifade hangisidir?",
      "options": [
        "Bu tanecikler tepkimeye hiç katılmaz, ortamda hiç bulunmazlar",
        "Bu tanecikler etkin çarpışma yapabilir",
        "Bu taneciklerin kinetik enerjisi eşik değerinin altında olduğundan, çarpıştıklarında bağları kıramazlar ve ürün oluşturamazlar",
        "Bu tanecikler yalnızca katalizör varlığında etkin çarpışma yapabilir",
        "Bu taneciklerin sayısı sıcaklıktan etkilenmez"
      ],
      "correct": 2,
      "explain": "Eşik değerinin solunda kalan tanecikler, etkin çarpışma için gereken minimum kinetik enerjiye sahip değildir; bu yüzden çarpıştıklarında taneciklerdeki bağları kıracak enerjiye sahip olmadıklarından ürün oluşturamazlar."
    },
    {
      "difficulty": "zor",
      "statements": {
        "items": [
          "Bir tepkimenin aktivasyon enerjisi negatif olamaz; en düşük değeri sıfıra yaklaşabilir ama tanım gereği bir enerji engelidir.",
          "İleri aktivasyon enerjisi ile geri aktivasyon enerjisi arasındaki fark, o tepkimenin hızını doğrudan sayısal olarak belirler.",
          "Aynı tepkimenin ileri ve geri yönleri farklı aktivasyon enerjilerine sahip olabilir, ancak aynı 'tepe noktasını' (aynı geçiş durumunu) paylaşırlar."
        ]
      },
      "text": "Bu önermelerden hangileri doğrudur?",
      "options": [
        "II ve III",
        "I, II ve III",
        "Yalnız I",
        "I ve III",
        "Yalnız III"
      ],
      "correct": 3,
      "explain": "I doğrudur; aktivasyon enerjisi bir enerji engelidir ve negatif olamaz. II yanlıştır; Eai−Eag farkı tepkime entalpisini (ΔH) verir, tepkime hızını doğrudan sayısal olarak belirlemez (hız ayrı etkenlere bağlıdır). III doğrudur; potansiyel enerji-tepkime koordinatı grafiğinde tek bir tepe noktası hem ileri hem geri tepkime için ortak geçiş durumunu temsil eder, yalnızca hangi taraftan ölçüldüğüne göre Eai ya da Eag farklı çıkar."
    },
    {
      "difficulty": "zor",
      "dialogue": {
        "turns": [
          {
            "who": "Öğrenci A",
            "text": "Bir tepkimenin ΔH'si negatifse (ekzotermikse) bu tepkime aktivasyon enerjisine hiç ihtiyaç duymaz, kendiliğinden başlar."
          },
          {
            "who": "Öğrenci B",
            "text": "Yanlış olabilir; ΔH'nin işareti yalnızca tepken-ürün enerji farkını gösterir. Ekzotermik bir tepkime de başlaması için bir miktar aktivasyon enerjisine ihtiyaç duyabilir, örneğin bir kibritin yanması için önce çakılması gerekir."
          }
        ]
      },
      "text": "Bu tartışmaya göre hangi öğrencinin görüşü bilimsel olarak daha doğrudur?",
      "options": [
        "Verilen bilgiyle karar verilemez",
        "İkisi de haklıdır",
        "Yalnız Öğrenci A",
        "İkisi de haksızdır",
        "Yalnız Öğrenci B"
      ],
      "correct": 4,
      "explain": "Öğrenci B haklıdır. ΔH'nin negatif olması tepkimenin ekzotermik olduğunu gösterir ama aktivasyon enerjisine hiç ihtiyaç duyulmadığı anlamına gelmez; birçok ekzotermik tepkime (örneğin yanma tepkimeleri) başlaması için dışarıdan bir miktar başlangıç enerjisi (kıvılcım, ısıtma vb.) gerektirir."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimede Eai = 200 kJ, ΔH_tepkime = -150 kJ olarak veriliyor. Bu tepkimenin Eag değeri kaç kJ'dir?",
      "options": [
        "150 kJ",
        "-350 kJ",
        "50 kJ",
        "350 kJ",
        "200 kJ"
      ],
      "correct": 3,
      "explain": "ΔH = Eai − Eag eşitliğinden: -150 = 200 − Eag. Buradan Eag = 200 − (-150) = 350 kJ bulunur. Eag'nin Eai'den büyük olması (350>200), tepkimenin ekzotermik olmasıyla (Eai<Eag) tutarlıdır."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimede Eag = 90 kJ, ΔH_tepkime = +45 kJ olarak veriliyor. Bu tepkimenin Eai değeri kaç kJ'dir?",
      "options": [
        "90 kJ",
        "-45 kJ",
        "135 kJ",
        "45 kJ",
        "180 kJ"
      ],
      "correct": 2,
      "explain": "ΔH = Eai − Eag eşitliğinden: +45 = Eai − 90. Buradan Eai = 45 + 90 = 135 kJ bulunur. Eai'nin Eag'den büyük olması (135>90), tepkimenin endotermik olmasıyla (Eai>Eag) tutarlıdır."
    },
    {
      "difficulty": "zor",
      "text": "Bir araştırmacı aynı iki tepken kullanılan iki farklı tepkime yolunu karşılaştırıyor: 1. yolda aktivasyon enerjisi çok yüksek, 2. yolda (bir katalizör kullanılarak) aktivasyon enerjisi daha düşük. Her iki yolun da aynı ürünlere ve aynı ΔH değerine sahip olduğu biliniyor. Bu bilgiye dayanarak en doğru çıkarım hangisidir?",
      "options": [
        "Katalizör kullanımı tepkimenin türünü (endo/ekzotermik) değiştirir",
        "İki yol karşılaştırılamaz çünkü aktivasyon enerjileri farklıdır",
        "Düşük aktivasyon enerjili yol daha az ürün verir",
        "İki yolun ΔH değeri farklı olmalıdır çünkü aktivasyon enerjileri farklıdır",
        "Aktivasyon enerjisindeki fark tepkimenin hızını etkileyebilir, ancak ΔH yalnızca başlangıç ve bitiş enerji düzeylerine bağlı olduğundan iki yolda da aynı kalır"
      ],
      "correct": 4,
      "explain": "ΔH, yalnızca tepkenlerin ve ürünlerin başlangıç ve bitiş enerji düzeylerine bağlı bir büyüklüktür; izlenen yoldan (dolayısıyla aktivasyon enerjisinden) bağımsızdır. Aktivasyon enerjisindeki fark yalnızca tepkimenin hızını etkiler, ΔH aynı kalır."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimede taneciklerin kinetik enerji dağılım eğrisi biliniyor ve eşik değerinin sağındaki alan (etkin çarpışma yapabilecek tanecik oranı) çok küçük çıkıyor. Buna karşın tepkime hâlâ gözle görülür bir hızda ilerliyor. Bu durum için en makul açıklama hangisidir?",
      "options": [
        "Bu durum imkânsızdır, dağılım eğrisiyle çelişir",
        "Ortamda çok büyük sayıda tanecik bulunduğunda, oranı küçük olsa bile eşik değerini aşan mutlak tanecik sayısı yine de gözle görülür bir tepkime hızı için yeterli olabilir",
        "Bu durumda tepkime aslında hiç gerçekleşmemektedir",
        "Eşik değeri bu durumda geçersizdir",
        "Tepkime hızı yalnızca oranla belirlenir, tanecik sayısından etkilenmez"
      ],
      "correct": 1,
      "explain": "Kimyasal miktarlardaki (mol mertebesindeki) tanecik sayıları o kadar büyüktür ki (Avogadro sayısı mertebesinde), dağılım eğrisinin eşik değerini aşan kısmı oransal olarak küçük görünse bile, bu kısma karşılık gelen mutlak tanecik sayısı yine de gözle görülür bir tepkime hızını sağlamaya yetebilir."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimenin PE-tepkime koordinatı grafiğinde tepe noktası ile tepkenlerin enerji düzeyi arasındaki fark 180 kJ, tepe noktası ile ürünlerin enerji düzeyi arasındaki fark 60 kJ olarak ölçülüyor. Bu tepkimenin türü ve ΔH değeri nedir?",
      "options": [
        "Nötr, ΔH=0 kJ",
        "Ekzotermik, ΔH=-240 kJ",
        "Endotermik, ΔH=+240 kJ",
        "Ekzotermik, ΔH=-120 kJ",
        "Endotermik, ΔH=+120 kJ"
      ],
      "correct": 4,
      "explain": "Tepe ile tepkenler arasındaki fark Eai=180 kJ, tepe ile ürünler arasındaki fark Eag=60 kJ'dir. ΔH_tepkime = Eai − Eag = 180 − 60 = +120 kJ. Ürünün tepeye tepkenden daha yakın olması (60<180), ürünün tepkenden daha yüksek enerjili olduğunu gösterir; bu da tepkimenin endotermik olduğunu doğrular."
    },
    {
      "difficulty": "zor",
      "text": "Bir kimyager, X tepkimesinin oda sıcaklığında son derece yavaş, neredeyse gözlemlenemeyecek kadar yavaş ilerlediğini, ancak termodinamik hesaplamalara göre ΔH_tepkime'nin çok negatif (-400 kJ gibi) olduğunu buluyor. Bu durum nasıl açıklanabilir?",
      "options": [
        "Bu durum imkânsızdır; ΔH çok negatifse tepkime her zaman hızlı olmalıdır",
        "Tepkimenin çok negatif bir ΔH'ye sahip olması onun kendiliğinden enerjik olarak uygun olduğunu gösterir, ancak yüksek bir aktivasyon enerjisi (Eai) varsa oda sıcaklığında bu engeli aşan tanecik oranı çok düşük kalabilir ve tepkime yavaş ilerler",
        "Yavaş tepkimeler her zaman düşük ΔH değerine sahiptir",
        "Bu tepkime aslında endotermiktir, hesaplama hatalıdır",
        "ΔH negatifse aktivasyon enerjisi otomatik olarak sıfırdır"
      ],
      "correct": 1,
      "explain": "ΔH_tepkime (termodinamik bir büyüklük) ile tepkime hızı (kinetik bir büyüklük) birbirinden bağımsızdır. Çok negatif bir ΔH, tepkimenin enerjik olarak uygun (nihayetinde gerçekleşmesi olası) olduğunu gösterir, ancak yüksek bir aktivasyon enerjisi varsa oda sıcaklığında bu engeli aşabilecek tanecik oranı çok düşük kalır ve tepkime gözle görülür ölçüde yavaş ilerler. Elmasın grafite dönüşümü bu duruma örnek olarak düşünülebilir."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimede sıcaklık artırıldığında, taneciklerin ortalama kinetik enerjisi artar ve kinetik enerji dağılım eğrisi sağa doğru kayar. Bu durumun eşik değerini aşan tanecik oranına etkisi nedir?",
      "options": [
        "Eşik değerinin kendisi sıcaklıkla birlikte artar",
        "Sıcaklık, kinetik enerji dağılımını etkilemez",
        "Eşik değerini aşan tanecik oranı değişmez",
        "Eşik değerini aşan tanecik oranı azalır",
        "Eşik değerini aşan tanecik oranı artar, çünkü dağılımın daha büyük bir kısmı eşik değerinin sağında kalır"
      ],
      "correct": 4,
      "explain": "Sıcaklık arttıkça taneciklerin ortalama kinetik enerjisi artar ve dağılım eğrisi sağa (daha yüksek enerjilere) doğru kayar; bu durumda eğrinin eşik değerini aşan kısmının altında kalan alan (yani etkin çarpışma yapabilecek tanecik oranı) artar."
    },
    {
      "difficulty": "zor",
      "text": "Bir öğrenci, 'aktivasyon enerjisi sıfır olan bir tepkime, taneciklerin çarpışması anında anında gerçekleşir, hiçbir enerji engeli yoktur' diyor. Bu ifadenin gerçek tepkimeler için ne kadar geçerli olduğu konusunda en dikkatli değerlendirme hangisidir?",
      "options": [
        "Aktivasyon enerjisi kavramı yalnızca teorik bir kavramdır, gerçek tepkimelerde geçerli değildir",
        "Bu ifade tüm tepkimeler için geçerlidir",
        "Bu ifade yalnızca endotermik tepkimeler için geçerlidir",
        "Aktivasyon enerjisi hiçbir zaman sıfır olamaz, bu yüzden ifade tamamen anlamsızdır",
        "Gerçek kimyasal tepkimelerin çoğunda ölçülebilir bir aktivasyon enerjisi vardır; aktivasyon enerjisi sıfıra çok yakın olan tepkimeler nadir ve özel durumlardır, bu yüzden ifade genel bir kural olarak abartılı olur"
      ],
      "correct": 4,
      "explain": "Gerçek kimyasal tepkimelerin büyük çoğunluğunda ölçülebilir bir aktivasyon enerjisi (enerji engeli) bulunur; bu yüzden taneciklerin sırf çarpışması yetmez, yeterli kinetik enerjiye de sahip olmaları gerekir. Aktivasyon enerjisinin sıfıra çok yakın olduğu durumlar nadirdir; bu yüzden 'her çarpışma anında gerçekleşir' genellemesi gerçek tepkimelerin çoğu için geçerli değildir."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimenin ileri aktivasyon enerjisi 3 katına çıkarılıyor ama ΔH_tepkime değeri değişmeden aynı kalıyor. Bu durumda geri aktivasyon enerjisi (Eag) nasıl değişmiş olmalıdır?",
      "options": [
        "Eag sıfıra düşmelidir",
        "Eag değişmemelidir",
        "Eag negatif olmalıdır",
        "Eag da, Eai ile ΔH arasındaki farkı koruyacak şekilde, Eai'deki artışla orantılı olarak artmalıdır (Eag_yeni = Eai_yeni − ΔH)",
        "Bu durumda ΔH da değişmek zorundadır, senaryo çelişkilidir"
      ],
      "correct": 3,
      "explain": "ΔH = Eai − Eag eşitliği sabit kalması gerektiğinden, Eai değiştiğinde Eag da bu eşitliği koruyacak şekilde değişmelidir: Eag_yeni = Eai_yeni − ΔH. Eai artarken ΔH sabit kalıyorsa, Eag de aynı miktarda artmalıdır."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimede iki basamaklı bir mekanizma öneriliyor: 1. basamağın aktivasyon enerjisi çok yüksek (yavaş basamak), 2. basamağın aktivasyon enerjisi çok düşük (hızlı basamak). Tüm tepkimenin hızı hakkında en makul çıkarım hangisidir?",
      "options": [
        "Tüm tepkimenin hızı, yavaş olan 1. basamak tarafından belirlenir; çünkü ürünün oluşabilmesi bu yavaş basamağın tamamlanmasını bekler",
        "Tüm tepkimenin hızı, hızlı olan 2. basamak tarafından belirlenir",
        "Basamak sayısı tepkime hızını etkilemez",
        "Aktivasyon enerjisi ile basamak hızı arasında ilişki yoktur",
        "İki basamağın hızı ortalaması alınarak toplam hız bulunur"
      ],
      "correct": 0,
      "explain": "Çok basamaklı bir tepkimede, en yüksek aktivasyon enerjisine sahip (en yavaş) basamak, tüm tepkimenin hızını sınırlayan 'darboğaz' basamaktır; tüm tepkimenin hızı bu en yavaş basamağın hızına yakın olur, çünkü sonraki basamak ne kadar hızlı olursa olsun bu yavaş basamağın tamamlanmasını beklemek zorundadır."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimenin ΔH_tepkime değeri -60 kJ, Eai değeri Eag değerinin tam yarısı kadardır. Buna göre Eai ve Eag değerleri kaç kJ'dir?",
      "options": [
        "Eai=30, Eag=90",
        "Eai=120, Eag=60",
        "Eai=40, Eag=100",
        "Eai=60, Eag=0",
        "Eai=60, Eag=120"
      ],
      "correct": 4,
      "explain": "Eai = Eag/2 olduğuna göre ΔH = Eai − Eag = (Eag/2) − Eag = -Eag/2 = -60 eşitliğinden Eag = 120 kJ, buradan Eai = 120/2 = 60 kJ bulunur. Kontrol: 60 − 120 = -60 kJ ✓."
    },
    {
      "difficulty": "zor",
      "text": "İki farklı katalizörsüz tepkime karşılaştırılıyor: 1. tepkimenin aktivasyon enerjisi 50 kJ, 2. tepkimenin aktivasyon enerjisi 150 kJ'dir. Aynı sıcaklıkta, hangi tepkimede etkin çarpışma yapabilecek tanecik oranının daha yüksek olması ve dolayısıyla tepkimenin daha hızlı ilerlemesi beklenir?",
      "options": [
        "2. tepkime, çünkü aktivasyon enerjisi daha yüksektir",
        "2. tepkime, çünkü daha fazla enerji biriktirir",
        "1. tepkime, çünkü daha düşük bir enerji eşiğini aşan tanecik oranı aynı sıcaklıkta daha fazladır",
        "İkisi de aynı hızda ilerler, aktivasyon enerjisi hızı etkilemez",
        "Bu karşılaştırma için sıcaklık bilgisi yeterli değildir"
      ],
      "correct": 2,
      "explain": "Aynı sıcaklıkta taneciklerin kinetik enerji dağılımı aynıdır. Daha düşük bir aktivasyon enerjisi (eşik değeri), dağılım eğrisinin daha büyük bir kısmının bu eşiği aşması anlamına gelir; bu yüzden 1. tepkimede etkin çarpışma yapabilecek tanecik oranı daha yüksektir ve tepkime daha hızlı ilerlemesi beklenir."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimenin ileri aktivasyon enerjisi Eai, geri aktivasyon enerjisiyle Eag tam olarak eşit çıkıyor (Eai = Eag). Bu durumda tepkime ve potansiyel enerji grafiği hakkında ne söylenebilir?",
      "options": [
        "Bu durum hiçbir gerçek tepkimede görülemez",
        "Aktivasyon enerjisi tanımsız hâle gelir",
        "Tepkime kesinlikle endotermiktir",
        "Tepkime kesinlikle ekzotermiktir",
        "ΔH_tepkime = 0 olur; tepkenler ve ürünler aynı potansiyel enerji düzeyinde bulunur"
      ],
      "correct": 4,
      "explain": "ΔH_tepkime = Eai − Eag olduğundan, Eai = Eag ise ΔH = 0 olur. Bu, tepkenlerin ve ürünlerin potansiyel enerji düzeylerinin birbirine eşit olduğu, tepkimenin ısı alışverişi açısından yaklaşık nötr bir durum olduğu anlamına gelir (H2+I2→2HI tepkimesinin ΔH'sinin sıfıra çok yakın çıkması buna benzer bir örnektir)."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimenin gerçekleşmesi için gereken minimum enerji (aktivasyon enerjisi) çok düşükse, ancak tanecikler arasındaki çarpışma sıklığı da çok düşükse (örneğin çok seyreltik bir gaz karışımında), tepkime hızı hakkında ne söylenebilir?",
      "options": [
        "Aktivasyon enerjisi düşük olduğu için tepkime kesinlikle çok hızlıdır",
        "Bu durumda tepkime hiç gerçekleşmez",
        "Düşük aktivasyon enerjisi etkin çarpışma olasılığını artırsa da, toplam çarpışma sayısı azsa gerçekleşen etkin çarpışma sayısı (ve dolayısıyla tepkime hızı) yine de düşük kalabilir",
        "Çarpışma sıklığının tepkime hızıyla hiçbir ilgisi yoktur",
        "Aktivasyon enerjisi düşükse çarpışma sıklığı otomatik olarak yükselir"
      ],
      "correct": 2,
      "explain": "Tepkime hızı hem çarpışma sıklığından hem de çarpışmaların etkin olma oranından (aktivasyon enerjisiyle ilişkili) etkilenir. Aktivasyon enerjisi düşük olsa da ortamda çarpışma sıklığı düşükse (örneğin seyreltik bir karışımda), gerçekleşen toplam etkin çarpışma sayısı azalır ve tepkime hızı düşük kalabilir; iki etken birlikte değerlendirilmelidir."
    }
  ],
  "m6": [
    {
      "difficulty": "kolay",
      "text": "Kimyasal bir tepkimede belirli bir sürede madde miktarındaki değişimin ölçüsüne ne ad verilir?",
      "options": [
        "Tepkime entalpisi",
        "Eşik değeri",
        "Tepkime hızı",
        "Aktivasyon enerjisi",
        "Bağ enerjisi"
      ],
      "correct": 2,
      "explain": "Kimyasal bir tepkimede belirli bir sürede madde miktarındaki değişimin ölçüsüne tepkime hızı denir; 'r' sembolüyle gösterilir."
    },
    {
      "difficulty": "kolay",
      "text": "SI birim sisteminde tepkime hızının birimi nedir?",
      "options": [
        "M/s",
        "L",
        "mol",
        "g/s",
        "kJ/s"
      ],
      "correct": 0,
      "explain": "Madde miktarı derişim (M=mol/L) olarak ifade edildiğinde ve zaman saniye alındığında, tepkime hızının SI birimi M/s'dir."
    },
    {
      "difficulty": "kolay",
      "text": "Bir tepken derişiminin zamanla azalma hızına ne ad verilir?",
      "options": [
        "Denge hızı",
        "Bağ kırılma hızı",
        "Aktivasyon hızı",
        "Harcanma hızı",
        "Oluşma hızı"
      ],
      "correct": 3,
      "explain": "Tepkenlerin derişiminin birim zamandaki azalışına harcanma hızı denir."
    },
    {
      "difficulty": "kolay",
      "text": "Bir ürün derişiminin zamanla artma hızına ne ad verilir?",
      "options": [
        "Eşik hızı",
        "Denge hızı",
        "Aktivasyon hızı",
        "Oluşma hızı",
        "Harcanma hızı"
      ],
      "correct": 3,
      "explain": "Ürünlerin derişiminin birim zamandaki artışına oluşma hızı denir."
    },
    {
      "difficulty": "kolay",
      "text": "Tepken derişimindeki değişim hesaplanırken hız ifadesinin önüne neden eksi işareti konur?",
      "options": [
        "Eksi işareti bir yazım geleneğidir, matematiksel bir anlamı yoktur",
        "Tepken derişimi zamanla azaldığından, Δ[tepken] negatif çıkar; eksi işareti bu değeri pozitif bir hız değerine çevirir",
        "Ürünler için de aynı eksi işareti kullanılır",
        "Eksi işareti yalnızca gazlar için kullanılır",
        "Tepken derişimi her zaman negatiftir"
      ],
      "correct": 1,
      "explain": "Tepken derişimi zamanla azaldığı için son derişimden ilk derişim çıkarıldığında (Δ[tepken]) negatif bir değer elde edilir. Hızın pozitif bir büyüklük olarak ifade edilebilmesi için bu ifadenin önüne eksi işareti konur."
    },
    {
      "difficulty": "kolay",
      "text": "'Δ' sembolü (değişim farkı) nasıl hesaplanır?",
      "options": [
        "İlk ve son değer çarpılarak",
        "Son değerden ilk değer çıkarılarak",
        "Yalnızca son değer alınarak",
        "İlk değerden son değer çıkarılarak",
        "İlk ve son değer toplanarak"
      ],
      "correct": 1,
      "explain": "'Δ' (değişim farkı), son değerden ilk değerin çıkarılmasıyla bulunur: Δ[X] = [X]son − [X]ilk."
    },
    {
      "difficulty": "kolay",
      "text": "H2O2(suda) → H2O(s) + 1/2O2(g) tepkimesinde belirli bir zaman aralığında [H2O2] derişimi 2,00 M'dan 1,70 M'a düşüyor. Bu aralıktaki Δ[H2O2] kaç M'dır?",
      "options": [
        "-3,70 M",
        "0 M",
        "+0,30 M",
        "-0,30 M",
        "+3,70 M"
      ],
      "correct": 3,
      "explain": "Δ[H2O2] = son derişim − ilk derişim = 1,70 − 2,00 = -0,30 M. Değerin negatif çıkması, derişimin azaldığını gösterir."
    },
    {
      "difficulty": "kolay",
      "text": "Bir tepkende Δ[X] = -0,40 M, Δt = 200 s olarak ölçülüyor. Bu tepkenin ortalama harcanma hızı kaç M/s'dir?",
      "options": [
        "200 M/s",
        "-0,40 M/s",
        "0,002 M/s",
        "0,40 M/s",
        "-0,002 M/s"
      ],
      "correct": 2,
      "explain": "r = -Δ[X]/Δt = -(-0,40)/200 = 0,40/200 = 0,002 M/s. Eksi işareti negatif Δ[X] değerini pozitif bir hıza çevirir."
    },
    {
      "difficulty": "kolay",
      "text": "Bir üründe Δ[Y] = +0,60 M, Δt = 300 s olarak ölçülüyor. Bu ürünün ortalama oluşma hızı kaç M/s'dir?",
      "options": [
        "0,0018 M/s",
        "0,60 M/s",
        "0,002 M/s",
        "-0,002 M/s",
        "300 M/s"
      ],
      "correct": 2,
      "explain": "Ürünler için r = +Δ[Y]/Δt = 0,60/300 = 0,002 M/s. Ürün derişimi arttığı için Δ[Y] zaten pozitiftir, eksi işareti gerekmez."
    },
    {
      "difficulty": "kolay",
      "text": "N2(g) + 3H2(g) → 2NH3(g) tepkimesinde N2'nin harcanma hızı ifadesi hangisidir?",
      "options": [
        "r_N2 = -Δ[N2]/Δt",
        "r_N2 = -Δ[H2]/Δt",
        "r_N2 = Δ[NH3]/Δt",
        "r_N2 = +Δ[N2]/Δt",
        "r_N2, hesaplanamaz"
      ],
      "correct": 0,
      "explain": "N2 bir tepken olduğundan derişimi zamanla azalır; harcanma hızı r_N2 = -Δ[N2]/Δt şeklinde ifade edilir."
    },
    {
      "difficulty": "kolay",
      "text": "aA(g) + bB(g) → cC(g) + dD(g) genel tepkimesinde tepkime hızı ile C maddesinin oluşma hızı arasındaki ilişki nasıl ifade edilir?",
      "options": [
        "r_tepkime = (1/c)·Δ[C]/Δt",
        "r_tepkime = c·Δ[C]/Δt",
        "r_tepkime = Δ[C]/c·Δt değil, sadece Δ[C]",
        "r_tepkime = -Δ[C]/Δt",
        "r_tepkime = c·r_C ile ilgisizdir"
      ],
      "correct": 0,
      "explain": "Genel bağıntıya göre r_tepkime = (1/c)·Δ[C]/Δt'dir; yani C'nin oluşma hızı, kendi katsayısına bölünerek tepkime hızına dönüştürülür."
    },
    {
      "difficulty": "kolay",
      "text": "Belirli bir zaman aralığında madde miktarındaki değişime dayanan hıza ne ad verilir?",
      "options": [
        "Anlık hız",
        "Ortalama hız",
        "Maksimum hız",
        "Denge hızı",
        "Aktivasyon hızı"
      ],
      "correct": 1,
      "explain": "Belirli bir zaman aralığında madde miktarındaki değişime dayanan hıza ortalama hız denir; bu modülde hesaplanan hızlar ortalama hızlardır."
    },
    {
      "difficulty": "kolay",
      "text": "Tepkime hızının birimi, kullanılan madde miktarı türüne göre değişebilir mi?",
      "options": [
        "Evet; derişim (M/s), kütle (g/dk. vb.), mol (mol/sa. vb.) veya hacim (L/gün vb.) kullanılabilir",
        "Hayır, yalnızca mol kullanılabilir",
        "Hayır, her zaman M/s'dir",
        "Evet ama yalnızca gazlar için",
        "Hız birimsizdir"
      ],
      "correct": 0,
      "explain": "Tepkime hızının birimi, kullanılan madde miktarı türüne (derişim, kütle, mol, hacim) ve zaman birimine (saniye, dakika, saat, gün) göre değişebilir; örneğin M/s, g/dk., mol/sa. veya L/gün gibi birimler kullanılabilir."
    },
    {
      "difficulty": "kolay",
      "text": "Bir kimyasal tepkimede tepkenlerin ve ürünlerin harcanma/oluşma hızları her zaman birbirine eşit midir?",
      "options": [
        "Bu, yalnızca sıcaklığa bağlıdır",
        "Hayır; tepkime denklemindeki katsayılara göre farklı büyüklükte olabilirler",
        "Evet ama yalnızca gaz tepkimelerinde",
        "Hayır, hiçbir zaman eşit olamazlar",
        "Evet, her zaman eşittir"
      ],
      "correct": 1,
      "explain": "Madde miktarlarının harcanma ve oluşma hızları, tepkime denklemindeki katsayılara göre değişiklik gösterir; katsayıları farklı olan maddelerin hızları da farklı büyüklükte olur (ama hepsi aynı r_tepkime değerine karşılık gelir)."
    },
    {
      "difficulty": "kolay",
      "text": "Kâğıdın yanması ile gümüşün kararması karşılaştırıldığında hangisi daha hızlı bir tepkimedir?",
      "options": [
        "Karşılaştırma yapılamaz",
        "Kâğıdın yanması",
        "Gümüşün kararması",
        "İkisi de aynı hızdadır",
        "İkisi de anlık gerçekleşir"
      ],
      "correct": 1,
      "explain": "Kâğıdın yanması saniyeler içinde gerçekleşen hızlı bir tepkimeyken, gümüşün kararması (gümüş sülfür oluşumu) günler/haftalar süren yavaş bir tepkimedir."
    },
    {
      "difficulty": "kolay",
      "text": "Demirin paslanması ve bitkilerin yapraklarının solması gibi olaylar hangi hız kategorisine örnektir?",
      "options": [
        "Anlık tepkimeler",
        "Çok hızlı tepkimeler",
        "Tepkime hızıyla ilgisiz olaylar",
        "Yavaş tepkimeler",
        "Yalnızca fiziksel olaylar"
      ],
      "correct": 3,
      "explain": "Demirin paslanması ve yaprakların solması, günler-aylar süren yavaş kimyasal tepkimelere örnektir."
    },
    {
      "difficulty": "kolay",
      "chart": {
        "labels": [
          "0 s",
          "200 s",
          "400 s",
          "600 s"
        ],
        "values": [
          2.3,
          2,
          1.7,
          1.5
        ],
        "unit": "[H2O2] (M)"
      },
      "text": "Grafiğe göre H2O2 derişimi zaman ilerledikçe nasıl bir eğilim göstermektedir?",
      "options": [
        "Sürekli azalmaktadır",
        "Rastgele değişmektedir",
        "Önce artıp sonra azalmaktadır",
        "Sürekli artmaktadır",
        "Sabit kalmaktadır"
      ],
      "correct": 0,
      "explain": "Grafikte [H2O2] değeri zamanla sürekli azalmaktadır (2,30 → 2,00 → 1,70 → 1,50 M); bu, H2O2'nin tepken olarak harcandığını gösterir."
    },
    {
      "difficulty": "orta",
      "compareChart": {
        "xLabels": [
          "0 s",
          "200 s",
          "400 s",
          "600 s"
        ],
        "series": [
          {
            "name": "[H2O2] (M)",
            "values": [
              2.3,
              2,
              1.7,
              1.5
            ],
            "color": "var(--energy)"
          }
        ]
      },
      "text": "Grafiğe göre 200-400 s aralığında H2O2'nin ortalama harcanma hızı kaç M/s'dir?",
      "options": [
        "0,30 M/s",
        "0,0010 M/s",
        "0,15 M/s",
        "0,0015 M/s",
        "0,0030 M/s"
      ],
      "correct": 3,
      "explain": "r = -Δ[H2O2]/Δt = -(1,70-2,00)/(400-200) = -(-0,30)/200 = 0,0015 M/s."
    },
    {
      "difficulty": "orta",
      "text": "H2O2(suda) → H2O(s) + 1/2O2(g) tepkimesinde 400-600 s aralığında [H2O2] derişimi 1,70 M'dan 1,50 M'a düşüyor. Bu aralıktaki ortalama harcanma hızı kaç M/s'dir?",
      "options": [
        "0,0010 M/s",
        "0,0020 M/s",
        "0,0002 M/s",
        "0,0005 M/s",
        "0,20 M/s"
      ],
      "correct": 0,
      "explain": "r = -Δ[H2O2]/Δt = -(1,50-1,70)/(600-400) = -(-0,20)/200 = 0,0010 M/s. Hızın 200-400 s aralığındaki değere (0,0015 M/s) göre azalmış olması, derişim düştükçe tepkime hızının da azaldığını gösterir."
    },
    {
      "difficulty": "orta",
      "statements": {
        "items": [
          "Zaman ilerledikçe H2O2'nin derişimi azaldıkça, hesaplanan ortalama harcanma hızı da azalma eğilimi gösterir.",
          "Ortalama hız, yalnızca tepkimenin başlangıcındaki andaki hızı temsil eder.",
          "Bir tepkenin derişim-zaman grafiğindeki eğrinin dikliği (eğimi), o andaki hızla ilişkilidir; eğri ne kadar dikse hız o kadar büyüktür."
        ]
      },
      "text": "Verilen önermelerden hangileri doğrudur?",
      "options": [
        "I ve III",
        "I, II ve III",
        "Yalnız II",
        "II ve III",
        "Yalnız I"
      ],
      "correct": 0,
      "explain": "I doğrudur; H2O2 verilerinde 0,0015 M/s'den 0,0010 M/s'ye, 0,000833 M/s'ye kadar azalan bir eğilim görülür. II yanlıştır; ortalama hız, seçilen zaman aralığının tamamını temsil eder, yalnızca başlangıç anını değil. III doğrudur; derişim-zaman grafiğinde eğrinin dikliği (eğimin büyüklüğü) hızın büyüklüğünü yansıtır."
    },
    {
      "difficulty": "orta",
      "table": {
        "headers": [
          "Zaman (s)",
          "[N2O5] (M)",
          "[NO2] (M)",
          "[O2] (M)"
        ],
        "rows": [
          [
            "0",
            "0,200",
            "0",
            "0"
          ],
          [
            "100",
            "0,169",
            "0,063",
            "0,016"
          ]
        ]
      },
      "text": "2N2O5(g) → 4NO2(g) + O2(g) tepkimesine ait tabloya göre 0-100 s aralığında N2O5'in ortalama harcanma hızı kaç M/s'dir?",
      "options": [
        "0,031 M/s",
        "0,00016 M/s",
        "0,00063 M/s",
        "0,00031 M/s",
        "0,169 M/s"
      ],
      "correct": 3,
      "explain": "r_N2O5 = -Δ[N2O5]/Δt = -(0,169-0,200)/100 = 0,031/100 = 0,00031 M/s."
    },
    {
      "difficulty": "orta",
      "dialogue": {
        "turns": [
          {
            "who": "Öğrenci A",
            "text": "2N2O5→4NO2+O2 tepkimesinde N2O5'in harcanma hızı ile NO2'nin oluşma hızı birbirine eşit olmalı, çünkü aynı tepkimedeler."
          },
          {
            "who": "Öğrenci B",
            "text": "Tam olarak eşit değil; NO2'nin katsayısı N2O5'in katsayısının 2 katı olduğundan, NO2 derişimi N2O5'e göre yaklaşık 2 kat daha hızlı değişir. Tepkime hızına dönüştürmek için her ikisi de kendi katsayısına bölünmeli."
          }
        ]
      },
      "text": "Bu tartışmaya göre hangi öğrenci doğru söylemektedir?",
      "options": [
        "İkisi de yanlış söylemektedir",
        "Yalnız Öğrenci A",
        "İkisi de doğru söylemektedir",
        "Verilen bilgiyle karar verilemez",
        "Yalnız Öğrenci B"
      ],
      "correct": 4,
      "explain": "Öğrenci B haklıdır. r_NO2 = -2·r_N2O5 (yani NO2 oluşma hızı, N2O5 harcanma hızının yaklaşık 2 katıdır) çünkü NO2'nin katsayısı (4) N2O5'in katsayısının (2) iki katıdır. Ortak tepkime hızına ulaşmak için her ikisi de kendi katsayısına bölünmelidir: r_tepkime = r_N2O5/2 = r_NO2/4."
    },
    {
      "difficulty": "orta",
      "matchPairs": {
        "leftHeader": "Madde",
        "rightHeader": "Tepkime Hızıyla İlişkisi (2N2O5→4NO2+O2)",
        "pairs": [
          [
            "N2O5",
            "r_tepkime = r_N2O5 ÷ 2"
          ],
          [
            "NO2",
            "r_tepkime = r_NO2 ÷ 4"
          ],
          [
            "O2",
            "r_tepkime = r_O2 ÷ 1"
          ]
        ]
      },
      "text": "Yukarıdaki eşleştirmeye göre, O2'nin oluşma hızı doğrudan tepkime hızına eşit olan tek madde olmasının nedeni nedir?",
      "options": [
        "O2'nin renksiz olması",
        "O2'nin bir ürün olması",
        "O2'nin tepkime denklemindeki katsayısının 1 olması",
        "O2'nin gaz hâlinde bulunması",
        "O2'nin molekül ağırlığının en düşük olması"
      ],
      "correct": 2,
      "explain": "Tepkime hızı, her maddenin hızının kendi katsayısına bölünmesiyle bulunur. O2'nin katsayısı 1 olduğundan, r_tepkime = r_O2 ÷ 1 = r_O2'dir; yani O2'nin oluşma hızı doğrudan tepkime hızına eşittir."
    },
    {
      "difficulty": "orta",
      "checklist": {
        "items": [
          "Tepkime hızı zamanla sabit kalır, hiçbir zaman değişmez.",
          "Bir tepkenin derişimi azaldıkça genellikle tepkimenin hızı da azalma eğilimi gösterir.",
          "Ortalama hız hesaplamak için yalnızca bir andaki derişim yeterlidir, iki nokta gerekmez."
        ]
      },
      "text": "Yukarıdaki ifadelerden kaç tanesi doğrudur?",
      "options": [
        "0",
        "3",
        "1",
        "2",
        "Verilenlerle belirlenemez"
      ],
      "correct": 2,
      "explain": "Yalnızca ikinci ifade doğrudur: H2O2 örneğinde görüldüğü gibi derişim azaldıkça hız da genellikle azalır. Birinci ifade yanlıştır (hız zamanla değişebilir); üçüncü ifade de yanlıştır (ortalama hız hesaplamak için bir başlangıç ve bir bitiş noktası, yani iki nokta gereklidir)."
    },
    {
      "difficulty": "orta",
      "text": "600-1200 s aralığında H2O2 derişimi 1,50 M'dan 1,00 M'a düşüyor. Bu aralıktaki ortalama harcanma hızı kaç M/s'dir?",
      "options": [
        "0,0015 M/s",
        "0,0005 M/s",
        "0,50 M/s",
        "0,000833 M/s",
        "0,00125 M/s"
      ],
      "correct": 3,
      "explain": "r = -Δ[H2O2]/Δt = -(1,00-1,50)/(1200-600) = 0,50/600 ≈ 0,000833 M/s."
    },
    {
      "difficulty": "orta",
      "text": "2N2O5(g) → 4NO2(g) + O2(g) tepkimesinde 100-200 s aralığında [O2] derişimi 0,016 M'dan 0,029 M'a çıkıyor. Bu aralıkta O2'nin ortalama oluşma hızı kaç M/s'dir ve bu değer aynı zamanda tepkime hızına (r_tepkime) eşit midir?",
      "options": [
        "0,00013 M/s; evet, O2'nin katsayısı 1 olduğu için doğrudan tepkime hızına eşittir",
        "0,00013 M/s; hayır, hiçbir zaman tepkime hızına eşit olamaz",
        "0,29 M/s; hayır, eşit değildir",
        "0,00013 M/s; yalnızca 4 ile çarpılırsa eşit olur",
        "0,013 M/s; evet, tepkime hızına eşittir"
      ],
      "correct": 0,
      "explain": "r_O2 = Δ[O2]/Δt = (0,029-0,016)/100 = 0,00013 M/s. O2'nin katsayısı 1 olduğundan r_tepkime = r_O2 ÷ 1 = r_O2; yani bu değer doğrudan tepkime hızına eşittir."
    },
    {
      "difficulty": "orta",
      "text": "Bir tepkimede A maddesinin katsayısı 2, B maddesinin katsayısı 1'dir (2A → ürünler). A'nın harcanma hızı 0,006 M/s olarak ölçülüyorsa tepkime hızı (r_tepkime) kaç M/s'dir?",
      "options": [
        "0,60 M/s",
        "0,006 M/s",
        "0,003 M/s",
        "0,012 M/s",
        "0,002 M/s"
      ],
      "correct": 2,
      "explain": "r_tepkime = r_A ÷ (A'nın katsayısı) = 0,006 ÷ 2 = 0,003 M/s."
    },
    {
      "difficulty": "orta",
      "text": "Bir tepkimede ürün C'nin katsayısı 3'tür ve C'nin oluşma hızı 0,009 M/s olarak ölçülüyor. Tepkime hızı (r_tepkime) kaç M/s'dir?",
      "options": [
        "0,027 M/s",
        "0,003 M/s",
        "0,0009 M/s",
        "3 M/s",
        "0,009 M/s"
      ],
      "correct": 1,
      "explain": "r_tepkime = r_C ÷ (C'nin katsayısı) = 0,009 ÷ 3 = 0,003 M/s."
    },
    {
      "difficulty": "orta",
      "text": "Bir öğrenci hız hesaplarken tepken için Δ[X] değerini eksi işareti koymadan doğrudan kullanıyor ve negatif bir hız değeri buluyor. Bu sonucun yorumu için en doğru yaklaşım hangisidir?",
      "options": [
        "Negatif hız değeri doğrudan kullanılabilir, düzeltmeye gerek yoktur",
        "Bu durumda tepkime hiç gerçekleşmemiştir",
        "Negatif işaret yalnızca gazlar için anlamlıdır",
        "Negatif hız, tepkimenin tersine döndüğünü gösterir",
        "Hesaplama biçimsel olarak eksik; tepkenler için formülün başında eksi işareti kullanılmalı, böylece hız pozitif bir büyüklük olarak ifade edilir"
      ],
      "correct": 4,
      "explain": "Tepken derişimi azaldığından Δ[tepken] matematiksel olarak negatif çıkar. Hız tanım gereği pozitif bir büyüklük olduğundan, tepkenler için formülün başına eksi işareti konularak bu değer pozitife çevrilmelidir; öğrencinin eksi işaretini atlaması bir hesaplama eksikliğidir."
    },
    {
      "difficulty": "orta",
      "text": "1200-1800 s aralığında H2O2 derişimi 1,00 M'dan 0,60 M'a düşüyor. Bu aralıktaki ortalama harcanma hızı, 0-200 s aralığındaki hızla (0,0015 M/s) karşılaştırıldığında nasıldır?",
      "options": [
        "Yaklaşık 0,0015 M/s'dir ve önceki aralıkla aynıdır",
        "Yaklaşık 0,000667 M/s'dir ve önceki aralığa göre daha düşüktür",
        "Yaklaşık 0,003 M/s'dir ve önceki aralıktan daha yüksektir",
        "Hesaplanamaz",
        "Yaklaşık 0,60 M/s'dir"
      ],
      "correct": 1,
      "explain": "r = -Δ[H2O2]/Δt = -(0,60-1,00)/(1800-1200) = 0,40/600 ≈ 0,000667 M/s. Bu değer, 0-200 s aralığındaki hızdan (0,0015 M/s) belirgin biçimde düşüktür; bu da derişim azaldıkça tepkime hızının da azaldığını doğrular."
    },
    {
      "difficulty": "orta",
      "text": "2N2O5(g) → 4NO2(g) + O2(g) tepkimesinde 300-400 s aralığında N2O5 derişimi 0,120 M'dan 0,101 M'a düşüyor. Bu aralıktaki tepkime hızı (r_tepkime) yaklaşık kaç M/s'dir?",
      "options": [
        "0,000095 M/s",
        "0,00009 M/s",
        "0,00019 M/s",
        "0,00038 M/s",
        "0,019 M/s"
      ],
      "correct": 0,
      "explain": "r_N2O5 = -Δ[N2O5]/Δt = -(0,101-0,120)/100 = 0,019/100 = 0,00019 M/s. r_tepkime = r_N2O5 ÷ 2 = 0,00019 ÷ 2 = 0,000095 M/s."
    },
    {
      "difficulty": "orta",
      "text": "Aşağıdaki tepkime hızı birimlerinden hangisi zaman birimi olarak 'saat' kullanmaktadır?",
      "options": [
        "r = Δ(kütle)/Δt (g/dk.)",
        "r = Δ(mol)/Δt (mol/sa.)",
        "r = Δ(hacim)/Δt (L/gün)",
        "r = Δ[derişim]/Δt (M/s)",
        "Hiçbiri saat birimini kullanmaz"
      ],
      "correct": 1,
      "explain": "Tabloya göre mol cinsinden madde miktarı değişimi saat (sa.) zaman birimiyle kullanıldığında hız birimi mol/sa. olur."
    },
    {
      "difficulty": "orta",
      "text": "2N2O5(g) → 4NO2(g) + O2(g) tepkimesinde 100-200 s aralığında N2O5 derişimi 0,169 M'dan 0,142 M'a düşüyor. Bu aralıktaki r_tepkime değeri yaklaşık kaç M/s'dir?",
      "options": [
        "0,00027 M/s",
        "0,00054 M/s",
        "0,000068 M/s",
        "0,027 M/s",
        "0,000135 M/s"
      ],
      "correct": 4,
      "explain": "r_N2O5 = -Δ[N2O5]/Δt = -(0,142-0,169)/100 = 0,027/100 = 0,00027 M/s. r_tepkime = r_N2O5 ÷ 2 = 0,00027 ÷ 2 = 0,000135 M/s."
    },
    {
      "difficulty": "orta",
      "text": "Bir tepkimede aynı zaman aralığı için hem tepken hem ürün derişim verileri mevcuttur. Yalnızca tepken verisini kullanarak hesaplanan r_tepkime ile yalnızca ürün verisini kullanarak hesaplanan r_tepkime'nin (katsayılar doğru uygulandığında) birbirine yakın çıkması beklenir mi?",
      "options": [
        "Yalnızca tepkime ekzotermikse tutarlı çıkar",
        "Hayır, tepken ve ürün verileri hiçbir zaman aynı r_tepkime'yi vermez",
        "Evet, çünkü her ikisi de aynı tepkimenin hızını farklı maddeler üzerinden ifade eder; katsayılar doğru uygulandığında sonuçlar tutarlı olmalıdır",
        "Yalnızca gaz fazındaki tepkimelerde tutarlı çıkar",
        "Bu, tepkimenin sıcaklığına bağlıdır"
      ],
      "correct": 2,
      "explain": "r_tepkime tek bir büyüklüktür; hangi maddenin verisi kullanılırsa kullanılsın (kendi katsayısına bölünerek), doğru uygulandığında aynı r_tepkime değerine ulaşılması beklenir. N2O5 verilerinde bu tutarlılık çoğu aralıkta gözlenmektedir."
    },
    {
      "difficulty": "zor",
      "text": "1800-2600 s aralığında H2O2 derişimi 0,60 M'dan 0,30 M'a düşüyor. Bu aralıktaki ortalama harcanma hızını, 0-200 s ve 600-1200 s aralıklarındaki hızlarla (sırasıyla 0,0015 ve 0,000833 M/s) karşılaştırarak bir örüntü ifade ediniz.",
      "options": [
        "Yaklaşık 0,0015 M/s; hız artmaktadır",
        "Hesaplanamaz, veriler yetersizdir",
        "Yaklaşık 0,00075 M/s; hız sabit kalmaktadır",
        "Yaklaşık 0,000375 M/s; hız zamanla sürekli azalmaktadır, bu derişim düştükçe hızın da düştüğü örüntüsünü doğrular",
        "Yaklaşık 0,0003 M/s; hız rastgele değişmektedir"
      ],
      "correct": 3,
      "explain": "r = -Δ[H2O2]/Δt = -(0,30-0,60)/(2600-1800) = 0,30/800 = 0,000375 M/s. Bu değer, önceki aralıklardaki 0,0015 ve 0,000833 M/s değerleriyle karşılaştırıldığında sürekli azalan bir örüntü göstermektedir: derişim azaldıkça tepkime hızı da azalmaktadır."
    },
    {
      "difficulty": "zor",
      "statements": {
        "items": [
          "Bir tepkimenin ortalama hızı, seçilen zaman aralığı ne kadar küçültülürse gerçek anlık hıza o kadar yaklaşır.",
          "İki farklı zaman aralığında hesaplanan ortalama hızların birbirinden farklı çıkması, hesaplamada hata yapıldığını gösterir.",
          "Bir tepkimenin derişim-zaman grafiğinde eğri zamanla düzleşiyorsa (yataya yaklaşıyorsa) bu, tepkime hızının azaldığını gösterir."
        ]
      },
      "text": "Bu önermelerden hangileri doğrudur?",
      "options": [
        "I, II ve III",
        "II ve III",
        "Yalnız I",
        "Yalnız II",
        "I ve III"
      ],
      "correct": 4,
      "explain": "I doğrudur; zaman aralığı küçüldükçe ortalama hız, o andaki anlık hıza yaklaşır. II yanlıştır; farklı aralıklarda farklı ortalama hız çıkması normaldir ve genellikle hesaplama hatası değil, tepkime hızının zamanla gerçekten değiştiğinin göstergesidir. III doğrudur; eğrinin eğimi hızı temsil eder, eğri yataya yaklaştıkça (düzleştikçe) eğim küçülür, yani hız azalır."
    },
    {
      "difficulty": "zor",
      "dialogue": {
        "turns": [
          {
            "who": "Öğrenci A",
            "text": "H2O2 verilerinde hız sürekli azalıyor; demek ki tepkime bir süre sonra tamamen duracak ve H2O2 derişimi sıfıra inecek."
          },
          {
            "who": "Öğrenci B",
            "text": "Hızın azalması, tepkimenin durduğu anlamına gelmez; yalnızca derişim azaldıkça birim zamandaki değişimin küçüldüğünü gösterir. Tepkime teorik olarak çok uzun sürede çok düşük derişimlere yaklaşmaya devam edebilir."
          }
        ]
      },
      "text": "Bu tartışmaya göre hangi öğrencinin yorumu daha temkinli ve doğrudur?",
      "options": [
        "İkisi de aynı derecede haklıdır",
        "İkisi de haksızdır",
        "Yalnız Öğrenci A",
        "Yalnız Öğrenci B",
        "Verilen bilgiyle karar verilemez"
      ],
      "correct": 3,
      "explain": "Öğrenci B'nin yorumu daha temkinlidir. Ortalama hızın azalması, birim zamandaki değişimin küçüldüğünü gösterir; bu, tepkimenin aniden 'duracağı' anlamına gelmez. Bu modülün verileriyle tepkimenin tam olarak ne zaman biteceği hakkında kesin bir sonuca varılamaz."
    },
    {
      "difficulty": "zor",
      "text": "2N2O5(g) → 4NO2(g) + O2(g) tepkimesinde 400-500 s aralığında N2O5 derişimi 0,101 M'dan 0,086 M'a düşerken NO2 derişimi 0,197 M'dan 0,229 M'a çıkıyor. Bu iki veriden hesaplanan r_tepkime değerlerinin (N2O5 üzerinden ve NO2 üzerinden) birbirine yakın çıkması ne anlama gelir?",
      "options": [
        "Bu, tepkimenin dengede olduğunu gösterir",
        "Bu, N2O5 ve NO2'nin aynı hızda tükendiğini gösterir",
        "Bu, r_tepkime = r_N2O5÷2 = r_NO2÷4 bağıntısının bu veri seti için tutarlı olduğunu, yani ölçümlerin ve stokiyometrik ilişkinin birbirini doğruladığını gösterir",
        "Bu bir tesadüftür, hiçbir anlamı yoktur",
        "Bu, katsayıların yanlış yazıldığını gösterir"
      ],
      "correct": 2,
      "explain": "r_N2O5 = -(0,086-0,101)/100 = 0,00015 M/s → r_tepkime = 0,000075 M/s. r_NO2 = (0,229-0,197)/100 = 0,00032 M/s → r_tepkime = 0,00008 M/s. Bu iki değerin birbirine yakın çıkması, genel bağıntının (r_tepkime = r_N2O5÷2 = r_NO2÷4) bu veri seti için tutarlı olduğunu ve farklı maddeler üzerinden hesaplansa da aynı tepkime hızına ulaşıldığını doğrular."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimede A maddesinin katsayısı 1, B maddesinin katsayısı 2'dir (A + 2B → ürünler). A'nın harcanma hızı ölçülüyor ve 0,004 M/s bulunuyor. B'nin harcanma hızı kaç M/s olmalıdır?",
      "options": [
        "0,016 M/s",
        "0,001 M/s",
        "0,004 M/s",
        "0,002 M/s",
        "0,008 M/s"
      ],
      "correct": 4,
      "explain": "r_tepkime = r_A ÷ 1 = r_B ÷ 2 eşitliğinden r_B = 2 × r_A = 2 × 0,004 = 0,008 M/s bulunur. B'nin katsayısı A'nın 2 katı olduğundan B, A'dan 2 kat daha hızlı harcanır."
    },
    {
      "difficulty": "zor",
      "text": "Bir deneyde tepkime hızı mol/saat biriminde 0,6 olarak ölçülüyor. Bu değeri M/s birimine çevirmek isteyen bir öğrencinin karşılaşacağı temel zorluk nedir?",
      "options": [
        "Hiçbir zorluk yoktur, doğrudan aynı sayı kullanılabilir",
        "Birim dönüşümü için hem zaman biriminin (saat→saniye) hem de madde miktarı biriminin (mol→derişim, hacim bilgisi gerektirir) dönüştürülmesi gerekir",
        "Bu dönüşüm yalnızca gazlar için mümkündür",
        "mol/saat birimi hiçbir zaman M/s'ye çevrilemez",
        "Yalnızca zaman birimini çevirmek yeterlidir, madde miktarı birimi otomatik uyumludur"
      ],
      "correct": 1,
      "explain": "mol/saat biriminden M/s'ye (derişim/saniye) geçmek için hem zaman birimi (saat → saniye, 3600'e bölünerek) hem de madde miktarı birimi (mol → derişim; bunun için çözeltinin veya gazın hacmi bilinmelidir, M=mol/L) dönüştürülmelidir. Yalnızca hacim bilgisi olmadan bu dönüşüm tam yapılamaz."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimenin derişim-zaman grafiğinde tepkenin eğrisi başlangıçta çok dik, ilerledikçe giderek yataylaşan bir şekil çiziyor. Bu şeklin ortalama hız hesaplarına etkisi nedir?",
      "options": [
        "Yatay kısımdan alınan hız her zaman negatif çıkar",
        "Eğrinin şekli yalnızca grafiğin estetiği ile ilgilidir, hızla ilgisizdir",
        "Başlangıca yakın aralıklarda hesaplanan hız her zaman sıfır çıkar",
        "Grafiğin şekli ortalama hız hesabını etkilemez, her zaman aynı sonucu verir",
        "Başlangıca yakın (dik kısımdan alınan) zaman aralıklarında hesaplanan ortalama hız, sona yakın (yatay kısımdan alınan) aralıklara göre daha büyük çıkar"
      ],
      "correct": 4,
      "explain": "Eğrinin dikliği (eğimi) o bölgedeki hızı yansıtır. Başlangıçta eğri dik olduğundan (derişim hızla değiştiğinden) bu bölgeden alınan zaman aralığının ortalama hızı büyük çıkar; eğri yataylaştıkça (derişim yavaş değiştikçe) sonraki aralıkların ortalama hızı küçülür. H2O2 verileri de bu örüntüyü doğrulamaktadır."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimede yalnızca ürünün derişim-zaman verisi mevcuttur, tepkenin verisi yoktur. Tepkenin harcanma hızı, ürünün oluşma hızından ve tepkime denkleminden yararlanılarak hesaplanabilir mi?",
      "options": [
        "Hayır, tepkenin kendi verisi olmadan hiçbir şey söylenemez",
        "Evet; tepkime denklemindeki katsayılar bilindiğinde, ürünün hızı kendi katsayısına bölünüp tepkime hızı bulunur, ardından bu değer tepkenin katsayısıyla çarpılarak tepkenin hızı hesaplanabilir",
        "Bu hesaplama yalnızca gazlar için geçerlidir",
        "Evet ama yalnızca katsayılar eşitse mümkündür",
        "Hayır, yalnızca deneysel ölçümle bulunabilir"
      ],
      "correct": 1,
      "explain": "Genel bağıntı (r_tepkime = r_A/a = r_B/b = r_C/c = r_D/d) sayesinde, bir maddenin hızı ve tüm katsayılar bilindiğinde diğer tüm maddelerin hızları hesaplanabilir. Önce ürünün hızından r_tepkime bulunur, sonra bu değer istenen tepkenin katsayısıyla çarpılarak o tepkenin hızına ulaşılır."
    },
    {
      "difficulty": "zor",
      "text": "Bir öğrenci 0-600 s aralığındaki (tüm aralığı kapsayan) H2O2 ortalama harcanma hızını hesaplıyor: r = -(1,50-2,30)/600 = 0,00133 M/s. Bu değeri, aynı aralığı oluşturan üç alt aralığın (0-200, 200-400, 400-600) ayrı ayrı hesaplanan hızlarıyla (0,0015; 0,0015; 0,0010 M/s) karşılaştırdığında ne gözlemlenir?",
      "options": [
        "Bu karşılaştırma anlamsızdır, hiçbir ilişki yoktur",
        "Sonuçlar birbiriyle çelişir, bu bir hesaplama hatasına işaret eder",
        "Tüm aralığın hızı, alt aralıklardan her zaman daha küçük olmalıdır",
        "Tüm aralığın hızı, alt aralıklardan her zaman daha büyük olmalıdır",
        "Tüm aralığın ortalama hızı, alt aralıkların ortalamasına yakın bir ara değerdir; bu, ortalama hızın seçilen zaman aralığına bağlı olduğunu gösterir"
      ],
      "correct": 4,
      "explain": "0-600 s için hesaplanan 0,00133 M/s değeri, 0,0015, 0,0015 ve 0,0010 M/s değerlerinin arasında (yaklaşık ortalamasına yakın) bir değerdir. Bu, ortalama hızın hesaplandığı zaman aralığının seçimine bağlı olduğunu; geniş bir aralığın ortalamasının, o aralığı oluşturan daha küçük aralıkların hızlarını 'yumuşatarak' ortalamasını yansıttığını gösterir."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimede X maddesinin katsayısı a, Y maddesinin katsayısı b'dir. r_X = k·r_Y ilişkisi biliniyor (k bir sabit). Buna göre a ve b arasındaki ilişki nasıl ifade edilir?",
      "options": [
        "k = a + b",
        "b = k·a",
        "a ve b arasında hiçbir ilişki yoktur",
        "a/b = k, yani a = k·b ile aynı şeydir bu yüzden bu doğrudur",
        "a = k·b"
      ],
      "correct": 4,
      "explain": "r_tepkime = r_X/a = r_Y/b eşitliğinden r_X = (a/b)·r_Y elde edilir. Verilen r_X = k·r_Y ile karşılaştırıldığında k = a/b, yani a = k·b bulunur."
    },
    {
      "difficulty": "zor",
      "text": "Bir araştırmacı, 2N2O5(g) → 4NO2(g) + O2(g) tepkimesinde 500-600 s aralığında hesapladığı r_tepkime değerlerinin (N2O5, NO2 ve O2 üzerinden ayrı ayrı hesaplandığında) birbirinden belirgin şekilde farklı çıktığını fark ediyor; oysa önceki tüm aralıklarda bu değerler birbirine çok yakın çıkmıştı. Bu durumda en bilimsel yaklaşım hangisidir?",
      "options": [
        "Stokiyometrik bağıntının bu aralıkta geçersiz olduğu sonucuna varmak",
        "Sonucu sorgulamadan olduğu gibi kabul etmek",
        "Tüm önceki hesaplamaları da güvenilmez ilan etmek",
        "Bu son aralıktaki ölçüm ya da veri kaydında bir tutarsızlık/hata olabileceğini göz önünde bulundurup veriyi ve ölçüm yöntemini yeniden incelemek",
        "Bu farkı görmezden gelip yalnızca N2O5 verisini kullanmaya devam etmek"
      ],
      "correct": 3,
      "explain": "Bilimsel yaklaşım, beklenmedik bir tutarsızlıkla karşılaşıldığında veriyi ve ölçüm sürecini sorgulamaktır. Önceki tüm aralıklarda tutarlı çıkan bir bağıntının bir aralıkta aniden bozulması, o aralıktaki ölçüm veya kayıt sürecinde bir hata/tutarsızlık olabileceğine işaret eder; bağıntının kendisinin geçersiz olduğu sonucuna hemen varmak yerine veri kalitesi sorgulanmalıdır."
    },
    {
      "difficulty": "zor",
      "text": "2N2O5(g) → 4NO2(g) + O2(g) tepkimesinde 200-300 s aralığında N2O5 derişimi 0,142 M'dan 0,120 M'a düşüyor. Aynı aralıkta beklenen O2 oluşma hızının yaklaşık kaç M/s olması gerekir (stokiyometrik ilişkiye göre)?",
      "options": [
        "0,00011 M/s",
        "0,00022 M/s",
        "0,022 M/s",
        "0,00055 M/s",
        "0,00044 M/s"
      ],
      "correct": 0,
      "explain": "r_N2O5 = -(0,120-0,142)/100 = 0,022/100 = 0,00022 M/s. r_tepkime = r_N2O5 ÷ 2 = 0,00011 M/s. O2'nin katsayısı 1 olduğundan r_O2 = r_tepkime = 0,00011 M/s olması beklenir."
    },
    {
      "difficulty": "zor",
      "text": "0-2600 s'lik toplam süre boyunca H2O2 derişimi 2,30 M'dan 0,30 M'a düşüyor. Bu tüm sürecin ortalama harcanma hızı kaç M/s'dir? Bu değer, sürecin başındaki (0-200 s: 0,0015 M/s) ve sonundaki (1800-2600 s: 0,000375 M/s) hızlarla karşılaştırıldığında nasıl bir konumdadır?",
      "options": [
        "Yaklaşık 0,00077 M/s; başlangıç hızından daha yüksektir",
        "Hesaplanamaz",
        "Yaklaşık 0,00231 M/s; tüm hızlardan daha yüksektir",
        "Yaklaşık 0,00038 M/s; tüm hızlardan daha düşüktür",
        "Yaklaşık 0,00077 M/s; başlangıç ve bitiş hızlarının arasında bir değerdir, bu da hızın süreç boyunca kademeli olarak azaldığını yansıtır"
      ],
      "correct": 4,
      "explain": "r = -Δ[H2O2]/Δt = -(0,30-2,30)/2600 = 2,00/2600 ≈ 0,00077 M/s. Bu değer, sürecin başındaki hızdan (0,0015 M/s) düşük, sonundaki hızdan (0,000375 M/s) yüksektir; tüm sürecin ortalaması, sürekli azalan anlık hızların bir tür 'ara değeri' olarak ortaya çıkar."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimede X'in katsayısı 2, Y'nin katsayısı 3, Z'nin katsayısı 1'dir (2X + 3Y → Z + ...). X'in harcanma hızı 0,010 M/s ise Y'nin harcanma hızı ve Z'nin oluşma hızı sırasıyla kaç M/s olmalıdır?",
      "options": [
        "Y=0,010 M/s, Z=0,010 M/s",
        "Y=0,030 M/s, Z=0,002 M/s",
        "Y=0,015 M/s, Z=0,005 M/s",
        "Y=0,0067 M/s, Z=0,020 M/s",
        "Y=0,005 M/s, Z=0,015 M/s"
      ],
      "correct": 2,
      "explain": "r_tepkime = r_X/2 = 0,010/2 = 0,005 M/s. Buradan r_Y = 3 × r_tepkime = 3 × 0,005 = 0,015 M/s ve r_Z = 1 × r_tepkime = 0,005 M/s bulunur."
    },
    {
      "difficulty": "zor",
      "text": "Bir kimyager, bir tepkimenin hızını hem 'derişim değişimi/zaman' hem de 'kütle değişimi/zaman' yöntemiyle ayrı ayrı hesaplıyor ve iki farklı sayısal değer buluyor (örneğin 0,002 M/s ve 0,5 g/s). Bu iki değerin sayısal olarak farklı çıkması bir çelişki midir?",
      "options": [
        "Hayır, çünkü kütle ve derişim birbiriyle hiç ilişkili değildir",
        "Bu karşılaştırma anlamsızdır",
        "Evet, aynı tepkimenin hızı her zaman aynı sayısal değere sahip olmalıdır",
        "Evet, bu durum bir ölçüm hatasını gösterir",
        "Hayır; farklı madde miktarı türleri (derişim, kütle) farklı birimlere ve dolayısıyla farklı sayısal değerlere sahiptir, ikisi de aynı fiziksel süreci farklı ölçeklerde tarif eder"
      ],
      "correct": 4,
      "explain": "Tepkime hızı, kullanılan madde miktarı türüne (derişim, kütle, mol, hacim) göre farklı birimlerde ve dolayısıyla farklı sayısal değerlerde ifade edilebilir. M/s ve g/s gibi farklı birimlerdeki iki değerin sayıca farklı olması bir çelişki değildir; ikisi de aynı fiziksel süreci farklı ölçüm birimleriyle tarif etmektedir."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimenin derişim-zaman grafiğinde tepkenin eğrisi t=0'da y eksenini kestiği noktadan itibaren monoton (sürekli) azalmaktadır ve hiçbir noktada yatay bir düzlüğe (sıfır eğime) ulaşmamaktadır. Bu gözlem, tepkimenin durumu hakkında ne düşündürür?",
      "options": [
        "Tepkime aniden durmuştur",
        "Grafik hatalıdır",
        "Grafiğin gösterdiği süre boyunca tepken hâlâ harcanmaya devam etmektedir, yani tepkime bu süre içinde tamamlanmamıştır",
        "Tepkenin derişimi negatif olmuştur",
        "Tepkime tersine dönmüştür"
      ],
      "correct": 2,
      "explain": "Eğrinin hiçbir noktada yatay bir düzlüğe (sıfır eğime, yani sıfır hıza) ulaşmaması, gösterilen zaman aralığı boyunca tepkenin hâlâ harcanmakta olduğunu, yani tepkimenin bu süre içinde tamamlanmadığını gösterir."
    }
  ],
  "m7": [
    {
      "difficulty": "kolay",
      "text": "Aşağıdakilerden hangisi tepkime hızını etkileyen altı temel etkenden biri DEĞİLDİR?",
      "options": [
        "Derişim",
        "Temas yüzeyi",
        "Tepkimenin gerçekleştiği günün adı",
        "Sıcaklık",
        "Katalizör"
      ],
      "correct": 2,
      "explain": "Tepkime hızını etkileyen temel etkenler madde cinsi, fiziksel hâl, derişim, sıcaklık, katalizör ve temas yüzeyidir. Günün adı gibi bir özellik tepkime hızını bilimsel olarak etkilemez."
    },
    {
      "difficulty": "kolay",
      "text": "Aynı koşullarda propanın (C3H8) yanması, metanın (CH4) yanmasından neden daha yavaştır?",
      "options": [
        "Propanın yanması daha fazla bağın kırılmasını gerektirir",
        "Propan daha soğuktur",
        "Propan katı hâldedir",
        "Propan daha az bağ içerir",
        "Metan daha ağırdır"
      ],
      "correct": 0,
      "explain": "Propanın yanma tepkimesi, metana göre daha fazla sayıda bağın kırılmasını gerektirir. Bir tepkimede kırılan bağ sayısı ne kadar çoksa tepkimenin yavaş gerçekleşme olasılığı o kadar fazladır."
    },
    {
      "difficulty": "kolay",
      "text": "Zıt yüklü iyonlar arasında gerçekleşen nötralleşme ve çökelme tepkimeleri genellikle nasıl gerçekleşir?",
      "options": [
        "Yalnızca katalizörle gerçekleşir",
        "Yalnızca düşük sıcaklıkta gerçekleşir",
        "Hiç gerçekleşmez",
        "Çok hızlı",
        "Çok yavaş"
      ],
      "correct": 3,
      "explain": "Zıt yüklü iyonlar arasındaki elektrostatik çekim kuvveti nedeniyle nötralleşme (HCl+NaOH→NaCl+H2O) ve çökelme (KI+Pb(NO3)2→PbI2+KNO3) gibi tepkimeler genellikle çok hızlı gerçekleşir."
    },
    {
      "difficulty": "kolay",
      "text": "Ca(k) + H2O(g) → Ca(OH)2(k) + H2(g) tepkimesi, Ca(k) + H2O(s) → Ca(OH)2(suda) + H2(g) tepkimesinden neden daha hızlıdır?",
      "options": [
        "Gaz hâlindeki su daha soğuktur",
        "Bu iki tepkime aynı hızdadır",
        "Katı kalsiyum suyla hiç tepkimeye girmez",
        "Gaz hâlindeki su molekülleri daha hareketli olduğundan kalsiyumla çarpışma sıklığı daha fazladır",
        "Sıvı su daha az saftır"
      ],
      "correct": 3,
      "explain": "Gaz fazındaki moleküller sıvı fazdakilerden daha hareketlidir; bu da kalsiyumla çarpışma sıklığını ve dolayısıyla tepkime hızını artırır. Genel olarak gaz fazındaki tepkimeler sıvı/katı fazlardakinden daha hızlı gerçekleşir."
    },
    {
      "difficulty": "kolay",
      "text": "Derişimin tepkime hızına etkisiyle ilgili aşağıdakilerden hangisi doğrudur?",
      "options": [
        "Derişim yalnızca katı maddelerde etkilidir",
        "Derişim arttıkça birim hacimdeki tanecik sayısı ve çarpışma sayısı artar, tepkime hızlanır",
        "Derişim yalnızca sıcaklığı etkiler",
        "Derişimin tepkime hızıyla ilgisi yoktur",
        "Derişim arttıkça tepkime hızı azalır"
      ],
      "correct": 1,
      "explain": "Derişim arttıkça birim hacimdeki tanecik sayısı artar; bu da taneciklerin çarpışma sıklığını ve dolayısıyla etkin çarpışma sayısını artırarak tepkimeyi hızlandırır."
    },
    {
      "difficulty": "kolay",
      "text": "Nemli havada demirin paslanmasının kuru havaya göre daha hızlı olmasının nedeni nedir?",
      "options": [
        "Nemin paslanma hızıyla hiçbir ilgisi yoktur",
        "Nemli havada su buharı derişiminin daha fazla olması, oksidasyon sürecini hızlandırır",
        "Nemli hava demiri soğutur",
        "Nem, demirin rengini değiştirir",
        "Nem, oksijeni ortamdan uzaklaştırır"
      ],
      "correct": 1,
      "explain": "Nemli havada su buharı derişimi daha fazladır; bu, demirin yüzeyinde daha fazla su bulunmasına ve elektrokimyasal paslanma sürecinin hızlanmasına yol açar."
    },
    {
      "difficulty": "kolay",
      "text": "Sıcaklık arttığında tepkenlerin kinetik enerjisinde ne olur?",
      "options": [
        "Sıfıra düşer",
        "Yalnızca ürünlerin kinetik enerjisi değişir",
        "Azalır",
        "Artar",
        "Değişmez"
      ],
      "correct": 3,
      "explain": "Sıcaklık artışı, tepkimeye giren taneciklerin kinetik enerjisinde artışa neden olur."
    },
    {
      "difficulty": "kolay",
      "text": "Sıcaklık artışının tepkime hızını artırmasının temel nedeni nedir?",
      "options": [
        "Sıcaklık artışı tepkime entalpisini değiştirir",
        "Sıcaklık artışı aktivasyon enerjisini düşürür",
        "Sıcaklık artışı çarpışma sıklığını ve şiddetini artırarak eşik değerini aşan tanecik sayısını yükseltir",
        "Sıcaklık artışı tepkimenin izlediği yolu kısaltır",
        "Sıcaklık artışı tepkenlerin derişimini artırır"
      ],
      "correct": 2,
      "explain": "Sıcaklık arttığında taneciklerin kinetik enerjisi artar; bu da çarpışma sıklığını ve şiddetini artırarak eşik değerini aşan (etkin çarpışma yapabilecek) tanecik sayısını yükseltir. Sıcaklık aktivasyon enerjisini düşürmez, yalnızca ona ulaşan tanecik oranını artırır."
    },
    {
      "difficulty": "kolay",
      "text": "Kimyasal tepkimelerde tepkime hızını artıran ama tepkime sonunda değişmeden çıkan maddelere ne ad verilir?",
      "options": [
        "İzomer",
        "Çözücü",
        "Katalizör",
        "İndikatör",
        "Elektrolit"
      ],
      "correct": 2,
      "explain": "Tepkime hızını artıran ve tepkime sonunda kimyasal olarak değişmeden tepkimeden çıkan maddelere katalizör denir."
    },
    {
      "difficulty": "kolay",
      "text": "Katalizörler tepkime hızını hangi mekanizma ile artırır?",
      "options": [
        "Aktivasyon enerjisini düşürerek",
        "Ürünlerin miktarını artırarak",
        "Tepkenlerin derişimini artırarak",
        "Tepkime entalpisini değiştirerek",
        "Sıcaklığı düşürerek"
      ],
      "correct": 0,
      "explain": "Katalizörler, tepkimenin aktivasyon enerjisini düşürerek daha fazla tanecığin bu düşük eşiği aşmasını ve tepkimenin daha hızlı gerçekleşmesini sağlar."
    },
    {
      "difficulty": "kolay",
      "text": "Araç egzoz sistemlerinde kullanılan katalitik konvertörler hangi metalleri katalizör olarak içerir?",
      "options": [
        "Platin, paladyum, rodyum",
        "Demir, bakır, çinko",
        "Karbon, azot, oksijen",
        "Altın, gümüş, kurşun",
        "Sodyum, potasyum, kalsiyum"
      ],
      "correct": 0,
      "explain": "Katalitik konvertörler; platin, paladyum ve rodyum gibi metaller aracılığıyla egzoz gazlarındaki zararlı bileşikleri (CO, hidrokarbonlar, NOx) daha az zararlı bileşiklere (CO2, H2O, N2, O2) dönüştürür."
    },
    {
      "difficulty": "kolay",
      "text": "Katı bir tepkenin ince toz hâline getirilmesi tepkime hızını nasıl etkiler?",
      "options": [
        "Hızı azaltır",
        "Hızı artırır, çünkü yüzey alanı artarak çarpışabilecek bölge genişler",
        "Tepkimeyi tamamen durdurur",
        "Yalnızca renk değişimine neden olur",
        "Hızı etkilemez"
      ],
      "correct": 1,
      "explain": "Katı bir maddenin toz hâline getirilmesi yüzey alanını büyük ölçüde artırır; bu da tepkimenin gerçekleşebileceği bölgeyi genişleterek çarpışma sıklığını ve tepkime hızını artırır."
    },
    {
      "difficulty": "kolay",
      "text": "Zn(k) + 2HCl(suda) → ZnCl2(suda) + H2(g) tepkimesinde parça hâlindeki çinko yerine aynı kütlede toz hâlinde çinko kullanılırsa tepkime hızı nasıl değişir?",
      "options": [
        "Artar, tepkime çok daha şiddetli gerçekleşir",
        "Azalır",
        "Değişmez",
        "Tepkime tamamen durur",
        "Yalnızca renk değişir"
      ],
      "correct": 0,
      "explain": "Toz hâlindeki çinkonun yüzey alanı parça hâlindekinden çok daha büyük olduğundan çinko-HCl çarpışmalarının sıklığı artar; tepkime çok daha şiddetli ve hızlı gerçekleşir."
    },
    {
      "difficulty": "kolay",
      "text": "2NO(g) + H2(g) → N2(g) + H2O2(g) tepkimesi üç molekülün aynı anda çarpışmasını gerektirdiği için nasıl bir tepkimedir?",
      "options": [
        "Yalnızca düşük sıcaklıkta gerçekleşir",
        "Yavaş",
        "Anlık",
        "Katalizörsüz gerçekleşemez",
        "Çok hızlı"
      ],
      "correct": 1,
      "explain": "Üç molekülün aynı anda, uygun geometride çarpışması istatistiksel olarak iki molekülün çarpışmasından çok daha düşük olasılıklıdır; bu yüzden bu tür tepkimeler genellikle yavaş gerçekleşir."
    },
    {
      "difficulty": "kolay",
      "text": "H2O2(g) + H2(g) → 2H2O(g) tepkimesi, yalnızca iki molekülün çarpışmasını gerektirdiği için 2NO+H2→N2+H2O2 tepkimesine göre nasıldır?",
      "options": [
        "Karşılaştırılamaz",
        "Daha hızlıdır",
        "Daha yavaştır",
        "Aynı hızdadır",
        "Hiç gerçekleşmez"
      ],
      "correct": 1,
      "explain": "İki molekülün aynı anda uygun şekilde çarpışması, üç molekülün aynı anda çarpışmasından istatistiksel olarak daha olasıdır; bu yüzden H2O2+H2→2H2O tepkimesi, üç molekül gerektiren tepkimeden daha hızlı gerçekleşir."
    },
    {
      "difficulty": "kolay",
      "text": "MnO2 katısı, H2O2'nin ayrışma tepkimesinde hangi rolü oynar?",
      "options": [
        "Ürün olarak oluşur",
        "Tepken olarak harcanır",
        "Tepkimeyi tamamen durdurur",
        "Katalizör olarak tepkimeyi hızlandırır ve değişmeden kalır",
        "Yalnızca rengi değiştirir"
      ],
      "correct": 3,
      "explain": "MnO2, 2H2O2(suda) → 2H2O(s) + O2(g) ayrışma tepkimesinde katalizör görevi görür; tepkimeyi hızlandırır ama kendisi tepkime sonunda değişmeden kalır."
    },
    {
      "difficulty": "kolay",
      "text": "Kireç taşından (CaCO3) yapılmış maket yapılar üzerine eşit derişimde asit püskürtülerek farklı sıcaklıklarda aşınma hızı ölçülüyor. Bu deneyde araştırılan etken hangisidir?",
      "options": [
        "Sıcaklık",
        "Madde cinsi",
        "Temas yüzeyi",
        "Derişim",
        "Katalizör"
      ],
      "correct": 0,
      "explain": "Deneyde derişim ve madde cinsi sabit tutulup yalnızca sıcaklık değiştirildiğinden, araştırılan etken sıcaklığın tepkime hızına etkisidir."
    },
    {
      "difficulty": "orta",
      "statements": {
        "items": [
          "Aynı sıcaklıkta ve derişimde, gaz fazındaki bir tepkime genellikle sıvı fazdaki benzer bir tepkimeden daha hızlı gerçekleşir.",
          "Katalizörler tepkimenin ürünlerini ve tepkime entalpisini değiştirir.",
          "Derişimin artması, birim hacimdeki tanecik sayısını artırarak çarpışma sıklığını yükseltir."
        ]
      },
      "text": "Verilen önermelerden hangileri doğrudur?",
      "options": [
        "I, II ve III",
        "Yalnız I",
        "Yalnız II",
        "I ve III",
        "II ve III"
      ],
      "correct": 3,
      "explain": "I doğrudur; gaz fazındaki moleküller daha hareketli olduğundan çarpışma sıklığı daha yüksektir. II yanlıştır; katalizörler yalnızca aktivasyon enerjisini düşürür, ürünleri ve tepkime entalpisini değiştirmez. III doğrudur; derişim arttıkça çarpışma sıklığı artar."
    },
    {
      "difficulty": "orta",
      "dialogue": {
        "turns": [
          {
            "who": "Öğrenci A",
            "text": "Katı yakıtların sıvı yakıtlardan daha yavaş yanması, sıcaklığın tepkime hızına etkisiyle açıklanabilir."
          },
          {
            "who": "Öğrenci B",
            "text": "Bence bu yanlış; katı ve sıvı yakıtlar arasındaki hız farkı fiziksel hâlin etkisiyle ilgilidir, sıcaklıkla değil. Sıcaklık sabit tutulsa bile katı ve sıvı arasında bu fark gözlenir."
          }
        ]
      },
      "text": "Bu tartışmaya göre hangi öğrenci bilimsel olarak haklıdır?",
      "options": [
        "Yalnız Öğrenci B",
        "İkisi de haklıdır",
        "Verilen bilgiyle karar verilemez",
        "Yalnız Öğrenci A",
        "İkisi de haksızdır"
      ],
      "correct": 0,
      "explain": "Öğrenci B haklıdır. Katı yakıtların sıvı yakıtlardan daha yavaş yanması, taneciklerin hareketliliği ve çarpışma sıklığıyla ilgili olan fiziksel hâl etkisiyle açıklanır; bu, sıcaklığın etkisinden farklı bir etkendir."
    },
    {
      "difficulty": "orta",
      "checklist": {
        "items": [
          "'Temas yüzeyinin artması tepkimenin hızını artırır' hipotezi bilimsel bilgilerle doğrulanabilir bir hipotezdir.",
          "Kalsiyumun farklı sıcaklıklardaki su ile verdiği tepkimeleri gözlemlemek üzere planlanan bir deney, katalizörün etkisini açıklayan bir deneydir.",
          "'Katı yakıtlar sıvı yakıtlara göre neden daha yavaş yanar?' sorusu sıcaklığın tepkime hızına etkisiyle ilgili araştırılabilir bir sorudur."
        ]
      },
      "text": "Yukarıdaki ifadelerden kaç tanesi doğrudur?",
      "options": [
        "1",
        "Verilenlerle belirlenemez",
        "3",
        "2",
        "0"
      ],
      "correct": 0,
      "explain": "Yalnızca birinci ifade doğrudur. İkinci ifade yanlıştır; kalsiyumun farklı sıcaklıklardaki su ile tepkimesi katalizörün değil sıcaklığın etkisini araştırır. Üçüncü ifade de yanlıştır; katı-sıvı yakıt karşılaştırması sıcaklığın değil fiziksel hâlin etkisiyle ilgilidir."
    },
    {
      "difficulty": "orta",
      "table": {
        "headers": [
          "Kap",
          "Fe Miktarı",
          "Fe Biçimi",
          "HCl Derişimi"
        ],
        "rows": [
          [
            "I",
            "10 g",
            "Levha",
            "0,1 M"
          ],
          [
            "II",
            "10 g",
            "Talaş",
            "0,1 M"
          ],
          [
            "III",
            "10 g",
            "Toz",
            "0,1 M"
          ]
        ]
      },
      "text": "Fe(k) + 2HCl(suda) → FeCl2(suda) + H2(g) tepkimesi için verilen tabloya göre birim zamanda en fazla FeCl2 hangi kapta üretilir?",
      "options": [
        "Üçünde de eşit üretilir",
        "I. kap (levha)",
        "II. kap (talaş)",
        "III. kap (toz)",
        "Belirlenemez"
      ],
      "correct": 3,
      "explain": "Üç kapta da Fe kütlesi ve HCl derişimi aynı olduğundan tek değişken temas yüzeyidir. Toz hâlindeki demirin yüzey alanı en büyük olduğundan III. kapta birim zamanda en fazla FeCl2 üretilir."
    },
    {
      "difficulty": "orta",
      "matchPairs": {
        "leftHeader": "Deney Senaryosu",
        "rightHeader": "Araştırılan Etken",
        "pairs": [
          [
            "Aynı sıcaklıkta 3 farklı derişimde HCl ile Zn tepkimesi",
            "Derişim"
          ],
          [
            "10 g Fe'yi levha, talaş, toz hâlinde HCl ile tepkimeye sokma",
            "Temas yüzeyi"
          ],
          [
            "MnO2 varlığında ve yokluğunda H2O2 ayrışması",
            "Katalizör"
          ]
        ]
      },
      "text": "Yukarıdaki eşleştirmeye göre bir deneyde yalnızca sıcaklık değiştirilip diğer tüm değişkenler sabit tutuluyorsa bu deney hangi etkeni araştırır?",
      "options": [
        "Katalizör",
        "Derişim",
        "Temas yüzeyi",
        "Madde cinsi",
        "Sıcaklık"
      ],
      "correct": 4,
      "explain": "Bir deneyde yalnızca sıcaklık değiştirilip diğer tüm değişkenler (derişim, temas yüzeyi, madde cinsi vb.) sabit tutuluyorsa, bu deney sıcaklığın tepkime hızına etkisini araştırıyor demektir."
    },
    {
      "difficulty": "orta",
      "text": "Grafik 1.9'a göre sıcaklık T1'den T2'ye (T2>T1) yükseltildiğinde kinetik enerji dağılım eğrisinin altındaki toplam alan nasıl değişir?",
      "options": [
        "Alan yalnızca eşik değerinin sağında değişir",
        "Alan sıfıra iner",
        "Alan değişmez, çünkü tanecik sayısı sabittir; yalnızca dağılım sağa kayar",
        "Alan azalır, çünkü bazı tanecikler yok olur",
        "Alan artar, çünkü daha fazla tanecik oluşur"
      ],
      "correct": 2,
      "explain": "Sıcaklık artışı tanecik sayısını değiştirmez, yalnızca taneciklerin kinetik enerji dağılımını daha yüksek enerjilere doğru kaydırır. Bu yüzden T1 ve T2'deki eğrilerin altındaki toplam alan (toplam tanecik sayısını temsil eder) aynı kalır."
    },
    {
      "difficulty": "orta",
      "text": "Sıcaklık artışının aktivasyon enerjisi (Ea) üzerindeki etkisi nedir?",
      "options": [
        "Sıcaklık Ea'yı düşürür",
        "Sıcaklık Ea'yı sıfırlar",
        "Sıcaklık Ea'yı ve tepkimenin izlediği yolu değiştirmez; yalnızca Ea'yı aşabilecek tanecik sayısını artırır",
        "Sıcaklık Ea'yı yükseltir",
        "Sıcaklığın Ea ile hiçbir ilişkisi araştırılmamıştır"
      ],
      "correct": 2,
      "explain": "Sıcaklık, tepkimenin aktivasyon enerjisini ve izlediği reaksiyon yolunu değiştirmez (bu yalnızca katalizörle değişir). Sıcaklık artışı yalnızca taneciklerin kinetik enerjisini artırarak eşik değerini aşabilecek tanecik sayısını (oranını) yükseltir."
    },
    {
      "difficulty": "orta",
      "text": "Katalizörün etkisiyle ilgili Grafik 1.11 ve 1.12 incelendiğinde katalizörün neyi değiştirdiği, neyi değiştirmediği söylenebilir?",
      "options": [
        "Tepkime entalpisini değiştirir; aktivasyon enerjisini değiştirmez",
        "Hem aktivasyon enerjisini hem tepkime entalpisini değiştirir",
        "Yalnızca tepkenlerin miktarını azaltır",
        "Aktivasyon enerjisini düşürür; tepken/ürün enerjilerini ve tepkime entalpisini değiştirmez",
        "Yalnızca ürünlerin miktarını artırır"
      ],
      "correct": 3,
      "explain": "Katalizör, tepkimenin aktivasyon enerjisini düşürerek tepkimeyi hızlandırır; ancak tepken ve ürünlerin enerji düzeylerini ve dolayısıyla tepkime entalpisini (ΔH) değiştirmez."
    },
    {
      "difficulty": "orta",
      "text": "Bir kimyager, katalizörlü ve katalizörsüz aynı tepkimenin potansiyel enerji-tepkime koordinatı grafiklerini üst üste çiziyor. İki eğri arasında beklenen fark nedir?",
      "options": [
        "Katalizörlü eğrinin tepe noktası (aktivasyon enerjisi zirvesi) daha düşük olur, ama tepken ve ürün enerji düzeyleri aynı kalır",
        "Katalizörlü eğrinin tepken enerji düzeyi daha yüksek olur",
        "İki eğri arasında hiçbir fark olmaz",
        "Katalizörlü eğri daha geniş bir tepkime koordinatına sahip olur",
        "Katalizörlü eğrinin ürün enerji düzeyi daha düşük olur"
      ],
      "correct": 0,
      "explain": "Katalizör yalnızca aktivasyon enerjisi engelinin yüksekliğini (tepe noktasını) düşürür; tepken ve ürünlerin potansiyel enerji düzeyleri, dolayısıyla ΔH değişmeden kalır."
    },
    {
      "difficulty": "orta",
      "text": "FeCl2 üretim deneyinde yalnızca demirin biçimi (levha/talaş/toz) değiştirilip HCl derişimi ve demir kütlesi sabit tutuluyor. Bu deneyin bağımsız değişkeni nedir?",
      "options": [
        "Üretilen FeCl2 miktarı",
        "HCl derişimi",
        "Demirin biçimi (temas yüzeyi)",
        "Demir kütlesi",
        "Sıcaklık"
      ],
      "correct": 2,
      "explain": "Bağımsız değişken, araştırmacının kasıtlı olarak değiştirdiği değişkendir; bu deneyde bu, demirin biçimidir (temas yüzeyini belirler). HCl derişimi ve demir kütlesi kontrol değişkenleridir; üretilen FeCl2 miktarı ise bağımlı değişkendir."
    },
    {
      "difficulty": "orta",
      "text": "Direkt sentez yöntemiyle H2(g) + Cl2(g) → 2HCl(g) tepkimesinde üç özdeş kapta aynı koşullarda farklı derişimlerde H2 ve Cl2 gazları bulunuyor. En yüksek derişime sahip kapta beklenen sonuç nedir?",
      "options": [
        "En yavaş tepkime ve en az HCl üretimi",
        "En hızlı tepkime ve birim zamanda en fazla HCl üretimi",
        "Derişimin tepkime hızıyla ilgisi yoktur, sonuç aynı olur",
        "Yalnızca sıcaklık artarsa hızlanır",
        "Tepkime hiç gerçekleşmez"
      ],
      "correct": 1,
      "explain": "En yüksek derişime sahip kapta birim hacimdeki H2 ve Cl2 tanecik sayısı en fazla olduğundan çarpışma sıklığı en yüksektir; bu da en hızlı tepkimeyi ve birim zamanda en fazla HCl üretimini sağlar."
    },
    {
      "difficulty": "orta",
      "text": "Bir tepkimede hem sıcaklık hem derişim aynı anda artırılıyor. Tepkime hızındaki değişim hakkında ne söylenebilir?",
      "options": [
        "İki etken birbirini götürür, hız değişmez",
        "Yalnızca sıcaklığın etkisi geçerli olur, derişim önemsizdir",
        "Yalnızca derişimin etkisi geçerli olur, sıcaklık önemsizdir",
        "Tepkime hızı kesinlikle azalır",
        "Her iki etken de tepkime hızını artırıcı yönde çalıştığından tepkime hızının artması beklenir"
      ],
      "correct": 4,
      "explain": "Sıcaklık artışı (kinetik enerjiyi artırarak) ve derişim artışı (çarpışma sıklığını artırarak) her ikisi de ayrı ayrı tepkime hızını artırıcı etkenlerdir; birlikte uygulandıklarında toplam etkinin tepkime hızını artırması beklenir."
    },
    {
      "difficulty": "orta",
      "text": "Bir deney tasarımında 'bağımsız değişken', 'bağımlı değişken' ve 'kontrol değişkenleri' kavramları neden önemlidir?",
      "options": [
        "Yalnızca raporun uzunluğunu artırmak için kullanılır",
        "Yalnızca bir etkenin (bağımsız değişken) etkisini net olarak gözlemleyebilmek için diğer tüm etkenlerin (kontrol değişkenleri) sabit tutulması gerekir; sonuç bağımlı değişkende gözlenir",
        "Bu kavramların tepkime hızıyla hiçbir ilgisi yoktur",
        "Yalnızca sıcaklık deneylerinde kullanılır",
        "Kontrol değişkenleri her deneyde değiştirilmelidir"
      ],
      "correct": 1,
      "explain": "Bilimsel bir deneyde, incelenen etkenin (bağımsız değişken) sonuç (bağımlı değişken) üzerindeki etkisini güvenilir biçimde belirlemek için, o etken dışındaki tüm diğer değişkenlerin (kontrol değişkenleri) sabit tutulması gerekir; aksi hâlde gözlenen etkinin hangi değişkenden kaynaklandığı belirsizleşir."
    },
    {
      "difficulty": "orta",
      "text": "Bir kimyager, oda sıcaklığında yavaş ilerleyen bir tepkimeyi hem sıcaklığı artırarak hem de katalizör ekleyerek hızlandırmayı deniyor. Bu iki yöntemin tepkimeyi hızlandırma mekanizmaları arasındaki temel fark nedir?",
      "options": [
        "Sıcaklık artışı taneciklerin kinetik enerjisini artırarak eşik değerini aşan tanecik oranını yükseltirken; katalizör aktivasyon enerjisinin kendisini düşürür",
        "İkisi de tepkime entalpisini değiştirir",
        "İkisi de aynı mekanizmayla çalışır, fark yoktur",
        "Katalizör sıcaklığı düşürür, sıcaklık artışı katalizörü etkisiz hâle getirir",
        "Sıcaklık artışı yalnızca ürünleri etkiler, katalizör yalnızca tepkenleri etkiler"
      ],
      "correct": 0,
      "explain": "Sıcaklık artışı, aktivasyon enerjisi engelini olduğu gibi bırakıp taneciklerin kinetik enerjisini artırarak bu engeli aşabilecek tanecik oranını yükseltir. Katalizör ise engelin kendisini (aktivasyon enerjisini) düşürerek daha fazla taneciğin bu düşük engeli aşmasını sağlar. İki mekanizma farklıdır ama sonuç olarak ikisi de etkin çarpışma sayısını artırır."
    },
    {
      "difficulty": "orta",
      "text": "Bir tepkimede yalnızca katı tepkenin parça büyüklüğü değiştiriliyor, diğer tüm koşullar (kütle, derişim, sıcaklık) sabit tutuluyor. Gözlenen hız farkının nedeni olarak hangi etken gösterilebilir?",
      "options": [
        "Derişim",
        "Temas yüzeyi",
        "Katalizör",
        "Sıcaklık",
        "Madde cinsi"
      ],
      "correct": 1,
      "explain": "Parça büyüklüğündeki değişiklik doğrudan katı maddenin yüzey alanını (temas yüzeyini) etkiler; diğer tüm koşullar sabit tutulduğundan gözlenen hız farkının nedeni temas yüzeyidir."
    },
    {
      "difficulty": "orta",
      "text": "Fotoğraf makinesindeki eski film teknolojisinde, gümüş bileşiklerinin ışığa duyarlı tepkimesi soğuk ortamda saklandığında yavaşlar. Bu gözlem hangi etkenle açıklanır?",
      "options": [
        "Temas yüzeyi",
        "Katalizör",
        "Madde cinsi",
        "Derişim",
        "Sıcaklık"
      ],
      "correct": 4,
      "explain": "Soğuk ortamda taneciklerin kinetik enerjisi düşer, eşik değerini aşabilecek tanecik oranı azalır; bu yüzden düşük sıcaklık tepkimeyi yavaşlatır. Bu, sıcaklığın tepkime hızına etkisiyle açıklanan bir durumdur."
    },
    {
      "difficulty": "orta",
      "text": "Bir öğrenci 'katalizör eklemek, tepkenlerin derişimini artırmakla aynı etkiyi yaratır, ikisi birbirinin yerine geçebilir' diyor. Bu ifadenin mekanizma açısından eksikliği nedir?",
      "options": [
        "Katalizör her zaman derişimden daha güçlü bir etkendir",
        "İfade tamamen doğrudur, eksiklik yoktur",
        "Derişim artışı çarpışma sıklığını artırırken katalizör aktivasyon enerjisini düşürür; ikisi tepkimeyi hızlandırma sonucunda benzeşse de farklı mekanizmalarla çalışır ve her durumda birbirinin yerini tam tutmayabilir",
        "Derişim artışı hiçbir zaman tepkimeyi hızlandırmaz",
        "Katalizör ve derişim aynı fiziksel büyüklüktür"
      ],
      "correct": 2,
      "explain": "Derişim artışı ve katalizör ekleme, tepkimeyi hızlandırma SONUCU açısından benzer görünse de birbirinden tamamen farklı mekanizmalarla çalışır: derişim çarpışma SIKLIĞINI artırırken katalizör aktivasyon enerjisi ENGELİNİ düşürür. Bu yüzden 'birbirinin yerine geçebilir' genellemesi mekanizma düzeyinde yanıltıcıdır."
    },
    {
      "difficulty": "zor",
      "statements": {
        "items": [
          "Sıcaklık artışı ile katalizör eklenmesi, ikisi de tepkime hızını artırsa da birbirinden farklı mekanizmalarla çalışır.",
          "Bir tepkimenin hızı yalnızca tek bir etkenden değil, birden fazla etkenin bir arada etkisinden belirlenebilir.",
          "Temas yüzeyi etkisi yalnızca gaz fazındaki tepkimeler için geçerlidir."
        ]
      },
      "text": "Bu önermelerden hangileri doğrudur?",
      "options": [
        "II ve III",
        "I, II ve III",
        "Yalnız I",
        "I ve II",
        "Yalnız III"
      ],
      "correct": 3,
      "explain": "I doğrudur; sıcaklık kinetik enerjiyi artırırken katalizör aktivasyon enerjisini düşürür, farklı mekanizmalardır. II doğrudur; gerçek koşullarda birden fazla etken aynı anda etkili olabilir. III yanlıştır; temas yüzeyi etkisi özellikle katı tepkenlerin bulunduğu heterojen tepkimeler için geçerlidir, gaz fazıyla sınırlı değildir."
    },
    {
      "difficulty": "zor",
      "dialogue": {
        "turns": [
          {
            "who": "Öğrenci A",
            "text": "Katalizör eklemek her zaman en iyi çözüm, çünkü tepkimeyi hızlandırırken hiçbir yan etkisi yok."
          },
          {
            "who": "Öğrenci B",
            "text": "Bu tam doğru olmayabilir; katalizörler genellikle belirli tepkimelere özgüdür (seçicidir), her tepkime için uygun bir katalizör bulunamayabilir. Ayrıca bazı endüstriyel katalizörler pahalı veya zehirlenmeye (etkisiz hâle gelmeye) açık olabilir."
          }
        ]
      },
      "text": "Bu tartışmaya göre hangi öğrencinin görüşü daha temkinli ve gerçekçidir?",
      "options": [
        "Verilen bilgiyle karar verilemez",
        "İkisi de aynı derecede haklıdır",
        "Yalnız Öğrenci A",
        "İkisi de haksızdır",
        "Yalnız Öğrenci B"
      ],
      "correct": 4,
      "explain": "Öğrenci B'nin görüşü daha gerçekçidir. Katalizörler tepkimeyi hızlandırsa da her tepkime için uygun bir katalizör bulunması garanti değildir; ayrıca katalizörlerin maliyeti, seçiciliği ve zamanla etkisini yitirmesi (zehirlenmesi) gibi pratik kısıtlar da göz önünde bulundurulmalıdır."
    },
    {
      "difficulty": "zor",
      "text": "Bir araştırmacı aynı kütledeki bir katı maddeyi (a) tek bir büyük küp, (b) 8 eşit küçük küp, (c) toz hâline getiriyor. Toplam kütle ve hacim aynı kalırken bu üç durumda toplam yüzey alanı nasıl sıralanır ve tepkime hızı beklentisi nedir?",
      "options": [
        "Yüzey alanı: büyük küp > küçük küpler > toz; tepkime hızı da bu sırayla azalır",
        "Yüzey alanı yalnızca hacme bağlıdır, parçalanma miktarına bağlı değildir",
        "Yüzey alanı üçünde de aynıdır, çünkü toplam kütle ve hacim değişmemiştir",
        "Yüzey alanı: toz > küçük küpler > büyük küp; tepkime hızı da bu sırayla azalır",
        "Bu senaryoda yüzey alanı hesaplanamaz"
      ],
      "correct": 3,
      "explain": "Aynı hacimdeki bir katı küçük parçalara bölündükçe toplam yüzey alanı artar (hacim sabit kalsa da yüzey/hacim oranı büyür); toz hâli en büyük toplam yüzey alanına sahiptir. Bu nedenle tepkime hızı toz > küçük küpler > büyük küp sırasıyla azalır."
    },
    {
      "difficulty": "zor",
      "text": "Bir kimyager, iki farklı tepkimeyi karşılaştırıyor: 1. tepkime yalnızca 2 molekülün çarpışmasıyla, 2. tepkime ise 3 molekülün AYNI ANDA çarpışmasıyla gerçekleşiyor. Aynı derişim ve sıcaklık koşullarında hangi tepkimenin genellikle daha yavaş olması beklenir ve nedeni nedir?",
      "options": [
        "2. tepkime her zaman daha hızlıdır çünkü daha fazla molekül çarpışır",
        "İkisi de aynı hızda gerçekleşir, molekül sayısı önemsizdir",
        "2. tepkime, çünkü üç molekülün aynı anda uygun geometride ve yeterli enerjiyle çarpışması, iki molekülün çarpışmasından istatistiksel olarak çok daha düşük olasılıklıdır",
        "1. tepkime, çünkü daha az molekül içerir",
        "Molekül sayısının tepkime hızıyla hiçbir ilgisi yoktur"
      ],
      "correct": 2,
      "explain": "Üç ayrı taneciğin tam olarak aynı anda, uygun geometride ve yeterli enerjiyle çarpışması, iki taneciğin çarpışmasından çok daha düşük bir olasılığa sahiptir (üçlü çarpışmalar istatistiksel olarak nadirdir). Bu yüzden çok sayıda tanecik gerektiren tepkimeler genellikle yavaş gerçekleşir; bu tür tepkimeler genellikle birden fazla basit basamak (mekanizma) üzerinden ilerler."
    },
    {
      "difficulty": "zor",
      "text": "'Sıcaklık arttıkça bir tepkimenin aktivasyon enerjisi de düşer, bu yüzden hızlanır' iddiası öne sürülüyor. Bu ifadedeki kavram yanılgısı nedir?",
      "options": [
        "Aktivasyon enerjisi kavramı sıcaklıkla hiç ilişkili değildir",
        "Sıcaklık aktivasyon enerjisini artırır, düşürmez",
        "Sıcaklık yalnızca tepkime entalpisini düşürür",
        "İfade tamamen doğrudur, kavram yanılgısı yoktur",
        "Sıcaklık aktivasyon enerjisini DEĞİŞTİRMEZ; yalnızca bu enerjiye ulaşabilen tanecik oranını artırır. Öğrenci, sıcaklığın etkisini katalizörün etkisiyle karıştırmaktadır"
      ],
      "correct": 4,
      "explain": "Bu, sık yapılan bir kavram yanılgısıdır: sıcaklık artışı aktivasyon enerjisinin kendisini düşürmez, tepkimenin izlediği yolu da değiştirmez. Sıcaklık yalnızca taneciklerin kinetik enerji dağılımını değiştirerek eşik değerini (aktivasyon enerjisini) aşabilecek tanecik oranını artırır. Aktivasyon enerjisini gerçekten düşüren etken katalizördür."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimede yalnızca temas yüzeyi artırılıyor (derişim, sıcaklık, madde cinsi sabit). Bu değişikliğin tepkimenin aktivasyon enerjisi üzerindeki etkisi nedir?",
      "options": [
        "Aktivasyon enerjisini düşürür",
        "Aktivasyon enerjisini değiştirmez; yalnızca birim zamandaki çarpışma sayısını (dolayısıyla etkin çarpışma sayısını) artırır",
        "Temas yüzeyinin aktivasyon enerjisiyle hiçbir ilişkisi yoktur, bu yüzden karşılaştırma anlamsızdır",
        "Aktivasyon enerjisini yükseltir",
        "Aktivasyon enerjisini sıfırlar"
      ],
      "correct": 1,
      "explain": "Temas yüzeyinin artması, tepkimenin doğasını (aktivasyon enerjisini) değiştirmez; yalnızca tepken tanecikleri arasında birim zamanda gerçekleşen çarpışma sayısını artırarak etkin çarpışma sayısını yükseltir. Bu, sıcaklığın etkisine benzer bir mantıkla (Ea sabit, çarpışma/erişim sayısı artıyor) çalışır ama farklı bir fiziksel nedene (geometrik erişilebilirlik) dayanır."
    },
    {
      "difficulty": "zor",
      "text": "Bir fabrika, bir tepkimenin hızını artırmak için üç seçenek arasında karar veriyor: (1) sıcaklığı yükseltmek, (2) katalizör eklemek, (3) tepkenleri toz hâline getirmek. Enerji maliyeti ve ürün kalitesi açısından bu üç yöntemin ortak noktası nedir?",
      "options": [
        "Bu üç yöntemin hiçbiri etkin çarpışmayla ilgili değildir",
        "Yalnızca katalizör etkin çarpışma sayısını artırır, diğer ikisi artırmaz",
        "Üçü de birbirinin tam eşdeğeridir, hangisi seçilirse seçilsin sonuç aynıdır",
        "Üçü de tepkimenin ΔH değerini değiştirir",
        "Üçü de sonuçta etkin çarpışma sayısını artırarak tepkimeyi hızlandırır, ancak farklı mekanizmalar ve farklı pratik maliyetler (enerji, malzeme, ekipman) içerir"
      ],
      "correct": 4,
      "explain": "Sıcaklık artırma (kinetik enerjiyi artırarak), katalizör ekleme (aktivasyon enerjisini düşürerek) ve toz hâline getirme (çarpışma sıklığını artırarak) farklı mekanizmalarla çalışsa da hepsi sonuçta etkin çarpışma sayısını artırır. Ancak enerji maliyeti (sıcaklık artırmak enerji gerektirir), malzeme maliyeti (katalizör pahalı olabilir) ve uygulanabilirlik (toz hâline getirme her madde için pratik olmayabilir) açısından farklı pratik sonuçları vardır."
    },
    {
      "difficulty": "zor",
      "text": "Bir deneyde 'temas yüzeyinin artması tepkime hızını artırır' hipotezi test ediliyor, ancak deney sırasında sıcaklık da kontrolsüz şekilde yükseliyor (örneğin ortam güneşe maruz kalıyor). Bu durumun deneyin geçerliliğine etkisi nedir?",
      "options": [
        "Hiçbir etkisi yoktur, sonuç yine de yalnızca temas yüzeyine atfedilebilir",
        "Deneyin geçerliliği zedelenir; gözlenen hız artışının temas yüzeyinden mi yoksa kontrolsüz sıcaklık artışından mı kaynaklandığı ayırt edilemez",
        "Sıcaklık değişimi yalnızca gaz tepkimelerini etkiler, bu deneyi etkilemez",
        "Bu durumda hipotez kesinlikle doğrulanmış sayılır",
        "Sıcaklık değişimi deneyi otomatik olarak geçersiz kılmaz, çünkü sıcaklık zaten önemsiz bir etkendir"
      ],
      "correct": 1,
      "explain": "Bilimsel bir deneyde incelenen etken (burada temas yüzeyi) dışındaki tüm değişkenlerin (burada sıcaklık) sabit tutulması gerekir. Sıcaklık kontrolsüz şekilde değişirse, gözlenen hız artışının temas yüzeyinden mi yoksa sıcaklıktan mı kaynaklandığı ayırt edilemez; bu, deneyin iç geçerliliğini zedeler."
    },
    {
      "difficulty": "zor",
      "text": "Bir kimyager, oda sıcaklığında çok yavaş ilerleyen bir tepkimenin hızını hem katalizör kullanarak hem de derişimi çok yükselterek artırmayı deniyor ve her iki yöntemle de benzer bir hız artışı elde ediyor. Bu iki yöntemin 'benzer sonucu farklı yollardan elde etmesi' ne anlama gelir?",
      "options": [
        "Katalizör ve derişim değişikliği matematiksel olarak birbirinin yerine tam olarak geçebilir her durumda",
        "Bu sonuç, katalizörün aslında bir derişim etkisi olduğunu kanıtlar",
        "Bu bir tesadüftür ve hiçbir genel ilke ile açıklanamaz",
        "İki yöntem aslında aynı fiziksel mekanizmaya sahiptir",
        "Tepkime hızı tek bir etkene indirgenemeyen, birden fazla farklı mekanizmayla (aktivasyon enerjisini düşürme, çarpışma sıklığını artırma) etkilenebilen bir büyüklüktür"
      ],
      "correct": 4,
      "explain": "Tepkime hızı, farklı fiziksel mekanizmalarla (aktivasyon enerjisini düşürme, çarpışma sıklığını artırma, kinetik enerjiyi artırma vb.) benzer sonuçlara ulaşılabilen çok yönlü bir büyüklüktür. Katalizör aktivasyon enerjisini düşürürken, derişim artışı çarpışma sıklığını artırır; farklı yollardan olsa da ikisi de etkin çarpışma sayısını yükselterek benzer bir hız artışına yol açabilir."
    },
    {
      "difficulty": "zor",
      "text": "Bir öğrenci, 'temas yüzeyi etkisi yalnızca katı-sıvı ya da katı-gaz tepkimelerinde önemlidir, iki gaz ya da iki sıvı arasındaki tepkimelerde temas yüzeyinden söz edilemez' diyor. Bu ifade için en doğru değerlendirme hangisidir?",
      "options": [
        "Doğrudur, ama yalnızca gazlar için geçerlidir, sıvılar için geçerli değildir",
        "Yanlıştır; temas yüzeyi kavramı her tepkime türü için aynı derecede geçerlidir",
        "Bu konuda genel bir ilke yoktur",
        "Yanlıştır; sıvı ve gazların yüzey alanı hiçbir zaman değişmez",
        "Doğrudur; temas yüzeyi etkisi özellikle katı tepkenlerin bulunduğu heterojen tepkimelerde belirgindir, çünkü katı yüzeyler homojen sıvı/gaz karışımlarından farklı olarak sabit bir sınır oluşturur"
      ],
      "correct": 4,
      "explain": "Temas yüzeyi kavramı, tepkimenin gerçekleştiği sınır bölgesiyle ilgilidir. İki gaz ya da iki sıvı birbiri içinde karıştığında (homojen karışım) tanecikler ortam boyunca dağılır ve ayrı bir 'yüzey' sınırı belirgin değildir. Ancak bir katı tepken söz konusu olduğunda (heterojen tepkime), tepkime yalnızca katının yüzeyinde gerçekleşebilir; bu yüzden katı tepkenlerin yüzey alanı (parça büyüklüğü) tepkime hızını belirgin biçimde etkiler."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimede madde cinsinin etkisini incelemek için demir, çinko ve magnezyum parçaları ayrı ayrı aynı derişimdeki HCl ile tepkimeye sokuluyor. Üç metalin tepkime hızlarının farklı çıkması hangi düzeyde açıklanabilir?",
      "options": [
        "Üç metalin de tepkime hızı mutlaka aynı olmalıdır, farklıysa deney hatalıdır",
        "Yalnızca metallerin rengiyle açıklanabilir",
        "Yalnızca metallerin kütlesiyle açıklanabilir",
        "Metallerin atom düzeyindeki reaktiviteleri (elektron verme eğilimleri, bağ/etkileşim güçleri) farklı olduğundan, aynı asitle etkin çarpışma sonucu tepkimeye girme olasılıkları da farklıdır",
        "Metallerin sıcaklığı farklı olduğu için farklıdır"
      ],
      "correct": 3,
      "explain": "Madde cinsi etkisi, farklı metallerin atom düzeyindeki kimyasal reaktivitesinden (elektron verme eğilimi, oluşan bağların gücü vb.) kaynaklanır. Aynı derişim ve sıcaklık koşullarında bile farklı metaller HCl ile farklı hızlarda tepkimeye girer; bu, madde cinsinin bağımsız bir etken olarak tepkime hızını belirlediğini gösterir."
    },
    {
      "difficulty": "zor",
      "text": "Bir tepkimede sıcaklık iki katına çıkarılıyor ama tepkime hızı yalnızca hafifçe artıyor (örneğin %10). Bu, 'sıcaklık artışının tepkimeyi her zaman büyük oranda hızlandırdığı' genellemesiyle çelişir mi?",
      "options": [
        "Hayır; sıcaklığın etkisinin büyüklüğü tepkimeden tepkimeye değişebilir (örneğin aktivasyon enerjisi çok düşükse etkin çarpışma oranı zaten yüksektir, artışın etkisi görece küçük kalabilir); nitel eğilim (artış) korunur ama büyüklüğü değişkendir",
        "Evet, bu durum imkânsızdır ve genellemeyi tamamen geçersiz kılar",
        "Sıcaklığın hiçbir etkisi olmadığı sonucuna varılmalıdır",
        "Bu, ölçüm cihazının bozuk olduğunu gösterir",
        "Bu durumda tepkime kesinlikle katalizörlüdür"
      ],
      "correct": 0,
      "explain": "Sıcaklık artışının tepkime hızına etkisinin büyüklüğü, tepkimenin aktivasyon enerjisine ve diğer koşullara bağlı olarak değişebilir. Genel nitel eğilim (sıcaklık artınca hız artar) çoğu tepkime için geçerli olsa da, artışın büyüklüğü tepkimeden tepkimeye farklılık gösterebilir; bu bir çelişki değil, doğal bir değişkenliktir."
    },
    {
      "difficulty": "zor",
      "text": "Bir kimyager, katalizörün tepkime hızını artırdığını ama tepkimenin ürün verimini (elde edilen ürün miktarını) DEĞİŞTİRMEDİĞİNİ gözlemliyor. Bu gözlem, katalizörün etki mekanizmasıyla nasıl tutarlıdır?",
      "options": [
        "Tutarsızdır; katalizör ürün miktarını da artırmalıdır",
        "Katalizörün ürün miktarıyla hiçbir ilişkisi tanımsızdır",
        "Tutarsızdır; katalizör tepkime entalpisini değiştirdiği için ürün miktarı da değişmelidir",
        "Bu gözlem katalizörün aslında bir tepken olduğunu gösterir",
        "Tutarlıdır; katalizör yalnızca tepkimenin ne kadar HIZLI dengeye/tamamlanmaya ulaştığını etkiler, tepken ve ürünlerin enerji düzeylerini (dolayısıyla nihai denge durumunu) değiştirmediği için nihai ürün miktarı aynı kalır"
      ],
      "correct": 4,
      "explain": "Katalizör yalnızca aktivasyon enerjisini düşürerek tepkimenin daha hızlı ilerlemesini sağlar; tepken ve ürünlerin potansiyel enerji düzeylerini değiştirmediğinden nihai olarak elde edilecek ürün miktarını (yalnızca ona ULAŞMA süresini) etkilemez. Bu, katalizörün 'hız değiştirir, denge/verim değiştirmez' ilkesiyle tutarlıdır."
    },
    {
      "difficulty": "zor",
      "text": "Bir deneyde, aynı miktardaki bir katı tepken hem çok küçük parçalara bölünmüş hem de çok yüksek sıcaklığa çıkarılmış olarak test ediliyor ve tepkime aşırı hızlı, kontrolsüz biçimde (patlama gibi) gerçekleşiyor. Bu durum, temas yüzeyi ve sıcaklık etkenlerinin birlikte çalışması hakkında ne gösterir?",
      "options": [
        "İki etken birbirini iptal eder, tepkime yavaşlamalıydı",
        "Bu sonuç yalnızca gazlar için geçerlidir, katılar için geçerli değildir",
        "Birden fazla hızlandırıcı etkenin (yüksek temas yüzeyi + yüksek sıcaklık) aynı anda uygulanması, etkilerin toplanarak/birikerek çok büyük bir hız artışına (ve güvenlik riskine) yol açabilir",
        "Sıcaklığın temas yüzeyiyle hiçbir etkileşimi yoktur",
        "Patlama, kimyasal tepkimelerle asla ilişkilendirilemez"
      ],
      "correct": 2,
      "explain": "Temas yüzeyinin artırılması (çarpışma sıklığını artırarak) ve sıcaklığın yükseltilmesi (kinetik enerjiyi artırarak) her ikisi de bağımsız olarak tepkimeyi hızlandırır. Bu iki etkenin aynı anda ve aşırı derecede uygulanması, etkin çarpışma sayısında çok büyük bir artışa yol açarak tepkimenin kontrolsüz derecede hızlanmasına (örneğin toz patlamalarında görülen duruma) neden olabilir; bu, endüstriyel güvenlik açısından önemli bir husustur."
    },
    {
      "difficulty": "zor",
      "text": "Bir öğrenci, 'bir tepkimenin hızını artırmak için mutlaka bu altı etkenden en az birini değiştirmek gerekir; başka hiçbir yol yoktur' diyor. Bu iddia için en dikkatli değerlendirme hangisidir?",
      "options": [
        "Yanlıştır, çünkü hiçbir etken tepkime hızını gerçekten değiştiremez",
        "Bu konuda kesin bir yargıya varmak mümkün değildir",
        "Yanlıştır, çünkü tepkime hızını değiştirmenin bu altı etkenle ilgisi olmayan başka yolları da her zaman vardır",
        "Doğrudur, ama yalnızca gaz tepkimeleri için",
        "Doğrudur, çünkü tepkime hızı yalnızca bu altı etkenle açıklanabilecek şekilde tanımlanmıştır; bu etkenlerin hepsi de temelde çarpışma sıklığını veya etkinliğini değiştirerek çalışır"
      ],
      "correct": 4,
      "explain": "Bu modülde ele alınan altı etken (madde cinsi, fiziksel hâl, derişim, sıcaklık, katalizör, temas yüzeyi), tepkime hızını etkileyen bilinen temel yolları kapsar; hepsi nihayetinde etkin çarpışma sayısını (sıklığını ya da başarı oranını) değiştirerek çalışır. Bu çerçevede iddia doğrudur."
    },
    {
      "difficulty": "zor",
      "text": "Bir endüstriyel süreçte hem yüksek sıcaklık hem yüksek basınç (gazlar için derişimi artıran bir etken) kullanılarak bir tepkime hızlandırılıyor, ancak maliyet ve güvenlik nedeniyle yalnızca bir tanesi seçilmek zorunda kalınıyorsa katalizör kullanımı neden genellikle tercih edilen bir alternatif olur?",
      "options": [
        "Katalizör hiçbir maliyet gerektirmez",
        "Katalizör kullanımı sıcaklık ve basıncın etkisini tamamen ortadan kaldırır",
        "Katalizör, yüksek sıcaklık/basınç gibi enerji yoğun ve riskli koşullara ihtiyaç duymadan aktivasyon enerjisini düşürerek benzer bir hız artışını daha güvenli ve enerji açısından daha verimli biçimde sağlayabilir",
        "Katalizör tepkimenin ürün miktarını da katbekat artırır",
        "Katalizör yalnızca laboratuvar ölçeğinde kullanılabilir, endüstride kullanılamaz"
      ],
      "correct": 2,
      "explain": "Yüksek sıcaklık ve basınç uygulamak enerji yoğun ve ekipman açısından maliyetli/riskli olabilir. Katalizör kullanmak, bu zorlu koşullara ihtiyaç duymadan aktivasyon enerjisini düşürerek tepkimeyi hızlandırabildiğinden, birçok endüstriyel süreçte (örneğin Haber-Bosch amonyak sentezi, katalitik konvertörler) tercih edilen, enerji ve maliyet açısından daha verimli bir yoldur."
    }
  ]
};

if (typeof module !== "undefined" && module.exports) {
  module.exports = { QUIZ };
}
