<!-- NOTLAR
 - Tablo eklemeyi unutmayın 
 - Uygun görseller eklemeyi unutmayın.
 - İçerik kuralları ve ekleme yapmak sayfalarını ziyaret edebilirsiniz -->

# Torrent İstemcileri

**Torrent**, internet üzerinden büyük dosyaların paylaşımını kolaylaştıran bir dosya paylaşım protokolüdür. Bu teknoloji, "eşler arası" (peer-to-peer, P2P) ağ bağlantısını kullanır. Yani dosyalar, merkezi bir sunucudan indirilmez; bunun yerine kullanıcılar arasında küçük parçalara bölünerek paylaşılır. Torrent sistemi, BitTorrent protokolünü temel alır ve bu yüzden genellikle bu adla anılır.

**Torrent dosyaları**, kullanıcıların dosya paylaşımını hızlı ve kolay bir şekilde yapmalarını sağlar ayrıca indirilmek istenen içeriğin bilgilerini ve indirme sırasında diğer kullanıcılarla bağlantı kurmaya yarayan tracker bilgilerini içerir.

?> Torrent dosyaları zararlı yazılımlar içerebilir, yalnızca güvenilir kaynaklardan indirilmelidir. İndirdiğiniz dosyanın güvenli olduğunu doğrulamak için; dosyanın bulunduğu siteyi, kullanıcı yorumlarını ve torrent dosya uzantısını inceleyin.

**Torrent İstemcileri**, torrent dosyalarını okuyarak içerikleri indirmenizi ve paylaşmanızı sağlayan uygulamalardır.

!>Torrent istemcileri, dosya indirme ve paylaşma işlemleri sırasında kullanıcıların **IP adreslerini** açığa çıkarabilir. Bu, kullanıcıların çevrimiçi etkinliklerinin izlenmesine ve potansiyel olarak hedef alınmalarına yol açabilir. Bu nedenle, **VPN** veya **proxy** kullanmak, gizliliğinizi korumak ve bağlantınızı şifrelemek için kritik öneme sahiptir. Bu, kimlik hırsızlığı, izlenme, veri sızıntıları ve coğrafi kısıtlamalar gibi riskleri azaltmanıza yardımcı olacaktır.

## Önerilenler Tablosu

| Torrent İstemcisi | Açık Kaynak | Reklam | Lisans Türü | Platform Desteği |
|-------------------|-------------|--------|-------------|-------------------|
| <span style="display: inline-block; vertical-align: middle;"><img src="docs/images/qBittorrent-icon.png" alt="qbittorrent" style="width: 30px; height: 30px;"> </span> <span style="display: inline-block; vertical-align: middle;"> qBittorrent | <span style="color: green;">✓</span> | <span style="color: red;">×</span> | GPLv2 | <i class="fa-brands fa-windows"></i> <i class="fa-brands fa-apple"></i> <i class="fa-brands fa-linux"></i> <i class="fa-brands fa-freebsd"></i> |
| <span style="display: inline-block; vertical-align: middle;"><img src="docs/images/transmission-icon.png" alt="transmission" style="width: 30px; height: 30px;"> </span> <span style="display: inline-block; vertical-align: middle;"> Transmission | <span style="color: green;">✓</span> | <span style="color: red;">×</span> | GPLv2 | <i class="fa-brands fa-windows"></i> <i class="fa-brands fa-apple"></i> <i class="fa-brands fa-linux"></i> |

### <span style="display: inline-block; vertical-align: middle;"><img src="docs/images/qBittorrent-icon.png" alt="qbittorrent" style="width: 50px; height: 50px;"> </span> <span style="display: inline-block; vertical-align: middle;"> qBittorrent <a href="https://www.qbittorrent.org/" target="_blank" style="text-decoration: none; color: inherit; margin-left: 5px;"> <i class="fa-solid fa-globe"></i></a>  <a href="https://github.com/qbittorrent/qBittorrent" target="_blank" style="text-decoration: none; color: inherit; margin-left: 5px"> <i class="fa-brands fa-github"></i></a>

**qBittorrent**, ücretsiz, reklam içermeyen ve **özgür yazılım** **•** **açık kaynak kodlu** olup, **GPLv2** lisansı altında sunulan kullanıcı dostu bir torrent istemcisidir. µTorrent’e benzer bir arayüze sahiptir, sade ve modern tasarımıyla dikkat çeker. Çapraz platform uyumluluğu ve **Türkçe** dahil 70'ten fazla dil desteği mevcuttur.

---

- **<mark>qBittorrent Hakkında Detaylar</mark>**
  - **Lisans Türü**                     | Ücretsiz, açık kaynak kodlu ve reklam yok.
  - **İstemci Türü**                    | Lokal, tüm indirme/yükleme işlemleri kullanıcının cihazında gerçekleşir. Dosyalar kullanıcının yerel depolama alanında depolanır.
  - **Arayüz Kullanılabilirliği**       | Basit, işlevsel ve öğrenmesi kolay bir arayüz sunar.
  - **Güncelleme Sıklığı**              | Ortalama birkaç haftada bir güncellenir. Hata düzeltmeleri ve yeni özellikler eklenir.
  - **Otomatik Güncelleme**             | Otomatik güncelleme özelliği yoktur. Manuel olarak güncellenmeli.
  - **Eklenti ve Özelleştirme**         | Komut dosyası çalıştırma ve RSS beslemeleri ile özelleştirilebilir.
  - **Uzaktan Erişim**                  | Web arayüzü sayesinde uzaktan erişim mümkündür.
  - **Protokol ve Teknoloji Desteği**   | Magnet, DHT, PEX, IP filtreleme (eMule ve PeerGuardian uyumlu), şifreleme ve SOCKS5 proxy desteği sunar.
  - **Gizlilik ve Güvenlik**            | Kullanıcı verilerini toplamaz. Ancak, torrent protokolü nedeniyle IP adresiniz, eşler (peers) tarafından görülebilir.
  - **Platform Uyumluluğu**             | Windows, Linux, macOS ve FreeBSD için destek sunar.

- **<mark>qBittorrent'in Avantajları</mark>**
  - **Açık Kaynak:** Şeffaflık sağlar ve kullanıcı topluluğu tarafından sürekli olarak güncellenir ve desteklenir.
  - **Magnet ve DHT Desteği:** Hızlı ve verimli dosya paylaşımı sağlar, merkezi sunuculara bağımlılığı ortadan kaldırır.
  - **Gizlilik:** Verileri toplamaz ve kullanıcıyı izlemek için herhangi bir izleme yöntemi kullanmaz.
  - **RSS Desteği:** Torrentlerin otomatik olarak indirilmesini sağlar.
  - **Yüksek Özelleştirme Seçenekleri:** Hız sınırlamaları, bağlantı sayısı kontrolü gibi birçok özelleştirme seçeneği sunar.

---

### <span style="display: inline-block; vertical-align: middle;"><img src="docs/images/transmission-icon.png" alt="transmission" style="width: 50px; height: 50px;"> </span> <span style="display: inline-block; vertical-align: middle;"> Transmission <a href="https://transmissionbt.com/" target="_blank" style="text-decoration: none; color: inherit; margin-left: 5px;"> <i class="fa-solid fa-globe"></i></a>  <a href="https://github.com/transmission/transmission" target="_blank" style="text-decoration: none; color: inherit; margin-left: 5px"> <i class="fa-brands fa-github"></i></a>

**Transmission**, ücretsiz, reklam içermeyen ve **özgür yazılım** **•** **açık kaynak kodlu** olup, **GPLv2** lisansı altında sunulan hafif ve minimalist bir torrent istemcisidir.  Temel torrent indirme ve paylaşma işlevlerine odaklanmıştır. Çapraz platform uyumluluğu ve **Türkçe** dil desteği sınılırdır ancak 50'ten fazla dil desteği mevcuttur.

---

- **<mark>Transmission Hakkında Detaylar</mark>**
  - **Lisans Türü**                     | Ücretsiz, açık kaynak kodlu ve reklam yok.
  - **İstemci Türü**                    | Lokal, tüm indirme/yükleme işlemleri kullanıcının cihazında gerçekleşir. Dosyalar kullanıcının yerel depolama alanında depolanır.
  - **Arayüz Kullanılabilirliği**       | Minimalist ve basit bir arayüze sahiptir. Hem masaüstü hem de web tabanlı yönetim arayüzü sunar.
  - **Hız ve Performans**               | Hafif bir istemcidir ve düşük sistem belleği kullanarak iyi performans sunar.
  - **Güncelleme Sıklığı**              | Düzenli olarak güncellenir, ancak bazı büyük özellik güncellemeleri daha nadir olabilir.
  - **Otomatik Güncelleme**             | Otomatik güncelleme özelliği yoktur. Manuel olarak güncellenmeli.
  - **Eklenti ve Özelleştirme**         | Gelişmiş özelleştirme seçenekleri sunmaz. Temel kullanıcılar için yeterli özellikler sunar.
  - **Uzaktan Erişim**                  | Web tabanlı bir yönetim arayüzü sunar. Uzaktan kontrol edebilir. Ayrıca, mobil cihazlardan da erişim sağlanabilir.
  - **Protokol ve Teknoloji Desteği**   | Magnet, DHT, PEX, ve şifreleme desteği sunar. Ancak, bazı gelişmiş protokoller ve özellikler diğer istemcilere göre sınırlıdır.
  - **Gizlilik ve Güvenlik**            | Kullanıcı verilerini toplamaz. Ancak, torrent protokolü nedeniyle IP adresiniz, eşler (peers) tarafından görülebilir.
  - **Platform Uyumluluğu**             | Windows, macOS, Linux için destek sunar.

- **<mark>Transmission'in Avantajları</mark>**
  - **Açık Kaynak:** Açık kaynaklıdır ve GPLv2 lisansı altında ücretsiz olarak sunulmaktadır.
  - **Hafif ve Düşük Sistem Kullanımı:** Minimalist ve çok az sistem kaynağı tüketir. Eski cihazlarda veya düşük performanslı sistemlerde bile verimli bir şekilde çalışır.
  - **Web Tabanlı Uzaktan Erişim:** Kullanıcılar cihazlarına fiziksel olarak erişmeden, internet üzerinden torrent istemcisini kontrol edebilirler.
  - **Gizlilik:** Kullanıcı verilerini toplamaz ve şeffaf bir yazılımdır.
