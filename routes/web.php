<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('login','UserController@login');
Route::get('Signup','UserController@signup');

Route::get('/','PostController@index');
Route::post('addpost','PostController@create');
Route::post('showpost','PostController@show');
Route::post('deletepost','PostController@destroy');
Route::post('editpost','PostController@edit');
Route::post('updatepost','PostController@update');
