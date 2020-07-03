export async function delay (seg){

    try {
        let res = await setTimeout(seg);
        return res;
    } catch (error) {
        console.log("ERROR: ",error)
    }
}
    export async function run(){

        return new Promise(resolve => { 
    
            console.log("1");
            resolve(this.delay(1000))
            
            console.log("2");
            resolve(this.delay(1000));
        
            console.log("3");
            resolve(this.delay(1000));
        
          });
    }

//run().then(response => console.log(response));

