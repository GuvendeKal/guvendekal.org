<!-- NOTLAR
 - Bu kategoride lokal ve bulut tabanlı uygulamalar ayrı ayrı eklenebilir- tek bir tabloda belirtilebilir ancak lokal ve bulut tabanlı uygulamaların farkı anlatılmalıdır.
 - Tablo eklemeyi unutmayın
 - Uygun görseller eklemeyi unutmayın.
 - İçerik kuralları ve ekleme yapmak sayfalarını ziyaret edebilirsiniz -->

# Dosya Sıkıştırma

**Dosya sıkıştırma**, dijital dosyaların boyutunu azaltmak için kullanılan bir tekniktir. Bu işlem, bir veya birden fazla dosyanın kapladığı alanı daha küçük bir boyuta indirir. Dosya sıkıştırma, dosyaların daha az depolama alanı kaplamasını ve daha hızlı transfer edilmesini sağlar. Sıkıştırma, genel olarak verilerin tekrar eden veya gereksiz parçalarını kaldırarak veya veri yapısını optimize ederek yapılır. Bu işlem genellikle **ZIP**, **GZIP**, **RAR**, **7Z** gibi formatlar tercih edilerek gerçekleştirilir.

Dosya sıkıştırma, **kayıplı** veya **kayıpsız** yöntemlerle gerçekleştirilebilir. 

**Kayıpsız Sıkıştırma:**  Orijinal verilerin tamamının sıkıştırılmış dosyada korunmasıdır. Bu yöntem, özellikle metin ve veri dosyalarında kullanılır. Kayıpsız sıkıştırma yönteminde kullanılan algoritmalar arasında **Huffman Algoritması**, **Lempel-Ziv (LZ77 & LZ78) Algoritmaları** ve **RLE Algoritması** verilebilir.

**Kayıplı Sıkıştırma:**  Bazı veri kayıpları ile dosya boyutunu azaltır. Bu yöntem, özellikle görüntü, ses ve video dosyalarında kullanılır. Kayıplı sıkıştırma yönteminde kullanılan algoritmalar arasında **DCT** ve **AAC** verilebilir.

## Önerilenler Tablosu

| Uygulama | Açık Kaynak | Sıkıştırma Algoritması | Şifreleme | Desteklenen Formatlar | Platformlar |
| --- | :---: | :---: | :---: | :---: | :---: |
| <span style="display: inline-block; vertical-align: middle;"><img src="/docs/images/7zip.png" alt="7z" style="width: 30px; height: 30px;"> </span> <span style="display: inline-block; vertical-align: middle;"> 7-Zip </span> | <span style="color: green;">✓</span> | <span style="display: inline-block; vertical-align: middle;"> LZMA, LZMA2, BZip2, PPMD </span> | <span style="display: inline-block; vertical-align: middle;"> AES-256 </span> | <span style="display: inline-block; vertical-align: middle;"> 7Z, ZIP, GZIP, BZIP2, RAR, TAR, XZ, WIM </span> | <i class="fa-brands fa-windows"></i> <i class="fa-brands fa-apple"></i> <i class="fa-brands fa-linux"></i> <i class="fa-brands fa-freebsd"></i> |
| <span style="display: inline-block; vertical-align: middle;"><img src="/docs/images/peazip.png" alt="peazip" style="width: 30px; height: 30px;"> </span> <span style="display: inline-block; vertical-align: middle;"> PeaZip </span> | <span style="color: green;">✓</span> | <span style="display: inline-block; vertical-align: middle;"> LZMA, BZip2, PPMD, Deflate, Zstd </span> | <span style="display: inline-block; vertical-align: middle;"> AES-256, Serpent, Twofish </span> | <span style="display: inline-block; vertical-align: middle;"> 7Z, ZIP, GZIP, BZIP2, RAR, TAR, XZ, WIM, PEA, ARJ, RPM, DEB, Z </span> | <i class="fa-brands fa-windows"></i> <i class="fa-brands fa-apple"></i> <i class="fa-brands fa-linux"></i> <i class="fa-brands fa-freebsd"></i> |

### <span style="display: inline-block; vertical-align: middle;"><img src="docs/images/7zip.png" alt="7z" style="width: 50px; height: auto;"> </span> <span style="display: inline-block; vertical-align: middle;"> 7-Zip

**[7-Zip](https://www.7-zip.org/)**, ücretsiz ve açık kaynaklı bir dosya sıkıştırma yazılımıdır. Dosya gruplarını "arşiv" olarak nitelendirilen sıkıştırılmış bölümler yerleştirmek için kullanılan bir masaüstü programıdır. 7-Zip'in 7z adlı kendi arşiv biçimi bulunmaktadır. 7-Zip, üst düzey sıkıştırma, komut satırı entegrasyonu, güçlü AES-256 şifreleme ve kendi format biçimi olan 7Z ek olarak; TAR, ZIP, RAR dahil olmak üzere çoklu format desteği ile zengin özelliklere sahip bir arşivleme yazılımdır. Güçlü dosya yönetim araçları ve Linux/Unix sistemleri için bir komut satırı sürümü sunar. 

7-Zip açık kaynaklı özgür bir yazılımdır. Kodun çoğu [GNU LGPL](http://www.gnu.org/) lisansı altındadır. Kodun bazı bölümleri [BSD 3-clause](https://opensource.org/license/BSD-3-clause) lisansı altındadır.

- [Açık kaynak depo](https://sourceforge.net/projects/sevenzip/files/7-Zip/)
- [Açık kaynak lisansı](https://www.7-zip.org/license.txt)

### <span style="display: inline-block; vertical-align: middle;"><img src="docs/images/peazip.png" alt="peazip" style="width: 50px; height: auto;"> </span> <span style="display: inline-block; vertical-align: middle;"> PeaZip

**[PeaZip](https://peazip.github.io/)**, ücretsiz ve açık kaynaklı bir dosya arşivleme yazılımdır. Çoklu işletim sistemleri için (Windows, Linux, macOS, ReactOS, FreeBSD) için WinRAR, WinZip ve benzeri yazılımlara çapraz platform Açık Kaynak (LGPLv3) ücretsiz alternatiftir. PeaZip AES-256, Serpent, Twofish algoritmalarıyla güçlü bir şifreleme seçeneği ve kendi arşiv formatı PEA başta olmak üzere 7Z, RAR, ZIP, BZIP2, GZIP, RPM, DEB, split TAR ve Z formatlarını da dahil eden +226 dosya uzantısına tam olarak destek verebilen ücretsiz bir sıkıştırma yazılımıdır. PeaZip, arşiv içeriğinde sezgisel gezinme için arama ve geçmiş özelliklerine sahip bir arşiv tarayıcı arayüzüne sahiptir ve arşive ayrıntılı çoklu dışlama ve dahil etme filtre kurallarının uygulanmasına izin verir; alternatif arşiv tarama yöntemi olarak düz tarama modu mümkündür. Görsel arayüzünde tanımlanan işi dışa aktararak oluşturulan komut satırını kullanarak ayıklama ve arşivleme işlemlerini otomatik olarak yürütmelerine olanak tanır. Ayrıca arşivlemeyi veya yedekleme işleminin tanımını hızlandırmak için bir arşiv düzenini oluşturabilir, düzenleyebilir ve geri yükleyebilir.

PeaZip açık kaynaklı özgür bir yazılımdır. [LGPLv3](http://www.gnu.org/) lisansı altında yayımlanmaktadır. Programın diğer önemli özellikleri arasında arşiv dönüştürme, dosya bölme ve birleştirme, güvenli dosya silme, bayttan bayta dosya karşılaştırması, arşiv şifreleme, sağlama toplamı/karma dosyaları, çift dosyaları bulma, toplu yeniden adlandırma, sistem kıyaslama, rastgele parolalar/anahtar dosyaları oluşturma yer alır. Görüntü küçük resimlerini görüntüleyebilme özelliği (ana makineye görüntü önbelleğini kaydetmeden anında çok iş parçacıklı küçük resim oluşturma) ve İşletim sistemi bağlam menüsünde entegrasyonu bulunmaktadır. Ayrıca programın kullanıcı arayüzü (simgeler ve renk şeması dahil) özelleştirilebilir. 

- [Açık kaynak depo](https://github.com/peazip/PeaZip)
- [Gizlilik politikası](https://peazip.github.io/peazip-tos-privacy.html)