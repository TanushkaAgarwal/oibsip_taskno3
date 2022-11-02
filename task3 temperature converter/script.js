const calculatetemp =() =>{
    const numberTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    const celToFah = (cel) => {
        let fahrenheit=Math.round((cel* 9/5)+32);
        return fahrenheit;
    }
    const fahToCel = (fahr) => {
        let celcius=Math.round((fahr-32)+ 5/9);
        return celcius;
    }
    let result;
    if(valueTemp == 'cel'){
        result=celToFah(numberTemp);
        document.getElementById('resultContainer').value=result +'℉' ;
    }
    else{
        result=fahToCel(numberTemp);
        document.getElementById('resultContainer').value=result + '°C';
    }
}