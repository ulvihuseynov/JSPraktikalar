
// window.addEventListener('load',()=>{
   
//     if (!window.Notification)  return;

//     // console.log(Notification.permission)
//     Notification.requestPermission()
//     .then(sendNotifician)
// })

// const sendNotifician=(permision)=>{
  
//     let notifician=new Notification('Salam',{
//         body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat molestias numquam laborum accusantium reprehenderit eius, quidem cupiditate iusto saepe voluptatum.',
//         // icon:
//     })
//     console.log(notifician)
// }


// Notification API-nin mövcud olub-olmadığını yoxlayırıq
if (!("Notification" in window)) {
    alert("Bu brauzer Notification API-ni dəstəkləmir.");
} else {
    // İstifadəçidən icazə soruşuruq
    Notification.requestPermission().then(permission => {
        if (permission === "granted") {
            // İcazə verildiyi halda, bildirişi göstəririk
            new Notification("Salam!", {
                body: "Bu, yerli host üzərindən gələn bildirişdir.",
                icon: "https://example.com/icon.png" // Optional: İkon əlavə edə bilərsiniz
            });
        } else if (permission === "denied") {
            console.log("İstifadəçi bildirişləri rədd etdi.");
        } else {
            console.log("İcazə gözlənilir.");
        }
    }).catch(error => {
        console.error("Bildiriş icazəsi alınarkən səhv baş verdi: ", error);
    });
}
