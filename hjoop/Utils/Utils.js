
function Utils()
{
}

Utils.SubString = function (_Text, _StartIndex, _Count)
{
	var __String = _Text.substring(_StartIndex, _StartIndex + _Count);
	return __String;
}

Utils.GetScreensize = function ()
{
	var __ScreenWidth = 1024;
	var __ScreenHeight = 768;
	if (parseInt(navigator.appVersion)>3) 
	{
		__ScreenWidth = screen.width;
		__ScreenHeight = screen.height;
	}
	else if (navigator.appName == "Netscape" && parseInt(navigator.appVersion)==3 && navigator.javaEnabled()) 
	{
		var __jToolkit = java.awt.Toolkit.getDefaultToolkit();
		var __jScreenSize = __jToolkit.getScreenSize();
		__ScreenWidth = __jScreenSize.width;
		__ScreenHeight = __jScreenSize.height;
	}
	var __Result = 
	{	
		Width:__ScreenWidth,
		Height:__ScreenHeight	
	}
	return __Result;
}


Utils.GetBrowserSize = function ()
{
	var __WindowWidth = 1080;
	var __WindowHeight = 748;
	if (parseInt(navigator.appVersion)>3) 
	{
		if (navigator.appName=="Netscape") 
		{
			__WindowWidth = window.innerWidth;
			__WindowHeight = window.innerHeight;
		}
		if (navigator.appName.indexOf("Microsoft")!=-1) 
		{
			__WindowWidth = document.body.offsetWidth;
			__WindowHeight = document.body.offsetHeight;
		}
	}
	
	var __Result = 
	{	
		Width:__WindowWidth,
		Height:__WindowHeight	
	}
	return __Result;
}

Utils.HideLayer = function(_LayerID)
{
	var __Ctrl = document.getElementById(_LayerID);
	__Ctrl.style.display = 'none';
}


Utils.IsChildOf = function (_ParentElement, _ChildElement)
{
	if( _ChildElement != null ) 
	{			
		while( _ChildElement.parentNode ) 
		{
			if((_ChildElement = _ChildElement.parentNode) == _ParentElement) 
			{
				return true;
			}
		}
	}
	return false;
}

Utils.Element = function(_Id)
{
	var __Object = document.getElementById(_Id);
	return __Object;
}

Utils.ConvertParsedDateToTimestamp = function(_Day, _Month, _Year)
{
	var __DateString = _Month + "/" + _Day + "/" + _Year; 
	var __Birtday = new Date(__DateString);  
	return (new Date(__Birtday)).getTime();
}


Utils.IsEmail = function(_Value)
{
	var __Pattern=/^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
    return __Pattern.test(_Value);
        
}

Utils.SelectComboboxByText = function(_ID, _Value)
{
	var __DropDownList = document.getElementById(_ID);
	for(var i=0; i<__DropDownList.options.length; i++) 
	{
		if ( __DropDownList.options[i].text == _Value ) 
		{
			__DropDownList.selectedIndex = i;
		    break;
		}
	}        
}

Utils.ConvertStringDateToTimestamp = function(_DateString)
{
	var __Numbers = _DateString.match(/\d+/g); 
	return Utils.ConvertParsedDateToTimestamp(__Numbers[0], __Numbers[1], __Numbers[2]);
}


Utils.MakeID = function (_Length)
{
    var __Text = "";
    //var __Possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var __Possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for( var i=0; i < _Length; i++ )
    	__Text += __Possible.charAt(Math.floor(Math.random() * __Possible.length));

    return __Text;
}




