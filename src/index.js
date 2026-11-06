import _ from 'lodash';


const btn = document.querySelector('button#confetti');

const randomHex = () => '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
const colors_arr = Array.from({ length: 10 }, randomHex);



btn.addEventListener('click', ()=>{
    import('canvas-confetti').then(({default:confetti})=>{
        confetti({
        origin:{
            x:Math.random(),
            y:Math.random()
        },
        colors:[_.sample(colors_arr)]
    })
    })
    
})

