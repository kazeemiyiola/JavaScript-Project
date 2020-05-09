
function carDetails(manufacturer, series, transmission){
    
        this.manufacturer = manufacturer;
        this.manufacturer = series,
        this.transmission = {
            type1: 'manual',
            type2: 'auto',
        };
        this.printName = function(){
            console.log(this.manufacturer);
        }
      
    }
    
    const car = new carDetails("Audi", "A5", "Automatics");
 
    