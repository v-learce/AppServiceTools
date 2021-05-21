var view_dpdASS = false;
var view_dpdASE = false;
var view_dpdSRP = false;
var view_dpdONE = false;



function dropdownShow(dpdName){
    
    if (dpdName === "AS"){
        
        if(view_dpdASS === false){
            document.getElementById("DropdownAS").classList.toggle("show");
            view_dpdASS = true;
        }else{
            document.getElementById("DropdownAS").classList.toggle("show");
            view_dpdASS = false;
        }// end dpdSRP
        
        if(view_dpdASE === true){
            document.getElementById("DropdownASE").classList.toggle("show");
            view_dpdASE = false;
        }// end dpdASE
        if(view_dpdSRP === true){
            document.getElementById("DropdownScprits").classList.toggle("show");
            view_dpdSRP = false;
        }// end dpdSRP
        if(view_dpdONE === true){
            document.getElementById("DropdownOneNote").classList.toggle("show");
            view_dpdONE = false;
        }// end dpdONE
    }// end if AS
    if (dpdName === "ASE"){

        if(view_dpdASE === false){
            document.getElementById("DropdownASE").classList.toggle("show");
            view_dpdASE = true;
        }else{
            document.getElementById("DropdownASE").classList.toggle("show");
            view_dpdASE = false;
        }// end dpdSRP
        
        if(view_dpdASS === true){
            document.getElementById("DropdownAS").classList.toggle("show");
            view_dpdASS = false;
        }// end dpdASE
        if(view_dpdSRP === true){
            document.getElementById("DropdownScprits").classList.toggle("show");
            view_dpdSRP = false;
        }// end dpdSRP
        if(view_dpdONE === true){
            document.getElementById("DropdownOneNote").classList.toggle("show");
            view_dpdONE = false;
        }// end dpdONE
    }// end if ASE
    
    if (dpdName === "Scripts"){
        
        if(view_dpdSRP === false){
            document.getElementById("DropdownScprits").classList.toggle("show");
            view_dpdSRP = true;
        }else{
            document.getElementById("DropdownScprits").classList.toggle("show");
            view_dpdSRP = false;
        }// end dpdSRP
        
        if(view_dpdASS === true){
            document.getElementById("DropdownAS").classList.toggle("show");
            view_dpdASS = false;
        }// end dpdASE
        if(view_dpdASE === true){
            document.getElementById("DropdownASE").classList.toggle("show");
            view_dpdASE = false;
        }// end dpdASE
        if(view_dpdONE === true){
            document.getElementById("DropdownOneNote").classList.toggle("show");
            view_dpdONE = false;
        }// end dpdONE
    }// end if Scripts
    
    if (dpdName === "OneNote"){
        
        if(view_dpdONE === false){
            document.getElementById("DropdownOneNote").classList.toggle("show");
            view_dpdONE = true;
        }else{
            document.getElementById("DropdownOneNote").classList.toggle("show");
            view_dpdONE = false;
        }// end dpdSRP
        
        if(view_dpdASS === true){
            document.getElementById("DropdownAS").classList.toggle("show");
            view_dpdASS = false;
        }// end dpdASE
        if(view_dpdASE === true){
            document.getElementById("DropdownASE").classList.toggle("show");
            view_dpdASE = false;
        }// end dpdASE
        if(view_dpdSRP === true){
            document.getElementById("DropdownScprits").classList.toggle("show");
            view_dpdSRP = false;
        }// end dpdSRP
    }// end if OneNote
}//end dropdownShow
	
function filterSearch(dpdName){
    var input, filter, ul, li, a, i;
    if (dpdName === "AS"){
        input = document.getElementById("InputAS");
        div = document.getElementById("DropdownAS");
    }//filter in App Service
    if (dpdName === "ASE"){
        input = document.getElementById("InputASE");
        div = document.getElementById("DropdownASE");
    }//filter in App Service Enviroment
    if (dpdName === "Scripts"){
        input = document.getElementById("InputScprits");
        div = document.getElementById("DropdownScprits");
    }//filter in Scripts
    if (dpdName === "OneNote"){
        input = document.getElementById("InputOneNote");
        div = document.getElementById("DropdownOneNote");
    }//filter in Scripts
    filter = input.value.toUpperCase();
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
            txtValue = a[i].textContent || a[i].innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    a[i].style.display = "";
            } else {
            a[i].style.display = "none";
            }//end if/else
    }// end for
}// end filterSearch

function scriptsVisibility(scriptName){
    if(scriptName === "CallScript"){
        dropdownShow('Scripts');        
        document.getElementById("includeCall").hidden = false;
    }//end if CallScript
    if(scriptName === "SignatureScript"){
        dropdownShow('Scripts');        
        document.getElementById("includeSignature").hidden = false;
    }//end if CallScript    
    if(scriptName === "CloseEmailScript"){
        dropdownShow('Scripts');        
        document.getElementById("includeCloseEmail").hidden = false;
    }//end if CallScript 
    if(scriptName === "Note"){
        dropdownShow('Scripts');        
        document.getElementById("includeNote").hidden = false;
    }//end if CallScript     
}//end scriptsVisibility

function information(){ 
    alert("Develop by Leiner Arce. \n"+
    "Want to make an input or suggest a change? \n"+
    "Send an e-mail to: \n"+
    "leiner.arce@tek-experts.com or v-learce@microsoft.com");
}//end information

function justNumbers(e){
    var keynum = window.event ? window.event.keyCode : e.which;
    if ((keynum === 8) || (keynum === 46))
    return true;
    return /\d/.test(String.fromCharCode(keynum));
}//end justNumbers

function justLetters(e){
   key = e.keyCode || e.which;
   tecla = String.fromCharCode(key).toLowerCase();
   letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
   especiales = "8-37-39-46";
   tecla_especial = false;
   for(var i in especiales){
        if(key === especiales[i]){
            tecla_especial = true;
            break;
        }// end if
    }/// end for
    if(letras.indexOf(tecla)===-1 && !tecla_especial){
        return false;
    }// end if
}//end justLetters

function managerSelect(manager_name){ 
    if (manager_name === "Paula"){
        document.getElementById("Paula").checked = true;
        document.getElementById("Ronny").checked = false;
        document.getElementById("Juan").checked = false;
        document.getElementById("PaulaCE").checked = true;
        document.getElementById("RonnyCE").checked = false;
        document.getElementById("JuanCE").checked = false;
    }// end if 
    if (manager_name === "Juan"){
        document.getElementById("Paula").checked = false;
        document.getElementById("Ronny").checked = false;
        document.getElementById("Juan").checked = true;
        document.getElementById("PaulaCE").checked = false;
        document.getElementById("RonnyCE").checked = false;
        document.getElementById("JuanCE").checked = true;
    }// end if 
    if (manager_name === "Ronny"){
        document.getElementById("Paula").checked = false;
        document.getElementById("Ronny").checked = true;
        document.getElementById("Juan").checked = false;
        document.getElementById("PaulaCE").checked = false;
        document.getElementById("RonnyCE").checked = true;
        document.getElementById("JuanCE").checked = false;
    }// end if     
}//end managerSelect

function workHours(){
    var entry = document.getElementById("time_entry").value;
    var out = parseFloat($("#time_entry").val()) + 9 - 12;
    if (entry <8 | entry > 11 ){
        alert("Not working hours");
        entry = 8;
        out = 5;
        document.getElementById("time_entry").value = entry;
    }// if nor working hours
    if (entry < 10){
        document.getElementById("work_hour").innerHTML = "0"+entry+":00 AM – 0"+out+":00 PM";
    }//if mayor
    else{
        document.getElementById("work_hour").innerHTML = entry+":00 AM – 0"+out+":00 PM";
    }
}// end workHours

function managerMail(){
    if (document.getElementById("Paula").checked === true){    
        document.getElementById("manager_mail").href = "mailto:v-paara@microsoft.com";
        document.getElementById("manager_mail").innerHTML = document.getElementById("Paula").value;//<a href="mailto:v-paara@microsoft.com">v-paara@microsoft.com</a>;
    }if (document.getElementById("Ronny").checked === true){
        document.getElementById("manager_mail").href = "mailto:v-ronc@microsoft.com";
        document.getElementById("manager_mail").innerHTML = document.getElementById("Ronny").value;//<a href="mailto:v-ronc@microsoft.com">v-ronc@microsoft.com</a>;
    }if (document.getElementById("Juan").checked === true){
        document.getElementById("manager_mail").href = "mailto:v-juasol@microsoft.com";
        document.getElementById("manager_mail").innerHTML = document.getElementById("Juan").value;//<a href="mailto:v-ronc@microsoft.com">v-ronc@microsoft.com</a>;
    }
}//end managerMail