<!-- NOTLAR
 - Bu sayfa bilgi içerikli makale olacaktır.
 - Tablo eklemeyi unutmayın
 - Uygun görseller eklemeyi unutmayın.
 - İçerik kuralları ve ekleme yapmak sayfalarını ziyaret edebilirsiniz -->

# Windows Güvenliği

**Windows**, Microsoft şirketinin geliştirdiği dünya genelinde en yaygın kullanılan masaüstü işletim sistemlerinden biridir. Milyonlarca kullanıcı; iş, eğitim, kişisel belgeler ve çevrim içi hizmetler için her gün Windows tabanlı bilgisayarlar kullanmaktadır. Bu yaygınlık, Windows’u hem siber saldırganlar hem de veri toplayan platformlar için cazip bir hedef hâline getirir. Modern Windows sürümleri kullanıcı deneyimini geliştirmek, hataları azaltmak ve hizmetleri iyileştirmek amacıyla çeşitli veri toplama (telemetri) mekanizmaları içerir. Ancak bu durum, gizlilik konusunda soru işaretlerini de beraberinde getirir. Konum bilgileri, kullanım alışkanlıkları, sistem davranışları ve çevrim içi etkileşimler zamanla bir dijital ayak izi oluşturur.

Gizlilik ve güvenlik, yalnızca “saklayacak bir şeyim yok” yaklaşımıyla geçiştirilebilecek konular değildir. Kişisel dosyalar, parolalar, tarayıcı verileri ve sistem ayarları; kötü amaçlı yazılımlar, yetkisiz erişimler veya yanlış yapılandırmalar nedeniyle risk altına girebilir. Ayrıca son yıllarda teknoloji şirketlerinin agresif veri toplama politikaları, kullanıcı rızası, şeffaflık ve kontrol konularında ciddi tartışmalara yol açmıştır. Windows tarafında yaşanan sorunlar her zaman doğrudan bir “hack” veya veri sızıntısı şeklinde ortaya çıkmaz. Yanlış varsayılan ayarlar, gereksiz servisler, kapalı kaynak bileşenler ve kullanıcıya yeterince açıklanmayan veri işleme süreçleri de gizlilik açısından problem yaratabilir. Bu nedenle güvenlik ve gizlilik, sadece antivirüs kullanmakla sınırlı değildir; bilinçli yapılandırma ve doğru araç seçimi de büyük önem taşır.

Bu nedenle Windows üzerinde ek güvenlik ve gizlilik araçları kullanmak bir tercih değil, giderek bir ihtiyaç hâline gelmektedir. Doğru araçlar sayesinde kullanıcı, verileri üzerinde daha fazla kontrol kazanabilir, gereksiz veri paylaşımını sınırlandırabilir ve dosyalarını yetkisiz erişimlere karşı koruyabilir.

| Uygulama | Açık Kaynak | Lisans Türü | Özellik |
|----------|:-----------:|:-----------:|:----------------:|
|<span style="display: inline-block; vertical-align: middle;"><img src="docs/images/win-util.png" alt="winutil" style="width: 30px; height: 30px;"> </span> <span style="display: inline-block; vertical-align: middle;"> WinUtil </span>| <span style="color: green;">✓</span> | MIT | Sistem Yapılandırma |
|<span style="display: inline-block; vertical-align: middle;"><img src="docs/images/wintoys-icon.png" alt="wintoys" style="width: 30px; height: 30px;"> </span> <span style="display: inline-block; vertical-align: middle;"> Wintoys </span>| × | Proprietary | Sistem Yapılandırma  |

### <span style="display: inline-block; vertical-align: middle;"><img src="docs/images/win-util.png" alt="winutil" style="width: 50px; height: 50px;"> </span> <span style="display: inline-block; vertical-align: middle;"> Chris Titus Tech's WinUtil

[**WinUtil**](https://christitustech.github.io/winutil/), açık kaynak kodlu ve windows işletim sisteminde çeşitli ayarları yapılandırmanıza yardımcı olan. Windows kullanıcılarının sistem performansını optimize etmelerine, gereksiz dosyaları temizlemelerine, gizlilik ayarlarını iyileştirmelerine ve daha verimli bir çalışma ortamı oluşturmalarına olanak sağlayan bir yönetim aracıdır.

- **Kullanımı**
  - Başlat menüsüne sağ tıklayın.
  - “Windows PowerShell (Yönetici)” (Windows 10 için) veya “Terminal (Yönetici)” (Windows 11 için) seçin ve aşağıdaki komutu çalıştırın:

```ps1
irm “https://christitus.com/win” | iex
```

- [Açık kaynak depo](https://github.com/ChrisTitusTech/winutil)

### <span style="display: inline-block; vertical-align: middle;"><img src="docs/images/wintoys-icon.png" alt="wintoys" style="width: 50px; height: 50px;"> </span> <span style="display: inline-block; vertical-align: middle;"> Wintoys

[**Wintoys**](https://bogdan-patraucean.github.io/about/wintoys/), kullanıcıların Windows sistemini daha etkin bir şekilde yönetebilmesini sağlayan kapsamlı bir araçtır. Uygulama, sistem performansını izleme ve ayarları yönetme imkânı sunar; ayrıca gizli veya zor bulunan Windows ayarlarına hızlı erişim sağlar. Disk temizleme ve gereksiz dosyaları kaldırma işlemleri ile sistemin performansını artırır, uygulama kaldırma ve servis/startup yönetimi gibi temel bakım görevlerini kolaylaştırır. Kullanıcılar sistem onarım araçlarına erişebilir ve CPU, GPU, RAM gibi donanım bilgilerini canlı olarak görüntüleyebilir. Ayrıca ağ sıfırlama ve onarım işlemleri yapılabilir. WinToys, telemetry ve gizlilik kontrolleri gibi tweakler ile kullanıcıya sistem üzerindeki kontrolünü artırma imkânı da sunar.

- [Microsoft Store](https://apps.microsoft.com/detail/9p8ltpgcbzxd?hl=en-us&gl=TR)
- [Gizlilik politikası](https://bogdan-patraucean.github.io/about/wintoys/privacy)
