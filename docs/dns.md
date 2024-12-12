<!-- NOTLAR
 - Bu içerik halihazırda yazılmıştır. İçerik içinde ekleme yapma yada düzeltme yapma ihtiyacı yoksa değişiklik yapmanız önerilmez. Uygulama önerilerine ekleme yapmak isterseniz, eklenen diğer uygulamaların kalitesinde olmasına özen gösteriniz.
 - Tablo eklemeyi unutmayın
 - Uygun görseller eklemeyi unutmayın.
 - İçerik kuralları ve ekleme yapmak sayfalarını ziyaret edebilirsiniz -->

# DNS

**DNS** (Domain Name System), internet üzerindeki alan adlarını IP adreslerine çeviren bir sistemdir. Örneğin bu siteye bağlanmaya çalıştığınız zaman `192.168.1.45` yerine `guvendekal.org` alan adını yazarak giriyorsunuz.

İnternet servis sağlayıcınızın size sunduğu DNS sunucusu, belirli internet sitelerine erişim engeli getirebilir, DNS sorgularınızı kaydedebilir yani `guvendekal.org` alan adını ziyaret ettiğinizin kaydını tutar.

Bazı özel DNS sunucuları ise kayıt tutmaz ve verilerinizi üçüncü taraflarla paylaşmaz. Erişim engellerine maruz kalmazsınız ve özel DNS sunucuları, size reklam engelleme özelliği gibi farklı özelliklerde sunabilir.

Bu nedenlerle özel bir DNS sunucusu kullanmanız [**güvenlik**](https://guvendekal.org/#/guvenlik) ve [**mahremiyetiniz**](https://guvendekal.org/#/mahremiyet) için en sağlıklısı olacaktır.

## DNS sunucusu nasıl değiştirilir?

DNS sunucusu değiştirmek genellikle kolay bir işlemdir. Aşağıda kullandığınız platforma göre nasıl değiştirebileceğinizi görebilirsiniz.

#### Mac/Windows/GNU-Linux

- **Windows:** Ağ ve Paylaşım Merkezi'ni açın > Bağlantınızı seçin > Ağ durumunu açın > Internet Protocol Version 4 (TCP/IPv4) seçin > DNS ayarlarını değiştirin > Ayarları kaydedin.

- **Mac:** Sistem Tercihleri'ni açın > Ağ'a tıklayın > Bağlantınızı seçin > Gelişmiş'e tıklayın > DNS sekmesine geçin > Mevcut DNS sunucularını kaldırın ve yeni DNS sunucularını ekleyin > Tamam'a tıklayın > Uygula'ya tıklayın.

- **GNU-Linux:** GNU-Linux'ta farklı masaüstü ortamlarında farklı yollarla DNS değiştirilebilir. Ağ ayarlarınıza girerseniz kolayca bulabilirsiniz. Terminal ile değiştirmek istiyorsanız [bu rehbere](https://www.linuxfordevices.com/tutorials/linux/change-dns-on-linux) bakabilirsiniz.

#### IOS/Android

- **IOS:** Ayarlar menüsüne git > Wi-Fi veya Mobil Ağlar'a tıkla > Bağlı olduğun ağa uzun bas > "Ağ Ayarlarını Düzenle" seçeneğini seç > "Gelişmiş Ayarlar" bölümünü aç > "DNS" kısmını bul ve mevcut DNS'i değiştir > Yeni DNS adreslerini gir > Değişiklikleri kaydet ve çık.

- **Android:** Ayarlar menüsüne git > Bağlantı ve paylaşma'ya gir > Özel DNS'e gir > Belirlenen DNS ayarını seçip DNS adreslerini gir. > Kaydedip çık.

!> Kullandığınız işletim sisteminin sürümüne, kullandığınız cihazın marka ve modeline göre DNS değiştirme işlemleri değişiklik gösterebilir.

#### Modem/Router

Modem veya router üzerinde DNS sunucusunu değiştirmek, evinizdeki/ofisinizdeki tüm cihazların aynı DNS sunucusunu kullanmasını sağlar. Bu işlemi yapmak için modem veya router'ın yönetim arayüzüne erişmeniz gerekir. İşte adımlar:

1. **Modem/Router Arayüzüne Erişim:**
 - Modem veya router'ın arayüzüne erişmek için bir web tarayıcısı açın ve cihazınızın IP adresini girin (_genellikle `192.168.1.1` veya `192.168.0.1` IP adresleri kullanılır_).
 - Kullanıcı adı ve şifre ile giriş yapın (_varsayılan bilgiler cihazın altındaki etikette olabilir veya internet servis sağlayıcınız tarafından verilmiştir_).
2. **DNS Ayarlarını Bulun:**
 - Modem arayüzünde genellikle "Internet", "WAN" veya "Network" gibi seçenekler altında DNS ayarlarına erişebilirsiniz.
 - DNS ayarları bölümünü bulun (_genelde DHCP Server sekmesi/başlığı altında yer alır_) ve burada mevcut DNS sunucularını değiştirebilirsiniz.
3. **Yeni DNS Sunucularını Girin:**
 - Tercih ettiğiniz DNS sunucularını girin.
4. **Değişiklikleri Kaydedin:**
 - Yaptığınız değişiklikleri kaydedin ve modemi/router'ı yeniden başlatın. Bu işlem, yeni DNS ayarlarının uygulanmasını sağlar.

Bu şekilde, modem/router üzerinden yapılan DNS değişiklikleri ile ağa bağlı tüm cihazlara uygulayabiliriniz ve tek tek değişiklik yapmak zorunda kalmazsınız.

!> Modem arayüzündeki veya internet sağlayıcınızın size verdiği müşteri panelindeki **güvenli internet** ayarları açık ise bu DNS değişikliklerini engelleyebilir. Güvenli interneti kapatmayı deneyebilirsiniz ancak modeme bağlanan diğer kişileri de etkileyebileceğini unutmayın (_örn: çocuklar için sağlanan faydalı özellikler güvenli internete bağlı olabilir_).

## DNS sunucusu testi

DNS değişikliklerinin düzgün çalıştığından emin olmak için [dnsleaktest.org](https://dnsleaktest.org/dns-leak-test) adresinden kontrol edebilirsiniz. Test sonucunda ISP sütununda eğer girdğiniz DNS sağlayıcısının adı çıkıyorsa DNS değişikliğiniz başarılı olmuş demektir.

!> Bazı internet servis sağlayıcı firmaları DNS değişikliklerini engelleyebilir veya etkileyebilir. Bu durumda yaptığınız değişiklikler her zaman çalışmayabilir, internet hızınız düşebilir veya internete erişimde farklı sorunlar yaşayabilirsiniz. Eğer bu tür sorunlarla karşılaşırsanız, değişikliklerinizi geri alabilir veya alternatif bir DNS sunucusu deneyebilirsiniz.

## Hangi DNS Sunucusunu Kullanmalıyım?

DNS sunucusu seçerken ilk dikkat edilecek şey hız olacaktır. DNS sunucusunun hızı değişebilir. [DNSBench](https://www.grc.com/dns/benchmark.htm) aracı bu konuda size yardımcı olacaktır. Ayrıca Windows, Mac OS veya Linux'ta komut satırına `ping dnssunucusununadresi` şeklinde yazabilirsiniz.
DNS sunucusu seçerken dikkat edilecek ikinci şey güvenlik ve reklam engelleme gibi ek özellikler olacaktır. Aşağıda güvenlik olarak tavsiye ettiğimiz DNS sunucuları bulunmaktadır.

## Önerilenler tablosu

| DNS Sunucusu | Kayıt Tutma | Reklam Engelleme |
| --- | :---: | ---: |
| Mullvad DNS | Kayıt tutulmuyor | Sunuyor |
| Quad9 DNS | Kayıt tutulmuyor | Sunuyor |
| NextDNS | İsteğe bağlı | Sunuyor |
| Adguard DNS | Kayıt tutuyor (tanımlanamaz) | Sunuyor |

## Mullvad DNS

| Dns Adresi |
| --- |
| Mullvad farklı ihtiyaçlara farklı DNS sunucuları sağlamaktadır. Bunların hepsine [**buradan**](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls) ulaşabilirsiniz. |

Mullvad DNS, sıfır kayıt tutma politikası ile kullanıcılarına reklam engellemede sunmaktadır. Aynı zamanda Mullvad DNS sunucularında sansür uygulanmaz. Mullvad DNS hakkında daha fazla bilgiye ulaşmak için [buraya](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls) bakabilirsiniz.

## Quad9 DNS

<img src="docs/images/quad9.png" alt="Quad9" width="350" />

| Tür | DNS Adresi |
| --- | :---: |
| IPv4 | 9.9.9.9 |
| IPv4 | 149.112.112.112 |
| IPv6 | 2620:fe::fe |
| IPv6 | 2620:fe::9 |

2017 yılında oluşturulan Quad9 DNS kayıt tutmaz, reklam ve kötü amaçlı phishing sitelerini de engeller. Quad9 Veri ve Gizlilik Politikası için [buraya](https://www.quad9.net/privacy/policy/) bakabilirsiniz.

## Adguard DNS

| Tür | DNS Adresi |
| --- | :---: |
| IPv4 | 94.140.14.14 |
| IPv4 | 94.140.15.15 |
| IPv6 | 2a10:50c0::1:ff |
| IPv6 | 2a10:50c0::2:ff |

Adguard DNS kullanıcıları için reklamları, izleyicileri, kötü amaçlı siteleri engelleyen bir DNS sunucusudur. Aynı zamanda aile profili gibi kişiselleştirmeler ile çocukların dijital ortamlarda güvende kalmasını sağlar. Adguard DNS gizlilik politikası için [buraya](https://adguard.com/en/privacy/home.html) bakabilirsiniz

Adguard'ın ücretsiz sürümü gibi ücretli sürümü de bulunmaktadır. Ücretli sürüm ile DNS sunucusunu kişiselleştirebilmektesiniz. Kişisel paket aylık 2.24€, Aile paketi ise aylık 5€'dur. Ücretli sürüm için [buraya](https://adguard.com/en/license.html) bakabilirsiniz.

## NextDNS

![NextDNS](images/nextdns.png)

NextDNS ayda 300 bin aratmaya kadar ücretsiz bir DNS servisi sunar. Kullanıcıların kolaylıkla reklam ve tracker engelleyiciler ile birlikte farklı kategorilerdeki engel listelerini kullanmasına olanak tanır. Gizlilik politikalarına [buradan](https://nextdns.io/privacy) bakabilirsiniz. Normal paketi aylık 1.99€'dur.
