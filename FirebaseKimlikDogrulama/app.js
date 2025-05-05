const email = document.getElementById("email");
const password = document.getElementById("password");
const message = document.getElementById("message");

document.getElementById("signup").addEventListener("click", () => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((user) => {
      message.textContent = "Kayıt başarılı!";
    })
    .catch((err) => {
      message.textContent = "Hata: " + err.message;
    });
});

document.getElementById("login").addEventListener("click", () => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((user) => {
      message.textContent = "Giriş başarılı!";
      document.getElementById("logout").style.display = "inline";
    })
    .catch((err) => {
      message.textContent = "Hata: " + err.message;
    });
});

document.getElementById("logout").addEventListener("click", () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      message.textContent = "Çıkış yapıldı.";
      document.getElementById("logout").style.display = "none";
    });
});
