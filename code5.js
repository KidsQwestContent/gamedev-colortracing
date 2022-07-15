gdjs.Word5Code = {};
gdjs.Word5Code.GDButtonEraserObjects2_1final = [];

gdjs.Word5Code.GDButtonPencilObjects2_1final = [];

gdjs.Word5Code.GDInkRedObjects2_1final = [];

gdjs.Word5Code.GDBackgroundObjects1= [];
gdjs.Word5Code.GDBackgroundObjects2= [];
gdjs.Word5Code.GDBackgroundObjects3= [];
gdjs.Word5Code.GDBackgroundObjects4= [];
gdjs.Word5Code.GDBackgroundOverlayObjects1= [];
gdjs.Word5Code.GDBackgroundOverlayObjects2= [];
gdjs.Word5Code.GDBackgroundOverlayObjects3= [];
gdjs.Word5Code.GDBackgroundOverlayObjects4= [];
gdjs.Word5Code.GDOverlayObjects1= [];
gdjs.Word5Code.GDOverlayObjects2= [];
gdjs.Word5Code.GDOverlayObjects3= [];
gdjs.Word5Code.GDOverlayObjects4= [];
gdjs.Word5Code.GDMarkerObjects1= [];
gdjs.Word5Code.GDMarkerObjects2= [];
gdjs.Word5Code.GDMarkerObjects3= [];
gdjs.Word5Code.GDMarkerObjects4= [];
gdjs.Word5Code.GDOutOfBoundObjects1= [];
gdjs.Word5Code.GDOutOfBoundObjects2= [];
gdjs.Word5Code.GDOutOfBoundObjects3= [];
gdjs.Word5Code.GDOutOfBoundObjects4= [];
gdjs.Word5Code.GDInkRedObjects1= [];
gdjs.Word5Code.GDInkRedObjects2= [];
gdjs.Word5Code.GDInkRedObjects3= [];
gdjs.Word5Code.GDInkRedObjects4= [];
gdjs.Word5Code.GDPointsObjects1= [];
gdjs.Word5Code.GDPointsObjects2= [];
gdjs.Word5Code.GDPointsObjects3= [];
gdjs.Word5Code.GDPointsObjects4= [];
gdjs.Word5Code.GDTryAgainObjects1= [];
gdjs.Word5Code.GDTryAgainObjects2= [];
gdjs.Word5Code.GDTryAgainObjects3= [];
gdjs.Word5Code.GDTryAgainObjects4= [];
gdjs.Word5Code.GDButtonBackObjects1= [];
gdjs.Word5Code.GDButtonBackObjects2= [];
gdjs.Word5Code.GDButtonBackObjects3= [];
gdjs.Word5Code.GDButtonBackObjects4= [];
gdjs.Word5Code.GDButtonNextObjects1= [];
gdjs.Word5Code.GDButtonNextObjects2= [];
gdjs.Word5Code.GDButtonNextObjects3= [];
gdjs.Word5Code.GDButtonNextObjects4= [];
gdjs.Word5Code.GDButtonPencilObjects1= [];
gdjs.Word5Code.GDButtonPencilObjects2= [];
gdjs.Word5Code.GDButtonPencilObjects3= [];
gdjs.Word5Code.GDButtonPencilObjects4= [];
gdjs.Word5Code.GDButtonEraserObjects1= [];
gdjs.Word5Code.GDButtonEraserObjects2= [];
gdjs.Word5Code.GDButtonEraserObjects3= [];
gdjs.Word5Code.GDButtonEraserObjects4= [];
gdjs.Word5Code.GDPencilCursorObjects1= [];
gdjs.Word5Code.GDPencilCursorObjects2= [];
gdjs.Word5Code.GDPencilCursorObjects3= [];
gdjs.Word5Code.GDPencilCursorObjects4= [];
gdjs.Word5Code.GDButtonHomeObjects1= [];
gdjs.Word5Code.GDButtonHomeObjects2= [];
gdjs.Word5Code.GDButtonHomeObjects3= [];
gdjs.Word5Code.GDButtonHomeObjects4= [];
gdjs.Word5Code.GDNewVideoObjects1= [];
gdjs.Word5Code.GDNewVideoObjects2= [];
gdjs.Word5Code.GDNewVideoObjects3= [];
gdjs.Word5Code.GDNewVideoObjects4= [];
gdjs.Word5Code.GDStartObjects1= [];
gdjs.Word5Code.GDStartObjects2= [];
gdjs.Word5Code.GDStartObjects3= [];
gdjs.Word5Code.GDStartObjects4= [];
gdjs.Word5Code.GDNewSpriteObjects1= [];
gdjs.Word5Code.GDNewSpriteObjects2= [];
gdjs.Word5Code.GDNewSpriteObjects3= [];
gdjs.Word5Code.GDNewSpriteObjects4= [];

gdjs.Word5Code.conditionTrue_0 = {val:false};
gdjs.Word5Code.condition0IsTrue_0 = {val:false};
gdjs.Word5Code.condition1IsTrue_0 = {val:false};
gdjs.Word5Code.condition2IsTrue_0 = {val:false};
gdjs.Word5Code.condition3IsTrue_0 = {val:false};
gdjs.Word5Code.condition4IsTrue_0 = {val:false};
gdjs.Word5Code.condition5IsTrue_0 = {val:false};
gdjs.Word5Code.condition6IsTrue_0 = {val:false};
gdjs.Word5Code.conditionTrue_1 = {val:false};
gdjs.Word5Code.condition0IsTrue_1 = {val:false};
gdjs.Word5Code.condition1IsTrue_1 = {val:false};
gdjs.Word5Code.condition2IsTrue_1 = {val:false};
gdjs.Word5Code.condition3IsTrue_1 = {val:false};
gdjs.Word5Code.condition4IsTrue_1 = {val:false};
gdjs.Word5Code.condition5IsTrue_1 = {val:false};
gdjs.Word5Code.condition6IsTrue_1 = {val:false};


gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word5Code.GDMarkerObjects1});
gdjs.Word5Code.eventsList0 = function(runtimeScene) {

{


gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition1IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21039588);
}
}}
if (gdjs.Word5Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Word5Code.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.Word5Code.GDButtonBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEraser"), gdjs.Word5Code.GDButtonEraserObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonNext"), gdjs.Word5Code.GDButtonNextObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonPencil"), gdjs.Word5Code.GDButtonPencilObjects1);
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.Word5Code.GDMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Word5Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Word5Code.GDNewVideoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Overlay"), gdjs.Word5Code.GDOverlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("TryAgain"), gdjs.Word5Code.GDTryAgainObjects1);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("GameEnd"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("OutOfBound"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("InstructionActive"), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("MouseActive"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("PencilActive"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("EraserActive"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("UIActive"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("FadeActive"), false);
}{runtimeScene.getGame().getVariables().get("ButtonPressed").setString("");
}{runtimeScene.getGame().getVariables().get("MarkerTotal").setNumber(gdjs.evtTools.object.pickedObjectsCount(gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects));
}{runtimeScene.getGame().getVariables().get("MarkerCount").setNumber(0);
}{for(var i = 0, len = gdjs.Word5Code.GDButtonBackObjects1.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonBackObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Word5Code.GDButtonNextObjects1.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonNextObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Word5Code.GDButtonPencilObjects1.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonPencilObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Word5Code.GDButtonEraserObjects1.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonEraserObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Word5Code.GDTryAgainObjects1.length ;i < len;++i) {
    gdjs.Word5Code.GDTryAgainObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Word5Code.GDButtonBackObjects1.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonBackObjects1[i].enableEffect("Glow", false);
}
}{for(var i = 0, len = gdjs.Word5Code.GDButtonNextObjects1.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonNextObjects1[i].enableEffect("Glow", false);
}
}{for(var i = 0, len = gdjs.Word5Code.GDButtonPencilObjects1.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonPencilObjects1[i].enableEffect("Glow", false);
}
}{for(var i = 0, len = gdjs.Word5Code.GDButtonEraserObjects1.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonEraserObjects1[i].enableEffect("Glow", false);
}
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Audio\\GoodJob.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Audio\\Instructions.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Audio\\TryAgain.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Image\\1.Learning\\L1_5_Audio.aac");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Marker layer");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "OutOfBound layer");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "UI layer");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Fade layer");
}{for(var i = 0, len = gdjs.Word5Code.GDOverlayObjects1.length ;i < len;++i) {
    gdjs.Word5Code.GDOverlayObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Word5Code.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Word5Code.GDBackgroundObjects1[i].hide();
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("GameStart"), true);
}{for(var i = 0, len = gdjs.Word5Code.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.Word5Code.GDNewVideoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Word5Code.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.Word5Code.GDNewVideoObjects1[i].setLayer("Video");
}
}{for(var i = 0, len = gdjs.Word5Code.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Word5Code.GDBackgroundObjects1[i].setLayer("Background layer");
}
}{for(var i = 0, len = gdjs.Word5Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Word5Code.GDNewSpriteObjects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.Word5Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Word5Code.GDNewSpriteObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.Word5Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Word5Code.GDNewSpriteObjects1[i].hide();
}
}}

}


};gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDStartObjects2Objects = Hashtable.newFrom({"Start": gdjs.Word5Code.GDStartObjects2});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDPencilCursorObjects2Objects = Hashtable.newFrom({"PencilCursor": gdjs.Word5Code.GDPencilCursorObjects2});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDPointsObjects2Objects = Hashtable.newFrom({"Points": gdjs.Word5Code.GDPointsObjects2});
gdjs.Word5Code.eventsList1 = function(runtimeScene) {

{


gdjs.Word5Code.condition0IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("GameStart"), true);
}if (gdjs.Word5Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BackgroundOverlay"), gdjs.Word5Code.GDBackgroundOverlayObjects2);
{for(var i = 0, len = gdjs.Word5Code.GDBackgroundOverlayObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDBackgroundOverlayObjects2[i].getBehavior("Tween").addObjectOpacityTween("Fade", 0, "linear", 500, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackgroundOverlay"), gdjs.Word5Code.GDBackgroundOverlayObjects2);
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Word5Code.GDStartObjects2);

gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
gdjs.Word5Code.condition2IsTrue_0.val = false;
gdjs.Word5Code.condition3IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
gdjs.Word5Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDStartObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Word5Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Word5Code.GDBackgroundOverlayObjects2.length;i<l;++i) {
    if ( gdjs.Word5Code.GDBackgroundOverlayObjects2[i].getOpacity() < 50 ) {
        gdjs.Word5Code.condition2IsTrue_0.val = true;
        gdjs.Word5Code.GDBackgroundOverlayObjects2[k] = gdjs.Word5Code.GDBackgroundOverlayObjects2[i];
        ++k;
    }
}
gdjs.Word5Code.GDBackgroundOverlayObjects2.length = k;}if ( gdjs.Word5Code.condition2IsTrue_0.val ) {
{
gdjs.Word5Code.condition3IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("GameStart"), true);
}}
}
}
if (gdjs.Word5Code.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Word5Code.GDNewVideoObjects2);
/* Reuse gdjs.Word5Code.GDStartObjects2 */
{for(var i = 0, len = gdjs.Word5Code.GDNewVideoObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDNewVideoObjects2[i].play();
}
}{for(var i = 0, len = gdjs.Word5Code.GDStartObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDStartObjects2[i].setY(2000);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Image\\1.Learning\\L1_5_Audio.aac", 1, false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Word5Code.GDNewVideoObjects2);

gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Word5Code.GDNewVideoObjects2.length;i<l;++i) {
    if ( gdjs.Word5Code.GDNewVideoObjects2[i].isEnded() ) {
        gdjs.Word5Code.condition0IsTrue_0.val = true;
        gdjs.Word5Code.GDNewVideoObjects2[k] = gdjs.Word5Code.GDNewVideoObjects2[i];
        ++k;
    }
}
gdjs.Word5Code.GDNewVideoObjects2.length = k;}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition1IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20991716);
}
}}
if (gdjs.Word5Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Word5Code.GDBackgroundObjects2);
/* Reuse gdjs.Word5Code.GDNewVideoObjects2 */
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "Start");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Start");
}{for(var i = 0, len = gdjs.Word5Code.GDNewVideoObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDNewVideoObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Word5Code.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDBackgroundObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Word5Code.GDNewVideoObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDNewVideoObjects2[i].setCurrentTime(0);
}
}}

}


{


gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Start") > 0.1;
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition1IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20992940);
}
}}
if (gdjs.Word5Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Audio\\Instructions.wav", 1, false, 100, 1);
}}

}


{


gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Start") > 3;
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition1IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20993988);
}
}}
if (gdjs.Word5Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ButtonEraser"), gdjs.Word5Code.GDButtonEraserObjects2);
gdjs.copyArray(runtimeScene.getObjects("ButtonPencil"), gdjs.Word5Code.GDButtonPencilObjects2);
gdjs.Word5Code.GDPencilCursorObjects2.length = 0;

gdjs.Word5Code.GDPointsObjects2.length = 0;

{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("InstructionActive"), false);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDPencilCursorObjects2Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "UI layer");
}{for(var i = 0, len = gdjs.Word5Code.GDPencilCursorObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDPencilCursorObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Word5Code.GDPencilCursorObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDPencilCursorObjects2[i].setScale(0.2);
}
}{for(var i = 0, len = gdjs.Word5Code.GDPencilCursorObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDPencilCursorObjects2[i].getBehavior("Tween").addObjectOpacityTween("Fade", 255, "linear", 500, false);
}
}{for(var i = 0, len = gdjs.Word5Code.GDButtonPencilObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonPencilObjects2[i].setX(117.5);
}
}{for(var i = 0, len = gdjs.Word5Code.GDButtonEraserObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonEraserObjects2[i].setX(117.5);
}
}{for(var i = 0, len = gdjs.Word5Code.GDButtonPencilObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonPencilObjects2[i].getBehavior("Tween").addObjectOpacityTween("Fade", 255, "linear", 500, false);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("PencilActive"), true);
}{for(var i = 0, len = gdjs.Word5Code.GDButtonEraserObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonEraserObjects2[i].getBehavior("Tween").addObjectOpacityTween("Fade", 255, "linear", 500, false);
}
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "Start");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDPointsObjects2Objects, 632, 206, "Hint Layer");
}}

}


{


gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
gdjs.Word5Code.condition2IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("InstructionActive"), false);
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
gdjs.Word5Code.condition1IsTrue_0.val = gdjs.evtTools.sound.isSoundOnChannelStopped(runtimeScene, 1);
}if ( gdjs.Word5Code.condition1IsTrue_0.val ) {
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition2IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20999268);
}
}}
}
if (gdjs.Word5Code.condition2IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("MouseActive"), true);
}}

}


{


{
}

}


};gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDOutOfBoundObjects2Objects = Hashtable.newFrom({"OutOfBound": gdjs.Word5Code.GDOutOfBoundObjects2});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonPencilObjects2Objects = Hashtable.newFrom({"ButtonPencil": gdjs.Word5Code.GDButtonPencilObjects2});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonEraserObjects2Objects = Hashtable.newFrom({"ButtonEraser": gdjs.Word5Code.GDButtonEraserObjects2});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDInkRedObjects2Objects = Hashtable.newFrom({"InkRed": gdjs.Word5Code.GDInkRedObjects2});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDInkRedObjects2Objects = Hashtable.newFrom({"InkRed": gdjs.Word5Code.GDInkRedObjects2});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDInkRedObjects3Objects = Hashtable.newFrom({"InkRed": gdjs.Word5Code.GDInkRedObjects3});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonPencilObjects3Objects = Hashtable.newFrom({"ButtonPencil": gdjs.Word5Code.GDButtonPencilObjects3});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDInkRedObjects3Objects = Hashtable.newFrom({"InkRed": gdjs.Word5Code.GDInkRedObjects3});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonEraserObjects3Objects = Hashtable.newFrom({"ButtonEraser": gdjs.Word5Code.GDButtonEraserObjects3});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDInkRedObjects2Objects = Hashtable.newFrom({"InkRed": gdjs.Word5Code.GDInkRedObjects2});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDOutOfBoundObjects2Objects = Hashtable.newFrom({"OutOfBound": gdjs.Word5Code.GDOutOfBoundObjects2});
gdjs.Word5Code.eventsList2 = function(runtimeScene) {

{


gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.sound.isSoundOnChannelStopped(runtimeScene, 2);
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition1IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(20994916);
}
}}
if (gdjs.Word5Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Audio\\TryAgain.wav", 2, false, 100, 1);
}}

}


};gdjs.Word5Code.eventsList3 = function(runtimeScene) {

{


gdjs.Word5Code.condition0IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("GameEnd"), false);
}if (gdjs.Word5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word5Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDPencilCursorObjects3Objects = Hashtable.newFrom({"PencilCursor": gdjs.Word5Code.GDPencilCursorObjects3});
gdjs.Word5Code.eventsList4 = function(runtimeScene) {

{


gdjs.Word5Code.condition0IsTrue_0.val = false;
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition0IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21042572);
}
}if (gdjs.Word5Code.condition0IsTrue_0.val) {
gdjs.Word5Code.GDPencilCursorObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDPencilCursorObjects3Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "UI layer");
}{for(var i = 0, len = gdjs.Word5Code.GDPencilCursorObjects3.length ;i < len;++i) {
    gdjs.Word5Code.GDPencilCursorObjects3[i].setScale(0.2);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("PencilCursor"), gdjs.Word5Code.GDPencilCursorObjects2);
{for(var i = 0, len = gdjs.Word5Code.GDPencilCursorObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDPencilCursorObjects2[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}}

}


};gdjs.Word5Code.eventsList5 = function(runtimeScene) {

{


gdjs.Word5Code.condition0IsTrue_0.val = false;
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition0IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21044364);
}
}if (gdjs.Word5Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PencilCursor"), gdjs.Word5Code.GDPencilCursorObjects3);
{for(var i = 0, len = gdjs.Word5Code.GDPencilCursorObjects3.length ;i < len;++i) {
    gdjs.Word5Code.GDPencilCursorObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
}

}


};gdjs.Word5Code.eventsList6 = function(runtimeScene) {

};gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonBackObjects2Objects = Hashtable.newFrom({"ButtonBack": gdjs.Word5Code.GDButtonBackObjects2});
gdjs.Word5Code.eventsList7 = function(runtimeScene) {

{


gdjs.Word5Code.condition0IsTrue_0.val = false;
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition0IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21045892);
}
}if (gdjs.Word5Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Word5Code.GDButtonBackObjects2, gdjs.Word5Code.GDButtonBackObjects3);

{for(var i = 0, len = gdjs.Word5Code.GDButtonBackObjects3.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonBackObjects3[i].getBehavior("Tween").addObjectScaleTween("Mouse", 0.9, 0.9, "bouncePast", 250, false, true);
}
}{for(var i = 0, len = gdjs.Word5Code.GDButtonBackObjects3.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonBackObjects3[i].enableEffect("Glow", true);
}
}}

}


{


gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition1IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21047100);
}
}}
if (gdjs.Word5Code.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.Word5Code.GDButtonBackObjects2, gdjs.Word5Code.GDButtonBackObjects3);

{for(var i = 0, len = gdjs.Word5Code.GDButtonBackObjects3.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonBackObjects3[i].getBehavior("Tween").addObjectScaleTween("Mouse", 0.7, 0.7, "easeOutQuad", 250, false, true);
}
}}

}


{


gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition1IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21047676);
}
}}
if (gdjs.Word5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Word5Code.GDButtonBackObjects2 */
{for(var i = 0, len = gdjs.Word5Code.GDButtonBackObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonBackObjects2[i].getBehavior("Tween").addObjectScaleTween("Mouse", 0.9, 0.9, "bouncePast", 250, false, true);
}
}{runtimeScene.getGame().getVariables().get("ButtonPressed").setString("Back");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("FadeActive"), true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Fade");
}}

}


};gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonBackObjects2Objects = Hashtable.newFrom({"ButtonBack": gdjs.Word5Code.GDButtonBackObjects2});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonNextObjects2Objects = Hashtable.newFrom({"ButtonNext": gdjs.Word5Code.GDButtonNextObjects2});
gdjs.Word5Code.eventsList8 = function(runtimeScene) {

{


gdjs.Word5Code.condition0IsTrue_0.val = false;
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition0IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21050804);
}
}if (gdjs.Word5Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Word5Code.GDButtonNextObjects2, gdjs.Word5Code.GDButtonNextObjects3);

{for(var i = 0, len = gdjs.Word5Code.GDButtonNextObjects3.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonNextObjects3[i].getBehavior("Tween").addObjectScaleTween("Mouse", 0.9, 0.9, "bouncePast", 250, false, true);
}
}{for(var i = 0, len = gdjs.Word5Code.GDButtonNextObjects3.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonNextObjects3[i].enableEffect("Glow", true);
}
}}

}


{


gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition1IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21050660);
}
}}
if (gdjs.Word5Code.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.Word5Code.GDButtonNextObjects2, gdjs.Word5Code.GDButtonNextObjects3);

{for(var i = 0, len = gdjs.Word5Code.GDButtonNextObjects3.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonNextObjects3[i].getBehavior("Tween").addObjectScaleTween("Mouse", 0.7, 0.7, "bouncePast", 250, false, true);
}
}}

}


{


gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition1IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21052940);
}
}}
if (gdjs.Word5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Word5Code.GDButtonNextObjects2 */
{for(var i = 0, len = gdjs.Word5Code.GDButtonNextObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonNextObjects2[i].getBehavior("Tween").addObjectScaleTween("Mouse", 0.9, 0.9, "bouncePast", 250, false, true);
}
}{runtimeScene.getGame().getVariables().get("ButtonPressed").setString("Next");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("FadeActive"), true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Fade");
}}

}


};gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonNextObjects2Objects = Hashtable.newFrom({"ButtonNext": gdjs.Word5Code.GDButtonNextObjects2});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonHomeObjects2Objects = Hashtable.newFrom({"ButtonHome": gdjs.Word5Code.GDButtonHomeObjects2});
gdjs.Word5Code.eventsList9 = function(runtimeScene) {

{


gdjs.Word5Code.condition0IsTrue_0.val = false;
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition0IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21055828);
}
}if (gdjs.Word5Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Word5Code.GDButtonHomeObjects2, gdjs.Word5Code.GDButtonHomeObjects3);

{}{for(var i = 0, len = gdjs.Word5Code.GDButtonHomeObjects3.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonHomeObjects3[i].enableEffect("Glow", true);
}
}}

}


{


gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition1IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21056908);
}
}}
if (gdjs.Word5Code.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.Word5Code.GDButtonHomeObjects2, gdjs.Word5Code.GDButtonHomeObjects3);

{}}

}


{


gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition1IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21056980);
}
}}
if (gdjs.Word5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Word5Code.GDButtonHomeObjects2 */
{}{runtimeScene.getGame().getVariables().get("ButtonPressed").setString("Home");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("FadeActive"), true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Fade");
}}

}


};gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonHomeObjects2Objects = Hashtable.newFrom({"ButtonHome": gdjs.Word5Code.GDButtonHomeObjects2});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonPencilObjects2Objects = Hashtable.newFrom({"ButtonPencil": gdjs.Word5Code.GDButtonPencilObjects2});
gdjs.Word5Code.eventsList10 = function(runtimeScene) {

{


gdjs.Word5Code.condition0IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("EraserActive"), true);
}if (gdjs.Word5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("EraserActive"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("PencilActive"), true);
}}

}


};gdjs.Word5Code.eventsList11 = function(runtimeScene) {

{


gdjs.Word5Code.condition0IsTrue_0.val = false;
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition0IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21060732);
}
}if (gdjs.Word5Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Word5Code.GDButtonPencilObjects2, gdjs.Word5Code.GDButtonPencilObjects3);

{for(var i = 0, len = gdjs.Word5Code.GDButtonPencilObjects3.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonPencilObjects3[i].getBehavior("Tween").addObjectScaleTween("Mouse", 1.2, 1.2, "bouncePast", 250, false, true);
}
}{for(var i = 0, len = gdjs.Word5Code.GDButtonPencilObjects3.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonPencilObjects3[i].enableEffect("Glow", true);
}
}}

}


{


gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition1IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21060508);
}
}}
if (gdjs.Word5Code.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.Word5Code.GDButtonPencilObjects2, gdjs.Word5Code.GDButtonPencilObjects3);

{for(var i = 0, len = gdjs.Word5Code.GDButtonPencilObjects3.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonPencilObjects3[i].getBehavior("Tween").addObjectScaleTween("Mouse", 1.1, 1.1, "bouncePast", 250, false, true);
}
}}

}


{


gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition1IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21062516);
}
}}
if (gdjs.Word5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Word5Code.GDButtonPencilObjects2 */
{for(var i = 0, len = gdjs.Word5Code.GDButtonPencilObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonPencilObjects2[i].getBehavior("Tween").addObjectScaleTween("Mouse", 1.2, 1.2, "bouncePast", 250, false, true);
}
}
{ //Subevents
gdjs.Word5Code.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonPencilObjects2Objects = Hashtable.newFrom({"ButtonPencil": gdjs.Word5Code.GDButtonPencilObjects2});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonEraserObjects2Objects = Hashtable.newFrom({"ButtonEraser": gdjs.Word5Code.GDButtonEraserObjects2});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDInkRedObjects2Objects = Hashtable.newFrom({"InkRed": gdjs.Word5Code.GDInkRedObjects2});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects2Objects = Hashtable.newFrom({"Marker": gdjs.Word5Code.GDMarkerObjects2});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDPointsObjects2Objects = Hashtable.newFrom({"Points": gdjs.Word5Code.GDPointsObjects2});
gdjs.Word5Code.eventsList12 = function(runtimeScene) {

{


gdjs.Word5Code.condition0IsTrue_0.val = false;
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition0IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21066212);
}
}if (gdjs.Word5Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Word5Code.GDButtonEraserObjects2, gdjs.Word5Code.GDButtonEraserObjects3);

{for(var i = 0, len = gdjs.Word5Code.GDButtonEraserObjects3.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonEraserObjects3[i].getBehavior("Tween").addObjectScaleTween("Mouse", 1.2, 1.2, "bouncePast", 250, false, true);
}
}{for(var i = 0, len = gdjs.Word5Code.GDButtonEraserObjects3.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonEraserObjects3[i].enableEffect("Glow", true);
}
}}

}


{


gdjs.Word5Code.condition0IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Word5Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("InkRed"), gdjs.Word5Code.GDInkRedObjects2);
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.Word5Code.GDMarkerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.Word5Code.GDPointsObjects2);
{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDInkRedObjects2Objects);
}{for(var i = 0, len = gdjs.Word5Code.GDInkRedObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDInkRedObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects2Objects);
}{for(var i = 0, len = gdjs.Word5Code.GDMarkerObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDMarkerObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Word5Code.GDPointsObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDPointsObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDPointsObjects2Objects, 632, 206, "Hint Layer");
}{runtimeScene.getGame().getVariables().get("MarkerCount").setNumber(0);
}}

}


};gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonEraserObjects1Objects = Hashtable.newFrom({"ButtonEraser": gdjs.Word5Code.GDButtonEraserObjects1});
gdjs.Word5Code.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonEraser"), gdjs.Word5Code.GDButtonEraserObjects2);
gdjs.copyArray(runtimeScene.getObjects("ButtonPencil"), gdjs.Word5Code.GDButtonPencilObjects2);
gdjs.copyArray(runtimeScene.getObjects("OutOfBound"), gdjs.Word5Code.GDOutOfBoundObjects2);

gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
gdjs.Word5Code.condition2IsTrue_0.val = false;
gdjs.Word5Code.condition3IsTrue_0.val = false;
gdjs.Word5Code.condition4IsTrue_0.val = false;
gdjs.Word5Code.condition5IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDOutOfBoundObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
gdjs.Word5Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonPencilObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Word5Code.condition1IsTrue_0.val ) {
{
gdjs.Word5Code.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonEraserObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Word5Code.condition2IsTrue_0.val ) {
{
gdjs.Word5Code.condition3IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Word5Code.condition3IsTrue_0.val ) {
{
gdjs.Word5Code.condition4IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("MouseActive"), true);
}if ( gdjs.Word5Code.condition4IsTrue_0.val ) {
{
gdjs.Word5Code.condition5IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("PencilActive"), true);
}}
}
}
}
}
if (gdjs.Word5Code.condition5IsTrue_0.val) {
gdjs.Word5Code.GDInkRedObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDInkRedObjects2Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "Draw layer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("InkRed"), gdjs.Word5Code.GDInkRedObjects2);

gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
gdjs.Word5Code.condition2IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDInkRedObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
gdjs.Word5Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Word5Code.condition1IsTrue_0.val ) {
{
gdjs.Word5Code.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("EraserActive"), true);
}}
}
if (gdjs.Word5Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Word5Code.GDInkRedObjects2 */
{for(var i = 0, len = gdjs.Word5Code.GDInkRedObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDInkRedObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Word5Code.GDButtonEraserObjects2.length = 0;

gdjs.Word5Code.GDButtonPencilObjects2.length = 0;

gdjs.Word5Code.GDInkRedObjects2.length = 0;


gdjs.Word5Code.condition0IsTrue_0.val = false;
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition0IsTrue_0;
gdjs.Word5Code.GDButtonEraserObjects2_1final.length = 0;gdjs.Word5Code.GDButtonPencilObjects2_1final.length = 0;gdjs.Word5Code.GDInkRedObjects2_1final.length = 0;gdjs.Word5Code.condition0IsTrue_1.val = false;
gdjs.Word5Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("ButtonPencil"), gdjs.Word5Code.GDButtonPencilObjects3);
gdjs.copyArray(runtimeScene.getObjects("InkRed"), gdjs.Word5Code.GDInkRedObjects3);
gdjs.Word5Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDInkRedObjects3Objects, gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonPencilObjects3Objects, false, runtimeScene, false);
if( gdjs.Word5Code.condition0IsTrue_1.val ) {
    gdjs.Word5Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Word5Code.GDButtonPencilObjects3.length;j<jLen;++j) {
        if ( gdjs.Word5Code.GDButtonPencilObjects2_1final.indexOf(gdjs.Word5Code.GDButtonPencilObjects3[j]) === -1 )
            gdjs.Word5Code.GDButtonPencilObjects2_1final.push(gdjs.Word5Code.GDButtonPencilObjects3[j]);
    }
    for(var j = 0, jLen = gdjs.Word5Code.GDInkRedObjects3.length;j<jLen;++j) {
        if ( gdjs.Word5Code.GDInkRedObjects2_1final.indexOf(gdjs.Word5Code.GDInkRedObjects3[j]) === -1 )
            gdjs.Word5Code.GDInkRedObjects2_1final.push(gdjs.Word5Code.GDInkRedObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("ButtonEraser"), gdjs.Word5Code.GDButtonEraserObjects3);
gdjs.copyArray(runtimeScene.getObjects("InkRed"), gdjs.Word5Code.GDInkRedObjects3);
gdjs.Word5Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDInkRedObjects3Objects, gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonEraserObjects3Objects, false, runtimeScene, false);
if( gdjs.Word5Code.condition1IsTrue_1.val ) {
    gdjs.Word5Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Word5Code.GDButtonEraserObjects3.length;j<jLen;++j) {
        if ( gdjs.Word5Code.GDButtonEraserObjects2_1final.indexOf(gdjs.Word5Code.GDButtonEraserObjects3[j]) === -1 )
            gdjs.Word5Code.GDButtonEraserObjects2_1final.push(gdjs.Word5Code.GDButtonEraserObjects3[j]);
    }
    for(var j = 0, jLen = gdjs.Word5Code.GDInkRedObjects3.length;j<jLen;++j) {
        if ( gdjs.Word5Code.GDInkRedObjects2_1final.indexOf(gdjs.Word5Code.GDInkRedObjects3[j]) === -1 )
            gdjs.Word5Code.GDInkRedObjects2_1final.push(gdjs.Word5Code.GDInkRedObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Word5Code.GDButtonEraserObjects2_1final, gdjs.Word5Code.GDButtonEraserObjects2);
gdjs.copyArray(gdjs.Word5Code.GDButtonPencilObjects2_1final, gdjs.Word5Code.GDButtonPencilObjects2);
gdjs.copyArray(gdjs.Word5Code.GDInkRedObjects2_1final, gdjs.Word5Code.GDInkRedObjects2);
}
}
}if (gdjs.Word5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Word5Code.GDInkRedObjects2 */
{for(var i = 0, len = gdjs.Word5Code.GDInkRedObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDInkRedObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("InkRed"), gdjs.Word5Code.GDInkRedObjects2);
gdjs.copyArray(runtimeScene.getObjects("OutOfBound"), gdjs.Word5Code.GDOutOfBoundObjects2);

gdjs.Word5Code.condition0IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDInkRedObjects2Objects, gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDOutOfBoundObjects2Objects, false, runtimeScene, false);
}if (gdjs.Word5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Word5Code.GDInkRedObjects2 */
{for(var i = 0, len = gdjs.Word5Code.GDInkRedObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDInkRedObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Word5Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.Word5Code.condition0IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("PencilActive"), true);
}if (gdjs.Word5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word5Code.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.Word5Code.condition0IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("EraserActive"), true);
}if (gdjs.Word5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word5Code.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.Word5Code.eventsList6(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.Word5Code.GDButtonBackObjects2);

gdjs.Word5Code.condition0IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonBackObjects2Objects, runtimeScene, true, false);
}if (gdjs.Word5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word5Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.Word5Code.GDButtonBackObjects2);

gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonBackObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition1IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21049164);
}
}}
if (gdjs.Word5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Word5Code.GDButtonBackObjects2 */
{for(var i = 0, len = gdjs.Word5Code.GDButtonBackObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonBackObjects2[i].getBehavior("Tween").addObjectScaleTween("Mouse", 0.85, 0.85, "bouncePast", 250, false, true);
}
}{for(var i = 0, len = gdjs.Word5Code.GDButtonBackObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonBackObjects2[i].enableEffect("Glow", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonNext"), gdjs.Word5Code.GDButtonNextObjects2);

gdjs.Word5Code.condition0IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonNextObjects2Objects, runtimeScene, true, false);
}if (gdjs.Word5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word5Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonNext"), gdjs.Word5Code.GDButtonNextObjects2);

gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonNextObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition1IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21054116);
}
}}
if (gdjs.Word5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Word5Code.GDButtonNextObjects2 */
{for(var i = 0, len = gdjs.Word5Code.GDButtonNextObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonNextObjects2[i].getBehavior("Tween").addObjectScaleTween("Mouse", 0.85, 0.85, "bouncePast", 250, false, true);
}
}{for(var i = 0, len = gdjs.Word5Code.GDButtonNextObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonNextObjects2[i].enableEffect("Glow", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonHome"), gdjs.Word5Code.GDButtonHomeObjects2);

gdjs.Word5Code.condition0IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonHomeObjects2Objects, runtimeScene, true, false);
}if (gdjs.Word5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word5Code.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonHome"), gdjs.Word5Code.GDButtonHomeObjects2);

gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonHomeObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition1IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21059012);
}
}}
if (gdjs.Word5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Word5Code.GDButtonHomeObjects2 */
{}{for(var i = 0, len = gdjs.Word5Code.GDButtonHomeObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonHomeObjects2[i].enableEffect("Glow", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonPencil"), gdjs.Word5Code.GDButtonPencilObjects2);

gdjs.Word5Code.condition0IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonPencilObjects2Objects, runtimeScene, true, false);
}if (gdjs.Word5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word5Code.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonPencil"), gdjs.Word5Code.GDButtonPencilObjects2);

gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonPencilObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition1IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21064700);
}
}}
if (gdjs.Word5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Word5Code.GDButtonPencilObjects2 */
{for(var i = 0, len = gdjs.Word5Code.GDButtonPencilObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonPencilObjects2[i].getBehavior("Tween").addObjectScaleTween("Mouse", 1, 1, "bouncePast", 250, false, true);
}
}{for(var i = 0, len = gdjs.Word5Code.GDButtonPencilObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonPencilObjects2[i].enableEffect("Glow", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonEraser"), gdjs.Word5Code.GDButtonEraserObjects2);

gdjs.Word5Code.condition0IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonEraserObjects2Objects, runtimeScene, true, false);
}if (gdjs.Word5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word5Code.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonEraser"), gdjs.Word5Code.GDButtonEraserObjects1);

gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDButtonEraserObjects1Objects, runtimeScene, true, true);
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition1IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21068964);
}
}}
if (gdjs.Word5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Word5Code.GDButtonEraserObjects1 */
{for(var i = 0, len = gdjs.Word5Code.GDButtonEraserObjects1.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonEraserObjects1[i].getBehavior("Tween").addObjectScaleTween("Mouse", 1, 1, "bouncePast", 250, false, true);
}
}{for(var i = 0, len = gdjs.Word5Code.GDButtonEraserObjects1.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonEraserObjects1[i].enableEffect("Glow", false);
}
}}

}


};gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects2Objects = Hashtable.newFrom({"Marker": gdjs.Word5Code.GDMarkerObjects2});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects2Objects = Hashtable.newFrom({"Marker": gdjs.Word5Code.GDMarkerObjects2});
gdjs.Word5Code.eventsList14 = function(runtimeScene) {

{


gdjs.Word5Code.condition0IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("PencilActive"), true);
}if (gdjs.Word5Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PencilCursor"), gdjs.Word5Code.GDPencilCursorObjects3);
{for(var i = 0, len = gdjs.Word5Code.GDPencilCursorObjects3.length ;i < len;++i) {
    gdjs.Word5Code.GDPencilCursorObjects3[i].getBehavior("Tween").addObjectOpacityTween("Fade", 0, "linear", 500, false);
}
}}

}


{


gdjs.Word5Code.condition0IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("EraserActive"), true);
}if (gdjs.Word5Code.condition0IsTrue_0.val) {
}

}


};gdjs.Word5Code.eventsList15 = function(runtimeScene) {

{


gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "UI") > 1;
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition1IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21076500);
}
}}
if (gdjs.Word5Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.Word5Code.GDButtonBackObjects3);
gdjs.copyArray(runtimeScene.getObjects("ButtonNext"), gdjs.Word5Code.GDButtonNextObjects3);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Word5Code.GDNewSpriteObjects3);
gdjs.copyArray(runtimeScene.getObjects("Overlay"), gdjs.Word5Code.GDOverlayObjects3);
gdjs.copyArray(runtimeScene.getObjects("PencilCursor"), gdjs.Word5Code.GDPencilCursorObjects3);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("PencilActive"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("EraserActive"), false);
}{for(var i = 0, len = gdjs.Word5Code.GDPencilCursorObjects3.length ;i < len;++i) {
    gdjs.Word5Code.GDPencilCursorObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Word5Code.GDOverlayObjects3.length ;i < len;++i) {
    gdjs.Word5Code.GDOverlayObjects3[i].getBehavior("Tween").addObjectOpacityTween("Fade", 255, "linear", 500, false);
}
}{for(var i = 0, len = gdjs.Word5Code.GDButtonNextObjects3.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonNextObjects3[i].setY(597.5);
}
}{for(var i = 0, len = gdjs.Word5Code.GDButtonBackObjects3.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonBackObjects3[i].setY(597.5);
}
}{for(var i = 0, len = gdjs.Word5Code.GDNewSpriteObjects3.length ;i < len;++i) {
    gdjs.Word5Code.GDNewSpriteObjects3[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.Word5Code.GDNewSpriteObjects3.length ;i < len;++i) {
    gdjs.Word5Code.GDNewSpriteObjects3[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Audio\\GoodJob.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.Word5Code.GDNewSpriteObjects3.length ;i < len;++i) {
    gdjs.Word5Code.GDNewSpriteObjects3[i].playAnimation();
}
}}

}


{


gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "UI") > 1.5;
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition1IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21079228);
}
}}
if (gdjs.Word5Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.Word5Code.GDButtonBackObjects2);
gdjs.copyArray(runtimeScene.getObjects("ButtonNext"), gdjs.Word5Code.GDButtonNextObjects2);
{for(var i = 0, len = gdjs.Word5Code.GDButtonNextObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonNextObjects2[i].getBehavior("Tween").addObjectOpacityTween("Fade", 255, "linear", 500, false);
}
}{for(var i = 0, len = gdjs.Word5Code.GDButtonBackObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonBackObjects2[i].getBehavior("Tween").addObjectOpacityTween("Fade", 255, "linear", 500, false);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("UIActive"), false);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "UI");
}}

}


};gdjs.Word5Code.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Word5Code.GDNewVideoObjects2);

gdjs.Word5Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Word5Code.GDNewVideoObjects2.length;i<l;++i) {
    if ( gdjs.Word5Code.GDNewVideoObjects2[i].isPlayed() ) {
        gdjs.Word5Code.condition0IsTrue_0.val = true;
        gdjs.Word5Code.GDNewVideoObjects2[k] = gdjs.Word5Code.GDNewVideoObjects2[i];
        ++k;
    }
}
gdjs.Word5Code.GDNewVideoObjects2.length = k;}if (gdjs.Word5Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Word5Code.GDNewVideoObjects2 */
{for(var i = 0, len = gdjs.Word5Code.GDNewVideoObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDNewVideoObjects2[i].pause();
}
}{for(var i = 0, len = gdjs.Word5Code.GDNewVideoObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDNewVideoObjects2[i].setCurrentTime(0);
}
}}

}


{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


};gdjs.Word5Code.eventsList17 = function(runtimeScene) {

{


gdjs.Word5Code.condition0IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("ButtonPressed")) == "Back";
}if (gdjs.Word5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Word4", true);
}}

}


{


gdjs.Word5Code.condition0IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("ButtonPressed")) == "Next";
}if (gdjs.Word5Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Word6", true);
}}

}


{


gdjs.Word5Code.condition0IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("ButtonPressed")) == "Home";
}if (gdjs.Word5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word5Code.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.Word5Code.eventsList18 = function(runtimeScene) {

{


gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Fade") > 0;
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition1IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21080684);
}
}}
if (gdjs.Word5Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ButtonNext"), gdjs.Word5Code.GDButtonNextObjects2);
{for(var i = 0, len = gdjs.Word5Code.GDButtonNextObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDButtonNextObjects2[i].getBehavior("Tween").addObjectOpacityTween("Fade", 0, "linear", 500, false);
}
}}

}


{


gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Fade") > 0.25;
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition1IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21082004);
}
}}
if (gdjs.Word5Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BackgroundOverlay"), gdjs.Word5Code.GDBackgroundOverlayObjects2);
{for(var i = 0, len = gdjs.Word5Code.GDBackgroundOverlayObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDBackgroundOverlayObjects2[i].getBehavior("Tween").addObjectOpacityTween("Fade", 255, "linear", 500, false);
}
}}

}


{


gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Fade") > 0.75;
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
{gdjs.Word5Code.conditionTrue_1 = gdjs.Word5Code.condition1IsTrue_0;
gdjs.Word5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21082364);
}
}}
if (gdjs.Word5Code.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("FadeActive"), false);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "Fade");
}
{ //Subevents
gdjs.Word5Code.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.Word5Code.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.Word5Code.GDMarkerObjects2);

gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
gdjs.Word5Code.condition2IsTrue_0.val = false;
gdjs.Word5Code.condition3IsTrue_0.val = false;
gdjs.Word5Code.condition4IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Word5Code.GDMarkerObjects2.length;i<l;++i) {
    if ( gdjs.Word5Code.GDMarkerObjects2[i].getVariableBoolean(gdjs.Word5Code.GDMarkerObjects2[i].getVariables().getFromIndex(0), false) ) {
        gdjs.Word5Code.condition1IsTrue_0.val = true;
        gdjs.Word5Code.GDMarkerObjects2[k] = gdjs.Word5Code.GDMarkerObjects2[i];
        ++k;
    }
}
gdjs.Word5Code.GDMarkerObjects2.length = k;}if ( gdjs.Word5Code.condition1IsTrue_0.val ) {
{
gdjs.Word5Code.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("PencilActive"), true);
}if ( gdjs.Word5Code.condition2IsTrue_0.val ) {
{
gdjs.Word5Code.condition3IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("MouseActive"), true);
}if ( gdjs.Word5Code.condition3IsTrue_0.val ) {
{
gdjs.Word5Code.condition4IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
}
}
}
if (gdjs.Word5Code.condition4IsTrue_0.val) {
/* Reuse gdjs.Word5Code.GDMarkerObjects2 */
{for(var i = 0, len = gdjs.Word5Code.GDMarkerObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDMarkerObjects2[i].setVariableBoolean(gdjs.Word5Code.GDMarkerObjects2[i].getVariables().getFromIndex(0), true);
}
}{runtimeScene.getGame().getVariables().get("MarkerCount").add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.Word5Code.GDMarkerObjects2);

gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
gdjs.Word5Code.condition2IsTrue_0.val = false;
gdjs.Word5Code.condition3IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Word5Code.GDMarkerObjects2.length;i<l;++i) {
    if ( gdjs.Word5Code.GDMarkerObjects2[i].getVariableBoolean(gdjs.Word5Code.GDMarkerObjects2[i].getVariables().getFromIndex(0), true) ) {
        gdjs.Word5Code.condition1IsTrue_0.val = true;
        gdjs.Word5Code.GDMarkerObjects2[k] = gdjs.Word5Code.GDMarkerObjects2[i];
        ++k;
    }
}
gdjs.Word5Code.GDMarkerObjects2.length = k;}if ( gdjs.Word5Code.condition1IsTrue_0.val ) {
{
gdjs.Word5Code.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("EraserActive"), true);
}if ( gdjs.Word5Code.condition2IsTrue_0.val ) {
{
gdjs.Word5Code.condition3IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
}
}
if (gdjs.Word5Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Word5Code.GDMarkerObjects2 */
{for(var i = 0, len = gdjs.Word5Code.GDMarkerObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDMarkerObjects2[i].setVariableBoolean(gdjs.Word5Code.GDMarkerObjects2[i].getVariables().getFromIndex(0), false);
}
}{runtimeScene.getGame().getVariables().get("MarkerCount").sub(1);
}}

}


{


gdjs.Word5Code.condition0IsTrue_0.val = false;
gdjs.Word5Code.condition1IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("MarkerCount")) == 13;
}if ( gdjs.Word5Code.condition0IsTrue_0.val ) {
{
gdjs.Word5Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Word5Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.Word5Code.GDPointsObjects2);
{for(var i = 0, len = gdjs.Word5Code.GDPointsObjects2.length ;i < len;++i) {
    gdjs.Word5Code.GDPointsObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("MouseActive"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("UIActive"), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("GameEnd"), true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "UI");
}
{ //Subevents
gdjs.Word5Code.eventsList14(runtimeScene);} //End of subevents
}

}


{


gdjs.Word5Code.condition0IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("UIActive"), true);
}if (gdjs.Word5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word5Code.eventsList15(runtimeScene);} //End of subevents
}

}


{


gdjs.Word5Code.condition0IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("FadeActive"), true);
}if (gdjs.Word5Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word5Code.eventsList18(runtimeScene);} //End of subevents
}

}


};gdjs.Word5Code.eventsList20 = function(runtimeScene) {

};gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word5Code.GDMarkerObjects1});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word5Code.GDMarkerObjects1});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDPointsObjects1Objects = Hashtable.newFrom({"Points": gdjs.Word5Code.GDPointsObjects1});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word5Code.GDMarkerObjects1});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word5Code.GDMarkerObjects1});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word5Code.GDMarkerObjects1});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDPointsObjects1Objects = Hashtable.newFrom({"Points": gdjs.Word5Code.GDPointsObjects1});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word5Code.GDMarkerObjects1});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word5Code.GDMarkerObjects1});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word5Code.GDMarkerObjects1});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDPointsObjects1Objects = Hashtable.newFrom({"Points": gdjs.Word5Code.GDPointsObjects1});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word5Code.GDMarkerObjects1});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word5Code.GDMarkerObjects1});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word5Code.GDMarkerObjects1});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word5Code.GDMarkerObjects1});
gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word5Code.GDMarkerObjects1});
gdjs.Word5Code.eventsList21 = function(runtimeScene) {

{


gdjs.Word5Code.eventsList0(runtimeScene);
}


{


gdjs.Word5Code.eventsList1(runtimeScene);
}


{


gdjs.Word5Code.eventsList13(runtimeScene);
}


{


gdjs.Word5Code.eventsList19(runtimeScene);
}


{


gdjs.Word5Code.eventsList20(runtimeScene);
}


{


gdjs.Word5Code.condition0IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("MarkerCount")) == 0;
}if (gdjs.Word5Code.condition0IsTrue_0.val) {
gdjs.Word5Code.GDMarkerObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects, 638.5, 211.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects, 668.5, 235.5, "Draw layer");
}{for(var i = 0, len = gdjs.Word5Code.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.Word5Code.GDMarkerObjects1[i].hide();
}
}}

}


{


gdjs.Word5Code.condition0IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("MarkerCount")) == 2;
}if (gdjs.Word5Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.Word5Code.GDPointsObjects1);
gdjs.Word5Code.GDMarkerObjects1.length = 0;

{for(var i = 0, len = gdjs.Word5Code.GDPointsObjects1.length ;i < len;++i) {
    gdjs.Word5Code.GDPointsObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDPointsObjects1Objects, 504, 315, "Hint Layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects, 510.5, 314.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects, 640.5, 295.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects, 790.5, 278.5, "Draw layer");
}{for(var i = 0, len = gdjs.Word5Code.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.Word5Code.GDMarkerObjects1[i].hide();
}
}}

}


{


gdjs.Word5Code.condition0IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("MarkerCount")) == 5;
}if (gdjs.Word5Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.Word5Code.GDPointsObjects1);
gdjs.Word5Code.GDMarkerObjects1.length = 0;

{for(var i = 0, len = gdjs.Word5Code.GDPointsObjects1.length ;i < len;++i) {
    gdjs.Word5Code.GDPointsObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDPointsObjects1Objects, 643, 320, "Hint Layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects, 638.5, 324.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects, 587.5, 424.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects, 501.5, 500.5, "Draw layer");
}{for(var i = 0, len = gdjs.Word5Code.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.Word5Code.GDMarkerObjects1[i].hide();
}
}}

}


{


gdjs.Word5Code.condition0IsTrue_0.val = false;
{
gdjs.Word5Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("MarkerCount")) == 8;
}if (gdjs.Word5Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.Word5Code.GDPointsObjects1);
gdjs.Word5Code.GDMarkerObjects1.length = 0;

{for(var i = 0, len = gdjs.Word5Code.GDPointsObjects1.length ;i < len;++i) {
    gdjs.Word5Code.GDPointsObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDPointsObjects1Objects, 655, 355, "Hint Layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects, 677.5, 353.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects, 725.5, 371.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects, 708.5, 446.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects, 667.5, 507.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word5Code.mapOfGDgdjs_46Word5Code_46GDMarkerObjects1Objects, 626.5, 478.5, "Draw layer");
}{for(var i = 0, len = gdjs.Word5Code.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.Word5Code.GDMarkerObjects1[i].hide();
}
}}

}


{


{
}

}


};

gdjs.Word5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Word5Code.GDBackgroundObjects1.length = 0;
gdjs.Word5Code.GDBackgroundObjects2.length = 0;
gdjs.Word5Code.GDBackgroundObjects3.length = 0;
gdjs.Word5Code.GDBackgroundObjects4.length = 0;
gdjs.Word5Code.GDBackgroundOverlayObjects1.length = 0;
gdjs.Word5Code.GDBackgroundOverlayObjects2.length = 0;
gdjs.Word5Code.GDBackgroundOverlayObjects3.length = 0;
gdjs.Word5Code.GDBackgroundOverlayObjects4.length = 0;
gdjs.Word5Code.GDOverlayObjects1.length = 0;
gdjs.Word5Code.GDOverlayObjects2.length = 0;
gdjs.Word5Code.GDOverlayObjects3.length = 0;
gdjs.Word5Code.GDOverlayObjects4.length = 0;
gdjs.Word5Code.GDMarkerObjects1.length = 0;
gdjs.Word5Code.GDMarkerObjects2.length = 0;
gdjs.Word5Code.GDMarkerObjects3.length = 0;
gdjs.Word5Code.GDMarkerObjects4.length = 0;
gdjs.Word5Code.GDOutOfBoundObjects1.length = 0;
gdjs.Word5Code.GDOutOfBoundObjects2.length = 0;
gdjs.Word5Code.GDOutOfBoundObjects3.length = 0;
gdjs.Word5Code.GDOutOfBoundObjects4.length = 0;
gdjs.Word5Code.GDInkRedObjects1.length = 0;
gdjs.Word5Code.GDInkRedObjects2.length = 0;
gdjs.Word5Code.GDInkRedObjects3.length = 0;
gdjs.Word5Code.GDInkRedObjects4.length = 0;
gdjs.Word5Code.GDPointsObjects1.length = 0;
gdjs.Word5Code.GDPointsObjects2.length = 0;
gdjs.Word5Code.GDPointsObjects3.length = 0;
gdjs.Word5Code.GDPointsObjects4.length = 0;
gdjs.Word5Code.GDTryAgainObjects1.length = 0;
gdjs.Word5Code.GDTryAgainObjects2.length = 0;
gdjs.Word5Code.GDTryAgainObjects3.length = 0;
gdjs.Word5Code.GDTryAgainObjects4.length = 0;
gdjs.Word5Code.GDButtonBackObjects1.length = 0;
gdjs.Word5Code.GDButtonBackObjects2.length = 0;
gdjs.Word5Code.GDButtonBackObjects3.length = 0;
gdjs.Word5Code.GDButtonBackObjects4.length = 0;
gdjs.Word5Code.GDButtonNextObjects1.length = 0;
gdjs.Word5Code.GDButtonNextObjects2.length = 0;
gdjs.Word5Code.GDButtonNextObjects3.length = 0;
gdjs.Word5Code.GDButtonNextObjects4.length = 0;
gdjs.Word5Code.GDButtonPencilObjects1.length = 0;
gdjs.Word5Code.GDButtonPencilObjects2.length = 0;
gdjs.Word5Code.GDButtonPencilObjects3.length = 0;
gdjs.Word5Code.GDButtonPencilObjects4.length = 0;
gdjs.Word5Code.GDButtonEraserObjects1.length = 0;
gdjs.Word5Code.GDButtonEraserObjects2.length = 0;
gdjs.Word5Code.GDButtonEraserObjects3.length = 0;
gdjs.Word5Code.GDButtonEraserObjects4.length = 0;
gdjs.Word5Code.GDPencilCursorObjects1.length = 0;
gdjs.Word5Code.GDPencilCursorObjects2.length = 0;
gdjs.Word5Code.GDPencilCursorObjects3.length = 0;
gdjs.Word5Code.GDPencilCursorObjects4.length = 0;
gdjs.Word5Code.GDButtonHomeObjects1.length = 0;
gdjs.Word5Code.GDButtonHomeObjects2.length = 0;
gdjs.Word5Code.GDButtonHomeObjects3.length = 0;
gdjs.Word5Code.GDButtonHomeObjects4.length = 0;
gdjs.Word5Code.GDNewVideoObjects1.length = 0;
gdjs.Word5Code.GDNewVideoObjects2.length = 0;
gdjs.Word5Code.GDNewVideoObjects3.length = 0;
gdjs.Word5Code.GDNewVideoObjects4.length = 0;
gdjs.Word5Code.GDStartObjects1.length = 0;
gdjs.Word5Code.GDStartObjects2.length = 0;
gdjs.Word5Code.GDStartObjects3.length = 0;
gdjs.Word5Code.GDStartObjects4.length = 0;
gdjs.Word5Code.GDNewSpriteObjects1.length = 0;
gdjs.Word5Code.GDNewSpriteObjects2.length = 0;
gdjs.Word5Code.GDNewSpriteObjects3.length = 0;
gdjs.Word5Code.GDNewSpriteObjects4.length = 0;

gdjs.Word5Code.eventsList21(runtimeScene);
return;

}

gdjs['Word5Code'] = gdjs.Word5Code;
