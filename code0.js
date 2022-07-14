gdjs.MenuCode = {};
gdjs.MenuCode.GDRoadObjects1= [];
gdjs.MenuCode.GDRoadObjects2= [];
gdjs.MenuCode.GDRoadObjects3= [];
gdjs.MenuCode.GDWord1Objects1= [];
gdjs.MenuCode.GDWord1Objects2= [];
gdjs.MenuCode.GDWord1Objects3= [];
gdjs.MenuCode.GDWord2Objects1= [];
gdjs.MenuCode.GDWord2Objects2= [];
gdjs.MenuCode.GDWord2Objects3= [];
gdjs.MenuCode.GDWord3Objects1= [];
gdjs.MenuCode.GDWord3Objects2= [];
gdjs.MenuCode.GDWord3Objects3= [];
gdjs.MenuCode.GDWord4Objects1= [];
gdjs.MenuCode.GDWord4Objects2= [];
gdjs.MenuCode.GDWord4Objects3= [];
gdjs.MenuCode.GDWord5Objects1= [];
gdjs.MenuCode.GDWord5Objects2= [];
gdjs.MenuCode.GDWord5Objects3= [];
gdjs.MenuCode.GDWord6Objects1= [];
gdjs.MenuCode.GDWord6Objects2= [];
gdjs.MenuCode.GDWord6Objects3= [];
gdjs.MenuCode.GDWord7Objects1= [];
gdjs.MenuCode.GDWord7Objects2= [];
gdjs.MenuCode.GDWord7Objects3= [];
gdjs.MenuCode.GDWord8Objects1= [];
gdjs.MenuCode.GDWord8Objects2= [];
gdjs.MenuCode.GDWord8Objects3= [];
gdjs.MenuCode.GDWord9Objects1= [];
gdjs.MenuCode.GDWord9Objects2= [];
gdjs.MenuCode.GDWord9Objects3= [];
gdjs.MenuCode.GDWord10Objects1= [];
gdjs.MenuCode.GDWord10Objects2= [];
gdjs.MenuCode.GDWord10Objects3= [];
gdjs.MenuCode.GDWord11Objects1= [];
gdjs.MenuCode.GDWord11Objects2= [];
gdjs.MenuCode.GDWord11Objects3= [];
gdjs.MenuCode.GDWord12Objects1= [];
gdjs.MenuCode.GDWord12Objects2= [];
gdjs.MenuCode.GDWord12Objects3= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};
gdjs.MenuCode.condition2IsTrue_0 = {val:false};
gdjs.MenuCode.condition3IsTrue_0 = {val:false};
gdjs.MenuCode.condition4IsTrue_0 = {val:false};
gdjs.MenuCode.conditionTrue_1 = {val:false};
gdjs.MenuCode.condition0IsTrue_1 = {val:false};
gdjs.MenuCode.condition1IsTrue_1 = {val:false};
gdjs.MenuCode.condition2IsTrue_1 = {val:false};
gdjs.MenuCode.condition3IsTrue_1 = {val:false};
gdjs.MenuCode.condition4IsTrue_1 = {val:false};


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Start") >= 0;
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20467028);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Word1"), gdjs.MenuCode.GDWord1Objects2);
{for(var i = 0, len = gdjs.MenuCode.GDWord1Objects2.length ;i < len;++i) {
    gdjs.MenuCode.GDWord1Objects2[i].getBehavior("Tween").addObjectOpacityTween("Load", 255, "linear", 250, false);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Start") >= 0.2;
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20468204);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Word2"), gdjs.MenuCode.GDWord2Objects2);
{for(var i = 0, len = gdjs.MenuCode.GDWord2Objects2.length ;i < len;++i) {
    gdjs.MenuCode.GDWord2Objects2[i].getBehavior("Tween").addObjectOpacityTween("Load", 255, "linear", 250, false);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Start") >= 0.4;
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20467388);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Word3"), gdjs.MenuCode.GDWord3Objects2);
{for(var i = 0, len = gdjs.MenuCode.GDWord3Objects2.length ;i < len;++i) {
    gdjs.MenuCode.GDWord3Objects2[i].getBehavior("Tween").addObjectOpacityTween("Load", 255, "linear", 250, false);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Start") >= 0.6;
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20468924);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Word4"), gdjs.MenuCode.GDWord4Objects2);
{for(var i = 0, len = gdjs.MenuCode.GDWord4Objects2.length ;i < len;++i) {
    gdjs.MenuCode.GDWord4Objects2[i].getBehavior("Tween").addObjectOpacityTween("Load", 255, "linear", 250, false);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Start") >= 0.8;
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20470876);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Word5"), gdjs.MenuCode.GDWord5Objects2);
{for(var i = 0, len = gdjs.MenuCode.GDWord5Objects2.length ;i < len;++i) {
    gdjs.MenuCode.GDWord5Objects2[i].getBehavior("Tween").addObjectOpacityTween("Load", 255, "linear", 250, false);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Start") >= 1;
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20471532);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Word6"), gdjs.MenuCode.GDWord6Objects2);
{for(var i = 0, len = gdjs.MenuCode.GDWord6Objects2.length ;i < len;++i) {
    gdjs.MenuCode.GDWord6Objects2[i].getBehavior("Tween").addObjectOpacityTween("Load", 255, "linear", 250, false);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Start") >= 1.2;
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20472644);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Word7"), gdjs.MenuCode.GDWord7Objects2);
{for(var i = 0, len = gdjs.MenuCode.GDWord7Objects2.length ;i < len;++i) {
    gdjs.MenuCode.GDWord7Objects2[i].getBehavior("Tween").addObjectOpacityTween("Load", 255, "linear", 250, false);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Start") >= 1.4;
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20473500);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Word8"), gdjs.MenuCode.GDWord8Objects2);
{for(var i = 0, len = gdjs.MenuCode.GDWord8Objects2.length ;i < len;++i) {
    gdjs.MenuCode.GDWord8Objects2[i].getBehavior("Tween").addObjectOpacityTween("Load", 255, "linear", 250, false);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Start") >= 1.6;
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20474348);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Word9"), gdjs.MenuCode.GDWord9Objects2);
{for(var i = 0, len = gdjs.MenuCode.GDWord9Objects2.length ;i < len;++i) {
    gdjs.MenuCode.GDWord9Objects2[i].getBehavior("Tween").addObjectOpacityTween("Load", 255, "linear", 250, false);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Start") >= 1.8;
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20475252);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Word10"), gdjs.MenuCode.GDWord10Objects2);
{for(var i = 0, len = gdjs.MenuCode.GDWord10Objects2.length ;i < len;++i) {
    gdjs.MenuCode.GDWord10Objects2[i].getBehavior("Tween").addObjectOpacityTween("Load", 255, "linear", 250, false);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Start") >= 2;
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20474908);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Word11"), gdjs.MenuCode.GDWord11Objects2);
{for(var i = 0, len = gdjs.MenuCode.GDWord11Objects2.length ;i < len;++i) {
    gdjs.MenuCode.GDWord11Objects2[i].getBehavior("Tween").addObjectOpacityTween("Load", 255, "linear", 250, false);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Start") >= 2.2;
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition1IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20476916);
}
}}
if (gdjs.MenuCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Word12"), gdjs.MenuCode.GDWord12Objects1);
{for(var i = 0, len = gdjs.MenuCode.GDWord12Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDWord12Objects1[i].getBehavior("Tween").addObjectOpacityTween("Load", 255, "linear", 250, false);
}
}}

}


};gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDWord1Objects2Objects = Hashtable.newFrom({"Word1": gdjs.MenuCode.GDWord1Objects2});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDWord2Objects2Objects = Hashtable.newFrom({"Word2": gdjs.MenuCode.GDWord2Objects2});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDWord3Objects2Objects = Hashtable.newFrom({"Word3": gdjs.MenuCode.GDWord3Objects2});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDWord4Objects2Objects = Hashtable.newFrom({"Word4": gdjs.MenuCode.GDWord4Objects2});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDWord5Objects2Objects = Hashtable.newFrom({"Word5": gdjs.MenuCode.GDWord5Objects2});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDWord6Objects2Objects = Hashtable.newFrom({"Word6": gdjs.MenuCode.GDWord6Objects2});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDWord7Objects2Objects = Hashtable.newFrom({"Word7": gdjs.MenuCode.GDWord7Objects2});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDWord8Objects2Objects = Hashtable.newFrom({"Word8": gdjs.MenuCode.GDWord8Objects2});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDWord9Objects2Objects = Hashtable.newFrom({"Word9": gdjs.MenuCode.GDWord9Objects2});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDWord10Objects2Objects = Hashtable.newFrom({"Word10": gdjs.MenuCode.GDWord10Objects2});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDWord11Objects2Objects = Hashtable.newFrom({"Word11": gdjs.MenuCode.GDWord11Objects2});
gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDWord12Objects1Objects = Hashtable.newFrom({"Word12": gdjs.MenuCode.GDWord12Objects1});
gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Word1"), gdjs.MenuCode.GDWord1Objects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
gdjs.MenuCode.condition3IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDWord1Objects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDWord1Objects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWord1Objects2[i].getOpacity() > 250 ) {
        gdjs.MenuCode.condition1IsTrue_0.val = true;
        gdjs.MenuCode.GDWord1Objects2[k] = gdjs.MenuCode.GDWord1Objects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDWord1Objects2.length = k;}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
gdjs.MenuCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition2IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition3IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20477604);
}
}}
}
}
if (gdjs.MenuCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Word1", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Word2"), gdjs.MenuCode.GDWord2Objects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
gdjs.MenuCode.condition3IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDWord2Objects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDWord2Objects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWord2Objects2[i].getOpacity() > 250 ) {
        gdjs.MenuCode.condition1IsTrue_0.val = true;
        gdjs.MenuCode.GDWord2Objects2[k] = gdjs.MenuCode.GDWord2Objects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDWord2Objects2.length = k;}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
gdjs.MenuCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition2IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition3IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20478908);
}
}}
}
}
if (gdjs.MenuCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Word2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Word3"), gdjs.MenuCode.GDWord3Objects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
gdjs.MenuCode.condition3IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDWord3Objects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDWord3Objects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWord3Objects2[i].getOpacity() > 250 ) {
        gdjs.MenuCode.condition1IsTrue_0.val = true;
        gdjs.MenuCode.GDWord3Objects2[k] = gdjs.MenuCode.GDWord3Objects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDWord3Objects2.length = k;}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
gdjs.MenuCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition2IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition3IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20480604);
}
}}
}
}
if (gdjs.MenuCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Word3", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Word4"), gdjs.MenuCode.GDWord4Objects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
gdjs.MenuCode.condition3IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDWord4Objects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDWord4Objects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWord4Objects2[i].getOpacity() > 250 ) {
        gdjs.MenuCode.condition1IsTrue_0.val = true;
        gdjs.MenuCode.GDWord4Objects2[k] = gdjs.MenuCode.GDWord4Objects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDWord4Objects2.length = k;}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
gdjs.MenuCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition2IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition3IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20481652);
}
}}
}
}
if (gdjs.MenuCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Word4", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Word5"), gdjs.MenuCode.GDWord5Objects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
gdjs.MenuCode.condition3IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDWord5Objects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDWord5Objects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWord5Objects2[i].getOpacity() > 250 ) {
        gdjs.MenuCode.condition1IsTrue_0.val = true;
        gdjs.MenuCode.GDWord5Objects2[k] = gdjs.MenuCode.GDWord5Objects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDWord5Objects2.length = k;}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
gdjs.MenuCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition2IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition3IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20482716);
}
}}
}
}
if (gdjs.MenuCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Word5", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Word6"), gdjs.MenuCode.GDWord6Objects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
gdjs.MenuCode.condition3IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDWord6Objects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDWord6Objects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWord6Objects2[i].getOpacity() > 250 ) {
        gdjs.MenuCode.condition1IsTrue_0.val = true;
        gdjs.MenuCode.GDWord6Objects2[k] = gdjs.MenuCode.GDWord6Objects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDWord6Objects2.length = k;}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
gdjs.MenuCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition2IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition3IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20483772);
}
}}
}
}
if (gdjs.MenuCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Word6", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Word7"), gdjs.MenuCode.GDWord7Objects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
gdjs.MenuCode.condition3IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDWord7Objects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDWord7Objects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWord7Objects2[i].getOpacity() > 250 ) {
        gdjs.MenuCode.condition1IsTrue_0.val = true;
        gdjs.MenuCode.GDWord7Objects2[k] = gdjs.MenuCode.GDWord7Objects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDWord7Objects2.length = k;}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
gdjs.MenuCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition2IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition3IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20483116);
}
}}
}
}
if (gdjs.MenuCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Word7", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Word8"), gdjs.MenuCode.GDWord8Objects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
gdjs.MenuCode.condition3IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDWord8Objects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDWord8Objects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWord8Objects2[i].getOpacity() > 250 ) {
        gdjs.MenuCode.condition1IsTrue_0.val = true;
        gdjs.MenuCode.GDWord8Objects2[k] = gdjs.MenuCode.GDWord8Objects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDWord8Objects2.length = k;}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
gdjs.MenuCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition2IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition3IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20485924);
}
}}
}
}
if (gdjs.MenuCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Word8", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Word9"), gdjs.MenuCode.GDWord9Objects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
gdjs.MenuCode.condition3IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDWord9Objects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDWord9Objects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWord9Objects2[i].getOpacity() > 250 ) {
        gdjs.MenuCode.condition1IsTrue_0.val = true;
        gdjs.MenuCode.GDWord9Objects2[k] = gdjs.MenuCode.GDWord9Objects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDWord9Objects2.length = k;}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
gdjs.MenuCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition2IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition3IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20486988);
}
}}
}
}
if (gdjs.MenuCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Word9", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Word10"), gdjs.MenuCode.GDWord10Objects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
gdjs.MenuCode.condition3IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDWord10Objects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDWord10Objects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWord10Objects2[i].getOpacity() > 250 ) {
        gdjs.MenuCode.condition1IsTrue_0.val = true;
        gdjs.MenuCode.GDWord10Objects2[k] = gdjs.MenuCode.GDWord10Objects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDWord10Objects2.length = k;}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
gdjs.MenuCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition2IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition3IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20488140);
}
}}
}
}
if (gdjs.MenuCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Word10", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Word11"), gdjs.MenuCode.GDWord11Objects2);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
gdjs.MenuCode.condition3IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDWord11Objects2Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDWord11Objects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWord11Objects2[i].getOpacity() > 250 ) {
        gdjs.MenuCode.condition1IsTrue_0.val = true;
        gdjs.MenuCode.GDWord11Objects2[k] = gdjs.MenuCode.GDWord11Objects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDWord11Objects2.length = k;}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
gdjs.MenuCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition2IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition3IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20488532);
}
}}
}
}
if (gdjs.MenuCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Word11", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Word12"), gdjs.MenuCode.GDWord12Objects1);

gdjs.MenuCode.condition0IsTrue_0.val = false;
gdjs.MenuCode.condition1IsTrue_0.val = false;
gdjs.MenuCode.condition2IsTrue_0.val = false;
gdjs.MenuCode.condition3IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_46MenuCode_46GDWord12Objects1Objects, runtimeScene, true, false);
}if ( gdjs.MenuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.MenuCode.GDWord12Objects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDWord12Objects1[i].getOpacity() > 250 ) {
        gdjs.MenuCode.condition1IsTrue_0.val = true;
        gdjs.MenuCode.GDWord12Objects1[k] = gdjs.MenuCode.GDWord12Objects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDWord12Objects1.length = k;}if ( gdjs.MenuCode.condition1IsTrue_0.val ) {
{
gdjs.MenuCode.condition2IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.MenuCode.condition2IsTrue_0.val ) {
{
{gdjs.MenuCode.conditionTrue_1 = gdjs.MenuCode.condition3IsTrue_0;
gdjs.MenuCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20490228);
}
}}
}
}
if (gdjs.MenuCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Word12", false);
}}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Word1"), gdjs.MenuCode.GDWord1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Word10"), gdjs.MenuCode.GDWord10Objects1);
gdjs.copyArray(runtimeScene.getObjects("Word11"), gdjs.MenuCode.GDWord11Objects1);
gdjs.copyArray(runtimeScene.getObjects("Word12"), gdjs.MenuCode.GDWord12Objects1);
gdjs.copyArray(runtimeScene.getObjects("Word2"), gdjs.MenuCode.GDWord2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Word3"), gdjs.MenuCode.GDWord3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Word4"), gdjs.MenuCode.GDWord4Objects1);
gdjs.copyArray(runtimeScene.getObjects("Word5"), gdjs.MenuCode.GDWord5Objects1);
gdjs.copyArray(runtimeScene.getObjects("Word6"), gdjs.MenuCode.GDWord6Objects1);
gdjs.copyArray(runtimeScene.getObjects("Word7"), gdjs.MenuCode.GDWord7Objects1);
gdjs.copyArray(runtimeScene.getObjects("Word8"), gdjs.MenuCode.GDWord8Objects1);
gdjs.copyArray(runtimeScene.getObjects("Word9"), gdjs.MenuCode.GDWord9Objects1);
{for(var i = 0, len = gdjs.MenuCode.GDWord1Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDWord1Objects1[i].setOpacity(0);
}
for(var i = 0, len = gdjs.MenuCode.GDWord2Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDWord2Objects1[i].setOpacity(0);
}
for(var i = 0, len = gdjs.MenuCode.GDWord3Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDWord3Objects1[i].setOpacity(0);
}
for(var i = 0, len = gdjs.MenuCode.GDWord4Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDWord4Objects1[i].setOpacity(0);
}
for(var i = 0, len = gdjs.MenuCode.GDWord5Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDWord5Objects1[i].setOpacity(0);
}
for(var i = 0, len = gdjs.MenuCode.GDWord6Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDWord6Objects1[i].setOpacity(0);
}
for(var i = 0, len = gdjs.MenuCode.GDWord7Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDWord7Objects1[i].setOpacity(0);
}
for(var i = 0, len = gdjs.MenuCode.GDWord8Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDWord8Objects1[i].setOpacity(0);
}
for(var i = 0, len = gdjs.MenuCode.GDWord9Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDWord9Objects1[i].setOpacity(0);
}
for(var i = 0, len = gdjs.MenuCode.GDWord10Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDWord10Objects1[i].setOpacity(0);
}
for(var i = 0, len = gdjs.MenuCode.GDWord11Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDWord11Objects1[i].setOpacity(0);
}
for(var i = 0, len = gdjs.MenuCode.GDWord12Objects1.length ;i < len;++i) {
    gdjs.MenuCode.GDWord12Objects1[i].setOpacity(0);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Start");
}}

}


{



}


{


{

{ //Subevents
gdjs.MenuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


{

{ //Subevents
gdjs.MenuCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDRoadObjects1.length = 0;
gdjs.MenuCode.GDRoadObjects2.length = 0;
gdjs.MenuCode.GDRoadObjects3.length = 0;
gdjs.MenuCode.GDWord1Objects1.length = 0;
gdjs.MenuCode.GDWord1Objects2.length = 0;
gdjs.MenuCode.GDWord1Objects3.length = 0;
gdjs.MenuCode.GDWord2Objects1.length = 0;
gdjs.MenuCode.GDWord2Objects2.length = 0;
gdjs.MenuCode.GDWord2Objects3.length = 0;
gdjs.MenuCode.GDWord3Objects1.length = 0;
gdjs.MenuCode.GDWord3Objects2.length = 0;
gdjs.MenuCode.GDWord3Objects3.length = 0;
gdjs.MenuCode.GDWord4Objects1.length = 0;
gdjs.MenuCode.GDWord4Objects2.length = 0;
gdjs.MenuCode.GDWord4Objects3.length = 0;
gdjs.MenuCode.GDWord5Objects1.length = 0;
gdjs.MenuCode.GDWord5Objects2.length = 0;
gdjs.MenuCode.GDWord5Objects3.length = 0;
gdjs.MenuCode.GDWord6Objects1.length = 0;
gdjs.MenuCode.GDWord6Objects2.length = 0;
gdjs.MenuCode.GDWord6Objects3.length = 0;
gdjs.MenuCode.GDWord7Objects1.length = 0;
gdjs.MenuCode.GDWord7Objects2.length = 0;
gdjs.MenuCode.GDWord7Objects3.length = 0;
gdjs.MenuCode.GDWord8Objects1.length = 0;
gdjs.MenuCode.GDWord8Objects2.length = 0;
gdjs.MenuCode.GDWord8Objects3.length = 0;
gdjs.MenuCode.GDWord9Objects1.length = 0;
gdjs.MenuCode.GDWord9Objects2.length = 0;
gdjs.MenuCode.GDWord9Objects3.length = 0;
gdjs.MenuCode.GDWord10Objects1.length = 0;
gdjs.MenuCode.GDWord10Objects2.length = 0;
gdjs.MenuCode.GDWord10Objects3.length = 0;
gdjs.MenuCode.GDWord11Objects1.length = 0;
gdjs.MenuCode.GDWord11Objects2.length = 0;
gdjs.MenuCode.GDWord11Objects3.length = 0;
gdjs.MenuCode.GDWord12Objects1.length = 0;
gdjs.MenuCode.GDWord12Objects2.length = 0;
gdjs.MenuCode.GDWord12Objects3.length = 0;

gdjs.MenuCode.eventsList2(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
