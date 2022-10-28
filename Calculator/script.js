
var bt = document.querySelectorAll('.bt');
var ans = document.getElementById('ans');
function display_ans(){
    try {
        var str = ans.innerText;
        console.log(str);
        var b = false;
        for(var i=0; i<str.length-1; i++){
            if((str.charAt(i) >= '0' && str.charAt(i) <= '9') && str.charAt(i+1) == '('){
                if((i+3)<str.length && str.charAt(i+3) == ')'){
                    str.replace(str.charAt(i+3), '');
                }
                str.replace(str.charAt(i+1), '*');
                b = true;
            }
        }
        console.log(str);
         ans.innerText = eval(str); 
        // else ans.innerText = eval(ans.innerText); 
    } catch (e) {
        if (e instanceof SyntaxError) {
            ans.innerText = 'ERROR';
        } else {
            throw e;
        }
    }
}
var c = 0;
var c1 = 0;

bt.forEach(A=>{
    A.addEventListener('click', function get(){
        if(A.innerText == 'AC'){
            ans.innerText = '0';
            c= 0;
        }else if(A.innerText == '='){
            display_ans();
        }else if(A.innerText == '%'){
            ans.innerText += A.innerText;  
        }else if(A.innerText == '/'){
            ans.innerText += A.innerText;
        }else if(A.innerText == '*'){
            ans.innerText += A.innerText;
        }else if(A.innerText == '-'){
            if(c == 0){ 
                ans.innerText = A.innerText;
                c++;
            }
            else ans.innerText += A.innerText;
        }else if(A.innerText == '+'){
            ans.innerText += A.innerText;
        }else if(A.innerText == '( )'){
            var check = ans.innerText;
            if(check.charAt(check.length-1) == '('){
                check.charAt(check.length-1) = ')';
                ans.innerText = check;
            }else if(check.charAt(check.length-1) == ')'){
                check.charAt(check.length-1) = '(';
                ans.innerText = check;
            }else if(c1 == 0){
                ans.innerText += '(';
                c1++; 
            }else{
                ans.innerText += ')';
                c1 = 0;
            }
        }else if(A.innerText == '.'){
            ans.innerText += A.innerText;
        }else if(A.innerText >='0' && A.innerText <='9'){
            if(c == 0) ans.innerText = A.innerText;
            else ans.innerText += A.innerText;
            c++;
        }
    });
});