


var cMainWindow = Class(cObserverable,
{
	ObjectType: ObjectTypes.cMainWindow
	, JQlement : null
	,
	constructor: function ()
	{	
		cMainWindow.BaseObject.constructor.call(this);
		this.JQlement = $(document);
		this.ConnectDOMEvents();	
		
		this.OnEnterDown = new cDelegate(ObjectTypes.cFreeObject, false);
		this.OnEscDown = new cDelegate(ObjectTypes.cFreeObject, false);
		
		this.OnPress.Add(this, this.____OnKeyPressFunc);
	}
	,
	____OnKeyPressFunc: function(_Event)
	{
		if (_Event.keyCode == 13)
		{
			this.OnEnterDown.Run(_Event);
		}
		if (_Event.keyCode == 27)
		{
			this.OnEscDown.Run(_Event);
		}
	}	
	,
	ConnectDOMEvents: function ()
	{
		this.JQlement.keypress(new EventHandlerFunction(this.OnPress));
		this.JQlement.resize(new EventHandlerFunction(this.OnResize));
		this.JQlement.scroll(new EventHandlerFunction(this.OnScroll));
		this.JQlement.change(new EventHandlerFunction(this.OnChange));
	}
	,
	DisconnectDOMEvents: function ()
	{
		this.JQlement.unbind("keypress");
		this.JQlement.unbind("onresize");
		this.JQlement.unbind("scroll");
		this.JQlement.unbind("change");
	}	
	,
	Connect_VK_Enter : function(_This, _Function)
	{
		this.OnEnterDown.Add(_This, _Function);
	}
	,
	Disconnect_VK_Enter : function(_Function)
	{
		this.OnEnterDown.Remove(_Function);
	}
	,
	BaseObject: function ()
	{
		return cObserverable.prototype;
	},
	Destroy: function ()
	{
		cObserverable.prototype.Destroy.call(this);
	}
	,
	GetScreensize : function ()
	{
		return Utils.GetScreensize();
	}
	,
	GetBrowserSize :function ()
	{
		Utils.GetBrowserSize();
	}
}, {});




