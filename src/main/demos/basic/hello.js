/**
* This file is part of Qunee for HTML5.
* Copyright (c) 2016 by qunee.com
**/
if(!window.getI18NString){getI18NString = function(s){return s;}}
var graph = new Q.Graph(canvas);
var hello = graph.createNode("Hello", -100, -50);
hello.image = Q.Graphs.server;
var qunee = graph.createNode("Qunee", 100, 50);
var edge = graph.createEdge("Hello\nQunee", hello, qunee);

edge.setStyle(Q.Styles.LABEL_OFFSET_Y, -10);
edge.setStyle(Q.Styles.LABEL_POSITION, Q.Position.CENTER_TOP);
edge.setStyle(Q.Styles.LABEL_ANCHOR_POSITION, Q.Position.CENTER_BOTTOM);
edge.setStyle(Q.Styles.LABEL_BORDER, 1);
edge.setStyle(Q.Styles.LABEL_POINTER, true);
edge.setStyle(Q.Styles.LABEL_PADDING, new Q.Insets(2, 5));
edge.setStyle(Q.Styles.LABEL_BACKGROUND_GRADIENT, Q.Gradient.LINEAR_GRADIENT_VERTICAL);


var s=document.getElementById("show_list");

if(s.style.display == "block"){
    s.style.display = "none";
}

var g=document.getElementById("graph_panel");

if(g.style.display == "none"){
    g.style.display = "block";
}


/*
if(!Q.Element.prototype.initAlarmBalloon){

    Object.defineProperties(Q.Element.prototype, {

        alarmColor1: {
            get: function(){
                return this._alarmColor;
            },
            set: function(color){
                if(this._alarmColor == color){
                    return;
                }
                this._alarmColor = color;
                this.setStyle(Q.Styles.RENDER_COLOR, color);//渲染颜色
                // this._checkAlarmBalloon();
            }
        }
    })
}



var AlarmSeverity = {
    MINOR: {color: Q.toColor(0xEEFFFF00), sortName: "m"},
}//警示严重程度

var all = [];



for(var name in AlarmSeverity){
    all.push(AlarmSeverity[name]);
}
AlarmSeverity.all = all;



Object.defineProperties(AlarmSeverity, {
    random: {
        get: function(){
            return this.all[Q.randomInt(this.all.length)];
        }
    }
})
var timer = setTimeout(function A(){
    graph.forEach(function(element){
        if(Q.randomBool()){       //随机布尔值
//            element.alarmLabel = null;
            element.alarmColor1 = null;
            return;
        }
        var alarmSeverity = AlarmSeverity.random;
 //       element.alarmLabel = "" + (1 + Q.randomInt(100)) + alarmSeverity.sortName + (Q.randomBool() ? "+" : "");
        element.alarmColor1 = alarmSeverity.color;
    })
    timer = setTimeout(A, 2000);
}, 1000);

function destroy(){
    clearTimeout(timer);
}
*/