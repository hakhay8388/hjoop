


var cElementLifeCycle = Class(cBaseWebControl,
{
	ObjectType: ObjectTypes.cElementLifeCycle
	, OnCreate : null
	, OnDestroy : null
	,
	constructor: function (_ElementID, _OnCreate, _OnDestroy)
	{	
		cElementLifeCycle.BaseObject.constructor.call(this, _ElementID, true, false);
		this.OnCreate = _OnCreate;
		this.OnDestroy = _OnDestroy;
		if (IsFunction(this.OnCreate))
		{
			this.OnCreate.call(this.JQlement);
		}
	}
	,
	BaseObject: function ()
	{
		return cBaseWebControl.prototype;
	},
	SafeDestroy: function()
	{
		if (IsFunction(this.OnDestroy))
		{
			this.OnDestroy.call(this.JQlement);
		}
		cBaseWebControl.prototype.SafeDestroy.call(this);
	}
	,
	Destroy: function ()
	{
		cBaseWebControl.prototype.Destroy.call(this);
	}
}, {});




