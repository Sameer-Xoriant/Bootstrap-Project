/*var arr = [{uname:"Mitra", email: "mitra.thakker@xoriant.com", pass:"123"},
{uname: "Sameer", email: "sameer.shanbhag@xoriant.com", pass:"456"},
{uname: "Arushi", email: "arushi.saxena@xoriant.com", pass:"789"}];
localStorage.setItem("users", JSON.stringify(arr));*/
var users = JSON.parse(localStorage.getItem("users"));

function validateEmail(x)
{
	var at = x.indexOf("@");
	var dot = x.lastIndexOf(".");
	if (at<1 || dot<at+2 || dot+2>=x.length)
	{
		return false;
	}
	else
	{
	return true;
	}
}

function login1()
{
	var user = document.getElementById("user").value;
	var pass = document.getElementById("pass").value;
	var f = false;
	for (var i = 0; i < users.length; i++)
	{
		if(user == users[i].email && pass == users[i].pass && user.length > 1 && pass.length > 1)
		{
			var cuser1 = users[i].uname;
			var cuser2 = users[i].email;
			localStorage.setItem("cuser1", cuser1);
			localStorage.setItem("cuser2", cuser2);
			window.location = "./post_ad.html";
			f = false;
			break;
		}
		else
		{
			f = true;
		}
	}
	if(f)
	{
		document.getElementById("loginval").innerHTML = "Invalid credentials!";
	}
}

function viewUsers()
{
	document.getElementById("sam").innerHTML = "";
	for (var i = 0; i < users.length; i++)
	{
		document.getElementById("sam").innerHTML +=
		"<tr><td>" + users[i].uname +
		"</td><td>" + users[i].email + "</td></tr>";
	}
}

function signup1()
{
	var uname1 = document.getElementById("unamer").value;
	var email1 = document.getElementById("userr").value;
	var pass1 = document.getElementById("passr1").value;
	var pass2 = document.getElementById("passr2").value;
	if(uname1.length < 1)
	{
		document.getElementById("uvalr").innerHTML = "Please enter User Name...";
		document.getElementById("evalr").innerHTML = "";
		document.getElementById("pvalr1").innerHTML = "";
		document.getElementById("pvalr2").innerHTML = "";
		return false;
	}
	else if(!validateEmail(email1))
	{
		document.getElementById("uvalr").innerHTML = "";
		document.getElementById("evalr").innerHTML = "Please enter valid email ID...";
		document.getElementById("pvalr1").innerHTML = "";
		document.getElementById("pvalr2").innerHTML = "";
		return false;
	}
	else if(pass1.length < 8)
	{
		document.getElementById("uvalr").innerHTML = "";
		document.getElementById("evalr").innerHTML = "";
		document.getElementById("pvalr1").innerHTML = "Password must be more than 8 characters";
		document.getElementById("pvalr2").innerHTML = "";
		return false;
	}
	else if(pass1 != pass2)
	{
		document.getElementById("uvalr").innerHTML = "";
		document.getElementById("evalr").innerHTML = "";
		document.getElementById("pvalr1").innerHTML = "";
		document.getElementById("pvalr2").innerHTML = "Passwords don't match!!!";
		return false;
	}
	else
	{
		if(localStorage.getItem("users"))
		{
			var arr = JSON.parse(localStorage.getItem("users"));
			for (var i = 0; i < arr.length; i++)
			{
				if(arr[i].email === email1)
				{
					document.getElementById("uvalr").innerHTML = "";
					document.getElementById("evalr").innerHTML = "User Exists!!!";
					document.getElementById("pvalr1").innerHTML = "";
					document.getElementById("pvalr2").innerHTML = "";
					return false;
				}
			}
			arr.push({uname: uname1, email:email1, pass:pass1});
			localStorage.setItem("users", JSON.stringify(arr));
			window.location = "./login.html";
		}
		else
		{
			localStorage.setItem("users", JSON.stringify(arr));
		}
	}
	
}