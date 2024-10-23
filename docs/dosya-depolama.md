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
| 1 | NextCloud | ✅ | Bulut | ✅ | Sunucuya bağlı | Sunucuya bağlı | İnternete bağlanabilen herhangi bir cihaz |
| 2 | Ente Photos | ❌ | Bulut | ❌ | Şifrelenmiş | İyi | İnternete bağlanabilen herhangi bir cihaz |
| 3 | PhotoPrism | ✅ | Bulut | ✅ | Sunucuya bağlı | Sunucuya bağlı | İnternete bağlanabilen herhangi bir cihaz |
| 4 | Google Fotoğraflar | ❌ | Bulut | ❌ | iyi değil | çok kötü <sup> (2) </sup> |internete bağlanabilen herhangi bir cihaz |
| 5 | Dolphin | ✅ | Fiziksel | ❌ | Linux |
| 6 | Windows Dosya Gezgini | ❌ | Fiziksel | ❌ | Windows |

## 1- NextCloud

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



(2) : Veri Alphabet inc. (Google) baz alınmıştır, Google Fotoğraflar (Google Photos) Alphabet inc'e bağlıdır
