function translate(input){
    var vowels = ["a", "e", "i", "o", "u"];
    var resultArray = [];
    var input = document.getElementById('whaleTalk').value;

        for (var i = 0; i < input.length; i++){
            for (var j = 0; j < vowels.length; j++){
                if (input[i] === vowels[j]){ resultArray.push(input[i]);}
            }
        
            if (input[i] === "e" || input[i] === "u"){resultArray.push(input[i]);}
        }
        
        setTimeout(function() {
            var talk = (resultArray.join("").toUpperCase());
            document.getElementById('result').innerHTML = talk;
        }, 500);
                
        document.whaleform.whalebutton.value = "Translating..";
        ID = window.setTimeout("x();", 500);
        
    }

function x(){
//document['whale'].src = whalesrc;
document.whaleform.whalebutton.value = "Translate";
}