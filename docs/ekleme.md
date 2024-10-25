<!-- NOTLAR 
 - Bu sayfa bilgi içerikli makaleden oluşmaktadır.
 - Bu sayfaya ekleme yapmadan önce yetkililere danışmanız önerilir. -->

# Ekleme Yap

Güvende Kal projesi herkesin katkı yapabileceği açık bir projedir.

?> Katkıda bulunmak için [**Github depomuzu**](hhttps://github.com/GuvendeKal/guvendekal.org) ziyaret edebilirsin.

### İçerik Kuralları

İçerikleri yazarken uymanız gereken kurallara [**İçerik Kuralları**](https://guvendekal.org/#/icerik-kurallari) sayfasından erişebilirsiniz.

### Biçimlendirme

Güvende Kal projesi, bireyler tarafından sayfaların daha rahat okunması ve göze daha güzel gelen sayfalar oluşturabilmek için, kolay kullanılabilen **Markdown** dosya tipini kullanır.

- Biçimlendirme rehberi için [Biçimlendirme](bicimlendirme.md) sayfasına bakabilirsiniz.
- [Markdown kullanma rehberi](https://www.markdownguide.org/)

### Sayfalar nasıl oluşturulur/düzeltilir?

#### Sayfa oluşturma

Sayfalar Github deposunun `guvendekal.org/docs/` klasöründe bulunur. "**Add files**" kısmına tıklayıp "**Upload files**" diyerek yerelde yaptığınız markdown dosyasını yükleyebilirsiniz yada "**Create new file**" diyerek Github üzerinden Markdown dosyası oluşturabilirsiniz ve düzenleyebilirsiniz.

!> Oluşturduğunuz dosyanın ismi `ornek.md` şeklinde olmalıdır. `ornek` olursa, **Markdown** dosyası olmayacaktır.

Koyacağınız dosyanın ismini, sayfanın başlığına göre koyunuz. Örneğin oluşturacağımız döküman "**Örnek Sayfa Nasıl Oluşturulur?**" olsun. Dosyanın adını `ornek-dosya-nasil-olusturulur.md` yapmanız gerekir.

- Dosya adında Türkçe karakter olmamalıdır.
- Boşluk yerine `-` işareti kullanılır.

?> Örneğin dosya adını `ornek-dosya-nasil-olusturulur.md` yerine `ornek.md` yaparsanız site üzerinde ki link yapısı `guvendekal.org/#/ornek` olacaktır. Biz daha estetik ve anlaşılabilir olması için `guvendekal.org/#/ornek-dosya-nasil-olusturulur` olmasını istiyoruz.

#### Sayfa düzenleme

Zaten ekleme yapmak istediğiniz sayfa var mı? O zaman `guvendekal.org/docs/` klasöründen düzeltmek istediğiniz **.md** uzantılı dosyayı açıp düzenleme yapabilirsiniz.

### Sol menü nasıl düzeltilir- sayfa eklenir?

Sol menü, Github deposunda `guvendekal.org/docs/` klasöründe bulunan `_sidebar.md` adlı dosyadır.

?> Menü dosyasını açmak için [buraya](https://github.com/GokturkTalha/guvendekal.org/edit/main/docs/_sidebar.md) tıklayabilirsiniz.

- `#` ile menüde başlıklar oluşturabilirsiniz. Örneğin menüde gördüğünüz "Nedir, Dökümantasyon" birer başlıktır.
- `[Menüde görünecek isim](-.md)` ile menüye sayfanızı ekleyebilirsiniz.

```html
# Dokümantasyon
# <i class="fa-solid fa-bars"></i> Dokümantasyon
* [<i class="fas fa-user"></i> Katkıda Bulunanlar](katkida-bulunanlar.md)
* [<i class="fas fa-file-alt"></i> İçerik Kuralları](icerik-kurallari.md)
* [<i class="fas fa-pencil-alt"></i> Ekleme Yapmak](ekleme.md)
    * [<i class="fas fa-text-width"></i> Biçimlendirme](bicimlendirme.md)
```

Örneğin sizin gördüğünüz sol menü böyle. Buraya açtığınız `ornek-dosya-nasil-olusturulur.md` dosyasını eklemek isterseniz:

```html
# <i class="fa-solid fa-bars"></i> Dokümantasyon
* [<i class="fas fa-user"></i> Katkıda Bulunanlar](katkida-bulunanlar.md)
* [<i class="fas fa-file-alt"></i> İçerik Kuralları](icerik-kurallari.md)
* [<i class="fas fa-pencil-alt"></i> Ekleme Yapmak](ekleme.md)
    * [<i class="fas fa-text-width"></i> Biçimlendirme](bicimlendirme.md)
* [Dosya Oluşturma](ornek-dosya-nasil-olusturulur.md)
```

Şeklinde ekleyebilirsiniz. İkon eklemek için [**Font Awesome**](https://fontawesome.com/icons) sitesinden aldığınız ikonun kodunu [ ] arasına en başa yazabilirsiniz.

Örnek `[<i class="fa-solid fa-gear"></i> Dosya Oluşturma]` şeklinde ekleyebilirsiniz. İkon kodunu almak için seçtiğiniz ikonun üstüne tıklayabilirsiniz.

?> Menüde görünecek isim kısaltılabilir. Örneğin, "Örnek Dosya Nasıl Oluşturulur" yerine "Dosya Oluşturma" şeklinde ekleyebilirsiniz.

### Görsel nasıl eklenir?

Görseller `guvendekal.org/docs/images/` klasörüne yüklenir. Bu klasöre eklediğiniz `guvendekal.png` adlı görseli bir yazıya eklemek için `![Resim Açıklaması](images/guvendekal.png)` kodunu kullanabilirsiniz.

!> Görsel ismini, uzantısını ve dosya konumunu doğru yazdığınıza emin olunuz. [ ] kısmı, herhangi sorunda (internet-sunucu sorunlarında) resmin yüklenmemesi gibi bir sorun çıkartırsa insanlara resmin açıklamasını gösterecektir.

### Dökümantasyon yazarken dikkat edilmesi gerekenler

- Yazım ve imla kurallarına dikkat edin.
- Görseller ve biçimlendirme kullanın.
- Kaynaklar gösterin.

?> Katkıda bulunduktan sonra "Katkıda Bulunanlar" kısmında adınızın gözükmesini isterseniz. [buradan](https://github.com/GuvendeKal/guvendekal.org/blob/main/docs/katkida-bulunanlar.md) kendinizi ekleyebilirsiniz.
