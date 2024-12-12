<!-- NOTLAR
 - Bu sayfa bilgi içerikli makaleden oluşmaktadır.
 - İçerik kuralları ve ekleme yapmak sayfalarını ziyaret edebilirsiniz -->

# Güvenlik

**Güvenlik** kavramı, bireylerin veya şirketlerin çevrimiçi verilerini, sistemlerine yetkisiz erişim, kötü amaçlı yazılımlar, veri sızıntıları gibi tehditlere karşı **koruma amaçlı alınan önlemler bütününü ifade eder**. Bazı tehditlerin sonucunda hesaplarınızın veya kart bilgilerinizin ele geçirilmesi, cihazlarınıza kötü amaçlı yazılımların bulaşması, ya da kişisel bilgilerinizin izinsiz bir şekilde paylaşılması veya kullanılması gibi **ciddi riskler taşıyan şeyler olabilir**.

## Bazı tehdit modelleri

Dijital dünyada güvenliği sağlamak için tehdit modellerini anlamak önemlidir. Tehdit modellerini anlamak, belirli tehditlerin nasıl çalıştığını ve hangi durumlarda devreye girdiğini anlamaya yardımcı olur. Bireysel kullanıcıları en çok hedefleyen modellerden bazıları şunlardır.

- **Zararlı Yazılımlar**: Virüsler, truva atları, solucanlar, fidye yazılımları (ransomware) ve casus yazılımlar (spyware) gibi zararlı yazılımlar, cihazlara bulaşarak veri çalabilir, cihazlara zarar verebilir.
- **Oltalama**: E-posta veya mesajlar yoluyla kişisel bilgileri, şifreleri veya finansal bilgiler (kredi kartı vs) çalınmaya çalışılır.

## Güvenlik için yapılması gerekenler

### Güvenilir Uygulamalar

Güvenlik için en başta kullandığımız uygulamaların **güvenilir** olması gerekir. Örneğin bir not alma uygulamasının, cihazınızın kamera ve mikrofonuna erişmesinin herhangi bir nedeni olamaz. Ya da VPN gibi maliyetli servislerin ücretsiz olması, asıl ürünün siz olduğunu gösterir; çünkü ürüne para ödemiyorsanız, ürün sizsiniz demektir. "_Bedava peynir sadece fare kapanında olur_."

- 2020'de 7 farklı ücretsiz VPN, [**1.2TB boyutunda kullanıcı verisini sızdırdı**](https://www.vpnmentor.com/blog/report-free-vpns-leak/).
- 2021'de 3 farklı ücretsiz VPN, [**21 milyon kullanıcısının detaylı kimlik bilgilerini sızdırdı**](https://cybernews.com/security/25-million-free-vpn-user-records-exposed/).
- 2023'de ücretsiz bir VPN, [**360 milyon kullanıcısının verisini sızdırdı**](https://www.vpnmentor.com/news/report-super-vpn-breach/).

Yine de istisnalar: Proton VPN gibi bazı hizmetler, ücretsiz olmasına rağmen güvenilir ve saygın bir alternatiftir. (Daha detaylı bilgi için [**VPN Servisleri**](https://guvendekal.org/#/vpn) sayfasına bakabilirsiniz.)

Aynı zamanda uzun süredir **güncelleme almayan** yada güncelleme almayı tamamen bırakmış uygulamalarda son derece tehlikelidir. Çünkü bu tür uygulamalar, zamanla ortaya çıkan güvenlik açıklarına karşı savunmasız hale gelir ve kötü niyetli kişiler tarafından istismar edilebilir. Özellikle güncellemeleri ihmal edilen uygulamalarda, cihazınızın veya kişisel verilerinizin güvenliği ciddi risk altına girebilir. Bu nedenle, yalnızca aktif olarak geliştirilen ve **düzenli güncellemeler** alan uygulamaları tercih etmek önemlidir.

### Yükleme kaynakları

Bilmediğiniz veya şüpheli kaynaklardan indirilen dosyalar, uygulama aslında güvenilir olsa bile, dosyanın içine saklanmış zararlı yazılımlar barındırabilir. Bu tür yazılımlar, cihazınıza sızarak kişisel bilgilerinizi çalabilir, cihazınıza zarar verebilir ya da kötü amaçlı faaliyetler için kullanılabilir. Uygulamaları yalnızca resmi internet siteleri yada cihazınızın uygulama mağazasından edinin.

### Güçlü şifreler ve 2 faktörlü doğrulama

Güçlü şifreler kullanmak hesap güvenliklerinizi arttırmak için önemli bir unsurdur. Güçlü şifreler, çevrimiçi güvenliğin temel taşlarından biridir.

- Şifreler en az 12-16 karakterden oluşmalıdır. Daha uzun şifreler kaba kuvvet saldırısı gibi tehditlere karşı kırılmaya karşı daha dayanıklıdır.
- İsimler, doğum tarihleri, yaygın kelimeler veya basit diziler (123456, qwerty) kullanılmamalıdır. Bu tür şifreler, yaygın parola kırma teknikleriyle kolayca çözülebilir.
- Aynı şifreyi birden fazla hesapta kullanmak risklidir. Bir şifre sızdırıldığında diğer hesaplarınız da tehlikeye girer.

Bugün pek çok insan, şifrelerini basit tutarak ve her platformda aynı şifreyi kullanarak siber tehditlere karşı savunmasız hale geliyor. Her hesap için farklı ve güçlü şifreler oluşturmak (`!@y6fv.Q3F34v!` gibi) birçok kişiye karmaşık ve zor görünebilir. Bu durumda, güvenliği artırmak için en mantıklı seçenek bir şifre yöneticisi kullanmaktır. Şifre yöneticileri, kullanıcıların tüm şifrelerini güvenli bir şekilde saklamalarına, yönetmelerine ve hatırlamalarına yardımcı olan dijital araçlardır. Bu yazılımlar, genellikle tek bir ana şifre ile giriş yapılarak tüm diğer şifrelere erişim sağlar. Daha detaylı bilgi için [**Şifre Yöneticileri**](https://guvendekal.org/#/sifre-yoneticileri) sayfasına bakabilirsiniz.

- Şifre yöneticileri, rastgele oluşturulmuş uzun ve karmaşık şifreler sağlayarak tahmin edilmesi zor şifreler oluşturur. Örneğin, `Xk#9z!P@1qT$4` gibi kırılması zor olan bir şifreyi kolayca hatırlamak zorunda kalmazsınız.
- Her hesap için farklı bir şifre kullanmanızı teşvik eder. Bu sayede bir hesabın ele geçirilmesi diğer hesaplarınızı riske atmaz.
- Otomatik doldurma özelliği, şifreleri elle yazma ihtiyacını ortadan kaldırır. Giriş yapmak hızlı ve pratiktir. Şifreleri hatırlamak veya sıfırlamak için harcanan zamanın önüne geçer.

Aynı zamanda, iki faktörlü doğrulama (2FA) yöntemleriyle hesaplarınızı ekstra bir güvenlik katmanıyla korumak mümkündür. 2FA, şifrenizin yanı sıra ikinci bir doğrulama adımı gerektirir. Bu adım genellikle bir mobil cihazınıza gönderilen doğrulama kodu, bir doğrulama uygulaması üzerinden üretilen zaman bazlı bir kod veya fiziksel bir güvenlik anahtarı olabilir. Daha detaylı bilgi için [**2 Faktörlü Doğrulama**](https://guvendekal.org/#/2-faktorlu-dogrulama) sayfasına bakabilirsiniz

- 2 faktörlü doğrulama sistemi kullandığınız zaman şifreniz ele geçirilse bile, saldırganlar ikinci doğrulama faktörüne erişemediği sürece hesabınıza giriş yapamaz.
- SMS kodları kolay erişilebilir ancak en zayıf 2 faktörlü doğrulama yöntemlerinden biridir. Bunun yerine doğrulama uygulamaları kullanılması önerilir.
- Şifre yöneticileri ve 2FA birlikte kullanıldığında, hesap güvenliğinizi katbekat artar. Şifre yöneticileri güçlü ve benzersiz şifreler oluştururken, 2 faktörlü doğrulama ek bir doğrulama adımı sağlar ve böylece potansiyel tehditlere karşı daha kapsamlı bir koruma sunar.

### Reklam engelleyici

Reklam engelleyici kullanmak, internette güvenliğinizi artırmanın ve daha iyi bir kullanıcı deneyimi elde etmenin etkili yollarından biridir. Bugün çoğu reklam aslında kötü amaçlı yazılımlar veya kimlik avı (oltalama) gibi saldırıları içerebilir. Sizi zararlı içerikler barındıran sitelere yönlendirebilir.

- [**Her 100 reklam gösteriminden birinin tehlikeli ve zararlı olduğu düşünülüyor**](https://www.publift.com/blog/malvertising#main-types-of-malvertising-campaigns).
- [**2023 yılında Google, toplamda 5,5 milyar zararlı reklamı engelledi ve 12,7 milyon reklam veren hesabını kötü niyetli faaliyetler nedeniyle askıya aldı**](https://searchengineland.com/google-ads-safety-report-2023-438796). Ancak, saldırganlar sık sık bu güvenlik önlemlerini aşarak güvenilir görünen reklamlar aracılığıyla kullanıcıları hedef almayı başarıyor.

### Diğerleri

- Açık kaynak yazılımlar kullanmak. Kaynak kodu herkese açık olan bir proje, kaynak kodları kapalı olan bir projeye göre daha şeffaftır!
- guvendekal.org'u takip etmek :)

## Güvenlik için yararlı bağlantılar

- [Neden Ücretsiz VPN Kullanmamalısınız?](https://www.cnet.com/tech/services-and-software/why-you-shouldnt-use-a-free-vpn/)
- [Neden Bir Parola Yöneticisine İhtiyacınız Var? Evet, senin.](https://www.nytimes.com/2019/08/27/smarter-living/wirecutter/why-you-need-a-password-manager-yes-you.html)
- [+20 Kötü Amaçlı Reklam Gerçekleri ve 2024 İstatistikleri](https://proprivacy.com/blog/malvertising-facts-statistics-2022-protect-youreself-from-malvertising)
- [+14 Kötü Amaçlı Reklam İstatistikleri, Gerçekler ve Trendler](https://vpnalert.com/resources/malvertising-statistics/)
- [FBI Dolandırıcıları Atlatmak İçin Reklam Engelleyici Yüklemenizi Öneriyor](https://www.pcmag.com/news/fbi-recommends-installing-an-ad-blocker-to-dodge-scammers)
