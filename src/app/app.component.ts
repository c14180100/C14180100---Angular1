import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  function hitung(){
			var input = document.getElementById("input").value;
			var inputs = input.split(",");
			var row = parseInt(inputs[0]);
			var col = parseInt(inputs[1]);

			var gil = document.getElementById("giliran").innerHTML.split(" ");
			var giliran = gil[1];

			var jawaban = document.getElementById("jawaban").innerHTML;

			var splitJawaban = jawaban.split("<br>");

			var proses = new Array();
			for(var i = 0; i < 5; i++){
				proses[i] = splitJawaban[i].split("");


			}

			proses[row-1][col-1] = giliran;

			//cek kondisi menang
			var menang = "0";
			var counter = 0;

			//horizontal
			for(var i = 0; i < 5; i++){
				counter = 0;
				for (var j = 0; j < 5; j++){
					if(proses[i][j] == giliran){
						counter++;
					}
					else{
						counter = 0;
					}
				}
				if(counter >= 4){
					menang = giliran;
				}
			}

			//vertikal
			if(menang == "0"){
				for(var i = 0; i < 5; i++){
					counter = 0;
					for (var j = 0; j < 5; j++){
						if(proses[j][i] == giliran){
							counter++;
						}
						else{
							counter = 0;
						}
					}
					if(counter >= 4){
						menang = giliran;
					}
				}
			}

			//gabungin lagi arraynya jadi string

			var gabung = new Array();

			for(var i = 0; i < 5-1; i++){
				proses[i].push("<br>");
				gabung[i] = proses[i].join("");
			}
			gabung[5-1] = proses[5-1].join(""); 

			var jawabanFix = gabung.join("");
			document.getElementById("jawaban").innerHTML = jawabanFix;

			

			if(menang != "0"){
				document.getElementById("pemenang").innerHTML = "Pemenangnya adalah " + giliran + " !"; 
			}
			else{
				if(giliran == "1"){
					giliran = "2";
				}
				else{
					giliran = "1";
				}

				document.getElementById("giliran").innerHTML = "Giliran " + giliran;
			}
		}
}
