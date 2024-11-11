let i,j,k;

for( i = 0; i <= 3; i++ ){
    for( j = 0; j <= 3; j++){
        for( k = 0; k<= 3; k++){
            if( i == 1 && j == 1 && k ==1 ){
                console.log("cont");

                continue
            }else if(i == 2){
                console.log("break");
                break


            } else {
                console.log(i,j,k);
            }
            console.log("out k")


        }
        console.log("out j");
    }
    console.log("out i");
}
/*
for(j=0;j<=5;j++){
for(i = 0;i<=5;i++){
    if(i == 2){
        break;
    }else{
        console.log(j,i);
    }
    console.log("in")
}
console.log("out");
}*/