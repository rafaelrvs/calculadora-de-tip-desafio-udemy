function formatMoney(value) {
    /// pega o valor e aredonda 
    ///parametro para o ultimo digito
    value = Math.ceil(value * 100) / 100
    
    value = value.toFixed(2)
    return '$ ' + value 
} 

function formatSplit(value) {
    if (value == 1) return value + ' person'
    return value + ' people'
}


function update() {
    /// conversão para numero o valor recebido e pego o valor 
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value

    let tipValue = bill * (tipPercent / 100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split

    ///adicionado a função formatarMoney para apresentar duas casas decimais após a virgula

    document.getElementById('tipPercent').innerHTML = tipPercent + ' %'
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    document.getElementById('splitValue').innerHTML = formatSplit(split)
    document.getElementById('billEach').innerHTML = formatMoney(billTotal / split)
}