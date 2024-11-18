$(document).ready(function(){
    $(".search").click(function() {
        $.ajax("http://localhost/info2180-lab4/superheroes.php")
        .done(function(result) {
        alert(result);
        }).fail(function(result) {
        alert("There seems to be an error.");
        });
    }); 

    
});


