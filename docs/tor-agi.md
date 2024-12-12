<!-- NOTLAR
 - Bu içerik bilgi içerikli makale olacaktır.
 - Tablo eklemeyi unutmayın
 - Uygun görseller eklemeyi unutmayın.
 - İçerik kuralları ve ekleme yapmak sayfalarını ziyaret edebilirsiniz -->

# Tor Ağı

Tor, **"The Onion Router"** ifadesinin kısaltmasıdır ve internet üzerinde anonimlik ve gizlilik sağlamak amacıyla geliştirilmiş bir ağ ve yazılım sistemini ifade eder. Tor, kullanıcıların internet trafiğini şifreleyerek ve birden fazla sunucu üzerinden yönlendirerek kimliklerini ve çevrimiçi aktivitelerini gizlemelerini sağlar. Bu sistem, çevrimiçi izlemeleri engellemek, sansürleri aşmak ve güvenliği artırmak için etkili bir çözüm sunar. Özellikle gizliliğe önem veren bireyler, aktivistler, gazeteciler ve sansüre maruz kalan kişiler tarafından yaygın olarak kullanılır.

Tor’un temel amacı, kullanıcılarına anonim bir internet deneyimi sunmaktır. İnternette gezinirken genellikle IP adresiniz, tarayıcı parmak iziniz ve tarama geçmişiniz gibi bilgiler birçok farklı platform tarafından izlenir ve kaydedilir. Tor, bu bilgilerin toplanmasını ve izlenmesini engeller. İnternet trafiğiniz, Tor ağına girdikten sonra üç farklı düğümden geçer: giriş düğümü, orta düğüm ve çıkış düğümü. Bu süreçte veri, katmanlı şifreleme ile korunur ve her bir düğüm yalnızca bir önceki ve bir sonraki düğümle ilgili bilgiye sahip olur. Bu düğüm bütünü, kullanıcı kimliğinin ve verilerinin izlenmesini son derece zor hale getirir.
Bunun yanı sıra Tor, ifade özgürlüğünü destekleyen bir araç olarakta öne çıkar. Dünya genelinde birçok ülke, belirli internet içeriklerine erişimi engeller veya ağır sansür uygulamalarıyla kullanıcıları kısıtlar. Tor, bu tür engellemeleri aşarak bireylerin ve toplulukların özgürce iletişim kurmasını sağlar. Örneğin, baskıcı rejimler altında yaşayan gazeteciler ve aktivistler, Tor sayesinde güvenli bir şekilde bilgi paylaşabilir ve iletişim kurabilir. Bu yönüyle Tor, yalnızca bir gizlilik aracı değil, aynı zamanda bir özgürlük platformu olarak da kabul edilebilir.

Tor’un önemli bir diğer özelliği, güvenliği artırmasıdır. İnternet trafiğiniz Tor ağına bağlandığında, tüm verileriniz çok katmanlı bir şifreleme sürecinden geçer. Bu durum, özellikle halka açık Wi-Fi ağlarında veya güvenilir olmayan bağlantılarda, kötü niyetli kişilerin trafiğinizi ele geçirmesini veya takip etmesini zorlaştırır. Ayrıca, Tor ağını kullanan bir kişi, e-posta gönderirken, dosya paylaşırken veya sosyal medya hesaplarına giriş yaparken gerçek kimliğini gizleyebilir. Bu özellik, çevrimiçi taciz, kimlik hırsızlığı veya veri ihlali gibi tehditlere karşı önemli bir koruma katmanı oluşturur.

Tor’un sunduğu avantajlardan biri de yalnızca internetin yüzeyi ile sınırlı kalmamasıdır. Tor, kullanıcıların `.onion` uzantılı alan adlarına erişmesine olanak tanır. Bu tür siteler genellikle ["dark web"](https://guvendekal.org/#/dark_web) olarak bilinen, yalnızca Tor gibi özel araçlarla erişilebilen bir ağda yer alır. Ancak bu özellik, beraberinde bazı riskler de getirir. Dark web üzerinde yasal olmayan içeriklere veya dolandırıcılık girişimlerine rastlanabilir. Bu nedenle, kullanıcıların etik ve yasal sınırları gözeterek hareket etmeleri önemlidir.

## Tor Nasıl Çalışır?

Tor ağı, kullanıcıların anonim kalmasını sağlamak için veri trafiğini şifreleyip birden fazla düğüm _(node)_ üzerinden yönlendirir. Bu düğümler, verilerin yalnızca bir kısmını görebilir ve bu da trafiğin kaynağını ve hedefini gizlemek için kritik bir rol oynar. Tor’un temel düğüm yapısı **Giriş Düğümü _(Entry Node)_**, **Orta Düğüm _(Relay Node)_** ve **Çıkış Düğümü _(Exit Node)_** olmak üzere üç aşamadan oluşur. Her bir düğümün farklı bir görevi vardır ve bu görevlerin anlaşılması Tor’un nasıl anonimlik sağladığını anlamak açısından önemlidir.

Yönlendirme süreci şu adımlarla işler:

### **Giriş Düğümü _(Entry Node)_:**

Giriş düğümü, kullanıcının Tor ağına bağlandığı ilk noktadır. Bu düğüm, kullanıcının gerçek IP adresini görebilen tek noktadır. Ancak giriş düğümü, bu bilgiyi Tor ağının geri kalanına veya hedef siteye iletmez. Bunun yerine, veriyi şifreler ve bir sonraki düğüme iletir.

> Örnek: kullanıcı, Tor kullanarak bir haber sitesine bağlanmak istiyor. kullanıcının bilgisayarı, Tor ağına bağlanırken bir giriş düğümü _(örneğin Almanya’da bulunan bir sunucu)_ seçer. Bu düğüm, kullanıcının gerçek IP adresini bilir, ancak onun bir haber sitesine bağlanmaya çalıştığını bilmez. Trafiği şifreler ve anonim bir şekilde orta düğüme iletir.

### **Orta Düğüm _(Relay Node)_:**

Orta düğüm, veri trafiğini anonimleştiren ve yönlendiren ara bağlantı noktasıdır. Orta düğümler, verinin nereden geldiğini ve nereye gideceğini bilmez. Görevleri, veriyi sadece bir sonraki düğüme iletmektir. Tor ağı genellikle birden fazla orta düğüm kullanır ve bu düğümler trafiğin daha da anonimleşmesini sağlar.

> Örnek: kullanıcının trafiği Almanya’daki giriş düğümünden çıktıktan sonra, Fransa’da bulunan bir orta düğüme ulaşır. Bu düğüm, verinin Almanya’dan geldiğini bilir ama kullanıcıyı tanımaz. Aynı zamanda, trafiğin nereye yönlendirileceği hakkında sadece çıkış düğümüne gitmesi gerektiğini bilir. Orta düğüm bu bilgileri şifrelenmiş bir şekilde ilettiği için, Ali’nin trafiği anonim kalır.

### **Çıkış Düğümü _(Exit Node)_:**

Çıkış düğümü, Tor ağından çıkan trafiğin hedefe ulaştığı son noktadır. Bu düğüm, trafiğin şifrelenmiş son katmanını çözer ve veriyi internet üzerindeki nihai hedefe iletir. Çıkış düğümü, kullanıcının ulaşmak istediği web sitesi veya hizmetle doğrudan bağlantı kurar.

> Örnek: kullanıcının verisi Fransa’daki orta düğümden çıktıktan sonra, ABD’deki bir çıkış düğümüne ulaşır. Çıkış düğümü, trafiğin hedef web sitesi olan haber sitesine iletilmesini sağlar. Haber sitesi, trafiğin ABD’den geldiğini görür, ancak kullanıcının gerçek IP adresini veya giriş düğümünü bilemez.

Bu çok katmanlı yapı, trafiğin izlenmesini ve kaynağın tespit edilmesini son derece zorlaştırır. Ancak çıkış düğümünde, veriler şifrelenmemiş olabilir. Bu nedenle, kullanıcıların HTTPS gibi ek şifreleme yöntemlerini tercih etmeleri önerilir.
