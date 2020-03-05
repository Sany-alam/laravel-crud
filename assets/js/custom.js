// login page start

$("#signin").click(function() {
    var formData= new FormData();
    formData.append('userName',$("#userName").val());
    formData.append('password',$("#password").val());
    formData.append('signin',"signin");
    $.ajax({
        processData: false,
        contentType: false,
        url:"data.php",
        type:'POST',
        data: formData,
        success:function(data,status){
            a = $.trim(data);
            if (a == "ok") {
                $("#warning_login_credential").hide();
                location.href="index.php";
            }
            else if (a == "not ok") {
                $("#warning_login_credential").show();
            }
        },
    });
});


// login page ends