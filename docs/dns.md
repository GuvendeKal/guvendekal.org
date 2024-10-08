# DNS

**DNS** (Domain Name System), internet üzerindeki alan adlarını IP adreslerine çeviren bir sistemdir. Örneğin bu siteye bağlanmaya çalıştığınız zaman `192.168.1.45` yerine `guvendekal.org` alan adını yazarak giriyorsunuz.

İnternet servis sağlayıcınızın size sunduğu DNS sunucusu, belirli internet sitelerine erişim engeli getirebilir, DNS sorgularınızı kaydedebilir yani `guvendekal.org` alan adını ziyaret ettiğinizin kaydını tutar.

Bazı özel DNS sunucuları ise kayıt tutmaz ve verilerinizi üçüncü taraflarla paylaşmaz. Erişim engellerine maruz kalmazsınız ve özel DNS sunucuları, size reklam engelleme özelliği gibi farklı özelliklerde sunabilir.

Bu nedenlerle özel bir DNS sunucusu kullanmanız [**gizlilik**](https://guvendekal.org/#/gizlilik) ve [**mahremiyetiniz**](https://guvendekal.org/#/mahremiyet) için en sağlıklısı olacaktır.

### DNS Sunucusu nasıl değiştirilir?

DNS sunucusu değiştirmek genellikle kolay bir işlemdir. Aşağıda kullandığınız platforma göre nasıl değiştirebileceğinizi görebilirsiniz.

#### Mac/Windows/Linux

* **Windows:** Ağ ve Paylaşım Merkezi'ni açın > Bağlantınızı seçin > Ağ durumunu açın > Internet Protocol Version 4 (TCP/IPv4) seçin > DNS ayarlarını değiştirin > Ayarları kaydedin.

* **Mac:** Sistem Tercihleri'ni açın > Ağ'a tıklayın > Bağlantınızı seçin > Gelişmiş'e tıklayın > DNS sekmesine geçin > Mevcut DNS sunucularını kaldırın ve yeni DNS sunucularını ekleyin > Tamam'a tıklayın > Uygula'ya tıklayın.

* **Linux:** Eklenecek

#### IOS/Android

* **IOS:** Ayarlar menüsüne git > Wi-Fi veya Mobil Ağlar'a tıkla > Bağlı olduğun ağa uzun bas > "Ağ Ayarlarını Düzenle" seçeneğini seç > "Gelişmiş Ayarlar" bölümünü aç > "DNS" kısmını bul ve mevcut DNS'i değiştir > Yeni DNS adreslerini gir > Değişiklikleri kaydet ve çık.

* **Android:** Ayarlar menüsüne git > Bağlantı ve paylaşma'ya gir > Özel DNS'e gir > Belirlenen DNS ayarını seçip DNS adreslerini gir. > Kaydedip çık.

!> Kullandığınız işletim sisteminin sürümüne, kullandığınız markaya göre DNS değiştirme işlemleri değişiklik gösterebilir.

## Önerilenler Tablosu

| DNS Sunucusu  | Kayıt Tutma               | Reklam Engelleme |
| -------------- |:------------------------:| ----------------:|
| Mullvad DNS    | Kayıt tutulmuyor         | Sunuyor          |
| Quad9 DNS      | Kayıt tutulmuyor         | Sunuyor          |
| NextDNS        | İsteğe bağlı             | Sunuyor          |
| Adguard DNS    | Kayıt tutuyor (tanımlanamaz) | Sunuyor      |

### Mullvad DNS

| Dns Adresi |
| ---------- |
| Mullvad farklı ihtiyaçlara farklı DNS sunucuları sağlıyor hepsine [**buradan**](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls) bakabilirsiniz.| 

> Eklenecek


### Quad9 DNS

<img src="docs/images/quad9.png" alt="Quad9" width="350" />

| Tür   | DNS Adresi         |       
|-------|:------------------:|
| IPv4  | 9.9.9.9           |  
| IPv4  | 149.112.112.112   |   
| IPv6  | 2620:fe::fe       |
| IPv6  | 2620:fe::9        |

> Eklenecek

### Adguard DNS

| Tür   | DNS Adresi         |       
|-------|:------------------:|
| IPv4  | 94.140.14.14       |  
| IPv4  | 94.140.15.15       |   
| IPv6  | 2a10:50c0::1:ff    |
| IPv6  | 2a10:50c0::2:ff    |

> Eklenecek

### NextDNS

![NextDNS](images/nextdns.png)

> Eklenecek


