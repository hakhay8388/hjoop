ObjectTypeIDCreater = function()
{
}


ObjectTypeIDCreater.ID = 0;
ObjectTypeIDCreater.GetID = function () {
	ObjectTypeIDCreater.ID++;
	return ObjectTypeIDCreater.ID;
}


ObjectTypes = function()
{
}


ObjectTypes.TypeList = new cListForBase();


ObjectTypes.Get = function (_Name)
{
  for (var i = 0; i < ObjectTypes.TypeList.Count(); i++)
  {
    if (ObjectTypes.TypeList.GetItem(i).ObjectName === _Name)
    {
      return ObjectTypes.TypeList.GetItem(i);
    }
  }

  var __EvalString = "ObjectTypes." + _Name + " = new cObjType(\"" + _Name + "\");";
  eval(__EvalString);
  var __Result = null;
  __EvalString = "__Result = ObjectTypes." + _Name;
  eval(__EvalString);
  return __Result;
}



//********************* Javascript Value Types **************
ObjectTypes.Javascript_Number = new cObjType("number");
ObjectTypes.Javascript_String = new cObjType("string");
ObjectTypes.Javascript_Bool = new cObjType("boolean");
ObjectTypes.Javascript_Undefined = new cObjType("undefined");
ObjectTypes.Javascript_Function = new cObjType("function");
ObjectTypes.Javascript_Object = new cObjType("object");
//***********************************************************

//********************* Genereal Object *******************
ObjectTypes.cObjType = new cObjType("cObjType");
ObjectTypes.cBaseObject = new cObjType("cBaseObject");
ObjectTypes.cList = new cObjType("cList");
ObjectTypes.cDelegate = new cObjType("cDelegate");
ObjectTypes.cTimer = new cObjType("cTimer");
ObjectTypes.cObserverable = new cObjType("cObserverable");
ObjectTypes.cFreeObject = new cObjType("cFreeObject");
ObjectTypes.cSocket = new cObjType("cSocket");
//***********************************************************

//********************* Web Value Types *******************
ObjectTypes.cBaseValueType = new cObjType("cBaseValueType");
ObjectTypes.Integer = new cObjType("Integer");
ObjectTypes.Double = new cObjType("Double");
ObjectTypes.cString = new cObjType("cString");
ObjectTypes.Bool = new cObjType("Bool");
//***********************************************************



//********************** Web Componenet *****************


ObjectTypes.cBaseWebControl = new cObjType("cBaseWebControl");
//////////////////////////////////////////////////////////////////

//******************** USER ****************************************

ObjectTypes.cUser = new cObjType("cUser");
ObjectTypes.cMyBasket = new cObjType("cMyBasket");

//*************************************************************************


//******************** VIEW CONTAINERS ****************************************


ObjectTypes.cMainWindow = new cObjType("cMainWindow");
ObjectTypes.cBodyWindow = new cObjType("cBodyWindow");

//*****************************************************************************


ObjectTypes.ValidateObjectInObjectList = function(_ObjectType)
{
    for (var i = 0; i < ObjectTypes.TypeList.Count(); i++)
    {
        if (_ObjectType.ObjectTypeID == ObjectTypes.TypeList.GetItem(i).ObjectTypeID)
        {
            return true;
        }
    }
    return false;
}
