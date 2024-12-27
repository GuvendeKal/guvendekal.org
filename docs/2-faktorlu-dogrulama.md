<!-- NOTLAR
 - Tablo eklemeyi unutmayın
 - Uygun görseller eklemeyi unutmayın.
 - İçerik kuralları ve ekleme yapmak sayfalarını ziyaret edebilirsiniz -->

# 2 Faktörlü Doğrulama

**2 faktörlü doğrulama**, bir hesabı yada sistemi daha güvenli bir hâle getirmek için kullanılan birgüvenlik katmanıdır. Bu yöntem ile kullanıcı sadece şifre ile hesaba yada sisteme giremez, ikinci bir doğrulamayıda tamamlaması gerekir. Bu doğrulama genelde SMS, e-posta, biyometrik veri yada doğrulama uygulamaları ile olur.

Günümüzde güvenlik amacıyla sıkça kullanılan 2 faktörlü doğrulama sistemlerini doğru şekilde kullanmak gerekir. SMS yolu yada e-posta yoluyla yapılan 2 faktörlü doğrulama, bu prosödürlerde herhangi bir şifreleme olmadığı için kolayca aşılabilir.

## Önerilenler Tablosu

| Uygulama | Açık Kaynak | Uçtan Uca Şifreleme | Fiyat | Platformlar |
| --- | :---: | :---: | :---: | :---: |
| <span style="display: inline-block; vertical-align: middle;"><img src="/docs/images/enteauth.png" alt="Ente Auth" style="width: 30px; height: 30px;"> </span> <span style="display: inline-block; vertical-align: middle;"> Ente Auth </span> | <span style="color: green;">✓</span> | <span style="color: green;">✓</span> | Ücretsiz | <i class="fa-solid fa-globe"></i> <i class="fa-brands fa-windows"></i> <i class="fa-brands fa-apple"></i> <i class="fa-brands fa-linux"></i> <i class="fa-brands fa-android"></i> <i class="fa-brands fa-app-store-ios"></i> |
| <span style="display: inline-block; vertical-align: middle;"><img src="/docs/images/aegis.png" alt="Aegis" style="width: 30px; height: 30px;"> </span> <span style="display: inline-block; vertical-align: middle;"> Aegis Authenticator </span> | <span style="color: green;">✓</span> | <span style="color: green;">✓</span> | Ücretsiz | <i class="fa-brands fa-android"></i> |
| <span style="display: inline-block; vertical-align: middle;"><img src="/docs/images/freeotp.svg" alt="FreeOTP" style="width: 30px; height: 30px;"> </span> <span style="display: inline-block; vertical-align: middle;"> FreeOTP </span> | <span style="color: green;">✓</span> | <span style="color: green;">✓</span> | Ücretsiz | <i class="fa-brands fa-android"></i> <i class="fa-brands fa-app-store-ios"></i> |

### <span style="display: inline-block; vertical-align: middle;"><img src="docs/images/enteauth.png" alt="Ente" style="width: 50px; height: auto;"> </span> <span style="display: inline-block; vertical-align: middle;"> Ente Auth

**[Ente Auth](https://ente.io/auth/)**, uçtan uca şifreleme sunan açık kaynaklı bir kimlik doğrulama uygulamasıdır. Ente Auth sunucuları uçtan uca şifrelenmiştir ve harici kaynaklarca test edilmiştir. Çapraz platform desteği sunan Ente Auth, neredeyse bütün platformlarda bulunmaktadır. 

Ente.io'nun ekstra özellikleri arasında, sonraki kodu gösterme, not ekleme, kod sabitleme ve kod paylaşma bulunmaktadır.

- [Açık kaynak depo](https://github.com/ente-io/ente/tree/main/auth#readme)
- [Gizlilik politikası](https://ente.io/privacy/)

### <span style="display: inline-block; vertical-align: middle;"><img src="docs/images/aegis.png" alt="Aegis" style="width: 50px; height: auto;"> </span> <span style="display: inline-block; vertical-align: middle;"> Aegis Authenticator

[**Aegis Authenticator**](https://getaegis.app/), ücretsiz ve açık kaynaklı bir kimlik doğrulama uygulamasıdır. Android için geliştirilen Aegis, uçtan uca şifreleme sunmaktadır.

Aegis Authenticator'ın özellikleri arasında biyometrik kilit açma desteği, temalar ve ikon paketleriyle özelleştirme, QR kodlarıyla hızlı ekleme ve veri yedekleme ile geri yükleme imkanı sunar.

- [Açık kaynak depo](https://github.com/beemdevelopment/Aegis)
- [Gizlilik politikası](https://getaegis.app/privacy/)

### <span style="display: inline-block; vertical-align: middle;"><img src="docs/images/freeotp.svg" alt="FreeOTP" style="width: 50px; height: auto;"> </span> <span style="display: inline-block; vertical-align: middle;"> FreeOTP

**[FreOTP](https://freeotp.github.io/)**, tek seferlik şifre protokollerini kullanan sistemler için süre bazlı tek kullanımlık şifre üreten açık kaynaklı ve sade bir iki faktörlü kimlik doğrulama uygulamasıdır. FreeOTP, [HOTP](https://www.ietf.org/rfc/rfc4226.txt) ve [TOTP](https://www.ietf.org/rfc/rfc6238.txt) açık standartlarını uygular, bu sebeple özel bir sunucu tarafı bileşenine gereksinimi bulumamaktadır. Mobil platform desteği sunan FreeOTP, Apache 2.0 lisansı kapsamında yayımlanmaktadır. FreeOTP'nin ekstra özellikleri arasında, QR kod oluşturma ve not ekleme bulunmaktadır.

- [Açık kaynak depo](https://github.com/freeotp)
- [Gizlilik politikası](https://freeotp.github.io/privacy.html)
