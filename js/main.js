// let stocks = {
//     Fruits: ["strawberry","grapes","banan","apple"],
//     liquid: ["water","ice"],
//     holder: ["cone","cup","stick"],
//     toppings: ["chocolate","peanuts"],
// };
// let order = (call_pro) => {
//     call_pro()
// };

// let production = () => {

// };

// order(production)

const img1 = document.getElementById('img1');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
const img2 = document.getElementById('img2');
const text3 = document.getElementById('text3');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const text4 = document.getElementById('text4');
const img5 = document.getElementById('img5');
const text5 = document.getElementById('text5');
const img6 = document.getElementById('img6');
const text6 = document.getElementById('text6');
const img7 = document.getElementById('img7');
const text7 = document.getElementById('text7');
const img8 = document.getElementById('img8');
const text8 = document.getElementById('text8');
const text9 = document.getElementById('text9');










let stocks = {
    Fruits: ["strawberry","grapes","banan","apple"],
    liquid: ["water","ice"],
    holder: ["cone","cup","stick"],
    toppings: ["chocolate","peanuts"],
};
let order = (f_name,call_pro) => {
    setTimeout(() => {
        img1.style.display = 'block'
        img1.style.margin = '0 auto'
        text1.innerText = 'Banan tanlandi'
        call_pro();
    },2000)
    
};

let production = () => {
    setTimeout(() => {
        text2.innerText = 'Production started'
        setTimeout(() => {
            img2.style.display = 'block'
            img2.style.margin = '0 auto'
            text3.innerText = 'Banan kesildi'
            setTimeout(() => {
                img3.style.display = 'block'
                img3.style.margin = '0 auto'
                img3.style.marginBottom = '20px'
                img4.style.display = 'block'
                img4.style.margin = '0 auto'
                text4.innerText = 'Ice va water qo`shildi'
                setTimeout(() => {
                    img5.style.display = 'block'
                    img5.style.margin = '0 auto'
                    text5.innerText = 'Mixer Started'
                    setTimeout(() => {
                        img6.style.display = 'block'
                        img6.style.margin = '0 auto'
                        text6.innerText = 'Cone tanlandi'
                        setTimeout(() => {
                            img7.style.display = 'block'
                            img7.style.margin = '0 auto'
                            text7.innerText = 'Peanuts tanlandi'
                            setTimeout(() =>{
                                img8.style.display = 'block'
                                img8.style.margin = '0 auto'
                                text8.innerText = 'Ice cream tayyor'
                                setTimeout(() => {
                                    text9.innerText = 'Egasiga topshirildi'
                                },2000)
                            },2000)
                        },2000)
                    },2000)
                },2000)
            },2000)
        },2000)
    },2000)
};

order(0,production)

