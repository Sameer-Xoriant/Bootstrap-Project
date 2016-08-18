var electronics = new Array( "Mobile", "Home Appliancs", "Laptop", "Laptop Accessories");
var personalCare = new Array("Nutrition", "Skin Care", "Home Care", "Hair Care");
var fashion = new Array( "Hands Bands", "Shirts", "T-Shirts", "Hoodies", "Mens Footware", "Kurta");
var automobiles = new Array( "Cars", "SUV", "MUV", "Hummer", "Truck", "Tempo");
var furnishing = new Array( "Table", "Sofa", "Chair", "Bed", "Cupboard");
var groceries = new Array( "Table", "Sofa", "Chair", "Bed", "Cupboard");

function showElec(){
	document.write("<ul>");
	for (i=0;i<electronics.length;i++)
		{
			document.write("<li>");
		 	document.write(electronics[i] + "<br >");
		 	document.write("</li>");
		}
	document.write("</ul>");
}

function showPc(){
	document.write("<ul>");
	for (i=0;i<personalCare.length;i++)
		{
			document.write("<li>");
		 	document.write(personalCare[i] + "<br >");
		 	document.write("</li>");
		}
	document.write("</ul>");
}

function showFashion(){
	document.write("<ul>");
	for (i=0;i<fashion.length;i++)
		{
			document.write("<li>");
		 	document.write(fashion[i] + "<br >");
		 	document.write("</li>");
		}
	document.write("</ul>");
}

function showAutomobiles(){
	document.write("<ul>");
	for (i=0;i<automobiles.length;i++)
		{
			document.write("<li>");
		 	document.write(automobiles[i] + "<br >");
		 	document.write("</li>");
		}
	document.write("</ul>");
}

function showFurnishing(){
	document.write("<ul>");
	for (i=0;i<furnishing.length;i++)
		{
			document.write("<li>");
		 	document.write(furnishing[i] + "<br >");
		 	document.write("</li>");
		}
	document.write("</ul>");
}

function showGroc(){
	document.write("<ul>");
	for (i=0;i<groceries.length;i++)
		{
			document.write("<li>");
		 	document.write(groceries[i] + "<br >");
		 	document.write("</li>");
		}
	document.write("</ul>");
}