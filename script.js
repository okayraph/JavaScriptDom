var curreentTime = document.getElementById("display_current_time");

function showDate(){
	var date = new Date();
	curreentTime.innerHTML = date;
}

setInterval(showDate,1000);





// var timer =0;

// function countUp(){
// 	document.write(timer+ "<br>");
// 	timer++;
// }

// setInterval(countUp,100);




// function showName(){
// 	document.write("Okay")
// }
// function showName2(){
// 	document.write("Raph")

// }
// function showName3(){
// 	document.write("Sunday")
// }
// showName();
// setTimeout(showName2,2000);
// showName3();


// var inputTags = document,getElementsByTagName("input");

// alert(inputTags[0].value);
// alert(inputTags[1].value);
// alert(inputTags[2].value);



// var inputTag = document.getElementsByTagName("input");


// function validationFields(){
// 	if (inputTag[0].value==""){
// 		alert("Plase enter a name");
// 	}else if(inputTag[1].value==""){
// 		alert("Plase enter password");
// 	}


// }