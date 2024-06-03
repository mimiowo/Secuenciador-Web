class Ids {
    static idNumber = 0;
}


window.onload = function() {
    document.getElementById('bar').addEventListener('click', () => {
        selectElement = document.querySelector('#select-signature');
        const selectedSignature = selectElement.value;
        var track = document.createElement('div');
        track.setAttribute('id', 'track' + Ids.idNumber);
        track.setAttribute('class', 'track');
        var cell = new Array(4);
    
        switch (selectedSignature) {
            case '4/4' :
                for (var i = 0; i < 4; i++) {
                    cell[i] = document.createElement('div');
                    cell[i].setAttribute('class', 'cell');
                }
            break;

            case '5/4' :
                for (var i = 0; i < 5; i++) {
                    cell[i] = document.createElement('div');
                    cell[i].setAttribute('class', 'cell');
                }
            break;

            case '6/8' :
                for (var i = 0; i < 6; i++) {
                    cell[i] = document.createElement('div');
                    cell[i].setAttribute('class', 'cell');
                }
            break;

            case '7/4' :
                for (var i = 0; i < 7; i++) {
                    cell[i] = document.createElement('div');
                    cell[i].setAttribute('class', 'cell');
                }
            break;

            case '7/8' :
                for (var i = 0; i < 7; i++) {
                    cell[i] = document.createElement('div');
                    cell[i].setAttribute('class', 'cell');
                }
            break;
        }

        document.getElementById('gridToAppend').appendChild(track);
        for (var i = 0; i < cell.length; i++) {
            document.getElementById('track' + Ids.idNumber).appendChild(cell[i]);
        }
        Ids.idNumber += 1;
    });
}