$(document).ready(function () {
    var CSRFToken = '';
    
        $("#loginform").submit(function (e) {
            $.ajax({
            	url: "lib/api.xsjs",
            	type: "POST",
            	data: {
            	    service: "DoLogin",
            	    email: $('#email').val(),
                	password: $('#password').val()
                },
                success: function(data, textStatus, XMLHttpRequest) {
                    if (data != 0 && data != 999){
                	    $.cookie('userToken', data);
                		window.location = 'index.html';
                	} else {
                	    $('#msg').html('Incorrect Email or Password');
                	}
                }, error: function(XMLHttpRequest, textStatus, errorThrown) { 
                    $('#msg').html('Status: ' + textStatus + " Error: " + errorThrown);
                } 
            });
            return false;
        });
        
        
        $("#createform").submit(function (e) {
            //Check if 2 passwords match/strength
            $.ajax({
                url: "lib/api.xsjs",
                type: "POST",
                data:{
                    service: "CreateUser",
                    email: $('#email').val(),
                    password: $('#password').val(),
                    name: $('#name').val(),
                    lname: $('#lname').val(),
                    company: $('#company').val()
                },
                success: function(data, textStatus, XMLHttpRequest) {
                	if (data == '-1'){
                	    $('#msg').html('Account already exists');
                	} else if (data == '0') {
                	    $('#msg').html('Error creating the account');
                	} else if (data == '1') {
                	    window.location = 'login.html?created=true';
                	}
                }, error: function(XMLHttpRequest, textStatus, errorThrown) { 
                    $('#msg').html('Status: ' + textStatus + " Error: " + errorThrown);
                } 
            });
            return false;
        });
});