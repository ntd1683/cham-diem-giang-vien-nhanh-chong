var point;
do{
point = prompt("Bạn chấm nhanh thầy mấy điểm trên thang 5(chỉ nhập số từ 1 tới 5)", "5");
}while(point<=0||point>5);
switch(point){
	case '1':
		point = "dapan1";
		break;
	case '2':
		point = "dapan2";
		break;	
	case '3':
		point = "dapan3";
		break;
	case '4':
		point ="dapan4";
		break;
	default:
		let cau1 = document.getElementById("cauhoi1192dapan4");
		cau1.click();
		point = "dapan5";
}
function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
}
let inputs = document.getElementsByTagName("input");
for(let i=0;i<inputs.length;i++)
{
	await sleep(10);
	let check = inputs[i].id.includes(point);
	if(check == true ){
		inputs[i].classList.remove("ng-untouched");		
		inputs[i].classList.remove("ng-pristine");
		inputs[i].classList.add("ng-dirty");		
		inputs[i].classList.add("ng-touched");
		inputs[i].click();
	}
}
let btn_luu_ket_qua = document.getElementsByClassName("btn btn-success pull-right ng-star-inserted");
btn_luu_ket_qua[0].click();
alert("Đã nộp!!!");
