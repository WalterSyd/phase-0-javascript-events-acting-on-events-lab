// Your code here
function moveDodgerLeft() {
    //target 'left' style element of dodger
    let left = dodger.style.left
    //change left value into integer
    left = parseInt(left)
    

    if (left > 0) {                         //checks  whether dodger can be mved further left
      dodger.style.left = `${left - 1}px`   //if possible, move it 1px
    }
  }
  
  function moveDodgerRight() {  //gets thecurrent left element of dodger
    let left = dodger.style.left      
    left = parseInt(left)           // iof possible, move it 1px right
    
    if (left < 360) {               //check if dodger can move right
      dodger.style.left = `${left + 1}px`//// iof possible, move it 1px right
    }
  }