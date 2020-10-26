const app=Vue.createApp({
    data:function(){
        return{
           alerts:0,
           output:"",
           confirmed:"???"
        }
    },
    methods:{
        showAlert(){
          this.alerts++;
          counter = this.alerts;
          console.log("Alerts is now " + counter);
          alert("There have been "+counter + " alerts");
        },
        showOutput(event){
            letter = event.key;
            console.log(letter);
            if(letter != "Enter"){
              this.output=letter;
              console.log("Changing to "+letter);
            }
        },
        confirm(){
             this.confirmed=this.output;
        }
    }
});
app.mount('#assignment');