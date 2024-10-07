# Ekleme Yap

Güvende Kal projesi herkesin katkı yapabileceği açık bir projedir.

?> Katkıda bulunmak için [Github depomuza](https://github.com/GokturkTalha/guvendekal.org) ziyaret edebilirsin.

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

```
# Dokümantasyon
* [Katkıda Bulunanlar](katki.md)
* [Ekleme Yapmak](ekleme.md)
    *[Biçimlendirme](bicimlendirme.md)
```

Örneğin sizin gördüğünüz sol menü böyle. Buraya açtığınız `ornek-dosya-nasil-olusturulur.md` dosyasını eklemek isterseniz:

```
# Dokümantasyon
* [Katkıda Bulunanlar](katki.md)
* [Ekleme Yapmak](ekleme.md)
    *[Biçimlendirme](bicimlendirme.md)
* [Dosya Oluşturma](ornek-dosya-nasil-olusturulur.md)
```

Şeklinde ekleyebilirsiniz. 

!> Menüde görünecek isim kısaltılabilir. Örneğin, "Örnek Dosya Nasıl Oluşturulur" yerine "Dosya Oluşturma" şeklinde ekleyebilirsiniz.

### Resim nasıl eklenir?

> Bu bölüm eklenecektir.

### Dökümantasyon yazarken dikkat edilmesi gerekenler

- Yazım ve imla kurallarına dikkat edin.
- Görseller ve biçimlendirme kullanın.
- Kaynaklar gösterin.

?> Katkıda bulunduktan sonra "Katkıda Bulunanlar" kısmında adınızın gözükmesini isterseniz. [buradan](https://github.com/GokturkTalha/guvendekal.org/blob/main/docs/katki.md) kendinizi ekleyebilirsiniz.



