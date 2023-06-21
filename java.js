const cls = document.getElementById('close');
const block = document.getElementById('block');
const cards = document.querySelectorAll('#card');
const adv = document.getElementById('advice')
const monthsAdvices = [
    {
        id: 1,
        month: "janvier",
        advice: "take care for your self , your are the important thing is this life ."
    },
    {
        id: 2,
        month: "fevrier",
        advice: "your family is the only thing your must die for it there is nothing better than family."
    },
    {
        id:3 ,
        month: "mars",
        advice: "the mother is the only one who can die for here child , take care for your mom ."
    },
    {
        id: 4,
        month: "avril",
        advice: "fathers is the stronger solders in this life in family war."
    },
    {
        id: 5,
        month: "mai",
        advice: "don't scare from no one their not better than you there no stranger than you theri no smarter than you , you are the best."
    },
    {
        id: 6,
        month: "juin",
        advice: "friends is not the thing than you can screfie for them , but be nice with all , all are your friends but their not important."
    },
    {
        id: 7,
        month: "juillet",
        advice: "remember to be nice with all peapal even the bad one , you can change some one of them with your intelegent."
    },
    {
        id: 8,
        month: "aout",
        advice: "love is not for the beauty or for the best one is about who deserve to live him and who can stay with you in all your badest."
    },
    {
        id: 9,
        month: "septembre",
        advice: "some time you will feel wick and can't do any thing you need than just some fath and passion and you will passed inchallah ."
    },
    {
        id: 10,
        month: "octobre",
        advice: "just work the harder you can , no one is talented all take for what he work."
    },
    {
        id: 11,
        month: "novembre",
        advice: "work more harder this is not enaght ."
    },
    {
        id: 12,
        month: "decembre",
        advice: "to be a legend work like a legend ."
    },
]



cards.forEach((card)=>{
    card.addEventListener('click', ()=>{
        for(var i = 0 ; i < monthsAdvices.length ; i++){
            if(card.innerHTML === monthsAdvices[i].month){
                const m = document.createElement('div');
                m.innerHTML = monthsAdvices[i].month;
                m.id = "month";
                block.appendChild(m);
                
                adv.innerHTML = monthsAdvices[i].advice
                block.style.display = "flex"
                console.log(m.innerHTML)
                cls.addEventListener('click', ()=>{ 
                    block.style.display = "none"
                    m.innerHTML = ""
                })
            }
        }
    })
    
})

