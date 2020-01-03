
let who  = ['the dog','my granma','his turtle','my bird'];
let what = ['eat','pissed','crushed','broked'];
let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];


        window.onload = function(){

        let myIndex1 = 0;

        myIndex1= Math.floor(Math.random()*(who.length -1));
        console.log(myIndex1);
        document.getElementById("excuse").innerHTML=who[myIndex1];

        let myIndex2 = 0;

        myIndex2= Math.floor(Math.random()*(what.length -1));
        console.log(myIndex2);
        document.getElementById("excuse").innerHTML=who[myIndex2];

        let myIndex3 = 0;

        myIndex3= Math.floor(Math.random()*(when.length -1));
        console.log(myIndex3);

        document.getElementById("excuse").innerHTML=who[myIndex1]+" "+what[myIndex2]+" "+when[myIndex3];

      }
