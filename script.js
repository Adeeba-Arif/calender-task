
var calculateAge = document.getElementById('btn')
calculateAge.onclick = function(){
    var input = document.getElementById('DOB').value
    if(input === ""){
        alert("Please select date first")
    }else{
      
    var input = document.getElementById('DOB').value
    var DOB = new Date(input)
    var now = new Date()
    var yearsdiff = now.getFullYear() - DOB.getFullYear();
    var monthsdiff = now.getMonth() - DOB.getMonth()
    var daysdiff = now.getDate() - DOB.getDate()
    if (monthsdiff < 0 || (monthsdiff === 0 && daysdiff < 0)) {
        yearsdiff--;
        monthsdiff += (monthsdiff < 0) ? 12 : 0;
    }
    if (daysdiff < 0) {
        monthsdiff--;
        daysdiff += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    var years = document.getElementById('years').textContent = yearsdiff
    var months = document.getElementById('months').textContent = monthsdiff
    var days = document.getElementById('days').textContent = daysdiff
    
    }
}

