function openNav() {
    document.getElementById("myNav").style.display = "block";
}

function closeNav() {
    document.getElementById("myNav").style.display = "none";
}

// details data 
var xobj = new XMLHttpRequest();
xobj.open('GET', 'https://my-json-server.typicode.com/127pooniapoonia/Dummy/details', "");
xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
        jsonresponse = JSON.parse(this.responseText);
        document.getElementById('people').innerHTML = jsonresponse.people;
        document.getElementById('office').innerHTML = jsonresponse.offices;
        document.getElementById('bussiness').innerHTML = jsonresponse.bussiness_online + "k";
    }
}
xobj.send();

// questions asked

function loadJSON(callback) {
    var xobj = new XMLHttpRequest();
    // xobj.overrideMimeType("application/jsonp");
    xobj.open('GET', 'https://my-json-server.typicode.com/127pooniapoonia/Dummy/questions', "");
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            // .open will NOT return a value but simply returns undefined in async mode so use a callback
            callback(xobj.responseText);

        } else {
            document.getElementById("frequent").innerHTML =
                "Oops...it seems that we are not able to connect our Service. Please try again later or  you can write us at support@nowfloat.com";
        }
    }
    xobj.send();

}

// Call to function with anonymous callback
loadJSON(function (response) {
    // Do Something with the response e.g.
    jsonresponse = JSON.parse(response);
    // Assuming json data is wrapped in square brackets as Drew suggests
    console.log(jsonresponse[0].a);
    jsonresponse.forEach(element => {
        var el = document.getElementById("frequent");
        var division = document.createElement("div");
        var quest = document.createElement("h4");
        var ans = document.createElement("p");
        quest.innerHTML = element.q;
        ans.innerHTML = element.a;
        quest.classList.add("subheading");
        division.classList.add("col-sm-6");
        division.append(quest, ans);
        el.appendChild(division);
    });

});