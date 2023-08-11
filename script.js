console.log("Running Form.........");
import { questions } from './questions.js';

const btn_strt = document.querySelector('.strt-btn');
const instr_form = document.querySelector('.maininstu');
const cont_btn = document.querySelector('.sub_cont_btn-2')
const quize_form = document.querySelector('.quize_form')
const time_count = document.querySelector('.count_time');
const form_questions = document.querySelector('.form_quest');
const form_option = document.querySelector('.form_ans_option ul');
const page_Count = document.querySelector('.page_count')
const total_que = document.querySelector('.total_quest')

// console.log(page_Count.innerHTML="loo",'opopopoppppppppppppppppppppppppppppppppppppppppppppoooooooooooooooooooooooooooo')
// console.log

const option_div = document.querySelectorAll('.form_ans_option ul .option')

const nex_butnn = document.querySelector('.page_nxt_btn a')

// console.log(option_div);

// console.log("This is questions data :- " ,form_questions,form_option)


btn_strt.addEventListener('click',(e)=>{
    e.preventDefault();

    instr_form.classList.add('instrData');

    cont_btn.classList.add('cont_btn');

    console.log("Clicked On it ")
})


cont_btn.addEventListener('click',(e)=>{
    e.preventDefault();

    quize_form.classList.add('new_cont_btn');

    console.log("Clicked On it ")
})

let intervalId ;

let counter = ()=>{
    
    let m = 1;
    intervalId = setInterval(()=>{
       
        if(m == 16)clearInterval(intervalId );
        else(
                (m < 10) ? time_count.innerHTML = "0" + m++  :  time_count.innerHTML =  m++ 
            // console.log("Counting inerval Runnign long code to see next one  :- " + (m++))
        
            )

    },1000)

}


let question = questions;
console.log(question);

let quest_len = question.length;

let currentQuestion = 0;

function questionDisplayed(ques){
    // console.log(ques,'pppppppppppppppppppppppppppppppppppppppppppppppp')
    console.log("The current question shows :- " , ques.question);
    form_questions.textContent = ques.question;

    console.log("The current option shows :- " , ques.options);
    form_option.innerHTML = '';
    ques.options.forEach((elem)=>{
    let qestionItem = document.createElement('li');
    qestionItem.addEventListener('click',function(){
        checkAnswer(this,ques.answer);
    } )
    qestionItem.classList.add('option');
    qestionItem.textContent = elem;
    form_option.appendChild(qestionItem);

    console.log(qestionItem,"This are all options ")
    })

    page_Count.innerHTML=currentQuestion+1;
    total_que.innerHTML=quest_len;
}


function checkAnswer(selectOption,correctAnswer){

    const all_four = document.querySelectorAll('.option');


    console.log(all_four, 'reiuyrwekjkjdjdkjdjd')

    console.log(correctAnswer,"eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeegggggggggggggggggggggggggggggg");

    if(selectOption.textContent === correctAnswer){
        selectOption.classList.add('correct_answer');
    }else{
        selectOption.classList.add('wrong_answer');
    }

    console.log(form_option.length,'lkdljdjskldjkasjkasjdklasjdlkasjdlkjadklja')
      
    for(let i= 0 ; i < all_four.length ; i++){
         
        // i.addEventListener('click',function(){
        //     console.log("inside function clicked many times ......................")
        // })
        
        console.log(all_four[i],"oooooopppppppppp");

        all_four[i].addEventListener('click',function(){
            

        console.log("the is clicked many time and clicking everytime aone by one");
        })
    }

    // console.log(correctAnswer,'oooooopopqwqowpo')

    console.log(selectOption,"yuuuooooooooitirtiruituriutirutiorutioerot")
    
    // console.log(selectOption,"thanks so much to loop koll hoop",correctAnswer )
}



























// function checkAnswer( selecOption , correctAnsw){

//     // console.log(elem,"this is somthng thaht want tot play cricket",ques.answer)

//     console.log(selecOption,"1234567899876454",correctAnsw)
   
//     const option_list = document.querySelectorAll('.option');
    
//     // console.log("This is option List :- " + option_list)

//     if(selecOption === correctAnsw){

//         console.log(correctAnsw,"olllloololololololoooooooooooooooooooooooooooooolllllllllllllllllllllllllllooooooooooolllllll");
//         console.log("Correct Answer!")
//         alert('Your Answer is correct!')

//         // correctAnsw.classList.add('correct_answer');
//         //   for(let i = 0 ; i < option_list.length ; i++){
//         //     console.log(option_list[i]);
//         //     option_list[i].addEventListener('click', function(){
//         //        console.log(this,'oooooooooooooooooooooo')
//         //     })

//         //   }
//         nex_butnn.classList.add('dis-active');
//         }else{
//         alert('Your Answer is not correct! ')
//         console.log("Answer is not correct");
//     }
//     // nex_butnn.classList.remove('dis-active');
//     currentQuestion++;

//     if(currentQuestion < question.length ){
//         questionDisplayed(question[currentQuestion]);
//         page_Count.innerHTML=currentQuestion+1;
//     }

// }

































nex_butnn.addEventListener('click',()=>{
    currentQuestion++;
    // e.preventDefault();
  
    if(currentQuestion < question.length ){
        questionDisplayed(question[currentQuestion]);
        page_Count.innerHTML=currentQuestion+1;
    }else{

    }

    // console.log("looooooooooooolooooooooooooloooooooooooooloooooooooooo")
    
})


questionDisplayed(question[currentQuestion])





































































































 

  
  


