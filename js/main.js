//Search Data
var ads = JSON.parse(localStorage.getItem("advs"));
//Search Function

function sam(nameKey, ads)
{
	var flag = false;
	for (var i=0; i < ads.length; i++) {
		if(ads[i].ptitle.toLowerCase().search(nameKey) >= 0)
		{   
			flag = true;
			document.getElementById("sam").innerHTML += "<tr><td rowspan='6'><img src='" + ads[i].img + "' height='200px' width='auto' style='margin-right:10px;'></td>" + "<td><strong>"+ ads[i].ptitle + "</strong></td></tr><tr><td>" + ads[i].desc + "</td></tr><tr><td>Rs."  + ads[i].price + "</td></tr>" + "<tr><td>"  + ads[i].loc + "</td></tr>" + "<tr><td>"  + ads[i].poster + "</td></tr>" + "<tr><td>"  + ads[i].posted + "</td></tr>";
		}
		else if(ads[i].loc.toLowerCase().search(nameKey) >= 0)
		{
			flag = true;
			document.getElementById("sam").innerHTML += "<tr><td rowspan='6'><img src='" + ads[i].img + "' height='200px' width='auto' style='margin-right:10px;'></td>" + "<td><strong>"+ ads[i].ptitle + "</strong></td></tr><tr><td>" + ads[i].desc + "</td></tr><tr><td>Rs."  + ads[i].price + "</td></tr>" + "<tr><td>"  + ads[i].loc + "</td></tr>" + "<tr><td>"  + ads[i].poster + "</td></tr>" + "<tr><td>"  + ads[i].posted + "</td></tr>";
		}
		else if(ads[i].desc.toLowerCase().search(nameKey) >= 0)
		{
			flag = true;
			document.getElementById("sam").innerHTML += "<tr><td rowspan='6'><img src='" + ads[i].img + "' height='200px' width='auto' style='margin-right:10px;'></td>" + "<td><strong>"+ ads[i].ptitle + "</strong></td></tr><tr><td>" + ads[i].desc + "</td></tr><tr><td>Rs."  + ads[i].price + "</td></tr>" + "<tr><td>"  + ads[i].loc + "</td></tr>" + "<tr><td>"  + ads[i].poster + "</td></tr>" + "<tr><td>"  + ads[i].posted + "</td></tr>";
		}
	}
   if (!flag)
   {
		document.getElementById("sam").innerHTML = "<strong>No results found. Please try another keyword!";
   }
   document.getElementById("sam").innerHTML += "</strong>";
}

//Search Bar

function searchBar(ser)
{
	var string1 = ser.slice(7);
	var s = string1.split("+");
	for (var i = 0; i < s.length; i++)
	{
		if (s[i] != "")
		{
			document.getElementById("sam").innerHTML = "<tr><td colspan='2' align='center'><strong>Some of the Ads Matching Your Search</strong></td></tr><br>";
			var str1 = s[i].toLowerCase();
			var resultObject = sam(str1,ads);
		}
	}
}

function getNavUrl()
{
	//Get Url
	return window.location.search.replace("?", "");
};
function getParameters(url)
{
	//Params obj
	var params = {};
	//To lowercase
	url = url.toLowerCase();
	//To array
	url = url.split('&');
	//Iterate over url parameters array
	var length = url.length;
	for(var i=0; i<length; i++)
	{
		//Create prop
		var prop = url[i].slice(0, url[i].search('='));
		//Create Val
		var value = url[i].slice(url[i].search('=')).replace('=', '');
		//Params New Attr
		params[prop] = value;
	}
	return params;
};
console.log(getParameters(getNavUrl()));