const update = () => {
    const objectOne = document.getElementById('targetObject1');
    const objectTwo = document.getElementById('targetObject2');
    const inputValue = document.getElementById('inputValue').value;
    const selection = document.getElementById('selection').value;

    if (selection == 'background') {
        objectOne.style.backgroundColor = inputValue;
    } else if (selection == 'color') {
        objectTwo.style.color = inputValue;
    } else if (selection == 'size') {
        objectTwo.style.fontSize = inputValue + 'px';
    } else if (selection == 'family') {
        objectTwo.style.fontFamily = inputValue;
    } else if (selection == 'width') {
        objectOne.style.width = inputValue + 'px';
    } else if (selection == 'height') {
        objectOne.style.height = inputValue + 'px';
    } else {
        alert('Value Tidak Tersedia');
    }
}