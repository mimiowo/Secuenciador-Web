class Ids {
    static idNumber = 0;
    static cellIdNumber = 0;
    static tempo = 120;
    static timing = 60000 / 120; //In milliseconds
    static stop = true;
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
                    cell[i].setAttribute('id', 'cell' + Ids.cellIdNumber);
                    Ids.cellIdNumber += 1;
                }
            break;

            case '5/4' :
                for (var i = 0; i < 5; i++) {
                    cell[i] = document.createElement('div');
                    cell[i].setAttribute('class', 'cell');
                    cell[i].setAttribute('id', 'cell' + Ids.cellIdNumber);
                    Ids.cellIdNumber += 1;
                }
            break;

            case '6/8' :
                for (var i = 0; i < 6; i++) {
                    cell[i] = document.createElement('div');
                    cell[i].setAttribute('class', 'cell');
                    cell[i].setAttribute('id', 'cell' + Ids.cellIdNumber);
                    Ids.cellIdNumber += 1;
                }
            break;

            case '7/4' :
                for (var i = 0; i < 7; i++) {
                    cell[i] = document.createElement('div');
                    cell[i].setAttribute('class', 'cell');
                    cell[i].setAttribute('id', 'cell' + Ids.cellIdNumber);
                    Ids.cellIdNumber += 1;
                }
            break;

            case '7/8' :
                for (var i = 0; i < 7; i++) {
                    cell[i] = document.createElement('div');
                    cell[i].setAttribute('class', 'cell');
                    cell[i].setAttribute('id', 'cell' + Ids.cellIdNumber);
                    Ids.cellIdNumber += 1;
                }
            break;
        }

        document.getElementById('gridToAppend').appendChild(track);
        for (var i = 0; i < cell.length; i++) {
            document.getElementById('track' + Ids.idNumber).appendChild(cell[i]);
        }
        Ids.idNumber += 1;
    });

    document.getElementById('clear').addEventListener('click', () => {
        for (var i = 0; i < Ids.idNumber; i++) {
            document.getElementById('track' + i).remove();
        }
        Ids.idNumber = 0;
        Ids.cellIdNumber = 0;
        Ids.stop = true;
        document.getElementById('play').textContent = "Play";
    });

    document.getElementById('tempo').addEventListener('click', () => {
        Ids.tempo = document.querySelector('#select-tempo').value;
        if (Ids.tempo > 300) {
            Ids.tempo = 300;
        } else if (Ids.tempo <= 0) {
            Ids.tempo = 1;
        }
        Ids.timing = 60000 / Ids.tempo;
    });

    document.getElementById('play').addEventListener('click', () => {
        if (Ids.stop) {
            Ids.stop = false;
            play(0)
            document.getElementById('play').textContent = "Stop";
        } else {
            Ids.stop = true;
            document.getElementById('play').textContent = "Play";
        }
    });

    function play(id) {
        if (Ids.stop) {
            return;
        }

        if (id > 0) {
            document.getElementById('cell' + (id - 1)).setAttribute('class', 'cell');
        }

        if (id == 0) {
            document.getElementById('cell' + (Ids.cellIdNumber - 1)).setAttribute('class', 'cell');
        }

        document.getElementById('cell' + id).setAttribute('class', 'selectedCell');

        if (id < Ids.cellIdNumber - 1) {
            setTimeout(play, Ids.timing, (id + 1));
        } else {
            setTimeout(play, Ids.timing, 0);
        }
    }
}