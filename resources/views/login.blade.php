<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{ asset('assets')}}/css/app.min.css"rel="stylesheet">
    <script src="{{asset('assets')}}/js/vendors.min.js"></script>
    <script src="{{asset('assets')}}/js/app.min.js"></script>
    <title>Document</title>
</head>
<body>
    <div class="mx-auto mt-5" style="width:300px">
    <h3>Login</h3>
        <form>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <div class="form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button id="login" type="button" class="btn btn-primary">Submit</button>
        </form>
    </div>
</body>
<script>
        $("#login").click(function() {
            var formData= new FormData();
            formData.append('email',$("#email").val());
            formData.append('password',$("#password").val());
            formdata.append('_token','{{ csrf_token() }}');
            $.ajax({
                processData: false,
                contentType: false,
                url:"loging",
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
</script>
    <script src="{{asset('assets')}}/js/custom.js"></script>
</html>