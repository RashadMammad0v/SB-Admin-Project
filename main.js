
const lefticon=document.querySelector('.navbar-left-icon')
lefticon.addEventListener('click',function(){
    const asidemenu=document.querySelector('aside')
    asidemenu.classList.toggle('active')
    const mainpart=document.querySelector('.mainpart')
    mainpart.classList.toggle('active')
    const cardcont=document.querySelector('.card-cont')
    cardcont.classList.toggle('active')
    const username=document.querySelector('.user-name')
    username.classList.toggle('active')
})


const dash=document.querySelector('.dash')
dash.addEventListener('click',function(){
    const listconst=document.querySelector('.listblet')
    listconst.classList.toggle('close')
})

const pages=document.querySelector('.list-contpages')
pages.addEventListener('click',function(){
    const contsub=document.querySelector('.list-cont-sub')
    contsub.classList.toggle('active')
})

const sub=document.querySelector('.list-cont-sub ul li')
sub.addEventListener('click',function(){
    const subsub=document.querySelector('.account')
    subsub.classList.toggle('active')
})

//Navbar-right elements

//document
const doc=document.querySelector('.navbar-right-link')
doc.addEventListener('click',function(event){
    const docudoc=document.querySelector('.docu')
    docudoc.classList.toggle('open')

})
//notification
const icona=document.querySelector('.navbar-right-icons')
icona.addEventListener('click',function(){
    const notifac=document.querySelector('.notification')
    notifac.classList.toggle('open')
})

//message
const mmcenter=document.querySelector('.messagecenter')
mmcenter.addEventListener('click',function(){
    const mmmcenter=document.querySelector('.messagecc')
    mmmcenter.classList.toggle('open')
})

//profile picture
const ppcenter=document.querySelector('.navbar-right-profile')
ppcenter.addEventListener('click',function(){
    const pppcenter=document.querySelector('.profilecc')
    pppcenter.classList.toggle('open')
})


const body=document.querySelector("body");
body.addEventListener('click',function(event){
  const target=event.target;
  if(!(target.classList.contains('navbar-right-link')||target.closest('.navbar-right-link'))){
    const docudoc=document.querySelector('.docu')
   
    docudoc.classList.remove('open')
  }
  
  if(!(target.classList.contains('.navbar-right-icons')||target.closest('.navbar-right-icons'))){
    const notifac=document.querySelector('.notification')
   
    notifac.classList.remove('open')
  }

  if(!(target.classList.contains('.messagecenter')||target.closest('.messagecenter'))){
    const mmmcenter=document.querySelector('.messagecc')
   
    mmmcenter.classList.remove('open')
  }


  if(!(target.classList.contains('.navbar-right-profile')||target.closest('.navbar-right-profile'))){
    const pppcenter=document.querySelector('.profilecc')
    pppcenter.classList.remove('open')
  }
})


//Table
const numRowsSelect = document.querySelector(".numRowsSelect");
const myTable = document.querySelector(".myTable");

numRowsSelect.addEventListener("change", function() {
  const selectedValue = parseInt(this.value);
  
  const rows = myTable.getElementsByTagName("tbody")[0].getElementsByTagName("tr");
  
  for (let i = selectedValue; i < rows.length; i += 2) {
    rows[i].style.display = "none";
    if (i + 1 < rows.length) {
      rows[i+1].style.display = "none";
    }
  }
  
  for (let i = 0; i < selectedValue; i += 2) {
    rows[i].style.display = "";
    if (i + 1 < selectedValue) {
      rows[i+1].style.display = "";
    }
  }
});


function pagination(pageNum) {
  
  let rows = document.querySelector(".myTable").rows;
  
 
  let rowsPerPage = 5;
  
  let start = (pageNum - 1) * rowsPerPage;
  let end = start + rowsPerPage;
  

  for (let i = 0; i < rows.length; i++) {
    rows[i].style.display = "none";
  }
    
 
  for (let j = start; j < end; j++) {
    if (rows[j]) {
      rows[j].style.display = "table-row";
    }
  }
}
