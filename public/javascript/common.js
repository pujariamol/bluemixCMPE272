/**
 * New node file
 */

function ajaxCall(url,method){
	var result = "";
	$.ajax( 
            {
                url : "/"+url,
                type : method,
                async: false,
                success : function (data){
                	result = data;
                }
    });
	return result;
}

function signUp(){
	var url="addUser/"+ $("#firstName").val()+"/"+$("#lastName").val()+"/"+$("#emailId").val()+"/"+$("#pwd").val()
	var content= ajaxCall(url,"post");
	$("#notification").html(content);
}

function signIn(){
	var emailId = $('#emailId').val();
	var pass = $('#password').val()
	if(emailId == "" || pass ==""){
		$("#notification").html("Please enter credentials");
	}else{
		var url="login/"+emailId+"/"+pass;
		var val = ajaxCall(url,"post");
		if(typeof val.url != 'undefined'){
			window.location.href = val.url;
		}else{
			$("#notification").html(val.error);
		}
	}
}

