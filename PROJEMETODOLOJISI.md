# Proje Metodolojisi — Etkileşimli Ders Sitesi + Basılabilir Ders Defteri

Bu dosya, AtomLab 9 (Kimya Hayattır ve Atomdan Periyodik Tabloya) projesinde
geliştirilip defalarca hatadan ders çıkararak sertleştirilmiş; yazılımsal,
eğitsel/pedagojik ve ölçme-değerlendirme yöntemlerinin tamamını, **konudan
bağımsız** (subject-agnostic) bir biçimde belgeler. Yeni bir konu/ders için
yeni bir depo kurarken bu dosya o deponun köküne konur ve konuya özel hâle
getirilir (bkz. sonundaki "Yeni Konuya Uyarlama" bölümü).

Bu dosya iki kaynağın damıtılmış birleşimidir:
- Projenin `CLAUDE.md`'si — oturumlar arası kalıcı davranış kuralları ve
  onları doğuran somut hata vakaları.
- Projenin `sablon/` (şablon) dizini — jenerik motor + doküman + QA script'i
  içeren, doğrudan kopyalanıp yeni bir konuya uyarlanabilen çalışan iskelet.

---

## 1. Genel Felsefe

Ürün iki parçadan oluşur ve İKİSİ DE aynı kurallara tabidir:
1. **Etkileşimli web uygulaması** — konuyu modüllere ayıran, her modülde
   gerçek simülasyon/keşif bileşenleri ve bağlam temelli soru bankası
   barındıran bir site.
2. **Basılabilir Ders Defteri** — aynı modülleri, aynı görsel dili, aynı
   kavramları A4 sayfalara dizen, konu anlatımı + kavram kutuları + çözümlü
   örnekler + çalışma sayfaları + cevap anahtarı içeren tek bir HTML (→ PDF).

Bir kural yalnızca uygulamaya veya yalnızca deftere uygulanmaz; ikisine de
aynı anda uygulanır (bkz. madde 8, CLAUDE.md'nin orijinali).

---

## 2. Yazılımsal Yöntem

### 2.1 Mimari

```
index.html                     Ana sayfa: modül kartları + Ders Defteri linki
moduller/0N-modul-adi.html      Her modül kendi HTML dosyası
assets/js/nav.js                Paylaşılan üst menü + "sonraki modül" butonu
assets/js/quiz-engine.js        Jenerik motor: render fonksiyonları + quiz mantığı
assets/js/quiz-data.js          QUIZ = { modulAnahtari: [ {soru...}, ... ] }
assets/js/[konu]-data.js        Konuya özel statik veri (ör. periyodik tablo verisi)
assets/css/style.css            Tüm görsel dil (tek dosya, uygulama+bileşenler)
defter/index.html               Basılabilir ders defteri (bağımsız, kendi <style>'ı var)
yanlislarim.html                Kullanıcının yanlış yaptığı soruları toplayan sayfa
scripts/verify-quiz-data.mjs    Soru bankası QA script'i (bkz. madde 4)
docs/ICERIK-URETIM-REHBERI.md   İçerik üretim rehberi (format menüsü + iş akışı)
```

`quiz-engine.js` ve `style.css`, projenin **tek jenerik/taşınabilir**
parçalarıdır — konudan bağımsızdırlar. Yeni bir konuya geçerken bu iki
dosya (ve `verify-quiz-data.mjs`) olduğu gibi kopyalanır; değişen tek şey
`quiz-data.js`'in İÇERİĞİ ve modül sayfalarının konusudur.

### 2.2 Görsel bileşen kütüphanesi (render fonksiyonları)

Bir soruya veya konu anlatımına görsel gerekiyorsa, METİNLE TARİF ETMEK
YETERLİ DEĞİLDİR (bkz. madde 6.2) — `quiz-engine.js`'teki gerçek bir
`render*` fonksiyonu çağrılır ve sorunun/bölümün içine gömülür. Motorda
birikmiş, tekrar kullanılabilir bileşen menüsü:

- `renderDataTable` — genel veri tablosu
- `renderChart` / `renderCompareLineChart` — çubuk/çizgi grafik, çoklu seri
- `renderStatementList` — I/II/III önerme listesi (D/Y veya "hangileri doğru")
- `renderDialogue` — "Öğrenci A / Öğrenci B" tartışma formatı
- `renderMatchTable` — sol/sağ eşleştirme
- `renderChecklist` — evet/hayır kontrol listesi
- `renderCircleCompare` — gerçek ölçekli daire/boyut karşılaştırma
- `renderPeriodicHighlight` — (konuya özel) tablo/ızgara üzerinde vurgulama
- `renderObjectIcons` — küçük ikon seti (nesne sınıflandırma soruları için)
- `renderCycleDiagram` — döngü/aşama diyagramı
- `renderCareerMap` — kart ızgarası (kariyer/kategori haritası)
- Konuya özel bileşenler (AtomLab 9'da: `renderAtomModel`, `renderNucleusCloud`,
  `renderOrbitalBoxes/Set`, `renderOrbitalShapes`, `renderMoleculeSkeleton`,
  `renderLabEquipment`, `renderGHSPictograms`, `renderDiagonalDiagram`, `renderPhScale`)
  — yeni konu için BENZER MANTIKLA yeni bileşenler yazılır, kopya-yapıştır
  değil.

**Yeni bileşen ne zaman yazılır?** Mevcut menü yetmiyorsa zorlanmaz, yeni bir
`render*` fonksiyonu eklenir — ama şekil/gösterim TÜRÜ piyasadaki ders
kitaplarının o konuyu nasıl gösterdiğine sadık kalır (bkz. madde 3.4).

### 2.3 Soru kartı şeması (`quiz-data.js`)

Her soru düz bir obje: `{ difficulty, kazanim, context?, [görsel alanı]?,
text, options[5], correct, explain }`. Görsel alanı adı motordaki render
fonksiyonuyla birebir eşleşir (`table`, `chart`, `compareChart`,
`statements`, `dialogue`, `matchPairs`, `checklist`, vb.) — `quiz-engine.js`
soru kartını oluştururken bu alanların HEPSİNİ sırayla render eder, dolu
olmayanlar `""` döner.

### 2.4 Modül sayfası deseni

Her modül sayfası: `<div id="nav-root">` → hero → 2-4 "Keşfet" bölümü (her
biri gerçek bir mini-simülasyon/interaktif bileşen) → "Değerlendir" bölümü
(`<div id="quiz-host">`, `renderQuiz()` ile doldurulur) → `<div
id="next-module-root">` (sonraki modüle geçiş butonu, `mountNextModule()`)
→ `<div id="footer-root">`. Script modülü sonunda `mountNav(key)`,
`mountNextModule(key)`, `mountFooter()`, `markVisited(key)`,
`bindJournal(...)`, `renderQuiz(...)` çağrılır.

### 2.5 Test disiplini

Yeni bir görsel bileşen veya soru değişikliği, geçici bir test harness'i
(`_t.html` + `python3 -m http.server` + Playwright screenshot) ile GÖRSEL
olarak doğrulanır, commit'ten önce. Test dosyaları commit edilmeden silinir.
Konsol hatası (pageerror/console.error) sıfır olmalıdır.

---

## 3. Eğitsel / Pedagojik Yöntem

### 3.1 Kapsam disiplini — YALNIZCA resmi müfredat kaynağı

Konu içerikleri (kavramlar, tanımlar, sınıflandırmalar, örnekler) resmi
müfredat kaynağı (ders kitabı PDF'i, kazanım listesi) taranarak oluşturulur.
Kaynağın dışına çıkan, müfredatı aşan hiçbir kavram/terim/formalizm —
bilimsel olarak doğru veya "standart bilgi" görünse bile — kullanılmaz.

**Somut ders (Kuantum Sayısı Olayı):** Bir kazanımın genel başlığından
("orbitallerin bağıl enerjisi") yola çıkıp, kaynağın o kazanımı GERÇEKTE
hangi terimlerle/derinlikte işlediğini yeniden kontrol etmeden, yazarın
kendi genel bilgisinden (üniversite düzeyi kuantum mekaniği formalizmi)
doldurması — 40'tan fazla soruya sistematik olarak sızan bir kapsam
ihlaliydi. **Genel kural:** kazanımın başlığı bilinse bile, kaynakta
GERÇEKTE hangi terimlerle işlendiği önceden ayrıca doğrulanmadan
soru/açıklama yazılmaz. Şüphe anında kaynak taranır veya kullanıcıya
sorulur — varsayılarak devam edilmez.

### 3.2 Telif + doğruluk — evrensel/resmi kaynak varsa O kullanılır

Evrensel/standart/resmi bir gösterimi olan bir şey (uyarı piktogramları, SI
birimleri, periyodik tablo formatı vb.) varsa, o GERÇEK standardın kendisi
(örn. resmi SVG'ler) kullanılır — telif eseri (ders kitabının kendi
çizimi) BİREBİR KOPYALANMAZ, ama "kopyalamıyorum" diyerek gerçeğe
benzemeyen bir şey UYDURULMAZ da. Resmi kaynağı olmayan ama bilimsel/
tarihsel bir gerçekliği temsil eden şeyler (modeller, deney düzenekleri)
özgün ama doğru ve tanınabilir çizilir.

### 3.3 Atıf/kaynak gösterme YASAK — içerik kendi malımızmış gibi sunulur

**Bu, madde 3.2'den bağımsız ikinci bir kuraldır.** Görsel gerçekten render
edilmiş olsa, kapsam kaynağa tam sadık kalsa bile, kaynağın adını
("[Kitap Adı]", "Etkinlik-X.Y", "[Kurum] müfredatına göre" vb.) öğrenciye
görünen `context`/`text`/`explain` alanlarında veya arayüz etiketlerinde
ANMAK bir tür kaçamaktır — içerik dışarıdan alıntılanmış izlenimi verir.
İçerik (grafik, şekil, kavram) kaynağın kapsamına sadık kalınarak KENDİ
özgün öğretim materyalimizmiş gibi sunulur: "Aşağıdaki grafikte...",
"Görseldeki üç şekil..." — hiçbir yerde kaynak adı geçmeden. Bu kural kod
yorumlarına kadar tutarlı uygulanır (geliştirici yorumlarında kaynak adı
geçmesi kritik değildir ama kaçınılması tercih edilir).

### 3.4 Görsellik ve grafik türü — piyasa uyumu

"Özgün olmak", öğrencinin anlamasını zorlaştıran veya piyasadaki alışılmış
gösterim biçimlerinden bilerek FARKLI bir şey üretmek DEMEK DEĞİLDİR.
Piyasa kitapları resmî sınav formatına uygun hazırlanır; öğrenci o görsel
dile aşinadır. Amaç bu dilden sapmak değil, aynı dili konuşup içeriği/
derinliği/soru kurgusunu daha gelişmiş hâle getirmektir. "Özgün" burada
yalnızca "birebir kopya değil, kendi çizdiğimiz" anlamına gelir. Şüphe
anında ölçüt: piyasadaki bir öğrenci/öğretmen bu görseli ilk bakışta
tanıyıp rahatça okuyabilir mi? Değilse özgünlük yanlış anlaşılmış demektir.
Grafik çeşitliliği önemlidir: yalnızca çubuk grafiğe saplanılmaz, konu
uygun olduğunda çizgi grafiği de kullanılır.

### 3.5 Formül/kalıp yasağı

Her soru/görsel kararı, konuyu en iyi nasıl anlatacağını bilen bir öğretmen
ile bunu yazılımla en iyi nasıl göstereceğini bilen bir uzmanın ortak
kararıymış gibi TEK TEK değerlendirilir. Önceden belirlenmiş mekanik bir
dağıtım ("her modülde 2 dialogue + 2 matchPairs + ...") YASAKTIR. Bir
kalıp bulup tüm sorulara mekanik olarak uygulamak, düzeltilmeye çalışılan
yapmacıklığın ta kendisidir.

### 3.6 "Kişi yapıyor" tembelliğinden kaçınma

Sürekli "Bir öğrenci..." / "Ali..." gibi tek-anlatıcı kalıbına
dayanmak yerine, gerçekçi bağlamlar (laboratuvar senaryosu, tablo, gerçek
veri, karşılaştırma) kullanılır. Diyalog formatında ("Öğrenci A/B/C")
birden fazla görüş sunmak istisnadır, kabul edilir.

### 3.7 Açıklama (`explain`) kalitesi

`explain` alanları yalnızca "doğru cevap bu çünkü X" değil, kavramı
gerçekten öğreten, eğitsel bir anlatım içerir.

---

## 4. Ölçme-Değerlendirme Yöntemi (QA)

Her modül için soru bankası şu kriterleri sağlamalıdır ve bu, elle değil
**otomatik bir script'le** (`scripts/verify-quiz-data.mjs`) doğrulanır:

- **Sayı:** modül başına sabit bir hedef (AtomLab 9'da 50).
- **Zorluk dağılımı:** kolay/orta/zor dengeli (AtomLab 9'da 17/17/16).
- **Cevap harfi dağılımı (A-E):** yalnızca "dengeli" değil, **gerçekten
  karışık** olmalı — bloklar hâlinde art arda aynı harf gelmemeli (tahmin
  edilebilir örüntü, örn. ilk 10 soru hep "C", sınav güvenilirliğini
  bozar).
- **Tekrar (dup) kontrolü:** birebir aynı soru metni iki kez kullanılmaz.
- **İsim/kalıp taraması:** "bir öğrenci", "Ali", "kişi" gibi tembel
  anlatıcı kalıplarının oranı bir eşiği aşmamalı (diyalog formatı hariç
  tutulur).

Script her modül için `✅ TEMİZ` / `❌ N sorun bulundu` şeklinde rapor
verir. **Kural:** İçerik/soru değişikliğinden sonra commit/push ÖNCESİ bu
script mutlaka çalıştırılır ve temiz çıkmalıdır.

---

## 5. Süreç Disiplini

### 5.1 "Tamam" sonrası sessiz geri dönüş — zorunlu öz-denetim

Bir yaklaşım değişikliğini kabul ettikten SONRA, işi teslim/commit
etmeden önce kısaca öz-denetim yapılır: "Bu çıktı, az önce tarif edilen
yaklaşımı gerçekten yansıtıyor mu, yoksa eski alışkanlığa mı dönüldü?"
Şüphe varsa, commit'ten ÖNCE somut bir örnekle gösterip onay istenir.

### 5.2 Paylaşılan örnekler = tarz rehberi

Kullanıcı farklı kaynaklardan örnek görsel/soru paylaştığında amaç
"birebir kopyala" değil, "bu TARZI/yaklaşımı referans al, daha ileri
seviye bir versiyon üret"tir. Paylaşılan örneği aç, hangi TASARIM
İLKESİNİ gösterdiğini çıkar, sonra o ilkeyle özgün ve daha ileri bir
versiyon üret.

### 5.3 Belirsizlik anında

Bir talimat yoruma açıksa veya önceki bir kararla çelişiyor gözüküyorsa,
varsayıp devam etmek yerine anlayış kısaca (1-2 cümle) özetlenip onay
istenir.

### 5.4 Bu dosya CANLI bir belgedir

Yeni bir standing-rule (tek seferlik görev değil, kalıcı tercih)
belirtildiğinde, o talimat sözlü kalmaz — aynı oturumda, hemen konunun
`CLAUDE.md`'sine yeni bir madde olarak eklenir. Somut bir olay varsa, kısaca
madde içine yazılır (ileride "neden bu kural var" sorusu tekrar
sorulmasın diye). Dosya güncellemesi commit + push edilir.

### 5.5 Motor dosyalarının çifte bakımı

Eğer proje bir `sablon/` (şablon) kopyası tutuyorsa, canlı sitedeki motor
dosyalarına (`quiz-engine.js`, `style.css`) yapılan HER değişiklik,
şablon kopyasına da aynen yansıtılır.

---

## 6. Yeni Konuya Uyarlama (checklist)

Yeni bir konu için sıfırdan depo kurarken:

1. **Depo/klasör iskeletini kopyala:** `assets/js/quiz-engine.js`,
   `assets/css/style.css`, `assets/js/nav.js`, `index.html`,
   `moduller/00-ornek-modul.html`, `defter/index.html`,
   `scripts/verify-quiz-data.mjs`, `docs/ICERIK-URETIM-REHBERI.md` —
   bunlar jenerik/taşınabilirdir (AtomLab 9'un `sablon/` dizini tam olarak
   budur).
2. **Bu dosyayı** (`PROJE-METODOLOJISI.md`) yeni deponun köküne koy, konuya
   özel adlandırmayı güncelle (proje adı, tema adı) — geri kalan tüm
   ilkeler değişmeden kalır.
3. **`CLAUDE.md` oluştur:** madde 5.4'teki "canlı belge" ilkesiyle, konuya
   özel resmi müfredat kaynağının adını/yolunu ve kapsam sınırını
   (`madde 3.1`'in somut karşılığı) baştan yaz.
4. **Kazanım/konu listesini çıkar:** resmi kaynağı tara, modül sayısını ve
   her modülün kazanım kodunu belirle; `nav.js`'teki `LINKS` dizisini ve
   `quiz-data.js`'in `QUIZ` anahtarlarını buna göre kur.
5. **Görsel bileşen ihtiyacını çıkar:** konu hangi türden görseller
   gerektiriyor (grafik? diyagram? model? harita?) — mevcut motor
   bileşenleri yeterli mi, yeni `render*` fonksiyonu gerekiyor mu, önceden
   karar ver.
6. **Modül modül, soru soru üret** — madde 3'teki pedagojik kurallara
   ve madde 4'teki QA hedeflerine göre; her modül bitince
   `verify-quiz-data.mjs` çalıştır.
7. **Ders Defterini** aynı modüllerle, aynı kutulama sistemiyle
   (`.box.kavram`, `.box.ornek`, `.box.notlarim`, `.worksheet`,
   `.baglam`, `.ca-unit`) paralel kur.
8. Her adımdan sonra Playwright ile konsol hatasız açıldığını doğrula,
   commit'le, QA script'i temiz çıkana kadar tekrarla.

---

*Bu dosya, AtomLab 9 projesinin `CLAUDE.md` ve `sablon/docs/
ICERIK-URETIM-REHBERI.md` dosyalarının konudan bağımsız damıtılmış
birleşimidir (2026-08-19 itibarıyla).*
