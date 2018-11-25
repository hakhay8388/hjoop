
var cDelegateFunctionItem = Class(Object,
{
    Sender : null
    , m_Processed : false
    ,
    constructor: function(_Sender, _Function)
    {
        this.Sender = _Sender;
        if (JSTypeOperator.IsFunction(_Function))
        {
            this.FunctionObject = _Function;
        }
        else
        {
            DebugAlert.Show("Delegate Nesnesine Fonksiyon Dışı Obje Ekleme İsteği Yapıldı..!");
        }
    }
	,
	Processed : function(_Value)
	{
		if (IsDefined(_Value))
		{
			this.m_Processed = _Value;
		}
		else
		{
			return this.m_Processed; 
		}
	}
    ,    
    FunctionObject: function()
    {
        DebugAlert.Show("cDelegateFunctionItem Nesnesine Constructor'da Fonksiyon Atanmamış..!"); 
    }
    ,
    BaseObject: function()
    {
        return Object;
    }
    ,
    Destroy: function()
    {
        delete this.Sender;
        delete this.m_Processed;
        cBaseObject.prototype.Destroy.call(this);        
    }
}, {});
