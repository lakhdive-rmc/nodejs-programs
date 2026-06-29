function isEven(n){
return n%2===0;
}
function isOdd(n){
return n%2===1;
}
function isPrime(n){
for(var i=2;i<n;i++)
{
	if(n%i===0)
		return false;
}
return true;
}
exports.isEven=isEven;
exports.isOdd=isOdd;
exports.isPrime=isPrime;