const socket = io("https://flask-websocket-api-production.up.railway.app/");

const direcoes = {
    "Norte": 0,
    "Nordeste": 45,
    "Leste": 90,
    "Sudeste": 135,
    "Sul": 180,
    "Sudoeste": 225,
    "Oeste": 270,
    "Noroeste": 315
}

const iniciaisDirecoes = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']

const needle = document.getElementById('needle');
const direcoesBussola = document.getElementById('compass-directions');

function atualizarBussola(direcao){
    let angulo = direcoes[direcao] ?? 0;
    needle.style.transform = `translate(-50%, -90%) rotate(${angulo}deg)`;
}

function atualizarInformacoesRecebidas(data) {
    let direcao = calcularDirecao(data.joystick_x, data.joystick_y);

    document.getElementById("btnA").textContent = data.btn_a ? "Pressionado" : "Solto";
    document.getElementById("btnB").textContent = data.btn_b ? "Pressionado" : "Solto";
    document.getElementById("joyX").textContent = data.joystick_x;
    document.getElementById("joyY").textContent = data.joystick_y;
    document.getElementById("temp").textContent = Number(data.temp).toFixed(2) + "° C";

    document.getElementById("direction").textContent = direcao;
    document.getElementById("timestamp").textContent = data.timestamp;
    
    atualizarBussola(direcao);
}

function calcularDirecao(x, y) {
    if (x > 66 && y > 66) return "Nordeste";
    if (x > 66 && y < 33) return "Sudeste";
    if (x < 33 && y > 66) return "Noroeste";
    if (x < 33 && y < 33) return "Sudoeste";
    if (x > 66) return "Leste";
    if (x < 33) return "Oeste";
    if (y > 66) return "Norte";
    if (y < 33) return "Sul";
    return "Centro";
}

const chavesDirecoes = Object.keys(direcoes)
for (let i = 0; i < chavesDirecoes.length; i++){
    // Wrapper para rotacionar corretamente o indicador de direcao
    const wrapper = document.createElement('div');
    wrapper.className = 'direction-wrapper'
    wrapper.style.transform = `rotate(${direcoes[chavesDirecoes[i]]}deg)`

    // Indicador de direcao
    const novaDir = document.createElement('span');
    novaDir.className = 'direction-label'
    novaDir.textContent = iniciaisDirecoes[i];
    novaDir.style.transform = `rotate(-${direcoes[chavesDirecoes[i]]}deg)`

    wrapper.appendChild(novaDir);
    direcoesBussola.appendChild(wrapper);
}

socket.on("update", (data) => {
    atualizarInformacoesRecebidas(data);
    console.log("Recebido:", data);
    
});

