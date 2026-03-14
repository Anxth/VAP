function vote(){
    var name = document.getElementById("name").value;
    var age = document.getElementById("age").value;
    var res = document.getElementById("res");
    // if(age>=18){
    //     alert("Eligeble to vote")
    // }else{
    //     alert("Child Chapathi")
    // }
    
    if(age>=18){
        res.innerHTML = name + " " + "Eligeble to vote"
    }else{
        res.innerHTML = name + " " + "is Child Chapathi"
    }
} 