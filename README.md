# hjoop
Javascript Object-Oriented Programming

		ObjectTypes.ITestInterface1 = new cObjType("ITestInterface1");
		ObjectTypes.ITestInterface2 = new cObjType("ITestInterface2");
	
		ObjectTypes.cTestBaseClass = new cObjType("cTestBaseClass");
		ObjectTypes.cTestExtendClass1 = new cObjType("cTestExtendClass1");
		ObjectTypes.cTestExtendClass2 = new cObjType("cTestExtendClass2"); // Contained cTestExtendClass1
		
		
		
		var ITestInterface1 = Class(Interface,
		{
			ObjectType : ObjectTypes.ITestInterface1,
			TestFunction1 : function(_Data){},
			TestFunction2 : function(_Data){}
		}, {});
		
		var ITestInterface2 = Class(Interface,
		{
			ObjectType : ObjectTypes.ITestInterface2,
			TestFunction3 : function(_Data){},
			TestFunction4 : function(_Data){}
		}, {});


		cTestBaseClass = Class(cBaseObject,
		{
			ObjectType: ObjectTypes.cTestBaseClass
			, ClassPublicVariableSample1: null
			, ClassPublicVariableSample2: null
			, ClassPublicVariableSample3: null
			, constructor: function(_ConstructorParam1, _ConstructorParam2)
			{
				//Call base class Initialize
				cTestBaseClass.BaseObject.constructor.call(this); 
				//Object Initialize 
				this.ClassPublicVariableSample1 = _ConstructorParam1;
				this.ClassPublicVariableSample2 = _ConstructorParam2;
			}
			,
			Destroy: function()
			{
				//Destroy all variable
				//if hjoop object destroy you can use destory (sample : this.TimerEvent.Destroy();)
				delete this.ClassPublicVariableSample1;
				delete this.ClassPublicVariableSample2;
				//Call base destroy
				cBaseObject.prototype.Destroy.call(this);        
			}
			,
			BaseObject: function()
			{
				return cBaseObject.prototype;
			}
			,
			SomeFunction1: function(_Param1)
			{				
				alert(this.ClassPublicVariableSample1 + " - " + _Param1);
			}
			,
			SomeFunction2: function(_Param2)
			{	
				alert(this.ClassPublicVariableSample1 + " - " + _Param1);
			}
			
		}, {});

		
		
		cTestExtendClass1 = Class(cTestBaseClass, ITestInterface1, 
		{
			ObjectType: ObjectTypes.cTestExtendClass1
			, constructor: function(_ConstructorParam1, _ConstructorParam2)
			{
				//Call base class Initialize ; send initialize value to base class
				cTestExtendClass1.BaseObject.constructor.call(this, _ConstructorParam1, _ConstructorParam2); 				 
			}
			,
			Destroy: function()
			{
				//Call base destroy
				cTestBaseClass.prototype.Destroy.call(this);        
			}
			,
			BaseObject: function()
			{
				return cTestBaseClass.prototype;
			}
			,
			SomeFunction1: function(_Param1)
			{		
				cTestBaseClass.prototype.SomeFunction1.call(this, _Param1);        			
				alert(this.ClassPublicVariableSample2 + " - " + _Param1);
			}
			,
			TestFunction1 : function(_Data)
			{
				alert("ITestInterface1 TestFunction1");
			},
			TestFunction2 : function(_Data)
			{
				alert("ITestInterface1 TestFunction2");
			}
			
		}, {});

		
		cTestExtendClass2 = Class(cTestBaseClass, ITestInterface1, ITestInterface2,
		{
			ObjectType: ObjectTypes.cTestExtendClass2
			, InnerItem : null
			, constructor: function(_ConstructorParam1, _ConstructorParam2)
			{
				//Call base class Initialize ; send initialize value to base class
				cTestExtendClass2.BaseObject.constructor.call(this, _ConstructorParam1, _ConstructorParam2); 		
				this.InnerItem	= new cTestExtendClass1(_ConstructorParam1, _ConstructorParam2);
			}
			,
			Destroy: function()
			{
				//Call base destroy
				this.InnerItem.Destroy();
				cTestBaseClass.prototype.Destroy.call(this);        
			}
			,
			BaseObject: function()
			{
				return cTestBaseClass.prototype;
			}
			,
			TestFunction1 : function(_Data)
			{
				alert("ITestInterface1 TestFunction1");
			},
			TestFunction2 : function(_Data)
			{
				alert("ITestInterface1 TestFunction2");
			}
			,
			TestFunction3 : function(_Data)
			{
				alert("ITestInterface2 TestFunction1");
			},
			TestFunction4 : function(_Data)
			{
				alert("ITestInterface2 TestFunction2");
			}
		}, {});
		
		
		TestContainer = function()
		{
		}
		
		TestContainer.TestBaseClass = new cTestBaseClass("aaaa", "bbbb");
		TestContainer.TestExtendClass1 = new cTestExtendClass1("aaaa", "bbbb");
		TestContainer.TestExtendClass2 = new cTestExtendClass2("aaaa", "bbbb");
		
		//Control class instance extend from base 
		//Instance, ObjectType
		if (WebGraph.ControlBaseClass(TestContainer.TestExtendClass2, ObjectTypes.cTestBaseClass))
		{
			alert("TestExtendClass2 -> extended from cTestBaseClass");
		}
		else
		{
			alert("TestExtendClass2 -> not extended from cTestBaseClass");
		}
		
		if (WebGraph.ControlBaseClass(TestContainer.TestExtendClass2, ObjectTypes.cTestExtendClass1))
		{
			alert("TestExtendClass2 -> extended from cTestExtendClass1");
		}
		else
		{
			alert("TestExtendClass2 -> not extended from cTestExtendClass1");
		}
		
		alert(cTestBaseClass.IsInstance(TestContainer.TestExtendClass2)); //true
		alert(cTestExtendClass2.IsInstance(TestContainer.TestExtendClass2));  //true
		alert(cTestExtendClass1.IsInstance(TestContainer.TestExtendClass2));  //false
		
		alert(ITestInterface1.IsInstance(TestContainer.TestExtendClass1)); //true
		alert(ITestInterface2.IsInstance(TestContainer.TestExtendClass1)); //false
		
		alert(ITestInterface1.IsInstance(TestContainer.TestExtendClass2)); //true
		alert(ITestInterface2.IsInstance(TestContainer.TestExtendClass2)); //true
    
    
