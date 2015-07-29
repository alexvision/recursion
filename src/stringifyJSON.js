// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	var stringified = {};

	if(typeof(obj) === 'number' ||
		typeof(obj) === 'boolean')
	{
		return "" + obj;
	} 
	else if(obj === null)
	{
		return 'null';
	} 
	else if(typeof(obj) === 'string')
	{
		return '"' + obj + '"';
	}
	else if(typeof(obj) === 'function' ||
			typeof(obj) === 'undefined')
	{
		return;
	}
	else if(Array.isArray(obj)){
		var temp = [];
		for(var i = 0; i < obj.length; i++){
			temp.push(stringifyJSON(obj[i]));
		}	
		return '[' + temp + ']';
	}
	else if(typeof(obj) === 'object'){
		var temp = '';
		for(key in obj){
			var length = Object.keys(obj).length
			if(length === 1){
				temp = temp.concat(stringifyJSON(key) + ":" + (stringifyJSON(obj[key])));
			}
			else if (stringifyJSON(obj[key]) === undefined){
			}
			else{
				temp = temp.concat(stringifyJSON(key) + ":" + (stringifyJSON(obj[key]))+ ",");
			}
		}
		if (length > 1 && temp !== ''){
			temp = temp.slice(0, - 1);
		}
		return "{" + temp + "}";
	}
};
