<!-- NOTLAR
 - Tablo eklemeyi unutmayın
 - Uygun görseller eklemeyi unutmayın.
 - İçerik kuralları ve ekleme yapmak sayfalarını ziyaret edebilirsiniz -->

# Senkronizasyon

**Senkronizasyon** kavramı, farklı işlemler ve sistemler belirli düzene yada zamana göre uyumlu ve sistematik çalışmasına denir. Örneğin bir senkronizasyon uygulaması;

Laptop cihazında bulunan `guvendekal.org/ornek.txt` dosyasına eklediğiniz `ornek yazı` metnini, iPhone cihazında bulunan `guvendekal.org/ornek.txt` dosyasına otomatik şekilde işler. Bu şekilde dosyalar eşitlenir yani, senkronize edilmiş olur.

Senkronizasyon uygulamaları genellikle, lokalde çalışan uygulamaların bulutta depolanmadan senkronize edilmesini sağlar, bu yönüyle güvenli bir yöntemdir. Örneğin lokal çalışan [**şifre yöneticileri**](https://guvendekal.org/#/sifre-yoneticileri), bu yöntemle farklı cihazlarda da şifrelerin senkronize olmasını sağlar.

!> Yinede senkronizasyon uygulamaları kullanırken, verilerinizi kaybetmeyeceğiniz şekilde yapılandırmak, güvenli uygulamalar ve araçlar kullanmak önemlidir.

## Önerilenler Tablosu

| Uygulama | Açık Kaynak | Uçtan Uca Şifreleme | Fiyat | Platform |
| --- | :---: | :---: | --- | --- |
| <span style="display: inline-block; vertical-align: middle;"><img src="/docs/images/syncthing.png" alt="Syncthing" style="width: 30px; height: 30px;"> </span> <span style="display: inline-block; vertical-align: middle;"> [**Syncthing**](https://syncthing.net/) | <span style="color: green;">✓</span> | <span style="color: green;">✓</span> | Ücretsiz | <i class="fa-brands fa-windows"></i> <i class="fa-brands fa-apple"></i> <i class="fa-brands fa-linux"></i> <i class="fa-brands fa-freebsd"></i> |
| <span style="display: inline-block; vertical-align: middle;"><img src="/docs/images/rclone.png" alt="Rclone" style="width: 30px; height: 30px;"> </span> <span style="display: inline-block; vertical-align: middle;"> [**Rclone**](https://rclone.org/) | <span style="color: green;">✓</span> | <span style="color: green;">✓</span> | Ücretsiz | <i class="fa-brands fa-windows"></i> <i class="fa-brands fa-apple"></i> <i class="fa-brands fa-linux"></i> <i class="fa-brands fa-freebsd"></i> |

?> Rclone'un resmî Ios ve Android uygulamaları yok, ancak farklı çatalları vardır. İlgili başlıklar altında bahsedilmiştir.

?> Syncthing Play Store'da artık yayınlanmamaktadır. Aynı zamanda Ios'da resmî uygulaması yok ancak farklı çatalları vardır. İlgili başlıklar altında bahsedilmiştir

## <span style="display: inline-block; vertical-align: middle;"><img src="docs/images/syncthing.png" alt="Syncthing" style="width: 50px; height: auto;"> </span> <span style="display: inline-block; vertical-align: middle;"> Syncthing

Syncthing açık kaynak, ücretsiz bir senkronizasyon aracıdır. Syncthing, eşten-eşe (peer-to-peer) dosya aktarımı yapan ve merkezi bir sunucuya gerek duymaz. Aynı zamanda dosya aktarımı sırasında dosyaları şifreler. Syncthing'in nasıl çalıştığını öğrenmek için [buraya](https://advancedweb.hu/how-syncthing-provides-secure-file-syncing-without-sharing-your-files-with-a-third-party/) bakabilirsiniz.

?> Syncthing'i Android'de edinmek için [**F-droid**](https://f-droid.org/packages/com.nutomic.syncthingandroid/) kullanabilirsiniz.

- [Açık kaynak depo](https://github.com/syncthing/syncthing)
- [Gizlilik politikası](https://docs.syncthing.net/users/security.html)

## <span style="display: inline-block; vertical-align: middle;"><img src="docs/images/rclone.png" alt="Rclone" style="width: 50px; height: auto;"> </span> <span style="display: inline-block; vertical-align: middle;"> Rclone

Rclone, açık kaynaklı bir senkronizasyon aracıdır. Senkronizasyon dışında, yedekleme ve veri transferi içinde kullanılır. Rclone farklı bulut depolama sistemleri ile uyumlu bir şekilde çalışır. Bunları yaparken dosyaları şifreler.

?> Rclone'ı Android'de kullanmak için [**RCX - Rclone for Android**](https://play.google.com/store/apps/details?id=io.github.x0b.rcx&hl=en) çatalına bakabilirsiniz.

- [Açık kaynak depo](https://github.com/rclone/rclone)
- [Gizlilik politikası](https://rclone.org/privacy/)
