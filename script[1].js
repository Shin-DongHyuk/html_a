var strMsg0 = "지윤이와 가위바위보를 하시겠습니까?";
function init() {
  if (!confirm(strMsg0)) {
    document.getElementById("btnGawi").disabled = true;
    document.getElementById("btnBawi").disabled = true;
    document.getElementById("btnBo").disabled = true;
  }

}
function myChoice(gawibawiboUser) {
  var strLocal = myResult(gawibawiboUser);
  alert(strLocal);
}
function myResult(number) {
  var gawiubawiboComp = Math.floor(Math.random() * 3);
  var gawibawiboName = ["바위", "가위", "보"];
  

  
  var strMsg;
  
  switch(number)
  {
      case 0: strMsg= "유니는 " + gawibawiboName[gawiubawiboComp]+"!!"+" 당신은 "+gawibawiboName[number]+"!!";
      switch(gawiubawiboComp)
        {
          case 0: strMsg=strMsg+" 비겼습니다.";break;
          case 1: strMsg=strMsg+" 당신이 이겼습니다.";break;
          case 2: strMsg=strMsg+" 당신이 졌습니다.";break;
        }break;
      case 1: strMsg= "유니는 " + gawibawiboName[gawiubawiboComp]+"!!"+" 당신은 "+gawibawiboName[number]+"!!";
      switch(gawiubawiboComp)
        {
          case 0: strMsg=strMsg+" 당신이 졌습니다.";break;
          case 1: strMsg=strMsg+" 비겼습니다.";break;
          case 2: strMsg=strMsg+" 당신이 이겼습니다.";break;
        }break;
      case 2: strMsg= "유니는 " + gawibawiboName[gawiubawiboComp]+"!!"+" 당신은 "+gawibawiboName[number]+"!!";
      switch(gawiubawiboComp)
        {
          case 0: strMsg=strMsg+" 당신이 이겼습니다~!";break;
          case 1: strMsg=strMsg+" 당신이 졌습니다~!";break;
          case 2: strMsg=strMsg+" 비겼습니다?";break;
        }break;
  }

  
  
  return strMsg;

}