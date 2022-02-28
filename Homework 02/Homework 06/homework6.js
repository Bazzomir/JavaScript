let rec=(a=0,b=0)=>{
    console.log('Rectangle');
    console.log('Perimeter:',2*(a+b));
    console.log('Area:',a*b);
};
rec(1,2);

let circle=(r=0)=>{
    console.log('Circle');
    const pi=3.14;
    console.log('Perimeter:',2*pi*r);
    console.log('Area:',pi*r*r);
};
circle(2);

let compare= (a,b) => {
    return new Promise((resolve, reject) => {
        if (typeof a=='number' && typeof b=='number' && a<b){
            return resolve(b);
        }else{if(typeof a=='number' && typeof b=='number' && a>=b){
            return resolve(a);
        }}
        return reject();
    })
};

let waitforresponse=async(a,b)=>{
    try{
        let response=await compare(a,b);
        console.log('Bigger number is',response);
    }catch{
        console.error('ERROR');
    }
};
waitforresponse(14,16);
waitforresponse(3,1);
waitforresponse('asd','asd');
waitforresponse(3,'asd');
waitforresponse(true,true);
waitforresponse(true,3);

let compareTwo= (d) => {
    return new Promise((resolve, reject) => {
        if (typeof d=='number' && d>25){
            return resolve(d);
        }else{
        return reject()};
    })
};
let waitforresponseTwo=async(d)=>{
    try{
        let responseTwo=await compareTwo(d);
        console.log('The number',responseTwo,'is bigger than 25');
    }catch{
        console.error('ERROR');
    }
};
waitforresponseTwo(200);
waitforresponseTwo(13);

const arrayOne = ['red', 'blue', 'green'];

let upper_A0=()=>{
    if(typeof arrayOne[1]=='string'){
    arrayOne[1]=arrayOne[1].toUpperCase();
    arrayOne[0]=arrayOne[0].toUpperCase();
    arrayOne[2]=arrayOne[2].toUpperCase();
}};
upper_A0();

let compareThree=()=>{
    return new Promise((resolve,reject)=>{
        if (typeof arrayOne[0]==typeof arrayOne[2] && typeof arrayOne[0]==typeof arrayOne[1] && typeof arrayOne[1]==typeof arrayOne[2]){
            return resolve(arrayOne);
        }else{
            return reject();
        }
    })
};

let waitforresponseThree=async()=>{
    try{
    let responseThree=await compareThree(arrayOne);
    console.log(responseThree);
    }catch{
        console.error('ERROR');
    }
};
waitforresponseThree();
