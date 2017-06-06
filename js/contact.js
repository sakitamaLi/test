$(function(){
	$("#username").focus();
	$("#submit").click(function(){
		//if($.trim($("#username").val())=="" || $.trim($("#contact").val())=="" || $.trim($("#message").val())=="") {
		//	alert("请输入内容后再发送！");
		//	return;
		//}
		if($.trim($("#username").val())=="") {
			alert("留下您的姓名，我们会及时给您反馈。");
			return;
		}else if($.trim($("#contact").val())=="") {
			alert("留下您的联系方式，我们会及时给您反馈。");
			return;
		}else if($.trim($("#message").val())=="") {
			alert("留言不能为空哦");
			return;
		}

//		$("#sendMSG").html("<img src=\"images/loading.gif\" width=\"12px\" height=\"12px\" />邮件发送中......");
		$("#submit").attr("disabled", true);
		$("#username, #contact, #message").attr("readonly", true);
		$.ajax({
            type : 'post', 
            url : 'sendMail.php', 
            data : {"username" : $("#username").val(), "contact" : $("#contact").val(), "message" : $("#message").val()}, 
            dataType : "html",
			beforeSend : function(){
				$("#sendMSG").html("<img src=\"images/loading.gif\" width=\"12px\" height=\"12px\" />邮件发送中......");
			},
            success : function(data){
				if(data == "success") {
					$("#sendMSG").html("您的邮件发送成功，我们会尽快答复您。");
				} else {
					$("#sendMSG").html("您的邮件发送失败，请重新发送。");
					$("#submit").attr("disabled", false);
					$("#username, #contact, #message").attr("readonly", false);
				}
            },
            error : function(){
                $("#sendMSG").html("您的邮件发送失败，请重新发送。");
				$("#submit").attr("disabled", false);
				$("#username, #contact, #message").attr("readonly", false);
            }   
        });
	});
});