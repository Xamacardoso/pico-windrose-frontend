# RP2040 Real-Time Dashboard com Flask WebSocket e Frontend em HTML/CSS/JS

Este projeto implementa um ecossistema IoT em nuvem, no qual um microcontrolador RP2040 (Raspberry Pi Pico W) envia dados via HTTP para uma API Flask, que retransmite essas informações em tempo real para este frontend hospedado separadamente, utilizando WebSockets.

## 🔧 Tecnologias Utilizadas

- **RP2040 (Raspberry Pi Pico W)** – Envia os dados dos botões e joystick.
- **Flask (Python)** – Backend com suporte a WebSocket via Flask-SocketIO.
- **WebSockets (Socket.IO)** – Comunicação em tempo real com o frontend.
- **Frontend Vanilla (HTML, CSS, JavaScript)** – Interface dinâmica e interativa.
- **Hospedagem** – Backend e frontend hospedados separadamente

## 📡 Funcionalidade

- O **RP2040 envia via HTTP** os seguintes dados:
  - Estado dos botões A e B
  - Posição X/Y do joystick analógico
  - Temperatura do sensor interno

- O servidor **Flask** recebe os dados e os **envia para o frontend por WebSocket**.

- O frontend exibe:
  - Estado dos botões
  - Coordenadas X/Y do joystick
  - Temperatura do sensor interno do RP2040
  - Timestamp da ultima atualização
  - **Bússola visual interativa indicando a direção do joystick**

## 📂 Estrutura

```

├── index.html      # Página web base
├── style.css       # Estilização e elementos da bússola
└── script.js       # Scripts para controle do websocket e da exibilçao de informações
```



## 📲 Envio de dados pelo RP2040

O RP2040 pode enviar requisições HTTP para o backend Flask como:

```
{
	"btn_a": true,
	"btn_b": true,
	"joystick_x": 55,
	"joystick_y": 55,
	"temp": 36.5
}
```

## 🧭 Interface

A bússola é renderizada com HTML/CSS puro, com agulha rotativa baseada na direção do joystick recebida. Indicadores visuais mostram também o estado dos botões A e B e o valor da temperatura do sensor interno do RP2040.

---

## 💡 Possíveis melhorias

* Autenticação simples via token
* Logs de dados e histórico
* Suporte a múltiplos dispositivos conectados

---

## 📜 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
