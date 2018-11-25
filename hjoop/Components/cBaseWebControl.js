var cBaseWebControl = Class(cObserverable,
{
	ObjectType: ObjectTypes.cBaseWebControl
	, JQlement: null
	, DOMElement : null
	, ComponentID : ""
	, Destroyed : false
	,
	constructor: function (_ElementID, _NeedGC, _ConnectToEvent)
	{
		cBaseWebControl.BaseObject.constructor.call(this);
		this.JQlement = $(_ElementID);
		this.ComponentID = this.JQlement.attr('id');
		this.DOMElement = document.getElementById(this.ComponentID);
		if(_ConnectToEvent)
		{
			this.ConnectDOMEvents();
		}
		this.Destroyed = false;
		if (_NeedGC)
		{
			this.GC();
		}
	}
	,
	DomIsExists : function()
	{
		if (this.DOMElement == document.getElementById(this.ComponentID))
		{
			return true;
		}
		else
		{
			this.SafeDestroy();
			return false;
		}
	}
	,
	GC : function()
	{
		if (!this.Destroyed)
		{
			if (this.DomIsExists())
			{
				var _this = this;
				setTimeout(function () { _this.GC(); }, 2000);
			}
		}
	}
	,
	ConnectDOMEvents: function ()
	{
		this.JQlement.click(new EventHandlerFunction(this.OnClick));
		this.JQlement.dblclick(new EventHandlerFunction(this.OnDoubleClick));
		this.JQlement.mousedown(new EventHandlerFunction(this.OnMouseDown));
		this.JQlement.mouseup(new EventHandlerFunction(this.OnMouseUp));
		this.JQlement.mouseover(new EventHandlerFunction(this.OnMouseOver));
		this.JQlement.mousemove(new EventHandlerFunction(this.OnMouseMove));
		this.JQlement.mouseout(new EventHandlerFunction(this.OnMouseOut));
		this.JQlement.keydown(new EventHandlerFunction(this.OnKeyDown));
		this.JQlement.keypress(new EventHandlerFunction(this.OnPress));
		this.JQlement.keyup(new EventHandlerFunction(this.OnKeyUp));
		this.JQlement.load(new EventHandlerFunction(this.OnLoad));
		this.JQlement.unload(new EventHandlerFunction(this.OnUnLoad));
		this.JQlement.error(new EventHandlerFunction(this.OnError));
		this.JQlement.resize(new EventHandlerFunction(this.OnResize));
		this.JQlement.scroll(new EventHandlerFunction(this.OnScroll));
		this.JQlement.select(new EventHandlerFunction(this.OnSelect));
		this.JQlement.change(new EventHandlerFunction(this.OnChange));
		this.JQlement.submit(new EventHandlerFunction(this.OnSubmit));
		this.JQlement.focus(new EventHandlerFunction(this.OnFocus));
		this.JQlement.blur(new EventHandlerFunction(this.OnUnfocus));
	}
	,
	DisconnectDOMEvents: function ()
	{
		this.JQlement.unbind("click");
		this.JQlement.unbind("dblclick");
		this.JQlement.unbind("mousedown");
		this.JQlement.unbind("mouseup");
		this.JQlement.unbind("mouseover");
		this.JQlement.unbind("mousemove");
		this.JQlement.unbind("mouseout");
		this.JQlement.unbind("keydown");
		this.JQlement.unbind("keypress");
		this.JQlement.unbind("keyup");
		this.JQlement.unbind("load");
		this.JQlement.unbind("unload");
		this.JQlement.unbind("abort");
		this.JQlement.unbind("error");
		this.JQlement.unbind("onresize");
		this.JQlement.unbind("scroll");
		this.JQlement.unbind("select");
		this.JQlement.unbind("change");
		this.JQlement.unbind("submit");
		this.JQlement.unbind("reset");
		this.JQlement.unbind("focus");
		this.JQlement.unbind("blur");
	}
	,
	BaseObject: function ()
	{
		return cObserverable.prototype;
	}
	,
	BeforeDestroy: function ()
	{
		this.DisconnectDOMEvents();
	}
	,
	SafeDestroy: function()
	{
		this.Destroyed = true;
		this.BeforeDestroy();
		var _this = this;
		setTimeout(function () { _this.Destroy(); }, 10000);
	}
	,
	Destroy: function ()
	{
		cObserverable.prototype.Destroy.call(this);
	}
}, {});





