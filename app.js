/*
    ! tarayıcıların depolama alanları
    localStorage ve sessionStorage, tarayıcının sunduğu iki farklı web depolama alanı.
*/

// localStorage'a veri ekleme.
localStorage.setItem("chat", "as");
// localStorage'dan veri çekme.
const chat = localStorage.getItem("chat");
console.log(chat);