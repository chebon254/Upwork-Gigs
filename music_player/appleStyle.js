function applyAppleStyle() {
    const plyer = document.getElementById("player");

    const controlsWrap = document.createElement("div");
    controlsWrap.setAttribute("id", "controls_wrap");

    const controlsWrapTop = document.createElement("div");
    controlsWrapTop.setAttribute("id", "controls_wrap_top");

    const controlsWrapBottom = document.createElement("div");
    controlsWrapBottom.setAttribute("id", "controls_wrap_bottom");

    const controlsWrapTopRightSide = document.createElement("div");
    controlsWrapTopRightSide.setAttribute("id", "controls_wrap_top_right_side");


    const controlsWrapTopCenter = document.createElement("div");
    controlsWrapTopCenter.setAttribute("id", "controls_wrap_top_center");


    const playerControls = document.getElementById("player").children[0];



    for (var i = 0; playerControls.children.length > 0; i++) {
        if (i == 4 || i == 5) {
            controlsWrapBottom.appendChild(playerControls.children[0]);
        }
        else if (i == 0) {
            controlsWrapTop.appendChild(playerControls.children[5]);
        } else if (i == 1 || i == 2 || i == 3) {
            controlsWrapTopCenter.appendChild(playerControls.children[0]);
        }
        else {
            controlsWrapTopRightSide.appendChild(playerControls.children[0]);
        }
    }

    controlsWrapTop.appendChild(controlsWrapTopCenter);
    controlsWrapTop.appendChild(controlsWrapTopRightSide);


    controlsWrap.appendChild(controlsWrapBottom);
    controlsWrap.appendChild(controlsWrapTop);
    plyer.appendChild(controlsWrap);

}