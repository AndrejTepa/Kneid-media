function SendMail(){
    var params = {
        name: document.getElementById("ime").value,
        prezime: document.getElementById("prezime").value,
        company: document.getElementById("company").value,
        email : document.getElementById ("email").value,
        message: document.getElementById ("message").value

    }
    if (document.getElementById("ime").value=="" || document.getElementById("prezime").value =="" || document.getElementById ("email").value=="" || document.getElementById ("message").value=="")
        {
            alert("You didnt enter all credentials")
        }
        else{
            emailjs.send("service_4qfy0dj","template_utr8kft",params).then(function (res){
                alert("Email has been sent! ");
            })
            document.getElementById("ime").value = "";
            document.getElementById("prezime").value = "";
            document.getElementById("email").value = "";
            document.getElementById("company").value = "";
            document.getElementById("message").value = "";
            
        }
}