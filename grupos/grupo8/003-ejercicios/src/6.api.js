export async function delay(mensaje, ms) {
    try {

        return setTimeout(() => { console.log(mensaje) }, ms);
    }
    catch (err) {
        // Oops ...
    }
}

export async function run() {

    console.log(1);
    await delay('Terminó 1', 3000);
    console.log(2);
    await delay('Terminó 2', 2000);
    console.log(3);
    await delay('Terminó 3', 1000);
}