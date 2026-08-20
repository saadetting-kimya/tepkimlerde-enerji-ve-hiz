# AtomLab 9 — Kalıcı Kurallar

Bu dosya her oturumun başında otomatik okunur. Buradaki kurallar,
kullanıcının (Saadettin) aynı talimatları tekrar tekrar yazmak zorunda
kalmaması için kalıcı hale getirilmiştir ve benim kendi varsayılan
alışkanlıklarımdan **önceliklidir**. Yeni bir standing-rule (tek
seferlik görev değil, kalıcı tercih) verildiğinde, aynı oturumda bu
dosyaya eklenir (bkz. madde 13).

## 1. PİKTOGRAM OLAYI — somut ders çıkarılan vaka (telif + doğruluk)

Ne oldu: Kullanıcı "evrensel sembolleri (GHS piktogramları) direkt
kullan" dedi. Ben önce MEB kitabından görsel kırpıp kullandım —
YANLIŞ (yayınevi telifi). Uyarılınca "kopya etmiyorum" diyerek bu
kez GERÇEK GHS standardına benzemeyen, anlamsız, kendi uydurduğum
elle-çizim semboller koydum — bu da YANLIŞ (artık doğruluk/işlevsellik
sorunu: piktogram gerçek GHS'yi temsil etmiyor). Doğru çözüm: piktogramın
GERÇEK RESMİ/EVRENSEL kaynağını (GHS Purple Book / Wikimedia'nın resmi
SVG'leri) bulup onu kullanmaktı — ne kopya ne uydurma, standardın
kendisi.

**Genel kural:** "Yayınevi çizimini kopyalama" talimatı ASLA "o zaman
ben uydururum, gerçeğe benzemesi şart değil" anlamına gelmez.
- Evrensel/standart/resmi bir kaynağı olan bir şey (GHS piktogramı,
  periyodik tablo formatı, SI birimleri vb.) varsa → o GERÇEK kaynak
  bulunup kullanılır (`assets/img/ghs/` içindeki resmi SVG'ler gibi).
- Resmi bir kaynağı olmayan ama bilimsel/tarihsel bir gerçekliği
  temsil eden şey (atom modelleri, deney düzenekleri vb.) varsa →
  özgün ama BİLİMSEL OLARAK DOĞRU ve tanınabilir çizilir.
- "Kopya etmemek" hiçbir zaman "yanlış/anlamsız bir şey uydurmak"
  için bahane olamaz.

**"Kullan" demek "atıf yap/metinle tarif et" demek DEĞİLDİR.** Bir
soruda görsel gerekiyorsa, gerçek görsel bileşeni (render fonksiyonu)
o sorunun İÇİNE konur — "Kaynak: MEB Görsel X" gibi bir metin notu
veya sadece context içinde sözel tarif YETERLİ DEĞİLDİR, bu da bir
tür kaçamaktır. Her soruda görsel şart değildir (madde 3), ama
gerektiğinde gerçek, render edilen bir görsel kullanılır.

**ATIF/KAYNAK GÖSTERME OLAYI — somut ders çıkarılan vaka:** MEB'in
Etkinlik-1.8 grafiğini (orbital enerjisi karşılaştırması) hem
uygulamaya hem sorulara işlerken, render bileşenini doğru şekilde
kullanmama rağmen soru metinlerinin İÇİNE "MEB'in Etkinlik-1.8'inde
gösterildiği gibi...", "MEB'in orbital enerji karşılaştırma
etkinliğinde..." gibi ifadeler yazdım — yani kaynağı öğrenciye
görünen metinde açıkça isimlendirdim. Bu, "render et, atıf yapma"
kuralının farklı bir kılığa bürünmüş ihlaliydi: görsel gerçekten
render edilmiş olsa bile, MEB'i/kitabı/etkinlik adını soru
context/text/explain alanlarında ismen anmak yine bir tür kaçamaktır
— sanki içerik bize değil, dışarıdan alıntılanan bir kaynağa aitmiş
izlenimi verir. **Doğru yaklaşım:** İçerik (grafik, şekil, kavram)
MEB'in müfredat kapsamına sadık kalınarak KENDİ özgün öğretim
materyalimizmiş gibi sunulur — "Aşağıdaki grafikte...", "Görseldeki
üç şekil..." gibi doğrudan ifadelerle, hiçbir yerde "MEB", "MEB
kitabı", "Etkinlik-X.Y" gibi kaynak adı geçmeden. Kapsamın MEB'e
sadık kalması (madde 5) ile içeriğin metinde MEB'e atfedilmemesi
(bu madde) birbirinden bağımsız iki kuraldır, ikisi de aynı anda
uygulanır.

## 2. Paylaşılan örnekler = TARZ REHBERİ, ne kopya ne görmezden gelme

Kullanıcı farklı yayınların ve MEB kitabının çizgi grafiklerini, kap/
beher şekillerini, atom modellerini, soru köklerini paylaştığında
amacı **"bunu birebir kopyala"** DEĞİL, **"bu TARZI/yaklaşımı referans
al, daha da geliştirilmiş, daha ileri seviye soru kökleri/önermeler
üret"** demektir. Buna "tamam" dedikten sonra sessizce eski
alışkanlığıma dönmek — tekrarlanan, kabul edilemez bir hata.

Somut adım: paylaşılan örneği aç, incele, hangi TASARIM İLKESİNİ
gösterdiğini çıkar (örn. "çoklu örnekle karşılaştırmalı öğretme",
"gerçekçi laboratuvar bağlamı", "kavram yanılgısı hedefleyen
çeldirici" gibi) — sonra o ilkeyi kullanarak ÖZGÜN ve DAHA İLERİ bir
versiyon üret. Kopyalamamak = ilkeyi görmezden gelmek değildir.

## 3. Kimya öğretmeni + yazılım uzmanı gibi düşün — FORMÜL YASAK

Her soru/görsel kararı, konuyu en iyi nasıl anlatacağını bilen bir
kimya öğretmeni ile bunu yazılımla en iyi nasıl göstereceğini bilen
bir uzmanın ortak kararıymış gibi, TEK TEK değerlendirilir.
- Her soruda görsel şart DEĞİL. Ama görsel kullanılsın/kullanılmasın,
  bu karar o sorunun içeriğinden gelir — önceden belirlenmiş bir
  "formül/tarif" değil (örn. "her modülde 2 dialogue + 2 matchPairs +
  2 statements + 2 checklist" gibi mekanik dağıtım YASAK).
- Bir kalıp bulup onu tüm sorulara/modüllere mekanik olarak
  uygulamak — biçim çeşitlendirmede bile — düzeltilmeye çalışılan
  yapmacıklığın ta kendisidir.
- Her modülün mevcut içeriği önce okunur; gerçekten tekdüze olan
  kısımlar hedeflenir, zaten çeşitli/iyi olan kısımlara dokunulmaz.

## 4. "Tamam" sonrası sessiz geri dönüş — ZORUNLU ÖZ-DENETİM

Bir yaklaşım değişikliğini kabul ettikten ("tamam" dedikten) SONRA,
işi teslim etmeden/commit etmeden önce kısaca kendimi denetlerim:
"Bu çıktı, kullanıcının az önce tarif ettiği yaklaşımı gerçekten
yansıtıyor mu, yoksa ben yine eski alışkanlığıma mı döndüm?" Şüphe
varsa, commit etmeden ÖNCE somut bir örnekle gösterip onay isterim —
sessizce ilerlemem ve "tamam" demiş olmayı yeterli saymam.

## 5. Kavram kapsamı — YALNIZCA MEB kitabı

Konu içerikleri (kavramlar, tanımlar, sınıflandırmalar, örnekler)
**MEB kitabı (`kimya_9 1. tema.pdf`) taranarak** oluşturulur. MEB
kitabının dışında, müfredat kapsamını aşan yeni kavram/terim/detay
EKLENMEZ — bilimsel olarak doğru ve ilginç olsa bile, 9. sınıf MEB
müfredatının kapsamadığı bir kavramı soruya/açıklamaya sokmak
YASAK. Amaç öğrenciyi MEB'in sınav ve müfredat çerçevesinde
hazırlamak; kapsam dışına taşarak "zenginleştirmek" değil.
- Yeni bir modül/soru grubuna başlamadan önce, o konuya karşılık
  gelen MEB kitabı sayfaları yeniden taranır (bkz. madde 2).
- Bir kavramın MEB kitabında geçip geçmediğinden emin değilsem,
  varsayıp eklemek yerine kitaptan doğrulanır veya kullanıcıya
  sorulur.

**KUANTUM SAYISI OLAYI — somut ders çıkarılan vaka:** "Atom
Orbitalleri ve Elektron Dizilimi" (KİM.9.1.6) ve "Periyodik Tabloda
Yer Bulma" (KİM.9.1.7) modüllerinde, kazanımın "orbitallerin bağıl
enerjilerine ilişkin TAHMİNDE bulunabilme" (yani diyagonal kural
diyagramını okuyup ezberleme/tahmin becerisi) olmasına rağmen, ben
kendi genel kimya bilgimden "baş kuantum sayısı (n)", "açısal
momentum kuantum sayısı (l)" ve bunların toplamı olan "n+l kuralı"
(Madelung kuralı) gibi MEB'in bu kazanımda hiç geçmeyen, üniversite
düzeyi bir formalizmi soruların ANA MANTIĞI hâline getirdim — bu
tek bir hata değil, orbital modülünün 50 sorusundan 29'una,
teori modülünün 6'sına ve yerbulma modülünün 5'ine sistematik olarak
sızmış bir kapsam ihlaliydi. Neden oldu: Kazanımın genel başlığından
("orbitallerin bağıl enerjisi") yola çıkıp, MEB'in kitapta gerçekte
NASIL öğrettiğini (diyagonal kural diyagramı, hazır sıralama: 1s<2s<
2p<3s...) tekrar kontrol etmeden, kendi bildiğim "doğru ve tam"
açıklamayı (gerçek kuantum mekaniği) sorulara döktüm. Aynı mantıkla
Millikan'ın yağ damlası deneyi ve kanal ışını/e-m oranı karşılaştırma
tabloları da (atom teorileri modülünde) MEB'in beş temel modeli
(Dalton/Thomson/Rutherford/Bohr/Modern) dışına taşan, kitapta
geçmeyen içerikti.

**GENEL KURAL:** Bir kazanımın BAŞLIĞI/genel konusu bilindiğinde bile,
o kazanımın MEB kitabında GERÇEKTE hangi terimlerle, hangi derinlikte
işlendiği önceden ayrıca doğrulanmadan soru/açıklama yazılmaz. MEB
kitabında ve müfredatta (kazanım metninde) hiç geçmeyen hiçbir
kavram, terim veya formalizm — bilimsel olarak doğru, standart ders
kitabı bilgisi veya "zaten herkesin bildiği" görünse bile —
kullanılmaz. Şüphe anında (madde 12) kitaptan sayfa taranır veya
kullanıcıya sorulur; "genel kazanımdan mantık yürütüp" kendi bilgimle
doldurmak YASAK.

## 6. Görsellik ve grafik/şekil türü — PİYASA UYUMU

**"Özgünlük" ne demek, ne demek DEĞİL:** Özgün olmak, öğrencinin
anlamasını zorlaştırmak veya piyasadaki/MEB'deki alışılmış gösterim
biçimlerinden bilerek FARKLI/tuhaf bir şey üretmek anlamına GELMEZ.
Piyasa kitapları MEB'in sınav formatına uygun hazırlanıyor; öğrenci
o görsel dile aşina. Amacımız bu dilden SAPMAK değil, aynı dili
konuşup içeriğini/derinliğini/soru kurgusunu DAHA GELİŞMİŞ hâle
getirmektir. "Özgün" burada yalnızca "birebir kopya/tarama değil,
kendi çizdiğimiz/kendi kurguladığımız" anlamına gelir — "alışılmadık
görünsün" anlamına gelmez. Şüphe anında ölçüt: bu görsel/soru tipi,
piyasadaki bir öğrencinin/öğretmenin ilk bakışta tanıyıp rahatça
okuyabileceği bir şey mi? Değilse, "özgünlük" yanlış anlaşılmış
demektir.

- Doğası gereği görsel olan konular (atom modelleri, orbitaller,
  periyodik tablo, grafikler vb.) SADECE metinle anlatılmaz — ama
  madde 3'teki formül yasağı geçerli: her soruya zorla görsel
  eklenmez, gerçekten görsel gerektiren yerlere eklenir.
- **Grafik çeşitliliği:** Sütun (bar) grafiklerinin yanında **çizgi
  (line) grafikleri de**, konu buna uygun olduğunda **mutlaka**
  kullanılır — yalnızca bar chart'a saplanıp kalınmaz. Hangi grafik
  türünün kullanılacağı, piyasadaki ders kitaplarının o konuyu hangi
  grafik türüyle işlediğine bakılarak seçilir.
- **Şekil/görsel benzerliği:** Yeni bir şekil/diyagram oluşturulacaksa,
  **piyasadaki (farklı yayınevlerinin ve MEB'in) ders kitaplarında o
  konu için kullanılan şekillerden ÇOK FARKLI olmayacak** — aynı
  gösterim mantığı, aynı eksen/etiketleme yaklaşımı, aynı genel görsel
  dili korunur. Sebep: piyasadaki tüm kitaplar MEB'in sınav
  formatına/görsel diline uygun hazırlanıyor; öğrenci MEB sınavında
  bu görsel dile aşina karşılaşmalı. Bu, madde 1'deki telif kuralıyla
  ÇELİŞMEZ: birebir çizim/dosya kopyalanmaz, ama şeklin TÜRÜ,
  YAPISI ve GÖSTERİM KONVANSİYONU kasıtlı olarak tanıdık/benzer
  tutulur — rastgele farklı, alışılmadık bir gösterim icat etmek
  YASAK.
- Mevcut render bileşenleri yetmiyorsa (`assets/js/quiz-engine.js`
  içindeki render* fonksiyonları), var olanı zorlamak yerine yeni
  bir bileşen yazılır — ama yine piyasadaki örneklere sadık kalınarak.

## 7. Açıklama (explain) kalitesi

- `explain` alanları yalnızca "doğru cevap bu çünkü X" değil,
  öğretici/eğitsel bir anlatım içerir — kavramı gerçekten öğretir.

## 8. Ders Defteri de aynı kurallara tabidir

Yukarıdaki tüm kurallar (1-7) yalnızca uygulama/quiz içeriği için
değil, **Ders Defteri** (basılabilir HTML/PDF) içeriği oluşturulurken
de birebir geçerlidir: MEB kapsamı, telif/piyasa-uyumu, tarz
referansı, formül yasağı, öğretici açıklama — hepsi defter için de
geçerlidir. Defter, uygulamadan ayrı bir kural setine sahip değildir.

## 9. Soru bankası kalite kontrolü (her değişiklikten sonra ZORUNLU)

```
node sablon/scripts/verify-quiz-data.mjs assets/js/quiz-data.js --count=50
```

- Her modül: 50 soru, kolay/orta/zor = 17/17/16.
- Tekrar (dup) yok, isim/kalıp taraması temiz, A-E cevap dağılımı
  dengeli VE gerçekten karışık (bloklar halinde değil).
- Commit/push ÖNCESİ bu script mutlaka çalıştırılır ve temiz çıkmalıdır.

## 10. Test disiplini

- Yeni bir görsel bileşen veya soru değişikliği, geçici bir test
  harness (`_t.html` + `python3 -m http.server` + Playwright
  screenshot) ile GÖRSEL olarak doğrulanır, commit'ten önce. Test
  dosyaları commit edilmeden silinir.

## 11. Motor dosyalarının çifte bakımı

- `assets/js/quiz-engine.js` ve `assets/css/style.css` içine yapılan
  her motor değişikliği, `sablon/assets/js/quiz-engine.js` ve
  `sablon/assets/css/style.css` içine de aynen yansıtılır (şablon
  sistemi senkron kalmalı).

## 12. Belirsizlik anında

- Bir talimat yoruma açıksa veya önceki bir kararla çelişiyor
  gözüküyorsa, VARSAYIM YAPIP DEVAM ETMEK yerine anlayışımı kısaca
  (1-2 cümle) özetleyip onay istenir. Özellikle bu dosyadaki
  kurallardan birinden sapma gerektiren bir durum varsa.

## 13. Bu dosya CANLI bir belgedir

Kullanıcı yeni bir standing-rule (tek seferlik görev değil, kalıcı
tercih/kural) belirttiğinde, o talimat sözlü kalmaz — **aynı oturumda,
hemen** bu dosyaya yeni bir madde olarak eklenir. Kural eklenirken:
- Mevcut maddelerle çelişip çelişmediği kontrol edilir; çelişiyorsa
  kullanıcıya kısaca sorulur (madde 12).
- Somut bir olay/örnek varsa (piktogram olayında olduğu gibi), o
  örnek kısaca madde içine yazılır — ileride "neden bu kural var"
  sorusu tekrar sorulmasın diye.
- Dosya güncellemesi commit + push edilir.

## 14. Genel iş akışı

- Branch: `claude/burdan-devam-a2wg3u`.
- Küçük, odaklı commit'ler, açıklayıcı Türkçe commit mesajlarıyla.
- Her modül bitince: QA script → görsel test → commit → push.
