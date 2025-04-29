import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [vida, setVida] = useState(1000)
  const [vivo, setVivo] = useState(true)
  const [fome, setFome] = useState(100)
  const [sono, setSono] = useState(100)
  const [sede, setSede] = useState(100)
  const [banho, setBanho] = useState(100)
  const [codigo, setCodigo] = useState(100)

  // Intervalo vida
  useEffect(() => {
    const intervaloVida = setInterval(() => {
      if(vida <= 0){
        setVivo(false)
        clearInterval(intervaloVida)
        return 0
      }
      setVida((vidaAtual) => vidaAtual-1)
    }, 5000);
    return () => clearInterval(intervaloVida)
  },[vida])

  // Intervalo fome
  useEffect(() => {
    const intervaloFome = setInterval(() => {
      if(vivo){
        setFome((fomeAtual) => fomeAtual > 0 ? fomeAtual-2 : 0)
      }
    }, 3000);
    return () => clearInterval(intervaloFome)
  },[vivo])

  // Intervalo sono
  useEffect(() => {
    const intervaloSono = setInterval(() => {
      if(vivo){
        setSono((sonoAtual) => sonoAtual > 0 ? sonoAtual-1 : 0)
      }
    }, 4000);
    return () => clearInterval(intervaloSono)
  },[vivo])

  // Intervalo sede
  useEffect(() => {
    const intervaloSede = setInterval(() => {
      if(vivo){
        setSede((sedeAtual) => sedeAtual > 0 ? sedeAtual-2 : 0)
      }
    }, 3500);
    return () => clearInterval(intervaloSede)
  },[vivo])

  // Intervalo banho
  useEffect(() => {
    const intervaloBanho = setInterval(() => {
      if(vivo){
        setBanho((banhoAtual) => banhoAtual > 0 ? banhoAtual-1 : 0)
      }
    }, 6000);
    return () => clearInterval(intervaloBanho)
  },[vivo])

  // Intervalo codigo
  useEffect(() => {
    const intervaloCodigo = setInterval(() => {
      if(vivo){
        setCodigo((codigoAtual) => codigoAtual > 0 ? codigoAtual-2 : 0)
      }
    }, 4500);
    return () => clearInterval(intervaloCodigo)
  },[vivo])

  function curar(){
    if(vivo && vida < 990){
      setVida(vida + 10)
    }
  }

  function comer(){
    if(vivo && fome < 90){
      setFome(fome + 10)
    }
  }

  function dormir(){
    if(vivo && sono < 90){
      setSono(sono + 10)
    }
  }

  function beber(){
    if(vivo && sede < 90){
      setSede(sede + 10)
    }
  }

  function tomarBanho(){
    if(vivo && banho < 90){
      setBanho(banho + 10)
    }
  }

  function programar(){
    if(vivo && codigo < 90){
      setCodigo(codigo + 10)
    }
  }

  return (
    <div className='conteiner'>
      <div className='corpo'>
        <div className='topo'>
          <div className='imagem-dev'>
            <img src="dev.png" alt="Dev" />
          </div>
        </div>
        
        {vivo ? (
          <div className='stats-container'>
            <div className='stats-row'>
              <div className='stat-block'>
                <div className='stat vida'>
                  <div className='imagens'>
                    <img src="vida.png" alt="Vida" />
                  </div>
                  <div className='stat-value'>Vida: {vida}</div>
                </div>
                <button className='button vida-btn' onClick={curar}>Curar</button>
              </div>

              <div className='stat-block'>
                <div className='stat fome'>
                  <div className='imagens'>
                    <img src="comida.png" alt="Fome" />
                  </div>
                  <div className='stat-value'>Fome: {fome}</div>
                </div>
                <button className='button fome-btn' onClick={comer}>Comer</button>
              </div>
            </div>

            <div className='stats-row'>
              <div className='stat-block'>
                <div className='stat sono'>
                  <div className='imagens'>
                    <img src="dormir.png" alt="Sono" />
                  </div>
                  <div className='stat-value'>Sono: {sono}</div>
                </div>
                <button className='button sono-btn' onClick={dormir}>Dormir</button>
              </div>

              <div className='stat-block'>
                <div className='stat sede'>
                  <div className='imagens'>
                    <img src="cafe.png" alt="Sede" />
                  </div>
                  <div className='stat-value'>Sede: {sede}</div>
                </div>
                <button className='button sede-btn' onClick={beber}>Beber</button>
              </div>
            </div>

            <div className='stats-row'>
              <div className='stat-block'>
                <div className='stat banho'>
                  <div className='imagens'>
                    <img src="banho.png" alt="Banho" />
                  </div>
                  <div className='stat-value'>Banho: {banho}</div>
                </div>
                <button className='button banho-btn' onClick={tomarBanho}>Banho</button>
              </div>

              <div className='stat-block'>
                <div className='stat codigo'>
                  <div className='imagens'>
                    <img src="codigo.png" alt="Código" />
                  </div>
                  <div className='stat-value'>Código: {codigo}</div>
                </div>
                <button className='button codigo-btn' onClick={programar}>Programar</button>
              </div>
            </div>
          </div>
        ) : (
          <div className='morte'>
            <img className='img-morte' src="morte.png" alt="Dev morto" />
            <p>Seu dev morreu...</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App