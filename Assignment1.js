function Tableprint() {
    // Get the value and parse it to an integer
    let a = parseInt(document.getElementById("TB1").value);
    
    // Clear previous output
    document.getElementById("Para").innerHTML = "";

    // Generate and print multiplication table
    for (let i = 1; i <= 10; i++) {
        document.getElementById("Para").innerHTML += `${a} x ${i} = ${a * i}<br>`;
    }
}
