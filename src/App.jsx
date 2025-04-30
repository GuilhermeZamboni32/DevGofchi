import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [vida, setVida] = useState(100)
  const [vivo, setVivo] = useState(true)
  const [fome, setFome] = useState(100)
  const [sono, setSono] = useState(100)
  const [sede, setSede] = useState(100)
  const [banho, setBanho] = useState(100)
  const [codigo, setCodigo] = useState()
  const [exercicio, setExercicio] = useState(30)
  const [causaMorte, setCausaMorte] = useState('')
  const [imagemDev, setImagemDev] = useState('dev-normal.png')
  const [Reviver, setReviver] = useState(false)

  // Efeito para diminuir vida quando fome ou sede estão baixas
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

  // Efeito para verificar infarto quando exercício está baixo
  useEffect(() => {
    const intervaloInfarto = setInterval(() => {
      if (vivo && exercicio <= 30) {
        // Gera um número aleatório entre 1 e 10
        const chance = Math.floor(Math.random() * 10) + 1;
        if (chance === 1) { // 1 em 10 de chance
          setVivo(false);
          setVida(0);
          setCausaMorte('Seu dev teve um infarto por falta de exercício!');
        }
      }
    }, 5000); // Verifica a cada 5 segundos
    return () => clearInterval(intervaloInfarto);
  }, [vivo, exercicio]);

  // Efeito para mudar a imagem baseado no sono , banho , vida e exercicio
  useEffect(() => {
    if (!vivo) return;

    if (sono <= 30) {
      setImagemDev('insonia.png');
    } else if (banho <= 30) {
      setImagemDev('sujo.png');
    } else if (vida <= 0) {
      setImagemDev('morte.png');
    } else if (exercicio <= 40) {
      setImagemDev('gordo.png');
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
  }, [sono, banho, vivo]);

  // Efeito para controlar a exibição do botão de reviver
  useEffect(() => {
    if (!vivo && !Reviver) {
      // Espera 2 segundos antes de mostrar o botão de reviver
      const timer = setTimeout(() => {
        setReviver(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [vivo, Reviver]);

  // Intervalo vida
  //useEffect(() => {
  // const intervaloVida = setInterval(() => {
  //   if(vida <= 0){
  //     setVivo(false)
  //     clearInterval(intervaloVida)
  //     return 0
  //   }
  //   setVida((vidaAtual) => vidaAtual-1)
  // }, 5000);
  // return () => clearInterval(intervaloVida)
  //},


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
    }, 5500);
    return () => clearInterval(intervaloCodigo)
  },[vivo])



  // Intervalo exercicio
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

  // Função para reviver o dev
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
    setImagemDev('dev.png');
    setMostrarReviver(false);
  }

  return (
    <div className='conteiner'>
      <div className='corpo'>
        <div className='topo'>
          <div className={`imagem-dev ${sono <= 30 ? 'sonolento' : ''} ${banho <= 30 ? 'sujo' : ''}`}>
            <img src={imagemDev} alt="Dev" />
          </div>
        </div>
        
        
          <>
            <div className='info-container'>
              <div className='corpo-vida'>
                <div className='info-vida'>
                  <div className='imagens'>
                    <img src="vida.png" alt="Vida" />
                  </div>
                  <div className='info-vida'>Vida: {vida}</div>
                </div>
              </div>

              <div className='grupo-fome-sede'>
                <div className='corpo-fome'>
                  <div className='fome'>
                    <div className='imagens'>
                      <img src="comida.png" alt="Fome" />
                    </div>
                    <div className='info-fome'>Fome: {fome}</div>
                  </div>
                </div>

                <div className='corpo-sede'>
                  <div className='sede'>
                    <div className='imagens'>
                      <img src="cafe.png" alt="Sede" />
                    </div>
                    <div className='info-sede'>Sede: {sede}</div>
                  </div>
                </div>
              </div>

              <div className='grupo-banho-sono'>
                <div className='corpo-sono'>
                  <div className='sono'>
                    <div className='imagens'>
                      <img src="dormir.png" alt="Sono" />
                    </div>
                    <div className='info-sono'>Sono: {sono}</div>
                  </div>
                </div>

                <div className='corpo-banho'>
                  <div className='banho'>
                    <div className='imagens'>
                      <img src="banho.png" alt="Banho" />
                    </div>
                    <div className='info-banho'>Banho: {banho}</div>
                  </div>
                </div>
              </div>

              <div className='grupo-codigo-exercicio'>
                <div className='corpo-codigo'>
                  <div className='codigo'>
                    <div className='imagens'>
                      <img src="codigo.png" alt="Código" />
                    </div>
                    <div className='info-codigo'>Código: {codigo}</div>
                  </div>
                </div>

                <div className='corpo-exercicio'>
                  <div className='exercicio'>
                    <div className='imagens'>
                      <img src="exercicio.png" alt="Exercício" />
                    </div>
                    <div className='info-exercicio'>Exercício: {exercicio}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='buttons-container'>
              {vivo ? (
                <>
                  {/*<button className='button-vida' onClick={curar}>Curar</button>*/}
                  <button className='button-fome' onClick={comer}>Comer</button>
                  <button className='button-sono' onClick={dormir}>Dormir</button>
                  <button className='button-sede' onClick={beber}>Beber</button>
                  <button className='button-banho' onClick={tomarBanho}>Banho</button>
                  <button className='button-codigo' onClick={programar}>Programar</button>
                  <button className='button-exercicio' onClick={fazerExercicio}>Exercitar</button>
                </>
              ) : (
                <div className="reviver-container">
                  {causaMorte && <p className="causa-morte">{causaMorte}</p>}
                  {Reviver && (
                    <button className='button-reviver' onClick={reviver}>
                      Reviver seu Dev
                    </button>
                  )}
                </div>
              )}
            </div>
          </>
       
      </div>
    </div>
  )
}

export default App