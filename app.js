$(document).ready(function(){
    $(".search").click(function() {
        const httpRequest = new XMLHttpRequest();
        let url = "http://localhost/info2180-lab4/superheroes.php";
        httpRequest.onreadystatechange = alertHeroes;
        httpRequest.open('GET', url);
        httpRequest.send();

        function alertHeroes() {
            if (httpRequest.readyState === XMLHttpRequest.DONE) {
             if (httpRequest.status === 200) {
             let response = httpRequest.responseText;
             alert(response);
             } else {
             alert('There was a problem with the request.');
             }
            }
        }
    }); 

    
});


