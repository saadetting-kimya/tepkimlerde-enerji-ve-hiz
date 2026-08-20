# Kimya 11 · Enerji ve Tepkime Hızı Simülasyonu

Türkiye Yüzyılı Maarif Modeli 11. Sınıf Kimya Dersi Öğretim Programı'ndaki **Enerji** ve
**Kimyasal Tepkimelerde Hız** temalarını kapsayan, 8 modüllük, bağımlılıksız (kütüphanesiz)
etkileşimli bir öğrenme simülasyonu.

## Özellikler

- 8 modül (KİM.11.1.1 – KİM.11.1.8), her biri: **Konu Özeti → Uygulama (sanal deney/hesap makinesi) → Bağlam Temelli Sorular**
- Sanal laboratuvarlar: ekzo/endotermik deneyler, yakıt kıyaslama, bağ enerjisi hesap makinesi,
  Hess Yasası hesap makinesi, çarpışma teorisi parçacık simülasyonu, derişim-zaman grafiği,
  6 istasyonlu "hıza etki eden etkenler" laboratuvarı, hız denklemi dedektifi
- 3 boyutlu, sürüklenerek döndürülebilen molekül modelleri (CSS 3D, kütüphanesiz)
- Bağlam temelli sorular, kurumun "Bağlam Temelli Soru Yazım Rehberi" kurallarına uygun tasarlandı
- Kavram sözlüğü ve kişisel ilerleme paneli (localStorage, cihazda saklanır)
- Akıllı tahta ve mobil cihazlarda, internetsiz (offline) çalışır — harici hiçbir kütüphane/CDN kullanılmaz

## Kullanım

`index.html` dosyasını bir tarayıcıda açman yeterli (veya klasörü basit bir statik sunucuyla yayınla).

```
python3 -m http.server 8000
# tarayıcıda http://localhost:8000 adresini aç
```

## Klasör yapısı

```
index.html          Uygulama kabuğu ve gezinme
css/style.css        Tasarım sistemi (responsive, akıllı tahta + mobil)
js/data.js            Müfredat verisi, kavram sözlüğü, bağ/oluşum entalpisi tabloları
js/charts.js           Kütüphanesiz canvas grafik motoru (çizgi, sütun, PE diyagramı)
js/molecule3d.js        CSS 3D molekül görüntüleyici
js/particlesim.js        Çarpışma teorisi parçacık fiziği motoru
js/quiz.js               Bağlam temelli soru render motoru
js/modules.js             8 modülün tüm içeriği (özet + simülasyon + sorular)
js/app.js                 Yönlendirme (router), ana sayfa, sözlük, ilerleme paneli
```
