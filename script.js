function fibonacci(num) {
	let n1 = 0;
	let n2 = 1;
	if(num==1){
	    return n1;
	}else if(num==2){ return n1+n2; }
	else if(num==0){ return "Invalid number" }
	else{
    	let n3 = 0;
    	for(let i=3; i<=num; i++){	
    		n3 = n1+n2;
    		n1 = n2;
    		n2 = n3;
    	}
    	return n3;
	}
}

module.exports = fibonacci;
