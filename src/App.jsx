/**imagens paga usar
 * dev-normal.png --imagem inicial ou codigo entre 79 a 50
 * dev-feliz.png --codigo acima de 80
 * dev-bravo.png --codigo entre de 49 a 20
 * dev-muito-bravo.png --codigo entre 19 a 0
 * dev-sujo.png -- banho estiver abaixo de 45
 * dev-sonolento.png -- sono abaixo de 45
 * dev-gordo.png -- exercicio abaixo de 45
 * dev-gordo-sonolento.png -- exercicio e sono abaixo de 45
 * dev-morto.png -- vida igual a 0 ou morte por ataque cardiaco
 * 
 */


import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [vida, setVida] = useState(100)
  const [vivo, setVivo] = useState(true)
  const [fome, setFome] = useState(100)
  const [sono, setSono] = useState(100)
  const [sede, setSede] = useState(100)
  const [banho, setBanho] = useState(100)
<<<<<<< HEAD
  const [codigo, setCodigo] = useState()
=======
  const [codigo, setCodigo] = useState(100)
>>>>>>> 163620e307293dbb5ba99788eb399fabc11434a9
  const [exercicio, setExercicio] = useState(100)
  const [causaMorte, setCausaMorte] = useState('')
  const [imagemDev, setImagemDev] = useState('dev-normal.png')
  const [mostrarReviver, setMostrarReviver] = useState(false)



  // Efeito para diminuir vida quando fome ou sede estão baixas  #######################################################
  useEffect(() => {
    const intervaloPerdaVida = setInterval(() => {
      if (vivo && (fome < 40 || sede < 40)) {
        setVida(vidaAtual => {
          const novaVida = vidaAtual - 5;
          if (novaVida <= 0) {
            setVivo(false);
            return 0;
          }
          return novaVida;
        });
      }
    }, 2000);
    return () => clearInterval(intervaloPerdaVida);
  }, [vivo, fome, sede]);



  // Efeito para aumentar a vida se fome e sede estiverem altas   #######################################################
useEffect(() => {
  const intervaloAumentoVida = setInterval(() => {
    if (vivo && vida < 100 && fome > 70 && sede > 70) {
      setVida((vidaAtual) => (vidaAtual + 1 > 100 ? 100 : vidaAtual + 1));
    }
  }, 1000);
  return () => clearInterval(intervaloAumentoVida);
}, [vivo, vida, fome, sede]);



  // Efeito para verificar infarto quando exercício está baixo   #######################################################
  useEffect(() => {
    const intervaloInfarto = setInterval(() => {
      if (vivo && exercicio <= 30) {
        const chance = Math.floor(Math.random() * 10) + 1;
        if (chance === 1) { 
          setVivo(false);
          setVida(0);
          setCausaMorte('Seu dev teve um infarto por falta de exercício!');
        }
      }
    }, 5000); 
    return () => clearInterval(intervaloInfarto);
  }, [vivo, exercicio]);



  // Efeito para mudar a imagem do dev   #######################################################
  useEffect(() => {
    if (!vivo) {
      setImagemDev('dev-morto.png');
      return;
    }
    if (sono <= 30 && banho <= 30) {
      setImagemDev('dev-gordo-sonolento.png');
    } else if (sono <= 30) {
      setImagemDev('dev-sonolento.png');
    } else if (banho <= 30) {
      setImagemDev('dev-sujo.png');
    } else if (exercicio <= 40) {
      setImagemDev('dev-gordo.png');
    } else if (codigo >= 70) {
      setImagemDev('dev-feliz.png');
    } else if (codigo > 30 && codigo <= 69) {
      setImagemDev('dev-normal.png');
    } else if (codigo > 5 && codigo <= 29) {
      setImagemDev('dev-bravo.png');
    } else if (codigo <= 5) {
      setImagemDev('dev-muito-bravo.png');
    } else {
      setImagemDev('dev-normal.png');
    }
  }, [sono, banho, vivo, exercicio, codigo]);



  // Efeito para controlar a exibição do botão de reviver   #######################################################
  useEffect(() => {
    if (!vivo && !mostrarReviver) {
      const timer = setTimeout(() => {
        setMostrarReviver(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [vivo, mostrarReviver]);



  /* Intervalo vida    ##############################################################################################################
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
  },*/



  // Intervalo fome   #####################################################################################################
  useEffect(() => {
    const intervaloFome = setInterval(() => {
      if(vivo){
        setFome((fomeAtual) => fomeAtual > 0 ? fomeAtual-2 : 0)
      }
    }, 3000);
    return () => clearInterval(intervaloFome)
  },[vivo])



  // Intervalo sono  #########################################################################################################
  useEffect(() => {
    const intervaloSono = setInterval(() => {
      if(vivo){
        setSono((sonoAtual) => sonoAtual > 0 ? sonoAtual-1 : 0)
      }
    }, 4000);
    return () => clearInterval(intervaloSono)
  },[vivo])



  // Intervalo sede   #########################################################################################################
  useEffect(() => {
    const intervaloSede = setInterval(() => {
      if(vivo){
        setSede((sedeAtual) => sedeAtual > 0 ? sedeAtual-2 : 0)
      }
    }, 3500);
    return () => clearInterval(intervaloSede)
  },[vivo])



  // Intervalo banho   ######################################################################################################
  useEffect(() => {
    const intervaloBanho = setInterval(() => {
      if(vivo){
        setBanho((banhoAtual) => banhoAtual > 0 ? banhoAtual-1 : 0)
      }
    }, 6000);
    return () => clearInterval(intervaloBanho)
  },[vivo])



  // Intervalo codigo    ######################################################################################################
  useEffect(() => {
    const intervaloCodigo = setInterval(() => {
      if(vivo){
        setCodigo((codigoAtual) => codigoAtual > 0 ? codigoAtual-2 : 0)
      }
    }, 5500);
    return () => clearInterval(intervaloCodigo)
  },[vivo])



  // Intervalo exercicio    ##################################################################################################
  useEffect(() => {
    const intervaloExercicio = setInterval(() => {
      if(vivo){
        setExercicio((exercicioAtual) => exercicioAtual > 0 ? exercicioAtual-2 : 0)
      }
    }, 5000);
    return () => clearInterval(intervaloExercicio)
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

  function fazerExercicio(){
    if(vivo && exercicio < 90){
      setExercicio(exercicio + 10)
    }
  }

  // Função para reviver o dev    #######################################################
  function reviver() {
    setVivo(true);
    setVida(100);
    setFome(100);
    setSono(100);
    setSede(100);
    setBanho(100);
    setCodigo(100);
    setExercicio(100);
    setCausaMorte('');
    setImagemDev('dev-normal.png');
    setMostrarReviver(false);
  }

  return (
    <div className='conteiner'>
      <div className='corpo'>
        <div className='topo'>
          <div className='imagem-dev'>
            <img src={imagemDev} alt="Dev" />
          </div>
        </div>
        
        {vivo ? (
          <>
            <div className='info-container'>
              <div className='stat-card vida'>
                <div className='stat-icon'>
                  <img src="vida.png" alt="Vida" />
                </div>
                <div>Vida: {vida}</div>
              </div>

              <div className='stats-grid'>
                <div className='stat-card fome'>
                  <div className='stat-icon'>
                    <img src="comida.png" alt="Fome" />
                  </div>
                  <div>Fome: {fome}</div>
                </div>

                <div className='stat-card sede'>
                  <div className='stat-icon'>
                    <img src="cafe.png" alt="Sede" />
                  </div>
                  <div>Sede: {sede}</div>
                </div>

                <div className='stat-card sono'>
                  <div className='stat-icon'>
                    <img src="dormir.png" alt="Sono" />
                  </div>
                  <div>Sono: {sono}</div>
                </div>

                <div className='stat-card banho'>
                  <div className='stat-icon'>
                    <img src="banho.png" alt="Banho" />
                  </div>
                  <div>Banho: {banho}</div>
                </div>

                <div className='stat-card codigo'>
                  <div className='stat-icon'>
                    <img src="codigo.png" alt="Código" />
                  </div>
                  <div>Código: {codigo}</div>
                </div>

                <div className='stat-card exercicio'>
                  <div className='stat-icon'>
                    <img src="exercicio.png" alt="Exercício" />
                  </div>
                  <div>Exercício: {exercicio}</div>
                </div>
              </div>
            </div>

            <div className='buttons-container'>
              <button className='button-fome' onClick={comer}>Comer</button>
              <button className='button-sono' onClick={dormir}>Dormir</button>
              <button className='button-sede' onClick={beber}>Beber</button>
              <button className='button-banho' onClick={tomarBanho}>Banho</button>
              <button className='button-codigo' onClick={programar}>Programar</button>
              <button className='button-exercicio' onClick={fazerExercicio}>Exercitar</button>
            </div>
          </>
        ) : (
          <div className='morte'>
            <p>{causaMorte || 'Seu dev morreu...'}</p>
            {mostrarReviver && (
              <button className='button-reviver' onClick={reviver}>
                Reviver
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default App