

var cObserverable = Class(cBaseObject,
{
    ObjectType: ObjectTypes.cObserverable
    ,
    constructor: function()
    {
        cObserverable.BaseObject.constructor.call(this);
        this.OnDisposed = new cDelegate(ObjectTypes.cFreeObject, false);       
        this.OnPrerender = new cDelegate(ObjectTypes.cFreeObject, false);
        this.OnClick = new cDelegate(ObjectTypes.cFreeObject, false);
		this.OnDoubleClick = new cDelegate(ObjectTypes.cFreeObject, false);
		this.OnMouseDown = new cDelegate(ObjectTypes.cFreeObject, false);
		this.OnMouseUp = new cDelegate(ObjectTypes.cFreeObject, false);
		this.OnMouseOver = new cDelegate(ObjectTypes.cFreeObject, false);
		this.OnMouseMove = new cDelegate(ObjectTypes.cFreeObject, false);
		this.OnMouseOut = new cDelegate(ObjectTypes.cFreeObject, false);
		this.OnKeyDown = new cDelegate(ObjectTypes.cFreeObject, false);
		this.OnPress = new cDelegate(ObjectTypes.cFreeObject, false);
		this.OnKeyUp = new cDelegate(ObjectTypes.cFreeObject, false);
		this.OnLoad = new cDelegate(ObjectTypes.cFreeObject, false);
		this.OnUnLoad = new cDelegate(ObjectTypes.cFreeObject, false);
		this.OnAbort = new cDelegate(ObjectTypes.cFreeObject, false);
		this.OnError = new cDelegate(ObjectTypes.cFreeObject, false);
		this.OnResize = new cDelegate(ObjectTypes.cFreeObject, false);
		this.OnScroll = new cDelegate(ObjectTypes.cFreeObject, false);
		this.OnSelect = new cDelegate(ObjectTypes.cFreeObject, false);
		this.OnChange = new cDelegate(ObjectTypes.cFreeObject, false);
		this.OnSubmit = new cDelegate(ObjectTypes.cFreeObject, false);
		this.OnReset = new cDelegate(ObjectTypes.cFreeObject, false);
		this.OnFocus = new cDelegate(ObjectTypes.cFreeObject, false);
        this.OnUnfocus = new cDelegate(ObjectTypes.cFreeObject, false);		
    }
    ,
    BaseObject: function()
    {
        return cBaseObject.prototype;
    }
	,
	BeforeDestroy: function ()
	{
	}
    ,
    Destroy: function()
    {
        this.OnDisposed.Destroy();
        delete this.OnDisposed;
        
        this.OnUnfocus.Destroy();
        delete this.OnUnfocus;

        this.OnPrerender.Destroy();
        delete this.OnPrerender;
        
        this.OnClick.Destroy();
        delete this.OnClick;
        
		this.OnDoubleClick.Destroy();
		delete this.OnDoubleClick;
		
		this.OnMouseDown.Destroy();
		delete this.OnMouseDown;
		
		this.OnMouseUp.Destroy();
		delete this.OnMouseUp;
		
		this.OnMouseOver.Destroy();
		delete this.OnMouseOver;
		
		this.OnMouseMove.Destroy();
		delete this.OnMouseMove;
		
		this.OnMouseOut.Destroy();
		delete this.OnMouseOut;
		
		this.OnKeyDown.Destroy();
		delete this.OnKeyDown;
		
		this.OnPress.Destroy();
		delete this.OnPress;
		
		this.OnKeyUp.Destroy();
		delete this.OnKeyUp;
		
		this.OnLoad.Destroy();
		delete this.OnLoad;
		
		this.OnUnLoad.Destroy();
		delete this.OnUnLoad;
		
		this.OnAbort.Destroy();
		delete this.OnAbort;
		
		this.OnError.Destroy();
		delete this.OnError;
		
		this.OnResize.Destroy();
		delete this.OnResize;
		
		this.OnScroll.Destroy();
		delete this.OnScroll;
		
		this.OnSelect.Destroy();
		delete this.OnSelect;
		
		this.OnChange.Destroy();
		delete this.OnChange;
		
		this.OnSubmit.Destroy();
		delete this.OnSubmit;
		
		this.OnReset.Destroy();
		delete this.OnReset;
		
		this.OnFocus.Destroy();
		delete this.OnFocus;
		
        cBaseObject.prototype.Destroy.call(this);        
    }


}, {});