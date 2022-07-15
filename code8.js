gdjs.Word8Code = {};
gdjs.Word8Code.GDButtonEraserObjects2_1final = [];

gdjs.Word8Code.GDButtonPencilObjects2_1final = [];

gdjs.Word8Code.GDInkRedObjects2_1final = [];

gdjs.Word8Code.GDBackgroundObjects1= [];
gdjs.Word8Code.GDBackgroundObjects2= [];
gdjs.Word8Code.GDBackgroundObjects3= [];
gdjs.Word8Code.GDBackgroundObjects4= [];
gdjs.Word8Code.GDBackgroundOverlayObjects1= [];
gdjs.Word8Code.GDBackgroundOverlayObjects2= [];
gdjs.Word8Code.GDBackgroundOverlayObjects3= [];
gdjs.Word8Code.GDBackgroundOverlayObjects4= [];
gdjs.Word8Code.GDOverlayObjects1= [];
gdjs.Word8Code.GDOverlayObjects2= [];
gdjs.Word8Code.GDOverlayObjects3= [];
gdjs.Word8Code.GDOverlayObjects4= [];
gdjs.Word8Code.GDMarkerObjects1= [];
gdjs.Word8Code.GDMarkerObjects2= [];
gdjs.Word8Code.GDMarkerObjects3= [];
gdjs.Word8Code.GDMarkerObjects4= [];
gdjs.Word8Code.GDOutOfBoundObjects1= [];
gdjs.Word8Code.GDOutOfBoundObjects2= [];
gdjs.Word8Code.GDOutOfBoundObjects3= [];
gdjs.Word8Code.GDOutOfBoundObjects4= [];
gdjs.Word8Code.GDInkRedObjects1= [];
gdjs.Word8Code.GDInkRedObjects2= [];
gdjs.Word8Code.GDInkRedObjects3= [];
gdjs.Word8Code.GDInkRedObjects4= [];
gdjs.Word8Code.GDPointsObjects1= [];
gdjs.Word8Code.GDPointsObjects2= [];
gdjs.Word8Code.GDPointsObjects3= [];
gdjs.Word8Code.GDPointsObjects4= [];
gdjs.Word8Code.GDTryAgainObjects1= [];
gdjs.Word8Code.GDTryAgainObjects2= [];
gdjs.Word8Code.GDTryAgainObjects3= [];
gdjs.Word8Code.GDTryAgainObjects4= [];
gdjs.Word8Code.GDButtonBackObjects1= [];
gdjs.Word8Code.GDButtonBackObjects2= [];
gdjs.Word8Code.GDButtonBackObjects3= [];
gdjs.Word8Code.GDButtonBackObjects4= [];
gdjs.Word8Code.GDButtonNextObjects1= [];
gdjs.Word8Code.GDButtonNextObjects2= [];
gdjs.Word8Code.GDButtonNextObjects3= [];
gdjs.Word8Code.GDButtonNextObjects4= [];
gdjs.Word8Code.GDButtonPencilObjects1= [];
gdjs.Word8Code.GDButtonPencilObjects2= [];
gdjs.Word8Code.GDButtonPencilObjects3= [];
gdjs.Word8Code.GDButtonPencilObjects4= [];
gdjs.Word8Code.GDButtonEraserObjects1= [];
gdjs.Word8Code.GDButtonEraserObjects2= [];
gdjs.Word8Code.GDButtonEraserObjects3= [];
gdjs.Word8Code.GDButtonEraserObjects4= [];
gdjs.Word8Code.GDPencilCursorObjects1= [];
gdjs.Word8Code.GDPencilCursorObjects2= [];
gdjs.Word8Code.GDPencilCursorObjects3= [];
gdjs.Word8Code.GDPencilCursorObjects4= [];
gdjs.Word8Code.GDButtonHomeObjects1= [];
gdjs.Word8Code.GDButtonHomeObjects2= [];
gdjs.Word8Code.GDButtonHomeObjects3= [];
gdjs.Word8Code.GDButtonHomeObjects4= [];
gdjs.Word8Code.GDNewVideoObjects1= [];
gdjs.Word8Code.GDNewVideoObjects2= [];
gdjs.Word8Code.GDNewVideoObjects3= [];
gdjs.Word8Code.GDNewVideoObjects4= [];
gdjs.Word8Code.GDStartObjects1= [];
gdjs.Word8Code.GDStartObjects2= [];
gdjs.Word8Code.GDStartObjects3= [];
gdjs.Word8Code.GDStartObjects4= [];
gdjs.Word8Code.GDNewSpriteObjects1= [];
gdjs.Word8Code.GDNewSpriteObjects2= [];
gdjs.Word8Code.GDNewSpriteObjects3= [];
gdjs.Word8Code.GDNewSpriteObjects4= [];

gdjs.Word8Code.conditionTrue_0 = {val:false};
gdjs.Word8Code.condition0IsTrue_0 = {val:false};
gdjs.Word8Code.condition1IsTrue_0 = {val:false};
gdjs.Word8Code.condition2IsTrue_0 = {val:false};
gdjs.Word8Code.condition3IsTrue_0 = {val:false};
gdjs.Word8Code.condition4IsTrue_0 = {val:false};
gdjs.Word8Code.condition5IsTrue_0 = {val:false};
gdjs.Word8Code.condition6IsTrue_0 = {val:false};
gdjs.Word8Code.conditionTrue_1 = {val:false};
gdjs.Word8Code.condition0IsTrue_1 = {val:false};
gdjs.Word8Code.condition1IsTrue_1 = {val:false};
gdjs.Word8Code.condition2IsTrue_1 = {val:false};
gdjs.Word8Code.condition3IsTrue_1 = {val:false};
gdjs.Word8Code.condition4IsTrue_1 = {val:false};
gdjs.Word8Code.condition5IsTrue_1 = {val:false};
gdjs.Word8Code.condition6IsTrue_1 = {val:false};


gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects1});
gdjs.Word8Code.eventsList0 = function(runtimeScene) {

{


gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition1IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21410908);
}
}}
if (gdjs.Word8Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Word8Code.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.Word8Code.GDButtonBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEraser"), gdjs.Word8Code.GDButtonEraserObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonNext"), gdjs.Word8Code.GDButtonNextObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonPencil"), gdjs.Word8Code.GDButtonPencilObjects1);
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.Word8Code.GDMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Word8Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Word8Code.GDNewVideoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Overlay"), gdjs.Word8Code.GDOverlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("TryAgain"), gdjs.Word8Code.GDTryAgainObjects1);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("GameEnd"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("OutOfBound"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("InstructionActive"), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("MouseActive"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("PencilActive"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("EraserActive"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("UIActive"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("FadeActive"), false);
}{runtimeScene.getGame().getVariables().get("ButtonPressed").setString("");
}{runtimeScene.getGame().getVariables().get("MarkerTotal").setNumber(gdjs.evtTools.object.pickedObjectsCount(gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects));
}{runtimeScene.getGame().getVariables().get("MarkerCount").setNumber(0);
}{for(var i = 0, len = gdjs.Word8Code.GDButtonBackObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonBackObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Word8Code.GDButtonNextObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonNextObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Word8Code.GDButtonPencilObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonPencilObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Word8Code.GDButtonEraserObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonEraserObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Word8Code.GDTryAgainObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDTryAgainObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Word8Code.GDButtonBackObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonBackObjects1[i].enableEffect("Glow", false);
}
}{for(var i = 0, len = gdjs.Word8Code.GDButtonNextObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonNextObjects1[i].enableEffect("Glow", false);
}
}{for(var i = 0, len = gdjs.Word8Code.GDButtonPencilObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonPencilObjects1[i].enableEffect("Glow", false);
}
}{for(var i = 0, len = gdjs.Word8Code.GDButtonEraserObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonEraserObjects1[i].enableEffect("Glow", false);
}
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Audio\\GoodJob.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Audio\\Instructions.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Audio\\TryAgain.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Image\\1.Learning\\L1_8_Audio.aac");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Marker layer");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "OutOfBound layer");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "UI layer");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Fade layer");
}{for(var i = 0, len = gdjs.Word8Code.GDOverlayObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDOverlayObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Word8Code.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDBackgroundObjects1[i].hide();
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("GameStart"), true);
}{for(var i = 0, len = gdjs.Word8Code.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDNewVideoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Word8Code.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDNewVideoObjects1[i].setLayer("Video");
}
}{for(var i = 0, len = gdjs.Word8Code.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDBackgroundObjects1[i].setLayer("Background layer");
}
}{for(var i = 0, len = gdjs.Word8Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDNewSpriteObjects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.Word8Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDNewSpriteObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.Word8Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDNewSpriteObjects1[i].hide();
}
}}

}


};gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDStartObjects2Objects = Hashtable.newFrom({"Start": gdjs.Word8Code.GDStartObjects2});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDPencilCursorObjects2Objects = Hashtable.newFrom({"PencilCursor": gdjs.Word8Code.GDPencilCursorObjects2});
gdjs.Word8Code.eventsList1 = function(runtimeScene) {

{


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("GameStart"), true);
}if (gdjs.Word8Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BackgroundOverlay"), gdjs.Word8Code.GDBackgroundOverlayObjects2);
{for(var i = 0, len = gdjs.Word8Code.GDBackgroundOverlayObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDBackgroundOverlayObjects2[i].getBehavior("Tween").addObjectOpacityTween("Fade", 0, "linear", 500, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackgroundOverlay"), gdjs.Word8Code.GDBackgroundOverlayObjects2);
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Word8Code.GDStartObjects2);

gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
gdjs.Word8Code.condition2IsTrue_0.val = false;
gdjs.Word8Code.condition3IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
gdjs.Word8Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDStartObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Word8Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Word8Code.GDBackgroundOverlayObjects2.length;i<l;++i) {
    if ( gdjs.Word8Code.GDBackgroundOverlayObjects2[i].getOpacity() < 50 ) {
        gdjs.Word8Code.condition2IsTrue_0.val = true;
        gdjs.Word8Code.GDBackgroundOverlayObjects2[k] = gdjs.Word8Code.GDBackgroundOverlayObjects2[i];
        ++k;
    }
}
gdjs.Word8Code.GDBackgroundOverlayObjects2.length = k;}if ( gdjs.Word8Code.condition2IsTrue_0.val ) {
{
gdjs.Word8Code.condition3IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("GameStart"), true);
}}
}
}
if (gdjs.Word8Code.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Word8Code.GDNewVideoObjects2);
/* Reuse gdjs.Word8Code.GDStartObjects2 */
{for(var i = 0, len = gdjs.Word8Code.GDNewVideoObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDNewVideoObjects2[i].play();
}
}{for(var i = 0, len = gdjs.Word8Code.GDStartObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDStartObjects2[i].setY(2000);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Image\\1.Learning\\L1_8_Audio.aac", 1, false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Word8Code.GDNewVideoObjects2);

gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Word8Code.GDNewVideoObjects2.length;i<l;++i) {
    if ( gdjs.Word8Code.GDNewVideoObjects2[i].isEnded() ) {
        gdjs.Word8Code.condition0IsTrue_0.val = true;
        gdjs.Word8Code.GDNewVideoObjects2[k] = gdjs.Word8Code.GDNewVideoObjects2[i];
        ++k;
    }
}
gdjs.Word8Code.GDNewVideoObjects2.length = k;}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition1IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21364084);
}
}}
if (gdjs.Word8Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Word8Code.GDBackgroundObjects2);
/* Reuse gdjs.Word8Code.GDNewVideoObjects2 */
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "Start");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Start");
}{for(var i = 0, len = gdjs.Word8Code.GDNewVideoObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDNewVideoObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Word8Code.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDBackgroundObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Word8Code.GDNewVideoObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDNewVideoObjects2[i].setCurrentTime(0);
}
}}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Start") > 0.1;
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition1IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21365308);
}
}}
if (gdjs.Word8Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Audio\\Instructions.wav", 1, false, 100, 1);
}}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Start") > 3;
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition1IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21366308);
}
}}
if (gdjs.Word8Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ButtonEraser"), gdjs.Word8Code.GDButtonEraserObjects2);
gdjs.copyArray(runtimeScene.getObjects("ButtonPencil"), gdjs.Word8Code.GDButtonPencilObjects2);
gdjs.Word8Code.GDPencilCursorObjects2.length = 0;

{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("InstructionActive"), false);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDPencilCursorObjects2Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "UI layer");
}{for(var i = 0, len = gdjs.Word8Code.GDPencilCursorObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDPencilCursorObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Word8Code.GDPencilCursorObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDPencilCursorObjects2[i].setScale(0.2);
}
}{for(var i = 0, len = gdjs.Word8Code.GDPencilCursorObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDPencilCursorObjects2[i].getBehavior("Tween").addObjectOpacityTween("Fade", 255, "linear", 500, false);
}
}{for(var i = 0, len = gdjs.Word8Code.GDButtonPencilObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonPencilObjects2[i].setX(117.5);
}
}{for(var i = 0, len = gdjs.Word8Code.GDButtonEraserObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonEraserObjects2[i].setX(117.5);
}
}{for(var i = 0, len = gdjs.Word8Code.GDButtonPencilObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonPencilObjects2[i].getBehavior("Tween").addObjectOpacityTween("Fade", 255, "linear", 500, false);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("PencilActive"), true);
}{for(var i = 0, len = gdjs.Word8Code.GDButtonEraserObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonEraserObjects2[i].getBehavior("Tween").addObjectOpacityTween("Fade", 255, "linear", 500, false);
}
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "Start");
}}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
gdjs.Word8Code.condition2IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("InstructionActive"), false);
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
gdjs.Word8Code.condition1IsTrue_0.val = gdjs.evtTools.sound.isSoundOnChannelStopped(runtimeScene, 1);
}if ( gdjs.Word8Code.condition1IsTrue_0.val ) {
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition2IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21371772);
}
}}
}
if (gdjs.Word8Code.condition2IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("MouseActive"), true);
}}

}


{


{
}

}


};gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDOutOfBoundObjects2Objects = Hashtable.newFrom({"OutOfBound": gdjs.Word8Code.GDOutOfBoundObjects2});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonPencilObjects2Objects = Hashtable.newFrom({"ButtonPencil": gdjs.Word8Code.GDButtonPencilObjects2});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonEraserObjects2Objects = Hashtable.newFrom({"ButtonEraser": gdjs.Word8Code.GDButtonEraserObjects2});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDInkRedObjects2Objects = Hashtable.newFrom({"InkRed": gdjs.Word8Code.GDInkRedObjects2});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDInkRedObjects2Objects = Hashtable.newFrom({"InkRed": gdjs.Word8Code.GDInkRedObjects2});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDInkRedObjects3Objects = Hashtable.newFrom({"InkRed": gdjs.Word8Code.GDInkRedObjects3});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonPencilObjects3Objects = Hashtable.newFrom({"ButtonPencil": gdjs.Word8Code.GDButtonPencilObjects3});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDInkRedObjects3Objects = Hashtable.newFrom({"InkRed": gdjs.Word8Code.GDInkRedObjects3});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonEraserObjects3Objects = Hashtable.newFrom({"ButtonEraser": gdjs.Word8Code.GDButtonEraserObjects3});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDInkRedObjects2Objects = Hashtable.newFrom({"InkRed": gdjs.Word8Code.GDInkRedObjects2});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDOutOfBoundObjects2Objects = Hashtable.newFrom({"OutOfBound": gdjs.Word8Code.GDOutOfBoundObjects2});
gdjs.Word8Code.eventsList2 = function(runtimeScene) {

{


gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.sound.isSoundOnChannelStopped(runtimeScene, 2);
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition1IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21367052);
}
}}
if (gdjs.Word8Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Audio\\TryAgain.wav", 2, false, 100, 1);
}}

}


};gdjs.Word8Code.eventsList3 = function(runtimeScene) {

{


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("GameEnd"), false);
}if (gdjs.Word8Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word8Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDPencilCursorObjects3Objects = Hashtable.newFrom({"PencilCursor": gdjs.Word8Code.GDPencilCursorObjects3});
gdjs.Word8Code.eventsList4 = function(runtimeScene) {

{


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition0IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21413596);
}
}if (gdjs.Word8Code.condition0IsTrue_0.val) {
gdjs.Word8Code.GDPencilCursorObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDPencilCursorObjects3Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "UI layer");
}{for(var i = 0, len = gdjs.Word8Code.GDPencilCursorObjects3.length ;i < len;++i) {
    gdjs.Word8Code.GDPencilCursorObjects3[i].setScale(0.2);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("PencilCursor"), gdjs.Word8Code.GDPencilCursorObjects2);
{for(var i = 0, len = gdjs.Word8Code.GDPencilCursorObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDPencilCursorObjects2[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}}

}


};gdjs.Word8Code.eventsList5 = function(runtimeScene) {

{


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition0IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21415388);
}
}if (gdjs.Word8Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PencilCursor"), gdjs.Word8Code.GDPencilCursorObjects3);
{for(var i = 0, len = gdjs.Word8Code.GDPencilCursorObjects3.length ;i < len;++i) {
    gdjs.Word8Code.GDPencilCursorObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
}

}


};gdjs.Word8Code.eventsList6 = function(runtimeScene) {

};gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonBackObjects2Objects = Hashtable.newFrom({"ButtonBack": gdjs.Word8Code.GDButtonBackObjects2});
gdjs.Word8Code.eventsList7 = function(runtimeScene) {

{


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition0IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21416916);
}
}if (gdjs.Word8Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Word8Code.GDButtonBackObjects2, gdjs.Word8Code.GDButtonBackObjects3);

{for(var i = 0, len = gdjs.Word8Code.GDButtonBackObjects3.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonBackObjects3[i].getBehavior("Tween").addObjectScaleTween("Mouse", 0.9, 0.9, "bouncePast", 250, false, true);
}
}{for(var i = 0, len = gdjs.Word8Code.GDButtonBackObjects3.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonBackObjects3[i].enableEffect("Glow", true);
}
}}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition1IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21418124);
}
}}
if (gdjs.Word8Code.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.Word8Code.GDButtonBackObjects2, gdjs.Word8Code.GDButtonBackObjects3);

{for(var i = 0, len = gdjs.Word8Code.GDButtonBackObjects3.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonBackObjects3[i].getBehavior("Tween").addObjectScaleTween("Mouse", 0.7, 0.7, "easeOutQuad", 250, false, true);
}
}}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition1IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21418700);
}
}}
if (gdjs.Word8Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Word8Code.GDButtonBackObjects2 */
{for(var i = 0, len = gdjs.Word8Code.GDButtonBackObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonBackObjects2[i].getBehavior("Tween").addObjectScaleTween("Mouse", 0.9, 0.9, "bouncePast", 250, false, true);
}
}{runtimeScene.getGame().getVariables().get("ButtonPressed").setString("Back");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("FadeActive"), true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Fade");
}}

}


};gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonBackObjects2Objects = Hashtable.newFrom({"ButtonBack": gdjs.Word8Code.GDButtonBackObjects2});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonNextObjects2Objects = Hashtable.newFrom({"ButtonNext": gdjs.Word8Code.GDButtonNextObjects2});
gdjs.Word8Code.eventsList8 = function(runtimeScene) {

{


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition0IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21421828);
}
}if (gdjs.Word8Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Word8Code.GDButtonNextObjects2, gdjs.Word8Code.GDButtonNextObjects3);

{for(var i = 0, len = gdjs.Word8Code.GDButtonNextObjects3.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonNextObjects3[i].getBehavior("Tween").addObjectScaleTween("Mouse", 0.9, 0.9, "bouncePast", 250, false, true);
}
}{for(var i = 0, len = gdjs.Word8Code.GDButtonNextObjects3.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonNextObjects3[i].enableEffect("Glow", true);
}
}}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition1IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21421684);
}
}}
if (gdjs.Word8Code.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.Word8Code.GDButtonNextObjects2, gdjs.Word8Code.GDButtonNextObjects3);

{for(var i = 0, len = gdjs.Word8Code.GDButtonNextObjects3.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonNextObjects3[i].getBehavior("Tween").addObjectScaleTween("Mouse", 0.7, 0.7, "bouncePast", 250, false, true);
}
}}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition1IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21423964);
}
}}
if (gdjs.Word8Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Word8Code.GDButtonNextObjects2 */
{for(var i = 0, len = gdjs.Word8Code.GDButtonNextObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonNextObjects2[i].getBehavior("Tween").addObjectScaleTween("Mouse", 0.9, 0.9, "bouncePast", 250, false, true);
}
}{runtimeScene.getGame().getVariables().get("ButtonPressed").setString("Next");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("FadeActive"), true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Fade");
}}

}


};gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonNextObjects2Objects = Hashtable.newFrom({"ButtonNext": gdjs.Word8Code.GDButtonNextObjects2});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonHomeObjects2Objects = Hashtable.newFrom({"ButtonHome": gdjs.Word8Code.GDButtonHomeObjects2});
gdjs.Word8Code.eventsList9 = function(runtimeScene) {

{


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition0IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21426852);
}
}if (gdjs.Word8Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Word8Code.GDButtonHomeObjects2, gdjs.Word8Code.GDButtonHomeObjects3);

{}{for(var i = 0, len = gdjs.Word8Code.GDButtonHomeObjects3.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonHomeObjects3[i].enableEffect("Glow", true);
}
}}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition1IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21427932);
}
}}
if (gdjs.Word8Code.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.Word8Code.GDButtonHomeObjects2, gdjs.Word8Code.GDButtonHomeObjects3);

{}}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition1IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21428004);
}
}}
if (gdjs.Word8Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Word8Code.GDButtonHomeObjects2 */
{}{runtimeScene.getGame().getVariables().get("ButtonPressed").setString("Home");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("FadeActive"), true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Fade");
}}

}


};gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonHomeObjects2Objects = Hashtable.newFrom({"ButtonHome": gdjs.Word8Code.GDButtonHomeObjects2});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonPencilObjects2Objects = Hashtable.newFrom({"ButtonPencil": gdjs.Word8Code.GDButtonPencilObjects2});
gdjs.Word8Code.eventsList10 = function(runtimeScene) {

{


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("EraserActive"), true);
}if (gdjs.Word8Code.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("EraserActive"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("PencilActive"), true);
}}

}


};gdjs.Word8Code.eventsList11 = function(runtimeScene) {

{


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition0IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21431756);
}
}if (gdjs.Word8Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Word8Code.GDButtonPencilObjects2, gdjs.Word8Code.GDButtonPencilObjects3);

{for(var i = 0, len = gdjs.Word8Code.GDButtonPencilObjects3.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonPencilObjects3[i].getBehavior("Tween").addObjectScaleTween("Mouse", 1.2, 1.2, "bouncePast", 250, false, true);
}
}{for(var i = 0, len = gdjs.Word8Code.GDButtonPencilObjects3.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonPencilObjects3[i].enableEffect("Glow", true);
}
}}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition1IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21431532);
}
}}
if (gdjs.Word8Code.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.Word8Code.GDButtonPencilObjects2, gdjs.Word8Code.GDButtonPencilObjects3);

{for(var i = 0, len = gdjs.Word8Code.GDButtonPencilObjects3.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonPencilObjects3[i].getBehavior("Tween").addObjectScaleTween("Mouse", 1.1, 1.1, "bouncePast", 250, false, true);
}
}}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition1IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21433540);
}
}}
if (gdjs.Word8Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Word8Code.GDButtonPencilObjects2 */
{for(var i = 0, len = gdjs.Word8Code.GDButtonPencilObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonPencilObjects2[i].getBehavior("Tween").addObjectScaleTween("Mouse", 1.2, 1.2, "bouncePast", 250, false, true);
}
}
{ //Subevents
gdjs.Word8Code.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonPencilObjects2Objects = Hashtable.newFrom({"ButtonPencil": gdjs.Word8Code.GDButtonPencilObjects2});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonEraserObjects2Objects = Hashtable.newFrom({"ButtonEraser": gdjs.Word8Code.GDButtonEraserObjects2});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDInkRedObjects2Objects = Hashtable.newFrom({"InkRed": gdjs.Word8Code.GDInkRedObjects2});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects2Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects2});
gdjs.Word8Code.eventsList12 = function(runtimeScene) {

{


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition0IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21437236);
}
}if (gdjs.Word8Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Word8Code.GDButtonEraserObjects2, gdjs.Word8Code.GDButtonEraserObjects3);

{for(var i = 0, len = gdjs.Word8Code.GDButtonEraserObjects3.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonEraserObjects3[i].getBehavior("Tween").addObjectScaleTween("Mouse", 1.2, 1.2, "bouncePast", 250, false, true);
}
}{for(var i = 0, len = gdjs.Word8Code.GDButtonEraserObjects3.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonEraserObjects3[i].enableEffect("Glow", true);
}
}}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Word8Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("InkRed"), gdjs.Word8Code.GDInkRedObjects2);
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.Word8Code.GDMarkerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.Word8Code.GDPointsObjects2);
{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDInkRedObjects2Objects);
}{for(var i = 0, len = gdjs.Word8Code.GDInkRedObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDInkRedObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects2Objects);
}{for(var i = 0, len = gdjs.Word8Code.GDMarkerObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDMarkerObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Word8Code.GDPointsObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDPointsObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().get("MarkerCount").setNumber(0);
}}

}


};gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonEraserObjects1Objects = Hashtable.newFrom({"ButtonEraser": gdjs.Word8Code.GDButtonEraserObjects1});
gdjs.Word8Code.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonEraser"), gdjs.Word8Code.GDButtonEraserObjects2);
gdjs.copyArray(runtimeScene.getObjects("ButtonPencil"), gdjs.Word8Code.GDButtonPencilObjects2);
gdjs.copyArray(runtimeScene.getObjects("OutOfBound"), gdjs.Word8Code.GDOutOfBoundObjects2);

gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
gdjs.Word8Code.condition2IsTrue_0.val = false;
gdjs.Word8Code.condition3IsTrue_0.val = false;
gdjs.Word8Code.condition4IsTrue_0.val = false;
gdjs.Word8Code.condition5IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDOutOfBoundObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
gdjs.Word8Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonPencilObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Word8Code.condition1IsTrue_0.val ) {
{
gdjs.Word8Code.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonEraserObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Word8Code.condition2IsTrue_0.val ) {
{
gdjs.Word8Code.condition3IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Word8Code.condition3IsTrue_0.val ) {
{
gdjs.Word8Code.condition4IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("MouseActive"), true);
}if ( gdjs.Word8Code.condition4IsTrue_0.val ) {
{
gdjs.Word8Code.condition5IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("PencilActive"), true);
}}
}
}
}
}
if (gdjs.Word8Code.condition5IsTrue_0.val) {
gdjs.Word8Code.GDInkRedObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDInkRedObjects2Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "Draw layer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("InkRed"), gdjs.Word8Code.GDInkRedObjects2);

gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
gdjs.Word8Code.condition2IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDInkRedObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
gdjs.Word8Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Word8Code.condition1IsTrue_0.val ) {
{
gdjs.Word8Code.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("EraserActive"), true);
}}
}
if (gdjs.Word8Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Word8Code.GDInkRedObjects2 */
{for(var i = 0, len = gdjs.Word8Code.GDInkRedObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDInkRedObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Word8Code.GDButtonEraserObjects2.length = 0;

gdjs.Word8Code.GDButtonPencilObjects2.length = 0;

gdjs.Word8Code.GDInkRedObjects2.length = 0;


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition0IsTrue_0;
gdjs.Word8Code.GDButtonEraserObjects2_1final.length = 0;gdjs.Word8Code.GDButtonPencilObjects2_1final.length = 0;gdjs.Word8Code.GDInkRedObjects2_1final.length = 0;gdjs.Word8Code.condition0IsTrue_1.val = false;
gdjs.Word8Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("ButtonPencil"), gdjs.Word8Code.GDButtonPencilObjects3);
gdjs.copyArray(runtimeScene.getObjects("InkRed"), gdjs.Word8Code.GDInkRedObjects3);
gdjs.Word8Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDInkRedObjects3Objects, gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonPencilObjects3Objects, false, runtimeScene, false);
if( gdjs.Word8Code.condition0IsTrue_1.val ) {
    gdjs.Word8Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Word8Code.GDButtonPencilObjects3.length;j<jLen;++j) {
        if ( gdjs.Word8Code.GDButtonPencilObjects2_1final.indexOf(gdjs.Word8Code.GDButtonPencilObjects3[j]) === -1 )
            gdjs.Word8Code.GDButtonPencilObjects2_1final.push(gdjs.Word8Code.GDButtonPencilObjects3[j]);
    }
    for(var j = 0, jLen = gdjs.Word8Code.GDInkRedObjects3.length;j<jLen;++j) {
        if ( gdjs.Word8Code.GDInkRedObjects2_1final.indexOf(gdjs.Word8Code.GDInkRedObjects3[j]) === -1 )
            gdjs.Word8Code.GDInkRedObjects2_1final.push(gdjs.Word8Code.GDInkRedObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("ButtonEraser"), gdjs.Word8Code.GDButtonEraserObjects3);
gdjs.copyArray(runtimeScene.getObjects("InkRed"), gdjs.Word8Code.GDInkRedObjects3);
gdjs.Word8Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDInkRedObjects3Objects, gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonEraserObjects3Objects, false, runtimeScene, false);
if( gdjs.Word8Code.condition1IsTrue_1.val ) {
    gdjs.Word8Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Word8Code.GDButtonEraserObjects3.length;j<jLen;++j) {
        if ( gdjs.Word8Code.GDButtonEraserObjects2_1final.indexOf(gdjs.Word8Code.GDButtonEraserObjects3[j]) === -1 )
            gdjs.Word8Code.GDButtonEraserObjects2_1final.push(gdjs.Word8Code.GDButtonEraserObjects3[j]);
    }
    for(var j = 0, jLen = gdjs.Word8Code.GDInkRedObjects3.length;j<jLen;++j) {
        if ( gdjs.Word8Code.GDInkRedObjects2_1final.indexOf(gdjs.Word8Code.GDInkRedObjects3[j]) === -1 )
            gdjs.Word8Code.GDInkRedObjects2_1final.push(gdjs.Word8Code.GDInkRedObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Word8Code.GDButtonEraserObjects2_1final, gdjs.Word8Code.GDButtonEraserObjects2);
gdjs.copyArray(gdjs.Word8Code.GDButtonPencilObjects2_1final, gdjs.Word8Code.GDButtonPencilObjects2);
gdjs.copyArray(gdjs.Word8Code.GDInkRedObjects2_1final, gdjs.Word8Code.GDInkRedObjects2);
}
}
}if (gdjs.Word8Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Word8Code.GDInkRedObjects2 */
{for(var i = 0, len = gdjs.Word8Code.GDInkRedObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDInkRedObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("InkRed"), gdjs.Word8Code.GDInkRedObjects2);
gdjs.copyArray(runtimeScene.getObjects("OutOfBound"), gdjs.Word8Code.GDOutOfBoundObjects2);

gdjs.Word8Code.condition0IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDInkRedObjects2Objects, gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDOutOfBoundObjects2Objects, false, runtimeScene, false);
}if (gdjs.Word8Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Word8Code.GDInkRedObjects2 */
{for(var i = 0, len = gdjs.Word8Code.GDInkRedObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDInkRedObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Word8Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("PencilActive"), true);
}if (gdjs.Word8Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word8Code.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("EraserActive"), true);
}if (gdjs.Word8Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word8Code.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.Word8Code.eventsList6(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.Word8Code.GDButtonBackObjects2);

gdjs.Word8Code.condition0IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonBackObjects2Objects, runtimeScene, true, false);
}if (gdjs.Word8Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word8Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.Word8Code.GDButtonBackObjects2);

gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonBackObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition1IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21420188);
}
}}
if (gdjs.Word8Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Word8Code.GDButtonBackObjects2 */
{for(var i = 0, len = gdjs.Word8Code.GDButtonBackObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonBackObjects2[i].getBehavior("Tween").addObjectScaleTween("Mouse", 0.85, 0.85, "bouncePast", 250, false, true);
}
}{for(var i = 0, len = gdjs.Word8Code.GDButtonBackObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonBackObjects2[i].enableEffect("Glow", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonNext"), gdjs.Word8Code.GDButtonNextObjects2);

gdjs.Word8Code.condition0IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonNextObjects2Objects, runtimeScene, true, false);
}if (gdjs.Word8Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word8Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonNext"), gdjs.Word8Code.GDButtonNextObjects2);

gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonNextObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition1IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21425140);
}
}}
if (gdjs.Word8Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Word8Code.GDButtonNextObjects2 */
{for(var i = 0, len = gdjs.Word8Code.GDButtonNextObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonNextObjects2[i].getBehavior("Tween").addObjectScaleTween("Mouse", 0.85, 0.85, "bouncePast", 250, false, true);
}
}{for(var i = 0, len = gdjs.Word8Code.GDButtonNextObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonNextObjects2[i].enableEffect("Glow", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonHome"), gdjs.Word8Code.GDButtonHomeObjects2);

gdjs.Word8Code.condition0IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonHomeObjects2Objects, runtimeScene, true, false);
}if (gdjs.Word8Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word8Code.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonHome"), gdjs.Word8Code.GDButtonHomeObjects2);

gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonHomeObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition1IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21430036);
}
}}
if (gdjs.Word8Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Word8Code.GDButtonHomeObjects2 */
{}{for(var i = 0, len = gdjs.Word8Code.GDButtonHomeObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonHomeObjects2[i].enableEffect("Glow", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonPencil"), gdjs.Word8Code.GDButtonPencilObjects2);

gdjs.Word8Code.condition0IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonPencilObjects2Objects, runtimeScene, true, false);
}if (gdjs.Word8Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word8Code.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonPencil"), gdjs.Word8Code.GDButtonPencilObjects2);

gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonPencilObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition1IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21435724);
}
}}
if (gdjs.Word8Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Word8Code.GDButtonPencilObjects2 */
{for(var i = 0, len = gdjs.Word8Code.GDButtonPencilObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonPencilObjects2[i].getBehavior("Tween").addObjectScaleTween("Mouse", 1, 1, "bouncePast", 250, false, true);
}
}{for(var i = 0, len = gdjs.Word8Code.GDButtonPencilObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonPencilObjects2[i].enableEffect("Glow", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonEraser"), gdjs.Word8Code.GDButtonEraserObjects2);

gdjs.Word8Code.condition0IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonEraserObjects2Objects, runtimeScene, true, false);
}if (gdjs.Word8Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word8Code.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonEraser"), gdjs.Word8Code.GDButtonEraserObjects1);

gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDButtonEraserObjects1Objects, runtimeScene, true, true);
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition1IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21439748);
}
}}
if (gdjs.Word8Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Word8Code.GDButtonEraserObjects1 */
{for(var i = 0, len = gdjs.Word8Code.GDButtonEraserObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonEraserObjects1[i].getBehavior("Tween").addObjectScaleTween("Mouse", 1, 1, "bouncePast", 250, false, true);
}
}{for(var i = 0, len = gdjs.Word8Code.GDButtonEraserObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonEraserObjects1[i].enableEffect("Glow", false);
}
}}

}


};gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects2Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects2});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects2Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects2});
gdjs.Word8Code.eventsList14 = function(runtimeScene) {

{


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("PencilActive"), true);
}if (gdjs.Word8Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PencilCursor"), gdjs.Word8Code.GDPencilCursorObjects3);
{for(var i = 0, len = gdjs.Word8Code.GDPencilCursorObjects3.length ;i < len;++i) {
    gdjs.Word8Code.GDPencilCursorObjects3[i].getBehavior("Tween").addObjectOpacityTween("Fade", 0, "linear", 500, false);
}
}}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("EraserActive"), true);
}if (gdjs.Word8Code.condition0IsTrue_0.val) {
}

}


};gdjs.Word8Code.eventsList15 = function(runtimeScene) {

{


gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "UI") > 1;
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition1IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21447348);
}
}}
if (gdjs.Word8Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.Word8Code.GDButtonBackObjects3);
gdjs.copyArray(runtimeScene.getObjects("ButtonNext"), gdjs.Word8Code.GDButtonNextObjects3);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Word8Code.GDNewSpriteObjects3);
gdjs.copyArray(runtimeScene.getObjects("Overlay"), gdjs.Word8Code.GDOverlayObjects3);
gdjs.copyArray(runtimeScene.getObjects("PencilCursor"), gdjs.Word8Code.GDPencilCursorObjects3);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("PencilActive"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("EraserActive"), false);
}{for(var i = 0, len = gdjs.Word8Code.GDPencilCursorObjects3.length ;i < len;++i) {
    gdjs.Word8Code.GDPencilCursorObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Word8Code.GDOverlayObjects3.length ;i < len;++i) {
    gdjs.Word8Code.GDOverlayObjects3[i].getBehavior("Tween").addObjectOpacityTween("Fade", 255, "linear", 500, false);
}
}{for(var i = 0, len = gdjs.Word8Code.GDButtonNextObjects3.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonNextObjects3[i].setY(597.5);
}
}{for(var i = 0, len = gdjs.Word8Code.GDButtonBackObjects3.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonBackObjects3[i].setY(597.5);
}
}{for(var i = 0, len = gdjs.Word8Code.GDNewSpriteObjects3.length ;i < len;++i) {
    gdjs.Word8Code.GDNewSpriteObjects3[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.Word8Code.GDNewSpriteObjects3.length ;i < len;++i) {
    gdjs.Word8Code.GDNewSpriteObjects3[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Audio\\GoodJob.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.Word8Code.GDNewSpriteObjects3.length ;i < len;++i) {
    gdjs.Word8Code.GDNewSpriteObjects3[i].playAnimation();
}
}}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "UI") > 1.5;
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition1IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21450076);
}
}}
if (gdjs.Word8Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.Word8Code.GDButtonBackObjects2);
gdjs.copyArray(runtimeScene.getObjects("ButtonNext"), gdjs.Word8Code.GDButtonNextObjects2);
{for(var i = 0, len = gdjs.Word8Code.GDButtonNextObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonNextObjects2[i].getBehavior("Tween").addObjectOpacityTween("Fade", 255, "linear", 500, false);
}
}{for(var i = 0, len = gdjs.Word8Code.GDButtonBackObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonBackObjects2[i].getBehavior("Tween").addObjectOpacityTween("Fade", 255, "linear", 500, false);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("UIActive"), false);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "UI");
}}

}


};gdjs.Word8Code.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Word8Code.GDNewVideoObjects2);

gdjs.Word8Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Word8Code.GDNewVideoObjects2.length;i<l;++i) {
    if ( gdjs.Word8Code.GDNewVideoObjects2[i].isPlayed() ) {
        gdjs.Word8Code.condition0IsTrue_0.val = true;
        gdjs.Word8Code.GDNewVideoObjects2[k] = gdjs.Word8Code.GDNewVideoObjects2[i];
        ++k;
    }
}
gdjs.Word8Code.GDNewVideoObjects2.length = k;}if (gdjs.Word8Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Word8Code.GDNewVideoObjects2 */
{for(var i = 0, len = gdjs.Word8Code.GDNewVideoObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDNewVideoObjects2[i].pause();
}
}{for(var i = 0, len = gdjs.Word8Code.GDNewVideoObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDNewVideoObjects2[i].setCurrentTime(0);
}
}}

}


{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


};gdjs.Word8Code.eventsList17 = function(runtimeScene) {

{


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("ButtonPressed")) == "Back";
}if (gdjs.Word8Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Word7", true);
}}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("ButtonPressed")) == "Next";
}if (gdjs.Word8Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Word9", true);
}}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("ButtonPressed")) == "Home";
}if (gdjs.Word8Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word8Code.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.Word8Code.eventsList18 = function(runtimeScene) {

{


gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Fade") > 0;
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition1IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21451532);
}
}}
if (gdjs.Word8Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.Word8Code.GDButtonBackObjects2);
gdjs.copyArray(runtimeScene.getObjects("ButtonNext"), gdjs.Word8Code.GDButtonNextObjects2);
{for(var i = 0, len = gdjs.Word8Code.GDButtonNextObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonNextObjects2[i].getBehavior("Tween").addObjectOpacityTween("Fade", 0, "linear", 500, false);
}
}{for(var i = 0, len = gdjs.Word8Code.GDButtonBackObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDButtonBackObjects2[i].getBehavior("Tween").addObjectOpacityTween("Fade", 0, "linear", 500, false);
}
}}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Fade") > 0.25;
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition1IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21452100);
}
}}
if (gdjs.Word8Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BackgroundOverlay"), gdjs.Word8Code.GDBackgroundOverlayObjects2);
{for(var i = 0, len = gdjs.Word8Code.GDBackgroundOverlayObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDBackgroundOverlayObjects2[i].getBehavior("Tween").addObjectOpacityTween("Fade", 255, "linear", 500, false);
}
}}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Fade") > 0.75;
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
{gdjs.Word8Code.conditionTrue_1 = gdjs.Word8Code.condition1IsTrue_0;
gdjs.Word8Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21453524);
}
}}
if (gdjs.Word8Code.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("FadeActive"), false);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "Fade");
}
{ //Subevents
gdjs.Word8Code.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.Word8Code.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.Word8Code.GDMarkerObjects2);

gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
gdjs.Word8Code.condition2IsTrue_0.val = false;
gdjs.Word8Code.condition3IsTrue_0.val = false;
gdjs.Word8Code.condition4IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Word8Code.GDMarkerObjects2.length;i<l;++i) {
    if ( gdjs.Word8Code.GDMarkerObjects2[i].getVariableBoolean(gdjs.Word8Code.GDMarkerObjects2[i].getVariables().getFromIndex(0), false) ) {
        gdjs.Word8Code.condition1IsTrue_0.val = true;
        gdjs.Word8Code.GDMarkerObjects2[k] = gdjs.Word8Code.GDMarkerObjects2[i];
        ++k;
    }
}
gdjs.Word8Code.GDMarkerObjects2.length = k;}if ( gdjs.Word8Code.condition1IsTrue_0.val ) {
{
gdjs.Word8Code.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("PencilActive"), true);
}if ( gdjs.Word8Code.condition2IsTrue_0.val ) {
{
gdjs.Word8Code.condition3IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("MouseActive"), true);
}if ( gdjs.Word8Code.condition3IsTrue_0.val ) {
{
gdjs.Word8Code.condition4IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
}
}
}
if (gdjs.Word8Code.condition4IsTrue_0.val) {
/* Reuse gdjs.Word8Code.GDMarkerObjects2 */
{for(var i = 0, len = gdjs.Word8Code.GDMarkerObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDMarkerObjects2[i].setVariableBoolean(gdjs.Word8Code.GDMarkerObjects2[i].getVariables().getFromIndex(0), true);
}
}{runtimeScene.getGame().getVariables().get("MarkerCount").add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.Word8Code.GDMarkerObjects2);

gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
gdjs.Word8Code.condition2IsTrue_0.val = false;
gdjs.Word8Code.condition3IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Word8Code.GDMarkerObjects2.length;i<l;++i) {
    if ( gdjs.Word8Code.GDMarkerObjects2[i].getVariableBoolean(gdjs.Word8Code.GDMarkerObjects2[i].getVariables().getFromIndex(0), true) ) {
        gdjs.Word8Code.condition1IsTrue_0.val = true;
        gdjs.Word8Code.GDMarkerObjects2[k] = gdjs.Word8Code.GDMarkerObjects2[i];
        ++k;
    }
}
gdjs.Word8Code.GDMarkerObjects2.length = k;}if ( gdjs.Word8Code.condition1IsTrue_0.val ) {
{
gdjs.Word8Code.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("EraserActive"), true);
}if ( gdjs.Word8Code.condition2IsTrue_0.val ) {
{
gdjs.Word8Code.condition3IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
}
}
if (gdjs.Word8Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Word8Code.GDMarkerObjects2 */
{for(var i = 0, len = gdjs.Word8Code.GDMarkerObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDMarkerObjects2[i].setVariableBoolean(gdjs.Word8Code.GDMarkerObjects2[i].getVariables().getFromIndex(0), false);
}
}{runtimeScene.getGame().getVariables().get("MarkerCount").sub(1);
}}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
gdjs.Word8Code.condition1IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("MarkerCount")) == 25;
}if ( gdjs.Word8Code.condition0IsTrue_0.val ) {
{
gdjs.Word8Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Word8Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.Word8Code.GDPointsObjects2);
{for(var i = 0, len = gdjs.Word8Code.GDPointsObjects2.length ;i < len;++i) {
    gdjs.Word8Code.GDPointsObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("MouseActive"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("UIActive"), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("GameEnd"), true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "UI");
}
{ //Subevents
gdjs.Word8Code.eventsList14(runtimeScene);} //End of subevents
}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("UIActive"), true);
}if (gdjs.Word8Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word8Code.eventsList15(runtimeScene);} //End of subevents
}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("FadeActive"), true);
}if (gdjs.Word8Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word8Code.eventsList18(runtimeScene);} //End of subevents
}

}


};gdjs.Word8Code.eventsList20 = function(runtimeScene) {

};gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDPointsObjects1Objects = Hashtable.newFrom({"Points": gdjs.Word8Code.GDPointsObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDPointsObjects1Objects = Hashtable.newFrom({"Points": gdjs.Word8Code.GDPointsObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDPointsObjects1Objects = Hashtable.newFrom({"Points": gdjs.Word8Code.GDPointsObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDPointsObjects1Objects = Hashtable.newFrom({"Points": gdjs.Word8Code.GDPointsObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDPointsObjects1Objects = Hashtable.newFrom({"Points": gdjs.Word8Code.GDPointsObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDPointsObjects1Objects = Hashtable.newFrom({"Points": gdjs.Word8Code.GDPointsObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDPointsObjects1Objects = Hashtable.newFrom({"Points": gdjs.Word8Code.GDPointsObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects1});
gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word8Code.GDMarkerObjects1});
gdjs.Word8Code.eventsList21 = function(runtimeScene) {

{


gdjs.Word8Code.eventsList0(runtimeScene);
}


{


gdjs.Word8Code.eventsList1(runtimeScene);
}


{


gdjs.Word8Code.eventsList13(runtimeScene);
}


{


gdjs.Word8Code.eventsList19(runtimeScene);
}


{


gdjs.Word8Code.eventsList20(runtimeScene);
}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("MarkerCount")) == 0;
}if (gdjs.Word8Code.condition0IsTrue_0.val) {
gdjs.Word8Code.GDMarkerObjects1.length = 0;

gdjs.Word8Code.GDPointsObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDPointsObjects1Objects, 595.5, 275.5, "Hint Layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects, 595.5, 275.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects, 540.5, 315.5, "Draw layer");
}{for(var i = 0, len = gdjs.Word8Code.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDMarkerObjects1[i].hide();
}
}}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("MarkerCount")) == 2;
}if (gdjs.Word8Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.Word8Code.GDPointsObjects1);
gdjs.Word8Code.GDMarkerObjects1.length = 0;

{for(var i = 0, len = gdjs.Word8Code.GDPointsObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDPointsObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDPointsObjects1Objects, 510.5, 380.5, "Hint Layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects, 510.5, 380.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects, 590.5, 355.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects, 655.5, 335.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects, 715.5, 320.5, "Draw layer");
}{for(var i = 0, len = gdjs.Word8Code.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDMarkerObjects1[i].hide();
}
}}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("MarkerCount")) == 6;
}if (gdjs.Word8Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.Word8Code.GDPointsObjects1);
gdjs.Word8Code.GDMarkerObjects1.length = 0;

{for(var i = 0, len = gdjs.Word8Code.GDPointsObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDPointsObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDPointsObjects1Objects, 575.5, 335.5, "Hint Layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects, 575.5, 335.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects, 580.5, 400.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects, 580.5, 455.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects, 570.5, 515.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects, 540.5, 500.5, "Draw layer");
}{for(var i = 0, len = gdjs.Word8Code.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDMarkerObjects1[i].hide();
}
}}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("MarkerCount")) == 11;
}if (gdjs.Word8Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.Word8Code.GDPointsObjects1);
gdjs.Word8Code.GDMarkerObjects1.length = 0;

{for(var i = 0, len = gdjs.Word8Code.GDPointsObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDPointsObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDPointsObjects1Objects, 485.5, 455.5, "Hint Layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects, 485.5, 455.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects, 545.5, 430.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects, 610.5, 395.5, "Draw layer");
}{for(var i = 0, len = gdjs.Word8Code.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDMarkerObjects1[i].hide();
}
}}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("MarkerCount")) == 14;
}if (gdjs.Word8Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.Word8Code.GDPointsObjects1);
gdjs.Word8Code.GDMarkerObjects1.length = 0;

{for(var i = 0, len = gdjs.Word8Code.GDPointsObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDPointsObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDPointsObjects1Objects, 635.5, 205.5, "Hint Layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects, 635.5, 205.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects, 650.5, 305.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects, 685.5, 405.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects, 725.5, 475.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects, 800.5, 540.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects, 805.5, 480.5, "Draw layer");
}{for(var i = 0, len = gdjs.Word8Code.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDMarkerObjects1[i].hide();
}
}}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("MarkerCount")) == 20;
}if (gdjs.Word8Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.Word8Code.GDPointsObjects1);
gdjs.Word8Code.GDMarkerObjects1.length = 0;

{for(var i = 0, len = gdjs.Word8Code.GDPointsObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDPointsObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDPointsObjects1Objects, 740.5, 370.5, "Hint Layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects, 740.5, 370.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects, 700.5, 430.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects, 630.5, 480.5, "Draw layer");
}{for(var i = 0, len = gdjs.Word8Code.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDMarkerObjects1[i].hide();
}
}}

}


{


gdjs.Word8Code.condition0IsTrue_0.val = false;
{
gdjs.Word8Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("MarkerCount")) == 23;
}if (gdjs.Word8Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.Word8Code.GDPointsObjects1);
gdjs.Word8Code.GDMarkerObjects1.length = 0;

{for(var i = 0, len = gdjs.Word8Code.GDPointsObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDPointsObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDPointsObjects1Objects, 700.5, 230.5, "Hint Layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects, 700.5, 230.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word8Code.mapOfGDgdjs_46Word8Code_46GDMarkerObjects1Objects, 735.5, 255.5, "Draw layer");
}{for(var i = 0, len = gdjs.Word8Code.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.Word8Code.GDMarkerObjects1[i].hide();
}
}}

}


{


{
}

}


};

gdjs.Word8Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Word8Code.GDBackgroundObjects1.length = 0;
gdjs.Word8Code.GDBackgroundObjects2.length = 0;
gdjs.Word8Code.GDBackgroundObjects3.length = 0;
gdjs.Word8Code.GDBackgroundObjects4.length = 0;
gdjs.Word8Code.GDBackgroundOverlayObjects1.length = 0;
gdjs.Word8Code.GDBackgroundOverlayObjects2.length = 0;
gdjs.Word8Code.GDBackgroundOverlayObjects3.length = 0;
gdjs.Word8Code.GDBackgroundOverlayObjects4.length = 0;
gdjs.Word8Code.GDOverlayObjects1.length = 0;
gdjs.Word8Code.GDOverlayObjects2.length = 0;
gdjs.Word8Code.GDOverlayObjects3.length = 0;
gdjs.Word8Code.GDOverlayObjects4.length = 0;
gdjs.Word8Code.GDMarkerObjects1.length = 0;
gdjs.Word8Code.GDMarkerObjects2.length = 0;
gdjs.Word8Code.GDMarkerObjects3.length = 0;
gdjs.Word8Code.GDMarkerObjects4.length = 0;
gdjs.Word8Code.GDOutOfBoundObjects1.length = 0;
gdjs.Word8Code.GDOutOfBoundObjects2.length = 0;
gdjs.Word8Code.GDOutOfBoundObjects3.length = 0;
gdjs.Word8Code.GDOutOfBoundObjects4.length = 0;
gdjs.Word8Code.GDInkRedObjects1.length = 0;
gdjs.Word8Code.GDInkRedObjects2.length = 0;
gdjs.Word8Code.GDInkRedObjects3.length = 0;
gdjs.Word8Code.GDInkRedObjects4.length = 0;
gdjs.Word8Code.GDPointsObjects1.length = 0;
gdjs.Word8Code.GDPointsObjects2.length = 0;
gdjs.Word8Code.GDPointsObjects3.length = 0;
gdjs.Word8Code.GDPointsObjects4.length = 0;
gdjs.Word8Code.GDTryAgainObjects1.length = 0;
gdjs.Word8Code.GDTryAgainObjects2.length = 0;
gdjs.Word8Code.GDTryAgainObjects3.length = 0;
gdjs.Word8Code.GDTryAgainObjects4.length = 0;
gdjs.Word8Code.GDButtonBackObjects1.length = 0;
gdjs.Word8Code.GDButtonBackObjects2.length = 0;
gdjs.Word8Code.GDButtonBackObjects3.length = 0;
gdjs.Word8Code.GDButtonBackObjects4.length = 0;
gdjs.Word8Code.GDButtonNextObjects1.length = 0;
gdjs.Word8Code.GDButtonNextObjects2.length = 0;
gdjs.Word8Code.GDButtonNextObjects3.length = 0;
gdjs.Word8Code.GDButtonNextObjects4.length = 0;
gdjs.Word8Code.GDButtonPencilObjects1.length = 0;
gdjs.Word8Code.GDButtonPencilObjects2.length = 0;
gdjs.Word8Code.GDButtonPencilObjects3.length = 0;
gdjs.Word8Code.GDButtonPencilObjects4.length = 0;
gdjs.Word8Code.GDButtonEraserObjects1.length = 0;
gdjs.Word8Code.GDButtonEraserObjects2.length = 0;
gdjs.Word8Code.GDButtonEraserObjects3.length = 0;
gdjs.Word8Code.GDButtonEraserObjects4.length = 0;
gdjs.Word8Code.GDPencilCursorObjects1.length = 0;
gdjs.Word8Code.GDPencilCursorObjects2.length = 0;
gdjs.Word8Code.GDPencilCursorObjects3.length = 0;
gdjs.Word8Code.GDPencilCursorObjects4.length = 0;
gdjs.Word8Code.GDButtonHomeObjects1.length = 0;
gdjs.Word8Code.GDButtonHomeObjects2.length = 0;
gdjs.Word8Code.GDButtonHomeObjects3.length = 0;
gdjs.Word8Code.GDButtonHomeObjects4.length = 0;
gdjs.Word8Code.GDNewVideoObjects1.length = 0;
gdjs.Word8Code.GDNewVideoObjects2.length = 0;
gdjs.Word8Code.GDNewVideoObjects3.length = 0;
gdjs.Word8Code.GDNewVideoObjects4.length = 0;
gdjs.Word8Code.GDStartObjects1.length = 0;
gdjs.Word8Code.GDStartObjects2.length = 0;
gdjs.Word8Code.GDStartObjects3.length = 0;
gdjs.Word8Code.GDStartObjects4.length = 0;
gdjs.Word8Code.GDNewSpriteObjects1.length = 0;
gdjs.Word8Code.GDNewSpriteObjects2.length = 0;
gdjs.Word8Code.GDNewSpriteObjects3.length = 0;
gdjs.Word8Code.GDNewSpriteObjects4.length = 0;

gdjs.Word8Code.eventsList21(runtimeScene);
return;

}

gdjs['Word8Code'] = gdjs.Word8Code;
