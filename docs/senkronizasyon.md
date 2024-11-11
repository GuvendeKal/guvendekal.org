<!-- NOTLAR 
 - Tablo eklemeyi unutmayın 
 - Uygun görseller eklemeyi unutmayın.
 - İçerik kuralları ve ekleme yapmak sayfalarını ziyaret edebilirsiniz -->

# Senkronizasyon

Senkronizasyon araçları dosyalarınızı senkronize etmenizi sağlar, mesela KeePassXC ve KeePassDX gibi şifrelerinizi lokalde tutan şifre yöneticileri kullanıyorsanız şifrelerinizi bir senkronizasyon aracıyla senkronize etmeniz lazım, tabii ki de kullandığınız senkronizasyon aracının güvenilir, uçtan uca şifrelemeli ve veri kaybının **hiç** olmaması lazım aksi takdirde dosyalarınız çalınabilir, verileriniz gidebilir.

## Önerilenler Tablosu

| Senkronizasyon Aracı | Açık Kaynak | Uçtan Uca Şifreleme | Veri Kaybı |
| ------------------------------- |:-----------:| -------------------:|
|<span style="display: inline-block; vertical-align: middle;"><img src="/docs/images/syncthing.png" alt="Syncthing" style="width: 30px; height: 30px;"> </span> <span style="display: inline-block; vertical-align: middle;"> Syncthing  | <span style="color: green;">✓</span>    | <span style="color: green;">✓</span> | <span style="color: green;">×</span> |

!> Syncthing'in android desteği kesilmiştir Syncthing yerine Syncthing-Fork adlı uygulamayı kullanabilirsiniz.

## Syncthing

<img src="/docs/images/syncthing.png" alt="Syncthing" width="350" />

Syncthing hiç kimseye güvenmeden dosyalarınızı senkronize etmek için kullanabileceğiniz tamamen açık kaynak bir senkronizasyon aracıdır, dosyalarınızı tamamen uçtan uca şifreleyerek diğer cihazınıza aktarır ve bunu sizin bizim gibi insanların çalıştırdığı relaylar sayesinde yapar, eğer ki dosyalarınızın başka bir kişiye gideceğini ya da cihazınızı taklit ederek dosyalarınızı çalabileceklerini düşünüyorsanız düşünmeyin çünkü bunu önlemek için public ve private keyler kullanıyorlar, daha detaylı bilgi için:https://advancedweb.hu/how-syncthing-provides-secure-file-syncing-without-sharing-your-files-with-a-third-party/, yani dosyalarınızı kimse çalamaz ve dosyalarınız uçtan uca şifrelemeli olduğu için relay sahibi bile sizin dosyalarınızı göremez ve çalamaz.