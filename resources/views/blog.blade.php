
@extends('app')
@section('blog')
    <div class="container">
        <div class="card mx-auto mt-5 mb-1 p-4" style="width:500px;">
            <h3 class="text-center">Write Post</h3>
            <div class="form-group">
                <input placeholder="Enter a post title" type="text" class="form-control" id="title">
            </div>
            <div class="form-group">
                <textarea placeholder="Your Text Here" id="content" class="form-control"></textarea>
            </div>
            <div class="form-group text-right">
                <button id="write_post" class="btn btn-primary btn-sm">Post</button>
            </div>
        </div>
        <div id="blog-posts"></div>
    </div>

    <!-- modals -->

    <div class="modal fade" id="edit_post_modal">
        <div class="modal-dialog modal-dialog-scrollable">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Edit Post</h5>
                    <button type="button" class="close" data-dismiss="modal">
                        <i class="anticon anticon-close"></i>
                    </button>
                </div>
                <div class="modal-body">
                    <input type="hidden" id="hidden_edit_id">
                    <div class="form-group">
                        <input placeholder="Enter a post title" type="text" class="form-control" id="edit_title">
                    </div>
                    <div class="form-group">
                        <textarea placeholder="Your Text Here" id="edit_content" class="form-control"></textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary" id="update_post">Update</button>
                </div>
            </div>
        </div>
    </div>

    <!-- modals -->
    <script>
$(function(){
    $("a[href='{{ url('/') }}']").parent("li").addClass("active");

    $("#write_post").click(function() {
        if ($("#title").val() == "" || $("#content").val() == "") {
            alert("fillup the empty fields");
        }
        else{
            formdata = new FormData();
            formdata.append('title',$("#title").val());
            formdata.append('content',$("#content").val());
            formdata.append('_token','{{ csrf_token() }}');
            $.ajax({
                processData:false,
                contentType:false,
                type:'post',
                url:'{{ url("addpost") }}',
                data:formdata,
                success:function(data) {
                    showposts();
                }
            });
        }
    });


    $("#update_post").click(function() {
        if ($("#edit_title").val() == "" || $("#edit_content").val() == "") {
            alert("fillup the empty fields");
        }
        else{
            formdata = new FormData();
            formdata.append('post_id',$("#hidden_edit_id").val());
            formdata.append('title',$("#edit_title").val());
            formdata.append('content',$("#edit_content").val());
            formdata.append('_token','{{ csrf_token() }}');
            $.ajax({
                processData:false,
                contentType:false,
                type:'post',
                url:'{{ url("updatepost") }}',
                data:formdata,
                success:function(data) {
                    showposts();
                    $("#edit_post_modal").modal('hide');
                }
            });
        }
    });

    showposts();
});

function showposts() {
    formdata = new FormData();
    formdata.append('_token','{{ csrf_token() }}');
    $.ajax({
        processData:false,
        contentType:false,
        type:'post',
        url:'{{ url("showpost") }}',
        data:formdata,
        success:function(data) {
            $("#blog-posts").html(data);
        }
    });
}


function delete_post(id) {
    formdata = new FormData();
    formdata.append('post_id',id);
    formdata.append('_token','{{ csrf_token() }}');
    $.ajax({
        processData:false,
        contentType:false,
        type:'post',
        url:'{{ url("deletepost") }}',
        data:formdata,
        success:function(data) {
            showposts();
            // alert(data);
        }
    });
}


function edit_post(id) {
    formdata = new FormData();
    formdata.append('post_id',id);
    formdata.append('_token','{{ csrf_token() }}');
    $.ajax({
        processData:false,
        contentType:false,
        type:'post',
        url:'{{ url("editpost") }}',
        data:formdata,
        success:function(data) {
            all = JSON.parse(data);
            // alert();
            $("#hidden_edit_id").val(all.id);
            $("#edit_title").val(all.title);
            $("#edit_content").val(all.content);
            $("#edit_post_modal").modal('show');
        }
    });
}

// $(function(){
    // $.ajaxSetup({
    //     headers: {
    //         'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    //     }
    // });
// });
</script>
@endsection

