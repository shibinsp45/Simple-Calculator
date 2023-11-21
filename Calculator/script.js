//displaying data
const displayData=(data)=>{
 result.value+=data
}
//all clear
const clearDisplay=()=>{
    result.value="";
}
//calculating the result using =
const calculateResult = () => {
    if (result.value !== "") {
        try {
            result.value = eval(result.value);
        } catch (error) {
            result.value = "Error..!";
        }
    }
};
//for deleting elements
const deleteLastChar = () => {
    result.value=result.value.slice(0,-1)
}

