import { useState } from 'react'
import styles from './FormCalculadora.module.css'

function FormCalculadora() {
    const [res, setRES] = useState('')
    const [N1, setN1] = useState('')
    const [N2, setN2] = useState('')
    const [operacao, setOperacao] = useState('+')

    function limpar() {
        setN1('')
        setN2('')
        setRES('')
        setOperacao('+')
    }

    function calcular(e) {
        if (e) e.preventDefault()

        if (N1 === '' || N2 === '') {
            alert("Atenção! Todos os campos são obrigatórios.")
            return
        }

        const num1 = parseFloat(N1.replace(',', '.'))
        const num2 = parseFloat(N2.replace(',', '.'))

        if (isNaN(num1) || isNaN(num2)) {
            alert("Por favor, informe números válidos.")
            return
        }

        let resultadoCalculado = 0

        switch (operacao) {
            case '+':
                resultadoCalculado = num1 + num2
                break
            case '-':
                resultadoCalculado = num1 - num2
                break
            case '*':
                resultadoCalculado = num1 * num2
                break
            case '/':
                if (num2 === 0) {
                    alert('Não é possível dividir por 0!')
                    return
                }
                resultadoCalculado = num1 / num2
                break
            default:
                return
        }

        setRES(`Resultado: ${resultadoCalculado}`)
    }

    return (
        <div>
            <form className={styles.formContainer} onSubmit={calcular}>
                <h2>Calculadora Simples</h2>

                <div className={styles.peso}>
                    <input
                        type="text"
                        name="N1"
                        id="N1"
                        placeholder="Informe o primeiro número..."
                        value={N1}
                        onChange={(e) => setN1(e.target.value)}
                    />
                </div>

                <div className={styles.altura}>
                    <input
                        type="text"
                        name="N2"
                        id="N2"
                        placeholder="Informe o segundo número..."
                        value={N2}
                        onChange={(e) => setN2(e.target.value)}
                    />
                </div>

                <div className={styles.btn}>
                    <select value={operacao} onChange={(e) => setOperacao(e.target.value)}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                    </select>

                    <button type="submit">=</button>
                    <button type="button" onClick={limpar}>Limpar</button>
                </div>

                <div className={styles.resultado}>
                    <p>{res}</p>
                </div>
            </form>
        </div>
    )
}

export default FormCalculadora