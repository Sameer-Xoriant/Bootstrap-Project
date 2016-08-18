//post_ad.js
function navigation()
{
    var x = document.getElementById("topNav");
    if (x.className === "topnav")
    {
        x.className += " responsive";
    }
    else
    {
        x.className = "topnav";
    }
}
/*
var ads = [{adid: 1, ptitle: "Samsung Galaxy Note 5", desc: "Android Phone", price:30000.00, loc:"Thane", cat:"Electronics", img: "./images/Samsung1.jpg", poster:"mitra.thakker@xoriant.com", posted: "Wed Aug 10 2016"},
{adid: 2, ptitle: "Mercedes C250D", desc: "2014 model, total run 5000 km", price:1000000.00, loc:"Mumbai", cat:"Automobile", img: "./images/merc.jpg", poster:"mitra.thakker@xoriant.com", posted: "Thu Aug 11 2016"},
{adid: 3, ptitle: "Black hat", desc: "Plain, cowboy hat", price:500.00, loc:"Delhi", cat:"Fashion", img: "./images/hat.jpg", poster:"arushi.saxena@xoriant.com", posted: "Thu Aug 11 2016"},
{adid: 4, ptitle: "Office Chair", desc: "Black office chair , cushioned, with back rest", price:2000.00, loc:"Pune", cat:"Furnishing", img: "./images/chair.jpg", poster:"arushi.saxena@xoriant.com", posted: "Fri Aug 12 2016"},
{adid: 5, ptitle: "Samsung Galaxy Note 6", desc: "Android Phone", price:50000.00, loc:"Pune", cat:"Electronics", img: "./images/Samsung2.jpg", poster:"sameer.shanbhag@xoriant.com", posted: "Fri Aug 12 2016"}];
localStorage.setItem("advs", JSON.stringify(ads));*/

var ads = JSON.parse(localStorage.getItem("advs"));
var c = ads.length;

function viewAds()
{
	document.getElementById("sam").innerHTML = "";
	for (var i = 0; i < ads.length; i++)
	{
	document.getElementById("sam").innerHTML +=
	"<tr><td rowspan='6'><img src='" + ads[i].img +
	"' height='auto' width='300px'></td>" +
	"<td style='font-size: 1.1em;'><strong>"+ ads[i].ptitle + "</strong></td></tr><tr><td>" + ads[i].desc +
	"</td></tr><tr><td>Rs."  + ads[i].price + "</td></tr>" +
	"</tr><tr><td>"  + ads[i].loc + "</td></tr>" +
	"<tr><td>Posted by: "  + ads[i].poster + "</td></tr>" +
	"<tr><td>Posted on: "  + ads[i].posted + "</td></tr>";
	}
}

function sortByPriceA()
{
	ads.sort(function(a,b){ return a.price - b.price});
	viewAds();
}

function sortByPriceD()
{
	ads.sort(function(a,b){ return b.price - a.price});
	viewAds();
}

function sortByLatest()
{
	ads.sort(function(a,b){ return b.adid - a.adid});
	viewAds();
}

function displayDate()
{
	var d = new Date();
	var n = d.toString().split(" ");
	return n[0] + " " + n[1] + " " + n[2] + " " + n[3];
}
function postAd()
{
	var nptitle = document.getElementById("ptitle").value;
	var ndesc = document.getElementById("desc").value;
	var nprice = parseFloat(document.getElementById("price").value);
	var nloc = document.getElementById("loc").value;
	var ncat = document.getElementById("cat").value;
	var nimg = document.getElementById("img").value;
	var np = localStorage.getItem("cuser2");
	var nd = displayDate();
	var val = "Invalid value(s)!\nMake sure you have:\n1. Title\n2. Description\n3. Location\n4. Price is more than Rs. 0";
	if(nptitle.length == 0 || nloc.length == 0 || ndesc.length == 0 || nprice <= 0)
	{
		alert(val);
	}
	else
	{
		nadid = ++c;
		ads.push({adid: nadid, ptitle: nptitle, desc: ndesc, price: nprice, loc: nloc, cat: ncat, img: nimg, poster: np, posted: nd});
		localStorage.setItem("advs", JSON.stringify(ads));
		sortByLatest();
	}
}

function sam(nameKey, ads){
    document.getElementById("sam").innerHTML = "<tr><td colspan='2' align='center'>Some of the Ads Matching Your Search</td></tr><br>";
    var flag = false;
    for (var i=0; i < ads.length; i++) {
        if(ads[i].ptitle.toLowerCase().search(nameKey) >= 0)
        {   
            flag = true;
            document.getElementById("sam").innerHTML += "<tr><td rowspan='4'><img src='" + ads[i].img + "' height='auto' width='200px'></td>" + "<td> "+ ads[i].ptitle + "</td></tr><tr><td>" + ads[i].desc + "</td></tr><tr><td>Rs."  + ads[i].price + "</td></tr>" + "<tr><td>"  + ads[i].loc + "</td></tr>";
        }
        else if(ads[i].loc.toLowerCase().search(nameKey) >= 0)
        {
            flag = true;
            document.getElementById("sam").innerHTML += "<tr><td rowspan='4'><img src='" + ads[i].img + "' height='auto' width='200px'></td>" + "<td> "+ ads[i].ptitle + "</td></tr><tr><td>" + ads[i].desc + "</td></tr><tr><td>Rs."  + ads[i].price + "</td></tr>" + "<tr><td>"  + ads[i].loc + "</td></tr>";
        }
        else if(ads[i].desc.toLowerCase().search(nameKey) >= 0)
        {
            flag = true;
            document.getElementById("sam").innerHTML += "<tr><td rowspan='4'><img src='" + ads[i].img + "' height='auto' width='200px'></td>" + "<td> "+ ads[i].ptitle + "</td></tr><tr><td>" + ads[i].desc + "</td></tr><tr><td>Rs."  + ads[i].price + "</td></tr>" + "<tr><td>"  + ads[i].loc + "</td></tr>";
        }
    }
   if (!flag)
   {
        document.getElementById("sam").innerHTML = "No results found. Please try another keyword!";
   }
   document.getElementById("sam").innerHTML += "</strong>";
}

//Search Bar

function searchBar()
{
	var string1 = document.getElementById("searcher").value;
	if (string1 != "")
	{
		var str1 = string1.toLowerCase();
		var resultObject = sam(str1,ads);
	}
}

function logout()
{
	localStorage.removeItem("cuser1");
}

function profiler()
{
	document.getElementById("profile").innerHTML = "Hello " +
	localStorage.getItem("cuser1");
}
function checklog()
{
	if(localStorage.getItem("cuser1"))
	{
		window.location = "./post_ad.html";
		localStorage.removeItem("f");
	}
	else
	{
		window.location = "./login.html";
	}
}