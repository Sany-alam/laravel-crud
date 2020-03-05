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
    <h3>Sign up</h3>
        <form>
            <div class="form-group">
                <label for="name">User name</label>
                <input type="text" class="form-control" id="name" placeholder="Enter Your name">
            </div>
            <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
                <label for="contact">Contact</label>
                <input type="number" class="form-control" id="contact" placeholder="Contact">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <div class="form-group">
                <label for="password">Retype Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <div class="form-check">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button id="signup" type="button" class="btn btn-primary">Submit</button>
        </form>
    </div>
</body>
    <script src="{{asset('assets\js\validator\SignupValidation.js')}}"></script>
</html>