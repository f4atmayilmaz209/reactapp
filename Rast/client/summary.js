/*

ReactJs' in DataGrid kütüphanesini kullanarak istenen boyutta bir table tasarlayıp ve fake verileri apiden alarak anasayfayı görselleştirdim.

Projede istenen tasarımı yapmak için Navbar Componentinde linkleri,website logolalarını ve bir search bar kutusunu kodladım Search,Filtreleme,Social Media logolarını React'ın 
Material-ui icons kütüphanesini kullanarak görselleştirdim

Ayrıca html ve css kodlarını yazmak için React'ın styled-components kütüphanesinden faydalandım

İkinci bir Componenti, Ekleme kutusu için oluşturdum ve burada Localden veri almak için Redux-Toolkit kütüphanesinden faydalanarak bir store oluşturdum

Restful api işlemlerini gerçekleştirmek için bir Json server api'si yazarak Get ve Post metodları için bir service yazdım.Böylece program çalıştığında anasayfa api'den gelen 
verileri işleyip ayrıca eklenen sosyal medya bilgilerini de post metoduyla alıp ve hem de localde tutup DataGrid'e gönderen bir proje yazdım .

Redux’taki değişkenlerin, sayfa yenilendiğinde, değiştiğinde veya uygulama kapatıp tekrar açıldığında tekrar eski haline dönmesini engelleyen bu değişkenleri localstorage da saklanması için redux-persist kütüphanesinden faydalandım.

Responsive.js dosyasında mobile için kodlayarak ayarlama yaptım.
*/