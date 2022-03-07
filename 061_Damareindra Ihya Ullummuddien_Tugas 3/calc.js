
    const tambah = () =>{
        let value1=parseFloat(document.querySelector("#value1").value);
        let value2=parseFloat(document.querySelector("#value2").value);
        let hasil = value1 + value2;
        document.calc.hasil.value=hasil;
        
    }
   const kurang = () =>{
        let value1=parseFloat(document.querySelector("#value1").value);
        let value2=parseFloat(document.querySelector("#value2").value);
        let hasil = value1 - value2;
        document.calc.hasil.value=hasil;
        
    }

    const kali = () =>{
        let value1=parseFloat(document.querySelector("#value1").value);
        let value2=parseFloat(document.querySelector("#value2").value);
        let hasil = value1 * value2;
        document.calc.hasil.value=hasil;
        
    }

    const bagi = () =>{
        let value1=parseFloat(document.querySelector("#value1").value);
        let value2=parseFloat(document.querySelector("#value2").value);
        let hasil = value1 / value2;
        document.calc.hasil.value=hasil;
        
    }

    const mod = () =>{
        let value1=parseFloat(document.querySelector("#value1").value);
        let value2=parseFloat(document.querySelector("#value2").value);
        let hasil = value1 % value2;
        document.calc.hasil.value=hasil;
        
    }

   

       

    

       