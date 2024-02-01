const fetchCepData = async (cep) => {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      if (!response.ok) {
        throw new Error('Não foi possível obter os dados do CEP.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error.message);
      return null; 
    }
  };
  
  export default fetchCepData;
  