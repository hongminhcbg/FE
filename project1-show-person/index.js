$(document).ready(function(){
    var reloadUser = function(){
        $.ajax("https://5f78a3fe66d4960016c49e32.mockapi.io/api/v1/user", {
            statusCode: {
                200: function(){

                },
                404: function(){
                    console.log("status code is 404");
                },
            },
            type: "GET",
            success: function(data){
                var userName = document.getElementById("user_name");
                var userID = userName.getAttribute("user_id")
                var userIDInt = -1;
                if (userID == null) {
                    console.log("user id = null, set default value");
                    userName.setAttribute("user_id", "0");
                    userIDInt = 0;    
                } else {
                    console.log("user_id = ", userID);
                    userIDInt = (parseInt(userID, 10) + 1) % data.length;
                    userName.setAttribute("user_id", '0' + userIDInt);
                }
                
                userName.textContent = "Name: " + data[userIDInt].name;
                document.getElementById("avatar").src = data[userIDInt].avatar
            },
            error: function(){
                console.log('error occurred');
            },
        })
    }

    $("#reload").click(function(){
        console.log("begin make ajax api");
        reloadUser()
    });

    $("#add_user").click(function(){
        console.log("begin make ajax api add user");
        $.ajax("https://5f78a3fe66d4960016c49e32.mockapi.io/api/v1/user", {
            type: "POST",
            success: function(data){
                reloadUser();
            },
            error: function() {
                alert("something wrong");
            }

        });
    });
    
});