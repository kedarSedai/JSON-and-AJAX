var btn = document.getElementById('btn');
var info = document.getElementById('info');

btn.addEventListener('click', function(){
    ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','JSON/Data.js');
    ourRequest.onload = function(){
        // console.log(ourRequest.responseText);
        if(ourRequest.status >= 200 && ourRequest.status < 400){
            var ourData = JSON.parse(ourRequest.responseText);
            // console.log(ourData[1])
            renderHTML(ourData)
        }else{
            console.log('Error occured')
        } 
    }
    ourRequest.send();
});

function renderHTML(data) {
    var htmlString = '';

    for(i = 0; i < data.length; i++) {
        htmlString += " <p> " + data[i].name + " is a " + data[i].species + "and that like to eat " + data[i].foods.likes[0] +  " </p>"
    }
    info.insertAdjacentHTML('beforeend', htmlString)
}
