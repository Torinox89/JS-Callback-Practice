function move(element) {			// primer cambio
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }


    function moveWithArrowKeys(left, bottom, handleDirectionChange){    // segundo cambio, //"callback" ~~ handle change direction.
    let direction = null;
    let x = left;
    let y = bottom;

    element.style.left = x + 'px'
    element.style.bottom = y + 'px'
    
    function moveCharacter(){ 
        if(direction === 'west'){
            x-=1
        }
        if(direction === 'north'){
            y+=1
        }
        if(direction === 'east'){
            x+=1
        }
        if(direction === 'south'){
            y-=1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }

    
    setInterval(moveCharacter, 1)
    
    document.addEventListener('keydown', function(e){
        if(e.repeat) return;
    
        if(e.key === 'ArrowLeft'){
            direction = 'west'
        }
        if(e.key === 'ArrowUp'){
            direction = 'north'
        }
        if(e.key === 'ArrowRight'){
            direction = 'east'
        }
        if(e.key === 'ArrowDown'){
            direction = 'south'
        }
     handleDirectionChange(direction)      //callback(direction)

    })
    
    document.addEventListener('keyup', function(e){
        direction = null
       handleDirectionChange(direction)      //callback(direction)

    })
}
       
 return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }        
}



