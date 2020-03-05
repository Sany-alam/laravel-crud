<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{ asset('assets')}}/css/app.min.css"rel="stylesheet">
    <script src="{{asset('assets')}}/js/vendors.min.js"></script>
    <script src="{{asset('assets')}}/js/app.min.js"></script>
    <title>Document</title>
</head>
<body>
<nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <div class="container">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
        <li class="nav-item">
            <a class="nav-link" href="{{ url('/') }}"><i class="fa fa-home"></i> Home </a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="{{ url('inbox') }}"><i class="fa fa-inbox"></i> inbox</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#"><i class="fa fa-users"></i> Friends</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dashboard
            </a>
            
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
            </div>
        </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
    </div>
  </div>
</nav>
    @yield('blog')
    @yield('inbox')
</body>
</html>