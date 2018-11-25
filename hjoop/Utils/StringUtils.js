
function StringUtils()
{
}

StringUtils.SubString = function (_Text, _StartIndex, _Count)
{
	var __String = _Text.substring(_StartIndex, _StartIndex + _Count);
	return __String;
}

StringUtils.ReplaceTurkishChars = function (_Text)
{
	for (var i = 0; i < Language.ReplaceChars.length;i+=2)
	{
		while (_Text.indexOf(Language.ReplaceChars[i]) > -1)
		{
			_Text = _Text.replace(Language.ReplaceChars[i],Language.ReplaceChars[i + 1]);
		}	
	}
	return _Text;
}

