const styleColors = window.getComputedStyle(document.body);
const btn = document.querySelectorAll('.lines-menu')


function checkbox() {

    const checkbox = document.getElementById('toogleTheme');
    const allElements = document.querySelectorAll('*'); 
    if (checkbox.checked) {
        
        allElements.forEach(el => {
            el.style.backgroundColor = styleColors.getPropertyValue('--dark-bgc');
            el.style.color = styleColors.getPropertyValue('--dark-text');
            el.style.borderColor = styleColors.getPropertyValue('--dark-border');
        });

        btn.forEach(el => {
            
            el.style.backgroundColor = styleColors.getPropertyValue('--dark-border');
        });
    } else {
        
        allElements.forEach(el => {
            el.style.borderColor = styleColors.getPropertyValue('--light-border');
            el.style.backgroundColor = styleColors.getPropertyValue('--light-bgc');
            el.style.color = styleColors.getPropertyValue('--light-text');
        
        });

        btn.forEach(el => {
            
            el.style.backgroundColor = styleColors.getPropertyValue('--light-border');
        });
    }
}



export { checkbox };