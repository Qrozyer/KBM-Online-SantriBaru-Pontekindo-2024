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

document.write("<h3>Soal 2</h3>");

for (let y = 1; y <= 9; y++) {
  for (let x = 1; x <= 9; x++) {
    if (x + y == 10) {
      document.writeln(2*x - 2);
    } else {
      document.writeln('~');
    }
  }
  document.write("<br>");
}

document.write("<h3>Soal 3</h3>");

for (let y = 1; y <= 9; y++) {
  for (let x = 1; x <= 9; x++) {
    if (x == y) {
      document.writeln(2*x - 1);
    } else if(x + y == 10){
      document.writeln(2*x - 2);
    }else {
      document.writeln('~');
    }
  }
  document.write("<br>");
}

document.write("<h3>Soal 4</h3>");

for (let y = 1; y <= 9; y++) {
  for (let x = 1; x <= 9; x++) {
    if (x == y || x == 5) {
      document.writeln(2*y - 1);
    } else if (x + y == 10 || y == 5) {
      document.writeln(2*x - 2);
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
      document.writeln(2*x - 1);
    } else {
      document.writeln('~');
    }
  }
  document.write("<br>");
}

document.write("<h3>Soal 6</h3>")

for(let y = 1; y <=9; y++){
  for (let x = 1; x <= 9; x++){
    if (x+y >= 10){
      document.writeln(18 - 2 * y);
    }else{  
      document.writeln('~');
    }
  }
  document.write("<br>");
}

document.write("<h3>Soal 7</h3>")

for (let y = 1; y <= 9; y++) {
  for (let x = 1; x <= 9; x++) {
    if (x == y) {
      document.writeln(2*x - 1);
    } else if(x + y == 10){
      document.writeln(2*x - 2);
    } else if(x > y && x + y < 10){
      document.writeln('A')
    } else if(x < y && x + y > 10){
      document.writeln('B')
    } else {
      document.writeln('~');
    }
  }
  document.write("<br>");
}

document.write("<h3>Soal 8</h3>")

for (let y = 1; y <= 9; y++) {
  for (let x = 1; x <= 9; x++) {
    if (x == y) {
      document.writeln(2*x - 1);
    } else if(x + y == 10){
      document.writeln(2*x - 2);
    } else if(x < y && x + y < 10){
      document.writeln('A')
    } else if(x > y && x + y > 10){
      document.writeln('B')
    } else {
      document.writeln('~');
    }
  }
  document.write("<br>");
}