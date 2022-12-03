const calculate = () => {
    const n1 = document.getElementById("number1").value
    const n2 = document.getElementById("number2").value
    if (!n1 || !n2) {
        alert('Помилка синтаксису. Перевірте введені дані.')   
    }
    const operation = document.querySelector('select').value
    const stRing = `${n1} ${operation} ${n2}`
    const z = eval(stRing)
    document.getElementById("result").value = z
    window.onerror = function () {
        08.
        alert('Помилка синтаксису. Перевірте введені дані.')
        09.
    }
}

const clearInput = () => {
    document.getElementById("number1").value = ''
    document.getElementById("number2").value = ''
    document.getElementById("result").value = ''
}