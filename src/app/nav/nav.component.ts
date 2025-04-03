import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  scrollWindow:boolean=false;
/* scrolling():void{
  if(window.scrollY>10){
    this.scrollWindow=true;
  }
  else[
    this.scrollWindow=false
  ]
} */

}
/* $(window).on('scroll',function(){
  $('.navbar').addClass('py-5')
 }) */
window.addEventListener('scroll', function(){
  if(window.scrollY>10){
    document.querySelector('.navbar')?.classList.remove('py-4')
  }
  else{
    document.querySelector('.navbar')?.classList.add('py-4')
  }
  
})
 