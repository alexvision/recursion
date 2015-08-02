// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
	var results = [];
	var elements = document.children; 

	var classFinder = function(elements){
		for(var i  = 0; i < elements.length; i++){
			if(elements[i].classList){
				console.log("found classes: ", elements[i].classList);
				for(var index = 0; index < elements[i].classList.length; index++){
					if(elements[i].classList[index] === className){
						results.push(elements[i]);
					}	
				}
			}
			if(elements[i].hasChildNodes){
				console.log("Recursion Elements:", elements[i].children)
				classFinder(elements[i].children);
			}
		};
	}
	classFinder(elements);
	return results;

};

// //***NOT WORKING - Attempt at removing the inner function***
// var getElementsByClassName = function(className, results, currentElements){
// 	results = results || [];
// 	console.log("Results: ", results);
// 	elements = currentElements || document.childNodes; 
// 	console.log("Elements: ", elements);

// 		for(var i  = 0; i < elements.length; i++){
// 			console.log("ClassList: ", elements[i].classList);
// 			if(elements[i].classList){
// 				console.log("found classes: ", elements[i].classList);
// 				for(var index = 0; index < elements[i].classList.length; index++){
// 					console.log("Current element's class: ", elements[i].classList[index]);
// 					if(elements[i].classList[index] === className){
// 						console.log("Found One!!!")
// 						results.push(elements[i]);
// 						console.log("The results array currently is: ",results);
// 					}	
// 				}
// 			}
// 			if(elements[i].hasChildNodes){
// 				console.log("Recursion Elements:", elements[i].childNodes)
// 				getElementsByClassName(className, results, elements[i].childNodes);
// 			}
// 		};
	
	
// 	return results;

// };
