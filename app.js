$(document).ready(function(){
    $(".search").click(function() {
        event.preventDefault();

        const query = $("#name").val();


        $.ajax({url: "http://localhost/info2180-lab4/superheroes.php", type:"POST", data: {query:query}})
        .done(function(result) {
            $('#result').html(result);
        }).fail(function() {
            alert("There seems to be an error.");
        });
    }); 

    
});


