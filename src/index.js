
import _ from 'lodash';

const btn = document.querySelector('button#confetti');
const colors_arr = [
    // Reds & Pinks
    '#FF0055', '#FF1493', '#FF4500', '#E63946', '#FF3366', '#E11D48', '#F43F5E', '#FB7185', '#EF4444', '#DC2626',
    '#B91C1C', '#FF6B6B', '#EE5253', '#FF4757', '#C0392B',
    // Corals & Oranges
    '#FF7F50', '#FF6347', '#FF7675', '#FFA07A', '#FA8072', '#F97316', '#EA580C', '#FB923C', '#FF9F43', '#F39C12',
    '#E67E22', '#F59E0B', '#D97706', '#FBBF24', '#FECA57',
    // Yellows & Limes
    '#EAB308', '#CA8A04', '#FACC15', '#F1C40F', '#FFD700', '#FFDF00', '#FFEAA7', '#84CC16', '#65A30D', '#A3E635',
    // Greens & Teals
    '#10AC84', '#00D2D3', '#1DD1A1', '#2ECC71', '#27AE60', '#22C55E', '#16A34A', '#4ADE80', '#15803D', '#10B981',
    '#059669', '#34D399', '#047857', '#14B8A6', '#0D9488', '#2DD4BF', '#0F766E', '#00CEC9', '#16A085', '#1ABC9C',
    // Cyans & Blues
    '#06B6D4', '#0891B2', '#22D3EE', '#0EA5E9', '#0284C7', '#38BDF8', '#0369A1', '#3B82F6', '#2563EB', '#60A5FA',
    '#1D4ED8', '#3498DB', '#2980B9', '#48DBFB', '#54A0FF',
    // Indigos & Violets
    '#6366F1', '#4F46E5', '#818CF8', '#4338CA', '#8B5CF6', '#7C3AED', '#A78BFA', '#6D28D9', '#A855F7', '#9333EA',
    '#C084FC', '#7E22CE', '#9B59B6', '#8E44AD', '#5F27CD',
    // Fuchsias & Magentas
    '#D946EF', '#C026D3', '#E879F9', '#A21CAF', '#EC4899', '#DB2777', '#F472B6', '#BE185D', '#FF9FF3', '#FDA7DF'
];



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

