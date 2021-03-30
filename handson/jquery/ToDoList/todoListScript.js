$(document).ready(function() {
    $("button").click(function() {
        // If something is written
        if ($('#text').val().length != 0) {
            //Store previous data
            var x = $("#container").html();

            // Add typed text in alert container
            var y = 
 `<div class="alert alert-success alert-dismissible fade in">
<a href="#" class="close" data-dismiss="alert" aria-label="close"></a>
          ` + $('#text').val() + `</div>`;
            $("#container").html(y + x);
            $('#text').val("");
        } else alert("Enter task details!!");
    });
});