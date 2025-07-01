function appendToDisplay(input) {
    display.value+=input;
}

function calculate(){
    try{                                           // use for exception handling if code of try 
                                                    //block stops or error occur then flow shift
        display.value=eval(display.value)

    }
    catch(error){
        display.value="error";
    }
}

function clearDisplay(){
    display.value="";
}