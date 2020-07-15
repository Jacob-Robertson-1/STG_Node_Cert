import fibinocciGen from '../util/Fibinocci'
import fibinocciToString from '../util/FibinocciToSting'

describe('Fibinocchi Sequence Challenge', ()=>{

    it('Fibinochi Test', async()=> {
        //Fibinocci Gen can handle up to value of 79
        //FibinoccitoString can handle up to value of 28
       var fib = fibinocciGen(25).next().value;
       if(ofType(Number)) 
       console.log(fibinocciToString(fib));
    })
})