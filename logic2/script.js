document.write("<h1>Tes Logika</h1>");        
document.write("<h2>Logic 2</h2>");
document.write("<h3>Soal 1</h3>");

for(let y = 1; y <= 9; y++){
  for(let x = 1; x <= 9; x++){
    if (x == y) {
      document.writeln(2*x-1)
    }else {
      document.writeln('~')
    }
  }
  document.write('<br>')
}