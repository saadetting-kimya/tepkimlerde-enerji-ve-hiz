# Soru Yazım Yönergesi — Örnekten Özgün Soruya

Bu belge, "örnek soru gönderiyorum, bunları analiz et ve bana yeni
sorular yaz" istendiğinde izlenecek **düşünme sürecini** kalıcı hale
getirir. `CLAUDE.md` ve `İçerik Üretim Rehberi` ile BİRLİKTE çalışır —
onlarda "hangi kurallar var" anlatılır, burada "örnek bir soru setinden
yeni sorulara nasıl geçilir" adım adım anlatılır. Bu belgeyi tek başına
da bir depoya koyabilirsiniz; kendi içinde yeterlidir.

---

## 0. Temel duruş

Paylaşılan örnek sorular **kopyalanacak bir kaynak değil, incelenecek
bir zanaat örneğidir.** Amaç şu üç soruyu cevaplamaktır:
1. Bu sorular hangi **kazanımı**, hangi **derinlikte** ölçüyor?
2. Bu sorular hangi **soru türü/kalıbıyla** (tek MC, I-II-III, tablo
   okuma, grafik okuma, çok adımlı çözümlü örnek...) kuruluyor?
3. Bağlam, görsel ve dil nasıl bir araya geliyor ki soru "ezbere değil
   akıl yürütmeye" zorluyor?

Cevap bulunduktan sonra **aynı ilkelerle, tamamen farklı sayılar/
reaksiyonlar/senaryolarla** yeni sorular yazılır. Hiçbir cümle, sayı
seti veya bağlam örnekten birebir/yakın parafraz alınmaz (`CLAUDE.md`
madde 1-2).

---

## 1. Adım 1 — Örnekleri Analiz Et

Her örnek soru için kısaca (kendi kendine, çıktı olarak yazmaya gerek
yok) şunları çıkar:

- **Kazanım/konu:** Hangi kavram ölçülüyor? (ör. "bağ enerjisinden ΔH
  hesaplama", "potansiyel enerji grafiğinden Ea okuma")
- **Soru kalıbı:** Tek MC mi, I/II/III kombinasyon mu, eşleştirme mi,
  çok adımlı (a-b-c...) çözümlü örnek mi, doğru/yanlış tablo mu?
- **Bağlam çerçevesi:** Olgu/veri/nesne/karşılaştırma/süreç/senaryo
  odaklı mı? "Kişi yapıyor" kalıbından kaçınılmış mı?
- **Görsel türü:** Tablo, çizgi grafik, potansiyel enerji eğrisi,
  parçacık/tanecik modeli, laboratuvar düzeneği çizimi, gerçek
  fotoğraf/infografik mi?
- **Zorluk/bilişsel düzey:** Basit hatırlama mı (kolay), tek adımlı
  hesaplama mı (orta), çok adımlı akıl yürütme/sentez mi (zor)?
- **Kaynak:** Gerçek bir sınav (ÖSYM/AYT gibi) mi, yayınevi kitabı mı,
  MEB etkinliği mi? Kaynak bilgisi YALNIZCA kendi notların için —
  üretilecek soruda ASLA anılmaz (`CLAUDE.md` madde 1).

Örnek setinde birden fazla alt-konu varsa (ör. hem "tepkime enerjisi"
hem "tepkime hızı") bunu fark et ve yeni sorularının kapsamını buna
göre (kullanıcı aksini söylemedikçe) aynı oranda dağıt.

---

## 2. Adım 2 — Tasarım İlkesini Çıkar (kopyalama, taklit et)

"Taklit etmek" ile "kopyalamak" arasındaki fark:

| Kopyalama (YASAK) | Tasarım ilkesini alma (DOĞRU) |
|---|---|
| Aynı reaksiyon, aynı sayılar | Farklı reaksiyon/madde, kendi hesaplanmış sayılar |
| Aynı bağlam (ör. "CaCl₂ suda çözünüyor") | Aynı KAVRAM ama farklı somut örnek (ör. "NH₄NO₃ suda çözünüyor", endotermik versiyon) |
| Cümlelerin birebir/yakın çevirisi | Sıfırdan yazılmış, aynı fikri taşıyan cümleler |
| Aynı grafik değerleri | Aynı grafik TÜRÜ (çizgi/sütun/eğri), farklı sayısal değerler |

Somut adım: örnekteki her sorunun "bu soru hangi zihinsel beceriyi test
ediyor" sorusuna cevap ver (ör. "grafikten iki nokta okuyup ortalama
hız hesaplama", "iki eğriyi karşılaştırıp ΔH'nin değişmediğini fark
etme") — sonra o beceriyi test eden, TAMAMEN YENİ bir somut örnek
kurgula.

---

## 3. Adım 3 — Yeni Soruyu Yazarken Kontrol Listesi

Her yeni soru için, yazmadan ÖNCE zihinde bu sırayla kontrol et:

1. **Bağlam geçerliliği:** Bağlamı çıkarsam soru hâlâ cevaplanabilir
   mi? Cevaplanabiliyorsa bağlamı güçlendir veya kaldır.
2. **Açılış cümlesi:** "Bir öğrenci/kişi X yapıyor" mu? Öyleyse olgu/
   veri/nesne/karşılaştırma/süreç/senaryo çerçevelerinden birine
   çevir (`İçerik Üretim Rehberi` Bölüm 3 tablosu).
3. **Görsel gerekli mi?** Konu doğası gereği görsel mi (grafik, tablo,
   diyagram)? Gerekliyse EKLE (metinle tarif etme, gerçekten render
   et); gerekli değilse ZORLA EKLEME (`CLAUDE.md` madde 3, formül
   yasağı).
4. **Görsel–metin çakışması:** Görselde verilen sayısal değerleri
   metinde bir daha YAZMA — öğrenci görseli okumak zorunda kalsın.
5. **Soru kalıbı çeşitliliği:** Art arda gelen sorular hep aynı kalıpta
   (hep I-II-III, hep tek MC) olmasın; örnek settekine benzer bir
   ÇEŞİTLİLİK oranı hedefle.
6. **Kişi ismi yok, öncül yok:** Soru kökünde gerçek/kurgusal kişi adı
   kullanma; cevabı ima eden önyargılı ifadeler kurma.
7. **Beş seçenek, tek doğru:** Tüm çeldiriciler MAKUL olmalı (rastgele
   sayılar değil, gerçek bir hata türünü — işaret hatası, birim hatası,
   kavram yanılgısı, yanlış oran — temsil etmeli).
8. **Doğru cevap konumu:** Bir soru setinin TAMAMI yazıldıktan SONRA,
   doğru cevapların A-E arasında dengeli VE gerçekten karışık (bloklar
   hâlinde değil) dağıldığını kontrol et; gerekiyorsa seçenek metinlerini
   yer değiştirerek düzelt (`İçerik Üretim Rehberi` Bölüm 8 tuzak #4).
9. **`explain` kalitesi:** Yalnızca "doğru cevap bu çünkü X" değil,
   kavramı gerçekten öğreten, gerekiyorsa yanlış seçeneklerin NEDEN
   yanlış olduğunu da açıklayan bir anlatım yaz (`CLAUDE.md` madde 7).

---

## 4. Adım 4 — Teslimden Önce Öz-Denetim

Soru seti tamamlandıktan sonra, teslim etmeden ÖNCE kendine sor:

- Herhangi bir sayı/reaksiyon/bağlam, paylaşılan örneklerden birebir
  veya yakın parafraz mı? (Şüphe varsa değiştir.)
- Cevap anahtarındaki her açıklama, o sorunun GÜNCEL seçenek harfleriyle
  tutarlı mı? (Seçenekleri dengelerken yer değiştirdiysen açıklama
  metnindeki harf referanslarını da güncelledin mi?)
- Hesaplamalı bir soruysa, sayıları BAŞTAN SONA kendin çözüp doğru
  seçeneğin gerçekten doğru çıktığını doğruladın mı?
- Bir görsel (grafik/tablo/diyagram) kullandıysan, üretilen dosyayı
  (PDF veya ekran) GÖRSEL OLARAK açıp okunabilir/doğru olduğunu
  kontrol ettin mi (`CLAUDE.md` madde 11)?

---

## 5. Teslim Formatı

- Varsayılan: temiz, sade bir HTML kaynağından Playwright `page.pdf()`
  ile üretilen PDF (kapak + sorular + cevap anahtarı/açıklamalar).
- Görseller (grafik, tablo, diyagram) SVG/CSS ile sıfırdan çizilir —
  dış görsel/CDN kullanılmaz.
- Cevap harfleri A-E, `String.fromCharCode(65+i)` mantığıyla büyük
  harf; şık metinlerinde harf tekrar yazılmaz.
- Kullanıcı bir soru BANKASI (uygulamaya entegre, `quiz-data.js`
  formatında) istiyorsa, bu belge yerine `İçerik Üretim Rehberi`
  Bölüm 5 (Soru Şeması) ve Bölüm 7 (İş Akışı) izlenir — bu belge
  yalnızca "bana birkaç örnek/gösterim sorusu yaz" tarzı, uygulamaya
  entegre edilmeyecek tekil teslimler içindir.

---

## 6. Bu Belge Neyle Birlikte Çalışır

- `CLAUDE.md` — davranış kuralları (telif, kapsam, tarz-referans vs.
  kopya ayrımı, öz-denetim disiplini).
- `docs/ICERIK-URETIM-REHBERI.md` — uygulamaya entegre edilecek TAM
  soru bankası üretimi (dosya yapısı, doğrulama betiği, jenerik motor).
- Bu belge (`SORU-YAZIM-YONERGESI.md`) — örnek bir soru setinden yola
  çıkarak HIZLI, tekil bir soru/gösterim seti üretme süreci.

Yalnızca bu belge tek başına bir depoya eklenirse de çalışır (yukarıdaki
kontrol listeleri kendi içinde yeterlidir); diğer ikisi varsa, çelişki
durumunda `CLAUDE.md` önceliklidir.
