// profe curso
const { createApp, ref } = Vue
   const app = createApp({
    //trabajando como se debe trabajar en vue3 con template pero tambien se puede hacer con el template en el html
    // template:`
    //     <h1>{{message}}</h1>
    //     <p>{{author}}</p>
    //`
    
    setup(){

        //variables reactivas funcionan en el template colocando en ref()  el valor de la variable, esta variable se convierte en objeto         
        const message = ref('Por que estudiando ando');
        const author = ref("Isai");

        const changeQuote = () => {
            message.value = 'Yo soy Ironman',
            author.value = 'Ironman'
        }

        // setTimeout(() => {
        //     message.value = 'Yo soy Batman',
        //     author.value = 'Batman'
        // },2000);
        return { message, author, changeQuote}
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