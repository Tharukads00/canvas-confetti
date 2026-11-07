
import _ from 'lodash';

const btn = document.querySelector('button#confetti');
const colors_arr = ['#CCC31B', '#1BCC1B', '#1B9DCC', '#B71BCC', '#CC1B6B', '#3827F5', '#F527CF', '#466952', '#F5E800'];



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

