window.onload = function(){
    var searchbtn = document.querySelector("searchbtn");
    searchbtn.addEventListener("click", function(e){
        e.preventDefault();

    var httpRequest = new XMLHttpRequest();
    var url = "http://localhost/info2180-lab4/superheroes.php";
    httpRequest.onreadystatechange = superHero;

    function superHero(){
        if (httpRequest.readyState === XMLHttpRequest.DONE){
            if (httpRequest.status === 200){
                var response = httpRequest.responseText;
                var result = document.querySelector("#result");
                result.innerHTML = response;
            }
            else{
                alert("There was an issue");
            }
        }

    }
    httpRequest.open("Get",url);
    httpRequest.send();
    });
    
}
