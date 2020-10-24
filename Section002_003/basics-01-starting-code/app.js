const app = Vue.createApp({
    data(){
        return {
            courseGoal: 'Finish 2, 3, 4',
            aboutMe: "https://noynaert.fyi",
            color1:"black",
            color2: "#8d4fc0",
            color3: "#c08d4f",
            cities:"<ul><li>St. Joseph</li><li >St. Louis</li></ul>",
            randomPicture:"https://picsum.photos/150/100"
    
        }
    },
    methods:{
        toss(){
            const randomNumber = Math.random();
            if (randomNumber < 0.5){
                return "Heads";
            }else{
                return "Tails";
            }
        },
        pickColor(){
            const randomNumber = Math.random();
            var result = "white";
            if(randomNumber < 0.33333){
                result = this.color1;
            }else if(randomNumber<0.6666667){
                result = this.color2;
            }else{
                result = this.color3;
            }
            return "color:"+result;
        }

    }

});

app.mount('#user-goal');