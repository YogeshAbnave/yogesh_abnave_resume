import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'resume';

//   console.log('its working');
//   let theam = localStorage.getItem('theam')
//   if(theam == null){
//       setTheam('light')
//   }else{
//       setTheam(theam)
//   }
 
//   let theamDots = document.getElementsByClassName('theam-dot');
 
//   for(var i=0; theamDots.length > i; i++){
//       theamDots[i].addEventListener('click',function(){
 
//          let mode = this.dataset.mode
//           console.log('option clicked:',mode)
//           setTheam(mode)
//       })
//   }
 
 
//        function setTheam(mode){
//    if(mode == 'light'){
//        document.getElementById('theam-style').href='default.css'
//    }
//    if(mode == 'blue'){
//      document.getElementById('theam-style').href='blue.css'
//  }
//  if(mode == 'green'){
//      document.getElementById('theam-style').href = 'green.css'
//  }
//  if(mode == 'purple'){
//      document.getElementById('theam-style').href = 'purple.css'
//  }
 
//  localStorage.setItem('theam',mode)
 
 
//  }

  
}
