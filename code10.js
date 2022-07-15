gdjs.Word10Code = {};
gdjs.Word10Code.GDButtonEraserObjects2_1final = [];

gdjs.Word10Code.GDButtonPencilObjects2_1final = [];

gdjs.Word10Code.GDInkRedObjects2_1final = [];

gdjs.Word10Code.GDBackgroundObjects1= [];
gdjs.Word10Code.GDBackgroundObjects2= [];
gdjs.Word10Code.GDBackgroundObjects3= [];
gdjs.Word10Code.GDBackgroundObjects4= [];
gdjs.Word10Code.GDBackgroundOverlayObjects1= [];
gdjs.Word10Code.GDBackgroundOverlayObjects2= [];
gdjs.Word10Code.GDBackgroundOverlayObjects3= [];
gdjs.Word10Code.GDBackgroundOverlayObjects4= [];
gdjs.Word10Code.GDOverlayObjects1= [];
gdjs.Word10Code.GDOverlayObjects2= [];
gdjs.Word10Code.GDOverlayObjects3= [];
gdjs.Word10Code.GDOverlayObjects4= [];
gdjs.Word10Code.GDMarkerObjects1= [];
gdjs.Word10Code.GDMarkerObjects2= [];
gdjs.Word10Code.GDMarkerObjects3= [];
gdjs.Word10Code.GDMarkerObjects4= [];
gdjs.Word10Code.GDOutOfBoundObjects1= [];
gdjs.Word10Code.GDOutOfBoundObjects2= [];
gdjs.Word10Code.GDOutOfBoundObjects3= [];
gdjs.Word10Code.GDOutOfBoundObjects4= [];
gdjs.Word10Code.GDInkRedObjects1= [];
gdjs.Word10Code.GDInkRedObjects2= [];
gdjs.Word10Code.GDInkRedObjects3= [];
gdjs.Word10Code.GDInkRedObjects4= [];
gdjs.Word10Code.GDPointsObjects1= [];
gdjs.Word10Code.GDPointsObjects2= [];
gdjs.Word10Code.GDPointsObjects3= [];
gdjs.Word10Code.GDPointsObjects4= [];
gdjs.Word10Code.GDTryAgainObjects1= [];
gdjs.Word10Code.GDTryAgainObjects2= [];
gdjs.Word10Code.GDTryAgainObjects3= [];
gdjs.Word10Code.GDTryAgainObjects4= [];
gdjs.Word10Code.GDButtonBackObjects1= [];
gdjs.Word10Code.GDButtonBackObjects2= [];
gdjs.Word10Code.GDButtonBackObjects3= [];
gdjs.Word10Code.GDButtonBackObjects4= [];
gdjs.Word10Code.GDButtonNextObjects1= [];
gdjs.Word10Code.GDButtonNextObjects2= [];
gdjs.Word10Code.GDButtonNextObjects3= [];
gdjs.Word10Code.GDButtonNextObjects4= [];
gdjs.Word10Code.GDButtonPencilObjects1= [];
gdjs.Word10Code.GDButtonPencilObjects2= [];
gdjs.Word10Code.GDButtonPencilObjects3= [];
gdjs.Word10Code.GDButtonPencilObjects4= [];
gdjs.Word10Code.GDButtonEraserObjects1= [];
gdjs.Word10Code.GDButtonEraserObjects2= [];
gdjs.Word10Code.GDButtonEraserObjects3= [];
gdjs.Word10Code.GDButtonEraserObjects4= [];
gdjs.Word10Code.GDPencilCursorObjects1= [];
gdjs.Word10Code.GDPencilCursorObjects2= [];
gdjs.Word10Code.GDPencilCursorObjects3= [];
gdjs.Word10Code.GDPencilCursorObjects4= [];
gdjs.Word10Code.GDButtonHomeObjects1= [];
gdjs.Word10Code.GDButtonHomeObjects2= [];
gdjs.Word10Code.GDButtonHomeObjects3= [];
gdjs.Word10Code.GDButtonHomeObjects4= [];
gdjs.Word10Code.GDNewVideoObjects1= [];
gdjs.Word10Code.GDNewVideoObjects2= [];
gdjs.Word10Code.GDNewVideoObjects3= [];
gdjs.Word10Code.GDNewVideoObjects4= [];
gdjs.Word10Code.GDStartObjects1= [];
gdjs.Word10Code.GDStartObjects2= [];
gdjs.Word10Code.GDStartObjects3= [];
gdjs.Word10Code.GDStartObjects4= [];
gdjs.Word10Code.GDNewSpriteObjects1= [];
gdjs.Word10Code.GDNewSpriteObjects2= [];
gdjs.Word10Code.GDNewSpriteObjects3= [];
gdjs.Word10Code.GDNewSpriteObjects4= [];

gdjs.Word10Code.conditionTrue_0 = {val:false};
gdjs.Word10Code.condition0IsTrue_0 = {val:false};
gdjs.Word10Code.condition1IsTrue_0 = {val:false};
gdjs.Word10Code.condition2IsTrue_0 = {val:false};
gdjs.Word10Code.condition3IsTrue_0 = {val:false};
gdjs.Word10Code.condition4IsTrue_0 = {val:false};
gdjs.Word10Code.condition5IsTrue_0 = {val:false};
gdjs.Word10Code.condition6IsTrue_0 = {val:false};
gdjs.Word10Code.conditionTrue_1 = {val:false};
gdjs.Word10Code.condition0IsTrue_1 = {val:false};
gdjs.Word10Code.condition1IsTrue_1 = {val:false};
gdjs.Word10Code.condition2IsTrue_1 = {val:false};
gdjs.Word10Code.condition3IsTrue_1 = {val:false};
gdjs.Word10Code.condition4IsTrue_1 = {val:false};
gdjs.Word10Code.condition5IsTrue_1 = {val:false};
gdjs.Word10Code.condition6IsTrue_1 = {val:false};


gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word10Code.GDMarkerObjects1});
gdjs.Word10Code.eventsList0 = function(runtimeScene) {

{


gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition1IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21665516);
}
}}
if (gdjs.Word10Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Word10Code.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.Word10Code.GDButtonBackObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonEraser"), gdjs.Word10Code.GDButtonEraserObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonNext"), gdjs.Word10Code.GDButtonNextObjects1);
gdjs.copyArray(runtimeScene.getObjects("ButtonPencil"), gdjs.Word10Code.GDButtonPencilObjects1);
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.Word10Code.GDMarkerObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Word10Code.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Word10Code.GDNewVideoObjects1);
gdjs.copyArray(runtimeScene.getObjects("Overlay"), gdjs.Word10Code.GDOverlayObjects1);
gdjs.copyArray(runtimeScene.getObjects("TryAgain"), gdjs.Word10Code.GDTryAgainObjects1);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("GameEnd"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("OutOfBound"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("InstructionActive"), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("MouseActive"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("PencilActive"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("EraserActive"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("UIActive"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("FadeActive"), false);
}{runtimeScene.getGame().getVariables().get("ButtonPressed").setString("");
}{runtimeScene.getGame().getVariables().get("MarkerTotal").setNumber(gdjs.evtTools.object.pickedObjectsCount(gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects));
}{runtimeScene.getGame().getVariables().get("MarkerCount").setNumber(0);
}{for(var i = 0, len = gdjs.Word10Code.GDButtonBackObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonBackObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Word10Code.GDButtonNextObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonNextObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Word10Code.GDButtonPencilObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonPencilObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Word10Code.GDButtonEraserObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonEraserObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Word10Code.GDTryAgainObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDTryAgainObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Word10Code.GDButtonBackObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonBackObjects1[i].enableEffect("Glow", false);
}
}{for(var i = 0, len = gdjs.Word10Code.GDButtonNextObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonNextObjects1[i].enableEffect("Glow", false);
}
}{for(var i = 0, len = gdjs.Word10Code.GDButtonPencilObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonPencilObjects1[i].enableEffect("Glow", false);
}
}{for(var i = 0, len = gdjs.Word10Code.GDButtonEraserObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonEraserObjects1[i].enableEffect("Glow", false);
}
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Audio\\GoodJob.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Audio\\Instructions.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Audio\\TryAgain.wav");
}{gdjs.evtTools.sound.preloadSound(runtimeScene, "Image\\1.Learning\\L1_10_Audio.aac");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Marker layer");
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "OutOfBound layer");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "UI layer");
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Fade layer");
}{for(var i = 0, len = gdjs.Word10Code.GDOverlayObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDOverlayObjects1[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Word10Code.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDBackgroundObjects1[i].hide();
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("GameStart"), true);
}{for(var i = 0, len = gdjs.Word10Code.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDNewVideoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Word10Code.GDNewVideoObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDNewVideoObjects1[i].setLayer("Video");
}
}{for(var i = 0, len = gdjs.Word10Code.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDBackgroundObjects1[i].setLayer("Background layer");
}
}{for(var i = 0, len = gdjs.Word10Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDNewSpriteObjects1[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.Word10Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDNewSpriteObjects1[i].setAnimationFrame(0);
}
}{for(var i = 0, len = gdjs.Word10Code.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDNewSpriteObjects1[i].hide();
}
}}

}


};gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDStartObjects2Objects = Hashtable.newFrom({"Start": gdjs.Word10Code.GDStartObjects2});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDPencilCursorObjects2Objects = Hashtable.newFrom({"PencilCursor": gdjs.Word10Code.GDPencilCursorObjects2});
gdjs.Word10Code.eventsList1 = function(runtimeScene) {

{


gdjs.Word10Code.condition0IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("GameStart"), true);
}if (gdjs.Word10Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BackgroundOverlay"), gdjs.Word10Code.GDBackgroundOverlayObjects2);
{for(var i = 0, len = gdjs.Word10Code.GDBackgroundOverlayObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDBackgroundOverlayObjects2[i].getBehavior("Tween").addObjectOpacityTween("Fade", 0, "linear", 500, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackgroundOverlay"), gdjs.Word10Code.GDBackgroundOverlayObjects2);
gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.Word10Code.GDStartObjects2);

gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
gdjs.Word10Code.condition2IsTrue_0.val = false;
gdjs.Word10Code.condition3IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
gdjs.Word10Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDStartObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Word10Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Word10Code.GDBackgroundOverlayObjects2.length;i<l;++i) {
    if ( gdjs.Word10Code.GDBackgroundOverlayObjects2[i].getOpacity() < 50 ) {
        gdjs.Word10Code.condition2IsTrue_0.val = true;
        gdjs.Word10Code.GDBackgroundOverlayObjects2[k] = gdjs.Word10Code.GDBackgroundOverlayObjects2[i];
        ++k;
    }
}
gdjs.Word10Code.GDBackgroundOverlayObjects2.length = k;}if ( gdjs.Word10Code.condition2IsTrue_0.val ) {
{
gdjs.Word10Code.condition3IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("GameStart"), true);
}}
}
}
if (gdjs.Word10Code.condition3IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Word10Code.GDNewVideoObjects2);
/* Reuse gdjs.Word10Code.GDStartObjects2 */
{for(var i = 0, len = gdjs.Word10Code.GDNewVideoObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDNewVideoObjects2[i].play();
}
}{for(var i = 0, len = gdjs.Word10Code.GDStartObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDStartObjects2[i].setY(2000);
}
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Image\\1.Learning\\L1_10_Audio.aac", 1, false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Word10Code.GDNewVideoObjects2);

gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Word10Code.GDNewVideoObjects2.length;i<l;++i) {
    if ( gdjs.Word10Code.GDNewVideoObjects2[i].isEnded() ) {
        gdjs.Word10Code.condition0IsTrue_0.val = true;
        gdjs.Word10Code.GDNewVideoObjects2[k] = gdjs.Word10Code.GDNewVideoObjects2[i];
        ++k;
    }
}
gdjs.Word10Code.GDNewVideoObjects2.length = k;}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition1IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21618148);
}
}}
if (gdjs.Word10Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.Word10Code.GDBackgroundObjects2);
/* Reuse gdjs.Word10Code.GDNewVideoObjects2 */
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "Start");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Start");
}{for(var i = 0, len = gdjs.Word10Code.GDNewVideoObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDNewVideoObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Word10Code.GDBackgroundObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDBackgroundObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Word10Code.GDNewVideoObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDNewVideoObjects2[i].setCurrentTime(0);
}
}}

}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Start") > 0.1;
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition1IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21619372);
}
}}
if (gdjs.Word10Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Audio\\Instructions.wav", 1, false, 100, 1);
}}

}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Start") > 3;
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition1IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21620588);
}
}}
if (gdjs.Word10Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ButtonEraser"), gdjs.Word10Code.GDButtonEraserObjects2);
gdjs.copyArray(runtimeScene.getObjects("ButtonPencil"), gdjs.Word10Code.GDButtonPencilObjects2);
gdjs.Word10Code.GDPencilCursorObjects2.length = 0;

{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("InstructionActive"), false);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDPencilCursorObjects2Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "UI layer");
}{for(var i = 0, len = gdjs.Word10Code.GDPencilCursorObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDPencilCursorObjects2[i].setOpacity(0);
}
}{for(var i = 0, len = gdjs.Word10Code.GDPencilCursorObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDPencilCursorObjects2[i].setScale(0.2);
}
}{for(var i = 0, len = gdjs.Word10Code.GDPencilCursorObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDPencilCursorObjects2[i].getBehavior("Tween").addObjectOpacityTween("Fade", 255, "linear", 500, false);
}
}{for(var i = 0, len = gdjs.Word10Code.GDButtonPencilObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonPencilObjects2[i].setX(117.5);
}
}{for(var i = 0, len = gdjs.Word10Code.GDButtonEraserObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonEraserObjects2[i].setX(117.5);
}
}{for(var i = 0, len = gdjs.Word10Code.GDButtonPencilObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonPencilObjects2[i].getBehavior("Tween").addObjectOpacityTween("Fade", 255, "linear", 500, false);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("PencilActive"), true);
}{for(var i = 0, len = gdjs.Word10Code.GDButtonEraserObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonEraserObjects2[i].getBehavior("Tween").addObjectOpacityTween("Fade", 255, "linear", 500, false);
}
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "Start");
}}

}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
gdjs.Word10Code.condition2IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("InstructionActive"), false);
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
gdjs.Word10Code.condition1IsTrue_0.val = gdjs.evtTools.sound.isSoundOnChannelStopped(runtimeScene, 1);
}if ( gdjs.Word10Code.condition1IsTrue_0.val ) {
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition2IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21626052);
}
}}
}
if (gdjs.Word10Code.condition2IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("MouseActive"), true);
}}

}


{


{
}

}


};gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDOutOfBoundObjects2Objects = Hashtable.newFrom({"OutOfBound": gdjs.Word10Code.GDOutOfBoundObjects2});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonPencilObjects2Objects = Hashtable.newFrom({"ButtonPencil": gdjs.Word10Code.GDButtonPencilObjects2});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonEraserObjects2Objects = Hashtable.newFrom({"ButtonEraser": gdjs.Word10Code.GDButtonEraserObjects2});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDInkRedObjects2Objects = Hashtable.newFrom({"InkRed": gdjs.Word10Code.GDInkRedObjects2});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDInkRedObjects2Objects = Hashtable.newFrom({"InkRed": gdjs.Word10Code.GDInkRedObjects2});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDInkRedObjects3Objects = Hashtable.newFrom({"InkRed": gdjs.Word10Code.GDInkRedObjects3});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonPencilObjects3Objects = Hashtable.newFrom({"ButtonPencil": gdjs.Word10Code.GDButtonPencilObjects3});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDInkRedObjects3Objects = Hashtable.newFrom({"InkRed": gdjs.Word10Code.GDInkRedObjects3});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonEraserObjects3Objects = Hashtable.newFrom({"ButtonEraser": gdjs.Word10Code.GDButtonEraserObjects3});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDInkRedObjects2Objects = Hashtable.newFrom({"InkRed": gdjs.Word10Code.GDInkRedObjects2});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDOutOfBoundObjects2Objects = Hashtable.newFrom({"OutOfBound": gdjs.Word10Code.GDOutOfBoundObjects2});
gdjs.Word10Code.eventsList2 = function(runtimeScene) {

{


gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.sound.isSoundOnChannelStopped(runtimeScene, 2);
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition1IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21667244);
}
}}
if (gdjs.Word10Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Audio\\TryAgain.wav", 2, false, 100, 1);
}}

}


};gdjs.Word10Code.eventsList3 = function(runtimeScene) {

{


gdjs.Word10Code.condition0IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("GameEnd"), false);
}if (gdjs.Word10Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word10Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDPencilCursorObjects3Objects = Hashtable.newFrom({"PencilCursor": gdjs.Word10Code.GDPencilCursorObjects3});
gdjs.Word10Code.eventsList4 = function(runtimeScene) {

{


gdjs.Word10Code.condition0IsTrue_0.val = false;
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition0IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21668188);
}
}if (gdjs.Word10Code.condition0IsTrue_0.val) {
gdjs.Word10Code.GDPencilCursorObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDPencilCursorObjects3Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "UI layer");
}{for(var i = 0, len = gdjs.Word10Code.GDPencilCursorObjects3.length ;i < len;++i) {
    gdjs.Word10Code.GDPencilCursorObjects3[i].setScale(0.2);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("PencilCursor"), gdjs.Word10Code.GDPencilCursorObjects2);
{for(var i = 0, len = gdjs.Word10Code.GDPencilCursorObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDPencilCursorObjects2[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}}

}


};gdjs.Word10Code.eventsList5 = function(runtimeScene) {

{


gdjs.Word10Code.condition0IsTrue_0.val = false;
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition0IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21670124);
}
}if (gdjs.Word10Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PencilCursor"), gdjs.Word10Code.GDPencilCursorObjects3);
{for(var i = 0, len = gdjs.Word10Code.GDPencilCursorObjects3.length ;i < len;++i) {
    gdjs.Word10Code.GDPencilCursorObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


{


{
}

}


};gdjs.Word10Code.eventsList6 = function(runtimeScene) {

};gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonBackObjects2Objects = Hashtable.newFrom({"ButtonBack": gdjs.Word10Code.GDButtonBackObjects2});
gdjs.Word10Code.eventsList7 = function(runtimeScene) {

{


gdjs.Word10Code.condition0IsTrue_0.val = false;
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition0IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21671652);
}
}if (gdjs.Word10Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Word10Code.GDButtonBackObjects2, gdjs.Word10Code.GDButtonBackObjects3);

{for(var i = 0, len = gdjs.Word10Code.GDButtonBackObjects3.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonBackObjects3[i].getBehavior("Tween").addObjectScaleTween("Mouse", 0.9, 0.9, "bouncePast", 250, false, true);
}
}{for(var i = 0, len = gdjs.Word10Code.GDButtonBackObjects3.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonBackObjects3[i].enableEffect("Glow", true);
}
}}

}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition1IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21672860);
}
}}
if (gdjs.Word10Code.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.Word10Code.GDButtonBackObjects2, gdjs.Word10Code.GDButtonBackObjects3);

{for(var i = 0, len = gdjs.Word10Code.GDButtonBackObjects3.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonBackObjects3[i].getBehavior("Tween").addObjectScaleTween("Mouse", 0.7, 0.7, "easeOutQuad", 250, false, true);
}
}}

}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition1IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21673436);
}
}}
if (gdjs.Word10Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Word10Code.GDButtonBackObjects2 */
{for(var i = 0, len = gdjs.Word10Code.GDButtonBackObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonBackObjects2[i].getBehavior("Tween").addObjectScaleTween("Mouse", 0.9, 0.9, "bouncePast", 250, false, true);
}
}{runtimeScene.getGame().getVariables().get("ButtonPressed").setString("Back");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("FadeActive"), true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Fade");
}}

}


};gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonBackObjects2Objects = Hashtable.newFrom({"ButtonBack": gdjs.Word10Code.GDButtonBackObjects2});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonNextObjects2Objects = Hashtable.newFrom({"ButtonNext": gdjs.Word10Code.GDButtonNextObjects2});
gdjs.Word10Code.eventsList8 = function(runtimeScene) {

{


gdjs.Word10Code.condition0IsTrue_0.val = false;
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition0IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21676564);
}
}if (gdjs.Word10Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Word10Code.GDButtonNextObjects2, gdjs.Word10Code.GDButtonNextObjects3);

{for(var i = 0, len = gdjs.Word10Code.GDButtonNextObjects3.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonNextObjects3[i].getBehavior("Tween").addObjectScaleTween("Mouse", 0.9, 0.9, "bouncePast", 250, false, true);
}
}{for(var i = 0, len = gdjs.Word10Code.GDButtonNextObjects3.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonNextObjects3[i].enableEffect("Glow", true);
}
}}

}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition1IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21676420);
}
}}
if (gdjs.Word10Code.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.Word10Code.GDButtonNextObjects2, gdjs.Word10Code.GDButtonNextObjects3);

{for(var i = 0, len = gdjs.Word10Code.GDButtonNextObjects3.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonNextObjects3[i].getBehavior("Tween").addObjectScaleTween("Mouse", 0.7, 0.7, "bouncePast", 250, false, true);
}
}}

}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition1IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21678700);
}
}}
if (gdjs.Word10Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Word10Code.GDButtonNextObjects2 */
{for(var i = 0, len = gdjs.Word10Code.GDButtonNextObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonNextObjects2[i].getBehavior("Tween").addObjectScaleTween("Mouse", 0.9, 0.9, "bouncePast", 250, false, true);
}
}{runtimeScene.getGame().getVariables().get("ButtonPressed").setString("Next");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("FadeActive"), true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Fade");
}}

}


};gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonNextObjects2Objects = Hashtable.newFrom({"ButtonNext": gdjs.Word10Code.GDButtonNextObjects2});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonHomeObjects2Objects = Hashtable.newFrom({"ButtonHome": gdjs.Word10Code.GDButtonHomeObjects2});
gdjs.Word10Code.eventsList9 = function(runtimeScene) {

{


gdjs.Word10Code.condition0IsTrue_0.val = false;
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition0IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21681588);
}
}if (gdjs.Word10Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Word10Code.GDButtonHomeObjects2, gdjs.Word10Code.GDButtonHomeObjects3);

{}{for(var i = 0, len = gdjs.Word10Code.GDButtonHomeObjects3.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonHomeObjects3[i].enableEffect("Glow", true);
}
}}

}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition1IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21682668);
}
}}
if (gdjs.Word10Code.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.Word10Code.GDButtonHomeObjects2, gdjs.Word10Code.GDButtonHomeObjects3);

{}}

}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition1IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21682740);
}
}}
if (gdjs.Word10Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Word10Code.GDButtonHomeObjects2 */
{}{runtimeScene.getGame().getVariables().get("ButtonPressed").setString("Home");
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("FadeActive"), true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Fade");
}}

}


};gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonHomeObjects2Objects = Hashtable.newFrom({"ButtonHome": gdjs.Word10Code.GDButtonHomeObjects2});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonPencilObjects2Objects = Hashtable.newFrom({"ButtonPencil": gdjs.Word10Code.GDButtonPencilObjects2});
gdjs.Word10Code.eventsList10 = function(runtimeScene) {

{


gdjs.Word10Code.condition0IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("EraserActive"), true);
}if (gdjs.Word10Code.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("EraserActive"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("PencilActive"), true);
}}

}


};gdjs.Word10Code.eventsList11 = function(runtimeScene) {

{


gdjs.Word10Code.condition0IsTrue_0.val = false;
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition0IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21686492);
}
}if (gdjs.Word10Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Word10Code.GDButtonPencilObjects2, gdjs.Word10Code.GDButtonPencilObjects3);

{for(var i = 0, len = gdjs.Word10Code.GDButtonPencilObjects3.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonPencilObjects3[i].getBehavior("Tween").addObjectScaleTween("Mouse", 1.2, 1.2, "bouncePast", 250, false, true);
}
}{for(var i = 0, len = gdjs.Word10Code.GDButtonPencilObjects3.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonPencilObjects3[i].enableEffect("Glow", true);
}
}}

}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition1IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21686268);
}
}}
if (gdjs.Word10Code.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.Word10Code.GDButtonPencilObjects2, gdjs.Word10Code.GDButtonPencilObjects3);

{for(var i = 0, len = gdjs.Word10Code.GDButtonPencilObjects3.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonPencilObjects3[i].getBehavior("Tween").addObjectScaleTween("Mouse", 1.1, 1.1, "bouncePast", 250, false, true);
}
}}

}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition1IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21688276);
}
}}
if (gdjs.Word10Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Word10Code.GDButtonPencilObjects2 */
{for(var i = 0, len = gdjs.Word10Code.GDButtonPencilObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonPencilObjects2[i].getBehavior("Tween").addObjectScaleTween("Mouse", 1.2, 1.2, "bouncePast", 250, false, true);
}
}
{ //Subevents
gdjs.Word10Code.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonPencilObjects2Objects = Hashtable.newFrom({"ButtonPencil": gdjs.Word10Code.GDButtonPencilObjects2});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonEraserObjects2Objects = Hashtable.newFrom({"ButtonEraser": gdjs.Word10Code.GDButtonEraserObjects2});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDInkRedObjects2Objects = Hashtable.newFrom({"InkRed": gdjs.Word10Code.GDInkRedObjects2});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects2Objects = Hashtable.newFrom({"Marker": gdjs.Word10Code.GDMarkerObjects2});
gdjs.Word10Code.eventsList12 = function(runtimeScene) {

{


gdjs.Word10Code.condition0IsTrue_0.val = false;
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition0IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21691972);
}
}if (gdjs.Word10Code.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.Word10Code.GDButtonEraserObjects2, gdjs.Word10Code.GDButtonEraserObjects3);

{for(var i = 0, len = gdjs.Word10Code.GDButtonEraserObjects3.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonEraserObjects3[i].getBehavior("Tween").addObjectScaleTween("Mouse", 1.2, 1.2, "bouncePast", 250, false, true);
}
}{for(var i = 0, len = gdjs.Word10Code.GDButtonEraserObjects3.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonEraserObjects3[i].enableEffect("Glow", true);
}
}}

}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Word10Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("InkRed"), gdjs.Word10Code.GDInkRedObjects2);
gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.Word10Code.GDMarkerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.Word10Code.GDPointsObjects2);
{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDInkRedObjects2Objects);
}{for(var i = 0, len = gdjs.Word10Code.GDInkRedObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDInkRedObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects2Objects);
}{for(var i = 0, len = gdjs.Word10Code.GDMarkerObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDMarkerObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Word10Code.GDPointsObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDPointsObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().get("MarkerCount").setNumber(0);
}}

}


};gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonEraserObjects1Objects = Hashtable.newFrom({"ButtonEraser": gdjs.Word10Code.GDButtonEraserObjects1});
gdjs.Word10Code.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ButtonEraser"), gdjs.Word10Code.GDButtonEraserObjects2);
gdjs.copyArray(runtimeScene.getObjects("ButtonPencil"), gdjs.Word10Code.GDButtonPencilObjects2);
gdjs.copyArray(runtimeScene.getObjects("OutOfBound"), gdjs.Word10Code.GDOutOfBoundObjects2);

gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
gdjs.Word10Code.condition2IsTrue_0.val = false;
gdjs.Word10Code.condition3IsTrue_0.val = false;
gdjs.Word10Code.condition4IsTrue_0.val = false;
gdjs.Word10Code.condition5IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDOutOfBoundObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
gdjs.Word10Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonPencilObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Word10Code.condition1IsTrue_0.val ) {
{
gdjs.Word10Code.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonEraserObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Word10Code.condition2IsTrue_0.val ) {
{
gdjs.Word10Code.condition3IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Word10Code.condition3IsTrue_0.val ) {
{
gdjs.Word10Code.condition4IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("MouseActive"), true);
}if ( gdjs.Word10Code.condition4IsTrue_0.val ) {
{
gdjs.Word10Code.condition5IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("PencilActive"), true);
}}
}
}
}
}
if (gdjs.Word10Code.condition5IsTrue_0.val) {
gdjs.Word10Code.GDInkRedObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDInkRedObjects2Objects, gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), "Draw layer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("InkRed"), gdjs.Word10Code.GDInkRedObjects2);

gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
gdjs.Word10Code.condition2IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDInkRedObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
gdjs.Word10Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Word10Code.condition1IsTrue_0.val ) {
{
gdjs.Word10Code.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("EraserActive"), true);
}}
}
if (gdjs.Word10Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Word10Code.GDInkRedObjects2 */
{for(var i = 0, len = gdjs.Word10Code.GDInkRedObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDInkRedObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.Word10Code.GDButtonEraserObjects2.length = 0;

gdjs.Word10Code.GDButtonPencilObjects2.length = 0;

gdjs.Word10Code.GDInkRedObjects2.length = 0;


gdjs.Word10Code.condition0IsTrue_0.val = false;
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition0IsTrue_0;
gdjs.Word10Code.GDButtonEraserObjects2_1final.length = 0;gdjs.Word10Code.GDButtonPencilObjects2_1final.length = 0;gdjs.Word10Code.GDInkRedObjects2_1final.length = 0;gdjs.Word10Code.condition0IsTrue_1.val = false;
gdjs.Word10Code.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("ButtonPencil"), gdjs.Word10Code.GDButtonPencilObjects3);
gdjs.copyArray(runtimeScene.getObjects("InkRed"), gdjs.Word10Code.GDInkRedObjects3);
gdjs.Word10Code.condition0IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDInkRedObjects3Objects, gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonPencilObjects3Objects, false, runtimeScene, false);
if( gdjs.Word10Code.condition0IsTrue_1.val ) {
    gdjs.Word10Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Word10Code.GDButtonPencilObjects3.length;j<jLen;++j) {
        if ( gdjs.Word10Code.GDButtonPencilObjects2_1final.indexOf(gdjs.Word10Code.GDButtonPencilObjects3[j]) === -1 )
            gdjs.Word10Code.GDButtonPencilObjects2_1final.push(gdjs.Word10Code.GDButtonPencilObjects3[j]);
    }
    for(var j = 0, jLen = gdjs.Word10Code.GDInkRedObjects3.length;j<jLen;++j) {
        if ( gdjs.Word10Code.GDInkRedObjects2_1final.indexOf(gdjs.Word10Code.GDInkRedObjects3[j]) === -1 )
            gdjs.Word10Code.GDInkRedObjects2_1final.push(gdjs.Word10Code.GDInkRedObjects3[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("ButtonEraser"), gdjs.Word10Code.GDButtonEraserObjects3);
gdjs.copyArray(runtimeScene.getObjects("InkRed"), gdjs.Word10Code.GDInkRedObjects3);
gdjs.Word10Code.condition1IsTrue_1.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDInkRedObjects3Objects, gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonEraserObjects3Objects, false, runtimeScene, false);
if( gdjs.Word10Code.condition1IsTrue_1.val ) {
    gdjs.Word10Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.Word10Code.GDButtonEraserObjects3.length;j<jLen;++j) {
        if ( gdjs.Word10Code.GDButtonEraserObjects2_1final.indexOf(gdjs.Word10Code.GDButtonEraserObjects3[j]) === -1 )
            gdjs.Word10Code.GDButtonEraserObjects2_1final.push(gdjs.Word10Code.GDButtonEraserObjects3[j]);
    }
    for(var j = 0, jLen = gdjs.Word10Code.GDInkRedObjects3.length;j<jLen;++j) {
        if ( gdjs.Word10Code.GDInkRedObjects2_1final.indexOf(gdjs.Word10Code.GDInkRedObjects3[j]) === -1 )
            gdjs.Word10Code.GDInkRedObjects2_1final.push(gdjs.Word10Code.GDInkRedObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Word10Code.GDButtonEraserObjects2_1final, gdjs.Word10Code.GDButtonEraserObjects2);
gdjs.copyArray(gdjs.Word10Code.GDButtonPencilObjects2_1final, gdjs.Word10Code.GDButtonPencilObjects2);
gdjs.copyArray(gdjs.Word10Code.GDInkRedObjects2_1final, gdjs.Word10Code.GDInkRedObjects2);
}
}
}if (gdjs.Word10Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Word10Code.GDInkRedObjects2 */
{for(var i = 0, len = gdjs.Word10Code.GDInkRedObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDInkRedObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("InkRed"), gdjs.Word10Code.GDInkRedObjects2);
gdjs.copyArray(runtimeScene.getObjects("OutOfBound"), gdjs.Word10Code.GDOutOfBoundObjects2);

gdjs.Word10Code.condition0IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDInkRedObjects2Objects, gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDOutOfBoundObjects2Objects, false, runtimeScene, false);
}if (gdjs.Word10Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Word10Code.GDInkRedObjects2 */
{for(var i = 0, len = gdjs.Word10Code.GDInkRedObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDInkRedObjects2[i].deleteFromScene(runtimeScene);
}
}
{ //Subevents
gdjs.Word10Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("PencilActive"), true);
}if (gdjs.Word10Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word10Code.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("EraserActive"), true);
}if (gdjs.Word10Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word10Code.eventsList5(runtimeScene);} //End of subevents
}

}


{


gdjs.Word10Code.eventsList6(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.Word10Code.GDButtonBackObjects2);

gdjs.Word10Code.condition0IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonBackObjects2Objects, runtimeScene, true, false);
}if (gdjs.Word10Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word10Code.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.Word10Code.GDButtonBackObjects2);

gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonBackObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition1IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21674924);
}
}}
if (gdjs.Word10Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Word10Code.GDButtonBackObjects2 */
{for(var i = 0, len = gdjs.Word10Code.GDButtonBackObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonBackObjects2[i].getBehavior("Tween").addObjectScaleTween("Mouse", 0.85, 0.85, "bouncePast", 250, false, true);
}
}{for(var i = 0, len = gdjs.Word10Code.GDButtonBackObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonBackObjects2[i].enableEffect("Glow", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonNext"), gdjs.Word10Code.GDButtonNextObjects2);

gdjs.Word10Code.condition0IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonNextObjects2Objects, runtimeScene, true, false);
}if (gdjs.Word10Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word10Code.eventsList8(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonNext"), gdjs.Word10Code.GDButtonNextObjects2);

gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonNextObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition1IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21679876);
}
}}
if (gdjs.Word10Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Word10Code.GDButtonNextObjects2 */
{for(var i = 0, len = gdjs.Word10Code.GDButtonNextObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonNextObjects2[i].getBehavior("Tween").addObjectScaleTween("Mouse", 0.85, 0.85, "bouncePast", 250, false, true);
}
}{for(var i = 0, len = gdjs.Word10Code.GDButtonNextObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonNextObjects2[i].enableEffect("Glow", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonHome"), gdjs.Word10Code.GDButtonHomeObjects2);

gdjs.Word10Code.condition0IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonHomeObjects2Objects, runtimeScene, true, false);
}if (gdjs.Word10Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word10Code.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonHome"), gdjs.Word10Code.GDButtonHomeObjects2);

gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonHomeObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition1IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21684772);
}
}}
if (gdjs.Word10Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Word10Code.GDButtonHomeObjects2 */
{}{for(var i = 0, len = gdjs.Word10Code.GDButtonHomeObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonHomeObjects2[i].enableEffect("Glow", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonPencil"), gdjs.Word10Code.GDButtonPencilObjects2);

gdjs.Word10Code.condition0IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonPencilObjects2Objects, runtimeScene, true, false);
}if (gdjs.Word10Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word10Code.eventsList11(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonPencil"), gdjs.Word10Code.GDButtonPencilObjects2);

gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonPencilObjects2Objects, runtimeScene, true, true);
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition1IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21690460);
}
}}
if (gdjs.Word10Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Word10Code.GDButtonPencilObjects2 */
{for(var i = 0, len = gdjs.Word10Code.GDButtonPencilObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonPencilObjects2[i].getBehavior("Tween").addObjectScaleTween("Mouse", 1, 1, "bouncePast", 250, false, true);
}
}{for(var i = 0, len = gdjs.Word10Code.GDButtonPencilObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonPencilObjects2[i].enableEffect("Glow", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonEraser"), gdjs.Word10Code.GDButtonEraserObjects2);

gdjs.Word10Code.condition0IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonEraserObjects2Objects, runtimeScene, true, false);
}if (gdjs.Word10Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word10Code.eventsList12(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ButtonEraser"), gdjs.Word10Code.GDButtonEraserObjects1);

gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDButtonEraserObjects1Objects, runtimeScene, true, true);
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition1IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21694484);
}
}}
if (gdjs.Word10Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Word10Code.GDButtonEraserObjects1 */
{for(var i = 0, len = gdjs.Word10Code.GDButtonEraserObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonEraserObjects1[i].getBehavior("Tween").addObjectScaleTween("Mouse", 1, 1, "bouncePast", 250, false, true);
}
}{for(var i = 0, len = gdjs.Word10Code.GDButtonEraserObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonEraserObjects1[i].enableEffect("Glow", false);
}
}}

}


};gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects2Objects = Hashtable.newFrom({"Marker": gdjs.Word10Code.GDMarkerObjects2});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects2Objects = Hashtable.newFrom({"Marker": gdjs.Word10Code.GDMarkerObjects2});
gdjs.Word10Code.eventsList14 = function(runtimeScene) {

{


gdjs.Word10Code.condition0IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("PencilActive"), true);
}if (gdjs.Word10Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("PencilCursor"), gdjs.Word10Code.GDPencilCursorObjects3);
{for(var i = 0, len = gdjs.Word10Code.GDPencilCursorObjects3.length ;i < len;++i) {
    gdjs.Word10Code.GDPencilCursorObjects3[i].getBehavior("Tween").addObjectOpacityTween("Fade", 0, "linear", 500, false);
}
}}

}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("EraserActive"), true);
}if (gdjs.Word10Code.condition0IsTrue_0.val) {
}

}


};gdjs.Word10Code.eventsList15 = function(runtimeScene) {

{


gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "UI") > 1;
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition1IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21702084);
}
}}
if (gdjs.Word10Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.Word10Code.GDButtonBackObjects3);
gdjs.copyArray(runtimeScene.getObjects("ButtonNext"), gdjs.Word10Code.GDButtonNextObjects3);
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.Word10Code.GDNewSpriteObjects3);
gdjs.copyArray(runtimeScene.getObjects("Overlay"), gdjs.Word10Code.GDOverlayObjects3);
gdjs.copyArray(runtimeScene.getObjects("PencilCursor"), gdjs.Word10Code.GDPencilCursorObjects3);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("PencilActive"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("EraserActive"), false);
}{for(var i = 0, len = gdjs.Word10Code.GDPencilCursorObjects3.length ;i < len;++i) {
    gdjs.Word10Code.GDPencilCursorObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Word10Code.GDOverlayObjects3.length ;i < len;++i) {
    gdjs.Word10Code.GDOverlayObjects3[i].getBehavior("Tween").addObjectOpacityTween("Fade", 255, "linear", 500, false);
}
}{for(var i = 0, len = gdjs.Word10Code.GDButtonNextObjects3.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonNextObjects3[i].setY(597.5);
}
}{for(var i = 0, len = gdjs.Word10Code.GDButtonBackObjects3.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonBackObjects3[i].setY(597.5);
}
}{for(var i = 0, len = gdjs.Word10Code.GDNewSpriteObjects3.length ;i < len;++i) {
    gdjs.Word10Code.GDNewSpriteObjects3[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.Word10Code.GDNewSpriteObjects3.length ;i < len;++i) {
    gdjs.Word10Code.GDNewSpriteObjects3[i].hide(false);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Audio\\GoodJob.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.Word10Code.GDNewSpriteObjects3.length ;i < len;++i) {
    gdjs.Word10Code.GDNewSpriteObjects3[i].playAnimation();
}
}}

}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "UI") > 1.5;
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition1IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21704812);
}
}}
if (gdjs.Word10Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.Word10Code.GDButtonBackObjects2);
gdjs.copyArray(runtimeScene.getObjects("ButtonNext"), gdjs.Word10Code.GDButtonNextObjects2);
{for(var i = 0, len = gdjs.Word10Code.GDButtonNextObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonNextObjects2[i].getBehavior("Tween").addObjectOpacityTween("Fade", 255, "linear", 500, false);
}
}{for(var i = 0, len = gdjs.Word10Code.GDButtonBackObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonBackObjects2[i].getBehavior("Tween").addObjectOpacityTween("Fade", 255, "linear", 500, false);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("UIActive"), false);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "UI");
}}

}


};gdjs.Word10Code.eventsList16 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("NewVideo"), gdjs.Word10Code.GDNewVideoObjects2);

gdjs.Word10Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Word10Code.GDNewVideoObjects2.length;i<l;++i) {
    if ( gdjs.Word10Code.GDNewVideoObjects2[i].isPlayed() ) {
        gdjs.Word10Code.condition0IsTrue_0.val = true;
        gdjs.Word10Code.GDNewVideoObjects2[k] = gdjs.Word10Code.GDNewVideoObjects2[i];
        ++k;
    }
}
gdjs.Word10Code.GDNewVideoObjects2.length = k;}if (gdjs.Word10Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Word10Code.GDNewVideoObjects2 */
{for(var i = 0, len = gdjs.Word10Code.GDNewVideoObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDNewVideoObjects2[i].pause();
}
}{for(var i = 0, len = gdjs.Word10Code.GDNewVideoObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDNewVideoObjects2[i].setCurrentTime(0);
}
}}

}


{


{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


};gdjs.Word10Code.eventsList17 = function(runtimeScene) {

{


gdjs.Word10Code.condition0IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("ButtonPressed")) == "Back";
}if (gdjs.Word10Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Word9", true);
}}

}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("ButtonPressed")) == "Next";
}if (gdjs.Word10Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Word11", true);
}}

}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("ButtonPressed")) == "Home";
}if (gdjs.Word10Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word10Code.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.Word10Code.eventsList18 = function(runtimeScene) {

{


gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Fade") > 0;
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition1IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21706268);
}
}}
if (gdjs.Word10Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ButtonBack"), gdjs.Word10Code.GDButtonBackObjects2);
gdjs.copyArray(runtimeScene.getObjects("ButtonNext"), gdjs.Word10Code.GDButtonNextObjects2);
{for(var i = 0, len = gdjs.Word10Code.GDButtonNextObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonNextObjects2[i].getBehavior("Tween").addObjectOpacityTween("Fade", 0, "linear", 500, false);
}
}{for(var i = 0, len = gdjs.Word10Code.GDButtonBackObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDButtonBackObjects2[i].getBehavior("Tween").addObjectOpacityTween("Fade", 0, "linear", 500, false);
}
}}

}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Fade") > 0.25;
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition1IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21706836);
}
}}
if (gdjs.Word10Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BackgroundOverlay"), gdjs.Word10Code.GDBackgroundOverlayObjects2);
{for(var i = 0, len = gdjs.Word10Code.GDBackgroundOverlayObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDBackgroundOverlayObjects2[i].getBehavior("Tween").addObjectOpacityTween("Fade", 255, "linear", 500, false);
}
}}

}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Fade") > 0.75;
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
{gdjs.Word10Code.conditionTrue_1 = gdjs.Word10Code.condition1IsTrue_0;
gdjs.Word10Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(21708260);
}
}}
if (gdjs.Word10Code.condition1IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("FadeActive"), false);
}{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "Fade");
}
{ //Subevents
gdjs.Word10Code.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.Word10Code.eventsList19 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.Word10Code.GDMarkerObjects2);

gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
gdjs.Word10Code.condition2IsTrue_0.val = false;
gdjs.Word10Code.condition3IsTrue_0.val = false;
gdjs.Word10Code.condition4IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Word10Code.GDMarkerObjects2.length;i<l;++i) {
    if ( gdjs.Word10Code.GDMarkerObjects2[i].getVariableBoolean(gdjs.Word10Code.GDMarkerObjects2[i].getVariables().getFromIndex(0), false) ) {
        gdjs.Word10Code.condition1IsTrue_0.val = true;
        gdjs.Word10Code.GDMarkerObjects2[k] = gdjs.Word10Code.GDMarkerObjects2[i];
        ++k;
    }
}
gdjs.Word10Code.GDMarkerObjects2.length = k;}if ( gdjs.Word10Code.condition1IsTrue_0.val ) {
{
gdjs.Word10Code.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("PencilActive"), true);
}if ( gdjs.Word10Code.condition2IsTrue_0.val ) {
{
gdjs.Word10Code.condition3IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("MouseActive"), true);
}if ( gdjs.Word10Code.condition3IsTrue_0.val ) {
{
gdjs.Word10Code.condition4IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
}
}
}
if (gdjs.Word10Code.condition4IsTrue_0.val) {
/* Reuse gdjs.Word10Code.GDMarkerObjects2 */
{for(var i = 0, len = gdjs.Word10Code.GDMarkerObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDMarkerObjects2[i].setVariableBoolean(gdjs.Word10Code.GDMarkerObjects2[i].getVariables().getFromIndex(0), true);
}
}{runtimeScene.getGame().getVariables().get("MarkerCount").add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Marker"), gdjs.Word10Code.GDMarkerObjects2);

gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
gdjs.Word10Code.condition2IsTrue_0.val = false;
gdjs.Word10Code.condition3IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Word10Code.GDMarkerObjects2.length;i<l;++i) {
    if ( gdjs.Word10Code.GDMarkerObjects2[i].getVariableBoolean(gdjs.Word10Code.GDMarkerObjects2[i].getVariables().getFromIndex(0), true) ) {
        gdjs.Word10Code.condition1IsTrue_0.val = true;
        gdjs.Word10Code.GDMarkerObjects2[k] = gdjs.Word10Code.GDMarkerObjects2[i];
        ++k;
    }
}
gdjs.Word10Code.GDMarkerObjects2.length = k;}if ( gdjs.Word10Code.condition1IsTrue_0.val ) {
{
gdjs.Word10Code.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("EraserActive"), true);
}if ( gdjs.Word10Code.condition2IsTrue_0.val ) {
{
gdjs.Word10Code.condition3IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
}
}
if (gdjs.Word10Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Word10Code.GDMarkerObjects2 */
{for(var i = 0, len = gdjs.Word10Code.GDMarkerObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDMarkerObjects2[i].setVariableBoolean(gdjs.Word10Code.GDMarkerObjects2[i].getVariables().getFromIndex(0), false);
}
}{runtimeScene.getGame().getVariables().get("MarkerCount").sub(1);
}}

}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
gdjs.Word10Code.condition1IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("MarkerCount")) == 20;
}if ( gdjs.Word10Code.condition0IsTrue_0.val ) {
{
gdjs.Word10Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.Word10Code.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.Word10Code.GDPointsObjects2);
{for(var i = 0, len = gdjs.Word10Code.GDPointsObjects2.length ;i < len;++i) {
    gdjs.Word10Code.GDPointsObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("MouseActive"), false);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("UIActive"), true);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().get("GameEnd"), true);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "UI");
}
{ //Subevents
gdjs.Word10Code.eventsList14(runtimeScene);} //End of subevents
}

}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("UIActive"), true);
}if (gdjs.Word10Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word10Code.eventsList15(runtimeScene);} //End of subevents
}

}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().get("FadeActive"), true);
}if (gdjs.Word10Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Word10Code.eventsList18(runtimeScene);} //End of subevents
}

}


};gdjs.Word10Code.eventsList20 = function(runtimeScene) {

};gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDPointsObjects1Objects = Hashtable.newFrom({"Points": gdjs.Word10Code.GDPointsObjects1});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word10Code.GDMarkerObjects1});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word10Code.GDMarkerObjects1});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word10Code.GDMarkerObjects1});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDPointsObjects1Objects = Hashtable.newFrom({"Points": gdjs.Word10Code.GDPointsObjects1});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word10Code.GDMarkerObjects1});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word10Code.GDMarkerObjects1});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word10Code.GDMarkerObjects1});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word10Code.GDMarkerObjects1});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDPointsObjects1Objects = Hashtable.newFrom({"Points": gdjs.Word10Code.GDPointsObjects1});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word10Code.GDMarkerObjects1});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word10Code.GDMarkerObjects1});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDPointsObjects1Objects = Hashtable.newFrom({"Points": gdjs.Word10Code.GDPointsObjects1});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word10Code.GDMarkerObjects1});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word10Code.GDMarkerObjects1});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word10Code.GDMarkerObjects1});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word10Code.GDMarkerObjects1});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDPointsObjects1Objects = Hashtable.newFrom({"Points": gdjs.Word10Code.GDPointsObjects1});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word10Code.GDMarkerObjects1});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word10Code.GDMarkerObjects1});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word10Code.GDMarkerObjects1});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word10Code.GDMarkerObjects1});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word10Code.GDMarkerObjects1});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word10Code.GDMarkerObjects1});
gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects = Hashtable.newFrom({"Marker": gdjs.Word10Code.GDMarkerObjects1});
gdjs.Word10Code.eventsList21 = function(runtimeScene) {

{


gdjs.Word10Code.eventsList0(runtimeScene);
}


{


gdjs.Word10Code.eventsList1(runtimeScene);
}


{


gdjs.Word10Code.eventsList13(runtimeScene);
}


{


gdjs.Word10Code.eventsList19(runtimeScene);
}


{


gdjs.Word10Code.eventsList20(runtimeScene);
}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("MarkerCount")) == 0;
}if (gdjs.Word10Code.condition0IsTrue_0.val) {
gdjs.Word10Code.GDMarkerObjects1.length = 0;

gdjs.Word10Code.GDPointsObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDPointsObjects1Objects, 560.5, 225.5, "Hint Layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects, 560.5, 225.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects, 520.5, 305.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects, 455.5, 385.5, "Draw layer");
}{for(var i = 0, len = gdjs.Word10Code.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDMarkerObjects1[i].hide();
}
}}

}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("MarkerCount")) == 3;
}if (gdjs.Word10Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.Word10Code.GDPointsObjects1);
gdjs.Word10Code.GDMarkerObjects1.length = 0;

{for(var i = 0, len = gdjs.Word10Code.GDPointsObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDPointsObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDPointsObjects1Objects, 530.5, 335.5, "Hint Layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects, 530.5, 335.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects, 530.5, 410.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects, 530.5, 450.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects, 520.5, 520.5, "Draw layer");
}{for(var i = 0, len = gdjs.Word10Code.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDMarkerObjects1[i].hide();
}
}}

}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("MarkerCount")) == 7;
}if (gdjs.Word10Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.Word10Code.GDPointsObjects1);
gdjs.Word10Code.GDMarkerObjects1.length = 0;

{for(var i = 0, len = gdjs.Word10Code.GDPointsObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDPointsObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDPointsObjects1Objects, 610.5, 240.5, "Hint Layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects, 610.5, 240.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects, 645.5, 270.5, "Draw layer");
}{for(var i = 0, len = gdjs.Word10Code.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDMarkerObjects1[i].hide();
}
}}

}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("MarkerCount")) == 9;
}if (gdjs.Word10Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.Word10Code.GDPointsObjects1);
gdjs.Word10Code.GDMarkerObjects1.length = 0;

{for(var i = 0, len = gdjs.Word10Code.GDPointsObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDPointsObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDPointsObjects1Objects, 605.5, 300.5, "Hint Layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects, 605.5, 300.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects, 605.5, 380.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects, 605.5, 440.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects, 600.5, 505.5, "Draw layer");
}{for(var i = 0, len = gdjs.Word10Code.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDMarkerObjects1[i].hide();
}
}}

}


{


gdjs.Word10Code.condition0IsTrue_0.val = false;
{
gdjs.Word10Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("MarkerCount")) == 13;
}if (gdjs.Word10Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Points"), gdjs.Word10Code.GDPointsObjects1);
gdjs.Word10Code.GDMarkerObjects1.length = 0;

{for(var i = 0, len = gdjs.Word10Code.GDPointsObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDPointsObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDPointsObjects1Objects, 685.5, 275.5, "Hint Layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects, 685.5, 275.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects, 745.5, 260.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects, 770.5, 290.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects, 775.5, 390.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects, 775.5, 460.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects, 770.5, 520.5, "Draw layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Word10Code.mapOfGDgdjs_46Word10Code_46GDMarkerObjects1Objects, 720.5, 505.5, "Draw layer");
}{for(var i = 0, len = gdjs.Word10Code.GDMarkerObjects1.length ;i < len;++i) {
    gdjs.Word10Code.GDMarkerObjects1[i].hide();
}
}}

}


{


{
}

}


};

gdjs.Word10Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Word10Code.GDBackgroundObjects1.length = 0;
gdjs.Word10Code.GDBackgroundObjects2.length = 0;
gdjs.Word10Code.GDBackgroundObjects3.length = 0;
gdjs.Word10Code.GDBackgroundObjects4.length = 0;
gdjs.Word10Code.GDBackgroundOverlayObjects1.length = 0;
gdjs.Word10Code.GDBackgroundOverlayObjects2.length = 0;
gdjs.Word10Code.GDBackgroundOverlayObjects3.length = 0;
gdjs.Word10Code.GDBackgroundOverlayObjects4.length = 0;
gdjs.Word10Code.GDOverlayObjects1.length = 0;
gdjs.Word10Code.GDOverlayObjects2.length = 0;
gdjs.Word10Code.GDOverlayObjects3.length = 0;
gdjs.Word10Code.GDOverlayObjects4.length = 0;
gdjs.Word10Code.GDMarkerObjects1.length = 0;
gdjs.Word10Code.GDMarkerObjects2.length = 0;
gdjs.Word10Code.GDMarkerObjects3.length = 0;
gdjs.Word10Code.GDMarkerObjects4.length = 0;
gdjs.Word10Code.GDOutOfBoundObjects1.length = 0;
gdjs.Word10Code.GDOutOfBoundObjects2.length = 0;
gdjs.Word10Code.GDOutOfBoundObjects3.length = 0;
gdjs.Word10Code.GDOutOfBoundObjects4.length = 0;
gdjs.Word10Code.GDInkRedObjects1.length = 0;
gdjs.Word10Code.GDInkRedObjects2.length = 0;
gdjs.Word10Code.GDInkRedObjects3.length = 0;
gdjs.Word10Code.GDInkRedObjects4.length = 0;
gdjs.Word10Code.GDPointsObjects1.length = 0;
gdjs.Word10Code.GDPointsObjects2.length = 0;
gdjs.Word10Code.GDPointsObjects3.length = 0;
gdjs.Word10Code.GDPointsObjects4.length = 0;
gdjs.Word10Code.GDTryAgainObjects1.length = 0;
gdjs.Word10Code.GDTryAgainObjects2.length = 0;
gdjs.Word10Code.GDTryAgainObjects3.length = 0;
gdjs.Word10Code.GDTryAgainObjects4.length = 0;
gdjs.Word10Code.GDButtonBackObjects1.length = 0;
gdjs.Word10Code.GDButtonBackObjects2.length = 0;
gdjs.Word10Code.GDButtonBackObjects3.length = 0;
gdjs.Word10Code.GDButtonBackObjects4.length = 0;
gdjs.Word10Code.GDButtonNextObjects1.length = 0;
gdjs.Word10Code.GDButtonNextObjects2.length = 0;
gdjs.Word10Code.GDButtonNextObjects3.length = 0;
gdjs.Word10Code.GDButtonNextObjects4.length = 0;
gdjs.Word10Code.GDButtonPencilObjects1.length = 0;
gdjs.Word10Code.GDButtonPencilObjects2.length = 0;
gdjs.Word10Code.GDButtonPencilObjects3.length = 0;
gdjs.Word10Code.GDButtonPencilObjects4.length = 0;
gdjs.Word10Code.GDButtonEraserObjects1.length = 0;
gdjs.Word10Code.GDButtonEraserObjects2.length = 0;
gdjs.Word10Code.GDButtonEraserObjects3.length = 0;
gdjs.Word10Code.GDButtonEraserObjects4.length = 0;
gdjs.Word10Code.GDPencilCursorObjects1.length = 0;
gdjs.Word10Code.GDPencilCursorObjects2.length = 0;
gdjs.Word10Code.GDPencilCursorObjects3.length = 0;
gdjs.Word10Code.GDPencilCursorObjects4.length = 0;
gdjs.Word10Code.GDButtonHomeObjects1.length = 0;
gdjs.Word10Code.GDButtonHomeObjects2.length = 0;
gdjs.Word10Code.GDButtonHomeObjects3.length = 0;
gdjs.Word10Code.GDButtonHomeObjects4.length = 0;
gdjs.Word10Code.GDNewVideoObjects1.length = 0;
gdjs.Word10Code.GDNewVideoObjects2.length = 0;
gdjs.Word10Code.GDNewVideoObjects3.length = 0;
gdjs.Word10Code.GDNewVideoObjects4.length = 0;
gdjs.Word10Code.GDStartObjects1.length = 0;
gdjs.Word10Code.GDStartObjects2.length = 0;
gdjs.Word10Code.GDStartObjects3.length = 0;
gdjs.Word10Code.GDStartObjects4.length = 0;
gdjs.Word10Code.GDNewSpriteObjects1.length = 0;
gdjs.Word10Code.GDNewSpriteObjects2.length = 0;
gdjs.Word10Code.GDNewSpriteObjects3.length = 0;
gdjs.Word10Code.GDNewSpriteObjects4.length = 0;

gdjs.Word10Code.eventsList21(runtimeScene);
return;

}

gdjs['Word10Code'] = gdjs.Word10Code;
