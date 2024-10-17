<!-- NOTLAR 
 - Bu kategoride lokal ve bulut tabanlı şifre yöneticileri ayrı ayrı eklenebilir- tek bir tabloda belirtilebilir ancak lokal ve bulut tabanlı şifre yöneticilerinin farkı anlatılmalıdır. 
 - Tablo eklemeyi unutmayın 
 - Uygun görseller eklemeyi unutmayın.
 - İçerik kuralları ve ekleme yapmak sayfalarını ziyaret edebilirsiniz -->

# Şifre Yöneticileri

**Şifre yöneticileri** kullanıcıların güvenli bir şekilde şifrelerini saklama, yönetme veya otomatik doldurmalarına yarayan uygulamalardır. Saklanan tüm şifreler, güçlü şifreleme algoritmaları ile korunur. Bu, verilerin yetkisiz erişimlere karşı güvenli olmasını sağlar. Lokal veya bulut tabanlı çalışan şifre yöneticileri vardır.

* Lokal şekilde çalışan şifre yöneticileri, verileri yerel cihazınızda şifreleyerek saklar yine aynı cihazda şifrerelenmiş verileri çözümleyerek kullanır.
* Bulut tabanlı çalışan şifre yöneticileri yine lokal şekilde verileri şifreler ancak bu şifrelenmiş verileri uzakta bulunan bir sunucuda barındırır. 

Bu durum, lokal şifre yöneticilerinin farklı cihazlarda senkronize bir şekilde çalışmamasına neden olur. Örneğin lokal çalışan bir şifre yöneticisine kaydettiğiniz şifre, telefonunuzda bulunan şifre yöneticisine gelmez. Senkronize çalışan bir şifre yöneticisi için bulut tabanlı çalışan alternatiflere yönelmeniz önerilir. 

?> Örneğin MD5 algoritması ile şifrelenen `şifre123` şeklinde ki şifrenin çıktısı `8c8e8f3c1c1c1c1c1c1c1c1c1c1c1c1c` şeklinde gözükür. Bu şifre yalnızca şifre yöneticinize giriş yaptığınız zaman çözümlenir. Bu nedenle şifre yöneticisine koyduğunuz ana şifreye güçlü bir şifre koymanız önemlidir.


Lokal şekilde çalışan şifre yöneticilerinde [**senkronizasyon araçları**](https://guvendekal.org/#/senkronizasyon) sayesinde şifrelerinizi diğer cihazlarda senkronize edebilirsiniz ancak bu ekstra yapılandırmalar kurmanıza neden olacaktır.

Şifre yöneticisi kullanmanız [**güvenlik**](https://guvendekal.org/#/guvenlik) açısından iyi bir tercih olacaktır. Çünkü şifre yöneticileri farklı hesaplarınızda farklı ve güvenli şifreler kullanmanıza olanak sağlayacaktır. Bugün çoğu kullanıcı çoğu hesabına benzer şifreler koymaktadır bu da herhangi bir veri ihlalinde sızan hesap bilgilerinin başka site/uygulamalarda denenerek o hesaplara erişilebileceği anlamına gelir.

## Önerilenler Tablosu

| Şifre Yöneticisi | Açık Kaynak | Çalışma Şekli         | Platform Desteği         |
|-------------------|:-------------:|:-----------------------:|:--------------------------:|
| <img src="docs/images/keepass.png" alt="Keepass" style="width: 30px; height: 30px; vertical-align: middle; display: inline-block;"> <span style="vertical-align: middle; display: inline-block;"> [Keepass](https://keepass.info/) </span> | <span style="color: green;">✓</span>        | Lokal                 | <i class="fa-brands fa-windows"></i> <i class="fa-brands fa-apple"></i> <i class="fa-brands fa-linux"></i> <i class="fa-brands fa-android"></i> <i class="fa-brands fa-app-store-ios"></i> |
| <img src="docs/images/bitwarden.png" alt="Bitwarden" style="width: 30px; height: auto; vertical-align: middle; display: inline-block;"> <span style="vertical-align: middle; display: inline-block;"> [Bitwarden](https://bitwarden.com/) </span> | <span style="color: green;">✓</span>        | Bulut                 | <i class="fa-brands fa-windows"></i> <i class="fa-brands fa-apple"></i> <i class="fa-brands fa-linux"></i> <i class="fa-brands fa-android"></i> <i class="fa-brands fa-app-store-ios"></i> |
| <img src="docs/images/vaultwarden.png" alt="Vaultwarden" style="width: 30px; height: 30px; vertical-align: middle; display: inline-block;"> <span style="vertical-align: middle; display: inline-block;"> [Vaultwarden](https://github.com/dani-garcia/vaultwarden ) </span> | <span style="color: green;">✓</span>        | Self-host             | <i class="fa-brands fa-windows"></i> <i class="fa-brands fa-apple"></i> <i class="fa-brands fa-linux"></i> <i class="fa-brands fa-android"></i> <i class="fa-brands fa-app-store-ios"></i> |

### Keepass

### Bitwarden

### Vaultwarden

Bitwarden'in 





