# etch-a-sketch

Understanding the problem
The task it to create an etch-a-sketch/sketchpad that players can draw on in a grid. Like an etch a sketch, anywhere they move their mouse on the pad will leave a trail of pixels behind them. The pad can be reset and the pixel size can changes so that it is either large or small pixels. 

Plan
The interface will look like a classic etch-a-sketch toy, but without the knobs, as it is controlled by a mouse instead. A slider to control grid size needs to be on the interface and also a button to reset the screen.

Pseudo code
Create grid on sketchpad with default size of 16x16 (use JS)<br>
Change pixel colours to black when hovering over to create black trail<br>
Clear sketchpad if player clicks reset button<br>
If player moves pixel size slider, update grid size and clear sketchpad<br>
