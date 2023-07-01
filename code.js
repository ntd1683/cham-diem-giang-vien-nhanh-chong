do {
	point = prompt(
	  "Bạn chấm nhanh thầy mấy điểm trên thang 5(chỉ nhập số từ 1 tới 5)",
	  "5"
	);
  } while (point <= 0 || point > 5);
  switch (point) {
	case "1":
	  point = "dapan1";
	  break;
	case "2":
	  point = "dapan2";
	  break;
	case "3":
	  point = "dapan3";
	  break;
	case "4":
	  point = "dapan4";
	  break;
	default:
	  point = "dapan5";
  }
  function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
  }
  let inputs = document.getElementsByTagName("input");
  if (point == "dapan5") {
	  let lastDapAn = [];
	  let strTmp;
	  for(let i=0;i<inputs.length;i++)
	  {
	  let idTmp = inputs[i].id; 
	  let check1 = idTmp.includes('cau');
		  if(check1 == true ) {
			  let strTmp1 = idTmp.slice(0,-6);
			  lastDapAn[strTmp1] = [];
			  if(strTmp1 !== strTmp) {
				  strTmp = strTmp1;
				  lastDapAn[strTmp].push(inputs[i]);
			  } else {lastDapAn[strTmp].push(inputs[i]);}
		  }
	  }
	  for (const [key, value] of Object.entries(lastDapAn)) {
		value[0].classList.remove("ng-untouched");		
			  value[0].classList.remove("ng-pristine");
			  value[0].classList.add("ng-dirty");		
			  value[0].classList.add("ng-touched");
			  value[0].click();
	  }
  } else {
	  
  for (let i = 0; i < inputs.length; i++) {
	  await sleep(10);
	  let check = inputs[i].id.includes(point);
	  if (check == true) {
		inputs[i].classList.remove("ng-untouched");
		inputs[i].classList.remove("ng-pristine");
		inputs[i].classList.add("ng-dirty");
		inputs[i].classList.add("ng-touched");
		inputs[i].click();
	  }
	}
  }
  await sleep(100);
  let btn_luu_ket_qua = document.getElementsByClassName(
	"btn btn-success pull-right ng-star-inserted"
  );
  await sleep(100);
  btn_luu_ket_qua[0].click();
  alert("Đã nộp!!!");
  