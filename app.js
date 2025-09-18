// profe curso
const { createApp, ref } = Vue
   const app = createApp({
    template:`
        <h1>Hola mundo</h1>
        <p>Desde vue app</p>
    `,
    setup(){
        console.log('setup');
    }
   });     

app.mount('#app');





// Esto es segun la documentación oficial
// const { createApp, ref } = Vue
//         createApp({
//             setup() {
//                 const message = ref('Hello vue!')
//                 return {
//                     message
//                 }
//             }
//         }).mount('#app')