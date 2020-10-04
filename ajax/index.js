$(document).ready(function(){
    //alert("DOM loaded");
    $("#button_1").click(function(){
        console.log("begin make ajax api");
        $.ajax("https://5f78a3fe66d4960016c49e32.mockapi.io/api/v1/user", {
            statusCode: {
                200: function(){
                    console.log("status code is 200");
                },
                404: function(){
                    console.log("status code is 404");
                },
            },
            type: "GET",
            success: function(data){
                console.log(data);
            },
            error: function(){
                console.log('error occurred');
            },
        })
    });
});