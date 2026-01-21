<!-- NOTLAR
 - Bu kategoride lokal ve bulut tabanlı uygulamalar ayrı ayrı eklenebilir- tek bir tabloda belirtilebilir ancak lokal ve bulut tabanlı uygulamaların farkı anlatılmalıdır.
 - Tablo eklemeyi unutmayın
 - Uygun görseller eklemeyi unutmayın.
 - İçerik kuralları ve ekleme yapmak sayfalarını ziyaret edebilirsiniz -->

# Dosya Şifreleme

**Dosya şifreleme**, bir dosyanın içeriğini, yalnızca doğru parola ya da şifreleme anahtarına sahip kişiler tarafından açılabilecek şekilde koruma altına alma işlemidir. Şifrelenmiş bir dosya, doğru parola veya anahtar olmadan açıldığında anlamsız bir veri yığını gibi görünür. Bu sayede dosya yanlış ellere geçse bile içeriği korunmuş olur. Günlük hayatta bilgisayar, telefon veya bulut depolama kullanıyorsak; kişisel belgelerimiz, fotoğraflarımız ve özel bilgilerimiz için şifreleme önemli bir güvenlik katmanıdır.

## Önerilenler Tablosu

| Uygulama | Açık Kaynak | Lisans Türü | Bulut Uyumu | Çalışma Şekli | Şifreleme Kapsamı | Platform Desteği |
|----------|:-----------:|:-----------:|:-----------:|:-------------:|:-----------------:|:----------------:|
| <span style="display: inline-block; vertical-align: middle;"><img src="docs/images/cryptomator-icon.png" alt="cryptomator" style="width: 30px; height: 30px;"> </span> <span style="display: inline-block; vertical-align: middle;"> Cryptomator </span> | <span style="color: green;">✓</span> | GPL-3.0 | Var | Yerel (client-side) | Dosya / Klasör / Bulut Dosyaları | <i class="fa-brands fa-windows"></i> |
| <span style="display: inline-block; vertical-align: middle;"><img src="docs/images/veracrypt-icon.png" alt="veracrypt" style="width: 30px; height: 30px;"> </span> <span style="display: inline-block; vertical-align: middle;"> VeraCrypt </span> | <span style="color: green;">✓</span> | Apache-2.0 + TrueCrypt-3.0 | Manuel | Yerel | Disk / Sanal Disk / Harici Disk | <i class="fa-brands fa-windows"></i> <i class="fa-brands fa-apple"></i> <i class="fa-brands fa-linux"></i> <i class="fa-brands fa-raspberry-pi"></i> |

### <span style="display: inline-block; vertical-align: middle;"><img src="docs/images/cryptomator-icon.png" alt="cryptomator" style="width: 50px; height: 50px;"> </span> <span style="display: inline-block; vertical-align: middle;"> Cryptomator

[**Cryptomator**](https://cryptomator.org/), ücretsiz bir dosya şifreleme aracıdır ve özellikle bulut depolama kullanan son kullanıcılar için tasarlanmıştır. Şifreleme işlemi tamamen yerel olarak gerçekleştirilir; dosyalar buluta gönderilmeden önce kullanıcının cihazında şifrelenir. Bu sayede bulut servis sağlayıcıları dosya içeriklerine erişemez. Gizlilik açısından telemetri veya kullanıcı verisi toplama bulunmaz.

Cryptomator, dosya ve klasör düzeyinde şifreleme yapar; her dosya ayrı ayrı korunur ve tek bir büyük konteyner kullanılmaz. Şifreli bir “kasa” (vault) mantığıyla çalışır ve kullanıcı bu kasayı normal bir klasör gibi kullanabilir. Arka planda otomatik şifreleme/deşifreleme yapar. Google Drive, Dropbox ve OneDrive gibi popüler bulut servisleriyle senkronizasyon klasörleri üzerinden sorunsuz şekilde entegre olur. Temel kullanım amacı, bulut üzerinde saklanan dosyaları güvenli ve pratik bir şekilde korumaktır. Yapı olarak yerelde şifreleme yapar ancak bulutla birlikte çalışır.

- [Açık kaynak depo](https://github.com/cryptomator)
- [Gizlilik politikası](https://cryptomator.org/privacy/)

### <span style="display: inline-block; vertical-align: middle;"><img src="docs/images/veracrypt-icon.png" alt="veracrypt" style="width: 50px; height: 50px;"> </span> <span style="display: inline-block; vertical-align: middle;"> VeraCrypt

[**VeraCrypt**](https://veracrypt.io/en/Home.html), ücretsiz ve daha çok sistem ve disk güvenliği odaklı bir şifreleme aracıdır. Yazılım tamamen yerel çalışır ve internet bağlantısına ihtiyaç duymaz. Kullanıcı verisi toplama veya dışarıya veri gönderme söz konusu değildir. Gizlilik ve güvenlik, güçlü şifreleme algoritmaları ve açık kaynak kodu ile sağlanır.

VeraCrypt; tüm disk, disk bölümü (partition), harici disk/USB bellek ve şifreli container (sanal disk) şifreleme desteği sunar. Kullanıcı, parola girilmeden erişilemeyen şifreli diskler veya sanal sürücüler oluşturabilir. Doğrudan bir bulut entegrasyonu yoktur; ancak oluşturulan şifreli container dosyaları manuel olarak buluta yüklenebilir. VeraCrypt’in temel kullanım amacı, bilgisayarın tamamını veya büyük veri alanlarını yüksek güvenlik seviyesinde korumaktır. Çalışma şekli itibarıyla tamamen yerel bir çözümdür.

- [Açık kaynak depo](https://github.com/veracrypt/VeraCrypt)
