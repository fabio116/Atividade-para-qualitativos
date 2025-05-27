 function corrigir() {
    let pontTotal=0;

    const nome=document.getElementById("texto").value;

    let camSel = document.getElementById("Q01").value;
    if (camSel == 'informaticaAndDS') {
        pontTotal += 1;
    }

    let camTextArea = document.getElementById("Q02").value;
    let Q02Res = 0;
    camTextArea.includes('Informática') ? Q02Res += 1 : Q02Res;
    camTextArea.includes('Administração') ? Q02Res += 1 : Q02Res;
    camTextArea.includes('Enfermagem') ? Q02Res += 1 : Q02Res;
    camTextArea.includes('Des. Sistemas') ? Q02Res += 1 : Q02Res;

    if (Q02Res == 4) {
        pontTotal += 1;
    }
    
        const check1 = document.getElementById("check1").checked;
        const check2=document.getElementById("check2").checked
        const check3 = document.getElementById("check3").checked;
        const check4 = document.getElementById("check4").checked;
        if(check1 && check2 && check4 && !check3){
            pontTotal++;
        } 

        const q04=document.getElementById("iso").checked;
        if(q04){
            pontTotal++;
        }
        const q05=document.getElementById("ver").checked;
        if(q05){
            pontTotal++;
        }
          const percentual = (pontTotal / 5) * 100;
        document.getElementById("nome").innerHTML=`O nome da pessoa é ${nome}`
        document.getElementById("corretas").innerHTML=`A quantidade de Acertos foram de ${pontTotal}`;
        document.getElementById("percentual").innerHTML = `O percentual de acertos foi de ${percentual}%`;

        const fieldsets = document.querySelectorAll('fieldset');
        const ultimoFieldset = fieldsets[fieldsets.length - 1];
        ultimoFieldset.classList.remove('hide');
    }


