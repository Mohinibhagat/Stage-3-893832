function add_two_number()
{
   $("#display_message").show();
   if($("#txt1").val()=="" || $("#txt2").val()=="")
   {
      $("#display_message").html("<font color='red'>Pls.Enter the Values</font>");
   }
   else
  {
    var answer=parseInt($("#txt1").val()) + parseInt($("#txt2").val())
    $("#display_message").html("<font color='green'><b>"+answer+"</b></font>");
 $("#txt3").val(answer);
 
   }
}