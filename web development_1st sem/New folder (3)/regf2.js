	 
// alert("HEll YEah")
// function Geek()
// {
// 	var name = document.forms["RegForm"]["Name"].value
// 	alert(name);
// 	return true;
// }						 
function GEEKFORGEEKS()
{ 
	var name = document.forms["RegForm"]["Name"];			 
	var email = document.forms["RegForm"]["Email"]; 
	var phone = document.forms["RegForm"]["Mobile"]; 
	var password = document.forms["RegForm"]["Password"]; 
	var c_password = document.forms["RegForm"]["ConfirmP"]; 
	 
	
	if (name.value == "")								 
	{ 
		window.alert("Please enter your name."); 
		name.focus(); 
		return false; 
	} 
	
	if (email.value == "")								 
	{ 
		window.alert("Please enter a valid e-mail address."); 
		email.focus(); 
		return false; 
	} 

	if (email.value.indexOf("@", 0) < 0)				 
	{ 
		window.alert("Please enter a valid e-mail address."); 
		email.focus(); 
		return false; 
	} 

	if (email.value.indexOf(".", 0) < 0)				 
	{ 
		window.alert("Please enter a valid e-mail address."); 
		email.focus(); 
		return false; 
	} 

	if (phone.value == "")						 
	{ 
		window.alert("Please enter your telephone number."); 
		phone.focus(); 
		return false; 
	} 

	if (password.value == "")					 
	{ 
		window.alert("Please enter your password"); 
		password.focus(); 
		return false; 
	} 
	if (c_password.value != password.value)					 
	{ 
		window.alert("Please enter Same password"); 
		c_password.focus(); 
		return false; 
	}

	alert("Login Successful");
	return true; 
}
	