const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');


navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }


});

// global event handler for expanding dropdowns
const expandHandler = function() {
    this.classList.toggle('active');
    this.nextElementSibling.classList.toggle('show');
}
  
// generate randomId for dropdownsreturn Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
const randomId = () => {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10);
}
  
// custom render function for coach info accordion
function _bindAccordion(name, bio, cellRef, $cell) {
// grab template contents
const $input = cellRef.querySelector('input');
const $label = cellRef.querySelector('label');
  
// assign template attributes and custom id's
// so the label for will trigger the dropdown
const dropdownID = randomId();
$input.setAttribute('id', `accordion_${dropdownID}`);
$label.setAttribute('for', `accordion_${dropdownID}`);
};
  
  
// Custom loading class for CSS handling
const zgLoaded = document.querySelector('zing-grid');
zgLoaded.addEventListener('grid:ready', () => {
setTimeout(() => zgLoaded.classList.remove('loading'), 0);
});

