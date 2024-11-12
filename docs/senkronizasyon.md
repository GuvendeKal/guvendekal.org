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

| Senkronizasyon Aracı | Açık Kaynak | Uçtan Uca Şifreleme | Veri Kaybı |
| -------------------- |:-----------:| -------------------:| ---------: |
|<span style="display: inline-block; vertical-align: middle;"><img src="/docs/images/syncthing.png" alt="Syncthing" style="width: 30px; height: 30px;"> </span> <span style="display: inline-block; vertical-align: middle;"> Syncthing  | <span style="color: green;">✓</span>    | <span style="color: green;">✓</span> | <span style="color: green;">×</span> |

!> Syncthing'in android desteği kesilmiştir Syncthing yerine Syncthing-Fork adlı uygulamayı kullanabilirsiniz.

## Syncthing

<img src="/docs/images/syncthing.png" alt="Syncthing" width="350" />

Syncthing hiç kimseye güvenmeden dosyalarınızı senkronize etmek için kullanabileceğiniz tamamen açık kaynak bir senkronizasyon aracıdır, dosyalarınızı tamamen uçtan uca şifreleyerek diğer cihazınıza aktarır ve bunu sizin bizim gibi insanların çalıştırdığı relaylar sayesinde yapar, eğer ki dosyalarınızın başka bir kişiye gideceğini ya da cihazınızı taklit ederek dosyalarınızı çalabileceklerini düşünüyorsanız düşünmeyin çünkü bunu önlemek için public ve private keyler kullanıyorlar, daha detaylı bilgi için:https://advancedweb.hu/how-syncthing-provides-secure-file-syncing-without-sharing-your-files-with-a-third-party/, yani dosyalarınızı kimse çalamaz ve dosyalarınız uçtan uca şifrelemeli olduğu için relay sahibi bile sizin dosyalarınızı göremez ve çalamaz.