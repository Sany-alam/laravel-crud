// $(function() {
//   name = $("#name").val();
//   $("#signup").click(function() {
//     if ($("#name").val().length === 0) {
//       $("#name").addClass("is-invalid");
//       $(".name.invalid-feedback").html("Required field");
//       alert("invalid");
//     }
//     else if($("#name").val().length > 0){
//       $("#name").removeClass("is-invalid");
//       $("#name").addClass("is-valid");
//       $(".name.valid-feedback").html("Good");
//       alert("valid");
//     }
//   });
// });

$(function(){

  // varriables for return true or false from success function
  var valid_name = false;
  var valid_email = false;

//Name
  $("#name").focusout(function(){
    fullname();
  });

  function fullname()
  {
    if($("#name").val().length == 0)
    {
      $("#name").removeClass("is-valid");
      $("#name").addClass("is-invalid");
      $(".name.invalid-feedback").html("Required field");
      return true;
    }
    else
    {
      $("#name").removeClass("is-invalid");
      $("#name").addClass("is-valid");
      $(".name.valid-feedback").html("Good");
      return false;
    }
  }


//Email
  $("#email").focusout(function(){
    useremail();
  });

  function useremail()
  {
    if ($("#email").val().length == 0) {
      $("#email").removeClass("is-valid");
      $("#email").addClass("is-invalid");
      $(".email.invalid-feedback").html("Required field");
      return true;
    }
    else
    {
      var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
      if(!pattern.test($("#email").val()))
      {
        $("#email").removeClass("is-valid");
      $("#email").addClass("is-invalid");
      $(".email.invalid-feedback").html("Invalid email type");
      return true;
      }
      else
      {
        $("#email").removeClass("is-invalid");
        $("#email").addClass("is-valid");
        $(".email.valid-feedback").html("Good");
        return false;
        // **** valid email *****
        // var email = $("#email").val();
        // var valid = false;
        // var formdata = new FormData();
        // formdata.append("email",email);
        // formdata.append("email_check",'email_check');
        // $.ajax({
        //   processData:false,
        //   contentType:false,
        //   data:formdata,
        //   type:"post",
        //   url:"l&s.php",
        //   success:function(data)
        //   {
        //     var msg = $.trim(data);
        //     if (msg == "found email")
        //     {
        //       valid_email = true;
        //       $("#email_alert").html("Email already exiest, Email must be unique!");
        //       $("#email_alert").show();
        //     }
        //     else if(msg == "Found no email")
        //     {
        //       $("#email_alert").hide();
        //       valid_email = false;
        //     }
        //   }
        // });
        // return valid_email;
      }
    }
  }




//password
$("#password").focusout(function(){
  userpass();
});
function userpass()
{
  if($("#password").val().length == 0)
    {
      $("#password").removeClass("is-valid");
      $("#password").addClass("is-invalid");
      $(".password.invalid-feedback").html("Required field");
      return true;
    }
   else
   {
     if( $("#password").val().length<8)
     {
        $("#password").removeClass("is-valid");
        $("#password").addClass("is-invalid");
        $(".password.invalid-feedback").html("Minimum 8 character");
        return true;
     }
     else
     {
       var password_reg_ex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
       if(!password_reg_ex.test($("#password").val()))
       {
          $("#password").removeClass("is-valid");
          $("#password").addClass("is-invalid");
          $(".password.invalid-feedback").html("password should contain One Uppercase, One lowercase,one number, one special character");
          return true;
       }
       else
       {
        $("#password").removeClass("is-invalid");
        $("#password").addClass("is-valid");
        $(".password.valid-feedback").html("Good");
        return false;
       }
     }
   }
 }



// Retype password
$("#rpassword").focusout(function(){
  userrpass();
});
function userrpass()
{
  if ($("#rpassword").val().length !== 0)
  {
    if ($("#rpassword").val() == $("#password").val())
    {
        $("#rpassword").removeClass("is-invalid");
        $("#rpassword").addClass("is-valid");
        $(".rpassword.valid-feedback").html("Good");
        return false;
    }
    else
    {
      $("#rpassword").removeClass("is-valid");
      $("#rpassword").addClass("is-invalid");
      $(".rpassword.invalid-feedback").html("Password not matched");
      return true;
    }
  }
  else
  {
    $("#rpassword").removeClass("is-valid");
    $("#rpassword").addClass("is-invalid");
    $(".rpassword.invalid-feedback").html("Confirm password requierd");
    return true;
  }
}




$("#contact").focusout(function(){
  userphn();
});

function userphn() 
{
  if ($("#contact").val().length == 0) 
  {
    $("#contact").removeClass("is-valid");
    $("#contact").addClass("is-invalid");
    $(".contact.invalid-feedback").html("Contact number is required");
    return true;
  }
  else
  {
    $("#contact").removeClass("is-invalid");
    $("#contact").addClass("is-valid");
    $(".contact.valid-feedback").html("Good");
    return false;
  }
}



$("#signup").click(function(){
  if (fullname() == false && useremail() == false && userphn() == false && userpass() == false  && userrpass() == false) {

var name = $("#name").val();
var email = $("#email").val();
var password= $("#password").val();
var phone = $("#contact").val();

// alert(name+" "+email+" "+password+"  "+phone);

  var formdata = new FormData();
  formdata.append('name',name);
  formdata.append('email',email);
  formdata.append('phone',phone);
  formdata.append('password',password);
  // formdata.append('_token','{{ csrf_token() }}');
  $.ajax({
    processData:false,
    contentType:false,
    data:formdata,
    type:"POST",
    url:"signupsubmit",
    success:function(data)
    {
      location.href="/";
    }
  });

  }
  else{
    
    if (fullname() == true)
    {
      fullname();
    }

    if (useremail() == true)
    {
      useremail();
    }

    if (userphn() == true)
    {
      userphn();
    }

    if (userpass() == true)
    {
      userpass();
    }


    if (userrpass() == true)
    {
      userrpass();
    }
  }
});


});

// $.ajaxSetup({ 
//   headers: { 
//     'csrftoken' : '{{ csrf_token() }}' 
//   } 
// });