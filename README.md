# hjoop
Javascript Object-Oriented Programming

		ObjectTypes.cTestBaseClass = new cObjType("cTestBaseClass");
		ObjectTypes.cTestExtendClass1 = new cObjType("cTestExtendClass1");
		ObjectTypes.cTestExtendClass2 = new cObjType("cTestExtendClass2"); // Contained cTestExtendClass1

//####################################################################################################
//##################################   cTestBaseClass       ##########################################
//####################################################################################################
		cTestBaseClass = Class(cBaseObject,
		{
			ObjectType: ObjectTypes.cTestBaseClass
			, ClassPublicVariableSample1: null
			, ClassPublicVariableSample2: null
			, ClassPublicVariableSample3: null
			//############################# This block must be defined ########################################################
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
			//###################################################################################################################
			,
			//############### Your Functions ###################################
			SomeFunction1: function(_Param1)
			{				
				alert(this.ClassPublicVariableSample1 + " - " + _Param1);
			}
			,
			SomeFunction2: function(_Param2)
			{	
				alert(this.ClassPublicVariableSample1 + " - " + _Param1);
			}
			//############### Your Functions End###################################
			
		}, {});
//####################################################################################################
//####################################################################################################
//####################################################################################################


	
		
		
//####################################################################################################
//##################################   cTestExtendClass1    ##########################################
//####################################################################################################
		
		cTestExtendClass1 = Class(cTestBaseClass,
		{
			ObjectType: ObjectTypes.cTestExtendClass1
			//############################# This block must be defined ########################################################
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
			//###################################################################################################################
			,
			//############### Your Functions ###################################
			SomeFunction1: function(_Param1)
			{		
				cTestBaseClass.prototype.SomeFunction1.call(this, _Param1);        			
				alert(this.ClassPublicVariableSample2 + " - " + _Param1);
			}
			//############### Your Functions End###################################
			
		}, {});
//####################################################################################################
//####################################################################################################
//####################################################################################################		
		
		
		

//####################################################################################################
//##################################   cTestExtendClass2    ##########################################
//####################################################################################################

		
		cTestExtendClass2 = Class(cTestBaseClass,
		{
			ObjectType: ObjectTypes.cTestExtendClass2
			, InnerItem : null
			//############################# This block must be defined ########################################################
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
			//###################################################################################################################
			
		}, {});
		

//####################################################################################################
//####################################################################################################
//####################################################################################################		

		
		TestContainer = function()
		{
		}
		
		TestContainer.TestBaseClass = new cTestBaseClass("aaaa", "bbbb");
		TestContainer.TestExtendClass1 = new cTestExtendClass1("aaaa", "bbbb");
		TestContainer.TestExtendClass2 = new cTestExtendClass2("aaaa", "bbbb");
    
    
    TestContainer.TestBaseClass.SomeFunction1('test');
    TestContainer.TestExtendClass1.SomeFunction1('test');
	  TestContainer.TestExtendClass2.SomeFunction1('test');
	  TestContainer.TestExtendClass2.InnerItem.SomeFunction1('test');
    
    
