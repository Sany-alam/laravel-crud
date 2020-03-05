<?php

namespace App\Http\Controllers;

use App\post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('blog');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $req)
    {
        $query = post::create([
            'title'=>$req->title,
            'content'=>$req->content
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\post  $post
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
        $query = post::orderBy('id','desc')->get();
        $data = "";
            for ($i=0; $i < sizeof($query); $i++) {
                $data .='<div class="card my-0 mx-auto p-4" style="width:500px;">
                            <div class="row my-2">
                                <div class="col-6 text-left">
                                    <h3>'.$query[$i]->title.'</h3>
                                </div>
                                <div class="col-6 text-right">
                                    <a onclick="delete_post('.$query[$i]->id.')" href="javascript:void(0)"><i class="fa fa-trash"></i></a>
                                    <a onclick="edit_post('.$query[$i]->id.')" href="javascript:void(0)"><i class="fa fa-edit"></i></a>
                                </div>
                            </div>
                            <div class="img mx-auto">
                                <img class="img-fluid" src="" alt="">
                            </div>
                            <p class="text-justify">
                                '.$query[$i]->content.'
                            </p>
                        </div>';
            }
            echo $data;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\post  $post
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $req)
    {
        $id = $req->post_id;
        $query = post::find($id);
        echo json_encode($query);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\post  $post
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, post $post)
    {
        $query = post::where('id',$request->post_id)->update(['title'=>$request->title,'content'=>$request->content]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\post  $post
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $req)
    {
        $id = $req->post_id;
        $query = post::where('id',$id)->delete();
    }
}
