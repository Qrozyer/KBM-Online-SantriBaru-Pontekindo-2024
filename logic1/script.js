document.write("<h1>Tes Logika</h1>");
document.write("<h3>Intro</h3>");

for(let y = 1; y <=9; y++){
    for(let x = 1; x <=9; x++){
        document.writeln('*')
    }
    document.write('<br>')
}
        
document.write("<h2>Logic 1</h2>");
document.write("<h3>Soal 1</h3>");

for(let y = 1; y <= 9; y++){
    for(let x = 1; x <= 9; x++){
        if (x == y) {
            document.writeln('*')
        }else {
            document.writeln('~')
        }
    }
    document.write('<br>')
}