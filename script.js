function SendMail(){
    var params = {
        name: document.getElementById("ime").value,
        prezime: document.getElementById("prezime").value,
        company: document.getElementById("company").value,
        email : document.getElementById ("email").value,
        message: document.getElementById ("message").value

    }
    emailjs.send("service_4qfy0dj","template_utr8kft",params).then(function (res){
        alert("Succes! " + res.status);
    })
}