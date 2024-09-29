
var calculateAge = document.getElementsByClassName('button')
calculateAge.onClick = function(){
    var input = document.getElementsByClassName('input').value
    var now = new Date()
    var ageInMili = now - input
    console.log(ageInMili)
}