import './index.css';
function Botao1({onClick}) {
  return (
    <div className='btn'>
    <button className='btn-1' onClick={onClick}></button>
    </div>
  );
}

export default Botao1;
