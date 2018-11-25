


var cBodyWindow = Class(cBaseWebControl,
{
	ObjectType: ObjectTypes.cBodyWindow
	,
	constructor: function ()
	{	
		cBodyWindow.BaseObject.constructor.call(this, "body", false, false);
	}
	,
	BaseObject: function ()
	{
		return cBaseWebControl.prototype;
	},
	Destroy: function ()
	{
		cBaseWebControl.prototype.Destroy.call(this);
	}
}, {});




