function getInputValue_l(){
    var inputpassword = document.getElementById("confirm_password").value;
    var register_button = document.getElementById("register_button_left");
    
    if(inputpassword.length > 6){
      register_button.style.display = "block";
    }
    else{
      register_button.style.display = "none";
    }
}

function getInputValue_r(){
    var inputpassword = document.getElementById("confirm_password_s").value;
    var register_button = document.getElementById("register_button_right");
    
    if(inputpassword.length > 6){
      register_button.style.display = "block";
    }
    else{
      register_button.style.display = "none";
    }
}
// Dark theme ------
/*
var dark_button;
var light_button;

document.body.style.backgroundColor = "#93A9E4";

    function Change_dark_background(){
        dark_button = document.getElementById("dark_button").value;
        console.log(dark_button);
        document.body.style.backgroundColor = "#1A2036";
        document.getElementById("registration_header_left").style.color = "whitesmoke";
        document.getElementById("registration_header_right").style.color = "whitesmoke";
        document.getElementById("left_registr_panel").style.backgroundColor = "#5A5E63";
        document.getElementById("left_registr_panel").style.color = "whitesmoke";
        document.getElementById("right_registr_panel").style.backgroundColor = "#1A1863";
        document.getElementById("right_registr_panel").style.color = "whitesmoke";
        document.getElementById("fname").style.backgroundColor = "#5A5E63";
    }
    function Change_light_background(){
        light_button = document.getElementById("light_button").value;
        console.log(light_button);
        document.body.style.backgroundColor = "#93A9E4";
        document.getElementById("registration_header_left").style.color = "#4A34D4";
        document.getElementById("registration_header_right").style.color = "whitesmoke";
        document.getElementById("left_registr_panel").style.backgroundColor = "whitesmoke";
        document.getElementById("left_registr_panel").style.color = "#4A34D4";
        document.getElementById("right_registr_panel").style.backgroundColor = "#4A34D4";
        document.getElementById("right_registr_panel").style.color = "whitesmoke";
        
    }
    */