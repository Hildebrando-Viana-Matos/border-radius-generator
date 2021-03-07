function insertValue() {
    let valueTopRight = document.getElementById("valueTopRight").value;
    let valueTopLeft = document.getElementById("valueTopLeft").value;
    let valueBottomLeft = document.getElementById("valueBottomLeft").value;
    let valueBottomRight = document.getElementById("valueBottomRight").value;
    let box = document.getElementById("box");

    if(valueTopRight == ''){
        valueTopRight = 0;
    }
    if(valueTopLeft == ''){
        valueTopLeft = 0;
    }
    if(valueBottomLeft == ''){
        valueBottomLeft = 0;
    }
    if(valueBottomRight == ''){
        valueBottomRight = 0;
    }

    box.style.cssText =
    `border-radius: ${valueTopRight}px ${valueTopLeft}px ${valueBottomLeft}px ${valueBottomRight}px ;`;

    document.getElementById("borderNormal").innerHTML = `border-radius: ${valueTopRight}px ${valueTopLeft}px ${valueBottomLeft}px ${valueBottomRight}px;`;
    document.getElementById("borderWebKit").innerHTML = `-webkit-border-radius: ${valueTopRight}px ${valueTopLeft}px ${valueBottomLeft}px ${valueBottomRight}px;`;
    document.getElementById("borderMoz").innerHTML = `-moz-border-radius: ${valueTopRight}px ${valueTopLeft}px ${valueBottomLeft}px ${valueBottomRight}px;`;
}
