var questions = ["Что из этого не является косметическим средством?", "Кто, в конце концов, скушал Колобка?", "Какой шахматной фигуры не существует?", "Что означает буква «О» в аббревиатуре ОРТ?", "Главный герой в романе Ф. И. Достоевского «Преступление и наказание»", "В состав любого органического вещества входит…", "Какое слово здесь лишнее?", "Как назывался самый младший гражданский чин, присваивавшийся согласно Табели о рангах?", "Кто изобрел громоотвод?", "Как в России в 15-17вв. назывались феодально-зависимые люди, не имевшие своего хозяйства, жившие и работавшие во дворах крестьян или посадских людей?", "В каком городе находится штаб-квартира Microsoft?", "При каком правителе к России была присоединена территория Финляндии?", "Ричард Львиное Сердце был пленен во время?", "Известно, что в кириллице многие буквы имели и цифровое значение. Чему равна буква К (како)?", "Кто такой «молотоглав»?"];
var answers0 = ["A: Помада", "B: Татуировка", "C: Крем", "D: Пудра"];
var answers1 = ["A: Дед", "B: Баба", "C: Заяц", "D: Лиса"];
var answers2 = ["A: Пешка", "B: Конь", "C: Король", "D: Дама"];
var answers3 = ["A: Олигархическое", "B: Объективное", "C: Общественное", "D: Однообразное"];
var answers4 = ["A: Расторгуев", "B: Чикатило", "C: Тумбочкин", "D: Раскольников"];
var answers5 = ["A: кислород", "B: углерод", "C: водород", "D: азот"];
var answers6 = ["A: Автор", "B: Товар", "C: Отвар", "D: Ворот"];
var answers7 = ["A: Синодский регистратор", "B: Провинциальный секретарь", "C: Коллежский регистратор", "D: Кабинетский регистратор"];
var answers8 = ["A: Франклин", "B: Рузвельт", "C: Вашингтон", "D: Линкольн"];
var answers9 = ["A: Дворовые", "B: Захребетники", "C: Нахлебники", "D: Бестягольные"];
var answers10 = ["A: Нью-Йорк", "B: Ричмонд", "C: Новый Орлеан", "D: Сиэтл"];
var answers11 = ["A: Петр I", "B: Екатерина II", "C: Павел I", "D: Александр I"];
var answers12 = ["A: крестового похода", "B: столетней войны", "C: войны алой и белой розы", "D: войны за независимость"];
var answers13 = ["A: 10", "B: 20", "C: 70", "D: 90"];
var answers14 = ["A: Рыба", "B: Птица", "C: Змея", "D: Насекомое"];
var arr = [answers0, answers1, answers2, answers3, answers4, answers5, answers6, answers7, answers8, answers9, answers10, answers11, answers12, answers13, answers14];
var mas=[1,3,3,2,3,1,3,2,0,1,1,3,0,1,1];
var level = 0;
var que = document.getElementById("question");
var a = document.getElementById("a");
var b = document.getElementById("b");
var c = document.getElementById("c");
var d = document.getElementById("d");
var mon = document.getElementById("mon").children;
var hint = document.getElementById("hint50");
var peo = document.getElementById("people");
var fri = document.getElementById("friend");

var a_div = document.getElementsByClassName("ans_1")[0];
var b_div = document.getElementsByClassName("ans_2")[0];
var c_div = document.getElementsByClassName("ans_1")[1];
var d_div = document.getElementsByClassName("ans_2")[1];

que.innerHTML = questions[level];
a.innerHTML = arr[level][0];
b.innerHTML = arr[level][1];
c.innerHTML = arr[level][2];
d.innerHTML = arr[level][3];

a_div.onclick = function(){
	if (mas[level]==0) {
		a_div.classList.add("win");
		function win_a(){
			a_div.classList.remove("win");	
			mon[14-level].classList.remove("org_bg");
			level +=1;
			mon[14-level].classList.add("org_bg");
			que.innerHTML = questions[level];
			a.innerHTML = arr[level][0];
			b.innerHTML = arr[level][1];
			c.innerHTML = arr[level][2];
			d.innerHTML = arr[level][3];
			console.log(level);
		}
		setTimeout(win_a, 1000);
	}
		else{
		a_div.classList.add("loose");
		function loose_a(){
			alert("Вы проиграли");
			mon[14-level].classList.remove("org_bg");
			level = 0;
			mon[14-level].classList.add("org_bg");
			que.innerHTML = questions[level];
			a.innerHTML = arr[level][0];
			b.innerHTML = arr[level][1];
			c.innerHTML = arr[level][2];
			d.innerHTML = arr[level][3];
			a_div.classList.remove("loose");
		}
		setTimeout(loose_a, 1000);
	}
}

b_div.onclick = function(){
	if (mas[level]==1) {
		b_div.classList.add("win");
		function win_b(){
			b_div.classList.remove("win");
			mon[14-level].classList.remove("org_bg");
			level+=1;
			if (level==15) {alert("you win 1 000 000");}
			else{
			mon[14-level].classList.add("org_bg");
			que.innerHTML = questions[level];
			a.innerHTML = arr[level][0];
			b.innerHTML = arr[level][1];
			c.innerHTML = arr[level][2];
			d.innerHTML = arr[level][3];
		}
			
			console.log(level);

		}
		setTimeout(win_b, 1000);
	}
	else{
		b_div.classList.add("loose");
		function loose_b(){
			alert("Вы проиграли");
			mon[14-level].classList.remove("org_bg");
			level = 0;
			mon[14-level].classList.add("org_bg");
			que.innerHTML = questions[level];
			a.innerHTML = arr[level][0];
			b.innerHTML = arr[level][1];
			c.innerHTML = arr[level][2];
			d.innerHTML = arr[level][3];
			b_div.classList.remove("loose");
		}
		setTimeout(loose_b, 1000);
	}
}

c_div.onclick = function(){
	if (mas[level]==2) {
		c_div.classList.add("win");	
		function win_c(){
			c_div.classList.remove("win");	
			mon[14-level].classList.remove("org_bg");
			level +=1;
			mon[14-level].classList.add("org_bg");
			que.innerHTML = questions[level];
			a.innerHTML = arr[level][0];
			b.innerHTML = arr[level][1];
			c.innerHTML = arr[level][2];
			d.innerHTML = arr[level][3];
		}
		setTimeout(win_c, 1000);	
	}
	else{
		c_div.classList.add("loose");
		function loose_c(){
			alert("Вы проиграли");
			mon[14-level].classList.remove("org_bg");
			level = 0;
			mon[14-level].classList.add("org_bg");
			que.innerHTML = questions[level];
			a.innerHTML = arr[level][0];
			b.innerHTML = arr[level][1];
			c.innerHTML = arr[level][2];
			d.innerHTML = arr[level][3];
			c_div.classList.remove("loose");
		}
		setTimeout(loose_c, 1000);
	}
}

d_div.onclick = function(){
	if (mas[level]==3) {
		d_div.classList.add("win");	
		function win_d(){
			d_div.classList.remove("win");	
			mon[14-level].classList.remove("org_bg");
			level +=1;
			mon[14-level].classList.add("org_bg");
			que.innerHTML = questions[level];
			a.innerHTML = arr[level][0];
			b.innerHTML = arr[level][1];
			c.innerHTML = arr[level][2];
			d.innerHTML = arr[level][3];
		}
		setTimeout(win_d, 1000);
	}
	else{
		d_div.classList.add("loose");
		function loose_d(){
			alert("Вы проиграли");
			mon[14-level].classList.remove("org_bg");
			level = 0;
			on[14-level].classList.add("org_bg");
			que.innerHTML = questions[level];
			a.innerHTML = arr[level][0];
			b.innerHTML = arr[level][1];
			c.innerHTML = arr[level][2];
			d.innerHTML = arr[level][3];
			d_div.classList.remove("loose");
		}
		setTimeout(loose_d, 1000);
	}
}

hint.onclick = function(){
	if (level==0 || level==5  || level==8  || level==9  || level==10  || level==12  || level==13  || level==14) {
		c.innerHTML = "";
		d.innerHTML = "";
		hint.onclick = function(){};
		hint.src = '50x.png'
	}
	else{
		a.innerHTML = "";
		b.innerHTML = "";
		hint.onclick = function(){};
		hint.src = 'images/50x.png'
	}
}

peo.onclick = function(){
	var ans1 = Math.floor(Math.random() * 100);
	var ans2 = Math.floor(Math.random() * (100 - ans1));
	var ans3 = Math.floor(Math.random() * (100 - ans1 - ans2));
	var ans4 = Math.floor(Math.random() * (100 - ans1 - ans2 - ans3));
	alert("A:"+ans1+"% B:"+ans2+"% C:"+ans3+"% D:"+ans4+"%");
	peo.onclick = function(){};
	peo.src = 'images/peoplex.png';
}

fri.onclick = function(){
	var a1 = Math.floor(Math.random()*4+1);
	if (a1==1) {a1="A";}
	if (a1==2) {a1="B";}
	if (a1==3) {a1="C";}
	if (a1==4) {a1="D";}
	alert("Vash drug govorit chto otvet = "+a1);
	fri.onclick = function(){};
	fri.src = 'images/callx.png';
}
