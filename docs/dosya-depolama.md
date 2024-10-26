<!-- NOTLAR 
 - Bu kategoride lokal ve bulut tabanlı uygulamalar ayrı ayrı eklenebilir- tek bir tabloda belirtilebilir ancak lokal ve bulut tabanlı uygulamaların farkı anlatılmalıdır. 
 - Tablo eklemeyi unutmayın 
 - Uygun görseller eklemeyi unutmayın.
 - İçerik kuralları ve ekleme yapmak sayfalarını ziyaret edebilirsiniz -->

# Dosya depolama

Bazı dijital verilerimiz **dosya** şeklinde depolanmaktadır, bu veriler bulut ve fiziksel şekilde depolanmaktadır. 

![file](images/file-terminal.jpg)

## Fiziksel Depolama
Fiziksel depolama, Kablolu bağlantı veya dahili disk yuvası ile fiziksel depolama'ya erişilir olur internet gerekmez. 

![fiziksel-depolama](images/fiziksel-depolama)

## Bulut Depolama
Bulut depolama, uzaktaki bilgisayar ile internet aracılıyla kendi bilgisayarımıza veri aktarımı gerçekleşmektedir. <mark> aslında bulut depolama uzaktaki bir fiziksel depolamaya depolar </mark>

![bulut](images/cloud.jpg)


| Numara | AD | Açık Kaynak | Bulut/Fiziksel | Self-Host | Güvenlik | Mahremiyet | İşletim sistemi
|---|----|-------------|----------------|-----------|----------|------------|---------------------|
| 1 | NextCloud | ✓ | Bulut | ✓ | Sunucuya bağlı | Sunucuya bağlı | İnternete bağlanabilen herhangi bir cihaz |
| 2 | Ente Photos | ✓ | Bulut | ❌ | Şifrelenmiş | İyi | İnternete bağlanabilen herhangi bir cihaz |
| 3 | PhotoPrism | ✓ | Bulut | ✓ | Sunucuya bağlı | Sunucuya bağlı | İnternete bağlanabilen herhangi bir cihaz |
| 4 | Google Fotoğraflar | ❌ | Bulut | ❌ | iyi değil | çok kötü <sup> (1) </sup> |internete bağlanabilen herhangi bir cihaz,  Android 4.0 ve üstü |
| 5 | iCloud | ❌ | Bulut | ❌ | iyi değil | kötü | internete bağlanabilen cihaz, iOS 5, iPadOS 5, macOS X Lion, tvOS 4.nesil ve üstü |
| 6 | OneDrive/SkyDrive | ❌ | Bulut | ❌ | iyi değil | kötü | internete bağlanabilen herhangi bir cihaz, Windows XP, Windows Vista, (SkyDrive) Windows 8.1 üstü (OneDrive) |
| 7 | Dolphin | ✓ | Fiziksel | ❌ ||| Linux |
| 8 | Windows Dosya Gezgini | ❌ | Fiziksel | ❌ ||| Windows |

## 1- NextCloud

[NextCloud anasayfa](https://nextcloud.com/)

Nextcloud Nedir?

Nextcloud, kullanıcıların kendi dosya depolama ve paylaşma hizmetlerini oluşturmasına olanak tanıyan, açık kaynaklı bir bulut depolama yazılımıdır. Nextcloud, bireylerin ve kuruluşların, verilerini güvenli bir şekilde depolamalarını ve yönetmelerini sağlar. Kendi sunucunuzda barındırabileceğiniz bu yazılım, birçok avantajı beraberinde getirir.

Açık Kaynak ve Özelleştirme

Nextcloud, açık kaynaklı bir yazılım olduğu için herkes tarafından erişilebilir ve geliştirilebilir. Kullanıcılar, ihtiyaçlarına göre Nextcloud’u özelleştirebilir, eklentilerle fonksiyonelliğini artırabilir ve farklı özellikler ekleyebilirler. Açık kaynak olması, topluluk tarafından sürekli geliştirilmesini ve güncellenmesini sağlar.

Kendi Sunucunuzda Barındırma

Nextcloud, self-hosting (kendi sunucunuzda barındırma) imkanı sunar. Bu, kullanıcıların verilerini kontrol etmesine ve gizliliklerini sağlamasına olanak tanır. Kendi sunucunuzda barındırarak, veri güvenliği ve erişim üzerinde tam yetkiye sahip olursunuz. Ayrıca, Nextcloud’un kurulumunu bir Linux sunucusunda gerçekleştirebilir, bu sayede daha fazla kontrol ve esneklik elde edebilirsiniz.

Platform Desteği

Nextcloud, çoğu Linux dağıtımında çalışır ve geniş bir platform desteği sunar. Ubuntu, Debian, CentOS ve diğer Linux tabanlı işletim sistemlerinde kolaylıkla kurulabilir. Ayrıca, Nextcloud, mobil cihazlar için uygulamaları sayesinde dosyalarınıza her yerden erişim imkanı sağlar.

Güvenlik ve Veri Koruma

Nextcloud, kullanıcıların verilerini güvende tutmak için çeşitli güvenlik özellikleri sunar. SSL/TLS şifrelemesi, iki faktörlü kimlik doğrulama ve veri şifreleme gibi özellikler ile kullanıcı verileri koruma altına alınır. Bu, özellikle hassas verilerin bulunduğu durumlarda son derece önemlidir.

Eklentiler ve Entegrasyon

Nextcloud, kullanıcıların ihtiyaçlarına göre birçok eklenti ve uygulama desteği sunar. Takvim, görev yönetimi, doküman düzenleme gibi çeşitli işlevleri entegre ederek iş akışınızı geliştirebilirsiniz. Ayrıca, Nextcloud, diğer popüler uygulamalarla entegrasyon sağlayarak, iş süreçlerinizi daha verimli hale getirebilir.

## 2- Ente Photos

[Ente Bağlantı](https://ente.io/)

**Ente Photos**, kişisel fotoğraf yönetimi ve depolama hizmeti sunan bir platformdur. Kullanıcıların fotoğraflarını güvenli bir şekilde saklamasına, düzenlemesine ve paylaşmasına olanak tanır. bulut tabanlı çalışan bu uygulama, fotoğrafların yedeklenmesini ve farklı cihazlardan erişilmesini sağlar.

## Özellikleri
- **Güvenli Depolama:** Fotoğraflarınızı bulutta şifreli olarak saklar.
- **Platformlar Arası Erişim:** Telefon, tablet ve bilgisayardan erişilebilir.
- **Kolay Paylaşım:** Fotoğrafları diğer kişilerle kolayca paylaşma imkanı sunar.
- **Yedekleme:** Otomatik olarak fotoğraflarınızı yedekler, böylece kaybolmalarını önler.

## 3- PhotoPrism

[PhotoPrism Bağlantı](https://www.photoprism.app/)

**PhotoPrism**, açık kaynaklı bir fotoğraf yönetim yazılımıdır. Kendi fotoğraf kitaplığınızı yerel sunucunuzda yönetmenize ve organize etmenize olanak tanır. Fotoğraflarınızı güvenli bir şekilde saklayabilir, arayabilir ve düzenleyebilirsiniz. 

## Özellikleri
- **Açık Kaynak:** Ücretsiz ve topluluk tarafından geliştirilen bir yazılım.
- **Yapay Zeka Destekli Arama:** Fotoğraflarınızı içerik ve etiketlere göre bulmak için yapay zeka kullanır.
- **Self-Host:** Fotoğraflarınızı kendi sunucunuzda barındırabilirsiniz.
- **Yedekleme Desteği:** Otomatik yedekleme yaparak fotoğraflarınızı güvende tutar.
- **Gizlilik Odaklı:** Fotoğraflarınıza yalnızca siz erişebilir, üçüncü taraflar verilerinize erişemez.

## 4- Google Fotoğraflar (photos)

**Google Fotoğraflar**, Google tarafından sunulan bulut tabanlı bir fotoğraf ve video yönetim platformudur. Kullanıcıların fotoğraflarını yedeklemelerine, organize etmelerine ve farklı cihazlar üzerinden erişmelerine olanak tanır.

## Özellikleri
- **Bulut Depolama:** Fotoğraf ve videolarınızı Google Drive ile entegre bir şekilde bulutta saklar.
- **Otomatik Yedekleme:** Fotoğraflarınızı ve videolarınızı cihazınızdan otomatik olarak yedekler.
- **Akıllı Arama:** Fotoğraflarınızda kişi, nesne veya yer gibi özelliklere göre arama yapma imkanı sunar.
- **Anılar ve Albümler:** Fotoğraflarınızı zaman dilimlerine göre düzenler ve geçmiş anılarınızı otomatik olarak hatırlatır.
- **Paylaşım:** Fotoğraflarınızı ve albümlerinizi kolayca arkadaşlarınızla ve ailenizle paylaşabilirsiniz.

## 5- Dolphin

**Dolphin**, KDE masaüstü ortamı için geliştirilen bir dosya yöneticisidir. Kullanıcıların dosya ve klasörleri kolayca yönetmesine, görüntülemesine ve düzenlemesine olanak tanıyan, hafif ve kullanıcı dostu bir arayüze sahiptir.

## Özellikleri
- **Sekmeli Gezinti:** Aynı pencerede birden fazla sekme açarak farklı klasörler arasında hızlı geçiş yapma imkanı sunar.
- **Çoklu Pencere Desteği:** Dosya yönetimi için yan yana birden fazla pencere açarak çalışabilirsiniz.
- **Sürükle Bırak:** Dosyaları kolayca sürükleyip bırakarak taşımayı destekler.
- **Özelleştirilebilir Arayüz:** Araç çubukları, simge boyutları ve diğer görsel ögeler kullanıcı ihtiyaçlarına göre özelleştirilebilir.
- **Ağ Desteği:** FTP, SFTP ve Samba gibi ağ protokollerini destekleyerek uzak sunucularla bağlantı kurmanızı sağlar.
- **Dosya Önizlemesi:** Desteklenen dosya türleri için anında önizleme imkanı sunar.

## 6- Windows dosya Gezgini

**Windows Dosya Gezgini** (Eski adıyla Windows Explorer), Microsoft Windows işletim sisteminin yerleşik dosya yöneticisidir. Kullanıcıların bilgisayarlarında bulunan dosya ve klasörleri görüntülemesine, düzenlemesine ve yönetmesine olanak tanır.

## Özellikleri
- **Sekmeli Gezinti (Windows 11):** Aynı pencerede birden fazla sekme açarak klasörler arasında hızlı geçiş yapabilirsiniz.
- **Sürükle ve Bırak:** Dosya ve klasörleri kolayca taşıma ve kopyalama için sürükleyip bırakma desteği sunar.
- **Arama Fonksiyonu:** Bilgisayarınızdaki dosya ve klasörleri hızlı bir şekilde bulmak için güçlü bir arama motoruna sahiptir.
- **Bağlamsal Menü:** Sağ tıklama ile dosya veya klasörlere hızlı erişim ve işlem seçenekleri sunar.
- **Dosya Önizlemesi:** Desteklenen dosya türleri için hızlı bir şekilde önizleme yapmanızı sağlar.
- **Sık Kullanılanlar ve Hızlı Erişim:** Sık kullanılan dosya ve klasörlere hızlı erişim sağlamak için kısa yollar eklenebilir.
- **Ağ ve Bulut Entegrasyonu:** OneDrive ve ağ sürücüleri gibi bulut depolama ve ağ bağlantılarını yönetme imkanı sunar.

(1) : Veri Alphabet inc. (Google) baz alınmıştır, Google Fotoğraflar (Google Photos) Alphabet inc'e bağlıdır
