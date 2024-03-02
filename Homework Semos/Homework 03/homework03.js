console.info('Homework2-JavaScript');
console.warn('Proceed with caution!');
console.time('Homework2');

let x=2;
let y=16;
let q=15;
let v=x+y;

console.log(v);

let i=y-x;
let t=x*y;
let r=y/x;
let u=q%x;
let p=x+y+1;
let b=y-x-4;
let c=y*x-q;

x--;
y++;

console.log(i);
console.log(t);
console.log(r);
console.log(u);
console.log(p);
console.log(b);
console.log(x);
console.log(y);
console.log(-c);

x=6;
z=7;
p='7';

console.log('does x equals z',x==z);
console.log('does p equals z',p==z);
console.log('does p equals z',p===z);
console.log('p does not equals z',p!=z);
console.log('z does not equals x',z!==x);
console.log('does z equals p',z!==p);
console.log('does x is bigger than z',x>z);
console.log('does x is smaller or equal to p',x<=p);

x=500;
y=300;

console.log(x>100 && y<500);
console.log(x<=3 || y<400);
console.log(!(x>100 && y<500));
console.log(!(x<=3 || y<400));

console.table([x,y,c]);
console.dir(location);
console.log(location);

console.error('This is a fake error');

setTimeout(() => {
    console.timeEnd('Homework2');    
}, 3000);
setTimeout(() => {
    console.clear('Homework2');
}, 20000);