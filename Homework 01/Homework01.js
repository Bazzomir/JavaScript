		// 1.Проверка дали некој број е парен или не

let paren_broj = Number(prompt("Vnesi broj"));
if(paren_broj % 2 == 0){
	console.log(alert("Brojot e paren"));
}
else{
	console.log(alert("Brojot e neparen"));
}


		// 2.Калкулатор со основните функции(+,-,*,/).Во програмата се вчитуваат два броја и оператор

let rezultat;
let broj1 = parseFloat(prompt("Vnesi broj: "));
let operator = prompt("Vnesi operator ( Ponudeni: +, -, *, / ): ");
let broj2 = parseFloat(prompt("Vnesi broj: "));

switch(operator) {
    case '+':
        rezultat = broj1 + broj2;
        console.log(alert(broj1+" + "+broj2+" = "+rezultat));
        break;

    case '-':
        rezultat = broj1 - broj2;
        console.log(alert(broj1+" - "+broj2+" = "+rezultat));
        break;

    case '*':
        rezultat = broj1 * broj2;
        console.log(alert(broj1+" * "+broj2+" = "+rezultat));
        break;

    case '/':
        rezultat = broj1 / broj2;
        console.log(alert(broj1+" / "+broj2+" = "+rezultat));
        break;

    default:
        console.log(alert("Nevaliden Operator"));
        break;
}


		// 3.Од тастатура се внесуваат три броја кои не мора да се подредени. 
		// 	Внесените броеви претставуваат должини на страните на правоаголен триаголник. 
		//	Да се напише програма која ќе проверува дали може да се конструира триаголник од дадените должини, при што ако може, треба да се провери дали истиот е правоаголен и да се пресмета неговата плоштина.
		// 	Во спротивно, треба да се испечати порака дека триаголникот не е правоаголен

let a = parseFloat(prompt("Vnesi strana a: "));
let b = parseFloat(prompt("Vnesi strana b: "));
let c = parseFloat(prompt("Vnesi strana c: "));

let moziDaSeKonstruiraTriagolnik = false;
let daliEPravoagolen = false;
let plostina = 0;

if(a+b>c){
	moziDaSeKonstruiraTriagolnik=true;
	if(a*a+b*b==c*c){
		daliEPravoagolen=true;
		plostina=parseFloat((a*b)/2);
	}
}
if(a+c>b){
	moziDaSeKonstruiraTriagolnik=true;
	if(a*a+c*c==b*b){
		daliEPravoagolen=true;
		plostina=parseFloat((a*c)/2);
	}
}
if(b+c>a){
	moziDaSeKonstruiraTriagolnik=true;
	if(b*b+c*c==a*a){
		daliEPravoagolen=true;
		plostina=parseFloat((b*c)/2);
	}
}

if(moziDaSeKonstruiraTriagolnik){
	console.log("So stranite a = " + a + " " + "b = " + b + " " + "i c = " + c + " moze da se konstroira triagolnik");
	if(daliEPravoagolen){
		console.log("Triagolnikot e pravoagolen");
		console.log("Plostinata na triagolnikot e: ${plostina}");
	}
	else{
		console.log("Triagolnikot ne e pravoagolen");
	}
}
else{
	console.log("So stranite a = " + a + " " + "b = " + b + " " + "i c = " + c + " ne moze da se konstroira triagolnik");
}



		// 4.Да се напише програма која ќе го отпечати максимумот од два броја чии вредности се внесуваат од тастатура

let broj1=parseFloat(prompt("Vnesi broj1: "));
let broj2=parseFloat(prompt("Vnesi broj2: "));

if(broj1>broj2){
	console.log("Brojot "+broj1+ " e pogolem od brojot " + broj2);
}
else if(broj2>broj1){
	console.log("Brojot "+broj1+ " e pomal od brojot " + broj2);;
}
else{
	console.log("Broevite "+broj1+" "+"i "+broj2+" "+"se ednakvi");
}


		// 5.Од тастатура се внесуваат координати на една точка. 
		// Да се напише програма со која ќе се испечати на кој квадрант или оска припаѓа внесената точка. 
		// Ако станува збор за точка која лежи на координатниот почеток, да се испечати соодветна порака.

let x=parseFloat(prompt("Vnesi x: "));
let y=parseFloat(prompt("Vnesi y: "));

if(x>0 && y>0)
	console.log("Prv kvadrant");
else if(x<0 && y>0)
	console.log("Vtor kvadrant");
else if(x<0 && y<0)
	console.log("Tret kvadrant");
else if(x>0 && y<0)
	console.log("Cetvrt kvadrant");



		// 6.Да се направи низа од омилени филмови

var omileni_filmovi=["Matrix","John Wick","Deadpool","SAW","Avatar","Lord of The Rings","The Hobbit","Harry Potter"];
// console.log(omileni_filmovi.toString());
omileni_filmovi.push("Ocean","Psycho", "Star Wars");
console.log(omileni_filmovi.toString());
