AOS.init();

const dataDoEvento = new Date("Feb 12, 2023 19:00:00")
const timeStampDoEvento = dataDoEvento.getTime()

const contaAsHoras = setInterval(function () {
    const agora = new Date()

    const timeStampAtual = agora.getTime()

    const distanciaAteEvento = timeStampDoEvento - timeStampAtual

    const diasEmMs = 1000 * 60 * 60 * 24
    const horasEmMs = 1000 * 60 * 60
    const minutosEmMs = 1000 * 60

    const diasAteOEvento = Math.floor(distanciaAteEvento / (diasEmMs))
    const horasAteOEvento = Math.floor(distanciaAteEvento % (diasEmMs) / (horasEmMs))
    const minutosAteOEvento = Math.floor(distanciaAteEvento % (horasEmMs) / (minutosEmMs))
    const segundosAteOEvento = Math.floor(distanciaAteEvento % (minutosEmMs) / 1000)
    console.log(diasAteOEvento)
    console.log(horasAteOEvento)
    console.log(minutosAteOEvento)
    console.log(segundosAteOEvento)
    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`


    if (distanciaAteEvento < 0) {
        clearInterval(contaAsHoras)

        document.getElementById('contador').innerHTML = 'Evento Expirado'
    }

}, 1000)

