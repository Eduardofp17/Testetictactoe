window.addEventListener('DOMContentLoaded',() =>{
    
    const contai= document.querySelector(".container");  const Estrutura =Array.from(document.querySelectorAll(".corpo"));
    const playerDisplay=document.querySelector('.display-player')
    const Reset=document.querySelector('.Reset');
    let Playeratual="X";
    let gameactive= true;
    const VitoriaX='Jogador X ganhou';
    const VitoriaO='Jogador O ganhou';
    const velha='Deu velha!';
      
    let Board =['','','','','','','','','']
    const updateBoard= (index) =>{
        Board[index]=Playeratual;
    }
    const action= (corpo, index)=>{
        if(acaoValida(corpo)&& gameactive){
           corpo.innerText=Playeratual;
           corpo.classList.add(`Player${Playeratual}`);
           updateBoard(index);
           checarSeTemWin();
           changePlayer();
        }
    };
    
    const acaoValida=(corpo)=>{
        if(corpo.innerText==='X' || corpo.innerText==='O'){
            alert("Um jogador já escolheu essa posição.");
            return false;
        }
        return true;
    };
    const changePlayer= ()=>{
    playerDisplay.classList.remove(`Player${Playeratual}`);    
    Playeratual = Playeratual === 'X' ? 'O' : 'X';
    playerDisplay.innerText= Playeratual;
    playerDisplay.classList.add(`Player${Playeratual}`)
    };
    const condicoesdevitoria = [
     [0, 1, 2], 
     [3, 4, 5], 
     [6, 7, 8], 
     [0, 3, 6],
     [1, 4, 7], 
     [2, 5, 8], 
     [0, 4, 8], 
     [2, 4, 6] 
     ];
     function checarSeTemWin(){
      let roundwon = false;
       for(i=0;i<=7; i++){
         const victory=condicoesdevitoria[i];
         const a= Board[victory[0]];
         const b= Board[victory[1]];
         const c= Board[victory[2]];
         if(a===''||b===''||c===''){
           continue;
         }
         if(a === b && b === c){
             roundwon=true;
             break;
         }
       }
     
     if (roundwon){
       Playeratual==='X' ? alert(VitoriaX):alert(VitoriaO);
       ResetButton()
        Estrutura.forEach((corpo)=>{
          corpo.innerText='';
          corpo.classList.remove('PlayerX');
          corpo.classList.remove('PlayerO');
         
       })
     };
     if(!Board.includes('')){
       alert("Deu velha");
       ResetButton()
      }
     };
    Estrutura.forEach((corpo, index)=>{   corpo.addEventListener('click',()=>{ action(corpo, index)});
    });
    const ResetButton=()=>{
       Board = ['','','','','','','','',''];
       gameactive=true;
       if(Playeratual==='O'){
           changePlayer();
       }
       Estrutura.forEach((corpo)=>{
          corpo.innerText='';
          corpo.classList.remove('PlayerX');
          corpo.classList.remove('PlayerO')
       })
    }
    Reset.addEventListener('click',ResetButton)
     })