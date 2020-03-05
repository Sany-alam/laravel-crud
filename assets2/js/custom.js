

// login page start

$("#login-submit").click(function() {
    var formData= new FormData();
    formData.append('email',$("#email").val());
    formData.append('password',$("#password").val());
    formData.append('login_submit',"login_submit");
    $.ajax({
        processData: false,
        contentType: false,
        url:"data.php",
        type:'POST',
        data: formData,
        success:function(data,status){
            message = $.trim(data);
            if (message == "message") {
                location.reload();
            }
            else if(message == "login"){
                location.href="index.php";
            }
        },
    });
});

// login page end


// question page start
$(function() {
    showQuestions();
});

function showQuestions() {
    var formData= new FormData();
    formData.append('showQuestion',"showQuestion");
    $.ajax({
        processData: false,
        contentType: false,
        url:"data.php",
        type:'POST',
        data: formData,
        success:function(data,status){
            // alert("Student Record Added Successfully");
            $("#questions").html(data);
        },
    });
}

function delete_queston(id) {
    var formData= new FormData();
    formData.append('que_id',id);
    formData.append('deleteQuestion',"deleteQuestion");
    $.ajax({
        processData: false,
        contentType: false,
        url:"data.php",
        type:'POST',
        data: formData,
        success:function(data,status){
            showQuestions();
        },
    });
}

function edit_queston(id) {
    var formData= new FormData();
    formData.append('que_id',id);
    formData.append('editQuestion',"editQuestion");
    $.ajax({
        processData: false,
        contentType: false,
        url:"data.php",
        type:'POST',
        data: formData,
        success:function(data,status){
            all = JSON.parse(data);
            qid = all.id;
            chapter_id = all.chapter_id;
            topic_id = all.topic_id;
            question = all.question;
            option_1 = all.option_1;
            option_2 = all.option_2;
            option_3 = all.option_3;
            option_4 = all.option_4;
            correct_answer = all.correct_answer;
            board = all.board;
            summary = all.summary;

            // selects
            $("#edit_chapter").val(chapter_id);
            $("#edit_topic").val(topic_id);
            $("#edit_correctoptionno").val(correct_answer);

            // inputs
            $("#question_hidden_id").val(id);
            $("#edit_question").val(question);
            $("#edit_option1").val(option_1);
            $("#edit_option2").val(option_2);
            $("#edit_option3").val(option_3);
            $("#edit_option4").val(option_4);
            $("#edit_board").val(board);
            $("#edit_summary").val(summary);
            $("#editQuestionModal").modal('show');
        },cache:false
    });
}


$("#update_question").click(function(){
    question_hidden_id = $("#question_hidden_id").val();
    update_chapter = $("#edit_chapter").val();
    update_topic = $("#edit_topic").val();
    update_correctoptionno = $("#edit_correctoptionno").val();
    update_question = $("#edit_question").val();
    update_option1 = $("#edit_option1").val();
    update_option2 = $("#edit_option2").val();
    update_option3 = $("#edit_option3").val();
    update_option4 = $("#edit_option4").val();
    update_board = $("#edit_board").val();
    update_summary = $("#edit_summary").val();
    var formData= new FormData();
    formData.append("question_hidden_id",question_hidden_id);
    formData.append("update_chapter",update_chapter);
    formData.append('update_topic',update_topic);
    formData.append('update_board',update_board);
    formData.append('update_question',update_question);
    formData.append('update_option1',update_option1);
    formData.append('update_option2',update_option2);
    formData.append('update_option3',update_option3);
    formData.append('update_option4',update_option4);
    formData.append('update_correctoptionno',update_correctoptionno);
    formData.append('update_summary',update_summary);
    formData.append('updateQuestion',"updateQuestion");
    $.ajax({
        processData: false,
        contentType: false,
        url:"data.php",
        type:'POST',
        data: formData,
        success:function(data,status){
            alert(data);
            showQuestions();
            $("#editQuestionModal").modal('hide');
        },
        cache:false
    });
});


// question page end


// add question page start

$(function(){
    $('#addMore').on('click', function() {
        var data = $("#tb tr:eq(1)").clone(true).appendTo("#tb");
        data.find("input").val('');
    });
    $(document).on('click', '.remove', function() {
        var trIndex = $(this).closest("tr").index();
        if(trIndex>0) {
            $(this).closest("tr").remove();
        } else {
            alert("Sorry!! Can't remove first row!");
        }
    });
});


$("#addQuestion").click(function(){

var chapter = [];            
$("select[name^=chapter]").each(function(){
    chapter.push($(this).val());
});

var topic = [];            
$("select[name^=topic]").each(function(){
    topic.push($(this).val());
});

var board = [];            
$("input[name^=board]").each(function(){
    board.push($(this).val());
});

var question = [];            
$("input[name^=question]").each(function(){
    question.push($(this).val());
});

var option1 = [];            
$("input[name^=option1]").each(function(){
    option1.push($(this).val());
});

var option2 = [];            
$("input[name^=option2]").each(function(){
    option2.push($(this).val());
});

var option3 = [];            
$("input[name^=option3]").each(function(){
    option3.push($(this).val());
});

var option4 = [];            
$("input[name^=option4]").each(function(){
    option4.push($(this).val());
});

var correctoptionno = [];            
$("select[name^=correctoptionno]").each(function(){
    correctoptionno.push($(this).val());
});

var summary = [];            
$("textarea[name^=summary]").each(function(){
    summary.push($(this).val());
});

// alert(chapter+" "+topic+" "+board+" "+question+" "+option1+" "+option2+" "+option2+" "+option3+" "+option4+" "+correctoptionno);

var formData= new FormData();
formData.append("chapter",chapter);
formData.append('topic',topic);
formData.append('board',board);
formData.append('question',question);
formData.append('option1',option1);
formData.append('option2',option2);
formData.append('option3',option3);
formData.append('option4',option4);
formData.append('correctoptionno',correctoptionno);
formData.append('summary',summary);
formData.append('addQuestion',"addQuestion");
    $.ajax({
    processData: false,
    contentType: false,
    url:"data.php",
    type:'POST',
    data: formData,
    success:function(data,status){
        if (data != "") {
            alert(data);
        }
        showQuestions();
    },
});
});

// add question page end

//  topic page start

$(function() {
    showTopics();
})

function showTopics() {
    formdata = new FormData();
    formdata.append("showTopic","showTopic");
    $.ajax({
        processData:false,
        contentType:false,
        data:formdata,
        type:"post",
        url:"data.php",
        success:function(data) {
            $("#topic-table").html(data);
        },
        cache:false
    });
}

$("#addTopic").click(function() {
        formdata = new FormData();
        formdata.append("chapter_id",$("#chapter_id").val());
        formdata.append("topic_name",$("#topic_name").val());
        formdata.append("topic_no",$("#topic_no").val());
        formdata.append("addTopic","addTopic");
        $.ajax({
            processData:false,
            contentType:false,
            data:formdata,
            type:"post",
            url:"data.php",
            success:function(data) {
                alert(data);
                $("#chapter_id").val("");
                $("#topic_name").val("");
                $("#topic_no").val("");
                showTopics();
            },
            cache:false
        });
});

function delete_topic(id) {
    formdata = new FormData();
        formdata.append("topic_id",id);
        formdata.append("delTopic","delTopic");
        $.ajax({
            processData:false,
            contentType:false,
            data:formdata,
            type:"post",
            url:"data.php",
            success:function(data) {
                showTopics();
            },
            cache:false
        });
}

// topic page end