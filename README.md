# Firebase Authentication Web App
Bu proje, Veri Tabanı Yönetim Sistemleri dersi kapsamında geliştirilmiş basit bir web uygulamasıdır. Firebase Authentication kullanarak kullanıcıların kayıt, giriş ve çıkış işlemlerini gerçekleştirebildiği bir sistem sunar.

## Projenin Amacı
Bu web uygulaması, Firebase Authentication servisinden faydalanarak kullanıcıların güvenli bir şekilde kayıt olmalarını, giriş yapmalarını ve oturumlarını kapatmalarını sağlar. Proje, kullanıcı kimlik doğrulama süreçlerini gerçek zamanlı olarak yönetir ve bu süreçlerin temel işlevlerini örneklerle gösterir.

## Sağladığı Avantajlar
- Kolay Kimlik Doğrulama: Firebase Authentication kullanarak, kullanıcıların email ve şifre ile kolayca kaydolabilmesi ve giriş yapabilmesi sağlanır.

- Gerçek Zamanlı Veri İşlemi: Firebase entegrasyonu sayesinde, kimlik doğrulama işlemleri anında gerçekleşir ve kullanıcıların oturum bilgileri anlık olarak güncellenir.

- Modern ve Şık Arayüz: HTML, CSS ve JavaScript ile geliştirilen kullanıcı dostu arayüz, her yaştan kullanıcı için anlaşılabilir ve basit bir deneyim sunar.

- Ücretsiz ve Güvenli: Firebase'in sunduğu güvenlik altyapısı sayesinde, kimlik doğrulama işlemleri güvenli bir şekilde gerçekleştirilir. Ayrıca, tüm bu işlemler ücretsiz olarak kullanılabilir.

- Kolay Entegrasyon: Firebase Authentication, Google, Facebook gibi üçüncü taraf servislerle entegre edilebilir. Bu sayede kullanıcılar, farklı kimlik doğrulama yöntemlerini tercih edebilirler.

- Veri Yedekleme ve Erişim Kolaylığı: Firebase'in sunduğu bulut altyapısı sayesinde kullanıcı verileri güvenli bir şekilde saklanır ve her yerden erişilebilir.
## Kullanılan Teknolojiler

Firebase Auth :	Kimlik doğrulama servisi (Email/Password)
HTML/CSS/JS	: Arayüz ve istemci tarafı işlemleri için kullanılan temel teknolojiler
Firebase CDN	: Firebase SDK'larının uygulamaya dahil edilmesi için kullanılan CDN

## Proje Yapısı

firebase-login-proje/
├── index.html        # Ana arayüz dosyası
├── style.css         # Görsel stil dosyası
├── app.js            # Firebase Auth işlemleri
├── README.md         # Proje açıklamaları ve kullanım bilgileri


## Kurulum ve Çalıştırma
1. Firebase Console üzerinden bir proje oluşturun.

2. Authentication → Sign-in method → Email/Password yöntemini etkinleştirin.

3. Firebase Console'dan bir Web App (</>) tanımlayın ve firebaseConfig bilgilerini alın.

4. Aşağıdaki dosyada firebaseConfig bilgilerinizi güncelleyin:



const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};


5. Proje klasörünü açın ve index.html dosyasını bir tarayıcıda çalıştırın.

## Test Senaryoları
- Geçerli e-posta ile kayıt olabiliyor musunuz?

-- Kullanıcı, geçerli bir e-posta adresi ve şifre ile başarılı bir şekilde kayıt olabilir.

- Hatalı parola ile giriş yapılamıyor mu?

-- Hatalı şifre girildiğinde kullanıcıya hata mesajı gösterilir ve giriş işlemi başarısız olur.

- Giriş yapıldıktan sonra çıkış başarılı bir şekilde yapılıyor mu?

-- Kullanıcı giriş yaptıktan sonra, çıkış işlemi başarıyla gerçekleştirilir ve oturum sonlanır.

- Firebase Console → Authentication → Users altında kullanıcı gözüküyor mu?

-- Başarılı bir kayıt işlemi sonrasında, kullanıcı Firebase Console'da görünür.


## Sonuç
Bu basit web uygulaması, Firebase Authentication kullanarak temel bir kullanıcı yönetimi uygulaması geliştirme konusunda size yardımcı olur. Kayıt, giriş ve çıkış işlemleri gerçek zamanlı olarak çalışır ve Firebase'in sunduğu güvenlik özellikleri sayesinde kullanıcı verilerini güvenli bir şekilde yönetir.
