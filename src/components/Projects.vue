<template>
  <article class="firstArticle">
    <h1>BootstrapVue-Vuetify-PrimeVue</h1>
    <p>
      Öncelikle yazımıza Vue.js’ nin ne olduğu ile başlayacağız. Vue.js
      interaktif web arayüzleri oluşturmak ve tek sayfa web uygulamaları
      geliştirmek için kullanılan açık kaynak kodlu (Open Source) JavaScript
      kütüphanesidir. Vue.js gibi açık kaynak kodlu kullanıcı arayüzü
      geliştirmeye yarayan React ve Angular’dan bahsetmemek olmaz. Aralarındaki
      en büyük fark React ‘Facebook’ ve Angular ‘Google’ tarafından
      geliştirilmektedir. Vue.js ise ‘Evan You’ tarafından Şubat 2014’te
      piyasaya sürüldü. Bir çok kişinin aklına gelen soru eğer bu kütüphanenin
      arkasındaki kişiye bir şey olursa veya projenin arkasındaki kişi yanlış
      kararlar alırsa ne olacağıdır ? Bunun cevabı ise Vue.js açık kaynak kodlu
      bir kütüphanedir ve arkasında bir çok sponsor olmaktadır bir çok büyük
      şirket ve web sayfası kullanmaktadır
    </p>
    <p>
      Gelelim Vue.js ‘ ın gücünü nereden aldığına. Vue.js’in büyümesi bünyesinde
      geliştirilen kütüphanelerin basitliği, kullanılabilirliği ,bileşenleri
      ,mevcut kütüphaneye implement edilebilir olması , Chrome geliştirici
      eklentisi .. gibi bir çok faktörden bahsedilebilir. Biz bu yazıda
      BootstrapVue,Vuetify ve PrimeVue kütüphanelerine odaklanacağız.
    </p>
    <h2>BOOTSTRAPVUE</h2>
    <p>
      BootstrapVue adını en bilinir kütüphanelerden biri olan , web sitelerinde
      ve web uygulamarında kullanılan Bootstrap’tan almaktadır. BootstrapVue ise
      Bootstrap’ın Vue.js için geliştirilmiş ve kişiselleştirilmiş halidir.
      Bununla beraber Vue.js ile daha kolay Bootstrap kullanımına sahip,
      içerisinde hazır Bootstrap yapıları ve HTML-CSS tabanlı tasarım şablonları
      içeren bir kütüphane ortaya çıkmıştır.
    </p>
    <p>
      Tek kütüphane birçok cihaz ilkesini benimsemiştir. Boostrap, kolay ve
      etkili bir şekilde tek bir kod alanı ile (single code base) web sitenizi
      veya web uygulamanızı telefondan tablete , tabletten kişisel bilgisayara
      ölçeklendirir.<br />BootStrap birçok eklentiyi, modül paketleyicilerini
      (webpack,parcel,rollup.js) ve Nuxt.js ‘i desteklemektedir. Bu modül
      paketleyicileri modülleri bir araya getirir ve kullanılmasını önleyen
      yükleme işlemlerini hızlandırmak ve kaldırmak için optimize eder. Nuxt.js
      ise server side rendering yapılmasına olanak tanır yani sayfa
      indexlemesinde kullanılır. Bu indexleme işlemi ise Google arama motorunun
      robotları tarafından okunan veriler ile sayfamızın aramada gözüküp
      gözükmeyeceği, gözükecekse hangi sırada gözükeceğine karar verme
      aşamasında etkisi olur. Vue.js ile oluşturduğumuz sade HTML dosyamızda
      BootstrapVue ile kullanabileceğimiz Nuxt.js’ı kullanmadığımızda ise Google
      robotları HTML tagı vs olduğu için indexlenemiyor. Bu noktada sayfamıza
      trafik almak için Nuxt.js güzel bir seçenek.
    </p>
    <h2>BootstrapVue üç prensip etrafında toplanır ;</h2>
    <li>Hassas (Responsive)</li>
    <li>Modüler (Modular)</li>
    <li>Erişilebilir ( Accessible)</li>
    <br />
    <p>
      Kullanım amacı mobil öncelikli hassas yapılar oluşturmaktır , Mobil
      öncelikli ile amaçlanan ise projenin başından sonuna kadar olan süreçte
      kullanıcı deneyimi ve tasarımının mobil cihazlar için odak alınmasıdır
      bunun akabinde yapılacak planlama, test ve değerlendirmenin mobil
      ekranlarda yapılmasıdır . Nedeni ise mobil cihazların yapısının
      değişkenliği ,mobil cihazlarda performans internet kotası ile oluşabilecek
      uyumsuzluğu gidermek, telefon, tablet ve kişisel bilgisayarlarda maksimum
      performans elde etmektir.
    </p>
    <br />
    <p>
      Modüler yapıda olması ise sistemi bağımsız olarak ele almamıza olanak
      tanır bunun ile birlikte bağımsız olarak oluşturabilir ve
      değiştirebiliriz. Ayrıca bu tasarım ilkesi ile farklı sistemler arasında
      modülleri oluşturup değiştirebiliriz .
    </p>
    <p>
      Erişilebilirlik ise kısaca BootStrap’ın sahip olduğu özellikler ve
      sınırlandırmalar sayesinde istediğimiz alanda erişmemize olanak tanır.
    </p>
    <p>
      Ayrıca Vue.js ile web’de **ARIA** (Accessible Rich Internet Applications)
      projeler yapabiliriz.Bu projelerin özelliği engelli olan kullanıcıların
      kurumsal web sitelerini normal bir kullanıcı ile aynı seviyede rahat bir
      şekilde kullanmasına olan sağlayan uygulamalar olmasıdır .BootstrapVue ile
      bu mümkündür.
    </p>

    <h2>Vuetify</h2>
    <p>
      Vuetify Google tarafından geliştirilen,Vue ile kullanıcı arayüzü
      tasarlamaya olanak tanıyan çok gelişmiş bir kütüphanedir. Vuetify
      tekrardan kullanabilir,kullanımı kolay bileşenlere sahiptir bunun ile
      geliştiriciler zengin bir kullanıcı deneyimi yaşarlar . Ücretli paketlerin
      yanında birçok ücretsiz layout da barındırmaktadır.
    </p>

    <p>
      Vue.js ‘da olduğu gibi mobil öncelikli yaklaşımı benimsemektedir . Bunun
      ile birlikte BootstrapVue’ da bahsettiğimiz gibi mobil cihazlarda
      oluşabilecek uyumsuzlukları gidermek , performans artışı ve mobil veriyi
      minimum kullanmayı amaçlayan kullanıcı dostu yaklaşımı benimsemektedir.
    </p>
    <p>
      Vuetify birçok tool barındırır ve ‘*Material Desig*n’ tasarım dili ile
      mobil cihazlarda üst seviyede tasarım geliştirilmesine olanak tanır . Bu
      tasarımları diğer tasarımlardan ayıran en büyük artı ise dinamik renk
      konfigürasyonu yapabiliriz , tasarımımızda gerçeğe en yakın renklere sahip
      , gölge ve derinlik sahip bileşenler oluşturabiliriz. Bunun yanı sıra
      Vuetify ile katlanabilir cihazlar için tasarım uyumluluğunu yönetmek
      olanağa sahibiz . Dizayn Token’ı ile renk ve font gibi bazı verileri tutup
      bunu kolay bir şekilde tekrardan tanımlamaya gerek kalmadan projemizde
      kullanabiliriz.
    </p>
    <h2>Vuetify vs Diğer Kütüphaneler 2022</h2>
    <img src="../images/comparasion.png" alt="comparasion with frameworks" />
    <br />
    <p>
      Yukarıdaki tabloya baktığımızda Vuetify’ın resmi internet sitesinde
      paylaşılan Bazu framework’ler ile karşılaştırmasını görmekteyiz . Buradan
      daha rahat bir şekilde görebiliyoruz ki BootstrapVue ile
      karşılaştırıldığında işletmeler için destek açısından ve uzun donem
      destekte Vuetify daha öne çıkmış oluyor . Bunun nedenlerinden biri de
      arkasında Google gibi bir şirketin olması tabii.
    </p>
    <h2>Vuetify’da kullanılan ‘Material Design’ ;</h2>

    <p>
      Material Design, Google tarafından geliştirilen bir tasarım dilidir. Bu
      dilin doğmasına sebep olan ana amaç kullanıcılara daha kararlı bir arayüz
      sağlayabilmektir çünkü Material Design’dan önceki Android uygulamalarının
      her birinde kullanıcı farkli bir tasarım şeması ile karşılaşıyordu .
      Material Design bu soruna farklı ekran boyutlarına uyumlu hale getiren bir
      tasarım şekli çözüm getirmiş oldu ve bu çözümün yanında kullanıcı
      deneyimini üst düzeye çıkaracak standartları da getirdi.
    </p>

    <h2>Material Design üç prensibe dayanmaktadır;</h2>
    <li>-Materyal Metaforu</li>
    <li>- Cesur, Grafik,Amaca Yönelik</li>
    <li>Hareket ve Anlam Bütünlüğü</li>
    <p>
      Materyal metaforu : Google’ın tanımına göre ‘Materyal , dokunulabilir
      gerçeklik üzerine kurulu, kâğıt ve mürekkepten ilham alınmış buna rağmen
      teknolojik açıdan gelişebilir ve yaratıcı düşünceye açık bir malzemedir.’
    </p>

    <p>
      Burda anlatılmak istenen şey uygulamamızda kullandığımız objelerin,
      nesnelerin yapısı , boyutu , büyüklüğü 3Boyutlu ortam ile olan etkileşimi,
      gölgesi, derinliği, renk geçişi vs aklımızda bir objeyi hayal ederken
      düşündüğümüz bütün detayları ile gerçeğe en yakın şekilde tasarlamaktır.
    </p>

    <h1>PrimeVue</h1>
    <p>
      Primefaces / PrimeTek BİLİŞİM ile Türk mühendisler tarafından Açık
      kaynaklı olarak geliştirilmiş ve geliştirilmeye devam etmektedir. Bünyesi
      altında Vue,React,Angular kullanıcı arayüzü oluşturmaya yarayan JavaScript
      kütüphaneleri için kütüphane geliştirmektedir. Vue için PrimeVue, Angular
      için PrimeNG,React için PrimeReact.
    </p>

    <p>
      PrimeVue’dan bahsedecek olursak daha çok kullanıcı deneyimine odaklanır
      hızlı ve verimli bir şekilde sayfamızı oluşturmaya odaklanır. En büyük
      kolaylıklarından biri arayüz tasarlarken çok fazla detaylara takılmadan
      componentleri çağırıp basit düzenlemeler ile ara yüzü tamamlamış oluyoruz.
      içerisindeki PrimeBlocks ile hazır tablo , liste ve paneller ile
      istediğimiz gibi manipule edip şekil boyut renk vs hızlı bir şekilde
      oluşturabiliriz. Ayrıca içerisinde tema düzenleyici de hazır ve
      değiştirilebilir temalara ve şablonlara erişebiliyoruz. Ek olarak Nuxt.js
      ile sayfamızın indexlenmesinde bi adım daha öne geçebiliyoruz.
    </p>

    <h3>EK AVANTAJLAR</h3>

    <p>
      Üç kitaplıkta son derece güçlü ve şirketler tarafından tercih edilen
      kitaplıktır. Her ne kadar kullanım amaçları birbirlerine benzesede bazı
      artıları vardır;
    </p>

    <h2>BootstrapVue ;</h2>
    <p>
      • Bootstrap bilen biri kolayca ustalaşabilir ve son derece geniş yelpazede
      kullanım amacı vardır entegre edebileceğimiz paketler sayesinde ve
      kullanım kolaylığı sayesinde başlangıç- ileri derece projelerde
      kullanılabilir . Satır sütun kart gibi Bootstrap öğelerini Vue bileşenleri
      olarak kullanabiliriz. Entegre edebileceğimiz Nuxt.js ile sayfamızın
      görünürlüğünü arttırabiliriz. Mobil öncelik yaklaşımı ile uyumluluk ve
      performans arttırmış oluruz. ARIA (Accessible Rich Internet Applications)
      ile topluma daha duyarlı ve kurumsal projelerde kullanabileceğimiz işler
      yapabiliriz.
    </p>
    <h2>Vuetify;</h2>
    <p>
      •Geliştirilmesi Google tarafından devam eden stabil , güvenilir , kolay
      bir kütüphanedir. •Material Design ile sade şık ve görsel anlamda doyurucu
      projeler yapılabilir Hazır bileşenler kullanılabilir zamandan tasarruf
      ederken ‘Material Design ‘ ile profesyonel işler ortaya çıkarabiliriz. •
      Mobil öncekli yaklaşımı benimsemektedir .
    </p>
    <h2>PrimeVue;</h2>
    <p>
      interaktif Vue uygulamaları oluşturmak için hazır tablolar , listeler
      paneller sayesinde kısa zamanda bir e-ticaret sayfası ,kişisel web
      sayfası, kurumsal yazılımlar için arayüz tasarlanabilir. Daha çok kolay
      kullanım ve hıza önem verir. Hazır tema,şablon vs de ufak değişiklikler
      yaparak projemizi kısa zamanda hayata geçirebiliriz. Daha profesyonel
      tasarım deneyimi için ücretli paketleri ve desteği ile kullanıcı
      deneyimizi arttırabiliriz.
    </p>

    <h3>FARKLAR</h3>
    <p>
      Üç kitaplıkta son derece güçlüdür ancak aralarında bazı avantajlar ve
      dezavantajlar bulunmaktadır.
    </p>
    <p>
      <strong>BootstrapVue:</strong>Piyasada kendini kanıtlamış olan kullanıcı
      dostu,performans açısından stabil ve geliştiricilerin kullanmaya alışık
      olduğu Bootstrap yapısını Vue.js içerisinde kullanabilmek hem
      geliştiriciler için büyük kolaylık sağlamış hem de beraberinde
      kullanabildiğimiz Nuxt.js ve ARIA artılarından fayfalanmış oluruz.
    </p>
    <p>
      <strong>Vuetify </strong>Google tarafından geliştirilir , Bootstrap ve
      PrimeVue açık kaynaktır. Bu sebeple Vuetify’ın destek olanağı daha
      fazladır. Kullandığımız kütüphanede herhangi bir açık olduğunda sistemin
      güncellenmesi ve açığın kapatılması daha fazla zaman alırken bi kuruluşun
      arkasında olduğu yazılım proje veya kütüphanede açığın kapatılması daha
      kolay olur . Açık kaynak kodlu uygulama veya kütüphane vb. de
      güncellenmemiş cihazlarda güvenlik zafiyeti devam eder.
    </p>
    <p>
      <strong>PrimeVue</strong> Daha çok basit ve hızlı kullanımı ile pratik ve
      hızlı bir şekilde projemizi ortaya çıkarabiliriz. Ana odağımız projeyi
      hızlı bir şekilde ortaya çıkarmaktır sornasında ise ufak değişiklikler ile
      biraz özgünleştirmiş oluruz. Bunun yanında bir çok hazır ve daha
      profesyonel olan ürünleri belli bir ücret karşılığında alabiliriz.
    </p>
    <h3>
      PrimeFaces(PrimeVue) Kolay Olmasına Rağmen Neden Daha Az Kullanılıyor ?
    </h3>
    <p>
      En büyük eksisi ve github da az etkileşim almasının sebebi Open Source
      olarak sunmaları ve ürünlerin çoğunun PrimeVue PRO adı ile ücretli bir
      şekilde sunmaları . Örnek vermek gerekirse Basit lisansa sahip 15–30$
      arası olan bir layout ticari kullanıma sahip değil iken uzatılmış lisans
      ile ticari kullanıma açılıyor ve 150–300$ arasında değişiyor ücreti . Her
      ne kadar kolay kullanıma sahip olması sayesinde kendimiz tasarlıyabilsekte
      projemizi hazır tasarımlar üzerinden ilerlemek kullanıcı ve geliştiriciler
      için büyük artı.
    </p>
    <p>
      VueTify ı örnek vermek gerekirse ürünlerinin bazıları ücretli ama bir çok
      ücretsiz template de sunulmakta. Bu tarz bir durum kominite için daha
      sağlıklı olmaktadır kanaatimce. Bu sayede kullanan kişi sayısı artar ve
      kominite kendi içerisinde gelişmeye devam eder . Ayrıca arkasında Google
      gibi bi şirketin olması da büyük önem arz etmektedir ayrıca Vuetify’da
      ‘Material Design ‘ ile projemizi bir üst seviyeye çıkarabiiliriz ,küçük-
      büyük çaplı projelerde rahat bir şekilde kullanılabilir .
    </p>

 <p><strong>ref:</strong> https://medium.com/@furkannkilicc/bootstrapvue-vuetify-primevue-eb677cf1d874</p>
    <i class="pi pi-check"></i>
    <i class="pi pi-times"></i>
  </article>
</template>
<style scoped>
.firstArticle {
  /* background-color: rgba(0, 0, 0, 0.6); */
  /* background-size: cover; */
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0.3rem;
  font: 1rem "Fira Sans", sans-serif;
}
h1 {
  font-size: 2rem;
  position: sticky;
  text-align: center;
  margin: 2px;
}
p {
  font-size: 18.8px;
  margin-left: 8rem;
  margin-right: 6rem;
  font-weight: normal;
  padding: 1.5px;
  border-radius: 1.6px;
}
img {
  width: 45%;
  height: 500px;
  margin-bottom: 2rem;
}
</style>