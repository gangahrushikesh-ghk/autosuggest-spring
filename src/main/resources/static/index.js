document.addEventListener('DOMContentLoaded', function() {
    var audio = document.createElement('audio');
    audio.id = 'bg-music';
    audio.loop = true;
    
    var source = document.createElement('source');
    source.src = 'khaleja_bgm.mp3';
    source.type = 'audio/mp3';
    
    audio.appendChild(source);
    document.body.appendChild(audio);

    document.addEventListener('click', function() {
        audio.play();
    }, { once: true });
});

var users = [
    {
        "name" : "prabhas",
        "gender" : "Male",
        "img" : "john.png"
    },
    {
        "name" : "Anushka",
        "gender" : "Female",
        "img" : "jane.png"
    }
]

var id = 0;

function toggleUser(){
    id = (id + 1)%2
    // get the elements

    // 1: image
    var userImage = document.getElementById("user-image");
    userImage.src = users[id].img;

    // 2: name
    var userName = document.getElementById("user-name");
    userName.innerHTML = users[id].name;

    // 3: gender
    var userGender = document.getElementById("user-gender");
    userGender.innerHTML = users[id].gender;

}

function randomUser(){
    fetch('https://randomuser.me/api/')
        .then(function(response){
            // convert raw text to json
            return response.json();
        })
        // dom mannipulation with API data
        .then(function(data){

            var userData = data.results[0];

            // 1: image
            var userImage = document.getElementById("user-image");
            userImage.src = userData.picture.large;

            // 2: name
            var userName = document.getElementById("user-name");
            userName.innerHTML = userData.name.first + " " +
                                    userData.name.last;

            // 3: gender
            var userGender = document.getElementById("user-gender");
            userGender.innerHTML = userData.gender;
        })
        // handle error
        .catch(function(err){
            console.log(err);
        })
}