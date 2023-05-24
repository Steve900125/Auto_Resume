// 晉榮的部分
// This function is deprecation
/*
btn_submit.onclick = function(){
    
    // Name input
    let Question1 = document.getElementById('Question1').value;
    let Question2 = document.getElementById('Question2').value;
    let Question3 = document.getElementById('Question3').value;
    let Question4 = document.getElementById('Question4').value;
    let Question5 = document.getElementById('Question5').value;
    Get_Result_Label = null;
    
    // Set a fliter to ensure there is no empty var 
    if (Question1 == ''||Question2 == ''||Question3 == ''||Question4 == ''||Question5 == '') {

        alert("input欄位不能有空值!")

    } else {
        // Fetch backend
        Get_Result.innerText = "加載中";
        fetch("/ChatGPT_Prompting", {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: `Question1=${Question1}&Question2=${Question2}&Question3=${Question3}&Question4=${Question4}&Question5=${Question5}`
        })
        .then(response => response.json())
        .then(data => {
            console.log(JSON.stringify(data));
            Get_Result_Label = JSON.parse(JSON.stringify(data));
            Get_Result.innerText = '數字加100(使用ChatGPT):\n' + Get_Result_Label['Answer1'] + '\n' + Get_Result_Label['Answer2'] + '\n' + '目前只支持計算前兩個input，我不想浪費18美元';
        })
    }
}
*/

var Get_Result = document.getElementById('Get_Result');
let Get_Result_Label = null;
var btn_submit = document.getElementById("btn_submit");

Get_Result.innerText = "Hello";

// 匯勛的部分
document.getElementById('CheckOn').onclick = function() {CheckOn()};
document.getElementById('actionClearAll').onclick = function() {actionClearAll()};

//很醜，別這樣用
document.getElementById('actionQ1').onclick = function() {actionClear(1)};
document.getElementById('actionQ2').onclick = function() {actionClear(2)};
document.getElementById('actionQ3').onclick = function() {actionClear(3)};
document.getElementById('actionQ4').onclick = function() {actionClear(4)};
document.getElementById('actionQ5').onclick = function() {actionClear(5)};


//document.getElementById("actionClearAll").onclick = function() {actionClearAll()};
//submit
function CheckOn()
{
    // Name input
    let Question1 = document.getElementById('Question1').value;
    let Question2 = document.getElementById('Question2').value;
    let Question3 = document.getElementById('Question3').value;
    let Question4 = document.getElementById('Question4').value;
    let Question5 = document.getElementById('Question5').value;
    Get_Result_Label = null;
    
    // Set a fliter to ensure there is no empty var 
    if (Question1 == ''||Question2 == ''||Question3 == ''||Question4 == ''||Question5 == '') {

        alert("input欄位不能有空值!")

    } else {
        // Fetch backend
        Get_Result.innerText = "加載中";
        fetch("/ChatGPT_Prompting", {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
            },
            body: `Question1=${Question1}&Question2=${Question2}&Question3=${Question3}&Question4=${Question4}&Question5=${Question5}`
        })
        .then(response => response.json())
        .then(data => {
            console.log(JSON.stringify(data));
            Get_Result_Label = JSON.parse(JSON.stringify(data));
            Get_Result.textContent = '數字加100(使用ChatGPT):\n' + Get_Result_Label['Answer1'] + '\n' + Get_Result_Label['Answer2'] + '\n' + '目前只支持計算前兩個input，我不想浪費18美元';
        })
    }
}

function actionClear(Question)
{
    if (!Question) return 0;
    
    //Question1~5是index.html中的那5個textarea的輸入欄位id
    //輸入的欄位有5個，判斷 actionQ1、2、3... 是哪一個按下清空按鈕，超醜
    for (let i = 0; i <= 5; i++)
    {
        if (Question == i)
        { 
            document.getElementById('Question'+ i).value = "";
            console.log('Question'+ i);//控制台
            break;
        }
    }
}


// 清空輸入欄位的資料
function actionClearAll()
{
    document.getElementById("Question1").value = "";
    document.getElementById("Question2").value = "";
    document.getElementById("Question3").value ="",
    document.getElementById("Question4").value = "",
    document.getElementById("Question5").value = "";
}

// 顯示Aboutme文本，隱藏Work文本
function showAboutmeText()
{
    var workArea = document.getElementById('action');
    var aboutText = document.getElementById('aboutText');
    if (aboutText.style.display == 'none')
    {
        aboutText.style.display = 'block';
        workArea.style.display = 'none';
    }
}

// 顯示Work文本，隱藏Aboutme文本
function hideAboutmeText()
{
    var workArea = document.getElementById('action');
    var aboutText = document.getElementById('aboutText');
    if (aboutText.style.display == 'block')
    {
        aboutText.style.display = 'none';
        workArea.style.display = 'block';
    }
}



