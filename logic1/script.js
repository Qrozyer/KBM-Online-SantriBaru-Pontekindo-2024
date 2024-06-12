document.write("<h1>Tes Logika</h1>");        
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

document.write("<h3>Soal 2</h3>");

for (let y = 1; y <= 9; y++) {
    for (let x = 1; x <= 9; x++) {
      if (x + y == 10) {
        document.writeln('*');
      } else {
        document.writeln('~');
      }
    }
    document.write("<br>");
  }

  document.write("<h3>Soal 3</h3>");
  for (let y = 1; y <= 9; y++) {
    for (let x = 1; x <= 9; x++) {
      if (x == y || x + y == 10) {
        document.writeln('*');
      } else {
        document.writeln('~');
      }
    }
    document.write("<br>");
  }

  document.write("<h3>Soal 4</h3>");
  for (let y = 1; y <= 9; y++) {
    for (let x = 1; x <= 9; x++) {
      if (x == y || x == 5 || y == 5 || x + y == 10) {
        document.writeln('*');
      } else {
        document.writeln('~');
      }
    }
    document.write("<br>");
  }

  document.write("<h3>Soal 5</h3>");
  for (let y = 1; y <= 9; y++) {
    for (let x = 1; x <= 9; x++) {
      if (x <= y) {
        document.writeln('*');
      } else {
        document.writeln('~');
      }
    }
    document.write("<br>");
  }


//   AND = &&
//   OR = || : salah satunya benar maka hasilnya benar
//   NOT = !

document.write("<h3>Soal 6</h3>");

for (let y = 1; y <= 9; y++) {
    for (let x = 1; x <= 9; x++) {
      if (x + y >= 10) {
        document.writeln('*');
      } else {
        document.writeln('~');
      }
    }
    document.write("<br>");
  }

document.write("<h3>Soal 7</h3>");

for (let y = 1; y <= 9; y++) {
    for (let x = 1; x <= 9; x++) {
      if (x >= y && x + y <= 10 || x <= y && x + y >= 10) {
        document.writeln('*');
      } else {
        document.writeln('~');
      }
    }
    document.write("<br>");
  }

document.write("<h3>Soal 8</h3>");
for (let y = 1; y <= 9; y++) {
    for (let x = 1; x <= 9; x++) {
      if (x <= y && x + y <= 10 || x >= y && x + y >= 10) {
        document.writeln('*');
      } else {
        document.writeln('~');
      }
    }
    document.write("<br>");
  }