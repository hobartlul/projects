$(document).ready(function() {
     $("#create-user").click(function() {
    	 var newUser = ajaxRequest('POST', 'rest/user/', createUserJsonObject());
    	 alert("new user --> user id = " + newUser.id + " username = " + newUser.username + " has been created!");
     });
     
     $("#update-user").click(function() {
    	 var updatedUser = ajaxRequest('PUT', 'rest/user/', createUpdateUserJsonObject());
    	 alert("new user --> user id = " + updatedUser.id + " username = " + updatedUser.username + " has been updated!");
     });
     
     $("#get-users").click(function() {
    	 var data = ajaxRequest('GET', 'rest/user/', null);
    	 for (i = 0; i < data.user.length; i++) {
     		var u = data.user[i];
     		alert(u.username);
     	}
     });
     
     $("#get-user").click(function() {
    	 var u = ajaxRequest('GET', 'rest/user/1', null);
    	 alert(u.username);
     });
     
     $("#delete-user").click(function() {
    	 var u = ajaxRequest('DELETE', 'rest/user/1', null);
    	 alert("user " + u.id + "has been deleted");
     });
});

function createUserJsonObject() {
	var userJsonObj = {};
	userJsonObj.username = $("#username").val();
	return JSON.stringify(userJsonObj);
}

function createUpdateUserJsonObject() {
	var userJsonObj = {};
	userJsonObj.id = $("#username-update-id").val();
	userJsonObj.username = $("#username-update").val();
	return JSON.stringify(userJsonObj);
}


function ajaxRequest(type, requestUrl, requestData) {
    var results = null;

    $.ajax({
        type: type,
        url: getBaseURL() + requestUrl,
        data : requestData,
        dataType : "json",
        cache: false,
        contentType : "application/json; charset=utf-8",
        async : false,
        success: function(data, textStatus, xhr) {
            results = data;
        },
        error : function(jqXHR, textStatus, errorThrown) {
        	//handle error
        	alert("handle errors ..." + errorThrown);
        }
    });
    
    return results;
}

function getBaseURL() {
	return location.protocol + "//" + location.hostname + (location.port && ":" + location.port) + "/";
}