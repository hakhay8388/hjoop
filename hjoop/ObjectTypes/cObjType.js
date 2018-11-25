var cObjType = Class(Object,
{
    ObjectTypeID: 0,
    ObjectName: "",
    constructor: function(String_ObjectName)
    {
        ObjectTypes.TypeList.Add(this);
        if (IsString(String_ObjectName))
        {
            this.ObjectTypeID = ObjectTypeIDCreater.GetID();
            this.ObjectName = String_ObjectName;
        }
        else
        {
            DebugAlert.Show("ObjType Class'ı Oluşturulurken Tür Uyuşmazlığı Saptandı..!");
        }
    }
     ,
    BaseObject: function()
    {
        return Object;
    }
    ,
    Destroy: function()
    {
        delete this.ObjectTypeID;
        delete this.ObjectName;        
    }
}, {});
