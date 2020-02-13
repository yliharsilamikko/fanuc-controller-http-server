const status_view = (data) => {

    let html = `<html>
<head>
<meta http-equiv="Cache-Control" content="no-cache">
<meta http-equiv="Cache-Control" content="no-store">
<meta http-equiv="Pragma" content="no-cache">
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1">
<title> ROBOT (robot) Homepage </title>


<script language=javascript>
<!--
var openSetupWin = null;
var openLogWin = null;
var openRuntimeWin = null;
var clientSetupObj = null;

function CenterPopup(URL, width, height) {
  try {
    if (!clientSetupObj) { //not created yet
      clientSetupObj = new ActiveXObject("VisionWebControls.VWCClientSetupObject");
      clientSetupObj.Environment("FANUC_LANG") = "eg";
    }
  }
  catch (err) {
    //ignore errors
  }
  var left = (screen.width-width)/2;
  if (left < 0) {
    left = 0;
  }
  var top = (screen.height-height)/2;
  if (top < 0) {
    top = 0;
  }
  var features='"toolbar=no, location=no, status=no, menubar=no, scrollbars=no, resizable=yes, ' +
      'width=' + width + ', ' +
      'height=' + height + ', ' +
      'top=' + top + ', ' + //
      'left=' + left + '"';
  var popup = window.open(URL, "_blank", features, false);
  if (popup == null) {
    alert("Please enable pop-up windows in Internet Explorer.");
  }
  else {
    popup.focus()
  }
  return popup;
}

////////////////////////////////////////////////////////////////////////////////
// Open Vision Setup
////////////////////////////////////////////////////////////////////////////////
function OpenVisionSetup() {
  try {
    if (openSetupWin && !openSetupWin.closed) {
      // already open
      openSetupWin.focus();
      return;
    }
  } catch (err) {
  }
  var mobj = null;
  try {
    mobj = new ActiveXObject("VisionWebControls.VWCInfo");
  } catch (err) {
    openSetupWin = CenterPopup("/FRH/VISION/VSINST.STM?_page=VSSET.HTM&_vnum=", 1024, 520);
    return;
  }
  openSetupWin = CenterPopup("/FRH/VISION/VSSET.HTM", 1024, 520);
}

////////////////////////////////////////////////////////////////////////////////
// Open Vision Log
////////////////////////////////////////////////////////////////////////////////
function OpenVisionLog() {
  try {
    if (openLogWin && !openLogWin.closed) {
      // already open
      openLogWin.focus();
      return;
    }
  } catch (err) {
  }
  var mobj = null;
  try {
    mobj = new ActiveXObject("VisionWebControls.VWCInfo");
  } catch (err) {
    openLogWin = CenterPopup("/FRH/VISION/VSINST.STM?_page=VLFRMN.STM&_vnum=", 704, 528);
    return;
  }
  openLogWin = CenterPopup("/FRH/VISION/VLFRMN.STM", 704, 528);
}

////////////////////////////////////////////////////////////////////////////////
// Open Vision Runtime
////////////////////////////////////////////////////////////////////////////////
function OpenVisionRuntime() {
  try {
    if (openRuntimeWin && !openRuntimeWin.closed) {
      // already open
      openRuntimeWin.focus();
      return;
    }
  } catch (err) {
  }
  var mobj = null;
  try {
    mobj = new ActiveXObject("VisionWebControls.VWCInfo");
  } catch (err) {
    openRuntimeWin = CenterPopup("/FRH/VISION/VSINST.STM?_page=VREMAN.STM&_vnum=", 704, 400);
    return;
  }
  openRuntimeWin = CenterPopup("/FRH/VISION/VREMAN.STM", 704, 400);
}
//-->
</script>



  <!--COLD START ONLY-->
<!--Jog in Auto Mode -->


</head>
<BODY bgcolor= #FFF9e3>
${data.value}
<table width="100%" border="2">
  <tr>
  <td>
  <table width="100%" bgcolor=#FFFFCC>
  <tr>
  <td align=left valign=middle><img src="/frs/rws_left.png"></td>
  <td align=center valign=middle><strong><font color=#e60000 size=6>
                WEB SERVER</font><br>
        <font color=black size=3>
                Hostname: ROBOT<br>
                Robot No: E33151<br>
                File Name: /MD/CURPOS.DG<br>
                Date:  20/02/11
                Time: 15:40:34
        </font></strong></td>
  <td align=right valign=middle><img src="/frs/rws_rght.png"></td>
  </tr>
  </table>
  </td>
  </tr>
</table>
<PRE>
F Number: E33151
VERSION : ArcTool              
$VERSION: V7.7027      10/06/2010
DATE:     11-FEB-20 15:40 

CURRENT ROBOT POSITION::
Group #:  1
 
CURRENT JOINT POSITION:
Joint   1:     86.75
Joint   2:    -45.63
Joint   3:    -10.99
Joint   4:     56.19
Joint   5:    -81.55
Joint   6:    -94.01

Frame #:  0  Tool #:  7
CURRENT USER FRAME POSITION:
X:    622.47
Y:    836.54
Z:    328.94
W:      8.97
P:     -3.35
R:    -87.46
CFG: N U T, 0, 0, 0

Tool #:  7
CURRENT WORLD POSITION:
X:    622.47
Y:    836.54
Z:    328.94
W:      8.97
P:     -3.35
R:    -87.46
CFG: N U T, 0, 0, 0

CURRENT ROBOT POSITION::
Group #:  2
 
CURRENT JOINT POSITION:
Joint   1:     12.34

Frame #:  0  Tool #:  7
CURRENT USER FRAME POSITION:
Cartesian position cannot be calculated

Tool #:  7
CURRENT WORLD POSITION:
Cartesian position cannot be calculated

CURRENT ROBOT POSITION::
Group #:  3
 
CURRENT JOINT POSITION:
Joint   1:      1.70
Joint   2:    -90.50

Frame #:  0  Tool #:  7
CURRENT USER FRAME POSITION:
X:   1120.68
Y:      -.06
Z:      -.00
W:      -.01
P:      1.70
R:    -90.50
CFG: 

Tool #:  7
CURRENT WORLD POSITION:
X:   1120.68
Y:      -.06
Z:      -.00
W:      -.01
P:      1.70
R:    -90.50
CFG: 
</PRE>
</BODY>
</HTML>`;
    return html;
};

module.exports.status_view = status_view;